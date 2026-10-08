# sebastiancepeda.com

Personal profile site of Sebastian Cepeda, Executive Producer in Zürich.
Plain static HTML, no build step. Hosted on Cloudflare Workers: every push to `main` deploys the `site/` folder (see `wrangler.jsonc`).

| URL | Page |
|---|---|
| `/` | Home, English |
| `/de/` | Home, Deutsch |
| `/privacy/` | Privacy policy |
| `/de/datenschutz/` | Datenschutzerklärung |

- Styles: `site/assets/site.css` · Script (DE/EN texts, project cards, video player): `site/assets/site.js`
- Videos: `site/video/<name>/` as HLS (H.264 1080p, 6-second segments, so no file exceeds Cloudflare’s 25 MB limit), posters as `site/video/<name>.jpg`. Played with the self-hosted `site/hls.light.min.js`; Safari plays HLS natively.
- Headers and redirects: `site/_headers`, `site/_redirects`
- Fonts are self-hosted in `site/fonts/` (no Google Fonts), no cookies, no local storage.
- Email and phone are not in the HTML; they are assembled by JavaScript when a visitor clicks “Show”.
