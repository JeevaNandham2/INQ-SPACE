import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import { LogoArtwork } from '../components/Logo.jsx'
import { Faq } from '../components/Blocks.jsx'
import { IMG, SERVICES, STUDIO, BRIEF_CHECKLIST, PROCESS } from '../data.js'

const INFO = [
  { icon: 'pin', title: 'Visit Us', lines: [{ text: STUDIO.address[0] }, { text: STUDIO.address[1] }] },
  {
    icon: 'phone',
    title: 'Call / WhatsApp',
    lines: [
      { text: STUDIO.phone, href: STUDIO.phoneHref },
      { text: 'WhatsApp: Project Enquiries', href: STUDIO.whatsappHref },
    ],
  },
  { icon: 'mail', title: 'Email Us', lines: [{ text: STUDIO.email, href: STUDIO.emailHref }] },
  {
    icon: 'users',
    title: 'Follow Us',
    lines: [{ text: `Instagram: ${STUDIO.instagram}` }, { text: `LinkedIn: ${STUDIO.linkedin}` }],
  },
]

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), 'Developer Project']
const EMPTY_FORM = { name: '', email: '', phone: '', service: SERVICE_OPTIONS[0], message: '' }

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // the enquiry goes to the studio's WhatsApp as a ready-to-send message
  const whatsappLink = () => {
    const lines = [
      '*New project enquiry — INQ SPACE website*',
      '',
      `*Name:* ${form.name.trim()}`,
      `*Email:* ${form.email.trim()}`,
      form.phone.trim() ? `*Phone:* ${form.phone.trim()}` : null,
      `*Service:* ${form.service}`,
      '',
      '*Project details:*',
      form.message.trim(),
    ].filter((l) => typeof l === 'string')
    return `${STUDIO.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  const submit = (e) => {
    e.preventDefault()
    window.open(whatsappLink(), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Contact"
        subtitle="For project enquiries, get in touch with our studio."
        image={IMG.contactBanner}
      />

      <section className="section">
        <div className="container contact-grid">
          {/* INFO */}
          <Reveal variant="left" className="contact-info">
            <span className="kicker">{STUDIO.tagline}</span>
            <h2>Have a site in mind?</h2>
            <p className="muted">
              Whether you are planning a home, transforming an existing property,
              developing a residential project or creating a commercial space, we
              would love to understand what you are trying to build.
            </p>
            <div className="info-cards">
              {INFO.map((i) => (
                <div className="info-card" key={i.title}>
                  <span className="info-icon"><Icon name={i.icon} size={20} /></span>
                  <div>
                    <h4>{i.title}</h4>
                    {i.lines.map((l) =>
                      l.href
                        ? <a key={l.text} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l.text}</a>
                        : <span key={l.text}>{l.text}</span>,
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* NAME BOARD */}
            <div className="nameboard">
              <LogoArtwork height={210} />
              <div className="nameboard-legal">{STUDIO.legalName}</div>
              <p>
                {STUDIO.address.join(', ')}.
                <br />
                Phone No. <a href={STUDIO.phoneHref}>{STUDIO.phone}</a>
              </p>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal variant="right" className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <span className="popup-check"><Icon name="check" size={30} /></span>
                <h3>Almost done, {form.name || 'friend'}!</h3>
                <p>
                  WhatsApp has opened with your enquiry already written.
                  Just tap <strong>Send</strong> to reach our studio.
                </p>
                <div className="form-success-actions">
                  <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noreferrer">
                    Open WhatsApp Again <Icon name="arrow" size={18} />
                  </a>
                  <button className="btn btn-outline-dark" onClick={() => { setSent(false); setForm(EMPTY_FORM) }}>
                    New Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="field-row">
                  <label>
                    Full Name
                    <input required value={form.name} onChange={update('name')} placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" required value={form.email} onChange={update('email')} placeholder="you@email.com" />
                  </label>
                </div>
                <div className="field-row">
                  <label>
                    Phone
                    <input value={form.phone} onChange={update('phone')} placeholder="+91 00000 00000" />
                  </label>
                  <label>
                    Service
                    <select value={form.service} onChange={update('service')}>
                      {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                </div>
                <label>
                  Tell us about your project
                  <textarea rows="5" required value={form.message} onChange={update('message')} placeholder="Site location, plot size, requirements and budget…" />
                </label>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send on WhatsApp <Icon name="arrow" size={20} />
                </button>
                <p className="form-note">Opens WhatsApp with your details filled in, ready to send to {STUDIO.phone}.</p>
              </form>
            )}
          </Reveal>
        </div>

        {/* MAP */}
        <div className="container">
          <div className="map-embed">
            <iframe
              title="INQ SPACE — Soorapattu, Chennai"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.14%2C13.11%2C80.23%2C13.18&layer=mapnik"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHAT TO SHARE / WHAT HAPPENS NEXT */}
      <section className="section section--muted">
        <div className="container split split--top">
          <Reveal variant="left" className="split-copy">
            <span className="kicker">Before You Write</span>
            <h2>What helps us <em>understand</em> your project</h2>
            <p>You do not need everything ready. Share whatever you already know:</p>
            <ul className="checks">
              {BRIEF_CHECKLIST.map((c) => (
                <li key={c}><Icon name="check" size={18} /> {c}</li>
              ))}
            </ul>
          </Reveal>
          <div className="next-steps">
            <Reveal variant="up" as="span" className="kicker">What Happens Next</Reveal>
            {PROCESS.slice(0, 3).map((p, i) => (
              <Reveal variant="right" delay={i * 110} className="next-step" key={p.no}>
                <span className="process-no">{p.no}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq count={4} />
    </>
  )
}
