"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { JP_LABELS, NAV, type NavEntry } from "@/lib/nav";

type CurtainState = {
  phase: "idle" | "in";
  noTrans: boolean;
  label: { num: string; text: string; jp: string };
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

export default function CurtainProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<CurtainState>({
    phase: "idle",
    noTrans: false,
    label: { num: "EP.—", text: "LOADING", jp: "— 読込中 —" },
  });
  const lastPathRef = useRef(pathname);

  const play = useCallback(
    (href: string, navEntry?: NavEntry) => {
      const entry = navEntry ?? NAV.find((n) => n.href === href);
      const label = entry
        ? {
            num: `EP.${entry.num}`,
            text: entry.label,
            jp: JP_LABELS[entry.key],
          }
        : state.label;
      setState({ phase: "in", noTrans: false, label });
      window.setTimeout(() => {
        router.push(href);
      }, 550);
    },
    [router, state.label],
  );

  useEffect(() => {
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;
    setState((s) => ({ ...s, phase: "idle", noTrans: true }));
    const id = window.requestAnimationFrame(() => {
      setState((s) => ({ ...s, noTrans: false }));
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  const value = useMemo<CurtainContextValue>(() => ({ state, play }), [state, play]);

  return <CurtainContext.Provider value={value}>{children}</CurtainContext.Provider>;
}
