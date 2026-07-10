# Sebastian Cepeda — Personal Site

A minimalist one-page portfolio for a producer / executive producer. Built with
[Astro](https://astro.build). No framework overhead, ships as static HTML/CSS.

## Edit your content

**Everything you'll want to change lives in one file:**
[`src/data/content.ts`](src/data/content.ts) — your bio, services, projects,
companies, clients, email and social links.

Design tokens (colours, fonts) live at the top of
[`src/styles/global.css`](src/styles/global.css).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # output in dist/
npm run preview  # preview the production build
```

## Deploy (free)

Both configs are already included — pick one:

- **Vercel** — import the repo at [vercel.com/new](https://vercel.com/new). It
  auto-detects Astro. Nothing else to configure.
- **Netlify** — connect the repo, or drag the `dist/` folder onto
  [app.netlify.com/drop](https://app.netlify.com/drop). Build settings are in
  `netlify.toml`.

Then add your custom domain in the dashboard when you're ready.

## To personalise next

- Swap the wordmark client list for real logos (drop SVGs in `public/` and
  render them in the Clients section).
- Add project poster images / a showreel to the Selected Work section.
- Add `og-image.jpg` to `public/` for nicer link previews.
