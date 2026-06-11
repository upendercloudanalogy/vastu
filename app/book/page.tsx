import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import LotusDivider from "@/components/LotusDivider";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Book Vastu or Numerology Session | Monika Faridabad | Shivoham Guidance Faridabad",
  description: "Book Vastu or numerology consultation with Shivoham Guidance, Faridabad. WhatsApp response in 24 hours. Sessions from ₹2,100. Online — serving all of India.",
  alternates: { canonical: "https://www.shivohamguidance.com/book" },
};

const packages = [
  { name:"Mini Consultation Call",      price:"₹2,100",  icon:"🔢", highlight:false },
  { name:"Detailed Numerology Session", price:"₹5,100",  icon:"✦",  highlight:false },
  { name:"Vastu Guidance (Online)",     price:"₹11,000", icon:"🏡", highlight:false },
  { name:"Old Home Vastu",              price:"₹25,000", icon:"🏠", highlight:false },
  { name:"New Home Vastu Shastra",      price:"₹45,000", icon:"🌟", highlight:true  },
  { name:"Commercial Vastu",            price:"₹71,000", icon:"🏢", highlight:false },
];

export default function BookPage() {
  return (
    <>
      <StructuredData pageType="book" breadcrumbs={[{ name:"Book a Session", url:"https://www.shivohamguidance.com/book" }]} />

      {/* Hero */}
      <section className="page-hero" style={{ paddingTop:"130px" }}>
        {/* Lotus / sacred circle watermark */}
        <svg viewBox="0 0 300 300" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"min(70vw,420px)", height:"min(70vw,420px)", opacity:0.06, pointerEvents:"none", zIndex:0, animation:"slowSpinNoTranslate 80s linear infinite" }} fill="none" stroke="#D4AF37" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="140" strokeWidth="0.8" />
          <circle cx="150" cy="150" r="110" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="80"  strokeWidth="0.4" />
          {[0,45,90,135,180,225,270,315].map((deg) => {
            const rad = deg*Math.PI/180;
            const cx = 150+110*Math.cos(rad); const cy = 150+110*Math.sin(rad);
            return <ellipse key={deg} cx={cx} cy={cy} rx={12} ry={20} strokeWidth="0.4" transform={`rotate(${deg},${cx},${cy})`} />;
          })}
        </svg>
        {[{t:"10%",l:"6%",d:"0s"},{t:"16%",r:"7%",d:"1s"},{t:"74%",l:"4%",d:"0.5s"},{t:"64%",r:"5%",d:"1.5s"},{t:"42%",l:"8%",d:"1.2s"}].map((s,i)=>(
          <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"5px", height:"5px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 6px #42A5F5", animation:`twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents:"none" }} />
        ))}
        <div style={{ position:"relative", zIndex:1 }}>
          <div className="section-ornament">
            <span style={{ animation:"twinkle 2s ease-in-out infinite" }}>★</span>
            <span style={{ color:"rgba(212,175,55,0.9)", fontFamily:"Georgia,serif", fontSize:"1.2rem", animation:"goldenGlow 4s ease-in-out infinite" }}>ॐ</span>
            <span style={{ animation:"twinkle 2s ease-in-out 0.7s infinite" }}>★</span>
          </div>
          <span style={{ color:"rgba(212,175,55,0.75)", fontSize:"0.82rem", letterSpacing:"4px", textTransform:"uppercase" as const, fontWeight:600, display:"block", marginBottom:"14px" }}>✦ Book a Session ✦</span>
          <h1 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(2.2rem,5vw,3.5rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"16px", lineHeight:1.15 }}>
            Book Your{" "}
            <span style={{ background:"linear-gradient(135deg,#1565C0,#1E88E5,#42A5F5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Vastu or Numerology Session
            </span>
          </h1>
          <p style={{ color:"#4B7BA8", fontSize:"clamp(0.9rem,2vw,1rem)", maxWidth:"520px", margin:"0 auto", lineHeight:1.8 }}>
            Fill in the form below and Monika will reach out within 24 hours to schedule your personalized session.
          </p>
        </div>
      </section>

      <LotusDivider />

      {/* Main Content */}
      <section style={{ padding:"clamp(32px,5vw,48px) clamp(16px,5vw,24px) clamp(60px,10vw,100px)", background:"linear-gradient(180deg,#FFFFFF 0%,#F5F9FF 100%)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap:"clamp(24px,5vw,48px)", alignItems:"flex-start" }}>

          {/* Form Card */}
          <div style={{ background:"rgba(255,255,255,0.92)", backdropFilter:"blur(16px)", border:"1px solid rgba(147,197,253,0.6)", borderRadius:"24px", padding:"clamp(24px,5vw,40px) clamp(20px,4vw,32px)", position:"relative", overflow:"hidden", boxShadow:"0 8px 32px rgba(30,136,229,0.1)" }}>
            <div style={{ position:"absolute", top:0, right:0, width:"100px", height:"100px", background:"radial-gradient(circle at top right, rgba(66,165,250,0.08), transparent 70%)", pointerEvents:"none" }} />
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"6px" }}>
              <span style={{ color:"rgba(212,175,55,0.8)", fontSize:"1.2rem", animation:"goldenGlow 4s ease-in-out infinite" }}>✦</span>
              <h2 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.4rem,3vw,1.8rem)", fontWeight:700, color:"#1A3A5C" }}>Book Your Consultation</h2>
            </div>
            <p style={{ color:"#4B7BA8", fontSize:"clamp(0.82rem,2vw,0.9rem)", marginBottom:"28px", paddingLeft:"26px" }}>Monika will contact you within 24 hours via WhatsApp.</p>
            <Suspense fallback={<div style={{ color:"#4B7BA8", padding:"20px", textAlign:"center" }}>Loading form...</div>}>
              <BookingForm />
            </Suspense>
          </div>

          {/* Info Sidebar */}
          <div style={{ display:"flex", flexDirection:"column", gap:"clamp(16px,3vw,20px)" }}>

            {/* Contact */}
            <div style={{ background:"rgba(255,255,255,0.9)", backdropFilter:"blur(12px)", border:"1px solid rgba(147,197,253,0.5)", borderRadius:"20px", padding:"clamp(20px,4vw,28px)", boxShadow:"0 4px 20px rgba(30,136,229,0.07)" }}>
              <h3 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.1rem,3vw,1.3rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"20px", display:"flex", alignItems:"center", gap:"8px" }}>
                <span style={{ color:"rgba(212,175,55,0.8)" }}>✦</span> Contact Directly
              </h3>
              <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                <a href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I'd like to book a consultation.")}`} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:"14px", padding:"clamp(12px,3vw,16px) clamp(14px,3vw,20px)", background:"rgba(37,211,102,0.08)", border:"1px solid rgba(37,211,102,0.25)", borderRadius:"14px", textDecoration:"none" }}>
                  <div style={{ width:"clamp(36px,8vw,44px)", height:"clamp(36px,8vw,44px)", borderRadius:"12px", background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"clamp(18px,4vw,22px)", flexShrink:0 }}>💬</div>
                  <div>
                    <div style={{ color:"#25D366", fontWeight:600, fontSize:"clamp(0.85rem,2vw,0.95rem)" }}>WhatsApp — +91 7027510541</div>
                    <div style={{ color:"#5B8DB8", fontSize:"clamp(0.72rem,1.8vw,0.78rem)", marginTop:"2px" }}>Tap to open WhatsApp directly</div>
                  </div>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilkhatkar34@gmail.com" target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:"14px", padding:"clamp(12px,3vw,16px) clamp(14px,3vw,20px)", background:"rgba(30,136,229,0.07)", border:"1px solid rgba(30,136,229,0.2)", borderRadius:"14px", textDecoration:"none" }}>
                  <div style={{ width:"clamp(36px,8vw,44px)", height:"clamp(36px,8vw,44px)", borderRadius:"12px", background:"rgba(30,136,229,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"clamp(18px,4vw,22px)", flexShrink:0 }}>✉️</div>
                  <div>
                    <div style={{ color:"#1E88E5", fontWeight:600, fontSize:"clamp(0.85rem,2vw,0.95rem)" }}>nikhilkhatkar34@gmail.com</div>
                    <div style={{ color:"#5B8DB8", fontSize:"clamp(0.72rem,1.8vw,0.78rem)", marginTop:"2px" }}>Replies within 24 hours</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Packages */}
            <div style={{ background:"rgba(255,255,255,0.9)", backdropFilter:"blur(12px)", border:"1px solid rgba(147,197,253,0.5)", borderRadius:"20px", padding:"clamp(20px,4vw,28px)", boxShadow:"0 4px 20px rgba(30,136,229,0.07)" }}>
              <h3 style={{ fontFamily:"var(--font-cormorant),Georgia,serif", fontSize:"clamp(1.1rem,3vw,1.3rem)", fontWeight:700, color:"#1A3A5C", marginBottom:"16px", display:"flex", alignItems:"center", gap:"8px" }}>
                <span style={{ color:"rgba(212,175,55,0.8)" }}>✦</span> Our Packages
              </h3>
              {packages.map((pkg,i) => (
                <div key={pkg.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom: i < packages.length-1 ? "1px solid rgba(147,197,253,0.4)" : "none" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                    <span style={{ fontSize:"clamp(12px,2.5vw,14px)" }}>{pkg.icon}</span>
                    <span style={{ color:"#1565C0", fontSize:"clamp(0.78rem,2vw,0.88rem)", fontWeight: pkg.highlight ? 600 : 400 }}>{pkg.name}</span>
                  </div>
                  <span style={{ color: pkg.highlight ? "#C9932A" : "#42A5F5", fontWeight:700, fontSize:"clamp(0.82rem,2vw,0.92rem)", flexShrink:0, marginLeft:"8px" }}>{pkg.price}</span>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div style={{ background:"rgba(238,245,255,0.9)", backdropFilter:"blur(8px)", border:"1px solid rgba(147,197,253,0.4)", borderRadius:"16px", padding:"clamp(16px,4vw,24px)", boxShadow:"0 4px 16px rgba(30,136,229,0.06)" }}>
              <h4 style={{ color:"#1565C0", fontWeight:700, marginBottom:"14px", fontSize:"clamp(0.85rem,2vw,0.95rem)", display:"flex", alignItems:"center", gap:"8px" }}>
                <span style={{ color:"rgba(212,175,55,0.8)" }}>✦</span> What to Expect
              </h4>
              {["Response within 24 hours","Flexible scheduling via WhatsApp","Confidential & personalized session","Practical, actionable guidance","Follow-up support included"].map((item) => (
                <div key={item} style={{ display:"flex", alignItems:"flex-start", gap:"10px", marginBottom:"10px", color:"#4B7BA8", fontSize:"clamp(0.8rem,2vw,0.88rem)" }}>
                  <span style={{ color:"#1E88E5", flexShrink:0, marginTop:"1px" }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
