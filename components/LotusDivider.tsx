// Server component — no "use client" needed

interface LotusDividerProps {
  color?: string;
  opacity?: number;
}

// 9 petals symmetrical around cx=96
// Petal centers at x = 44,57,70,83,96,109,122,135,148
// Lean angle proportional to distance from center (cx=96)
const PETAL_CX = [44, 57, 70, 83, 96, 109, 122, 135, 148] as const;
const CENTER_CX = 96;

function getPetalRotation(cx: number): number {
  const offset = cx - CENTER_CX;
  return offset * 0.55; // degrees of lean per unit of distance
}

export default function LotusDivider({ color = "#D4AF37", opacity = 0.5 }: LotusDividerProps) {
  const hex55 = `${color}80`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "clamp(40px,6vw,60px) auto",
        maxWidth: "700px",
        padding: "0 clamp(16px,5vw,24px)",
      }}
    >
      {/* Left line */}
      <div
        style={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(to right, transparent, ${hex55})`,
        }}
      />

      {/* SVG Lotus */}
      <svg
        viewBox="0 0 200 60"
        width="160"
        height="48"
        style={{ flexShrink: 0, opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 9 petals */}
        {PETAL_CX.map((cx) => {
          const rotate = getPetalRotation(cx);
          return (
            <ellipse
              key={cx}
              cx={cx}
              cy={30}
              rx={7}
              ry={15}
              fill="none"
              stroke={color}
              strokeWidth="0.8"
              transform={`rotate(${rotate}, ${cx}, 30)`}
            />
          );
        })}

        {/* Central circle */}
        <circle cx={CENTER_CX} cy={30} r={5} fill="none" stroke={color} strokeWidth="0.8" />

        {/* Bindu — small filled dot */}
        <circle cx={CENTER_CX} cy={30} r={1.5} fill={color} />

        {/* Left horizontal line */}
        <line x1={0} y1={30} x2={38} y2={30} stroke={color} strokeWidth="0.5" opacity="0.6" />

        {/* Right horizontal line */}
        <line x1={154} y1={30} x2={200} y2={30} stroke={color} strokeWidth="0.5" opacity="0.6" />
      </svg>

      {/* Right line */}
      <div
        style={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(to left, transparent, ${hex55})`,
        }}
      />
    </div>
  );
}
