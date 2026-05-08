"use client";

import { useEffect, useState } from "react";
import { CHAPTER_KANJI, JP_LABELS, NAV, type NavKey } from "@/lib/nav";
import NavLink from "./NavLink";

export default function Topbar({ activeKey }: { activeKey: NavKey }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="topbar">
        <NavLink className="brand" href="/">
          <span className="dot" />
          <span>JNX03</span>
        </NavLink>
        <nav>
          {NAV.map((n) => (
            <NavLink key={n.key} href={n.href} className={n.key === activeKey ? "active" : ""}>
              <span className="num">{n.num}</span>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <NavLink className="brand cta-mini" href="/contact" style={{ fontSize: 14, letterSpacing: "0.25em" }}>
          <span>GET IN TOUCH →</span>
        </NavLink>
        <button
          type="button"
          className={`hamburger${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`drawer${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer-bg" onClick={() => setOpen(false)} />
        <div className="drawer-inner">
          <div className="drawer-head">
            <div className="f-mono" style={{ fontSize: 11, letterSpacing: "0.3em", opacity: 0.7 }}>
              JNX03 ／ INDEX
            </div>
            <div
              className="f-mincho"
              style={{ fontSize: 14, letterSpacing: "0.3em", opacity: 0.5, marginTop: 4 }}
            >
              目次 ／ MENU
            </div>
          </div>
          <nav className="drawer-nav">
            {NAV.map((n) => {
              const jp = JP_LABELS[n.key].replace(/[―\s]/g, "");
              return (
                <NavLink
                  key={n.key}
                  href={n.href}
                  className={n.key === activeKey ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  <span className="dn-num">CH.{n.num}</span>
                  <span className="dn-label">{n.label}</span>
                  <span className="dn-jp">{jp || CHAPTER_KANJI[n.key]}</span>
                </NavLink>
              );
            })}
          </nav>
          <div className="drawer-foot">
            <a href="mailto:contact@jnx03.xyz" className="f-anton">
              CONTACT@JNX03.XYZ →
            </a>
            <div
              className="f-mono"
              style={{ fontSize: 9, letterSpacing: "0.3em", opacity: 0.5, marginTop: 14 }}
            >
              © 2026 ／ BASED IN THAILAND
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
