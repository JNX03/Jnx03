import Image from "next/image";

export default function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[clamp(3.5rem,5.1vw,5.35rem)]">
      <Image
        src="/images/white_banner.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <nav
        aria-label="Main navigation"
        className="relative flex h-full items-center justify-center pl-[clamp(11rem,24vw,25rem)] pr-8 text-[clamp(1.6rem,3.65vw,3.9rem)] font-extrabold leading-none text-black max-sm:pl-[10.5rem] max-sm:pr-3"
      >
        <span>Nav bar</span>
      </nav>
    </header>
  );
}
