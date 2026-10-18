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

## Deploy (GitHub Pages → https://inqspace.in)

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages. `public/CNAME` holds the custom domain.

`npm run build` also runs `scripts/static-routes.mjs`, which writes `about.html`, `services.html`,
`projects.html`, `contact.html` and `404.html` — each with its own title, description and canonical
URL — so every page opens directly and is readable by search engines.

The live address is `VITE_SITE_URL` in `.env`; `public/robots.txt`, `public/sitemap.xml` and
`public/CNAME` use the same domain.

## Project layout

- `src/pages/` — Home, About, Services, Projects, Contact
- `src/components/` — navbar, footer, logo, shared sections
- `src/data.js` — studio details, services, projects and other copy
- `src/seo-pages.js` — page titles and descriptions; `src/seo.js` applies them as you navigate
- `public/brand/` — official INQ SPACE logo artwork
- `public/media/` — site photography and illustrations
# INQ-SPACE
