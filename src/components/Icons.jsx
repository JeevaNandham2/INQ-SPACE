const paths = {
  logo: <path d="M12 3l8 18h-4l-4-9-4 9H4z" fill="currentColor" stroke="none" />,
  play: <path d="M6 4l14 8-14 8V4z" fill="currentColor" stroke="none" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z" />
      <circle cx="8" cy="8" r="1.6" />
    </>
  ),
  check: <path d="M20 6L9 17l-5-5" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M6 21V5l7-2v18M13 21V9l5 2v10M9 8h1M9 12h1M9 16h1" />
    </>
  ),
  ruler: (
    <>
      <rect x="2.5" y="8" width="19" height="8" rx="1.5" transform="rotate(45 12 12)" />
      <path d="M8 8l1.5 1.5M11 11l1.5 1.5M14 6l1.5 1.5" />
    </>
  ),
  hardhat: (
    <>
      <path d="M3 18h18M4 18a8 8 0 0 1 16 0M10 10a2 2 0 0 1 4 0M9 10V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V10" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3M3 11a2 2 0 0 1 2 2v3H19v-3a2 2 0 0 1 2-2 2 2 0 0 0-2 2M5 16v2M19 16v2M7 11h10" />
    </>
  ),
  tree: (
    <>
      <path d="M12 22v-6M8 16a4 4 0 0 1-1-7.9 4.5 4.5 0 0 1 8.8-1A3.5 3.5 0 0 1 16 16z" />
    </>
  ),
  wrench: (
    <>
      <path d="M15 6a4 4 0 0 0-5 5L3 18l3 3 7-7a4 4 0 0 0 5-5l-2.5 2.5L13 10l1.5-3.5z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-16C18 12 12 20 4 20zM4 20c3-6 6-8 10-9" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-1.5 7L12 18l4.5 3L15 14" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 6a3 3 0 0 1 0 6M17 20a5 5 0 0 0-3-4.6" />
    </>
  ),
  spark: <path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z" />,
  quote: (
    <path d="M7 7H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v2a2 2 0 0 1-2 2M18 7h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v2a2 2 0 0 1-2 2" />
  ),
}

export function Icon({ name, size = 22 }) {
  const filled = name === 'play' || name === 'logo'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}
