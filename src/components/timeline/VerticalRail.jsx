// src/components/timeline/VerticalRail.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import YearBubble from "./YearBubble";

export default function VerticalRail({ items, activeIndex, currentYear }) {
  const [vh, setVh] = useState(() => window.innerHeight || 800);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight || 800);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // vị trí bubble chạy trong khung 100vh
  const n = items.length;
  const gutterTop = 24; // chừa khoảng trên
  const gutterBottom = 24; // chừa khoảng dưới
  const bubbleSize = 72;
  const travel = Math.max(0, vh - gutterTop - gutterBottom - bubbleSize);

  const targetY = useMemo(() => {
    const t = n > 1 ? activeIndex / (n - 1) : 0;
    return gutterTop + t * travel;
  }, [activeIndex, n, travel]);

  return (
    <>
      {/* Thanh nét đứt full viewport, cố định ở mép trái */}
      <div
        style={{
          position: "fixed",
          top: 100,
          left: 40, // mép trái màn hình
          height: "100vh",
          width: 2,
          zIndex: 50,
          background:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,.9), rgba(255,255,255,.9) 8px, transparent 8px, transparent 16px)",
          opacity: 0.9,
          pointerEvents: "none",
        }}
      />

      {/* Bubble năm chạy dọc rail (cũng fixed) */}
      <div
        ref={bubbleRef}
        style={{
          position: "fixed",
          top: 10,
          left: 16, // canh theo left của rail
          height: 0,
          zIndex: 60,
          pointerEvents: "none",
        }}
      >
        <YearBubble targetY={targetY} currentYear={currentYear} />
      </div>
    </>
  );
}
