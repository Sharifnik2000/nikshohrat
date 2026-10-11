"""Build marketplace-only pages from the main portfolio. No third-party packages."""
import argparse
from html import escape
from html.parser import HTMLParser
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "create-a-premium-personal-portfolio-website"
PLATFORMS = {
    "upwork": ("Upwork", "https://www.upwork.com/freelancers/~01335d34afd4d84e67?mp_source=share"),
    "fiverr": ("Fiverr", "https://www.fiverr.com/s/zAAlZ8K"),
}


class MarketplacePage(HTMLParser):
    def __init__(self, source, platform):
        super().__init__(convert_charrefs=False)
        self.platform = platform
        self.label, self.url = PLATFORMS[platform]
        self.source = source
        self.lines = source.splitlines(keepends=True)
        self.edits = []
        self.contact_start = None
        self.contact_depth = 0
        self.button = None
        self.buttons = 0
        self.modals = 0
        self.navs = 0

    def source_offset(self):
        line, column = self.getpos()
        return sum(map(len, self.lines[:line - 1])) + column

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        start = self.source_offset()
        if self.contact_depth:
            if tag == "div":
                self.contact_depth += 1
            return
        if attrs.get("id") == "contactModal":
            if tag != "div":
                raise ValueError("Expected contact modal wrapper to be a div")
            line_start = start - self.getpos()[1]
            self.contact_start = line_start if not self.source[line_start:start].strip() else start
            self.contact_depth = 1
            return
        if tag == "button" and "data-open-contact" in attrs:
            self.button = (start, attrs.get("class", ""))
        if tag == "nav" and "nav-links" in attrs.get("class", "").split():
            replacement = (
                '<nav class="nav-links" aria-label="Professional profile and local time">'
                f'\n        <a class="{self.platform}-link" href="{self.url}" '
                f'target="_blank" rel="noreferrer">{self.label}</a>'
            )
            self.edits.append((start, start + len(self.get_starttag_text()), replacement))
            self.navs += 1

    def handle_endtag(self, tag):
        start = self.source_offset()
        end = self.source.index(">", start) + 1
        if self.contact_depth:
            if tag == "div":
                self.contact_depth -= 1
                if self.contact_depth == 0:
                    self.edits.append((self.contact_start, end, ""))
                    self.modals += 1
            return
        if tag == "button" and self.button is not None:
            button_start, classes = self.button
            replacement = (
                f'<a class="{escape(classes, quote=True)}" href="{self.url}" '
                'target="_blank" rel="noreferrer">Book a call</a>'
            )
            self.edits.append((button_start, end, replacement))
            self.button = None
            self.buttons += 1

    def render(self):
        self.feed(self.source)
        self.close()
        if (self.navs, self.buttons, self.modals) != (1, 2, 1) or self.contact_depth:
            raise ValueError("Contact structure changed; review the marketplace transformation before publishing")
        result = self.source
        for start, end, replacement in sorted(self.edits, reverse=True):
            result = result[:start] + replacement + result[end:]
        return result


def build_variant(platform):
    label, _ = PLATFORMS[platform]
    target = SITE / platform
    markup = MarketplacePage((SITE / "index.html").read_text(encoding="utf-8"), platform).render()
    assets = [p for p in (SITE / "assets" / "optimized").rglob("*")
              if p.suffix in {".webp", ".woff2"}]
    if not assets:
        raise ValueError("Missing optimized images and fonts")
    target.mkdir(exist_ok=True)
    (target / "index.html").write_text(markup, encoding="utf-8", newline="\n")
    styles = (SITE / "styles.css").read_text(encoding="utf-8")
    styles += f"""
/* Only the {label} variant has a header link below the brand on mobile. */
@media (max-width: 820px) {{
  .site-nav {{
    grid-template-areas: "brand time" "{platform} .";
  }}
  .{platform}-link {{
    grid-area: {platform};
    justify-self: start;
  }}
}}
"""
    (target / "styles.css").write_text(styles, encoding="utf-8", newline="\n")
    for name in ("script.js", "image-assets.js"):
        shutil.copy2(SITE / name, target / name)
    for source in assets:
        destination = target / source.relative_to(SITE)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
    print(f"Synced /{platform}/: same portfolio, {label}-only contact, {len(assets)} optimized assets")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--variant", choices=[*PLATFORMS, "all"], default="upwork")
    args = parser.parse_args()
    for platform in PLATFORMS if args.variant == "all" else [args.variant]:
        build_variant(platform)


if __name__ == "__main__":
    main()
