import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const PRINCIPLES = [
  { icon: 'spark', text: 'Spaces with natural light.' },
  { icon: 'ruler', text: 'Spaces with good proportions.' },
  { icon: 'sofa', text: 'Spaces that are easy to live in.' },
  { icon: 'tree', text: 'Spaces that respond to their surroundings.' },
  { icon: 'check', text: 'And most importantly — spaces that make sense.', key: true },
]

/**
 * "Our Approach" — a dark feature band. The heading stays pinned while the five
 * principles scroll past; whichever one crosses the middle of the screen lights up,
 * the counter follows it and the red rail fills down the list.
 */
export default function Approach() {
  const list = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const items = [...list.current.querySelectorAll('.apx-item')]
    // a thin band across the middle of the viewport decides which principle is "current"
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.i))),
      { rootMargin: '-46% 0px -46% 0px' },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const no = (i) => String(i + 1).padStart(2, '0')

  return (
    <section className="apx" aria-labelledby="apx-title">
      <div className="container apx-grid">
        <Reveal variant="up" className="apx-head">
          <span className="kicker">Our Approach</span>
          <h2 id="apx-title">
            Less unnecessary design.<br />More <strong>meaningful</strong> architecture<span className="dot">.</span>
          </h2>
          <p className="apx-lead">We are interested in spaces that age well.</p>
          <div className="apx-counter" aria-hidden="true">
            <span className="apx-counter-now" key={active}>{no(active)}</span>
            <span className="apx-counter-total">/ {no(PRINCIPLES.length - 1)}</span>
          </div>
        </Reveal>

        <ol className="apx-list" ref={list} style={{ '--fill': (active + 1) / PRINCIPLES.length }}>
          {PRINCIPLES.map((p, i) => (
            <li
              key={p.text}
              data-i={i}
              className={`apx-item ${i === active ? 'is-active' : ''} ${i < active ? 'is-past' : ''} ${p.key ? 'apx-item--key' : ''}`}
            >
              <span className="apx-no">{no(i)}</span>
              <p className="apx-text">{p.text}</p>
              <span className="apx-icon"><Icon name={p.icon} size={24} /></span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
