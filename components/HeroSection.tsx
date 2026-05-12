"use client";

import Link from "next/link";
import AnimatedNumbers from "./AnimatedNumbers";

export default function HeroSection() {
  const waMessage = encodeURIComponent("Hello Monika! I'd like to know more about your Numerology & Vastu services.");

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingBottom: "clamp(60px, 10vw, 80px)",
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(30, 136, 229, 0.14) 0%, transparent 50%)," +
          "radial-gradient(ellipse at 80% 20%, rgba(66, 165, 250, 0.08) 0%, transparent 50%)," +
          "radial-gradient(ellipse at 50% 100%, rgba(13, 71, 161, 0.1) 0%, transparent 50%)," +
          "linear-gradient(180deg, #020C18 0%, #061528 50%, #020C18 100%)",
        paddingTop: "80px",
      }}
    >
      <AnimatedNumbers count={30} />

      {/* Sri Yantra SVG — centered background watermark */}
      <svg
        viewBox="0 0 300 300"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "min(90vw,600px)",
          height: "min(90vw,600px)",
          opacity: 0.07,
          color: "#D4AF37",
          zIndex: 0,
          pointerEvents: "none",
        }}
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="150" r="140" strokeWidth="0.5" />
        <circle cx="150" cy="150" r="125" strokeWidth="0.4" />
        {/* 8-petal lotus ring (r≈110) */}
        {[0,45,90,135,180,225,270,315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 150 + 95 * Math.cos(rad);
          const cy = 150 + 95 * Math.sin(rad);
          return (
            <ellipse
              key={deg}
              cx={cx}
              cy={cy}
              rx={14}
              ry={22}
              stroke="currentColor"
              strokeWidth="0.4"
              transform={`rotate(${deg}, ${cx}, ${cy})`}
            />
          );
        })}
        {/* Main Shiva triangle upward */}
        <polygon points="150,30 265,215 35,215" strokeWidth="0.8" />
        {/* Main Shakti triangle downward */}
        <polygon points="150,270 35,85 265,85" strokeWidth="0.8" />
        {/* Inner Shiva triangle */}
        <polygon points="150,60 240,202 60,202" strokeWidth="0.6" />
        {/* Inner Shakti triangle */}
        <polygon points="150,240 60,98 240,98" strokeWidth="0.6" />
        {/* Small upward triangle */}
        <polygon points="150,95 210,185 90,185" strokeWidth="0.5" />
        {/* Small downward triangle */}
        <polygon points="150,205 90,115 210,115" strokeWidth="0.5" />
        {/* Central triangle downward */}
        <polygon points="150,170 120,130 180,130" strokeWidth="0.5" />
        {/* Bindu */}
        <circle cx="150" cy="150" r="3" fill="currentColor" strokeWidth="0" />
        <circle cx="150" cy="150" r="8" strokeWidth="0.4" />
      </svg>

      {/* Lo Shu Magic Square watermark — bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          right: "3%",
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <table style={{ borderCollapse: "collapse" }}>
          <tbody>
            {[[4,9,2],[3,5,7],[8,1,6]].map((row, i) => (
              <tr key={i}>
                {row.map((n, j) => (
                  <td
                    key={j}
                    style={{
                      width: "clamp(26px,7vw,40px)",
                      height: "clamp(26px,7vw,40px)",
                      border: "0.5px solid #D4AF37",
                      textAlign: "center" as const,
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(13px,3.5vw,20px)",
                      fontWeight: 700,
                      color: "#D4AF37",
                    }}
                  >
                    {n}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Planet symbols scattered faintly */}
      {([
        { symbol: "☉", top: "18%", left: "6%",  fontSize: "28px" },
        { symbol: "☽", top: "12%", right: "8%", fontSize: "24px" },
        { symbol: "♂", top: "75%", left: "4%",  fontSize: "32px" },
        { symbol: "♃", top: "68%", right: "5%", fontSize: "36px" },
        { symbol: "♄", top: "42%", left: "2%",  fontSize: "26px" },
        { symbol: "♀", top: "50%", right: "3%", fontSize: "28px" },
      ] as const).map((p) => (
        <div
          key={p.symbol}
          style={{
            position: "absolute",
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? p.right : undefined,
            fontSize: p.fontSize,
            color: "#D4AF37",
            opacity: 0.04,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          {p.symbol}
        </div>
      ))}

      {/* Concentric sacred geometry rings */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "clamp(400px, 90vw, 900px)", height: "clamp(400px, 90vw, 900px)", borderRadius: "50%", border: "1px solid rgba(30, 136, 229, 0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "clamp(300px, 70vw, 700px)", height: "clamp(300px, 70vw, 700px)", borderRadius: "50%", border: "1px dashed rgba(66, 165, 250, 0.07)", animation: "slowSpin 40s linear infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "clamp(200px, 50vw, 500px)", height: "clamp(200px, 50vw, 500px)", borderRadius: "50%", border: "1px solid rgba(66, 165, 250, 0.06)", animation: "counterSpin 30s linear infinite", pointerEvents: "none" }} />

      {/* Centre radial glow */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "clamp(280px, 80vw, 650px)", height: "clamp(280px, 80vw, 650px)", background: "radial-gradient(circle, rgba(30, 136, 229, 0.09) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Twinkling stars */}
      {[
        { top: "15%", left: "8%", delay: "0s", size: "6px" },
        { top: "25%", right: "10%", delay: "0.8s", size: "4px" },
        { top: "70%", left: "5%", delay: "1.5s", size: "5px" },
        { top: "60%", right: "7%", delay: "0.3s", size: "7px" },
        { top: "85%", left: "20%", delay: "1.2s", size: "4px" },
        { top: "10%", right: "25%", delay: "2s", size: "5px" },
      ].map((s, i) => (
        <div key={i} style={{ position: "absolute", top: s.top, left: (s as {left?: string}).left, right: (s as {right?: string}).right, width: s.size, height: s.size, borderRadius: "50%", background: "#42A5F5", boxShadow: `0 0 6px #42A5F5`, animation: `twinkle 3s ease-in-out ${s.delay} infinite`, pointerEvents: "none", zIndex: 0 }} />
      ))}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "920px", width: "100%", padding: "0 clamp(16px, 5vw, 24px)" }}>

        {/* Top ornament */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "20px", color: "rgba(66,165,250,0.5)", letterSpacing: "8px", fontSize: "0.7rem" }}>
          <span style={{ animation: "twinkle 2s ease-in-out infinite" }}>★</span>
          <span>✦</span>
          <span style={{ animation: "twinkle 2s ease-in-out 0.5s infinite" }}>★</span>
          <span>◯</span>
          <span style={{ animation: "twinkle 2s ease-in-out 1s infinite" }}>★</span>
          <span>✦</span>
          <span style={{ animation: "twinkle 2s ease-in-out 1.5s infinite" }}>★</span>
        </div>

        {/* Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
          <div className="hero-badge badge-wrap" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(30, 136, 229, 0.14)", border: "1px solid rgba(66, 165, 250, 0.35)", borderRadius: "30px", padding: "8px 20px", fontSize: "clamp(0.78rem, 2vw, 0.85rem)", color: "#82CFFF", backdropFilter: "blur(10px)", flexWrap: "wrap", justifyContent: "center", maxWidth: "100%" }}>
            <span className="animate-shimmer" style={{ color: "#42A5F5" }}>✦</span>
            Certified Numerologist &amp; Vastu Shastra Expert
            <span className="animate-shimmer" style={{ color: "#42A5F5", animationDelay: "1s" }}>✦</span>
          </div>
        </div>

        {/* Headline — single H1 for SEO */}
        <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.4rem, 6.5vw, 5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "28px", color: "#EDF4FF" }}>
          Unlock Your{" "}
          <span className="text-gold-gradient">Destiny</span>
          <br />
          Through{" "}
          <span className="text-blue-gradient">Numbers &amp; Vastu</span>
        </h1>

        {/* Subtitle — keyword-rich for on-page SEO */}
        <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)", color: "#90A4AE", lineHeight: 1.85, maxWidth: "660px", margin: "0 auto 12px" }}>
          Discover the hidden patterns governing your life. By blending ancient Vastu wisdom with precise numerological calculations, Monika — Faridabad&apos;s trusted Vastu consultant — brings the clarity you need to embrace your true potential.
        </p>
        <p style={{ fontSize: "clamp(0.78rem, 2vw, 0.9rem)", color: "#607D8B", margin: "0 auto 28px", maxWidth: "500px" }}>
          📍 Based in Faridabad, Haryana &nbsp;·&nbsp; Serving clients across all of India online
        </p>

        {/* Trust pills — 2x2 grid on mobile, single row on desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", justifyContent: "center", gap: "8px", marginBottom: "36px" }}>
          {["🔢 Numerology", "🏡 Vastu Shastra", "✍️ Name Correction", "💫 Destiny Analysis"].map((item) => (
            <span key={item} style={{ fontSize: "clamp(0.72rem, 1.9vw, 0.82rem)", color: "#82CFFF", background: "rgba(30,136,229,0.1)", border: "1px solid rgba(66,165,250,0.2)", borderRadius: "20px", padding: "6px 12px", textAlign: "center" }}>
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/book" className="btn-gold" style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
            ✦ Book Your Session
          </Link>
          <a href={`https://wa.me/917027510541?text=${waMessage}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Monika
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(8px, 2vw, 16px)", marginTop: "clamp(40px, 8vw, 64px)", width: "100%" }}>
          {[
            { value: "6", label: "Clients Guided" },
            { value: "5★", label: "Avg Rating" },
            { value: "5+", label: "Yrs Practice" },
            { value: "6", label: "Services" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center", padding: "clamp(10px, 2.5vw, 16px) clamp(6px, 2vw, 20px)", background: "rgba(7,26,48,0.5)", border: "1px solid rgba(20,61,122,0.5)", borderRadius: "14px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.1rem, 4vw, 2rem)", fontWeight: 700, background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ color: "#90A4AE", fontSize: "clamp(0.6rem, 1.6vw, 0.78rem)", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to bottom, transparent, #020C18)", zIndex: 2, pointerEvents: "none" }} />
    </section>
  );
}
