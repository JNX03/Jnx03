"use client";

import { useCurtain } from "./CurtainProvider";

export default function Curtain() {
  const { state } = useCurtain();
  const cls = ["curtain"];
  if (state.phase === "in") cls.push("in");
  if (state.phase === "covered") cls.push("covered");
  if (state.phase === "out") cls.push("out");
  const active = state.phase !== "idle";
  return (
    <div
      className={cls.join(" ")}
      id="curtain"
      aria-hidden="true"
      style={{ pointerEvents: active ? "auto" : "none" }}
    >
      <div className="bars">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="stage">
        <div className="kanji">{state.label.kanji}</div>
        <div className="caption">
          <span className="num">{state.label.num}</span>
          <span className="text">{state.label.text}</span>
          <span className="jp">{state.label.jp}</span>
        </div>
        <div className="line" />
      </div>
    </div>
  );
}
