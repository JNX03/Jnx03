"use client";

import { useEffect } from "react";

export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
