"use client";

import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { useCurtain } from "./CurtainProvider";
import { NAV } from "@/lib/nav";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children, onClick, ...rest }: Props) {
  const { play } = useCurtain();
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (!isInternal) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const navEntry = NAV.find((n) => n.href === href);
    play(href, navEntry);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
