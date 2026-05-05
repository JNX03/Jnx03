"use client";

import { useEffect, useRef } from "react";
import { TICKER_ITEMS } from "@/lib/data";
import { NAV } from "@/lib/nav";
import { useCurtain } from "../layout/CurtainProvider";

export default function HeroTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const { play } = useCurtain();

  useEffect(() => {
    const track = trackRef.current;
    const ticker = tickerRef.current;
    if (!track || !ticker) return;

    let pos = 0;
    let last = performance.now();
    let speed = 60;
    let target = 60;
    let raf = 0;
    const onEnter = () => {
      target = 14;
    };
    const onLeave = () => {
      target = 60;
    };
    ticker.addEventListener("mouseenter", onEnter);
    ticker.addEventListener("mouseleave", onLeave);

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      speed += (target - speed) * Math.min(1, dt * 4);
      pos -= speed * dt;
      const half = track.scrollWidth / 2;
      if (half > 0 && -pos >= half) pos += half;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ticker.removeEventListener("mouseenter", onEnter);
      ticker.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const onCardClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (href === "/" && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    e.preventDefault();
    const navEntry = NAV.find((n) => n.href === href);
    play(href, navEntry);
  };

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker" ref={tickerRef}>
      <div className="track" ref={trackRef}>
        {doubled.map((it, i) => (
          <a
            key={`${it.ep}-${i}`}
            className="card"
            href={it.href}
            aria-label={it.en}
            onClick={(e) => onCardClick(e, it.href)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.img} alt={it.en} loading="lazy" />
            <div className="meta">
              <div className="ep">{it.ep}</div>
              <h4>{it.en}</h4>
              <div className="jp">{it.jp}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
