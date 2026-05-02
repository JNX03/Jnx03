export default function ImagePlaceholder({
  size = "md",
  rotate = 0,
}: {
  size?: "sm" | "md" | "lg";
  rotate?: number;
}) {
  const dim =
    size === "sm"
      ? "h-[clamp(4.1rem,4.9vw,5.15rem)] w-[clamp(4.1rem,4.9vw,5.15rem)]"
      : size === "lg"
        ? "h-28 w-28"
        : "h-24 w-24";
  return (
    <div
      className={`flex ${dim} items-center justify-center rounded-[11px] bg-white text-[clamp(1.05rem,1.4vw,1.55rem)] font-medium leading-none text-black shadow-sm ring-1 ring-black/5`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      IMAGE
    </div>
  );
}
