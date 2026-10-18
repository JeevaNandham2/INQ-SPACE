import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import { KeywordBand, WhyStrip } from '../components/Blocks.jsx'
import { IMG, STATS, PHILOSOPHY, STUDIO, AUDIENCE, STUDY } from '../data.js'

const APPROACH = [
  'Spaces with natural light.',
  'Spaces with good proportions.',
  'Spaces that are easy to live in.',
  'Spaces that respond to their surroundings.',
]

export default function About({ onQuote }) {
  return (
    <>
      <PageHero
        eyebrow="About INQ SPACE"
        title="About INQ SPACE"
        subtitle="Designing smarter. Building better."
        image={IMG.aboutBanner}
      />

      {/* STORY */}
      <section className="section">
        <div className="container split">
          <Reveal variant="left" className="split-media stacked">
            <img className="img-main" src={IMG.about} alt="INQ SPACE project" />
            <img className="img-float" src={IMG.about2} alt="Design detail" />
          </Reveal>
          <Reveal variant="right" className="split-copy">
            <span className="kicker">About INQ SPACE</span>
            <h2>Designing smarter. Building <em>better</em>.</h2>
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
            <p>
              We work closely with homeowners, developers and businesses to
              understand the site, identify its possibilities and transform
              limitations into meaningful design opportunities.
            </p>
            <p>
              From a 480 sq.ft pocket home to villas, commercial spaces, experience
              centres and adaptive reuse projects, every project is approached with
              the same attention to planning, proportion, functionality and detail.
            </p>
            <p className="split-question">God lives in detail.</p>
            <div className="mini-stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <KeywordBand />

      {/* WHO WE WORK WITH */}
      <section className="section">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Who We Work With</span>
            <h2>Homeowners, developers<br />and businesses</h2>
            <p className="section-lead">
              We work closely with each client to understand the site, identify its
              possibilities and transform limitations into meaningful design opportunities.
            </p>
          </Reveal>
          <div className="service-grid">
            {AUDIENCE.map((a, i) => (
              <Reveal variant="up" delay={i * 110} className="service-card" key={a.title}>
                <span className="service-icon"><Icon name={a.icon} size={26} /></span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section--muted">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Our Philosophy</span>
            <h2>Every site has potential.</h2>
            <p className="section-lead">
              At INQ SPACE, we study space, movement, light, ventilation, proportion,
              usability and construction practicality before arriving at the design.
              Our goal is to create architecture that feels simple, performs
              efficiently and continues to make sense long after the project is
              completed.
            </p>
          </Reveal>
          <div className="value-grid">
            {PHILOSOPHY.map((v, i) => (
              <Reveal variant="up" delay={i * 100} className="value-card" key={v.title}>
                <span className="service-icon"><Icon name={v.icon} size={26} /></span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" className="study">
            <span className="study-label">What we study before we design</span>
            <ul className="tag-list">
              {STUDY.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <WhyStrip />

      {/* APPROACH */}
      <section className="section">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Our Approach</span>
            <h2>Less unnecessary design.<br />More <em>meaningful</em> architecture.</h2>
            <p className="section-lead">We are interested in spaces that age well.</p>
          </Reveal>
          <Reveal variant="up" className="approach-list">
            <ul className="checks">
              {APPROACH.map((a) => (
                <li key={a}><Icon name="check" size={18} /> {a}</li>
              ))}
            </ul>
            <p className="approach-close">
              And most importantly— <strong>spaces that make sense.</strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta cta--solid">
        <div className="container cta-inner">
          <Reveal variant="zoom" as="h2">Have a site in mind?</Reveal>
          <Reveal variant="up" delay={120} as="p">Tell us about your project.</Reveal>
          <Reveal variant="up" delay={240} className="hero-cta center">
            <button className="btn btn-primary btn-lg" onClick={onQuote}>Start a Conversation</button>
            <Link to="/projects" className="btn btn-outline-light btn-lg">Explore Our Work</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
