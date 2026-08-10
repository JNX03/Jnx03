import Link from "next/link";
import Icon from "@/components/Icon";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <section className="page-sub">
      <div className="container">
        <div className="stack-lg">
          <Link href="/" className="back">
            <Icon name="arrowLeft" /> Back to Home
          </Link>

          <div className="card card-prose">
            <p>
              <span className="ft">Nothing here.</span> The page you were looking for either
              moved or never existed in the first place.
            </p>
          </div>

          <Footer bare />
        </div>
      </div>
    </section>
  );
}
