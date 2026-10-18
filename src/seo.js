/**
 * Per-page title, description and canonical URL, so each page shows up
 * in Google with its own heading and summary rather than the home page's.
 */
const SITE = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '')

const PAGES = {
  '/': {
    title: 'INQ SPACE — Architects & Interior Designers in Chennai',
    description:
      'INQ SPACE is a Chennai-based architecture and interior design studio led by Architect Ajeeth Elancheziyan. Homes, villas, compact plots and interiors — designed, detailed and executed.',
  },
  '/about': {
    title: 'About INQ SPACE — Architecture Studio in Chennai',
    description:
      'Meet INQ SPACE: 6+ years of practice and 50+ architecture and interior projects across Tamil Nadu. Our philosophy, approach and why clients work with us.',
  },
  '/services': {
    title: 'Services — Architecture, Interiors, Design + Execution | INQ SPACE',
    description:
      'Architecture, interior design, design + execution and design consultancy in Chennai — from concept and 3D visualisation to GFC drawings, BOQs and site coordination.',
  },
  '/projects': {
    title: 'Projects — Homes & Interiors in Chennai | INQ SPACE',
    description:
      'Selected residential architecture and interior projects by INQ SPACE across Chennai and Tamil Nadu, including the 480 sq.ft Pocket Home.',
  },
  '/contact': {
    title: 'Contact INQ SPACE — Start Your Project in Chennai',
    description:
      'Talk to INQ SPACE about your home, villa, interior or renovation. Call or WhatsApp +91 72996 75654, or send your project details online.',
  },
}

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function applySeo(pathname) {
  const page = PAGES[pathname] || PAGES['/']
  const url = `${SITE}${pathname === '/' ? '/' : pathname}`
  document.title = page.title
  setMeta('meta[name="description"]', 'content', page.description)
  setMeta('link[rel="canonical"]', 'href', url)
  setMeta('meta[property="og:url"]', 'content', url)
  setMeta('meta[property="og:title"]', 'content', page.title)
  setMeta('meta[property="og:description"]', 'content', page.description)
  setMeta('meta[name="twitter:title"]', 'content', page.title)
  setMeta('meta[name="twitter:description"]', 'content', page.description)
}
