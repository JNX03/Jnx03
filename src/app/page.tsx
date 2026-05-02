import Image from "next/image";
import ParallaxScene from "@/components/ParallaxScene";
import CornerBadge from "@/components/CornerBadge";
import NavBar from "@/components/NavBar";
import Marquee from "@/components/Marquee";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-sky-200">
      <CornerBadge label="TEXT" />
      <NavBar />

      <ParallaxScene className="absolute inset-0">
        <div
          className="absolute inset-[-4%] transition-transform duration-300 ease-out"
          data-depth="-0.16"
          data-tilt="none"
        >
          <Image
            src="/images/background.webp"
            alt=""
            fill
            priority
            sizes="108vw"
            className="object-cover"
          />
        </div>

        <div
          className="absolute left-[11.2%] top-[32.1%] transition-transform duration-300 ease-out max-sm:left-[6%] max-sm:top-[22%] z-10"
          data-depth="0.35"
        >
          <ImagePlaceholder size="sm" rotate={2} />
        </div>

        <div
          className="absolute left-[36.1%] top-[33.4%] transition-transform duration-300 ease-out max-sm:left-auto max-sm:right-[6%] max-sm:top-[26%] z-10"
          data-depth="0.5"
        >
          <ImagePlaceholder size="sm" rotate={10} />
        </div>

        <div
          className="absolute left-[4.9%] top-[62.4%] transition-transform duration-300 ease-out max-sm:left-[8%] max-sm:top-[60%] z-10"
          data-depth="0.4"
        >
          <ImagePlaceholder size="sm" rotate={-10} />
        </div>

        <div
          className="absolute left-[12.8%] top-[40.6%] flex flex-col transition-transform duration-300 ease-out max-sm:hidden"
          data-depth="0.55"
        >
          <span className="text-[clamp(3.7rem,5.15vw,5.35rem)] font-extrabold leading-[1.25] text-white drop-shadow-sm">
            TEXT
          </span>
          <span className="text-[clamp(3.7rem,5.15vw,5.35rem)] font-extrabold leading-[1.05] text-white drop-shadow-sm">
            TEXT
          </span>
        </div>

        <div
          className="absolute bottom-[10%] right-[8.8%] top-[16.5%] transition-transform duration-300 ease-out max-sm:inset-x-0 max-sm:right-auto max-sm:top-[16%] max-sm:bottom-[18%] max-sm:flex max-sm:justify-center"
          data-depth="0.7"
        >
          <Image
            src="/images/profile_human_nobackground.webp"
            alt="Chawabhon Netisingha"
            width={1024}
            height={1024}
            priority
            className="h-full w-auto select-none object-contain drop-shadow-2xl max-sm:mx-auto"
            draggable={false}
          />
        </div>
      </ParallaxScene>

      <Marquee text="SLIDE PROJECT INNOVATION" />
    </main>
  );
}
