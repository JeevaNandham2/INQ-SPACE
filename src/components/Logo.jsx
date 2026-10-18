import { useId } from 'react'

const PEN = 'M220 72H353L365 1049H353V1207H320V1232H304V1308H289V1365H284V1308H268V1232H252V1207H220V1049H204Z'
const ARC = 'M447 72A640 640 0 0 1 447 1352V1191A479 479 0 0 0 447 233Z'
const LEG = 'M447 603L1209 1365H983L447 830Z'

/**
 * INQ SPACE logo mark — drafting pen + "R" form, traced from the studio's name board.
 * rule:     add the red dot + line that sit under the mark.
 * wordmark: the full stacked lockup — mark, red rule, then "INQSPACE" and
 *           "Architecture+Design" stretched to exactly the width of the rule.
 * Colours come from CSS (.logo-pen / .logo-r / .logo-red / .logo-word) so the
 * logo can flip on dark backgrounds.
 */
export default function Logo({ height = 44, rule = false, wordmark = false, className = '' }) {
  const clip = `logo-clip-${useId().replace(/:/g, '')}`
  const vbH = wordmark ? 1640 : rule ? 1346 : 1300

  return (
    <svg
      className={`logo ${className}`.trim()}
      viewBox={`195 66 1020 ${vbH}`}
      height={height}
      width={(height * 1020) / vbH}
      role="img"
      aria-label="INQ SPACE — Architecture + Design"
    >
      <defs>
        {/* everything except the gap band either side of the diagonal stroke */}
        <clipPath id={clip}>
          <polygon points="0,44 1400,1444 1400,0 0,0" />
          <polygon points="0,500 1400,1900 0,1900" />
        </clipPath>
      </defs>
      <path className="logo-pen" d={PEN} />
      <path className="logo-r" clipPath={`url(#${clip})`} d={ARC} />
      <path className="logo-r" d={LEG} />
      {(rule || wordmark) && (
        <>
          <circle className="logo-red logo-dot" cx="286" cy="1397" r="11" />
          <rect className="logo-red logo-rule" x="318" y="1392" width="891" height="10" />
        </>
      )}
      {wordmark && (
        <>
          <text className="logo-word logo-name" x="204" y="1586" textLength="1005" lengthAdjust="spacingAndGlyphs">
            <tspan className="logo-name-light">INQ</tspan>
            <tspan className="logo-name-bold">SPACE</tspan>
          </text>
          <text className="logo-word logo-sub" x="210" y="1688" textLength="996" lengthAdjust="spacing">
            Architecture+Design
          </text>
        </>
      )}
    </svg>
  )
}

/**
 * The studio's official stacked logo (INQ_Logo-05): mark, red rule, INQSPACE, Architecture+Design.
 * Uses the supplied artwork itself; `light` switches to the white version for dark backgrounds.
 */
export function LogoArtwork({ height = 160, light = false, className = '' }) {
  return (
    <img
      className={`logo-art ${className}`.trim()}
      src={light ? '/brand/inq-logo-light.png' : '/brand/inq-logo.png'}
      alt="INQ SPACE — Architecture + Design"
      height={height}
      width={Math.round((height * 692) / 1068)}
    />
  )
}

/** Horizontal lockup for the navbar: mark + name, with the red dot and line running underneath. */
export function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-row">
        <Logo height={44} />
        <span className="brand-text">
          <span className="brand-name">INQ<span className="brand-name-accent">SPACE</span></span>
          <span className="brand-sub">Architecture + Design</span>
        </span>
      </span>
      <span className="brand-base" aria-hidden="true"><i /></span>
    </span>
  )
}
