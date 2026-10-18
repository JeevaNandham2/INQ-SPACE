/**
 * Hides the logo splash from index.html once the logo animation has played
 * and the page (hero images, fonts) has loaded — or after a hard cap, so a slow
 * image can never keep the site hidden.
 */
// the logo finishes drawing at ~2.2s; it then holds, complete, for about 1.4s before the site appears
const MIN_MS = 3600
const MAX_MS = 5500

export function hideSplash() {
  const splash = document.getElementById('splash')
  if (!splash) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const wait = (ms) => new Promise((r) => setTimeout(r, Math.max(0, ms - performance.now())))
  const loaded = new Promise((r) => {
    if (document.readyState === 'complete') r()
    else window.addEventListener('load', r, { once: true })
  })

  Promise.race([Promise.all([loaded, wait(reduced ? 500 : MIN_MS)]), wait(MAX_MS)]).then(() => {
    splash.classList.add('is-done')
    document.body.classList.remove('is-loading')
    setTimeout(() => splash.remove(), 1000)
  })
}
