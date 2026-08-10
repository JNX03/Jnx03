import Link from "next/link";
import Icon from "./Icon";
import Footer from "./Footer";

export type Item = {
  title: string;
  desc: string;
  meta?: string;
  href?: string;
};

export default function ListPage({ items }: { items: Item[] }) {
  return (
    <section className="page-sub">
      <div className="container">
        <div className="stack-lg">
          <Link href="/" className="back">
            <Icon name="arrowLeft" /> Back to Home
          </Link>

          <div className="card card-slim">
            <ul className="list">
              {items.map((item) => (
                <li key={item.title}>
                  <Entry item={item} />
                </li>
              ))}
            </ul>
          </div>

          <Footer bare />
        </div>
      </div>
    </section>
  );
}

function Entry({ item }: { item: Item }) {
  const body = (
    <div className="row-body-split">
      <div>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
      {item.meta ? <div className="row-meta">{item.meta}</div> : null}
    </div>
  );

  if (!item.href) return body;

  if (item.href.startsWith("/")) {
    return <Link href={item.href}>{body}</Link>;
  }

  return (
    <a href={item.href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}
