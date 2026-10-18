import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '../components/Icons.jsx'
import Icon3D from '../components/Icons3D.jsx'
import Reveal from '../components/Reveal.jsx'
import Approach from '../components/Approach.jsx'
import Tilt from '../components/Tilt.jsx'
import CountUp from '../components/CountUp.jsx'
import { Faq, Triad, Typologies, WhyStrip } from '../components/Blocks.jsx'
import { IMG, SERVICES, PROJECTS, STATS, PROCESS, PHILOSOPHY } from '../data.js'

// hero slideshow: a large exterior paired with a small interior, changing together
const HERO_SLIDES = [
  { main: '/media/hero-main.jpg', side: '/media/hero-side.jpg' },
  { main: '/media/hero-main-2.jpg', side: '/media/hero-side-2.jpg' },
  { main: '/media/hero-main-3.jpg', side: '/media/hero-side-3.jpg' },
  { main: '/media/hero-main-4.jpg', side: '/media/hero-side-4.jpg' },
]
const SLIDE_MS = 4500

const Arrow = () => <Icon name="arrow" size={20} />
const Dot = () => <span className="dot">.</span>

export default function Home({ onQuote }) {
  const [slide, setSlide] = useState(0)
  const { hash } = useLocation()

  // advance automatically; picking a dot restarts the wait from that slide
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setSlide((i) => (i + 1) % HERO_SLIDES.length), SLIDE_MS)
    return () => clearTimeout(t)
  }, [slide])

  // the home hero is light, so the navbar needs its dark-text style from the top
  useEffect(() => {
    document.body.classList.add('is-light-hero')
    return () => document.body.classList.remove('is-light-hero')
  }, [])

  // navbar links like /#process land on their section
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
      {/* HERO */}
      <section className="hx section--grid">
        <i className="sq" style={{ top: '12%', right: '2.6%' }} />
        <i className="sq" style={{ top: '46%', right: '2.6%' }} />
        <i className="sq" style={{ top: '70%', left: '2.6%' }} />
        <div className="container hx-grid">
          <div className="hx-copy">
            <span className="eyebrow">Architecture + Design</span>
            <h1>
              We don’t just<br />design buildings.<br />We <strong>capture spaces.</strong>
            </h1>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-dark btn-lg">Explore Our Work <Arrow /></Link>
              <button className="btn btn-outline-dark btn-lg" onClick={onQuote}>Start a Project <Arrow /></button>
            </div>
            <Triad className="triad--hero" />
          </div>

          <div className="hx-stage">
            <span className="vlabel vlabel--stage" aria-hidden="true">Featured Project</span>
            <div className="hx-main hx-slides">
              {HERO_SLIDES.map((sl, i) => (
                <img key={sl.main} className={i === slide ? 'on' : ''} src={sl.main} alt="" />
              ))}
            </div>
            <div className="hx-side hx-slides">
              {HERO_SLIDES.map((sl, i) => (
                <img key={sl.side} className={i === slide ? 'on' : ''} src={sl.side} alt="" />
              ))}
            </div>
            <div className="hx-chip">
              <strong>50+</strong>
              <span>Architecture &amp; interior projects</span>
            </div>
            <div className="hx-tag"><Icon name="pin" size={18} />Chennai, Tamil Nadu</div>
            <div className="hx-dots">
              {HERO_SLIDES.map((sl, i) => (
                <button
                  key={sl.main}
                  className={i === slide ? 'on' : ''}
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* NUMBERS */}
        <div className="container">
          <Reveal variant="up" className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-icon"><Icon name={s.icon} size={26} /></span>
                <div>
                  <div className="stat-value">
                    {s.end ? <CountUp end={s.end} suffix={s.suffix} /> : s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </Reveal>
          <p className="motto"><span>Thoughtful spaces. Meaningful living.</span></p>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section section--grid about-x">
        <span className="vlabel vlabel--left" aria-hidden="true">About Us</span>
        <i className="sq" style={{ top: '10%', right: '8%' }} />
        <Triad className="triad--corner triad--bottom" />
        <div className="container about-x-grid">
          <Reveal variant="left" className="about-x-media">
            <img src={IMG.about} alt="Residential architecture by INQ SPACE" />
            <div className="exp-badge">
              <span className="exp-num">6+</span>
              <span className="exp-text">Years of<br />Experience</span>
            </div>
          </Reveal>
          <Reveal variant="right" className="split-copy">
            <span className="kicker">About INQ SPACE</span>
            <h2>Designing smarter.<br />Building <strong>better</strong><Dot /></h2>
            <p>
              INQ SPACE is an architecture and design studio led by Architect Ajeeth
              Elancheziyan, bringing together architectural thinking, spatial
              planning, interior design and execution expertise.
            </p>
            <p>
              With 6+ years of professional experience and involvement in 50+
              architectural and interior projects across Tamil Nadu, our approach is
              rooted in one simple belief:
            </p>
            <blockquote className="pull-quote">
              Good architecture is not about adding more. It is about making more
              out of what you already have.
            </blockquote>
            <Link to="/about" className="btn btn-dark btn-lg">More About Us <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      <Typologies />

      {/* PHILOSOPHY */}
      <section className="section section--grid">
        <i className="sq" style={{ top: '8%', left: '9%' }} />
        <Triad className="triad--corner" />
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Our Philosophy</span>
            <h2>Every site has <strong>potential</strong><Dot /></h2>
            <p className="section-lead">
              A small plot is not a limitation. An existing building is not always a
              problem. A difficult site does not necessarily require an expensive
              solution.
            </p>
          </Reveal>
          <div className="value-grid">
            {PHILOSOPHY.map((v, i) => (
              <Reveal variant="up" delay={i * 100} className="value-card" key={v.title}>
                <div className="value-media">
                  <img className="value-sketch" src={v.image} alt="" />
                  <Icon3D name={v.icon} />
                </div>
                <span className="rule rule--sm" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--grid" id="process">
        <i className="sq" style={{ top: '9%', left: '9.5%' }} />
        <i className="sq" style={{ bottom: '8%', right: '1.5%' }} />
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Our Process</span>
            <h2>From understanding<br />to <strong>building</strong><Dot /></h2>
          </Reveal>
          <div className="process-grid five">
            {PROCESS.map((p, i) => (
              <Reveal variant="up" delay={i * 90} className="process-step" key={p.no}>
                <div className="process-head">
                  <span className="process-no">{p.no}</span>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.desc}</p>
                <span className="card-arrow"><Arrow /></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <Approach />

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Our Services</span>
            <h2>Design. Detail.<br />Coordinate. Execute.</h2>
          </Reveal>
          <div className="service-grid two">
            {SERVICES.map((s, i) => (
              <Reveal variant="up" delay={(i % 2) * 110} key={s.title}>
                <Tilt>
                  <div className="service-card service-card--photo">
                    <div className="service-photo">
                      <img src={s.image} alt={`${s.title} by INQ SPACE`} loading="lazy" />
                    </div>
                    <span className="service-icon"><Icon name={s.icon} size={26} /></span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <Link to="/services" className="link-arrow">
                      Learn More <Icon name="arrowUpRight" size={16} />
                    </Link>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED EXPERIENCE */}
      <section className="section section--muted">
        <div className="container">
          <div className="section-head between">
            <Reveal variant="left">
              <span className="kicker">Selected Experience</span>
              <h2>Projects across Chennai<br />and Tamil Nadu</h2>
            </Reveal>
            <Reveal variant="right" as={Link} to="/projects" className="btn btn-dark hide-mobile">
              All Projects
            </Reveal>
          </div>
          <div className="project-grid">
            {PROJECTS.slice(1, 4).map((p, i) => (
              <Reveal variant="up" delay={i * 120} key={p.title}>
                <Tilt max={7}>
                  <Link to="/projects" className="project-card">
                    <div className="project-img" style={{ backgroundImage: `url(${p.image})` }} />
                    <div className="project-meta">
                      <span className="project-cat">{p.category}</span>
                      <h3>{p.title}</h3>
                      <span className="project-loc">{p.scope}</span>
                      <span className="btn btn-outline-dark btn-sm project-view">
                        View Project <Icon name="arrow" size={16} />
                      </span>
                    </div>
                    <span className="project-go"><Icon name="arrowUpRight" size={18} /></span>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyStrip />

      <Faq count={5} muted onAsk={onQuote} />

      {/* CTA */}
      <section className="cta" style={{ backgroundImage: `url(${IMG.cta})` }}>
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <Reveal variant="zoom" as="h2">
            Have a site in mind?
          </Reveal>
          <Reveal variant="up" delay={140} as="p">
            Whether you are planning a home, transforming an existing property,
            developing a residential project or creating a commercial space, we would
            love to understand what you are trying to build. Tell us about your
            project.
          </Reveal>
          <Reveal variant="up" delay={260}>
            <button className="btn btn-primary btn-lg" onClick={onQuote}>Start a Conversation</button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
