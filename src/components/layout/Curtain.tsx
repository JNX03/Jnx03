"use client";

import { useCurtain } from "./CurtainProvider";

export default function Curtain() {
  const { state } = useCurtain();
  const cls = ["curtain"];
  if (state.phase === "in") cls.push("in");
  if (state.noTrans) cls.push("no-trans");
  return (
    <div
      className={cls.join(" ")}
      id="curtain"
      style={{ pointerEvents: state.phase === "in" ? "auto" : "none" }}
    >
      <div className="panel" />
      <div className="panel two" />
      <div className="label">
        <span className="num">{state.label.num}</span>
        <span className="text">{state.label.text}</span>
        <span className="jp">{state.label.jp}</span>
      </div>
    </div>
  );
}
