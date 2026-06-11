"use client";

import { useEffect, useState } from "react";

interface FloatingNumber {
  id: number;
  value: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
  useWhite: boolean;
}

const SYMBOLS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "✦", "☽", "⬡", "△", "◯", "∞"];

function generateNumbers(count: number): FloatingNumber[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    value: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    left: `${Math.random() * 100}%`,
    duration: `${12 + Math.random() * 20}s`,
    delay: `${Math.random() * 15}s`,
    size: `${1 + Math.random() * 2}rem`,
    useWhite: Math.random() > 0.5,
  }));
}

export default function AnimatedNumbers({ count = 20 }: { count?: number }) {
  const [numbers, setNumbers] = useState<FloatingNumber[]>([]);

  useEffect(() => {
    setNumbers(generateNumbers(count));
  }, [count]);

  if (numbers.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {numbers.map((num) => (
        <span
          key={num.id}
          style={{
            position: "absolute",
            left: num.left,
            bottom: "-60px",
            fontSize: num.size,
            opacity: num.useWhite ? 0.13 : 0.16,
            color: num.useWhite ? "#D4AF37" : "#42A5F5",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            animation: `floatUp ${num.duration} linear ${num.delay} infinite`,
          // floatUp defined in globals.css
            userSelect: "none",
          }}
        >
          {num.value}
        </span>
      ))}
    </div>
  );
}
