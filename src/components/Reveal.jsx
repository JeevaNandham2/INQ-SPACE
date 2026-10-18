import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-triggered reveal wrapper.
 * variant: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
 *   left  -> slides in from the left (moving to the right)
 *   right -> slides in from the right (moving to the left)
 * delay: ms of stagger. once: animate only the first time (default true).
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  once = true,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) obs.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
