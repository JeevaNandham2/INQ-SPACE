# INQ-SPACE-ARCH

Website for **INQ SPACE** — an architecture and interior design studio in Chennai
(Architecture / Interiors / Execution).

Built with React 18 + Vite 5 and React Router.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # production files in dist/
npm run preview    # serve the built site locally
```

## Deploy

Live domain: **https://inqspace.in** (set in `.env` as `VITE_SITE_URL`, and in
`public/robots.txt` and `public/sitemap.xml`).

- **Netlify** — `netlify.toml` holds the build command (`npm run build`), the publish folder (`dist`)
  and the rewrite that lets routes like `/about` open directly.
- **Hostinger web hosting** — run `npm run build` and upload the *contents* of `dist/` to `public_html`.
  `public/.htaccess` (copied into `dist/`) forces https, drops `www` and handles the routes.

## Project layout

- `src/pages/` — Home, About, Services, Projects, Contact
- `src/components/` — navbar, footer, logo, shared sections
- `src/data.js` — studio details, services, projects and other copy
- `src/seo.js` — page titles and descriptions for search engines
- `public/brand/` — official INQ SPACE logo artwork
- `public/media/` — site photography and illustrations
