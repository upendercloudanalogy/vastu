import Link from "next/link";
import LotusDivider from "./LotusDivider";

const services = [
  {
    icon: "🔢",
    title: "Personal Numerology Reading",
    description: "Unlock the secrets hidden in your Date of Birth. Understand the cycles of your life — when to change jobs, when to invest, when to make key decisions.",
    features: ["Life Path Number Analysis", "Destiny Number Insights", "Personal Year Forecast", "Timing & Life Cycles"],
    color: "#1E88E5",
    gradient: "linear-gradient(135deg, rgba(30,136,229,0.18), rgba(13,71,161,0.25))",
    symbol: "①",
  },
  {
    icon: "🏡",
    title: "Vastu Shastra Consultation",
    description: "Align your home and workspace with positive cosmic energy. Remove energetic blockages that hold you back from prosperity, health, and harmony.",
    features: ["Home Energy Assessment", "Room Direction Analysis", "Remedies & Corrections", "Business Vastu Guidance"],
    color: "#42A5F5",
    gradient: "linear-gradient(135deg, rgba(66,165,250,0.15), rgba(30,136,229,0.22))",
    symbol: "⑤",
  },
  {
    icon: "✍️",
    title: "Name Correction",
    description: "Your name vibrates at a specific frequency. Aligning it with your birth number can transform your luck, relationships, and professional success.",
    features: ["Name Vibration Analysis", "Numerological Compatibility", "Business Name Suggestions", "Baby Name Guidance"],
    color: "#1565C0",
    gradient: "linear-gradient(135deg, rgba(130,207,255,0.15), rgba(66,165,250,0.2))",
    symbol: "⑨",
  },
];

const steps = [
  { step: "01", icon: "📝", title: "Fill Booking Form", desc: "Share your name, date of birth, and what guidance you're seeking.", symbol: "✦" },
  { step: "02", icon: "💬", title: "WhatsApp Session", desc: "Monika will reach out on WhatsApp to schedule your private session.", symbol: "◯" },
  { step: "03", icon: "🌟", title: "Transform Your Life", desc: "Receive your personalized roadmap, insights, and actionable guidance.", symbol: "△" },
];

export default function ServicesSection() {
  return (
    <section style={{ padding: "clamp(60px,10vw,100px) clamp(16px,5vw,24px)", background: "#EFF6FF", position: "relative" }}>

      {/* Vastu compass watermark — top-right */}
      <svg
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "clamp(80px,15vw,160px)",
          height: "clamp(80px,15vw,160px)",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
        {/* Cardinal spokes N/S/E/W */}
        <line x1="50" y1="5"  x2="50" y2="95" stroke="#D4AF37" strokeWidth="0.6" />
        <line x1="5"  y1="50" x2="95" y2="50" stroke="#D4AF37" strokeWidth="0.6" />
        {/* Diagonal spokes */}
        <line x1="18" y1="18" x2="82" y2="82" stroke="#D4AF37" strokeWidth="0.4" />
        <line x1="82" y1="18" x2="18" y2="82" stroke="#D4AF37" strokeWidth="0.4" />
        {/* Direction labels */}
        <text x="50" y="12"  textAnchor="middle" fontSize="7" fill="#D4AF37" fontFamily="Georgia,serif">N</text>
        <text x="50" y="96"  textAnchor="middle" fontSize="7" fill="#D4AF37" fontFamily="Georgia,serif">S</text>
        <text x="94" y="53"  textAnchor="middle" fontSize="7" fill="#D4AF37" fontFamily="Georgia,serif">E</text>
        <text x="6"  y="53"  textAnchor="middle" fontSize="7" fill="#D4AF37" fontFamily="Georgia,serif">W</text>
        {/* Center dot */}
        <circle cx="50" cy="50" r="2" fill="#D4AF37" />
      </svg>

      {/* Sacred geometry background */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(400px,80vw,900px)", height: "clamp(400px,80vw,900px)", borderRadius: "50%", border: "1px solid rgba(30,136,229,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(280px,60vw,650px)", height: "clamp(280px,60vw,650px)", borderRadius: "50%", border: "1px dashed rgba(66,165,250,0.05)", animation: "slowSpin 50s linear infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(500px,90vw,1000px)", height: "clamp(500px,90vw,1000px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,136,229,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      {/* Twinkling stars */}
      {[{t:"5%",l:"3%",d:"0s"},{t:"8%",r:"4%",d:"1.2s"},{t:"90%",l:"2%",d:"0.6s"},{t:"85%",r:"3%",d:"1.8s"},{t:"45%",l:"1%",d:"2.5s"},{t:"50%",r:"2%",d:"0.3s"}].map((s,i)=>(
        <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"4px", height:"4px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 6px #42A5F5", animation:`twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents:"none" }} />
      ))}

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
          <div className="section-ornament">
            <span style={{ animation: "twinkle 2s ease-in-out infinite" }}>★</span>
            <span>✦</span>
            <span style={{ animation: "twinkle 2s ease-in-out 0.8s infinite" }}>★</span>
            <span>✦</span>
            <span style={{ animation: "twinkle 2s ease-in-out 1.6s infinite" }}>★</span>
          </div>
          <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "16px" }}>
            ✦ What I Offer ✦
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: "#1A3A5C", marginBottom: "16px", lineHeight: 1.2 }}>
            Services Tailored to{" "}
            <span style={{ background: "linear-gradient(135deg,#1565C0,#42A5F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Your Journey
            </span>
          </h2>
          <p style={{ color: "#4B7BA8", fontSize: "clamp(0.9rem,2vw,1rem)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
            From personal numerology readings to comprehensive Vastu consultations — every service is personalized to your unique energetic blueprint.
          </p>
        </div>

        {/* Service Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,280px),1fr))", gap: "clamp(16px,4vw,28px)" }}>
          {services.map((service) => (
            <div key={service.title} className="mystic-card" style={{ padding: "clamp(24px,4vw,36px) clamp(20px,4vw,28px)", position: "relative", overflow: "hidden" }}>

              {/* Decorative symbol in background */}
              <div style={{ position: "absolute", top: "12px", right: "16px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem,6vw,3.5rem)", fontWeight: 700, color: `${service.color}10`, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
                {service.symbol}
              </div>

              {/* Corner glow */}
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "80px", height: "80px", background: `radial-gradient(circle at bottom right, ${service.color}15, transparent 70%)`, pointerEvents: "none" }} />

              {/* Icon */}
              <div style={{ width: "clamp(48px,8vw,64px)", height: "clamp(48px,8vw,64px)", borderRadius: "16px", background: service.gradient, border: `1px solid ${service.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(22px,4vw,28px)", marginBottom: "20px" }}>
                {service.icon}
              </div>

              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.2rem,3vw,1.5rem)", fontWeight: 700, color: "#1A3A5C", marginBottom: "12px" }}>
                {service.title}
              </h3>
              <p style={{ color: "#4B7BA8", fontSize: "clamp(0.85rem,2vw,0.9rem)", lineHeight: 1.75, marginBottom: "24px" }}>
                {service.description}
              </p>

              <ul style={{ listStyle: "none", marginBottom: "28px" }}>
                {service.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#1565C0", fontSize: "clamp(0.8rem,2vw,0.875rem)", marginBottom: "10px" }}>
                    <span style={{ color: service.color, flexShrink: 0, fontSize: "0.7rem" }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/book" style={{ color: service.color, textDecoration: "none", fontSize: "clamp(0.85rem,2vw,0.9rem)", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                Book this service →
              </Link>
            </div>
          ))}
        </div>

        {/* Panch Bhuta — 5 Elements band */}
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(16px,4vw,40px)", flexWrap: "wrap", margin: "clamp(32px,5vw,48px) auto", maxWidth: "700px" }}>
          {([
            { symbol: "▣", name: "Prithvi", label: "Earth", color: "#8B6914" },
            { symbol: "≋", name: "Jal",     label: "Water", color: "#1E88E5" },
            { symbol: "▲", name: "Agni",    label: "Fire",  color: "#C0392B" },
            { symbol: "○", name: "Vayu",    label: "Air",   color: "#1565C0" },
            { symbol: "◉", name: "Akash",   label: "Space", color: "#9B59B6" },
          ] as const).map((el) => (
            <div key={el.name} style={{ textAlign: "center", opacity: 0.7 }}>
              <div style={{ width: "clamp(44px,8vw,56px)", height: "clamp(44px,8vw,56px)", borderRadius: "12px", border: `1px solid ${el.color}40`, background: `${el.color}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(18px,4vw,24px)", color: el.color, margin: "0 auto 8px" }}>
                {el.symbol}
              </div>
              <div style={{ color: el.color, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "1px" }}>{el.name}</div>
              <div style={{ color: "#5B8DB8", fontSize: "0.65rem" }}>{el.label}</div>
            </div>
          ))}
        </div>

        <LotusDivider />

        {/* How It Works */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "clamp(28px,5vw,48px)" }}>
            <div className="section-ornament">
              <span>◯</span><span>△</span><span>◯</span>
            </div>
            <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "16px" }}>
              ✦ Simple Process ✦
            </span>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.6rem,3.5vw,2.5rem)", fontWeight: 700, color: "#1A3A5C" }}>
              How It <span style={{ background: "linear-gradient(135deg,#1565C0,#42A5F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Works</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,240px),1fr))", gap: "clamp(16px,4vw,24px)" }}>
            {steps.map((step, idx) => (
              <div key={step.step} style={{ textAlign: "center", padding: "clamp(24px,4vw,36px) clamp(16px,4vw,24px)", background: "rgba(219,234,254,0.8)", border: "1px solid #93C5FD", borderRadius: "20px", position: "relative", overflow: "hidden" }}>

                {/* Background sacred symbol */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(4rem,10vw,7rem)", fontWeight: 700, color: "rgba(30,136,229,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
                  {step.symbol}
                </div>

                {/* Step number */}
                <div style={{ position: "absolute", top: "12px", right: "16px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "rgba(30,136,229,0.1)", lineHeight: 1 }}>
                  {step.step}
                </div>

                {/* Corner glow */}
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "60px", height: "60px", background: "radial-gradient(circle at bottom left, rgba(66,165,250,0.08), transparent 70%)", pointerEvents: "none" }} />

                <div style={{ fontSize: "clamp(32px,6vw,44px)", marginBottom: "16px", position: "relative", zIndex: 1, animation: `floatY ${4 + idx * 0.5}s ease-in-out infinite` }}>
                  {step.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.1rem,3vw,1.35rem)", fontWeight: 700, color: "#1A3A5C", marginBottom: "10px", position: "relative", zIndex: 1 }}>
                  {step.title}
                </h3>
                <p style={{ color: "#4B7BA8", fontSize: "clamp(0.82rem,2vw,0.9rem)", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
