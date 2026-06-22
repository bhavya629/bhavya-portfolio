import Link from "next/link";
import { useState } from "react";
import PremiumHover from "./PremiumHover";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {open && (
        <div className="mobile-menu-overlay">
          <button
            className="mobile-menu-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>

          <div className="mobile-menu-panel">
            <p>Navigation</p>

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <PremiumHover
              href="/contact"
              text="Hire Me"
              className="primary-button mobile-menu-hire"
              sound
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}