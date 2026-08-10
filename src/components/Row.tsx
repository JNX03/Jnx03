import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  sub?: ReactNode;
  meta?: ReactNode;
  href?: string;
};

export default function Row({ title, sub, meta, href }: Props) {
  const body = (
    <div className="row">
      <div className="row-body">
        <h3 className="row-title">{title}</h3>
        {sub ? <p className="row-sub">{sub}</p> : null}
      </div>
      {meta ? <div className="row-meta">{meta}</div> : null}
    </div>
  );

  if (!href) return body;

  if (href.startsWith("/")) {
    return <Link href={href}>{body}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}
