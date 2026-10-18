/**
 * GitHub Pages serves plain files, so after `vite build` this writes a real HTML file for
 * every page (dist/about.html, ... — Pages serves /about from about.html with no redirect). Each one already carries that page's own title,
 * description and canonical URL, so links open directly with a 200 response and search
 * engines read the right details even before JavaScript runs. 404.html covers unknown paths.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { PAGES } from '../src/seo-pages.js'

const dist = new URL('../dist/', import.meta.url)
const html = readFileSync(new URL('index.html', dist), 'utf8')
const site = (html.match(/<link rel="canonical" href="([^"]*)\/"/) || [])[1] || ''

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function pageHtml(path) {
  const { title, description } = PAGES[path]
  const url = `${site}${path === '/' ? '/' : path}`
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(description)}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(title)}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(description)}"`)
}

for (const path of Object.keys(PAGES)) {
  writeFileSync(new URL(path === '/' ? 'index.html' : `.${path}.html`, dist), pageHtml(path))
}
// unknown paths: same app, which falls back to the home page; told not to be indexed
writeFileSync(new URL('404.html', dist), pageHtml('/').replace('content="index, follow, max-image-preview:large"', 'content="noindex"'))
console.log(`static routes: ${Object.keys(PAGES).join(', ')} + 404.html`)
