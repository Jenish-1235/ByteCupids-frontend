import React, { useEffect, useRef, useState } from "react";

function isBackground(el: Element | null): boolean {
  while (el) {
    if (el.classList && el.classList.contains("cursor-bg")) return true;
    el = el.parentElement;
  }
  return false;
}

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  );
}

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouchDevice()) {
      setVisible(false);
      return;
    }

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && !isBackground(el)) {
        setHovering(true);
      } else {
        setHovering(false);
      }
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 18,
        height: 18,
        pointerEvents: "none",
        zIndex: 2147483647,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "screen",
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: hovering ? "var(--color-neon-violet)" : "#fff",
          boxShadow: hovering
            ? "0 0 80px 32px var(--color-neon-violet), 0 0 0 4px var(--color-neon-violet)"
            : "0 0 80px 32px #fff8",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
      />
    </div>
  );
};

export default CustomCursor;
