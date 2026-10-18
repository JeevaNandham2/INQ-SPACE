/**
 * Shaded, "3D" illustration icons for the philosophy cards.
 * Depth comes from gradients (lit top-left), bevelled rims, specular highlights and a
 * soft contact shadow; the floating tile around them is styled in CSS (.icon3d).
 * Gradient ids are prefixed per icon so several icons can share a page.
 */

const Shadow = ({ id, cy = 57, rx = 20 }) => (
  <>
    <radialGradient id={id}>
      <stop offset="0" stopColor="#13263a" stopOpacity="0.32" />
      <stop offset="1" stopColor="#13263a" stopOpacity="0" />
    </radialGradient>
    <ellipse cx="32" cy={cy} rx={rx} ry="3.6" fill={`url(#${id})`} />
  </>
)

/** Function — three people, the one in front in brand red. */
function People() {
  return (
    <svg viewBox="0 0 64 64">
      <defs>
        <radialGradient id="fn-navy-head" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#7e93a8" />
          <stop offset="0.55" stopColor="#3a536b" />
          <stop offset="1" stopColor="#1a2d40" />
        </radialGradient>
        <linearGradient id="fn-navy-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5a7189" />
          <stop offset="0.6" stopColor="#2a4157" />
          <stop offset="1" stopColor="#15263a" />
        </linearGradient>
        <radialGradient id="fn-red-head" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#f26a6f" />
          <stop offset="0.55" stopColor="#c81f26" />
          <stop offset="1" stopColor="#7d0b10" />
        </radialGradient>
        <linearGradient id="fn-red-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e9454b" />
          <stop offset="0.6" stopColor="#b3141b" />
          <stop offset="1" stopColor="#7a0a0f" />
        </linearGradient>
      </defs>
      <Shadow id="fn-shadow" rx="24" />
      {/* back row */}
      <path d="M5 51v-3.5a10.5 10.5 0 0 1 21 0V51a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" fill="url(#fn-navy-body)" />
      <circle cx="15.5" cy="27" r="6.5" fill="url(#fn-navy-head)" />
      <path d="M38 51v-3.5a10.5 10.5 0 0 1 21 0V51a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2z" fill="url(#fn-navy-body)" />
      <circle cx="48.5" cy="27" r="6.5" fill="url(#fn-navy-head)" />
      {/* front figure */}
      <path d="M17 54v-4.5a15 15 0 0 1 30 0V54a2.5 2.5 0 0 1-2.5 2.5h-25A2.5 2.5 0 0 1 17 54z" fill="url(#fn-red-body)" />
      <path d="M21 44.5a12 12 0 0 1 9-5.6" stroke="#fff" strokeOpacity="0.45" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="24" r="9" fill="url(#fn-red-head)" />
      {/* specular highlights */}
      <ellipse cx="28.8" cy="20.2" rx="3" ry="2" fill="#fff" opacity="0.55" transform="rotate(-30 28.8 20.2)" />
      <ellipse cx="13.4" cy="24.4" rx="2.1" ry="1.4" fill="#fff" opacity="0.4" transform="rotate(-30 13.4 24.4)" />
      <ellipse cx="46.4" cy="24.4" rx="2.1" ry="1.4" fill="#fff" opacity="0.4" transform="rotate(-30 46.4 24.4)" />
    </svg>
  )
}

/** Context — a steel compass with a two-tone faceted needle. */
function Compass() {
  return (
    <svg viewBox="0 0 64 64">
      <defs>
        <linearGradient id="cx-bezel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c9d1d8" />
          <stop offset="1" stopColor="#7d8b98" />
        </linearGradient>
        <linearGradient id="cx-rim" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f3f5f7" />
          <stop offset="1" stopColor="#8a97a4" />
        </linearGradient>
        <radialGradient id="cx-face" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dfe5ea" />
        </radialGradient>
        <linearGradient id="cx-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <Shadow id="cx-shadow" />
      <rect x="28.5" y="2.5" width="7" height="6" rx="2" fill="url(#cx-bezel)" stroke="#7d8b98" strokeWidth="0.6" />
      <circle cx="32" cy="31" r="24" fill="url(#cx-bezel)" />
      <circle cx="32" cy="31" r="20.5" fill="url(#cx-rim)" />
      <circle cx="32" cy="31" r="18.5" fill="url(#cx-face)" />
      <g stroke="#13263a" strokeWidth="1.8" strokeLinecap="round">
        <path d="M32 14.5v3M32 44.5v3M15.5 31h3M45.5 31h3" />
      </g>
      <g stroke="#13263a" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round">
        <path d="M43.7 19.3l-1.6 1.6M20.3 42.7l1.6-1.6M20.3 19.3l1.6 1.6M43.7 42.7l-1.6-1.6" />
      </g>
      <g transform="rotate(40 32 31)" style={{ filter: 'drop-shadow(1px 2px 1.2px rgba(19,38,58,0.35))' }}>
        <path d="M32 15l-4.4 16H32z" fill="#e8434a" />
        <path d="M32 15l4.4 16H32z" fill="#a50f16" />
        <path d="M32 47l-4.4-16H32z" fill="#4a6178" />
        <path d="M32 47l4.4-16H32z" fill="#1b2c3a" />
      </g>
      <circle cx="32" cy="31" r="3" fill="url(#cx-bezel)" stroke="#6d7b88" strokeWidth="0.6" />
      <path d="M17 26a16 16 0 0 1 24-9.5 18 18 0 0 0-24 9.5z" fill="url(#cx-glass)" />
    </svg>
  )
}

/** Detail — an extruded red tag with a punched eyelet and a navy string. */
function Tag() {
  const shape = 'M12 30.5L29.5 13H48a3 3 0 0 1 3 3v18.5L33.5 52a3.2 3.2 0 0 1-4.5 0L12 35a3.2 3.2 0 0 1 0-4.5z'
  return (
    <svg viewBox="0 0 64 64">
      <defs>
        <linearGradient id="tg-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0575d" />
          <stop offset="0.5" stopColor="#c41a21" />
          <stop offset="1" stopColor="#8e0d13" />
        </linearGradient>
        <radialGradient id="tg-hole" cx="0.6" cy="0.65" r="0.7">
          <stop offset="0" stopColor="#fdfdfc" />
          <stop offset="1" stopColor="#c9d0d6" />
        </radialGradient>
        <linearGradient id="tg-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#8a97a4" />
        </linearGradient>
      </defs>
      <Shadow id="tg-shadow" cy="58" rx="18" />
      {/* side wall (extrusion) */}
      <path d={shape} fill="#5f070b" transform="translate(2.6 3.4)" />
      <path d={shape} fill="#74090e" transform="translate(1.3 1.7)" />
      {/* face */}
      <path d={shape} fill="url(#tg-face)" />
      <path d="M13.5 30.2L29.9 14H47" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      {/* engraved lines */}
      <g stroke="#6e080d" strokeOpacity="0.55" strokeWidth="1.8" strokeLinecap="round">
        <path d="M24.5 35.5l9-9M28.5 39.5l9-9" />
      </g>
      <g stroke="#fff" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round">
        <path d="M25.2 36.4l9-9M29.2 40.4l9-9" />
      </g>
      {/* eyelet */}
      <circle cx="42" cy="22" r="4.6" fill="url(#tg-ring)" />
      <circle cx="42" cy="22" r="2.8" fill="url(#tg-hole)" stroke="#5f6d79" strokeWidth="0.6" />
      {/* string */}
      <path d="M43.2 20.5C47 15 52 9 58 6.5" stroke="#13263a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/** Value — a gold medal on red ribbon tails, with an embossed star. */
function Medal() {
  return (
    <svg viewBox="0 0 64 64">
      <defs>
        <linearGradient id="md-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1c4" />
          <stop offset="0.35" stopColor="#e9c46a" />
          <stop offset="0.7" stopColor="#c08f2e" />
          <stop offset="1" stopColor="#8a611a" />
        </linearGradient>
        <linearGradient id="md-gold-in" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fbe7a8" />
          <stop offset="1" stopColor="#b17f24" />
        </linearGradient>
        <linearGradient id="md-star" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff6d8" />
          <stop offset="1" stopColor="#d4a243" />
        </linearGradient>
        <linearGradient id="md-ribbon-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e2393f" />
          <stop offset="1" stopColor="#a8121a" />
        </linearGradient>
        <linearGradient id="md-ribbon-r" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9a1017" />
          <stop offset="1" stopColor="#6d090e" />
        </linearGradient>
      </defs>
      <Shadow id="md-shadow" cy="59" rx="16" />
      {/* ribbon tails */}
      <path d="M23 36l-5.5 20 6.2-2.6L27.4 59 33 40z" fill="url(#md-ribbon-l)" />
      <path d="M41 36l5.5 20-6.2-2.6L36.6 59 31 40z" fill="url(#md-ribbon-r)" />
      {/* medal */}
      <circle cx="32" cy="25" r="19" fill="url(#md-gold)" />
      <circle cx="32" cy="25" r="14.5" fill="url(#md-gold-in)" />
      <circle cx="32" cy="25" r="14.5" fill="none" stroke="#7a5414" strokeOpacity="0.35" strokeWidth="0.8" />
      {/* embossed star: dark offset underneath, lit face on top */}
      <path
        d="M32 15.2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L32 30l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z"
        fill="#7a5414" opacity="0.45" transform="translate(0.8 1)"
      />
      <path d="M32 15.2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L32 30l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z" fill="url(#md-star)" />
      <path d="M18 19a15.5 15.5 0 0 1 12-10" stroke="#fff" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/** Architecture before decoration — a drawn floor plan with a set square resting on it. */
function Plan() {
  return (
    <svg viewBox="0 0 64 64">
      <defs>
        <linearGradient id="pl-paper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dde3e8" />
        </linearGradient>
        <linearGradient id="pl-square" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f26a6f" stopOpacity="0.9" />
          <stop offset="1" stopColor="#a50f16" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <Shadow id="pl-shadow" cy="58" rx="22" />
      <g transform="rotate(-8 32 32)">
        <rect x="10" y="12" width="44" height="40" rx="2.5" fill="#b9c3cc" transform="translate(1.5 2.5)" />
        <rect x="10" y="12" width="44" height="40" rx="2.5" fill="url(#pl-paper)" />
        {/* plan: outer walls, partitions and a door swing */}
        <g fill="none" stroke="#13263a" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18h32v28H16z" strokeWidth="2.2" />
          <path d="M32 18v12M32 36v10M16 32h10" strokeWidth="1.5" />
          <path d="M26 32a6 6 0 0 1 6-6" strokeWidth="0.9" strokeDasharray="1.6 1.4" />
        </g>
        <path d="M16 49.5h32" stroke="#c41a21" strokeWidth="0.9" />
        <path d="M16 48v3M48 48v3" stroke="#c41a21" strokeWidth="0.9" />
      </g>
      {/* translucent set square */}
      <path d="M36 58L58 58L58 34Z" fill="url(#pl-square)" transform="translate(-1 -6)" />
      <path d="M43 52L52 52L52 43Z" fill="#f8f7f4" transform="translate(-1 -6)" />
      <path d="M36.5 51.5L57 31" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round" transform="translate(-1 -6)" />
    </svg>
  )
}

/** Practical design — a glossy red site helmet. */
function HardHat() {
  return (
    <svg viewBox="0 0 64 64">
      <defs>
        <radialGradient id="hh-dome" cx="0.38" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#f6797e" />
          <stop offset="0.5" stopColor="#c81f26" />
          <stop offset="1" stopColor="#6f080d" />
        </radialGradient>
        <linearGradient id="hh-brim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9343b" />
          <stop offset="1" stopColor="#7a0a0f" />
        </linearGradient>
        <linearGradient id="hh-ridge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a50f16" />
          <stop offset="0.5" stopColor="#ef5a60" />
          <stop offset="1" stopColor="#a50f16" />
        </linearGradient>
      </defs>
      <Shadow id="hh-shadow" cy="55" rx="26" />
      <path d="M11 42a21 21 0 0 1 42 0z" fill="url(#hh-dome)" />
      <path d="M28.5 21.3a21 21 0 0 1 7 0V42h-7z" fill="url(#hh-ridge)" />
      <path d="M16 36a17 17 0 0 1 9-13" stroke="#fff" strokeOpacity="0.6" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <rect x="5" y="41" width="54" height="8" rx="4" fill="url(#hh-brim)" />
      <path d="M9 43.2h46" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="27" y="35" width="10" height="5" rx="1.2" fill="#fff" opacity="0.92" />
    </svg>
  )
}

/** Space-conscious thinking — two stacked isometric blocks, like a compact home. */
function Blocks() {
  return (
    <svg viewBox="0 0 64 64">
      <defs>
        <linearGradient id="bk-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e3e8ec" />
        </linearGradient>
        <linearGradient id="bk-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9d2da" />
          <stop offset="1" stopColor="#9fadba" />
        </linearGradient>
        <linearGradient id="bk-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a6178" />
          <stop offset="1" stopColor="#1b2c3a" />
        </linearGradient>
      </defs>
      <Shadow id="bk-shadow" cy="57" rx="24" />
      {/* lower block */}
      <path d="M8 37l18 9v12L8 49z" fill="url(#bk-left)" />
      <path d="M26 46l26-13v12L26 58z" fill="url(#bk-right)" />
      <path d="M8 37l26-13 18 9-26 13z" fill="url(#bk-top)" />
      {/* upper block, set back */}
      <path d="M24 23l14 7v14l-14-7z" fill="url(#bk-left)" />
      <path d="M38 30l14-7v14l-14 7z" fill="url(#bk-right)" />
      <path d="M24 23l14-7 14 7-14 7z" fill="url(#bk-top)" />
      {/* glazing */}
      <path d="M41 33.5l8-4v6l-8 4z" fill="#8fd0ee" opacity="0.9" />
      <path d="M30 48.5l6-3v7l-6 3z" fill="#8fd0ee" opacity="0.85" />
      <path d="M42 42.5l6-3v5l-6 3z" fill="#8fd0ee" opacity="0.85" />
      {/* red rooftop marker */}
      <path d="M36 20.5l3-1.5 3 1.5-3 1.5z" fill="#d4141c" />
    </svg>
  )
}

/** Detail-driven — a faceted red gem with a sparkle. */
function Gem() {
  return (
    <svg viewBox="0 0 64 64">
      <Shadow id="gm-shadow" cy="58" rx="18" />
      {/* crown */}
      <path d="M12 24l9-11h22l9 11z" fill="#e8434a" />
      <path d="M21 13l5 11h12l5-11z" fill="#f6797e" />
      <path d="M12 24l9-11 5 11z" fill="#c81f26" />
      <path d="M52 24l-9-11-5 11z" fill="#b3141b" />
      {/* pavilion */}
      <path d="M12 24h14l6 30z" fill="#a50f16" />
      <path d="M26 24h12l-6 30z" fill="#d9343b" />
      <path d="M38 24h14L32 54z" fill="#7a0a0f" />
      <path d="M12 24h40" stroke="#fff" strokeOpacity="0.55" strokeWidth="1" />
      <path d="M22.5 15l3 6.5" stroke="#fff" strokeOpacity="0.85" strokeWidth="1.6" strokeLinecap="round" />
      {/* sparkle */}
      <path d="M52 6l1.6 4.4L58 12l-4.4 1.6L52 18l-1.6-4.4L46 12l4.4-1.6z" fill="#e9c46a" />
    </svg>
  )
}

const ICONS = {
  users: People, compass: Compass, tag: Tag, award: Medal,
  ruler: Plan, hardhat: HardHat, building: Blocks, spark: Gem,
}

/** Floating 3D tile holding one of the icons above. */
export default function Icon3D({ name, className = '' }) {
  const Art = ICONS[name]
  if (!Art) return null
  return (
    <span className={`icon3d ${className}`.trim()} aria-hidden="true">
      <span className="icon3d-art"><Art /></span>
    </span>
  )
}
