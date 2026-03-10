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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-5">
        <a
          href="#hero"
          className={`font-syne font-bold text-[16px] tracking-wide transition-colors duration-300 ${
            scrolled ? "text-dark" : "text-white"
          }`}
        >
          SICONG
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-[11px] uppercase tracking-[3px] transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-dark" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
