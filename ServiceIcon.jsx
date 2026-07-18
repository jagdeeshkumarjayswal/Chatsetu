/**
 * Original icon set for chatbot service categories.
 * These are drawn from scratch — not third-party app logos — so the
 * service grid stays trademark-free while still being instantly readable.
 */
const icons = {
  website: (
    <>
      <rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M6 14H34" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="11" r="1" fill="currentColor" />
      <circle cx="14" cy="11" r="1" fill="currentColor" />
    </>
  ),
  messaging: (
    <>
      <path
        d="M8 12C8 9.8 9.8 8 12 8H28C30.2 8 32 9.8 32 12V22C32 24.2 30.2 26 28 26H16L10 31V26H12C9.8 26 8 24.2 8 22V12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 16H26M14 20H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  voice: (
    <>
      <rect x="16" y="6" width="8" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M11 18C11 23 15 27 20 27C25 27 29 23 29 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 27V33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 33H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  support: (
    <>
      <path
        d="M10 20C10 13.4 15.4 8 22 8C22 8 22 8 22 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M8 22C8 14.8 13.8 9 21 9C28.2 9 34 14.8 34 22" stroke="currentColor" strokeWidth="2" />
      <rect x="7" y="21" width="6" height="9" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <rect x="29" y="21" width="6" height="9" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M35 30C35 33 32 34.5 28 34.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  sales: (
    <>
      <path d="M7 10H10L14 24H29L32 14H12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="16" cy="30" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="27" cy="30" r="2" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  multilingual: (
    <>
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2" />
      <path d="M7 20H33" stroke="currentColor" strokeWidth="2" />
      <path d="M20 7C23.5 10.8 25.5 15.2 25.5 20C25.5 24.8 23.5 29.2 20 33C16.5 29.2 14.5 24.8 14.5 20C14.5 15.2 16.5 10.8 20 7Z" stroke="currentColor" strokeWidth="2" />
    </>
  ),
};

export default function ServiceIcon({ type, className = "" }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {icons[type] ?? icons.messaging}
    </svg>
  );
}
