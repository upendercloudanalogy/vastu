import Image from "next/image";

export default function AboutSection() {
  const credentials = [
    { icon: "🎓", text: "Masters in Numerology & Vastu Shastra" },
    { icon: "✦", text: "Specialized in Advanced Numerology & Destiny Analysis" },
    { icon: "🏡", text: "Expert in Vastu-Based Energy Alignment for Homes & Businesses" },
    { icon: "🔢", text: "Certified in Name Correction & Numerological Analysis" },
    { icon: "💫", text: "6+ Clients Guided Across India" },
  ];

  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)",
        background: "linear-gradient(180deg, #020C18 0%, #061528 50%, #020C18 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sacred geometry rings */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(500px,90vw,1000px)", height: "clamp(500px,90vw,1000px)", borderRadius: "50%", border: "1px solid rgba(30,136,229,0.03)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(350px,70vw,750px)", height: "clamp(350px,70vw,750px)", borderRadius: "50%", border: "1px dashed rgba(66,165,250,0.05)", animation: "slowSpin 60s linear infinite", pointerEvents: "none" }} />

      {/* Right glow */}
      <div style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(66,165,250,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-60px", top: "30%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(30,136,229,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Twinkling stars */}
      {[{t:"8%",l:"5%",d:"0s"},{t:"15%",r:"6%",d:"1s"},{t:"80%",l:"3%",d:"0.5s"},{t:"70%",r:"4%",d:"1.5s"},{t:"40%",l:"1%",d:"2s"},{t:"55%",r:"2%",d:"0.8s"}].map((s,i)=>(
        <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"4px", height:"4px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 6px #42A5F5", animation:`twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents:"none" }} />
      ))}

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Label */}
        <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 36px)" }}>
          <div className="section-ornament">
            <span style={{ animation: "twinkle 2s ease-in-out infinite" }}>★</span>
            <span>✦</span>
            <span style={{ animation: "twinkle 2s ease-in-out 0.7s infinite" }}>★</span>
          </div>
          <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600 }}>
            ✦ About Your Guide ✦
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(32px, 6vw, 60px)",
            alignItems: "center",
          }}
        >
          {/* Avatar Column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              {/* Metatron's Cube — Flower of Life SVG */}
              <svg
                viewBox="-160 -160 320 320"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "min(420px,100vw)",
                  height: "min(420px,100vw)",
                  opacity: 0.11,
                  color: "#D4AF37",
                  pointerEvents: "none",
                }}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central circle */}
                <circle cx="0" cy="0" r="50" />
                {/* 6 surrounding circles at 60° intervals, each centered at distance 50 */}
                {[0,60,120,180,240,300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const cx = 50 * Math.cos(rad);
                  const cy = 50 * Math.sin(rad);
                  return <circle key={deg} cx={cx} cy={cy} r="50" />;
                })}
                {/* Outer ring */}
                <circle cx="0" cy="0" r="100" />
                {/* Metatron connecting lines — all 7 center-to-center connections */}
                {/* Center to each of the 6 surrounding circles */}
                {[0,60,120,180,240,300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 50 * Math.cos(rad);
                  const y = 50 * Math.sin(rad);
                  return <line key={`c${deg}`} x1="0" y1="0" x2={x} y2={y} strokeWidth="0.4" />;
                })}
                {/* Adjacent surrounding circles connected */}
                {[0,60,120,180,240,300].map((deg, idx) => {
                  const next = [0,60,120,180,240,300][(idx + 1) % 6];
                  const r1 = (deg * Math.PI) / 180;
                  const r2 = (next * Math.PI) / 180;
                  return (
                    <line
                      key={`e${deg}`}
                      x1={50 * Math.cos(r1)} y1={50 * Math.sin(r1)}
                      x2={50 * Math.cos(r2)} y2={50 * Math.sin(r2)}
                      strokeWidth="0.4"
                    />
                  );
                })}
                {/* Skip-one connections (Star of David pattern) */}
                {[0,60,120,180,240,300].map((deg, idx) => {
                  const skip = [0,60,120,180,240,300][(idx + 2) % 6];
                  const r1 = (deg * Math.PI) / 180;
                  const r2 = (skip * Math.PI) / 180;
                  return (
                    <line
                      key={`s${deg}`}
                      x1={50 * Math.cos(r1)} y1={50 * Math.sin(r1)}
                      x2={50 * Math.cos(r2)} y2={50 * Math.sin(r2)}
                      strokeWidth="0.3"
                    />
                  );
                })}
              </svg>

              {/* Outer radial glow */}
              <div style={{ position: "absolute", inset: "-30px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 70%)" }} />
              {/* Outer spinning ring */}
              <div style={{ position: "absolute", inset: "-18px", borderRadius: "50%", border: "1px solid rgba(30,136,229,0.15)", animation: "counterSpin 35s linear infinite" }} />
              {/* Inner spinning dashed ring */}
              <div style={{ position: "absolute", inset: "-8px", borderRadius: "50%", border: "2px dashed rgba(66,165,250,0.4)", animation: "slowSpin 20s linear infinite" }} />

              {/* Avatar image */}
              <div
                style={{
                  width: "min(280px, 70vw)",
                  height: "min(280px, 70vw)",
                  borderRadius: "50%",
                  border: "3px solid rgba(30,136,229,0.5)",
                  overflow: "hidden",
                  boxShadow: "0 0 50px rgba(30,136,229,0.25), inset 0 0 40px rgba(2,12,24,0.5)",
                  position: "relative",
                }}
              >
                <Image
                  src="/avatar.svg"
                  alt="Monika - Expert Numerologist & Vastu Consultant"
                  fill
                  sizes="(max-width: 480px) 70vw, 280px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Floating numerology number badges */}
              <div style={{ position: "absolute", top: "-4px", right: "-4px", width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #1E88E5, #0D47A1)", border: "2px solid rgba(66,165,250,0.6)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "14px", fontWeight: 700, color: "#FFFFFF", boxShadow: "0 0 14px rgba(30,136,229,0.5)", animation: "floatY 4s ease-in-out infinite" }}>
                9
              </div>
              <div style={{ position: "absolute", bottom: "8px", left: "-8px", width: "30px", height: "30px", borderRadius: "50%", background: "linear-gradient(135deg, #42A5F5, #1E88E5)", border: "2px solid rgba(66,165,250,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "12px", fontWeight: 700, color: "#FFFFFF", boxShadow: "0 0 10px rgba(66,165,250,0.4)", animation: "floatY 5s ease-in-out 1s infinite" }}>
                1
              </div>
            </div>

            {/* Name */}
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.4rem, 4vw, 1.8rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "4px" }}>
                Monika
              </h3>
              <p style={{ color: "#42A5F5", fontSize: "clamp(0.8rem, 2vw, 0.9rem)", letterSpacing: "1px" }}>
                Numerologist &amp; Vastu Shastra Expert
              </p>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: "8px", marginTop: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              {["⭐ 4.9 Rated", "✓ Certified", "🇮🇳 India Wide"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    background: "rgba(30,136,229,0.15)",
                    border: "1px solid #143D7A",
                    borderRadius: "20px",
                    padding: "5px 12px",
                    fontSize: "clamp(0.72rem, 2vw, 0.8rem)",
                    color: "#82CFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "20px",
                color: "#EDF4FF",
              }}
            >
              Your Guide to{" "}
              <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Cosmic Clarity
              </span>
            </h2>

            <p style={{ color: "#90A4AE", lineHeight: 1.8, marginBottom: "16px", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
              Monika is a certified Vastu Shastra consultant and numerology practitioner based in <strong style={{ color: "#B3E5FC" }}>Faridabad, Haryana</strong>, with specialized training in advanced numerology, destiny analysis, name correction, and Vastu-based energy alignment for homes and businesses across India.
            </p>

            <p style={{ color: "#90A4AE", lineHeight: 1.8, marginBottom: "32px", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
              With a Masters in Numerology and Vastu Shastra, Monika brings expert insights to guide people in making better life decisions through numbers and energy alignment — providing practical, actionable solutions to attract success, harmony, and well-being. All consultations are available online via WhatsApp, serving clients across Faridabad, Delhi NCR, and all of India.
            </p>

            <ul style={{ listStyle: "none" }}>
              {credentials.map((cred, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                  <span
                    style={{
                      width: "clamp(32px, 6vw, 40px)",
                      height: "clamp(32px, 6vw, 40px)",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, rgba(30,136,229,0.2), rgba(13,71,161,0.25))",
                      border: "1px solid rgba(30,136,229,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(14px, 3vw, 18px)",
                      flexShrink: 0,
                      boxShadow: "0 0 10px rgba(30,136,229,0.1)",
                    }}
                  >
                    {cred.icon}
                  </span>
                  <span style={{ color: "#EDF4FF", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: 1.5, paddingTop: "6px" }}>
                    {cred.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Numbers row */}
            <div style={{ display: "flex", gap: "clamp(12px, 3vw, 20px)", marginTop: "28px", flexWrap: "wrap" }}>
              {[
                { num: "①", label: "Life Path", color: "#1E88E5" },
                { num: "③", label: "Destiny", color: "#42A5F5" },
                { num: "⑨", label: "Soul Urge", color: "#82CFFF" },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: "center", padding: "10px 16px", background: "rgba(7,26,48,0.6)", border: `1px solid ${item.color}30`, borderRadius: "12px" }}>
                  <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 700, color: item.color, lineHeight: 1 }}>{item.num}</div>
                  <div style={{ color: "#607D8B", fontSize: "0.72rem", marginTop: "4px" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
