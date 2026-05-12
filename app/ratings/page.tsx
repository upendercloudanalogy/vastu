import type { Metadata } from "next";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import LotusDivider from "@/components/LotusDivider";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
 title: "Client Reviews for Vastu & Numerology in Faridabad | Shivoham Guidance (5.0★)",
  description: "Genuine client reviews for Shivoham Guidance's Vastu & numerology consultations in Faridabad. Rated 5.0/5. Real transformation stories from across India.",
  alternates: { canonical: "https://www.shivohamguidance.com/ratings" },
};

export default function RatingsPage() {
  return (
    <>
      <StructuredData pageType="ratings" breadcrumbs={[{ name: "Client Reviews", url: "https://www.shivohamguidance.com/ratings" }]} />
      {/* Hero */}
      <section className="page-hero">
        {/* Zodiac wheel SVG watermark */}
        {(() => {
          const ZODIAC = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"] as const;
          return (
            <svg
              viewBox="0 0 300 300"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "min(80vw,500px)",
                height: "min(80vw,500px)",
                opacity: 0.06,
                pointerEvents: "none",
                zIndex: 0,
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer circle */}
              <circle cx="150" cy="150" r="130" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
              {/* Inner circle */}
              <circle cx="150" cy="150" r="100" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
              {/* 12 spokes */}
              {ZODIAC.map((_, i) => {
                const deg = i * 30 - 90;
                const rad = (deg * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1={150 + 0 * Math.cos(rad)}
                    y1={150 + 0 * Math.sin(rad)}
                    x2={150 + 130 * Math.cos(rad)}
                    y2={150 + 130 * Math.sin(rad)}
                    stroke="#D4AF37"
                    strokeWidth="0.4"
                  />
                );
              })}
              {/* 12 zodiac labels at r=110 */}
              {ZODIAC.map((sym, i) => {
                const deg = i * 30 - 90;
                const rad = (deg * Math.PI) / 180;
                const x = 150 + 110 * Math.cos(rad);
                const y = 150 + 110 * Math.sin(rad);
                return (
                  <text
                    key={i}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="14"
                    fill="#D4AF37"
                    fontFamily="Georgia,serif"
                  >
                    {sym}
                  </text>
                );
              })}
            </svg>
          );
        })()}

        {/* Decorative rings */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(300px, 80vw, 700px)", height: "clamp(300px, 80vw, 700px)", borderRadius: "50%", border: "1px dashed rgba(66,165,250,0.07)", animation: "slowSpin 40s linear infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(200px, 55vw, 500px)", height: "clamp(200px, 55vw, 500px)", borderRadius: "50%", border: "1px solid rgba(66,165,250,0.05)", animation: "counterSpin 30s linear infinite", pointerEvents: "none" }} />

        {/* Twinkling stars */}
        {[{ t: "12%", l: "6%", d: "0s" }, { t: "20%", r: "8%", d: "1s" }, { t: "75%", l: "4%", d: "0.5s" }, { t: "65%", r: "5%", d: "1.5s" }].map((s, i) => (
          <div key={i} style={{ position: "absolute", top: s.t, left: (s as { l?: string }).l, right: (s as { r?: string }).r, width: "5px", height: "5px", borderRadius: "50%", background: "#42A5F5", boxShadow: "0 0 6px #42A5F5", animation: `twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents: "none" }} />
        ))}

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-ornament">
            <span style={{ animation: "twinkle 2s ease-in-out infinite" }}>★</span>
            <span>✦</span>
            <span style={{ animation: "twinkle 2s ease-in-out 0.7s infinite" }}>★</span>
            <span>✦</span>
            <span style={{ animation: "twinkle 2s ease-in-out 1.4s infinite" }}>★</span>
          </div>
          <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "16px" }}>
            Client Stories
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px", lineHeight: 1.2 }}>
            Client Reviews —{" "}
            <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Vastu & Numerology Faridabad
            </span>
          </h1>
          <p style={{ color: "#90A4AE", fontSize: "clamp(0.9rem, 2vw, 1rem)", maxWidth: "520px", margin: "0 auto 36px", lineHeight: 1.8 }}>
            Hundreds of lives transformed through the power of numerology and Vastu Shastra. Read what our clients have to say.
          </p>

          {/* Rating Stats */}
          <div className="stats-row" style={{ maxWidth: "600px", margin: "0 auto" }}>
            {[
              { label: "Average Rating", value: "5.0 / 5", icon: "⭐" },
              { label: "Happy Clients", value: "6", icon: "🌟" },        // ← Changed from 100+ to 6
              { label: "5-Star Reviews", value: "100%", icon: "✦" },     // ← Changed from 95% to 100%
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center", padding: "clamp(16px, 4vw, 22px) clamp(20px, 5vw, 32px)", background: "rgba(7,26,48,0.8)", border: "1px solid #143D7A", borderRadius: "16px", flex: "1 1 120px" }}>
                <div style={{ fontSize: "clamp(22px, 5vw, 32px)", marginBottom: "8px" }}>{stat.icon}</div>
                <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 700, background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1, marginBottom: "6px" }}>
                  {stat.value}
                </div>
                <div style={{ color: "#90A4AE", fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* All Testimonials */}
      <section style={{ padding: "0 clamp(16px, 5vw, 24px) clamp(60px, 10vw, 100px)", background: "#020C18" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <TestimonialsSection />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 24px)", background: "linear-gradient(135deg, #061528, #071A30, #0A2040)", borderTop: "1px solid #143D7A", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,136,229,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "clamp(36px, 8vw, 52px)", marginBottom: "16px", animation: "floatY 4s ease-in-out infinite" }}>🙏</div>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px" }}>
            Your Transformation{" "}
            <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Starts Here
            </span>
          </h2>
          <p style={{ color: "#90A4AE", marginBottom: "32px", lineHeight: 1.8, fontSize: "clamp(0.88rem, 2vw, 1rem)" }}>
             Join satisfied clients and let Monika guide you toward your best life through the ancient wisdom of numerology and Vastu Shastra.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/book" className="btn-gold">✦ Book Your Session</Link>
            <a href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I've read the reviews and I'd like to book a session.")}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              💬 Message Monika
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
