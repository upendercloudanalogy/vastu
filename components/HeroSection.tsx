"use client";

import Link from "next/link";
import AnimatedNumbers from "./AnimatedNumbers";

const PLANET_SYMBOLS = [
  { symbol: "☉", top: "18%", left: "4%",  size: "28px", delay: "0s",   animate: true },
  { symbol: "☽", top: "12%", right: "5%", size: "24px", delay: "1.2s", animate: true },
  { symbol: "♂", top: "74%", left: "3%",  size: "32px", delay: "0.8s", animate: false },
  { symbol: "♃", top: "68%", right: "4%", size: "36px", delay: "2s",   animate: false },
  { symbol: "♄", top: "42%", left: "2%",  size: "26px", delay: "1.5s", animate: true },
  { symbol: "♀", top: "52%", right: "2%", size: "28px", delay: "0.4s", animate: true },
] as const;

const STARS = [
  { top: "12%", left: "10%",  delay: "0s",   size: "5px" },
  { top: "20%", right: "12%", delay: "0.9s", size: "4px" },
  { top: "66%", left: "8%",   delay: "1.6s", size: "5px" },
  { top: "56%", right: "10%", delay: "0.3s", size: "6px" },
  { top: "82%", left: "20%",  delay: "1.3s", size: "4px" },
  { top: "7%",  right: "26%", delay: "2.1s", size: "5px" },
  { top: "35%", left: "14%",  delay: "0.7s", size: "3px" },
  { top: "48%", right: "16%", delay: "1.9s", size: "4px" },
  { top: "90%", right: "8%",  delay: "0.5s", size: "3px" },
  { top: "28%", left: "25%",  delay: "2.4s", size: "4px" },
];

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
        paddingBottom: "clamp(40px, 8vw, 80px)",
        paddingTop: "88px",
        background:
          "radial-gradient(ellipse at 15% 40%, rgba(30,136,229,0.1) 0%, transparent 55%)," +
          "radial-gradient(ellipse at 85% 15%, rgba(66,165,250,0.07) 0%, transparent 50%)," +
          "radial-gradient(ellipse at 50% 95%, rgba(13,71,161,0.07) 0%, transparent 55%)," +
          "linear-gradient(180deg, #FFFFFF 0%, #F5F9FF 35%, #EEF5FF 65%, #F5F9FF 100%)",
      }}
    >
      <AnimatedNumbers count={25} />

      {/* ── Large Om watermark — centered ── */}
      <div
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          fontSize: "min(58vw, 520px)",
          color: "rgba(212,175,55,0.12)",
          userSelect: "none", lineHeight: 1,
          fontFamily: "Georgia, serif",
          pointerEvents: "none", zIndex: 0,
          animation: "omPulse 9s ease-in-out infinite",
        }}
      >
        ॐ
      </div>

      {/* ── Lo Shu grid — bottom right ── */}
      <div style={{ position:"absolute", bottom:"80px", right:"clamp(8px,3%,32px)", opacity:0.35, zIndex:0, pointerEvents:"none", userSelect:"none" }}>
        <table style={{ borderCollapse:"collapse" }}>
          <tbody>
            {[[4,9,2],[3,5,7],[8,1,6]].map((row,i) => (
              <tr key={i}>
                {row.map((n,j) => (
                  <td key={j} style={{ width:"clamp(26px,6vw,40px)", height:"clamp(26px,6vw,40px)", border:"0.6px solid #D4AF37", textAlign:"center", fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(12px,3vw,20px)", fontWeight:700, color:"#D4AF37" }}>
                    {n}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Planet symbols ── */}
      {PLANET_SYMBOLS.map((p) => (
        <div
          key={p.symbol}
          style={{
            position: "absolute", top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? p.right : undefined,
            fontSize: p.size, color: "#D4AF37", opacity: 0.28,
            pointerEvents: "none", userSelect: "none", zIndex: 0,
            animation: p.animate ? `twinkle 4s ease-in-out ${p.delay} infinite` : `floatY 6s ease-in-out ${p.delay} infinite`,
          }}
        >
          {p.symbol}
        </div>
      ))}

      {/* ── Twinkling stars ── */}
      {STARS.map((s, i) => (
        <div key={i} style={{
          position: "absolute", top: s.top,
          left: (s as {left?:string}).left,
          right: (s as {right?:string}).right,
          width: s.size, height: s.size, borderRadius: "50%",
          background: "#42A5F5", boxShadow: `0 0 8px #42A5F5`,
          animation: `twinkle 3.5s ease-in-out ${s.delay} infinite`,
          pointerEvents: "none", zIndex: 0,
        }} />
      ))}

      {/* ── Content wrapper ── */}
      <div
        style={{
          position: "relative", zIndex: 2,
          textAlign: "center", maxWidth: "960px", width: "100%",
          padding: "0 clamp(16px, 5vw, 24px)", margin: "0 auto",
        }}
      >
        {/* Sri Yantra centered behind text */}
        <svg
          viewBox="0 0 300 300"
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(88vw, 580px)", height: "min(88vw, 580px)",
            opacity: 0.25, color: "#D4AF37",
            zIndex: 0, pointerEvents: "none",
            animation: "slowSpin 75s linear infinite",
          }}
          fill="none" stroke="currentColor" strokeLinecap="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="142" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="128" strokeWidth="0.4" />
          {[0,45,90,135,180,225,270,315].map((deg) => {
            const rad = (deg*Math.PI)/180;
            const cx2 = 150+98*Math.cos(rad);
            const cy2 = 150+98*Math.sin(rad);
            return <ellipse key={deg} cx={cx2} cy={cy2} rx={15} ry={24} strokeWidth="0.4" transform={`rotate(${deg},${cx2},${cy2})`} />;
          })}
          <polygon points="150,28 268,218 32,218" strokeWidth="1.2" />
          <polygon points="150,272 32,82 268,82" strokeWidth="1.2" />
          <polygon points="150,62 242,205 58,205" strokeWidth="0.8" />
          <polygon points="150,238 58,95 242,95" strokeWidth="0.8" />
          <polygon points="150,98 212,188 88,188" strokeWidth="0.6" />
          <polygon points="150,202 88,112 212,112" strokeWidth="0.6" />
          <polygon points="150,172 120,128 180,128" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="4" fill="currentColor" strokeWidth="0" />
          <circle cx="150" cy="150" r="12" strokeWidth="0.5" />
        </svg>

        {/* All text above yantra */}
        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Golden Om ornament row */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"12px", marginBottom:"22px", color:"rgba(212,175,55,0.8)", letterSpacing:"8px", fontSize:"0.78rem" }}>
            <span style={{ animation:"twinkle 2.5s ease-in-out infinite" }}>★</span>
            <span>✦</span>
            <span style={{ color:"rgba(212,175,55,1)", fontSize:"1.6rem", fontFamily:"Georgia,serif", animation:"goldenGlow 4s ease-in-out infinite", lineHeight:1 }}>ॐ</span>
            <span>✦</span>
            <span style={{ animation:"twinkle 2.5s ease-in-out 1s infinite" }}>★</span>
          </div>

          {/* Badge */}
          <div style={{ display:"flex", justifyContent:"center", marginBottom:"26px" }}>
            <div className="hero-badge badge-wrap" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(255,255,255,0.8)", backdropFilter:"blur(12px)", border:"1px solid rgba(66,165,250,0.4)", borderRadius:"30px", padding:"8px 22px", fontSize:"clamp(0.78rem,2vw,0.88rem)", color:"#1565C0", flexWrap:"wrap", justifyContent:"center", boxShadow:"0 2px 12px rgba(30,136,229,0.1)" }}>
              <span className="animate-shimmer" style={{ color:"#D4AF37" }}>✦</span>
              Certified Numerologist &amp; Vastu Shastra Expert
              <span className="animate-shimmer" style={{ color:"#D4AF37", animationDelay:"1s" }}>✦</span>
            </div>
          </div>

          {/* H1 */}
          <h1 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(2.8rem,7.5vw,5.5rem)", fontWeight:700, lineHeight:1.08, marginBottom:"28px", color:"#1A3A5C", letterSpacing:"-0.01em" }}>
            Unlock Your{" "}
            <span style={{ background:"linear-gradient(135deg,#C9932A,#E8B84B,#D4AF37)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Destiny
            </span>
            <br />
            Through{" "}
            <span style={{ background:"linear-gradient(135deg,#1565C0,#1E88E5,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Numbers &amp; Vastu
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize:"clamp(0.95rem,2.5vw,1.15rem)", color:"#2A5F8F", lineHeight:1.85, maxWidth:"660px", margin:"0 auto 12px" }}>
            Discover the hidden patterns governing your life. By blending ancient Vastu wisdom with precise numerological calculations, Monika — Faridabad&apos;s trusted Vastu consultant — brings the clarity you need to embrace your true potential.
          </p>
          <p style={{ fontSize:"clamp(0.78rem,2vw,0.9rem)", color:"#5B8DB8", margin:"0 auto 30px", maxWidth:"500px" }}>
            📍 Based in Faridabad, Haryana &nbsp;·&nbsp; Serving clients across all of India online
          </p>

          {/* Service pills */}
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"8px", marginBottom:"36px" }}>
            {["🔢 Numerology","🏡 Vastu Shastra","✍️ Name Correction","💫 Destiny Analysis"].map((item) => (
              <span key={item} style={{ fontSize:"clamp(0.72rem,1.9vw,0.85rem)", color:"#1565C0", background:"rgba(255,255,255,0.75)", backdropFilter:"blur(8px)", border:"1px solid rgba(66,165,250,0.35)", borderRadius:"20px", padding:"6px 14px", boxShadow:"0 2px 8px rgba(30,136,229,0.08)" }}>
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="btn-row" style={{ justifyContent:"center", marginBottom:"clamp(40px,8vw,64px)" }}>
            <Link href="/book" className="btn-gold" style={{ fontSize:"clamp(0.9rem,2vw,1rem)" }}>
              ✦ Book Your Session
            </Link>
            <a href={`https://wa.me/917027510541?text=${waMessage}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink:0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Monika
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats-grid">
            {[
              { value:"500+", label:"Clients Guided", icon:"👥" },
              { value:"5★",   label:"Avg Rating",    icon:"⭐" },
              { value:"5+",   label:"Yrs Practice",  icon:"🕐" },
              { value:"6",    label:"Services",      icon:"✦" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign:"center", padding:"clamp(12px,3vw,18px) clamp(6px,2vw,12px)", background:"rgba(255,255,255,0.8)", backdropFilter:"blur(12px)", border:"1px solid rgba(147,197,253,0.6)", borderRadius:"16px", boxShadow:"0 4px 16px rgba(30,136,229,0.07)" }}>
                <div style={{ fontSize:"clamp(14px,3vw,20px)", marginBottom:"4px" }}>{stat.icon}</div>
                <div style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.1rem,4vw,2rem)", fontWeight:700, background:"linear-gradient(135deg,#1565C0,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1 }}>
                  {stat.value}
                </div>
                <div style={{ color:"#5B8DB8", fontSize:"clamp(0.56rem,1.5vw,0.75rem)", marginTop:"4px", lineHeight:1.2 }}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>{/* end text layer */}
      </div>{/* end content wrapper */}

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"120px", background:"linear-gradient(to bottom, transparent, #F5F9FF)", zIndex:2, pointerEvents:"none" }} />
    </section>
  );
}
