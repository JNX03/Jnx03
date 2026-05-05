"use client";

import { usePathname } from "next/navigation";
import { pathToKey, RAIL_THEME } from "@/lib/nav";
import CurtainProvider from "./CurtainProvider";
import Curtain from "./Curtain";
import Preloader from "./Preloader";
import Topbar from "./Topbar";
import Rails from "./Rails";
import Footer from "./Footer";
import { useReveal } from "./useReveal";

export default function ChromeShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeKey = pathToKey(pathname ?? "/");
  const railTheme = RAIL_THEME[activeKey];

  useReveal([pathname]);

  return (
    <div className="app">
      <CurtainProvider>
        <Curtain />
        <Preloader />
        <Topbar activeKey={activeKey} />
        <Rails theme={railTheme} />
        <main className="page" key={pathname}>
          {children}
        </main>
        <Footer />
      </CurtainProvider>
    </div>
  );
}
