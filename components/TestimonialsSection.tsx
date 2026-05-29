const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    service: "Personal Numerology",
    review: "Monika's numerology reading was incredibly accurate. She identified exactly the challenges I was facing and gave me a clear roadmap. My life has truly transformed after following her guidance.",
    symbol: "①",
  },
  {
    name: "Rajesh Kumar",
    city: "Delhi",
    rating: 5,
    service: "Vastu Consultation",
    review: "The Vastu consultation for my home was life-changing. After implementing her suggestions, the energy in our house completely shifted. Business has improved and family harmony is at its best.",
    symbol: "⑧",
  },
  {
    name: "Meena & Suresh",
    city: "Bangalore",
    rating: 5,
    service: "Name Correction",
    review: "We were going through a rough patch in our relationship. Monika's reading revealed so much about our compatibility and gave us practical tools to strengthen our bond. Highly recommend!",
    symbol: "⑥",
  },
  {
    name: "Anita Verma",
    city: "Pune",
    rating: 5,
    service: "Name Correction",
    review: "I never thought a name change could make such a difference. After Monika's name correction, I started getting better opportunities at work within 3 months. Truly amazed!",
    symbol: "③",
  },
  {
    name: "Vijay Patel",
    city: "Ahmedabad",
    rating: 5,
    service: "Detailed Numerology",
    review: "Got a family reading done for myself, wife, and daughter. The insights were spot-on for each of us. Monika is very patient and thorough in her explanations.",
    symbol: "⑨",
  },
  {
    name: "Sunita Joshi",
    city: "Jaipur",
    rating: 5,
    service: "Mini Consultation",
    review: "I was at a crossroads in my career. Monika's reading gave me the courage and clarity to take the right step. Now I'm in a job I love and finally at peace. Thank you so much!",
    symbol: "⑤",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            fontSize: "clamp(13px, 3vw, 16px)",
            color: "#FFD700",
            animation: `twinkle 3s ease-in-out ${i * 0.2}s infinite`,
            display: "inline-block",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection({ limit }: { limit?: number }) {
  const displayed = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
        gap: "clamp(16px, 3vw, 24px)",
      }}
    >
      {displayed.map((t, i) => (
        <div
          key={i}
          className="mystic-card"
          style={{ padding: "clamp(20px, 4vw, 28px)", position: "relative", overflow: "hidden" }}
        >
          {/* Numerology symbol watermark */}
          <div style={{ position: "absolute", top: "8px", right: "12px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "rgba(30,136,229,0.08)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
            {t.symbol}
          </div>

          {/* Corner glow */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "60px", height: "60px", background: "radial-gradient(circle at top left, rgba(66,165,250,0.08), transparent 70%)", pointerEvents: "none" }} />

          {/* Stars */}
          <StarRating count={t.rating} />

          {/* Large decorative quote */}
          <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3rem, 8vw, 5rem)", color: "rgba(30,136,229,0.12)", lineHeight: 0.6, marginTop: "8px", userSelect: "none" }}>
            &ldquo;
          </div>

          <p style={{ color: "#B3E5FC", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.75, margin: "8px 0 18px", fontStyle: "italic", position: "relative", zIndex: 1 }}>
            {t.review}
          </p>

          {/* Sacred divider line */}
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(66,165,250,0.3), transparent)", marginBottom: "14px" }} />

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "clamp(36px, 7vw, 44px)",
                height: "clamp(36px, 7vw, 44px)",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1E88E5, #0D47A1)",
                border: "1px solid rgba(66,165,250,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(14px, 3vw, 18px)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 700,
                color: "#FFFFFF",
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(30,136,229,0.25)",
              }}
            >
              {t.name[0]}
            </div>
            <div>
              <div style={{ color: "#EDF4FF", fontWeight: 600, fontSize: "clamp(0.82rem, 2vw, 0.9rem)" }}>{t.name}</div>
              <div style={{ color: "#607D8B", fontSize: "clamp(0.7rem, 1.8vw, 0.78rem)", marginTop: "2px" }}>
                <span style={{ color: "#42A5F5", marginRight: "4px" }}>✦</span>
                {t.city} · {t.service}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
