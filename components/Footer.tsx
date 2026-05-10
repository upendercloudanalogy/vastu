import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waMessage = encodeURIComponent("Hello Monika! I'd like to know more about your services.");

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #020C18 0%, #010810 100%)",
        borderTop: "1px solid #143D7A",
        paddingTop: "clamp(40px, 8vw, 60px)",
        paddingBottom: "32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sacred geometry background ring */}
      <div style={{ position: "absolute", bottom: "-40%", right: "-10%", width: "clamp(300px, 60vw, 600px)", height: "clamp(300px, 60vw, 600px)", borderRadius: "50%", border: "1px solid rgba(30,136,229,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-30%", left: "-8%", width: "clamp(200px, 40vw, 450px)", height: "clamp(200px, 40vw, 450px)", borderRadius: "50%", border: "1px dashed rgba(66,165,250,0.04)", animation: "slowSpin 80s linear infinite", pointerEvents: "none" }} />

      {/* Twinkling stars */}
      {[{t:"15%",l:"2%",d:"0s"},{t:"25%",r:"3%",d:"1.2s"},{t:"70%",l:"1%",d:"0.6s"},{t:"60%",r:"2%",d:"1.8s"}].map((s,i)=>(
        <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"3px", height:"3px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 5px #42A5F5", animation:`twinkle 4s ease-in-out ${s.d} infinite`, pointerEvents:"none" }} />
      ))}

      {/* Top sacred ornament */}
      <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 40px)", color: "rgba(66,165,250,0.3)", fontSize: "0.75rem", letterSpacing: "8px" }}>
        ★ ✦ ◯ ✦ ★
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 5vw, 24px)", position: "relative", zIndex: 1 }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "clamp(24px, 4vw, 40px)",
            marginBottom: "clamp(32px, 5vw, 48px)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "22px", color: "#42A5F5", animation: "twinkle 3s ease-in-out infinite" }}>✦</span>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Monika
              </span>
            </div>
            <p style={{ color: "#90A4AE", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.7, maxWidth: "260px" }}>
              Certified Numerologist & Vastu Shastra Expert. Helping you unlock your destiny through ancient wisdom.
            </p>
            <div style={{ marginTop: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(30,136,229,0.15)", border: "1px solid #143D7A", borderRadius: "20px", padding: "4px 10px", fontSize: "0.72rem", color: "#82CFFF" }}>
                🎓 Masters in Numerology
              </span>
              <span style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "4px 10px", fontSize: "0.72rem", color: "#EDF4FF" }}>
                🏡 Vastu Expert
              </span>
            </div>

            {/* Numerology numbers decoration */}
            <div style={{ display: "flex", gap: "6px", marginTop: "20px" }}>
              {["1","3","5","7","9"].map((n, i) => (
                <span key={n} style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(30,136,229,0.1)", border: "1px solid rgba(30,136,229,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "0.75rem", fontWeight: 700, color: "rgba(66,165,250,0.6)", animation: `twinkle 3s ease-in-out ${i * 0.4}s infinite` }}>
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#42A5F5", fontSize: "0.6rem" }}>✦</span>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/payments", label: "Pricing & Services" },
                { href: "/ratings", label: "Client Reviews" },
                { href: "/book", label: "Book Consultation" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "10px" }}>
                  <Link href={link.href} style={{ color: "#90A4AE", textDecoration: "none", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#1E88E5", fontSize: "0.55rem", flexShrink: 0 }}>▶</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#42A5F5", fontSize: "0.6rem" }}>✦</span>
              Services
            </h4>
            <ul style={{ listStyle: "none" }}>
              {["Numerology Reading", "Vastu Consultation", "Name Correction", "New Home Vastu", "Commercial Vastu", "Destiny Analysis"].map((s) => (
                <li key={s} style={{ marginBottom: "10px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#1E88E5", fontSize: "0.55rem", marginTop: "6px", flexShrink: 0 }}>✦</span>
                  <span style={{ color: "#90A4AE", fontSize: "clamp(0.82rem, 2vw, 0.9rem)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#42A5F5", fontSize: "0.6rem" }}>✦</span>
              Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href={`https://wa.me/917027510541?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "12px", color: "#25D366", textDecoration: "none", fontSize: "clamp(0.82rem, 2vw, 0.9rem)" }}
              >
                <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                  💬
                </span>
                +91 7027510541
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilkhatkar34@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "12px", color: "#90A4AE", textDecoration: "none", fontSize: "clamp(0.78rem, 2vw, 0.85rem)", minWidth: 0 }}
              >
                <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(30,136,229,0.15)", border: "1px solid rgba(30,136,229,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                  ✉️
                </span>
                <span className="break-anywhere">nikhilkhatkar34@gmail.com</span>
              </a>
              <Link href="/book" className="btn-gold" style={{ padding: "10px 20px", fontSize: "0.88rem", marginTop: "4px" }}>
                Book a Session ✦
              </Link>
            </div>
          </div>
        </div>

        {/* Sacred divider */}
        <div className="sacred-divider" style={{ marginBottom: "24px" }}><span className="sacred-divider-text">✦ ◯ ✦</span></div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "#607D8B", fontSize: "clamp(0.78rem, 2vw, 0.85rem)" }}>
            © {currentYear} Monika Numerology & Vastu. All rights reserved.
          </p>
          <p style={{ color: "#607D8B", fontSize: "clamp(0.78rem, 2vw, 0.85rem)" }}>
            ✦ Guided by the wisdom of numbers
          </p>
        </div>
      </div>
    </footer>
  );
}
