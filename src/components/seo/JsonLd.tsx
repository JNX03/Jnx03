type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
