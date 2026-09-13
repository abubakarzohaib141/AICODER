export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aic-orange" x1="50" y1="6" x2="50" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFB020" />
          <stop offset="1" stopColor="#FF8800" />
        </linearGradient>
        <linearGradient id="aic-teal" x1="16" y1="52" x2="40" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22B6B0" />
          <stop offset="1" stopColor="#147D8A" />
        </linearGradient>
        <linearGradient id="aic-blue" x1="60" y1="52" x2="86" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4F7FF7" />
          <stop offset="1" stopColor="#2B1BBA" />
        </linearGradient>
        <linearGradient id="aic-arm-left" x1="46" y1="30" x2="30" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8800" />
          <stop offset="1" stopColor="#147D8A" />
        </linearGradient>
        <linearGradient id="aic-arm-right" x1="54" y1="30" x2="70" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8800" />
          <stop offset="1" stopColor="#4F7FF7" />
        </linearGradient>
      </defs>
      <path
        d="M45 28 L31 60"
        stroke="url(#aic-arm-left)"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M55 28 L69 60"
        stroke="url(#aic-arm-right)"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <circle cx="50" cy="23" r="17" fill="url(#aic-orange)" />
      <circle cx="26" cy="68" r="15" fill="url(#aic-teal)" />
      <circle cx="74" cy="68" r="15" fill="url(#aic-blue)" />
    </svg>
  );
}
