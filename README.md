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

## Deploy (Netlify)

`netlify.toml` already holds the settings: build command `npm run build`, publish folder `dist`,
and a rewrite so routes like `/about` work when opened directly.

The live address is set in `.env` (`VITE_SITE_URL`). If the site moves to its own domain,
update it there and in `public/robots.txt` and `public/sitemap.xml`, then rebuild.

## Project layout

- `src/pages/` — Home, About, Services, Projects, Contact
- `src/components/` — navbar, footer, logo, shared sections
- `src/data.js` — studio details, services, projects and other copy
- `src/seo.js` — page titles and descriptions for search engines
- `public/brand/` — official INQ SPACE logo artwork
- `public/media/` — site photography and illustrations
