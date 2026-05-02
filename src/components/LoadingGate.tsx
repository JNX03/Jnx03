"use client";

import { useEffect, useState } from "react";

type Phase = "loading" | "revealing" | "done";

const MIN_HOLD_MS = 900;
const REVEAL_MS = 1100;
const FALLBACK_MS = 6000;

export default function LoadingGate({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const startedAt = performance.now();

    const beginReveal = () => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, MIN_HOLD_MS - elapsed);
      setTimeout(() => {
        setPhase("revealing");
        setTimeout(() => setPhase("done"), REVEAL_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      beginReveal();
      return;
    }

    const onLoad = () => beginReveal();
    const fallback = setTimeout(onLoad, FALLBACK_MS);
    window.addEventListener("load", onLoad, { once: true });
    return () => {
      clearTimeout(fallback);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  const revealing = phase === "revealing";

  return (
    <>
      {children}
      {phase !== "done" && (
        <div
          className={`fixed inset-0 z-50 ${revealing ? "pointer-events-none" : ""}`}
          aria-hidden={revealing}
          role="status"
          aria-label="Loading"
        >
          <div
            className={`absolute inset-x-0 top-0 h-1/2 bg-white overflow-hidden transform-gpu transition-transform duration-[1100ms] ease-[cubic-bezier(.83,0,.17,1)] ${
              revealing ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(5rem,18vw,16rem)] font-extrabold leading-none tracking-tighter text-black">
              JNX03
            </span>
          </div>
          <div
            className={`absolute inset-x-0 bottom-0 h-1/2 bg-white overflow-hidden transform-gpu transition-transform duration-[1100ms] ease-[cubic-bezier(.83,0,.17,1)] ${
              revealing ? "translate-y-full" : "translate-y-0"
            }`}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(5rem,18vw,16rem)] font-extrabold leading-none tracking-tighter text-black">
              JNX03
            </span>
          </div>
        </div>
      )}
    </>
  );
}
