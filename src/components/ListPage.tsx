import Link from "next/link";
import SubPage from "./SubPage";

export type Item = {
  title: string;
  desc: string;
  meta?: string;
  href?: string;
};

export function ItemList({ items }: { items: Item[] }) {
  return (
    <div className="card card-slim">
      <ul className="list">
        {items.map((item) => (
          <li key={item.title}>
            <Entry item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ListPage({ items, current }: { items: Item[]; current?: string }) {
  return (
    <SubPage current={current}>
      <ItemList items={items} />
    </SubPage>
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
