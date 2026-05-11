import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import LotusDivider from "@/components/LotusDivider";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Vastu & Numerology Fees in Faridabad | Shivoham Guidance | Monika Faridabad",
  description:
    "Vastu & numerology fees by Shivoham Guidance, Faridabad. Numerology from ₹2,100. Vastu for home, new construction & commercial properties. Serving pan India.",
  alternates: { canonical: "https://www.shivohamguidance.com/payments" },
};

const numerologyPackages = [
  {
    title: "Mini Consultation Call",
    price: "₹2,100",
    description: "Quick Numerology Guidance",
    features: ["Life Path Number Overview", "Lucky Numbers & Dates", "Career or Relationship Query", "Key Insights for Your Question", "30-min WhatsApp Call"],
  },
  {
    title: "Detailed Numerology Session",
    price: "₹5,100",
    description: "In-Depth Personal Numerology",
    features: ["Full Life Path Analysis", "Destiny & Soul Number Reading", "Personal Year Forecast", "Career, Finance & Relationship Insights", "Name Vibration Check", "60-min WhatsApp Session"],
    isPremium: false,
    badge: "Most Popular",
  },
];

const vastuPackages = [
  {
    title: "Vastu Guidance Session",
    price: "₹11,000",
    description: "Online Vastu Consultation",
    features: ["Home Energy Assessment (Online)", "Room Direction Analysis", "Vastu Remedies & Corrections", "Lucky Colors & Directions", "45-min WhatsApp Session"],
  },
  {
    title: "Old Home Vastu",
    price: "₹25,000",
    description: "Vastu for Existing Homes",
    features: ["Complete On-Site Assessment", "Room-by-Room Energy Analysis", "Remedies Without Major Renovation", "Main Door & Kitchen Direction", "Bedroom Placement Guidance", "Detailed Vastu Report"],
  },
  {
    title: "New Home Vastu Shastra",
    price: "₹45,000",
    description: "Vastu for New Construction",
    features: ["Blueprint & Planning Stage Review", "Plot & Direction Analysis", "Complete Layout Optimization", "Vastu-Compliant Room Placement", "Materials & Colors Guidance", "Full Written Report + Follow-up"],
    isPremium: true,
    badge: "Best Value",
  },
  {
    title: "Commercial Vastu",
    price: "₹71,000",
    description: "Hotel · Restaurant · Hospital · Clinic · Shop · Farm house · Dispensary",
    features: ["Complete Commercial Assessment", "Business Energy Optimization", "Entry & Cash Counter Direction", "Staff & Customer Flow Analysis", "All Property Types Covered", "Detailed Report + Follow-up"],
  },
];

const faqs = [
  { q: "How does the consultation work?", a: "After booking, Monika will contact you via WhatsApp to schedule your session. Numerology sessions are done over WhatsApp call. Vastu on-site visits are scheduled based on your location." },
  { q: "What information do I need for Numerology?", a: "Your full name (as on birth certificate) and date of birth. For couple or family sessions, the same details for each person." },
  { q: "What is needed for Vastu?", a: "For online Vastu — photos of your home and a rough floor plan. For on-site visits — your address. For new construction — the architectural blueprint." },
  { q: "How long does it take to receive my reading?", a: "Numerology sessions are typically within 24–48 hours of payment. On-site Vastu visits are scheduled within 3–5 business days." },
  { q: "Is there a refund policy?", a: "We're confident in the value of every session. If you have any concerns, reach out to Monika directly on WhatsApp and she'll address them personally." },
  { q: "Can I book for someone else as a gift?", a: "Absolutely! Numerology readings make wonderful gifts. Simply mention it in the message field during booking." },
];

function SectionHeading({ label, title, highlight }: { label: string; title: string; highlight: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px", color: "rgba(66,165,250,0.4)", fontSize: "0.7rem", letterSpacing: "6px" }}>
        <span>★</span><span>✦</span><span>★</span>
      </div>
      <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "12px" }}>
        {label}
      </span>
      <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#EDF4FF", lineHeight: 1.2 }}>
        {title}{" "}
        <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          {highlight}
        </span>
      </h2>
    </div>
  );
}

export default function PaymentsPage() {
  return (
    <>
      <StructuredData pageType="payments" breadcrumbs={[{ name: "Pricing & Services", url: "https://www.shivohamguidance.com/payments" }]} />
      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: "120px", paddingBottom: "clamp(40px, 6vw, 60px)" }}>
        {/* Decorative rings */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(300px, 80vw, 700px)", height: "clamp(300px, 80vw, 700px)", borderRadius: "50%", border: "1px dashed rgba(66,165,250,0.07)", animation: "slowSpin 50s linear infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(200px, 55vw, 500px)", height: "clamp(200px, 55vw, 500px)", borderRadius: "50%", border: "1px solid rgba(66,165,250,0.05)", animation: "counterSpin 35s linear infinite", pointerEvents: "none" }} />

        {/* Twinkling stars */}
        {[{t:"12%",l:"5%",d:"0s"},{t:"18%",r:"7%",d:"1s"},{t:"75%",l:"3%",d:"0.5s"},{t:"65%",r:"4%",d:"1.5s"}].map((s,i)=>(
          <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"5px", height:"5px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 6px #42A5F5", animation:`twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents:"none" }} />
        ))}

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-ornament">
            <span style={{ animation: "twinkle 2s ease-in-out infinite" }}>★</span>
            <span>✦</span>
            <span style={{ animation: "twinkle 2s ease-in-out 0.7s infinite" }}>★</span>
            <span>✦</span>
            <span style={{ animation: "twinkle 2s ease-in-out 1.4s infinite" }}>★</span>
          </div>
          <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "16px" }}>
            ✦ Services & Pricing ✦
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px", lineHeight: 1.2 }}>
            Vastu & Numerology{" "}
            <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Services in Faridabad
            </span>
          </h1>
          <p style={{ color: "#90A4AE", fontSize: "clamp(0.9rem, 2vw, 1rem)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Every session is personalized and delivered with care — whether you need numerology guidance or a complete Vastu transformation.
          </p>
        </div>
      </section>

      <LotusDivider />

      {/* ── Numerology Section ── */}
      <section style={{ padding: "clamp(40px, 6vw, 64px) clamp(16px, 5vw, 24px)", background: "#020C18", position: "relative" }}>
        {/* Background numerology watermark */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(8rem, 20vw, 16rem)", fontWeight: 700, color: "rgba(30,136,229,0.02)", userSelect: "none", pointerEvents: "none", lineHeight: 1 }}>
          ①
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionHeading label="🔢 Numerology" title="Know Your" highlight="Numbers" />
          {/* Lo Shu Magic Square watermark */}
          <div style={{ position: "absolute", bottom: "20px", left: "20px", opacity: 0.04, userSelect: "none", pointerEvents: "none" }}>
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>
                {[[4,9,2],[3,5,7],[8,1,6]].map((row, i) => (
                  <tr key={i}>
                    {row.map((n, j) => (
                      <td key={j} style={{ width: "40px", height: "40px", border: "0.5px solid #D4AF37", textAlign: "center" as const, fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "20px", fontWeight: 700, color: "#D4AF37" }}>{n}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(16px, 3vw, 28px)", paddingTop: "20px" }}>
            {numerologyPackages.map((pkg) => <PricingCard key={pkg.title} {...pkg} />)}
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* ── Vastu Section ── */}
      <section style={{ padding: "clamp(40px, 6vw, 64px) clamp(16px, 5vw, 24px) clamp(48px, 8vw, 80px)", background: "linear-gradient(180deg, #020C18 0%, #061528 100%)", position: "relative" }}>
        {/* Background vastu watermark */}
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(8rem, 20vw, 16rem)", fontWeight: 700, color: "rgba(30,136,229,0.02)", userSelect: "none", pointerEvents: "none", lineHeight: 1 }}>
          ⑤
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionHeading label="🏡 Vastu Shastra" title="Transform Your" highlight="Space" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "clamp(16px, 3vw, 28px)", paddingTop: "20px" }}>
            {vastuPackages.map((pkg) => <PricingCard key={pkg.title} {...pkg} />)}
          </div>

          {/* Payment note */}
          <div style={{ textAlign: "center", marginTop: "48px", padding: "clamp(16px, 4vw, 24px)", background: "rgba(30,136,229,0.08)", border: "1px solid rgba(30,136,229,0.2)", borderRadius: "16px", maxWidth: "700px", margin: "48px auto 0" }}>
            <p style={{ color: "#B3E5FC", fontSize: "clamp(0.88rem, 2vw, 0.95rem)", lineHeight: 1.7, marginBottom: "8px" }}>
              <strong style={{ color: "#FFFFFF" }}>💳 Payment Process:</strong> After booking via WhatsApp, Monika will share payment details (UPI / Bank Transfer). Your session is confirmed upon payment.
            </p>
            <p style={{ color: "#90A4AE", fontSize: "0.85rem" }}>All prices are inclusive of GST where applicable.</p>
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* What's included */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 24px)", background: "#020C18" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <div className="section-ornament"><span>◯</span><span>△</span><span>◯</span></div>
            <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "12px" }}>✦ Always Included ✦</span>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "12px" }}>
              Every Session Includes
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "clamp(12px, 3vw, 20px)" }}>
            {[
              { icon: "🔢", title: "Deep Analysis", desc: "Thorough numerological or Vastu assessment" },
              { icon: "💡", title: "Actionable Insights", desc: "Practical guidance you can apply immediately" },
              { icon: "🎯", title: "Personalized Report", desc: "Tailored to your unique situation" },
              { icon: "💬", title: "WhatsApp Support", desc: "Follow-up questions always welcome" },
              { icon: "🌙", title: "Predictive Insights", desc: "Upcoming opportunities & challenges" },
              { icon: "✦", title: "Lucky Elements", desc: "Numbers, colors, dates & directions" },
            ].map((item, i) => (
              <div key={item.title} style={{ padding: "clamp(16px, 3vw, 24px) clamp(14px, 3vw, 20px)", background: "rgba(7,26,48,0.6)", border: "1px solid #143D7A", borderRadius: "14px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "4rem", fontWeight: 700, color: "rgba(30,136,229,0.04)", userSelect: "none", pointerEvents: "none" }}>✦</div>
                <div style={{ fontSize: "clamp(24px, 5vw, 32px)", marginBottom: "12px", animation: `floatY ${4 + i * 0.3}s ease-in-out infinite` }}>{item.icon}</div>
                <h4 style={{ color: "#EDF4FF", fontWeight: 600, marginBottom: "6px", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", position: "relative", zIndex: 1 }}>{item.title}</h4>
                <p style={{ color: "#90A4AE", fontSize: "clamp(0.78rem, 2vw, 0.85rem)", position: "relative", zIndex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* FAQ */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 24px)", background: "linear-gradient(180deg, #020C18, #061528)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "12px" }}>✦ FAQ ✦</span>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#EDF4FF" }}>
              Common Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2vw, 16px)" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "linear-gradient(135deg, #071A30, #0A2040)", border: "1px solid #143D7A", borderRadius: "14px", padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "50%", right: "16px", transform: "translateY(-50%)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "3rem", fontWeight: 700, color: "rgba(30,136,229,0.05)", userSelect: "none", pointerEvents: "none" }}>✦</div>
                <h3 style={{ color: "#B3E5FC", fontWeight: 600, fontSize: "clamp(0.88rem, 2vw, 1rem)", marginBottom: "10px", display: "flex", alignItems: "flex-start", gap: "10px", position: "relative", zIndex: 1 }}>
                  <span style={{ color: "#42A5F5", flexShrink: 0 }}>Q.</span>
                  {faq.q}
                </h3>
                <p style={{ color: "#90A4AE", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.7, paddingLeft: "20px", position: "relative", zIndex: 1 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 24px)", background: "linear-gradient(135deg, #061528, #0A2040)", textAlign: "center", borderTop: "1px solid #143D7A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,136,229,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "clamp(36px, 8vw, 52px)", marginBottom: "16px", animation: "floatY 4s ease-in-out infinite" }}>🌟</div>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px" }}>
            Ready to Begin Your Journey?
          </h2>
          <p style={{ color: "#90A4AE", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7, fontSize: "clamp(0.88rem, 2vw, 1rem)" }}>
            Book your session now and take the first step toward the life you deserve.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/book" className="btn-gold">✦ Book Now</Link>
            <a href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I'd like to book a consultation.")}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
