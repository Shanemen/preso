"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-nav transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className={`font-jost font-bold text-[16px] tracking-wide transition-colors duration-300 ${
            scrolled ? "text-dark" : "text-white"
          }`}
        >
          SICONG
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-[11px] uppercase tracking-[3px] transition-colors duration-300 hover:text-indigo ${
                scrolled ? "text-dark" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke={scrolled ? "#1A1A2E" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <path d="M4 4L16 16" />
                <path d="M16 4L4 16" />
              </>
            ) : (
              <>
                <path d="M2 6H18" />
                <path d="M2 10H18" />
                <path d="M2 14H18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-6 ${scrolled ? "bg-white" : "bg-dark"}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 font-mono text-[11px] uppercase tracking-[3px] transition-colors duration-300 hover:text-indigo ${
                scrolled ? "text-dark" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
