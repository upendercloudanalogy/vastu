import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingCard from "@/components/PricingCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import LotusDivider from "@/components/LotusDivider";

export const metadata: Metadata = {
  title: "Shivoham Guidance | Vastu Consultant & Numerologist in Faridabad",
  description:
    "Certified Vastu & numerology consultant in Faridabad. Numerology readings, name correction & home Vastu. Serving all India online. Book via WhatsApp.",
  alternates: { canonical: "https://www.shivohamguidance.com" },
};

const pricingData = [
  {
    title: "Mini Consultation Call",
    price: "₹2,100",
    description: "Quick Numerology Guidance",
    features: ["Life Path Number Overview", "Lucky Numbers & Dates", "Career or Relationship Query", "30-min WhatsApp Call"],
  },
  {
    title: "Detailed Numerology Session",
    price: "₹5,100",
    description: "In-Depth Personal Numerology",
    features: ["Full Life Path Analysis", "Destiny & Soul Number Reading", "Personal Year Forecast", "Career, Finance & Relationship Insights", "60-min WhatsApp Session"],
    badge: "Most Popular",
  },
  {
    title: "Vastu Guidance Session",
    price: "₹11,000",
    description: "Online Vastu Consultation",
    features: ["Home Energy Assessment", "Room Direction Analysis", "Vastu Remedies & Corrections", "Lucky Colors & Directions", "45-min WhatsApp Session"],
  },
  {
    title: "New Home Vastu Shastra",
    price: "₹45,000",
    description: "Complete Vastu for New Construction",
    features: ["Blueprint & Planning Review", "Full Layout Optimization", "Direction & Materials Guidance", "Detailed Written Report", "Follow-up Support"],
    isPremium: true,
    badge: "Premium",
  },
];

/* Shared section label */
function SectionLabel({ text }: { text: string }) {
  return (
    <span style={{ color: "#42A5F5", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "16px" }}>
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <LotusDivider />
      <AboutSection />
      <LotusDivider />
      <ServicesSection />

      {/* ── Pricing Section ───────────────────── */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)", background: "linear-gradient(180deg, #020C18 0%, #061528 50%, #020C18 100%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 64px)" }}>
            <SectionLabel text="✦ Our Services & Pricing ✦" />
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px" }}>
              Choose Your{" "}
              <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Path to Clarity
              </span>
            </h2>
            <p style={{ color: "#90A4AE", fontSize: "clamp(0.88rem, 2vw, 1rem)", maxWidth: "520px", margin: "0 auto" }}>
              Every reading is personalized and delivered with care.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "clamp(16px, 3vw, 24px)", paddingTop: "20px" }}>
            {pricingData.map((pkg) => <PricingCard key={pkg.title} {...pkg} />)}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/payments" style={{ color: "#42A5F5", textDecoration: "none", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ──────────────── */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)", background: "#020C18" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 64px)" }}>
            <SectionLabel text="✦ Client Stories ✦" />
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px" }}>
              Lives{" "}
              <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Transformed
              </span>
            </h2>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(30, 136, 229, 0.1)", border: "1px solid rgba(30, 136, 229, 0.3)", borderRadius: "30px", padding: "8px 20px", marginBottom: "16px" }}>
              <span style={{ color: "#FFD700", fontSize: "1.1rem" }}>★★★★★</span>
              <span style={{ color: "#FFFFFF", fontWeight: 700 }}>5.0 / 5</span>
              <span style={{ color: "#90A4AE", fontSize: "0.85rem" }}>from 6 clients</span>
            </div>
          </div>

          <TestimonialsSection limit={3} />

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/ratings" style={{ color: "#42A5F5", textDecoration: "none", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────── */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)", background: "linear-gradient(180deg, #020C18 0%, #061528 100%)" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
            <SectionLabel text="✦ Common Questions ✦" />
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#EDF4FF" }}>
              Frequently Asked{" "}
              <span style={{ background: "linear-gradient(135deg, #FFFFFF, #B3E5FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Questions
              </span>
            </h2>
          </div>
          {[
            {
              q: "What is Vastu Shastra and how does it help?",
              a: "Vastu Shastra is the ancient Indian science of architecture and energy alignment. It arranges your home or office to maximize positive energy, prosperity, health, and harmony. Monika's Vastu consultations identify energy blockages and provide practical remedies to attract success.",
            },
            {
              q: "How does a numerology reading work?",
              a: "A numerology reading uses your date of birth and full name to calculate your Life Path, Destiny, and Soul Urge Numbers. These numbers reveal your personality, strengths, life challenges, and the best timing for major decisions. Sessions are conducted via WhatsApp call.",
            },
            {
              q: "What is name correction in numerology?",
              a: "Name correction aligns the vibration of your name with your birth number. A misaligned name can cause career delays, relationship issues, and financial struggles. Monika analyzes your current name and suggests specific adjustments to attract better luck.",
            },
            {
              q: "Is the consultation available online or only in Faridabad?",
              a: "All consultations are available online via WhatsApp video or audio call, so you can book from anywhere in India or abroad. Monika is based in Faridabad, Haryana but serves clients across the entire country.",
            },
            {
              q: "How do I book a session?",
              a: "Fill in the booking form with your name, mobile number, city, and service. Monika will contact you via WhatsApp within 24 hours. You can also message directly on WhatsApp: +91 7027510541.",
            },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(20,61,122,0.5)", padding: "clamp(18px, 3vw, 24px) 0" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ color: "#42A5F5", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", flexShrink: 0, marginTop: "2px" }}>✦</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "10px", lineHeight: 1.3 }}>
                    {item.q}
                  </h3>
                  <p style={{ color: "#90A4AE", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: 1.8 }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────── */}
      <section
        style={{
          padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 24px)",
          background: "linear-gradient(135deg, #071A30 0%, #0F2E57 50%, #071A30 100%)",
          borderTop: "1px solid #143D7A",
          borderBottom: "1px solid #143D7A",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-50%", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(66, 165, 250, 0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-50%", right: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30, 136, 229, 0.09) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>🌟</div>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#EDF4FF", marginBottom: "16px" }}>
            Ready to Transform Your Life?
          </h2>
          <p style={{ color: "#90A4AE", fontSize: "1rem", maxWidth: "520px", margin: "0 auto 36px", lineHeight: 1.7 }}>
            Take the first step toward a clearer, more successful future. Book your private session today and receive a roadmap tailored specifically to your life&apos;s blueprint.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/book" className="btn-gold" style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
              ✦ Book Your Session Now
            </Link>
            <a
              href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I'd like to know more about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              💬 WhatsApp Monika
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
