"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ratings", label: "Reviews" },
  { href: "/payments", label: "Pricing" },
  { href: "/terms-and-conditions", label: "Terms" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when a link is clicked (uncheck the hidden checkbox)
  const closeMenu = () => {
    const cb = document.getElementById("nav-menu-toggle") as HTMLInputElement | null;
    if (cb) cb.checked = false;
  };

  return (
    <>
      {/* Hidden checkbox — drives menu open/close via CSS :checked, zero JS dependency.
          tabIndex={-1} prevents focus, so clicking the label cannot scroll the page. */}
      <input type="checkbox" id="nav-menu-toggle" className="nav-menu-toggle" aria-hidden="true" tabIndex={-1} />

      <nav
        className="site-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          background: scrolled
            ? "rgba(239, 246, 255, 0.96)"
            : "rgba(239, 246, 255, 0.85)",
          borderBottom: scrolled
            ? "1px solid rgba(147, 197, 253, 0.7)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(30, 136, 229, 0.12)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <span style={{ fontSize: "24px" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #1565C0, #1E88E5)",
                WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Monika
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ alignItems: "center", gap: "8px" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? "#1565C0" : "#2A5F8F",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: pathname === link.href ? 600 : 400,
                  background: pathname === link.href ? "rgba(30, 136, 229, 0.15)" : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="btn-gold"
              style={{ marginLeft: "8px", padding: "10px 24px", fontSize: "0.9rem" }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger — a <label> for the hidden checkbox.
              <label for="..."> is HTML-native and works reliably on iOS Safari with NO JS. */}
          <label
            htmlFor="nav-menu-toggle"
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            role="button"
            tabIndex={0}
          >
            <span className="hamburger-bar hamburger-bar-1" />
            <span className="hamburger-bar hamburger-bar-2" />
            <span className="hamburger-bar hamburger-bar-3" />
          </label>
        </div>

        {/* Mobile Menu — visibility controlled purely by CSS :checked.
            No React state, no synthetic events, no compositing issues. */}
        <div className="mobile-menu-panel">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                display: "block",
                color: pathname === link.href ? "#1565C0" : "#2A5F8F",
                textDecoration: "none",
                padding: "14px 16px",
                borderRadius: "8px",
                fontSize: "1rem",
                marginBottom: "4px",
                background: pathname === link.href ? "rgba(30, 136, 229, 0.15)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={closeMenu}
            className="btn-gold"
            style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}
          >
            Book Now
          </Link>
        </div>
      </nav>
    </>
  );
}
