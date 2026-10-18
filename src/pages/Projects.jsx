import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import CountUp from '../components/CountUp.jsx'
import { Typologies } from '../components/Blocks.jsx'
import { IMG, PROJECTS, PROJECT_CATEGORIES, STATS } from '../data.js'

export default function Projects({ onQuote }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        eyebrow="Selected Experience"
        title="Projects"
        subtitle="Our architectural journey includes projects across Chennai and other parts of Tamil Nadu, covering residential architecture and interiors."
        image={IMG.projectsBanner}
      />

      <section className="section">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Selected Experience</span>
            <h2>Homes and <strong>interiors</strong><span className="dot">.</span></h2>
            <p className="section-lead">
              A selection from 50+ architectural and interior projects — from a compact
              pocket home to villas and residential interiors. Filter by the kind of work.
            </p>
          </Reveal>
          <Reveal variant="up" className="filter-bar">
            {PROJECT_CATEGORIES.map((c) => (
              <button
                key={c}
                className={`filter-chip ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </Reveal>

          {/* key on `active` remounts cards so they re-animate on each filter change */}
          <div className="project-grid three" key={active}>
            {filtered.map((p, i) => (
              <Reveal variant="up" delay={i * 90} key={p.title}>
                <div className="project-card">
                  <div className="project-img" style={{ backgroundImage: `url(${p.image})` }} />
                  <div className="project-meta">
                    <span className="project-cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <span className="project-loc">{p.scope}</span>
                  </div>
                  <span className="project-go"><Icon name="arrowUpRight" size={18} /></span>
                </div>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && <p className="empty">No projects in this category yet.</p>}
        </div>
      </section>

      {/* NUMBERS */}
      <section className="container numbers-band">
        <Reveal variant="up" className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-icon"><Icon name={s.icon} /></span>
              <div>
                <div className="stat-value">{s.end ? <CountUp end={s.end} suffix={s.suffix} /> : s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* FEATURED PROJECT */}
      <section className="section section--muted">
        <div className="container split">
          <Reveal variant="left" className="split-media">
            <img src={IMG.pocketHome} alt="The Pocket Home — compact residential design" />
          </Reveal>
          <Reveal variant="right" className="split-copy">
            <span className="kicker">Featured Project</span>
            <h2>The <em>Pocket Home</em></h2>
            <p className="split-question">20’ × 24’ / 480 sq.ft.</p>
            <p>
              Can a 480 sq.ft footprint feel like a complete home? That question
              became the starting point for one of our compact residential
              explorations.
            </p>
            <p>
              Through careful zoning, circulation planning, furniture integration,
              light and ventilation, we developed a home where every square foot
              performs a purpose.
            </p>
            <blockquote className="pull-quote">
              A better home does not always require a bigger plot. It requires a
              better plan.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* TRANSFORMATION PROJECT */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal variant="left" className="split-copy">
            <span className="kicker">Transformation Project</span>
            <h2>From godown to <em>home</em></h2>
            <p className="split-question">2,400 sq.ft. adaptive reuse</p>
            <p>
              The challenge was an existing godown with almost no meaningful natural
              light or ventilation. Instead of treating the existing structure as a
              limitation, we redesigned the internal planning to introduce better
              circulation, daylight and ventilation while responding to the family’s
              functional and Vastu requirements.
            </p>
            <p>
              The result was the transformation of an industrial shell into a
              comfortable residential environment.
            </p>
            <blockquote className="pull-quote">
              We don’t always need a new building. Sometimes we need a new way of
              seeing the existing one.
            </blockquote>
          </Reveal>
          <Reveal variant="right" className="split-media">
            <img src={IMG.godown} alt="Godown converted into a residence" />
          </Reveal>
        </div>
      </section>

      <Typologies muted />

      <section className="cta cta--solid">
        <div className="container cta-inner">
          <Reveal variant="zoom" as="h2">Have a site in mind?</Reveal>
          <Reveal variant="up" delay={120} as="p">Tell us about your project.</Reveal>
          <Reveal variant="up" delay={240}>
            <button className="btn btn-primary btn-lg" onClick={onQuote}>Start a Project</button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
