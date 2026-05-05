"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const TASKS = ["LOADING ASSETS", "BUILDING DOM", "SYNCING EPISODES", "RENDERING FRAMES", "READY"];

const subscribe = () => () => {};
const getSnapshot = () => sessionStorage.getItem("jnx-loaded") === "1";
const getServerSnapshot = () => true;

export default function Preloader() {
  const alreadyLoaded = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (alreadyLoaded) return null;
  return <PreloaderInner />;
}

function PreloaderInner() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [pct, setPct] = useState(0);
  const [task, setTask] = useState(TASKS[0]);

  useEffect(() => {
    let p = 0;
    const timers: number[] = [];
    const tick = () => {
      p += Math.random() * 9 + 3;
      if (p > 100) p = 100;
      setPct(p);
      setTask(TASKS[Math.min(TASKS.length - 1, Math.floor(p / 25))]);
      if (p < 100) {
        timers.push(window.setTimeout(tick, 90 + Math.random() * 110));
      } else {
        timers.push(
          window.setTimeout(() => {
            setHidden(true);
            sessionStorage.setItem("jnx-loaded", "1");
            timers.push(window.setTimeout(() => setRemoved(true), 600));
          }, 350),
        );
      }
    };
    timers.push(window.setTimeout(tick, 0));
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  if (removed) return null;

  const intPct = String(Math.floor(pct)).padStart(3, "0");

  return (
    <div className={`preloader${hidden ? " hide" : ""}`} aria-hidden="true">
      <div className="corner-tl">JNX-03 ／ BOOT SEQUENCE ／ v2.0</div>
      <div className="corner-br">PORTFOLIO ／ EP.01 — FIRST CONTACT</div>
      <div className="pl-inner">
        <div className="logo">
          <span className="outline">JNX</span> <span className="accent">03</span>
        </div>
        <div className="jp">― 起動中 ／ INITIALIZING ―</div>
        <div className="bar">
          <i style={{ width: `${pct}%` }} />
        </div>
        <div className="pct">
          <span>{intPct}%</span>
          <span>{task}</span>
        </div>
        <div className="meta">
          <span>FONTS</span>
          <span>TEXTURES</span>
          <span>EPISODES</span>
          <span>READY</span>
        </div>
      </div>
    </div>
  );
}
