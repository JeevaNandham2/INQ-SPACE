import { Link } from 'react-router-dom'
import { Icon } from './Icons.jsx'
import { LogoArtwork } from './Logo.jsx'
import { SERVICES, STUDIO } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link className="footer-logo brand--light" to="/" aria-label="INQ SPACE home">
            <LogoArtwork light height={150} />
          </Link>
          <p>
            {STUDIO.tagline}
            <br />
            {STUDIO.motto}
          </p>
        </div>

        <div className="footer-col">
          <h4>Studio</h4>
          <Link to="/about">About INQ SPACE</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          {SERVICES.map((s) => (
            <Link to="/services" key={s.title}>{s.title}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>{STUDIO.legalName}</h4>
          <div className="footer-contact">
            <span><Icon name="pin" size={17} /> {STUDIO.address.join(', ')}</span>
            <a href={STUDIO.phoneHref}><Icon name="phone" size={17} /> {STUDIO.phone}</a>
            <a href={STUDIO.emailHref}><Icon name="mail" size={17} /> {STUDIO.email}</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {STUDIO.legalName} All Rights Reserved.</p>
      </div>
    </footer>
  )
}
