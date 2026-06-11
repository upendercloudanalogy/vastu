// Server component — no "use client" needed
// All positions are hardcoded to avoid SSR/hydration mismatches

const STARS = [
  {t:"1%",l:"7%",s:2,d:"0s",r:"3.5s"},{t:"3%",l:"23%",s:1,d:"1.2s",r:"4s"},
  {t:"2%",l:"41%",s:2,d:"0.4s",r:"3s"},{t:"5%",l:"59%",s:1,d:"2.1s",r:"4.5s"},
  {t:"1%",l:"77%",s:3,d:"0.8s",r:"2.5s"},{t:"4%",l:"91%",s:1,d:"1.7s",r:"3s"},
  {t:"12%",l:"3%",s:1,d:"0.3s",r:"4s"},{t:"15%",l:"17%",s:2,d:"1.8s",r:"3.5s"},
  {t:"11%",l:"34%",s:1,d:"0.9s",r:"4.5s"},{t:"17%",l:"51%",s:2,d:"2.4s",r:"3s"},
  {t:"13%",l:"68%",s:1,d:"0.1s",r:"3.5s"},{t:"18%",l:"84%",s:2,d:"1.5s",r:"4s"},
  {t:"24%",l:"10%",s:2,d:"2.0s",r:"3s"},{t:"28%",l:"26%",s:1,d:"0.6s",r:"4.5s"},
  {t:"22%",l:"44%",s:3,d:"1.3s",r:"3.5s"},{t:"31%",l:"62%",s:1,d:"2.7s",r:"4s"},
  {t:"26%",l:"79%",s:2,d:"0.5s",r:"3s"},{t:"30%",l:"95%",s:1,d:"1.1s",r:"4.5s"},
  {t:"38%",l:"6%",s:1,d:"1.6s",r:"4s"},{t:"42%",l:"21%",s:2,d:"0.2s",r:"3.5s"},
  {t:"36%",l:"39%",s:1,d:"2.3s",r:"5s"},{t:"44%",l:"56%",s:2,d:"0.7s",r:"3s"},
  {t:"40%",l:"73%",s:1,d:"1.9s",r:"4s"},{t:"46%",l:"89%",s:2,d:"2.6s",r:"3.5s"},
  {t:"53%",l:"2%",s:2,d:"1.0s",r:"4.5s"},{t:"57%",l:"16%",s:1,d:"0.4s",r:"3s"},
  {t:"51%",l:"33%",s:2,d:"2.2s",r:"4s"},{t:"59%",l:"50%",s:1,d:"1.7s",r:"3.5s"},
  {t:"54%",l:"67%",s:2,d:"0.8s",r:"5s"},{t:"62%",l:"83%",s:1,d:"2.9s",r:"3s"},
  {t:"58%",l:"95%",s:2,d:"0.3s",r:"4s"},{t:"68%",l:"9%",s:1,d:"1.4s",r:"3.5s"},
  {t:"72%",l:"24%",s:2,d:"2.5s",r:"4s"},{t:"66%",l:"41%",s:1,d:"0.1s",r:"3s"},
  {t:"74%",l:"58%",s:2,d:"1.8s",r:"4.5s"},{t:"70%",l:"75%",s:1,d:"0.6s",r:"3.5s"},
  {t:"76%",l:"91%",s:2,d:"2.1s",r:"4s"},{t:"82%",l:"5%",s:2,d:"0.9s",r:"3s"},
  {t:"86%",l:"19%",s:1,d:"2.3s",r:"4.5s"},{t:"84%",l:"36%",s:2,d:"1.1s",r:"3.5s"},
  {t:"88%",l:"54%",s:1,d:"0.5s",r:"4s"},{t:"83%",l:"71%",s:2,d:"1.6s",r:"3s"},
  {t:"90%",l:"87%",s:1,d:"2.8s",r:"4.5s"},{t:"94%",l:"14%",s:2,d:"0.7s",r:"3.5s"},
  {t:"92%",l:"45%",s:1,d:"2.0s",r:"4s"},{t:"97%",l:"63%",s:2,d:"1.3s",r:"3s"},
  {t:"96%",l:"80%",s:1,d:"0.2s",r:"4.5s"},{t:"25%",l:"95%",s:1,d:"3.1s",r:"3.5s"},
  {t:"67%",l:"1%",s:1,d:"0.9s",r:"4.5s"},{t:"49%",l:"98%",s:2,d:"1.4s",r:"3s"},
] as const;

const GOLD_PARTICLES = [
  {l:"3%",d:"0s",r:"14s"},{l:"9%",d:"3s",r:"12s"},{l:"16%",d:"7s",r:"16s"},
  {l:"23%",d:"1.5s",r:"13s"},{l:"30%",d:"5s",r:"11s"},{l:"37%",d:"9s",r:"15s"},
  {l:"44%",d:"2.5s",r:"14s"},{l:"51%",d:"6.5s",r:"12s"},{l:"58%",d:"0.5s",r:"16s"},
  {l:"65%",d:"4s",r:"13s"},{l:"72%",d:"8s",r:"11s"},{l:"79%",d:"2s",r:"15s"},
  {l:"86%",d:"6s",r:"14s"},{l:"92%",d:"10s",r:"12s"},{l:"97%",d:"3.5s",r:"16s"},
] as const;

export default function CosmicBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {/* Deep nebula gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(30,136,229,0.06) 0%, transparent 45%)," +
            "radial-gradient(ellipse at 85% 80%, rgba(13,71,161,0.05) 0%, transparent 45%)," +
            "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Moon glow — top-right */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(179,229,252,0.13) 0%, rgba(30,136,229,0.06) 35%, transparent 65%)",
          animation: "moonGlow 8s ease-in-out infinite",
        }}
      />

      {/* Om symbol — giant centered watermark with pulse */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "min(50vw,500px)",
          color: "rgba(212,175,55,0.20)",
          userSelect: "none",
          lineHeight: 1,
          fontFamily: "Georgia, serif",
          animation: "omPulse 8s ease-in-out infinite",
        }}
      >
        ॐ
      </div>

      {/* Twinkling stars */}
      {STARS.map((star, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: star.t,
            left: star.l,
            width: `${star.s + 1}px`,
            height: `${star.s + 1}px`,
            borderRadius: "50%",
            background: "#1E88E5",
            boxShadow: `0 0 ${star.s * 2 + 2}px rgba(30,136,229,0.5)`,
            animation: `twinkle ${star.r} ease-in-out ${star.d} infinite`,
          }}
        />
      ))}

      {/* Gold floating particles */}
      {GOLD_PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: 0,
            left: p.l,
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            background: "#D4AF37",
            boxShadow: "0 0 4px rgba(212,175,55,0.7)",
            animation: `floatUpGold ${p.r} linear ${p.d} infinite`,
          }}
        />
      ))}

      {/* Constellation SVG */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          animation: "constellationFade 8s ease-in-out infinite",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Constellation lines */}
        <polyline
          points="7,1 23,3 41,2 59,5"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.15"
        />
        <polyline
          points="77,1 91,4 84,15"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.15"
        />
        <polyline
          points="3,12 17,15 10,24"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.15"
        />
        <polyline
          points="95,19 89,30 76,38"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.15"
        />
        <polyline
          points="5,82 19,86 36,84"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.15"
        />
        <polyline
          points="54,88 71,83 87,91"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.15"
        />
      </svg>
    </div>
  );
}
