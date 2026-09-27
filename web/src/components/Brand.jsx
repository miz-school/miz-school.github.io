// School crest + Miz School wordmark + campus illustration.
// The crest is a placeholder built from brand tokens; a school's approved logo_url replaces it.

export function Crest({ school, size = 40 }) {
  if (school?.logo_url) {
    return <img src={school.logo_url} alt={`${school.name} logo`} width={size} height={size} style={{ objectFit: 'contain' }} />;
  }
  const primary = school?.primary_color || 'var(--brand)';
  const ink = school?.secondary_color || 'var(--brand-ink)';
  const accent = school?.accent_color || 'var(--accent)';
  const initials = school?.crest_initials || 'MS';
  return (
    <svg width={size} height={size * 1.12} viewBox="0 0 100 112" role="img" aria-label={`${school?.short_name || 'School'} crest`} style={{ flexShrink: 0 }}>
      <path d="M50 3 L93 14 V52 C93 80 74 98 50 109 C26 98 7 80 7 52 V14 Z" fill={ink} />
      <path d="M50 10 L86 19.5 V52 C86 75.5 70 91 50 101 C30 91 14 75.5 14 52 V19.5 Z" fill={primary} />
      <path d="M14 38 H86" stroke={accent} strokeWidth="4" />
      <path d="M32 26 l4 -5 l4 5 M60 26 l4 -5 l4 5" stroke={accent} strokeWidth="2.6" fill="none" strokeLinejoin="round" />
      <path d="M50 16 v16 M43 23 h14" stroke={accent} strokeWidth="3" />
      <text x="50" y="74" textAnchor="middle" fontFamily="'Source Serif 4', Georgia, serif" fontWeight="700" fontSize="27" fill="#fff" letterSpacing="1">{initials}</text>
      <path d="M30 86 Q50 94 70 86" stroke={accent} strokeWidth="2.4" fill="none" />
    </svg>
  );
}

/** Miz School shield icon: gold keyline shield, serif "m", gold four-point star. */
export function MizShield({ size = 30, light = false, tile = false }) {
  const ink = light || tile ? '#fff' : '#0B2345';
  return (
    <svg width={size} height={size * 1.12} viewBox="0 0 40 45" aria-hidden="true" style={{ flex: 'none', display: 'block' }}>
      {tile && <rect x="-2" y="-1" width="44" height="47" rx="10" fill="#0B2345" />}
      <path d="M20 2.2 C25.6 5.6 30.8 7.1 36.6 7.9 V23.6 C36.6 33.4 29.2 39.6 20 43.2 C10.8 39.6 3.4 33.4 3.4 23.6 V7.9 C9.2 7.1 14.4 5.6 20 2.2 Z" fill="none" stroke="#C8962E" strokeWidth="1.7" strokeLinejoin="round" />
      <text x="20" y="25.2" textAnchor="middle" fontFamily="'Source Serif 4', Georgia, serif" fontWeight="700" fontSize="19" fill={ink}>m</text>
      <path d="M20 29.6 Q20.55 32.75 23.7 33.3 Q20.55 33.85 20 37 Q19.45 33.85 16.3 33.3 Q19.45 32.75 20 29.6 Z" fill="#C8962E" />
    </svg>
  );
}

/** Miz School logo lockup: shield + two-line serif wordmark, the i's dot is the gold star. */
export function MizMark({ size = 30, light = false }) {
  const ink = light ? '#fff' : '#0B2345';
  const f = size * 0.62;
  return (
    <span className="row" style={{ gap: size * 0.28, alignItems: 'center' }}>
      <MizShield size={size * 0.92} light={light} />
      <span className="serif" style={{ color: ink, lineHeight: 0.92, fontWeight: 700, display: 'inline-flex', flexDirection: 'column', whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: f * 1.05, letterSpacing: '-0.01em' }}>M<span style={{ position: 'relative' }}>ı<svg viewBox="0 0 10 10" style={{ position: 'absolute', left: '50%', top: '-0.06em', width: '0.36em', height: '0.36em', transform: 'translateX(-50%)' }} aria-hidden="true"><path d="M5 0 Q5.6 4.4 10 5 Q5.6 5.6 5 10 Q4.4 5.6 0 5 Q4.4 4.4 5 0 Z" fill="#C8962E" /></svg></span>z</span>
        <span style={{ fontSize: f * 0.86, fontWeight: 600 }}>School</span>
      </span>
    </span>
  );
}

/** Line illustration of a school facade — stands in for the approved campus photo. */
export function CampusArt({ color = 'rgba(255,255,255,.55)', className = '', style }) {
  return (
    <svg className={className} viewBox="0 0 600 300" preserveAspectRatio="xMidYMax meet" style={{ width: '100%', display: 'block', ...style }} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="1.6">
        {/* clock tower */}
        <path d="M270 120 V40 L300 14 L330 40 V120" />
        <circle cx="300" cy="62" r="13" />
        <path d="M300 62 V53 M300 62 L307 66" />
        <path d="M285 88 h30 v28 h-30z M300 88 v28" />
        {/* main block */}
        <path d="M130 290 V120 H470 V290" />
        <path d="M120 120 H480 L470 108 H130 Z" />
        {[160, 200, 240, 360, 400, 440].map((x) => (
          <g key={x}>
            <path d={`M${x - 12} 150 h24 v34 h-24z M${x} 150 v34`} />
            <path d={`M${x - 12} 214 h24 v34 h-24z M${x} 214 v34`} />
          </g>
        ))}
        {/* portico */}
        <path d="M260 290 V190 H340 V290" />
        <path d="M252 190 L300 160 L348 190" />
        {[272, 290, 310, 328].map((x) => <path key={x} d={`M${x} 196 V290`} />)}
        <path d="M284 290 V250 a16 16 0 0 1 32 0 V290" />
        {/* wings */}
        <path d="M20 290 V170 H130 M470 170 H580 V290" />
        {[48, 90, 510, 552].map((x) => <path key={x} d={`M${x - 10} 196 h20 v28 h-20z M${x - 10} 240 h20 v28 h-20z`} />)}
        {/* flag */}
        <path d="M300 14 V-4" />
        {/* trees + ground */}
        <path d="M0 290 H600" />
        <circle cx="78" cy="262" r="20" /><path d="M78 282 v8" />
        <circle cx="522" cy="262" r="20" /><path d="M522 282 v8" />
        <path d="M200 290 q10 -14 20 0 M380 290 q10 -14 20 0" />
      </g>
    </svg>
  );
}
