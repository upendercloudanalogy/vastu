"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ratings", label: "Reviews" },
  { href: "/payments", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(2, 12, 24, 0.96)"
          : "rgba(2, 12, 24, 0.72)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(20, 61, 122, 0.7)"
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
              background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Monika
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? "#FFFFFF" : "#B3E5FC",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: pathname === link.href ? 600 : 400,
                background: pathname === link.href ? "rgba(30, 136, 229, 0.18)" : "transparent",
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#EDF4FF" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ height: "2px", background: menuOpen ? "#42A5F5" : "#EDF4FF", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ height: "2px", background: "#EDF4FF", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ height: "2px", background: menuOpen ? "#42A5F5" : "#EDF4FF", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "rgba(2, 12, 24, 0.98)", borderTop: "1px solid #143D7A", padding: "16px 24px 24px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: pathname === link.href ? "#FFFFFF" : "#B3E5FC",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "1rem",
                marginBottom: "4px",
                background: pathname === link.href ? "rgba(30, 136, 229, 0.18)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="btn-gold"
            style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}
          >
            Book Now
          </Link>
        </div>
      )}

    </nav>
  );
}
