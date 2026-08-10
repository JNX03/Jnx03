import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function SubPage({
  current,
  children,
}: {
  current?: string;
  children: ReactNode;
}) {
  return (
    <section className="page-sub">
      <div className="container">
        <div className="stack-lg">
          <div className="card card-nav">
            <Nav current={current} />
          </div>

          {children}

          <Footer bare />
        </div>
      </div>
    </section>
  );
}
