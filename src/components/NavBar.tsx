import Image from "next/image";

export default function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[clamp(4.75rem,5.1vw,5.35rem)]">
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
        className="relative flex h-full items-center justify-center pl-[clamp(12rem,24vw,25rem)] pr-8 text-[clamp(2.35rem,3.65vw,3.9rem)] font-extrabold leading-none text-black max-sm:pl-[9rem]"
      >
        <span>Nav bar</span>
      </nav>
    </header>
  );
}
