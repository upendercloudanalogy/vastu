import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import LotusDivider from "@/components/LotusDivider";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Vastu & Numerology Fees in Faridabad | Shivoham Guidance | Monika Faridabad",
  description: "Vastu & numerology fees by Shivoham Guidance, Faridabad. Numerology from ₹599. Vastu for home, new construction & commercial properties. Serving pan India.",
  alternates: { canonical: "https://www.shivohamguidance.com/payments" },
};

const numerologyPackages = [
  { title:"Mini Consultation Call", price:"₹599", originalPrice:"₹2,100", description:"Quick Numerology Guidance", features:["Life Path Number Overview","Lucky Numbers & Dates","Career or Relationship Query","Key Insights for Your Question"] },
  { title:"Detailed Numerology Session", price:"₹1,099", originalPrice:"₹5,100", description:"In-Depth Personal Numerology", features:["Full Life Path Analysis","Destiny & Soul Number Reading","Personal Year Forecast","Career, Finance & Relationship Insights","Name Vibration Check"], badge:"Most Popular" },
];
const vastuPackages = [
  { title:"Vastu Guidance Session", price:"₹4,999", originalPrice:"₹11,000", description:"Online Vastu Consultation", features:["Home Energy Assessment (Online)","Room Direction Analysis","Vastu Remedies & Corrections","Lucky Colors & Directions"] },
  { title:"Old Home Vastu", price:"₹12,999", originalPrice:"₹25,000", description:"Vastu for Existing Homes", features:["Complete On-Site Assessment","Room-by-Room Energy Analysis","Remedies Without Major Renovation","Main Door & Kitchen Direction","Bedroom Placement Guidance","Detailed Vastu Report"] },
  { title:"New Home Vastu Shastra", price:"₹20,999", originalPrice:"₹45,000", description:"Vastu for New Construction", features:["Blueprint & Planning Stage Review","Plot & Direction Analysis","Complete Layout Optimization","Vastu-Compliant Room Placement","Materials & Colors Guidance","Full Written Report + Follow-up"], isPremium:true, badge:"Best Value" },
  { title:"Commercial Vastu", price:"₹49,999", originalPrice:"₹71,000", description:"Hotel · Restaurant · Hospital · Clinic · Shop · Farm house · Dispensary", features:["Complete Commercial Assessment","Business Energy Optimization","Entry & Cash Counter Direction","Staff & Customer Flow Analysis","All Property Types Covered","Detailed Report + Follow-up"] },
];
const faqs = [
  { q:"How does the consultation work?", a:"After booking, Monika will contact you via WhatsApp to schedule your session. Numerology sessions are done over WhatsApp call. Vastu on-site visits are scheduled based on your location." },
  { q:"What information do I need for Numerology?", a:"Your full name (as on birth certificate) and date of birth. For couple or family sessions, the same details for each person." },
  { q:"What is needed for Vastu?", a:"For online Vastu — photos of your home and a rough floor plan. For on-site visits — your address. For new construction — the architectural blueprint." },
  { q:"How long does it take to receive my reading?", a:"Numerology sessions are typically within 24–48 hours of payment. On-site Vastu visits are scheduled within 3–5 business days." },
  { q:"Is there a refund policy?", a:"We're confident in the value of every session. If you have any concerns, reach out to Monika directly on WhatsApp and she'll address them personally." },
  { q:"Can I book for someone else as a gift?", a:"Absolutely! Numerology readings make wonderful gifts. Simply mention it in the message field during booking." },
];

function SectionHeading({ label, title, highlight }: { label:string; title:string; highlight:string }) {
  return (
    <div style={{ textAlign:"center", marginBottom:"clamp(28px,5vw,48px)" }}>
      <div className="section-ornament"><span>★</span><span>✦</span><span>★</span></div>
      <span style={{ color:"rgba(212,175,55,0.75)", fontSize:"0.82rem", letterSpacing:"4px", textTransform:"uppercase" as const, fontWeight:600, display:"block", marginBottom:"12px" }}>{label}</span>
      <h2 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1A3A5C", lineHeight:1.2 }}>
        {title}{" "}
        <span style={{ background:"linear-gradient(135deg,#1565C0,#1E88E5,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{highlight}</span>
      </h2>
    </div>
  );
}

export default function PaymentsPage() {
  return (
    <>
      <StructuredData pageType="payments" breadcrumbs={[{ name:"Pricing & Services", url:"https://www.shivohamguidance.com/payments" }]} />

      {/* Hero */}
      <section className="page-hero" style={{ paddingTop:"130px", paddingBottom:"clamp(40px,6vw,60px)" }}>
        {/* Sri Yantra watermark */}
        <svg viewBox="0 0 300 300" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"min(70vw,460px)", height:"min(70vw,460px)", opacity:0.06, color:"#D4AF37", pointerEvents:"none", zIndex:0, animation:"slowSpinNoTranslate 70s linear infinite" }} fill="none" stroke="#D4AF37" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="140" strokeWidth="0.5" />
          <polygon points="150,28 268,218 32,218" strokeWidth="1" />
          <polygon points="150,272 32,82 268,82" strokeWidth="1" />
          <polygon points="150,62 242,205 58,205" strokeWidth="0.7" />
          <polygon points="150,238 58,95 242,95" strokeWidth="0.7" />
          <circle cx="150" cy="150" r="3" fill="#D4AF37" strokeWidth="0" />
        </svg>
        {[{t:"12%",l:"5%",d:"0s"},{t:"18%",r:"7%",d:"1s"},{t:"75%",l:"3%",d:"0.5s"},{t:"65%",r:"4%",d:"1.5s"},{t:"45%",l:"7%",d:"0.8s"},{t:"30%",r:"8%",d:"2s"}].map((s,i)=>(
          <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"5px", height:"5px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 6px #42A5F5", animation:`twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents:"none" }} />
        ))}
        <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
          <div className="section-ornament">
            <span style={{ animation:"twinkle 2s ease-in-out infinite" }}>★</span>
            <span style={{ color:"rgba(212,175,55,0.9)", fontFamily:"Georgia,serif", fontSize:"1.2rem", animation:"goldenGlow 4s ease-in-out infinite" }}>ॐ</span>
            <span style={{ animation:"twinkle 2s ease-in-out 0.7s infinite" }}>★</span>
          </div>
          <span style={{ color:"rgba(212,175,55,0.75)", fontSize:"0.82rem", letterSpacing:"4px", textTransform:"uppercase" as const, fontWeight:600, display:"block", marginBottom:"14px" }}>✦ Services &amp; Pricing ✦</span>
          <h1 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(2.2rem,5vw,3.5rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"16px", lineHeight:1.15 }}>
            Vastu &amp; Numerology{" "}
            <span style={{ background:"linear-gradient(135deg,#1565C0,#1E88E5,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Services in Faridabad</span>
          </h1>
          <p style={{ color:"#4B7BA8", fontSize:"clamp(0.9rem,2vw,1rem)", maxWidth:"560px", margin:"0 auto", lineHeight:1.7 }}>
            Every session is personalized and delivered with care — whether you need numerology guidance or a complete Vastu transformation.
          </p>
        </div>
      </section>

      <LotusDivider />

      {/* Numerology */}
      <section style={{ padding:"clamp(40px,6vw,64px) clamp(16px,5vw,24px)", background:"#FFFFFF", position:"relative" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(8rem,20vw,16rem)", fontWeight:700, color:"rgba(212,175,55,0.03)", userSelect:"none", pointerEvents:"none", lineHeight:1, transform:"translate(-50%,-50%)" }}>①</div>
        <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading label="🔢 Numerology" title="Know Your" highlight="Numbers" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap:"clamp(16px,3vw,28px)", paddingTop:"20px" }}>
            {numerologyPackages.map((pkg) => <PricingCard key={pkg.title} {...pkg} />)}
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* Vastu */}
      <section style={{ padding:"clamp(40px,6vw,64px) clamp(16px,5vw,24px) clamp(48px,8vw,80px)", background:"linear-gradient(180deg,#F5F9FF 0%,#EEF5FF 100%)", position:"relative" }}>
        <div style={{ position:"absolute", top:"50%", right:"-5%", fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(8rem,20vw,16rem)", fontWeight:700, color:"rgba(212,175,55,0.03)", userSelect:"none", pointerEvents:"none", lineHeight:1, transform:"translateY(-50%)" }}>⑤</div>
        <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading label="🏡 Vastu Shastra" title="Transform Your" highlight="Space" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap:"clamp(16px,3vw,28px)", paddingTop:"20px" }}>
            {vastuPackages.map((pkg) => <PricingCard key={pkg.title} {...pkg} />)}
          </div>
          <div style={{ textAlign:"center", marginTop:"48px", padding:"clamp(16px,4vw,24px)", background:"rgba(255,255,255,0.85)", backdropFilter:"blur(8px)", border:"1px solid rgba(147,197,253,0.5)", borderRadius:"16px", maxWidth:"700px", margin:"48px auto 0", boxShadow:"0 4px 20px rgba(30,136,229,0.07)" }}>
            <p style={{ color:"#1565C0", fontSize:"clamp(0.88rem,2vw,0.95rem)", lineHeight:1.7, marginBottom:"8px" }}>
              <strong>💳 Payment Process:</strong> After booking via WhatsApp, Monika will share payment details (UPI / Bank Transfer). Your session is confirmed upon payment.
            </p>
            <p style={{ color:"#4B7BA8", fontSize:"0.85rem" }}>All prices are inclusive of GST where applicable.</p>
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* What's included */}
      <section style={{ padding:"clamp(48px,8vw,80px) clamp(16px,5vw,24px)", background:"#FFFFFF" }}>
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"clamp(28px,5vw,48px)" }}>
            <div className="section-ornament"><span>◯</span><span>△</span><span>◯</span></div>
            <span style={{ color:"rgba(212,175,55,0.75)", fontSize:"0.82rem", letterSpacing:"4px", textTransform:"uppercase" as const, fontWeight:600, display:"block", marginBottom:"12px" }}>✦ Always Included ✦</span>
            <h2 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.8rem,3.5vw,2.5rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"12px" }}>Every Session Includes</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap:"clamp(12px,3vw,20px)" }}>
            {[
              { icon:"🔢", title:"Deep Analysis",       desc:"Thorough numerological or Vastu assessment" },
              { icon:"💡", title:"Actionable Insights",  desc:"Practical guidance you can apply immediately" },
              { icon:"🎯", title:"Personalized Report",  desc:"Tailored to your unique situation" },
              { icon:"💬", title:"WhatsApp Support",     desc:"Follow-up questions always welcome" },
              { icon:"🌙", title:"Predictive Insights",  desc:"Upcoming opportunities & challenges" },
              { icon:"✦",  title:"Lucky Elements",       desc:"Numbers, colors, dates & directions" },
            ].map((item, i) => (
              <div key={item.title} style={{ padding:"clamp(16px,3vw,24px) clamp(14px,3vw,20px)", background:"rgba(255,255,255,0.85)", backdropFilter:"blur(8px)", border:"1px solid rgba(147,197,253,0.5)", borderRadius:"16px", textAlign:"center", boxShadow:"0 4px 16px rgba(30,136,229,0.06)" }}>
                <div style={{ fontSize:"clamp(24px,5vw,32px)", marginBottom:"12px", animation:`floatY ${4+i*0.3}s ease-in-out infinite` }}>{item.icon}</div>
                <h4 style={{ color:"#1A3A5C", fontWeight:600, marginBottom:"6px", fontSize:"clamp(0.85rem,2vw,0.95rem)" }}>{item.title}</h4>
                <p style={{ color:"#4B7BA8", fontSize:"clamp(0.78rem,2vw,0.85rem)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* FAQ */}
      <section style={{ padding:"clamp(48px,8vw,80px) clamp(16px,5vw,24px)", background:"linear-gradient(180deg,#F5F9FF,#EEF5FF)" }}>
        <div style={{ maxWidth:"800px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"clamp(28px,5vw,48px)" }}>
            <span style={{ color:"rgba(212,175,55,0.75)", fontSize:"0.82rem", letterSpacing:"4px", textTransform:"uppercase" as const, fontWeight:600, display:"block", marginBottom:"12px" }}>✦ FAQ ✦</span>
            <h2 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.8rem,3.5vw,2.5rem)", fontWeight:700, color:"#1A3A5C" }}>Common Questions</h2>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"clamp(10px,2vw,14px)" }}>
            {faqs.map((faq,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.88)", backdropFilter:"blur(8px)", border:"1px solid rgba(147,197,253,0.5)", borderRadius:"16px", padding:"clamp(16px,4vw,24px) clamp(16px,4vw,28px)", boxShadow:"0 2px 12px rgba(30,136,229,0.05)" }}>
                <h3 style={{ color:"#1565C0", fontWeight:600, fontSize:"clamp(0.88rem,2vw,1rem)", marginBottom:"10px", display:"flex", alignItems:"flex-start", gap:"10px" }}>
                  <span style={{ color:"rgba(212,175,55,0.8)", flexShrink:0 }}>✦</span>{faq.q}
                </h3>
                <p style={{ color:"#4B7BA8", fontSize:"clamp(0.82rem,2vw,0.9rem)", lineHeight:1.7, paddingLeft:"20px" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"clamp(48px,8vw,80px) clamp(16px,5vw,24px)", background:"linear-gradient(135deg,#EEF5FF,#DBEAFE,#EEF5FF)", textAlign:"center", borderTop:"1px solid rgba(147,197,253,0.5)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", fontSize:"min(35vw,280px)", color:"rgba(212,175,55,0.05)", userSelect:"none", lineHeight:1, fontFamily:"Georgia,serif", pointerEvents:"none", animation:"omPulse 8s ease-in-out infinite" }}>ॐ</div>
        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ fontSize:"clamp(36px,8vw,52px)", marginBottom:"16px", animation:"floatY 4s ease-in-out infinite" }}>🌟</div>
          <div className="section-ornament" style={{ marginBottom:"12px" }}><span>★</span><span>✦</span><span>★</span></div>
          <h2 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.8rem,3.5vw,2.5rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"16px" }}>Ready to Begin Your Journey?</h2>
          <p style={{ color:"#4B7BA8", marginBottom:"32px", maxWidth:"500px", margin:"0 auto 32px", lineHeight:1.7, fontSize:"clamp(0.88rem,2vw,1rem)" }}>
            Book your session now and take the first step toward the life you deserve.
          </p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <Link href="/book" className="btn-gold">✦ Book Now</Link>
            <a href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I'd like to book a consultation.")}`} target="_blank" rel="noopener noreferrer" className="btn-outline">💬 Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
