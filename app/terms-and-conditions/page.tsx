import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shivoham Guidance — Vastu & Numerology",
  description: "Terms and Conditions for Shivoham Guidance's Vastu and Numerology consultation services. Please read before booking a session.",
  alternates: { canonical: "https://www.shivohamguidance.com/terms-and-conditions" },
};

const LAST_UPDATED = "May 24, 2025";

const sections = [
  {
    id: "modification",
    icon: "📝",
    title: "Modification of Terms",
    content: `Shivoham Guidance reserves the right to update, amend, or modify these Terms at its sole discretion from time to time. Users are responsible for regularly reviewing these Terms to ensure compliance with any changes. Continued use of our Services after any modification constitutes your acceptance of the updated Terms.`,
  },
  {
    id: "definitions",
    icon: "📖",
    title: "Definitions",
    items: [
      `"Applicable Laws" means all laws, regulations, and binding requirements of any governmental authority applicable to you or the Platform, as amended from time to time.`,
      `"User", "you", "Member" & "your" means any natural or legal person who accesses or uses our Services.`,
      `"Third-Party" means any person or entity other than Shivoham Guidance and the User.`,
      `"Services" means the services offered by Shivoham Guidance, including but not limited to Vastu Shastra consultations, numerology readings, name correction, destiny analysis, and related advisory services.`,
      `"Fee" means the charges payable by the User for accessing Paid Services, including consultations and reports, inclusive of all applicable taxes.`,
    ],
  },
  {
    id: "consent",
    icon: "🤝",
    title: "User Consent",
    content: `It is strongly recommended that you carefully review these Terms prior to using or accessing any materials, information, or Services provided by Shivoham Guidance. Your continued use of our Services, including after any amendments or modifications to these Terms, shall constitute your binding acceptance of and agreement to comply with the Terms as updated from time to time.`,
    highlight: true,
  },
  {
    id: "general",
    icon: "🌐",
    title: "General Description",
    content: `Shivoham Guidance is an individual consulting practice accessible through the website at https://www.shivohamguidance.com. It provides Vastu Shastra consultancy, numerology readings, name correction advice, destiny analysis, and related spiritual guidance delivered primarily via WhatsApp call, video call, or written reports. The Platform offers both informational content ("Free Content") and personalized consultation sessions ("Paid Services").`,
  },
  {
    id: "registration",
    icon: "👤",
    title: "Registration & Eligibility",
    content: `By accessing and utilizing our Services, you confirm that you are of minimum legal age and legally competent to enter into a binding contract under Applicable Laws. To avail Paid Services, you are required to submit a booking request with accurate personal information.`,
    items: [
      "Provide accurate, current, and complete information during the booking process.",
      "Regularly update and maintain the accuracy of all information submitted.",
      "You are legally permitted to access and use our Services in accordance with Applicable Laws.",
      "You will not impersonate any individual or submit Personal Data of any other person without their lawful consent.",
    ],
  },
  {
    id: "obligations",
    icon: "⚖️",
    title: "User Obligations",
    content: `While using our Services, you agree NOT to:`,
    items: [
      "Post, publish, or transmit any false, misleading, defamatory, harmful, or unlawful messages.",
      "Infringe on any intellectual property rights or violate any Applicable laws or regulations.",
      "Collect or misuse any personal information belonging to Shivoham Guidance or other users.",
      "Send unsolicited emails, spam, or unauthorized promotions.",
      "Attempt to gain unauthorized access to any part of our systems or networks.",
      "Resell, commercially exploit, or reverse engineer any materials or content provided through our Services.",
      "Use our Services for any purpose that is fraudulent, illegal, or harmful to others.",
      "Withhold or misrepresent material information relevant to your consultation — full disclosure ensures the quality of guidance you receive.",
    ],
  },
  {
    id: "content",
    icon: "📋",
    title: "Platform Content",
    content: `All content on this website, including text, images, graphics, and other materials, constitutes the property of Shivoham Guidance. All interactions and consultations must comply with these Terms. Shivoham Guidance reserves the right to modify, suspend, or discontinue any feature or content at its sole discretion and without prior notice. Any information or guidance provided is for general advisory purposes only and shall not be construed as professional medical, legal, or financial advice.`,
    highlight: true,
  },
  {
    id: "privacy",
    icon: "🔒",
    title: "Privacy Policy",
    content: `Your personal information submitted during booking or consultation is handled with strict confidentiality. We collect only the information necessary to provide our Services (name, date of birth, contact details) and do not share it with third parties without your consent, except as required by Applicable Law. By using our Services, you consent to this data collection and handling.`,
  },
  {
    id: "refund",
    icon: "💳",
    title: "Payment, Cancellation & Refund Policy",
    content: `All payments made for Services, including consultations and reports, are final. Please review the following:`,
    items: [
      "Payments are confirmed after successful transfer via UPI / Bank Transfer as communicated by Monika on WhatsApp.",
      "Sessions must be cancelled at least 24 hours in advance to be eligible for rescheduling.",
      "No refunds shall be processed once a consultation session has commenced or a report has been prepared.",
      "If a session cannot be conducted due to reasons attributable to Shivoham Guidance, a full reschedule or refund will be offered.",
      "Technical delays or communication issues on the client's end do not entitle the User to a refund.",
      "If you have any concerns about a payment, contact Monika directly on WhatsApp at +91 7027510541.",
    ],
    highlight: true,
  },
  {
    id: "disclaimer",
    icon: "⚠️",
    title: "Disclaimer, Limitation of Liability & Warranty",
    content: `To the fullest extent permitted by Applicable Law:`,
    items: [
      "Vastu and numerology consultations are based on traditional Indian knowledge systems and the practitioner's training and experience.",
      "Results and outcomes are advisory in nature and may vary from person to person.",
      "Shivoham Guidance does not guarantee specific results, outcomes, financial gains, or changes in life circumstances.",
      "Our Services are provided on an 'as is' basis without any warranty, express or implied.",
      "Shivoham Guidance shall not be liable for any direct, indirect, incidental, or consequential damages arising from reliance on our Services.",
      "Users act on any guidance at their own risk and discretion.",
      "Shivoham Guidance is not a crisis helpline. Persons experiencing mental health emergencies should seek appropriate professional help immediately.",
    ],
    highlight: true,
  },
  {
    id: "indemnification",
    icon: "🛡️",
    title: "Indemnification",
    content: `The User agrees to indemnify, defend, and hold harmless Shivoham Guidance and its owner, Monika, from any and all third-party claims, liabilities, damages, and costs (including legal fees) arising from: the User's use of the Services, any breach of these Terms, any violation of third-party rights, any content or information submitted by the User, or any misuse of account credentials.`,
  },
  {
    id: "ip",
    icon: "©️",
    title: "Proprietary Rights to Content",
    content: `All content available through Shivoham Guidance's website and communications, including text, graphics, reports, and other materials, is protected by intellectual property laws. Users are not authorized to copy, reproduce, distribute, or create derivative works from the content without explicit written permission from Shivoham Guidance.`,
  },
  {
    id: "confidentiality",
    icon: "🤫",
    title: "Confidentiality",
    content: `You agree not to disclose, publish, or otherwise make available any confidential or proprietary information shared during consultations or through our communications without prior written consent. This includes consultation reports, personal insights, and any non-public information related to our methods or Services. This obligation survives termination of the service relationship.`,
  },
  {
    id: "restricted",
    icon: "🚫",
    title: "Restricted Content & Conduct",
    content: `Shivoham Guidance strictly prohibits the following:`,
    items: [
      "Use of our consultation services to facilitate or promote illegal activities.",
      "Sharing or requesting content that exploits, harms, or endangers minors.",
      "Promoting hatred, violence, or discrimination based on religion, caste, gender, or any other characteristic.",
      "Engaging in or promoting black magic, harmful occult practices, or activities intended to harm others.",
      "Harassment, threats, or abusive conduct toward Monika or other users.",
      "Misrepresentation of consultation outcomes to third parties.",
    ],
  },
  {
    id: "termination",
    icon: "🔚",
    title: "Breach & Termination",
    content: `Shivoham Guidance reserves the right to refuse, suspend, or terminate Services to any User who:`,
    items: [
      "Provides false or misleading information during booking or consultation.",
      "Engages in abusive, threatening, or disrespectful conduct.",
      "Attempts to misuse or exploit the consultation services.",
      "Violates any provision of these Terms.",
    ],
    note: "Upon termination, your right to use our Services shall immediately cease. The confidentiality, indemnification, and disclaimer provisions shall survive termination.",
  },
  {
    id: "thirdparty",
    icon: "🔗",
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites or resources. Shivoham Guidance assumes no responsibility for the content, privacy policies, or practices of any third-party sites. Users are advised to review the terms and policies of such sites independently. Payment processing may involve third-party payment gateways; Shivoham Guidance is not liable for issues arising from those platforms.`,
  },
  {
    id: "forcemajeure",
    icon: "🌪️",
    title: "Force Majeure",
    content: `Neither Shivoham Guidance nor the User shall be liable for any failure or delay in performing obligations hereunder where such failure results from causes beyond reasonable control, including acts of God, natural disasters, pandemics, power or internet outages, government orders, or other circumstances beyond our control. Where practicable, Shivoham Guidance shall use reasonable efforts to reschedule or accommodate affected sessions.`,
  },
  {
    id: "governing",
    icon: "🏛️",
    title: "Governing Law & Jurisdiction",
    content: `These Terms are governed by the laws of India. Any dispute arising from these Terms or the use of our Services shall first be attempted to be resolved through good-faith discussions. If unresolved, disputes shall be subject to the exclusive jurisdiction of courts in Faridabad, Haryana, India. These Terms represent the entire agreement between the parties concerning our Services.`,
    highlight: true,
  },
  {
    id: "contact",
    icon: "📞",
    title: "Contact & Grievances",
    isContact: true,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ paddingTop: "130px", paddingBottom: "clamp(40px,6vw,60px)" }}
      >
        {/* Subtle Om watermark */}
        <div style={{ position: "absolute", top: "50%", left: "50%", fontSize: "min(60vw,480px)", color: "rgba(212,175,55,0.07)", userSelect: "none", lineHeight: 1, fontFamily: "Georgia,serif", pointerEvents: "none", animation: "omPulse 9s ease-in-out infinite" }}>ॐ</div>

        {/* Stars */}
        {[{t:"10%",l:"5%",d:"0s"},{t:"20%",r:"7%",d:"1s"},{t:"70%",l:"3%",d:"0.5s"},{t:"60%",r:"4%",d:"1.5s"}].map((s,i)=>(
          <div key={i} style={{ position:"absolute", top:s.t, left:(s as {l?:string}).l, right:(s as {r?:string}).r, width:"5px", height:"5px", borderRadius:"50%", background:"#42A5F5", boxShadow:"0 0 6px #42A5F5", animation:`twinkle 3s ease-in-out ${s.d} infinite`, pointerEvents:"none" }} />
        ))}

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-ornament">
            <span style={{ animation: "twinkle 2s ease-in-out infinite" }}>★</span>
            <span style={{ color: "rgba(212,175,55,0.9)", fontFamily: "Georgia,serif", fontSize: "1.2rem", animation: "goldenGlow 4s ease-in-out infinite" }}>ॐ</span>
            <span style={{ animation: "twinkle 2s ease-in-out 0.7s infinite" }}>★</span>
          </div>
          <span style={{ color: "rgba(212,175,55,0.75)", fontSize: "0.82rem", letterSpacing: "4px", textTransform: "uppercase" as const, fontWeight: 600, display: "block", marginBottom: "14px" }}>✦ Legal ✦</span>
          <h1 style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(2.2rem,5vw,3.5rem)", fontWeight: 700, color: "#1A3A5C", marginBottom: "16px", lineHeight: 1.15 }}>
            Terms &amp;{" "}
            <span style={{ background: "linear-gradient(135deg,#1565C0,#1E88E5,#42A5F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Conditions
            </span>
          </h1>
          <p style={{ color: "#4B7BA8", fontSize: "clamp(0.88rem,2vw,1rem)", maxWidth: "520px", margin: "0 auto 20px", lineHeight: 1.8 }}>
            Please read these Terms carefully before using our Vastu &amp; Numerology Services.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(147,197,253,0.5)", borderRadius: "20px", padding: "8px 20px", fontSize: "0.82rem", color: "#4B7BA8" }}>
            <span style={{ color: "#1E88E5" }}>📅</span>
            Last updated: {LAST_UPDATED}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "clamp(40px,6vw,64px) clamp(16px,5vw,24px) clamp(60px,10vw,100px)", background: "linear-gradient(180deg,#FFFFFF 0%,#F5F9FF 100%)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* Intro card */}
          <div style={{ background: "linear-gradient(135deg,rgba(219,234,254,0.9),rgba(191,219,254,0.7))", border: "1px solid rgba(66,165,250,0.4)", borderLeft: "4px solid #1E88E5", borderRadius: "16px", padding: "clamp(20px,4vw,28px)", marginBottom: "clamp(32px,5vw,48px)", boxShadow: "0 4px 20px rgba(30,136,229,0.08)" }}>
            <p style={{ color: "#1A3A5C", fontSize: "clamp(0.88rem,2vw,0.98rem)", lineHeight: 1.85, margin: 0 }}>
              <strong>Shivoham Guidance</strong> (hereinafter referred to as <strong>&quot;Shivoham Guidance&quot;</strong>, <strong>&quot;We&quot;</strong>, <strong>&quot;Our&quot;</strong>, or <strong>&quot;Us&quot;</strong>), owned and operated by <strong>Monika</strong>, is an individual Vastu &amp; Numerology consultancy practice based in <strong>Faridabad, Haryana</strong>. We operate through the website at <strong>https://www.shivohamguidance.com</strong> (the &quot;Platform&quot;). These Terms and Conditions (&quot;Terms&quot;) govern the use of our Platform and Services by any person (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) who accesses or utilises them.
            </p>
          </div>

          {/* Table of Contents */}
          <div style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(147,197,253,0.5)", borderRadius: "20px", padding: "clamp(20px,4vw,28px)", marginBottom: "clamp(32px,5vw,48px)", boxShadow: "0 4px 20px rgba(30,136,229,0.06)" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(1.2rem,3vw,1.5rem)", fontWeight: 700, color: "#1A3A5C", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "rgba(212,175,55,0.8)" }}>✦</span> Table of Contents
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,260px),1fr))", gap: "6px 20px" }}>
              {sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1E88E5", textDecoration: "none", fontSize: "clamp(0.8rem,2vw,0.88rem)", padding: "5px 0", borderBottom: "1px solid rgba(147,197,253,0.2)" }}>
                  <span style={{ color: "rgba(212,175,55,0.7)", fontSize: "0.65rem", flexShrink: 0 }}>▸</span>
                  <span style={{ color: "#4B7BA8", fontSize: "0.72rem", fontWeight: 600, flexShrink: 0 }}>{String(i + 1).padStart(2,"0")}.</span>
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px,3vw,28px)" }}>
            {sections.map((section, idx) => {
              if (section.isContact) {
                return (
                  <div key={section.id} id={section.id} style={{ background: "linear-gradient(135deg,rgba(219,234,254,0.9),rgba(191,219,254,0.7))", border: "1px solid rgba(66,165,250,0.4)", borderRadius: "20px", padding: "clamp(24px,4vw,36px)", boxShadow: "0 4px 20px rgba(30,136,229,0.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                      <span style={{ fontSize: "clamp(20px,4vw,26px)" }}>{section.icon}</span>
                      <h2 style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(1.2rem,3vw,1.5rem)", fontWeight: 700, color: "#1A3A5C", margin: 0 }}>
                        <span style={{ color: "rgba(212,175,55,0.7)", marginRight: "8px", fontSize: "0.8rem" }}>{String(idx + 1).padStart(2,"0")}.</span>
                        {section.title}
                      </h2>
                    </div>
                    <p style={{ color: "#4B7BA8", fontSize: "clamp(0.85rem,2vw,0.92rem)", marginBottom: "20px", lineHeight: 1.7 }}>
                      For any questions, grievances, or concerns regarding these Terms or our Services, please contact us:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {[
                        { icon: "👤", label: "Name", value: "Monika" },
                        { icon: "📍", label: "Address", value: "Faridabad, Haryana, India" },
                        { icon: "💬", label: "WhatsApp", value: "+91 7027510541" },
                        { icon: "✉️", label: "Email", value: "nikhilkhatkar34@gmail.com" },
                        { icon: "🕐", label: "Hours", value: "Monday–Saturday, 10:00 AM – 7:00 PM IST" },
                      ].map((item) => (
                        <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "10px 16px", background: "rgba(255,255,255,0.7)", borderRadius: "10px", border: "1px solid rgba(147,197,253,0.4)" }}>
                          <span style={{ fontSize: "16px", flexShrink: 0 }}>{item.icon}</span>
                          <div>
                            <span style={{ color: "#1565C0", fontWeight: 700, fontSize: "0.8rem", display: "block" }}>{item.label}</span>
                            <span style={{ color: "#1A3A5C", fontSize: "clamp(0.82rem,2vw,0.9rem)" }}>{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={section.id}
                  id={section.id}
                  style={{
                    background: section.highlight ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(8px)",
                    border: section.highlight ? "1px solid rgba(66,165,250,0.5)" : "1px solid rgba(147,197,253,0.4)",
                    borderLeft: section.highlight ? "4px solid #1E88E5" : "4px solid rgba(212,175,55,0.5)",
                    borderRadius: "16px",
                    padding: "clamp(20px,4vw,32px)",
                    boxShadow: section.highlight ? "0 4px 24px rgba(30,136,229,0.1)" : "0 2px 12px rgba(30,136,229,0.05)",
                  }}
                >
                  {/* Section header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "clamp(18px,4vw,24px)", flexShrink: 0 }}>{section.icon}</span>
                    <h2 style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(1.15rem,3vw,1.45rem)", fontWeight: 700, color: "#1A3A5C", margin: 0, lineHeight: 1.3 }}>
                      <span style={{ color: "rgba(212,175,55,0.7)", marginRight: "8px", fontSize: "0.8rem", fontFamily: "Georgia,serif" }}>{String(idx + 1).padStart(2,"0")}.</span>
                      {section.title}
                    </h2>
                  </div>

                  {/* Body text */}
                  {section.content && (
                    <p style={{ color: "#4B7BA8", fontSize: "clamp(0.85rem,2vw,0.92rem)", lineHeight: 1.85, marginBottom: section.items ? "16px" : "0" }}>
                      {section.content}
                    </p>
                  )}

                  {/* Bullet items */}
                  {section.items && (
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {section.items.map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "8px 12px", background: "rgba(239,246,255,0.6)", borderRadius: "8px", border: "1px solid rgba(147,197,253,0.25)" }}>
                          <span style={{ color: "#1E88E5", flexShrink: 0, marginTop: "3px", fontSize: "0.7rem", fontWeight: 700 }}>{String(i + 1).padStart(2,"0")}</span>
                          <span style={{ color: "#1A3A5C", fontSize: "clamp(0.82rem,2vw,0.9rem)", lineHeight: 1.7 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Note */}
                  {(section as { note?: string }).note && (
                    <div style={{ marginTop: "16px", padding: "10px 14px", background: "rgba(219,234,254,0.5)", border: "1px solid rgba(66,165,250,0.3)", borderRadius: "8px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#1E88E5", flexShrink: 0 }}>ℹ️</span>
                      <p style={{ color: "#1565C0", fontSize: "clamp(0.8rem,2vw,0.88rem)", lineHeight: 1.7, margin: 0 }}>{(section as { note?: string }).note}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom acceptance box */}
          <div style={{ marginTop: "clamp(40px,6vw,60px)", background: "linear-gradient(135deg,#EEF5FF,#DBEAFE,#EEF5FF)", border: "1px solid rgba(147,197,253,0.5)", borderRadius: "20px", padding: "clamp(24px,5vw,36px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", fontSize: "min(30vw,200px)", color: "rgba(212,175,55,0.05)", userSelect: "none", lineHeight: 1, fontFamily: "Georgia,serif", pointerEvents: "none", animation: "omPulse 8s ease-in-out infinite" }}>ॐ</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "clamp(28px,6vw,40px)", marginBottom: "12px" }}>🙏</div>
              <div className="section-ornament" style={{ marginBottom: "12px" }}><span>★</span><span>✦</span><span>★</span></div>
              <h3 style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 700, color: "#1A3A5C", marginBottom: "12px" }}>
                Your Acceptance of These Terms
              </h3>
              <p style={{ color: "#4B7BA8", fontSize: "clamp(0.85rem,2vw,0.95rem)", maxWidth: "600px", margin: "0 auto 28px", lineHeight: 1.8 }}>
                By booking a session or using our Services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. These Terms were last updated on <strong style={{ color: "#1565C0" }}>{LAST_UPDATED}</strong>.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link href="/book" className="btn-gold">✦ Book a Session</Link>
                <a href={`https://wa.me/917027510541?text=${encodeURIComponent("Hello Monika! I've read the Terms & Conditions and I'd like to book a session.")}`} target="_blank" rel="noopener noreferrer" className="btn-outline">💬 Message Monika</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
