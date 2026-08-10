"use client";

import { useEffect, useState } from "react";

const CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function EasterEgg() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("%cLooking around?", "font-size:16px;font-weight:bold;color:#4e4e4e");
    console.log("%cTry the Konami code.", "color:#9b9b9b");

    let progress = 0;
    function onKeyDown(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = CODE[progress];

      if (key === expected) {
        progress++;
        if (progress === CODE.length) {
          progress = 0;
          setShow(true);
          document.body.classList.add("egg-pulse");
          setTimeout(() => document.body.classList.remove("egg-pulse"), 1300);
          setTimeout(() => setShow(false), 5000);
        }
      } else {
        progress = key === CODE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!show) return null;

  return (
    <div className="egg-toast" role="status" onClick={() => setShow(false)}>
      <strong>Achievement unlocked</strong>
      You just found the site&rsquo;s only easter egg. Not many do.
    </div>
  );
}
