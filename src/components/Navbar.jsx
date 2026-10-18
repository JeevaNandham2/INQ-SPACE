import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Brand } from './Logo.jsx'
import { Icon } from './Icons.jsx'

// `hash` links jump to a section of the home page, so they never show as the active page
const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ onQuote }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <Brand />
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) =>
            l.hash ? (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ),
          )}
          <button className="btn btn-primary btn-sm nav-cta-mobile" onClick={() => { setOpen(false); onQuote() }}>
            Start a Project <Icon name="arrow" size={18} />
          </button>
        </nav>

        <div className="nav-actions">
          <span className="nav-sep" aria-hidden="true" />
          <Link to="/projects" className="nav-search" aria-label="Browse our work">
            <Icon name="search" size={19} />
          </Link>
          <button className="btn btn-primary btn-sm nav-cta" onClick={onQuote}>
            Start a Project <Icon name="arrow" size={18} />
          </button>
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
