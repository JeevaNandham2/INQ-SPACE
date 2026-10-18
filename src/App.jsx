import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Popup from './components/Popup.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import { applySeo } from './seo.js'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => { applySeo(pathname) }, [pathname])
  useEffect(() => {
    if (hash) return // the page scrolls to its own anchor
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    // once per browser session, and late enough that the hero animation plays first
    if (sessionStorage.getItem('inq-popup-seen')) return
    const t = setTimeout(() => {
      sessionStorage.setItem('inq-popup-seen', '1')
      setPopupOpen(true)
    }, 12000)
    return () => clearTimeout(t)
  }, [])

  const openPopup = () => setPopupOpen(true)

  return (
    <div className="page">
      <ScrollToTop />
      <Popup open={popupOpen} onClose={() => setPopupOpen(false)} />
      <Navbar onQuote={openPopup} />

      <main>
        <Routes>
          <Route path="/" element={<Home onQuote={openPopup} />} />
          <Route path="/about" element={<About onQuote={openPopup} />} />
          <Route path="/services" element={<Services onQuote={openPopup} />} />
          <Route path="/projects" element={<Projects onQuote={openPopup} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onQuote={openPopup} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
