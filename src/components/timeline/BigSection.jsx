// src/components/timeline/BigSection.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function BigSection({ node, index, onActive }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;

    // hiệu ứng xuất hiện nhẹ
    gsap.fromTo(
      el,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // đánh dấu section đang active (khi tâm section gần giữa viewport)
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () => onActive(index, node.year),
      onEnterBack: () => onActive(index, node.year),
    });
    return () => st.kill();
  }, [index, node, onActive]);

  return (
    <section
      ref={ref}
      id={node.id}
      style={{
        margin: "140px 0",
        padding: "28px 32px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div style={{ opacity: 0.8, fontSize: 12, letterSpacing: 1 }}>
        {node.range ? node.range : node.year}
      </div>
      <h2 style={{ margin: "6px 0 12px", fontSize: 26, lineHeight: 1.25 }}>
        {node.title}
      </h2>
      <p style={{ color: "rgba(255,255,255,0.92)" }}>{node.description}</p>
      {node.impactHCM && (
        <p style={{ marginTop: 10, fontStyle: "italic", opacity: 0.9 }}>
          <strong>Liên hệ tư tưởng Hồ Chí Minh:</strong> {node.impactHCM}
        </p>
      )}
      {/* chỗ này bạn đặt nội dung dài, ảnh, trích dẫn... */}
    </section>
  );
}
