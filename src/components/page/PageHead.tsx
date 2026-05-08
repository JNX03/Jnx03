type Props = {
  num: string;
  label: string;
  jpLabel: string;
  ep: string;
  epLabel: string;
  lede?: string;
};

export default function PageHead({ num, label, jpLabel, ep, epLabel, lede }: Props) {
  return (
    <section className="page-head">
      <div className="container">
        <div className="crumb">
          <span>JNX03</span>
          <span>／</span>
          <span className="accent">CH.{ep}</span>
          <span>／</span>
          <span>{epLabel}</span>
        </div>
        <h1>
          <span className="jp">{jpLabel}</span>
          {label}
        </h1>
        {lede ? <p className="lede">{lede}</p> : null}
        <span style={{ display: "none" }}>{num}</span>
      </div>
      <div className="ep">
        <span>CHAPTER</span>
        <span className="big">{ep}</span>
        <span>&quot;{epLabel}&quot;</span>
      </div>
    </section>
  );
}
