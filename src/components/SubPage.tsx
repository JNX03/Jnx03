import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";
import Footer from "./Footer";

export default function SubPage({ children }: { children: ReactNode }) {
  return (
    <section className="page-sub">
      <div className="container">
        <div className="stack-lg">
          <Link href="/" className="back">
            <Icon name="arrowLeft" /> Back to Home
          </Link>

          {children}

          <Footer bare />
        </div>
      </div>
    </section>
  );
}
