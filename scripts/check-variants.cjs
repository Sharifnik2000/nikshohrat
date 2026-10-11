const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4178/';
const root = path.resolve(__dirname, '..');
const site = path.join(root, 'create-a-premium-personal-portfolio-website');
const upwork = 'https://www.upwork.com/freelancers/~01335d34afd4d84e67?mp_source=share';

async function main() {
  for (const file of ['script.js', 'image-assets.js']) {
    assert.equal(await fs.readFile(path.join(site, file), 'utf8'),
      await fs.readFile(path.join(site, 'upwork', file), 'utf8'), `${file} drifted`);
  }
  await fs.mkdir(path.join(root, '.qa'), { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    for (const width of [375, 390, 430, 768, 820, 1024, 1440]) {
      let mainContent;
      for (const variant of ['', 'upwork/']) {
        const context = await browser.newContext({
          viewport: { width, height: 1000 },
          reducedMotion: 'reduce',
          deviceScaleFactor: width < 768 ? 2 : 1,
        });
        const page = await context.newPage();
        const errors = [];
        const requests = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('request', request => requests.push(request.url()));
        page.on('response', response => {
          if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
        });
        await page.goto(new URL(variant, base).href, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator('[data-project]').count(), 7);
        assert(!requests.some(url => /-full\.|-thumb\.|contact-[^/]+\.webp/.test(url)), 'Hidden images loaded on startup');
        assert(!requests.some(url => /\.(png|otf)(?:\?|$)/.test(url)), 'Unoptimized image or font loaded');

        const content = await page.locator('main').evaluate(main => {
          const clone = main.cloneNode(true);
          clone.querySelectorAll('.book-button').forEach(button => button.remove());
          return clone.textContent.replace(/\s+/g, ' ').trim();
        });
        if (!variant) mainContent = content;
        else assert.equal(content, mainContent, 'Portfolio content differs between versions');
        assert(content.includes('already smell your brand.'));
        assert(content.includes('Brandon Bevins'));
        assert(content.includes('Mulberry Street'));
        const name = await page.locator('.brand-mark').boundingBox();
        const clock = await page.locator('#localTime').boundingBox();
        if (width <= 820) {
          assert(Math.abs(name.y + name.height / 2 - clock.y - clock.height / 2) < 2, 'Clock must align with name');
          assert(name.x + name.width <= clock.x, 'Name and clock overlap');
        }
        if (variant) {
          assert.equal(await page.locator('#contactModal, [data-open-contact]').count(), 0);
          const external = await page.locator('a[href]').evaluateAll(links =>
            links.map(link => link.getAttribute('href')).filter(href => !href.startsWith('#')));
          assert.equal(external.length, 3);
          assert(external.every(href => href === upwork));
          const headerLink = await page.locator('.upwork-link').boundingBox();
          assert(headerLink.height >= 44);
          if (width <= 820) assert(headerLink.y >= name.y + name.height);
        } else {
          await page.locator('.intro-book').click();
          const links = await page.locator('#contactModal a').evaluateAll(links => links.map(link => link.href));
          assert.equal(links.length, 4);
          assert(links.some(href => href.startsWith('https://wa.me/4581913288')));
          assert(links.some(href => href.startsWith('mailto:sharif@nikshohrat.com')));
          assert(links.includes(upwork));
          assert(links.includes('https://calendar.app.google/YGfscLyRi5fq3q7C6'));
          await page.keyboard.press('Shift+Tab');
          assert.equal(await page.evaluate(() => document.activeElement.closest('#contactModal')?.id), 'contactModal');
          await page.keyboard.press('Tab');
          assert.equal(await page.locator('.contact-close').evaluate(button => button === document.activeElement), true);
          await page.keyboard.press('Escape');
          assert.equal(await page.locator('.intro-book').evaluate(button => button === document.activeElement), true);
        }

        await page.locator('[data-project]').first().click();
        await page.locator('#modalImage').evaluate(image => image.decode());
        await page.keyboard.press('Shift+Tab');
        assert.equal(await page.evaluate(() => document.activeElement.closest('#caseModal')?.id), 'caseModal');
        if (width === 390 || width === 1440) {
          await page.screenshot({ path: path.join(root, '.qa', `${variant ? 'upwork' : 'main'}-gallery-${width}.png`) });
        }
        await page.keyboard.press('Escape');
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
        assert.deepEqual(errors, []);
        console.log(`${width}px /${variant}: content, contact links, mobile header, focus, assets and overflow passed`);
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
