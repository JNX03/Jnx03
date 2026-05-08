"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CHAPTER_KANJI, JP_LABELS, NAV, type NavEntry } from "@/lib/nav";

type CurtainPhase = "idle" | "in" | "covered" | "out";

type CurtainState = {
  phase: CurtainPhase;
  label: { num: string; text: string; jp: string; kanji: string };
};

type CurtainContextValue = {
  state: CurtainState;
  play: (href: string, navEntry?: NavEntry) => void;
};

const CurtainContext = createContext<CurtainContextValue | null>(null);

export function useCurtain() {
  const ctx = useContext(CurtainContext);
  if (!ctx) throw new Error("useCurtain must be used inside <CurtainProvider>");
  return ctx;
}

const COVER_MS = 780;
const REVEAL_MS = 1100;
const SAFETY_MS = 1400;

export default function CurtainProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<CurtainState>({
    phase: "idle",
    label: { num: "CH.—", text: "LOADING", jp: "― 読込中 ―", kanji: "章" },
  });
  const lastPathRef = useRef(pathname);
  const incomingRef = useRef<CurtainState["label"] | null>(null);

  const play = useCallback(
    (href: string, navEntry?: NavEntry) => {
      const entry = navEntry ?? NAV.find((n) => n.href === href);
      const label = entry
        ? {
            num: `CH.${entry.num}`,
            text: entry.label,
            jp: JP_LABELS[entry.key],
            kanji: CHAPTER_KANJI[entry.key],
          }
        : state.label;
      incomingRef.current = label;
      setState({ phase: "in", label });
      window.setTimeout(() => {
        router.push(href);
      }, COVER_MS);
    },
    [router, state.label],
  );

  useEffect(() => {
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;

    const incoming = incomingRef.current ?? state.label;
    incomingRef.current = null;

    setState({ phase: "covered", label: incoming });
    const r1 = window.requestAnimationFrame(() => {
      const r2 = window.requestAnimationFrame(() => {
        setState((s) => ({ ...s, phase: "out" }));
        window.setTimeout(() => {
          setState((s) => ({ ...s, phase: "idle" }));
        }, REVEAL_MS);
      });
      void r2;
    });
    const safety = window.setTimeout(() => {
      setState((s) => ({ ...s, phase: "idle" }));
    }, SAFETY_MS);
    return () => {
      window.cancelAnimationFrame(r1);
      window.clearTimeout(safety);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const value = useMemo<CurtainContextValue>(() => ({ state, play }), [state, play]);

  return <CurtainContext.Provider value={value}>{children}</CurtainContext.Provider>;
}
