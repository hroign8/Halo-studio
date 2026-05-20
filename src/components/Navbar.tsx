"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Standalone services", href: "/standalone-services" },
  { label: "Packages", href: "/packages" },
  { label: "Who we help", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / link click
  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 md:px-10 h-[64px] relative flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleNavClick}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200"
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "4px",
              background: "#ffffff",
              border: "none",
              flexShrink: 0,
            }}
          >
            <span
              className="size-[15px] rounded-full"
              style={{ background: "linear-gradient(135deg, #f472b6, #a78bfa, #60a5fa)" }}
            />
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>Halo</span>
            <span style={{ fontSize: "8.5px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1, color: "rgba(255,255,255,0.6)" }}>Studio</span>
          </span>
        </Link>

        {/* Centered nav links — desktop */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200 tracking-[-0.005em]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA — desktop */}
          <a
            href="https://wa.me/256703824370?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20strategy%20session%20with%20Halo%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-nav hidden md:inline-flex"
          >
            Start a project
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center size-[40px] gap-[5px] rounded-full bg-white/[0.06] border border-white/[0.1]"
          >
            <span
              className={`block h-[1.5px] w-[16px] bg-white rounded-full transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-[16px] bg-white rounded-full transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-[16px] bg-white rounded-full transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.07] bg-black/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="text-[17px] font-medium text-white/70 hover:text-white transition-colors py-3 border-b border-white/[0.06] last:border-0 tracking-[-0.01em]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/256703824370?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20strategy%20session%20with%20Halo%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="btn btn-primary mt-4 w-full text-center"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
