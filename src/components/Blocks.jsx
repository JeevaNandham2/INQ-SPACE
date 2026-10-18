import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import Icon3D from './Icons3D.jsx'
import { FAQS, KEYWORDS, TYPOLOGIES, WHY } from '../data.js'

/** Animated mouse outline that invites the visitor to scroll. */
export function ScrollMouse({ light = false }) {
  return (
    <div className={`scroll-mouse ${light ? 'scroll-mouse--light' : ''}`} aria-hidden="true">
      <span className="scroll-mouse-body"><span className="scroll-mouse-wheel" /></span>
      <span className="scroll-mouse-label">Scroll</span>
    </div>
  )
}

/** Large keyword strip that slides sideways as the page scrolls. */
export function KeywordBand({ words = KEYWORDS }) {
  // repeated so the strip is always wider than the screen
  const items = [...words, ...words, ...words]
  return (
    <div className="band" aria-hidden="true">
      <div className="band-track">
        {items.map((w, i) => (
          <span key={i}>{w}<i /></span>
        ))}
      </div>
    </div>
  )
}

/** Small "Spaces / People / Purpose" stack with a red rule, used as a corner mark. */
export function Triad({ className = '' }) {
  return (
    <ul className={`triad ${className}`.trim()} aria-hidden="true">
      <li>Spaces</li><li>People</li><li>Purpose</li>
    </ul>
  )
}

/** "What we design" grid of project types. */
export function Typologies({ muted = false }) {
  return (
    <section className={`section section--grid ${muted ? 'section--muted' : ''}`}>
      <span className="vlabel vlabel--left" aria-hidden="true">Our Project Types</span>
      <Triad className="triad--corner" />
      <div className="container">
        <Reveal variant="up" className="section-head center">
          <span className="kicker">What We Design</span>
          <h2>From a 480 sq.ft pocket home<br />to villas and <strong>workplaces</strong><span className="dot">.</span></h2>
          <p className="section-lead">
            Every project is approached with the same attention to planning, proportion,
            functionality and detail.
          </p>
        </Reveal>
        <div className="type-grid">
          {TYPOLOGIES.map((t, i) => (
            <Reveal variant="up" delay={(i % 3) * 110} key={t.title}>
              <Link to="/projects" className="type-card">
                <div className="type-head">
                  <span className="type-icon"><Icon name={t.icon} size={26} /></span>
                  <h3>{t.title}</h3>
                  <span className="type-no">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p>{t.desc}</p>
                <span className="card-arrow"><Icon name="arrow" size={24} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Accordion of frequently asked questions. `count` limits how many are shown. */
export function Faq({ count = FAQS.length, muted = false, onAsk }) {
  const [open, setOpen] = useState(0)
  return (
    <section className={`section ${muted ? 'section--muted' : ''}`}>
      <div className="container faq-wrap">
        <Reveal variant="up" className="faq-intro">
          <span className="kicker">Questions</span>
          <h2>Things people ask <em>before we begin</em></h2>
          <p>
            Every site and brief is different. If your question is not here, tell us
            about your project and we will answer it directly.
          </p>
          {onAsk && <button className="btn btn-primary" onClick={onAsk}>Ask Us Directly</button>}
        </Reveal>
        <div className="faq-list">
          {FAQS.slice(0, count).map((f, i) => (
            <Reveal variant="up" delay={i * 70} className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="faq-toggle"><Icon name="arrow" size={18} /></span>
              </button>
              <div className="faq-a"><div><p>{f.a}</p></div></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** "Why INQ SPACE" — the five reasons as a strip of cards that drifts sideways and pauses on hover. */
export function WhyStrip({ muted = true }) {
  const card = (w, i, hidden) => (
    <li className="why-strip-card" key={`${hidden ? 'b' : 'a'}${i}`} aria-hidden={hidden || undefined}>
      <Icon3D name={w.icon} className="icon3d--inline" />
      <div>
        <span className="why-strip-no">{String(i + 1).padStart(2, '0')}</span>
        <h3>{w.title}</h3>
        <p>{w.desc}</p>
      </div>
    </li>
  )
  return (
    <section className={`section why-strip-section ${muted ? 'section--muted' : ''}`}>
      <div className="container">
        <Reveal variant="up" className="section-head center">
          <span className="kicker">Why INQ SPACE</span>
          <h2>God lives in <strong>detail</strong><span className="dot">.</span></h2>
        </Reveal>
      </div>
      <Reveal variant="fade" className="why-strip">
        {/* the list is drawn twice so the loop is seamless; the copy is hidden from screen readers */}
        <ul className="why-strip-track">
          {WHY.map((w, i) => card(w, i, false))}
          {WHY.map((w, i) => card(w, i, true))}
        </ul>
      </Reveal>
    </section>
  )
}
