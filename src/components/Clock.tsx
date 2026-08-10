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
    // Polls faster than once a second so the first value lands quickly; React
    // bails out of the re-render whenever the formatted string is unchanged.
    const id = setInterval(() => setTime(now()), 250);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
