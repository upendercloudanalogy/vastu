import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPremium?: boolean;
  badge?: string;
}

export default function PricingCard({ title, price, description, features, isPremium = false, badge }: PricingCardProps) {
  return (
    /* Outer wrapper: position:relative so badge can anchor to it; paddingTop reserves badge space */
    <div style={{ paddingTop: badge ? "16px" : "0", display: "flex", flexDirection: "column", position: "relative" }}>

      {/* Badge lives in the wrapper (not the overflow:hidden card) so it's never clipped */}
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            background: isPremium ? "linear-gradient(135deg, #FFFFFF, #E3F2FD)" : "linear-gradient(135deg, #1E88E5, #42A5F5)",
            color: isPremium ? "#020C18" : "#FFFFFF",
            padding: "4px 20px",
            borderRadius: "20px",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase" as const,
            whiteSpace: "nowrap",
            boxShadow: isPremium ? "0 4px 16px rgba(255,255,255,0.2)" : "0 4px 12px rgba(30,136,229,0.4)",
            zIndex: 10,
          }}
        >
          ✦ {badge}
        </div>
      )}

    <div
      style={{
        background: isPremium
          ? "linear-gradient(135deg, #0D47A1 0%, #071A30 50%, #0F2E57 100%)"
          : "linear-gradient(135deg, #071A30, #0A2040)",
        border: isPremium ? "2px solid rgba(255,255,255,0.3)" : "1px solid #143D7A",
        borderRadius: "20px",
        padding: "clamp(24px, 5vw, 36px) clamp(20px, 4vw, 28px)",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isPremium
          ? "0 0 40px rgba(255,255,255,0.08), 0 20px 60px rgba(30,136,229,0.2)"
          : "0 10px 40px rgba(0,0,0,0.35)",
        flex: 1,
      }}
      className={isPremium ? "pricing-card-premium" : "pricing-card"}
    >
      {/* Sacred symbol watermark */}
      <div style={{ position: "absolute", top: "12px", right: "16px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3rem, 7vw, 4.5rem)", fontWeight: 700, color: isPremium ? "rgba(255,255,255,0.04)" : "rgba(30,136,229,0.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
        ✦
      </div>

      {/* Corner glow */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "80px", height: "80px", background: isPremium ? "radial-gradient(circle at bottom right, rgba(255,255,255,0.06), transparent 70%)" : "radial-gradient(circle at bottom right, rgba(30,136,229,0.1), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "60px", height: "60px", background: isPremium ? "radial-gradient(circle at top left, rgba(66,165,250,0.08), transparent 70%)" : "radial-gradient(circle at top left, rgba(30,136,229,0.06), transparent 70%)", pointerEvents: "none" }} />

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
          fontWeight: 700,
          color: isPremium ? "#FFFFFF" : "#EDF4FF",
          marginBottom: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p style={{ color: isPremium ? "rgba(179,229,252,0.8)" : "#90A4AE", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", marginBottom: "24px", position: "relative", zIndex: 1 }}>
        {description}
      </p>

      {/* Price */}
      <div style={{ marginBottom: "24px", position: "relative", zIndex: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            background: isPremium
              ? "linear-gradient(135deg, #FFFFFF, #B3E5FC)"
              : "linear-gradient(135deg, #42A5F5, #1E88E5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          {price}
        </span>
      </div>

      {/* Sacred thin divider */}
      <div style={{ height: "1px", background: isPremium ? "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)" : "linear-gradient(to right, transparent, rgba(30,136,229,0.25), transparent)", marginBottom: "20px" }} />

      {/* Features */}
      <ul style={{ listStyle: "none", marginBottom: "28px", position: "relative", zIndex: 1 }}>
        {features.map((feature, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              color: "#EDF4FF",
              fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
              marginBottom: "10px",
              lineHeight: 1.4,
            }}
          >
            <span style={{ color: isPremium ? "#82CFFF" : "#42A5F5", marginTop: "2px", flexShrink: 0 }}>▸</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`/book?service=${encodeURIComponent(title)}`}
        className={isPremium ? "btn-gold" : "btn-outline"}
        style={{ width: "100%", justifyContent: "center", position: "relative", zIndex: 1 }}
      >
        Book This Package
      </Link>

      <style>{`
        .pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(30, 136, 229, 0.2), 0 0 30px rgba(66, 165, 250, 0.1);
          border-color: #42A5F5 !important;
        }
        .pricing-card-premium:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.15), 0 20px 60px rgba(30, 136, 229, 0.3);
        }
      `}</style>
    </div>
    </div>
  );
}
