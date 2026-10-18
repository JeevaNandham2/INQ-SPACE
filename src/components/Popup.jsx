import { useState } from 'react'
import { Icon } from './Icons.jsx'

export default function Popup({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div
        className="popup-card"
        role="dialog"
        aria-modal="true"
        aria-label="Project enquiry"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={18} />
        </button>

        <div className="popup-figure" />

        <div className="popup-body">
          {!submitted ? (
            <>
              <span className="popup-badge">
                <Icon name="spark" size={15} /> Project Enquiries
              </span>
              <h3 className="popup-title">Have a site in mind?</h3>
              
              <p className="popup-text">

                We would love to understand what you are trying to build.
                <strong> Tell us about your project.</strong>
              </p>
              <form className="popup-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Start a Conversation</button>
              </form>
              <p className="popup-fine">INQ SPACE · Chennai, Tamil Nadu, India</p>
            </>
          ) : (
            <div className="popup-success">
              <span className="popup-check"><Icon name="check" size={28} /></span>
              <h3 className="popup-title">Request received!</h3>
              <p className="popup-text">
                Thank you — our studio will reach out to <strong>{email}</strong> shortly
                to talk about your project.
              </p>
              <button className="btn btn-primary" onClick={onClose}>Continue Exploring</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
