/**
 * Per-page title, description and canonical URL, so each page shows up
 * in Google with its own heading and summary rather than the home page's.
 */
import { PAGES } from './seo-pages.js'

const SITE = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '')


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
