# Sharif Nikshohrat Portfolio

This repository publishes one static website with two entry points:

| URL path | Version | Contact behavior |
| --- | --- | --- |
| `/` | Main portfolio | Popup with WhatsApp, email, Upwork, and Google Calendar |
| `/upwork/` | Upwork portfolio | Header and both booking links go directly to Upwork; no contact popup |

Both versions contain the same current projects, reviews, galleries, and interactions.
Use the main address for general clients and append `/upwork/` when sharing the Upwork version.

## Hosting

The existing `wrangler.jsonc` at repository root publishes
`create-a-premium-personal-portfolio-website/` through Cloudflare Workers static assets.
Its configuration has not changed. There is no need for another repository, domain,
GitHub Pages configuration, or second deployment.

Updating a branch or opening a pull request does not change `main`.
After reviewing and merging the pull request, verify the connected Cloudflare build
and deployment succeeds. If automatic builds are not configured, deploy this repository
using the existing Cloudflare project. A merge alone does not prove the website is live.

## Updating Both Versions

1. Edit the main files inside `create-a-premium-personal-portfolio-website/`.
2. Include any new images in its optimized asset map (`image-assets.js`) and asset folder.
3. From the repository root, run:

   ```sh
   python scripts/sync-upwork.py
   ```

4. Commit the main files **and** the regenerated `upwork/` files in the same change.

Do not manually maintain separate project/review copies in `upwork/`; the sync command
preserves those from the main page and changes only contact behavior and header layout.
It uses Python's standard library, with no package installation or website build needed.

## Performance

- Responsive WebP previews and small gallery thumbnails.
- Full-resolution lossless gallery images load only when the lightbox opens.
- Contact icons load only after opening the contact popup.
- Local WOFF2 fonts and deferred scripts.
- `_headers` applies long-lived caching to content-hashed images/fonts in both versions,
  while HTML, CSS, and JavaScript revalidate to pick up updates.
- Original images already in the repository remain available but are not downloaded by
  the current pages. Local browser profiles, screenshots, and private working files are
  not part of this update.

## Local Preview

Run from the repository root:

```sh
python -m http.server 4178 --bind 127.0.0.1 --directory create-a-premium-personal-portfolio-website
```

Open `http://127.0.0.1:4178/` and `http://127.0.0.1:4178/upwork/`.
The basic Python server does not emulate Cloudflare's `_headers` cache rules.
