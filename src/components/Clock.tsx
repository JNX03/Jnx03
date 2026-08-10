"use client";

import { useEffect, useState } from "react";

const TIMEZONE = "Asia/Bangkok";

function now() {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

export default function Clock() {
  // Empty on the server so the prerendered HTML never bakes in a build-time clock.
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(now());

    // Align ticks to the real second boundary instead of polling several
    // times a second — Intl formatting isn't free, and only the seconds
    // digit ever changes, so anything faster than 1/sec is wasted work.
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(
      () => {
        setTime(now());
        interval = setInterval(() => setTime(now()), 1000);
      },
      1000 - (Date.now() % 1000)
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
