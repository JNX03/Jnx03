"use client";

import { useEffect, useRef } from "react";

export default function ParallaxScene({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-depth]"));
    if (layers.length === 0) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let active = false;

    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      targetX = (e.clientX - w / 2) / (w / 2);
      targetY = (e.clientY - h / 2) / (h / 2);
      if (!active) {
        active = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;

      for (const el of layers) {
        const depth = parseFloat(el.dataset.depth ?? "0");
        const tx = curX * depth * 60;
        const ty = curY * depth * 60;
        const tilt = el.dataset.tilt !== "none";
        const rx = tilt ? -curY * depth * 6 : 0;
        const ry = tilt ? curX * depth * 6 : 0;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }

      if (Math.abs(targetX - curX) < 0.001 && Math.abs(targetY - curY) < 0.001) {
        active = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ perspective: "1200px" }}>
      {children}
    </div>
  );
}
