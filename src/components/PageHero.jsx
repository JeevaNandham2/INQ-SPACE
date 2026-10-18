import { Link } from 'react-router-dom'
import { ScrollMouse } from './Blocks.jsx'

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <nav className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="crumbs-current">{title}</span>
        </nav>
      </div>
      <ScrollMouse light />
    </section>
  )
}
