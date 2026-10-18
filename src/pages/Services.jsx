import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import { Faq } from '../components/Blocks.jsx'
import { IMG, SERVICES, PROCESS, DEVELOPER_SCOPE, SERVICE_FIT, SITE_ANALYSIS } from '../data.js'

export default function Services({ onQuote }) {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Our Services"
        subtitle="Architecture, interiors, design-led execution and independent design consultancy."
        image={IMG.servicesBanner}
      />

      {/* SERVICES DETAIL */}
      <section className="section">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">What We Do</span>
            <h2>Design. Detail.<br />Coordinate. Execute.</h2>
          </Reveal>
          <div className="service-grid two">
            {SERVICES.map((s, i) => (
              <Reveal
                variant={i % 2 === 0 ? 'left' : 'right'}
                delay={(i % 2) * 90}
                className="service-card detail"
                key={s.title}
              >
                <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="service-icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-list-label">{s.listLabel}</span>
                <ul className="service-points">
                  {s.points.map((p) => (
                    <li key={p}><Icon name="check" size={16} /> {p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHICH SERVICE FITS */}
      <section className="section section--muted">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Which One Fits</span>
            <h2>Execution or consultancy?</h2>
            <p className="section-lead">
              Both start with the same design thinking. The difference is who coordinates
              the construction.
            </p>
          </Reveal>
          <div className="service-grid two">
            {SERVICE_FIT.map((f, i) => (
              <Reveal variant={i === 0 ? 'left' : 'right'} className="service-card detail" key={f.title}>
                <span className="service-icon"><Icon name={f.icon} size={26} /></span>
                <h3>{f.title}</h3>
                <p>{f.lead}</p>
                <ul className="service-points one-col">
                  {f.points.map((p) => (
                    <li key={p}><Icon name="check" size={16} /> {p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SMART SPACE PLANNING */}
      <section className="section">
        <div className="container split">
          <Reveal variant="left" className="split-media">
            <img src={IMG.planning} alt="Compact, well-planned interior" />
          </Reveal>
          <Reveal variant="right" className="split-copy">
            <span className="kicker">Smart Space Planning</span>
            <h2>More value from the <em>same space</em>.</h2>
            <p>
              One of our core strengths is extracting maximum potential from
              challenging and compact sites.
            </p>
            <p>
              We analyse circulation, setbacks, natural light, ventilation, furniture
              planning and usable area before developing the architecture.
            </p>
            <p>
              This approach has allowed us to design everything from compact
              20’ × 24’ Pocket Homes to larger residences and commercial environments.
            </p>
            <span className="study-label">What we analyse first</span>
            <ul className="tag-list">
              {SITE_ANALYSIS.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <blockquote className="pull-quote">Small site. Smart plan. Better living.</blockquote>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--muted">
        <div className="container">
          <Reveal variant="up" className="section-head center">
            <span className="kicker">Our Process</span>
            <h2>From understanding to building</h2>
          </Reveal>
          <div className="process-grid five">
            {PROCESS.map((p, i) => (
              <Reveal variant="up" delay={i * 100} className="process-step" key={p.no}>
                <span className="process-no">{p.no}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOR DEVELOPERS */}
      <section className="section">
        <div className="container split split--top">
          <Reveal variant="left" className="split-copy">
            <span className="kicker">For Developers</span>
            <h2>Better planning can create <em>better value</em>.</h2>
            <p>
              For developers and landowners, architectural planning directly affects
              the commercial potential of a project.
            </p>
            <blockquote className="pull-quote">
              We help developers get more value from the same land.
            </blockquote>
          </Reveal>
          <Reveal variant="right" className="split-copy">
            <p>INQ SPACE works with developers to explore:</p>
            <ul className="tag-list">
              {DEVELOPER_SCOPE.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <Faq muted onAsk={onQuote} />

      {/* CTA */}
      <section className="cta cta--solid">
        <div className="container cta-inner">
          <Reveal variant="zoom" as="h2">Have a site in mind?</Reveal>
          <Reveal variant="up" delay={120} as="p">
            We would love to understand what you are trying to build. Tell us about
            your project.
          </Reveal>
          <Reveal variant="up" delay={240}>
            <button className="btn btn-primary btn-lg" onClick={onQuote}>Start a Conversation</button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
