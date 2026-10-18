import { useRef } from 'react'

/**
 * Interactive 3D tilt wrapper. Tracks the pointer and rotates the card in 3D.
 * Children with the classes below get parallax depth (see CSS .tilt ... translateZ):
 *   pointer moves -> --rx / --ry CSS vars update -> card rotates.
 * Disabled on touch / coarse-pointer devices and for reduced-motion users.
 */
export default function Tilt({ children, className = '', max = 9, ...rest }) {
  const ref = useRef(null)

  const enabled = () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const onMove = (e) => {
    const el = ref.current
    if (!el || !enabled()) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (0.5 - py) * max * 2
    const ry = (px - 0.5) * max * 2
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...rest}
    >
      {children}
    </div>
  )
}
