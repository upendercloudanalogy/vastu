import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isPremium?: boolean;
  badge?: string;
}

const parsePrice = (p: string) => Number(p.replace(/[^0-9.]/g, ""));

export default function PricingCard({ title, price, originalPrice, description, features, isPremium = false, badge }: PricingCardProps) {
  const discountPct =
    originalPrice && parsePrice(originalPrice) > 0
      ? Math.round((1 - parsePrice(price) / parsePrice(originalPrice)) * 100)
      : 0;
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
            background: isPremium ? "linear-gradient(135deg, #D4AF37, #E8C840)" : "linear-gradient(135deg, #1E88E5, #42A5F5)",
            color: "#FFFFFF",
            padding: "4px 20px",
            borderRadius: "20px",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase" as const,
            whiteSpace: "nowrap",
            boxShadow: isPremium ? "0 4px 16px rgba(212,175,55,0.4)" : "0 4px 12px rgba(30,136,229,0.4)",
            zIndex: 10,
          }}
        >
          ✦ {badge}
        </div>
      )}

    <div
      style={{
        background: isPremium
          ? "linear-gradient(135deg, #EEF5FF 0%, #DBEAFE 50%, #EEF5FF 100%)"
          : "linear-gradient(135deg, #DBEAFE, #BFDBFE)",
        border: isPremium ? "2px solid rgba(212,175,55,0.5)" : "1px solid #93C5FD",
        borderTop: isPremium ? "3px solid rgba(212,175,55,0.7)" : undefined,
        borderRadius: "20px",
        padding: "clamp(24px, 5vw, 36px) clamp(20px, 4vw, 28px)",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isPremium
          ? "0 0 40px rgba(212,175,55,0.12), 0 20px 60px rgba(30,136,229,0.18)"
          : "0 8px 32px rgba(30,136,229,0.12)",
        flex: 1,
      }}
      className={isPremium ? "pricing-card-premium" : "pricing-card"}
    >
      {/* Sacred symbol watermark */}
      <div style={{ position: "absolute", top: "12px", right: "16px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3rem, 7vw, 4.5rem)", fontWeight: 700, color: isPremium ? "rgba(212,175,55,0.10)" : "rgba(30,136,229,0.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
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
          color: "#1A3A5C",
          marginBottom: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p style={{ color: "#4B7BA8", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", marginBottom: "24px", position: "relative", zIndex: 1 }}>
        {description}
      </p>

      {/* Price */}
      <div style={{ marginBottom: "24px", position: "relative", zIndex: 1 }}>
        {originalPrice && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.1rem, 2.6vw, 1.5rem)",
                fontWeight: 600,
                color: "#94A3B8",
                textDecoration: "line-through",
                textDecorationColor: isPremium ? "rgba(201,147,42,0.7)" : "rgba(21,101,192,0.6)",
                lineHeight: 1,
              }}
            >
              {originalPrice}
            </span>
            <span
              style={{
                background: "rgba(34,197,94,0.12)",
                color: "#16A34A",
                border: "1px solid rgba(34,197,94,0.35)",
                borderRadius: "20px",
                padding: "3px 12px",
                fontSize: "clamp(0.66rem, 1.6vw, 0.75rem)",
                fontWeight: 700,
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
              }}
            >
              {discountPct}% OFF
            </span>
          </div>
        )}
        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            background: isPremium
              ? "linear-gradient(135deg, #C9932A, #E8B84B, #D4AF37)"
              : "linear-gradient(135deg, #1565C0, #42A5F5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          {price}
        </span>
        {/* {originalPrice && (
          <div style={{ color: "#16A34A", fontSize: "clamp(0.74rem, 1.8vw, 0.85rem)", fontWeight: 600, marginTop: "6px" }}>
            You save {discountPct}% (₹{(parsePrice(originalPrice) - parsePrice(price)).toLocaleString("en-IN")} off)
          </div>
        )} */}
      </div>

      {/* Sacred thin divider */}
      <div style={{ height: "1px", background: isPremium ? "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" : "linear-gradient(to right, transparent, rgba(30,136,229,0.25), transparent)", marginBottom: "20px" }} />

      {/* Features */}
      <ul style={{ listStyle: "none", marginBottom: "28px", position: "relative", zIndex: 1 }}>
        {features.map((feature, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              color: "#1A3A5C",
              fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
              marginBottom: "10px",
              lineHeight: 1.4,
            }}
          >
            <span style={{ color: isPremium ? "#C9932A" : "#1E88E5", marginTop: "2px", flexShrink: 0 }}>▸</span>
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
          box-shadow: 0 0 40px rgba(212,175,55,0.2), 0 20px 60px rgba(30, 136, 229, 0.25);
          border-color: rgba(212,175,55,0.8) !important;
        }
      `}</style>
    </div>
    </div>
  );
}
