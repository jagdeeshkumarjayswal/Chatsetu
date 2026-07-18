/**
 * ChatSetu logo — an original mark: two nodes bridged by an arc, with a small
 * chat-tail beneath the right node so it reads as "conversation" at a glance.
 * Used in the navbar, and can be reused as a favicon source (see public/logo.svg).
 */
export default function Logo({ withWordmark = true, size = 36, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="ChatSetu logo"
      >
        <circle cx="20" cy="20" r="20" fill="#12233B" />
        {/* the bridge arc */}
        <path
          d="M9 24C9 15 15 11 20 11C25 11 31 15 31 24"
          stroke="#0E9594"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* two nodes the arc connects */}
        <circle cx="9" cy="24" r="2.6" fill="#F2A93B" />
        <circle cx="31" cy="24" r="2.6" fill="#F2A93B" />
        {/* chat-tail beneath the right node, reads as a speech bubble */}
        <path
          d="M27.5 28.5C27.5 30.5 29 31.8 31 31.8C33 31.8 34.5 30.3 34.5 28.3C34.5 26.3 33 24.8 31 24.8"
          stroke="#0E9594"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      {withWordmark && (
        <span className="font-display font-semibold text-lg tracking-tight text-ink">
          Chat<span className="text-teal">Setu</span>
        </span>
      )}
    </div>
  );
}
