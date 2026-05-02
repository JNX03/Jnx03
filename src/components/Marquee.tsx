function Band({
  text,
  repeat,
  reverse = false,
}: {
  text: string;
  repeat: number;
  reverse?: boolean;
}) {
  const items = Array.from({ length: repeat });
  return (
    <div
      className={`flex h-16 w-max items-end whitespace-nowrap pb-3 pl-[10vw] will-change-transform max-sm:h-12 max-sm:pb-2 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {items.map((_, i) => (
        <span
          key={i}
          className="mx-9 text-[clamp(1.25rem,2.55vw,2.65rem)] font-extrabold tracking-[0.08em] text-white drop-shadow max-sm:mx-5"
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export default function Marquee({
  text = "SLIDE  PROJECT INNOVATION",
  repeat = 10,
}: {
  text?: string;
  repeat?: number;
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[clamp(5rem,14vw,9.8rem)] overflow-hidden">
      <div className="absolute inset-x-[-10%] bottom-[0.5rem] origin-center rotate-[-3deg] overflow-hidden bg-zinc-200 shadow-md">
        <Band text={text} repeat={repeat} />
      </div>
      <div className="absolute inset-x-[-10%] bottom-[-0.45rem] origin-center rotate-[2.25deg] overflow-hidden bg-zinc-100 shadow-md">
        <Band text={text} repeat={repeat} reverse />
      </div>
    </div>
  );
}
