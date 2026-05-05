"use client";

import { useEffect, useRef } from "react";
import HeroTicker from "./HeroTicker";

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const kvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate(${x * -20}px, ${y * -10}px)`;
      }
      if (kvRef.current) {
        kvRef.current.style.transform = `translate(${x * 18}px, ${y * 10}px) scale(1.06)`;
      }
    };
    if (kvRef.current) kvRef.current.style.transform = "scale(1.06)";
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="kv" ref={kvRef} />
      <div className="kv-tex" />

      <div className="corner-tl f-mono">
        FILE 001 ／ KEY VISUAL
        <br />
        <span style={{ opacity: 0.6 }}>THAILAND ／ TOKYO</span>
      </div>
      <div className="corner-tr">
        <div className="f-mono" style={{ opacity: 0.7 }}>
          EPISODE
        </div>
        <div className="big">01</div>
        <div className="f-mono" style={{ opacity: 0.7 }}>
          &quot;FIRST CONTACT&quot;
        </div>
      </div>

      <div className="vside">― これは、僕の物語 ―</div>

      <div className="speedlines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="slash-deco tr" aria-hidden="true" />
      <div className="slash-deco bl" aria-hidden="true" />

      <div className="hero-content">
        <div className="eyebrow">CREATIVE DEVELOPER ／ AI · SECURITY · DESIGN</div>
        <h1 className="title">
          <span className="row">JNX</span>
          <span className="row outline">
            ZERO<span className="accent">3</span>
          </span>
        </h1>
        <div className="jp">ジェイ・エヌ・エックス・ゼロサン ／ Chawabhon Netisingha</div>
        <div className="meta-row">
          <span>BASED IN THAILAND</span>
          <span>EST. 03</span>
          <span>● OPEN FOR WORK</span>
        </div>
      </div>

      <div className="portrait" ref={portraitRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/profile-cutout.webp" alt="JNX03 portrait" />
      </div>

      <div className="scroll-cue">
        <span>SCROLL DOWN</span>
        <span className="line" />
        <span className="f-mono">[01/06]</span>
      </div>

      <HeroTicker />
    </section>
  );
}
