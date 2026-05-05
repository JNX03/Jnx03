"use client";

import { NAV, type NavKey } from "@/lib/nav";
import NavLink from "./NavLink";

export default function Topbar({ activeKey }: { activeKey: NavKey }) {
  return (
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
      <NavLink className="brand" href="/contact" style={{ fontSize: 14, letterSpacing: "0.25em" }}>
        <span>GET IN TOUCH →</span>
      </NavLink>
    </header>
  );
}
