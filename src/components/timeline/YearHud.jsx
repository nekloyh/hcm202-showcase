// src/components/timeline/YearHUD.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function YearHUD({ currentYear }) {
  const ref = useRef(null);
  const last = useRef(currentYear);

  useEffect(() => {
    const node = ref.current;
    // Animate number tween từ last -> currentYear
    gsap.to(last, {
      duration: 0.6,
      value: currentYear,
      roundProps: "value",
      onUpdate: () => {
        if (node) node.textContent = last.current.toString();
      },
      ease: "power2.out",
    });
  }, [currentYear]);

  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 50,
        padding: "10px 16px",
        borderRadius: 12,
        backdropFilter: "blur(8px)",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        fontSize: 32,
        fontWeight: 800,
        letterSpacing: 1,
      }}
      aria-label="Năm hiện tại trên timeline"
    >
      <span ref={ref}>{currentYear}</span>
    </div>
  );
}
