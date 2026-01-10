// src/components/timeline/YearBubble.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function YearBubble({ targetY, currentYear }) {
  const bubbleRef = useRef(null);
  const numberStore = useRef({ val: currentYear });
  const numberRef = useRef(null);

  // animate Y
  useEffect(() => {
    if (!bubbleRef.current) return;
    gsap.to(bubbleRef.current, {
      y: targetY,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [targetY]);

  // animate number
  useEffect(() => {
    gsap.to(numberStore.current, {
      val: currentYear,
      duration: 0.6,
      ease: "power2.out",
      roundProps: "val",
      onUpdate: () => {
        if (numberRef.current)
          numberRef.current.textContent = numberStore.current.val.toString();
      },
    });
  }, [currentYear]);

  return (
    <div
      ref={bubbleRef}
      style={{
        position: "absolute",
        left: -12, // hơi lấn ra ngoài cho đẹp
        top: 100,
        width: 72,
        height: 72,
        borderRadius: 999,
        background: "white",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        boxShadow: "0 6px 24px rgba(0,0,0,.35)",
      }}
      aria-label="Năm timeline"
    >
      <span ref={numberRef}>{currentYear}</span>
    </div>
  );
}
