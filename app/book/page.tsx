import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import LotusDivider from "@/components/LotusDivider";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Book Vastu or Numerology Session | Monika Faridabad",
  description:
    "Book Vastu or numerology consultation with Monika, Faridabad. WhatsApp response in 24 hours. Sessions from ₹2,100. Online — serving all of India.",
  alternates: { canonical: "https://monika-numerology.com/book" },
};

const packages = [
  { name: "Mini Consultation Call", price: "₹2,100", icon: "🔢", highlight: false },
  { name: "Detailed Numerology Session", price: "₹5,100", icon: "✦", highlight: false },
  { name: "Vastu Guidance (Online)", price: "₹11,000", icon: "🏡", highlight: false },
  { name: "Old Home Vastu", price: "₹25,000", icon: "🏠", highlight: false },
  { name: "New Home Vastu Shastra", price: "₹45,000", icon: "🌟", highlight: true },
  { name: "Commercial Vastu", price: "₹71,000", icon: "🏢", highlight: false },
];

export default function BookPage() {
  return (
    <>
      <StructuredData pageType="book" breadcrumbs={[{ name: "Book a Session", url: "https://monika-numerology.com/book" }]} />
      {/* Hero */}
      <section className="page-hero">
        {/* Decorative rings */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(300px, 70vw, 600px)", height: "clamp(300px, 70vw, 600px)", borderRadius: "50%", border: "1px solid rgba(66,165,250,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(200px, 50vw, 400px)", height: "clamp(200px, 50vw, 400px)", borderRadius: "50%", border: "1px dashed rgba(66,165,250,0.08)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-ornament">
            <span>✦</span><span>◯</span><span>✦</span>
          </div>
          <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "16px" }}>
            Book a Session
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px", lineHeight: 1.2 }}>
            Book Your{" "}
            <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Vastu or Numerology Session
            </span>
          </h1>
          <p style={{ color: "#90A4AE", fontSize: "clamp(0.9rem, 2vw, 1rem)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
            Fill in the form below and Monika will reach out within 24 hours to schedule your personalized session.
          </p>
        </div>
      </section>

      <LotusDivider />

      {/* Main Content */}
      <section style={{ padding: "clamp(32px, 5vw, 48px) clamp(16px, 5vw, 24px) clamp(60px, 10vw, 100px)", background: "#020C18" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(24px, 5vw, 48px)", alignItems: "flex-start" }}>

          {/* Form Card */}
          <div style={{ background: "linear-gradient(135deg, #071A30, #0A2040)", border: "1px solid #143D7A", borderRadius: "24px", padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)", position: "relative", overflow: "hidden" }}>
            {/* Corner ornament */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: "radial-gradient(circle at top right, rgba(66,165,250,0.1), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span style={{ color: "#42A5F5", fontSize: "1.2rem" }}>✦</span>
              <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 700, color: "#EDF4FF" }}>
                Book Your Consultation
              </h2>
            </div>
            <p style={{ color: "#90A4AE", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", marginBottom: "28px", paddingLeft: "26px" }}>
              Monika will contact you within 24 hours via WhatsApp.
            </p>
            <Suspense fallback={<div style={{ color: "#90A4AE", padding: "20px", textAlign: "center" }}>Loading form...</div>}>
              <BookingForm />
            </Suspense>
          </div>

          {/* Info Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)" }}>

            {/* Direct Contact */}
            <div style={{ background: "linear-gradient(135deg, #071A30, #0A2040)", border: "1px solid #143D7A", borderRadius: "20px", padding: "clamp(20px, 4vw, 28px)" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#42A5F5" }}>✦</span> Contact Directly
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I'd like to book a consultation.")}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "14px", padding: "clamp(12px, 3vw, 16px) clamp(14px, 3vw, 20px)", background: "rgba(37, 211, 102, 0.1)", border: "1px solid rgba(37, 211, 102, 0.3)", borderRadius: "12px", textDecoration: "none", transition: "all 0.2s" }}>
                  <div style={{ width: "clamp(36px, 8vw, 44px)", height: "clamp(36px, 8vw, 44px)", borderRadius: "12px", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(18px, 4vw, 22px)", flexShrink: 0 }}>💬</div>
                  <div>
                    <div style={{ color: "#25D366", fontWeight: 600, fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>WhatsApp — +91 7027510541</div>
                    <div style={{ color: "#607D8B", fontSize: "clamp(0.72rem, 1.8vw, 0.78rem)", marginTop: "2px" }}>Tap to open WhatsApp directly</div>
                  </div>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilkhatkar34@gmail.com" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "14px", padding: "clamp(12px, 3vw, 16px) clamp(14px, 3vw, 20px)", background: "rgba(30, 136, 229, 0.1)", border: "1px solid rgba(30, 136, 229, 0.3)", borderRadius: "12px", textDecoration: "none" }}>
                  <div style={{ width: "clamp(36px, 8vw, 44px)", height: "clamp(36px, 8vw, 44px)", borderRadius: "12px", background: "rgba(30,136,229,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(18px, 4vw, 22px)", flexShrink: 0 }}>✉️</div>
                  <div>
                    <div style={{ color: "#42A5F5", fontWeight: 600, fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>nikhilkhatkar34@gmail.com</div>
                    <div style={{ color: "#607D8B", fontSize: "clamp(0.72rem, 1.8vw, 0.78rem)", marginTop: "2px" }}>Replies within 24 hours</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Packages */}
            <div style={{ background: "linear-gradient(135deg, #071A30, #0A2040)", border: "1px solid #143D7A", borderRadius: "20px", padding: "clamp(20px, 4vw, 28px)" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#42A5F5" }}>✦</span> Our Packages
              </h3>
              {packages.map((pkg, i) => (
                <div key={pkg.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < packages.length - 1 ? "1px solid rgba(20,61,122,0.5)" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "clamp(12px, 2.5vw, 14px)" }}>{pkg.icon}</span>
                    <span style={{ color: pkg.highlight ? "#FFFFFF" : "#B3E5FC", fontSize: "clamp(0.78rem, 2vw, 0.88rem)" }}>{pkg.name}</span>
                  </div>
                  <span style={{ color: pkg.highlight ? "#FFD700" : "#42A5F5", fontWeight: 700, fontSize: "clamp(0.82rem, 2vw, 0.92rem)", flexShrink: 0, marginLeft: "8px" }}>{pkg.price}</span>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div style={{ background: "linear-gradient(135deg, rgba(30,136,229,0.08), rgba(13,71,161,0.12))", border: "1px solid rgba(30,136,229,0.25)", borderRadius: "16px", padding: "clamp(16px, 4vw, 24px)" }}>
              <h4 style={{ color: "#B3E5FC", fontWeight: 700, marginBottom: "14px", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#42A5F5" }}>✦</span> What to Expect
              </h4>
              {[
                "Response within 24 hours",
                "Flexible scheduling via WhatsApp",
                "Confidential & personalized session",
                "Practical, actionable guidance",
                "Follow-up support included",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px", color: "#90A4AE", fontSize: "clamp(0.8rem, 2vw, 0.88rem)" }}>
                  <span style={{ color: "#1E88E5", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
