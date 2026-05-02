export default function CornerBadge({ label = "TEXT" }: { label?: string }) {
  return (
    <div className="absolute left-0 top-0 z-30 drop-shadow-[0_6px_5px_rgba(0,0,0,0.48)]">
      <div
        className="relative flex h-[clamp(5rem,7.9vw,8.25rem)] w-[clamp(13.5rem,28.7vw,30rem)] items-center pl-[clamp(2rem,4.3vw,4.5rem)] bg-white font-extrabold text-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 71.5% 100%, 0 100%)" }}
      >
        <span className="text-[clamp(2.75rem,5.15vw,5.4rem)] leading-none">
          {label}
        </span>
      </div>
    </div>
  );
}
