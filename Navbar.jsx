import { useState } from "react";
import Logo from "./Logo.jsx";

const navLinks = [
  { label: "Chatbot Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-teal transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="text-sm font-medium text-ink hover:text-teal transition-colors"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="text-sm font-medium bg-ink text-white px-4 py-2 rounded-bridge hover:bg-teal-dark transition-colors"
          >
            Get started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line px-6 py-4 bg-surface">
          <ul className="flex flex-col gap-4 font-body text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#login" onClick={() => setOpen(false)}>
                Log in
              </a>
            </li>
            <li>
              <a
                href="#signup"
                onClick={() => setOpen(false)}
                className="inline-block bg-ink text-white px-4 py-2 rounded-bridge"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
