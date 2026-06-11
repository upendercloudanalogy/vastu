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

const ZODIAC = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"] as const;

export default function RatingsPage() {
  return (
    <>
      <StructuredData pageType="ratings" breadcrumbs={[{ name: "Client Reviews", url: "https://www.shivohamguidance.com/ratings" }]} />

      <section className="page-hero" style={{ paddingTop: "130px" }}>
        <svg viewBox="0 0 300 300" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"min(80vw,500px)", height:"min(80vw,500px)", opacity:0.07, pointerEvents:"none", zIndex:0, animation:"slowSpinNoTranslate 60s linear infinite" }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="130" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="150" cy="150" r="100" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
          {ZODIAC.map((_,i) => {
            const rad = (i*30-90)*Math.PI/180;
            return <line key={i} x1={150} y1={150} x2={150+130*Math.cos(rad)} y2={150+130*Math.sin(rad)} stroke="#D4AF37" strokeWidth="0.4" />;
          })}
          {ZODIAC.map((sym,i) => {
            const rad = (i*30-90)*Math.PI/180;
            return <text key={i} x={150+110*Math.cos(rad)} y={150+110*Math.sin(rad)} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="#D4AF37" fontFamily="Georgia,serif">{sym}</text>;
          })}
        </svg>
        {[{t:"10%",l:"5%",d:"0s"},{t:"18%",r:"6%",d:"1s"},{t:"72%",l:"3%",d:"0.5s"},{t:"62%",r:"4%",d:"1.5s"},{t:"40%",l:"8%",d:"2s"},{t:"35%",r:"9%",d:"0.8s"}].map((s,i)=>(
          <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"5px", height:"5px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 6px #42A5F5", animation:`twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents:"none", zIndex:0 }} />
        ))}
        <div style={{ position:"relative", zIndex:1 }}>
          <div className="section-ornament">
            <span style={{ animation:"twinkle 2s ease-in-out infinite" }}>★</span>
            <span style={{ color:"rgba(212,175,55,0.9)", fontFamily:"Georgia,serif", fontSize:"1.2rem", animation:"goldenGlow 4s ease-in-out infinite" }}>ॐ</span>
            <span style={{ animation:"twinkle 2s ease-in-out 0.7s infinite" }}>★</span>
          </div>
          <span style={{ color:"rgba(212,175,55,0.75)", fontSize:"0.82rem", letterSpacing:"4px", textTransform:"uppercase" as const, fontWeight:600, display:"block", marginBottom:"14px" }}>✦ Client Stories ✦</span>
          <h1 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(2.2rem,5vw,3.5rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"16px", lineHeight:1.15 }}>
            Client Reviews —{" "}
            <span style={{ background:"linear-gradient(135deg,#1565C0,#1E88E5,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Vastu &amp; Numerology Faridabad
            </span>
          </h1>
          <p style={{ color:"#4B7BA8", fontSize:"clamp(0.9rem,2vw,1rem)", maxWidth:"520px", margin:"0 auto 40px", lineHeight:1.8 }}>
            Hundreds of lives transformed through the power of numerology and Vastu Shastra.
          </p>
          <div className="stats-row" style={{ maxWidth:"600px", margin:"0 auto" }}>
            {[
              { label:"Average Rating", value:"5.0 / 5", icon:"⭐" },
              { label:"Happy Clients",  value:"6",       icon:"🌟" },
              { label:"5-Star Reviews", value:"100%",    icon:"✦" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign:"center", padding:"clamp(16px,4vw,22px) clamp(20px,5vw,32px)", background:"rgba(255,255,255,0.85)", backdropFilter:"blur(12px)", border:"1px solid rgba(147,197,253,0.6)", borderRadius:"18px", flex:"1 1 120px", boxShadow:"0 4px 20px rgba(30,136,229,0.08)" }}>
                <div style={{ fontSize:"clamp(22px,5vw,30px)", marginBottom:"8px" }}>{stat.icon}</div>
                <div style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.6rem,4vw,2rem)", fontWeight:700, background:"linear-gradient(135deg,#1565C0,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1, marginBottom:"6px" }}>
                  {stat.value}
                </div>
                <div style={{ color:"#5B8DB8", fontSize:"clamp(0.72rem,1.8vw,0.82rem)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LotusDivider />

      <section style={{ padding:"0 clamp(16px,5vw,24px) clamp(60px,10vw,100px)", background:"#FFFFFF" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <TestimonialsSection />
        </div>
      </section>

      <section style={{ padding:"clamp(48px,8vw,80px) clamp(16px,5vw,24px)", background:"linear-gradient(135deg,#EEF5FF,#DBEAFE,#EEF5FF)", borderTop:"1px solid rgba(147,197,253,0.5)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", fontSize:"min(35vw,280px)", color:"rgba(212,175,55,0.05)", userSelect:"none", lineHeight:1, fontFamily:"Georgia,serif", pointerEvents:"none", animation:"omPulse 8s ease-in-out infinite" }}>ॐ</div>
        <div style={{ position:"relative", zIndex:1, maxWidth:"600px", margin:"0 auto" }}>
          <div style={{ fontSize:"clamp(36px,8vw,52px)", marginBottom:"16px", animation:"floatY 4s ease-in-out infinite" }}>🙏</div>
          <div className="section-ornament" style={{ marginBottom:"12px" }}><span>✦</span><span>◯</span><span>✦</span></div>
          <h2 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"16px" }}>
            Your Transformation{" "}
            <span style={{ background:"linear-gradient(135deg,#1565C0,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Starts Here</span>
          </h2>
          <p style={{ color:"#4B7BA8", marginBottom:"32px", lineHeight:1.8, fontSize:"clamp(0.88rem,2vw,1rem)" }}>
            Join satisfied clients and let Monika guide you toward your best life through numerology and Vastu Shastra.
          </p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <Link href="/book" className="btn-gold">✦ Book Your Session</Link>
            <a href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I've read the reviews and I'd like to book a session.")}`} target="_blank" rel="noopener noreferrer" className="btn-outline">💬 Message Monika</a>
          </div>
        </div>
      </section>
    </>
  );
}
