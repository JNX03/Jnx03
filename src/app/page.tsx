import Image from "next/image";
import Clock from "@/components/Clock";
import Icon from "@/components/Icon";
import Row from "@/components/Row";
import Footer from "@/components/Footer";
import { EXPERIENCE, PAGES } from "@/lib/data";

export default function Home() {
  return (
    <section className="page">
      <div className="container rails" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="stack">
        <section id="header">
          <div className="container">
            <div className="footer-bar">
              <div className="fi">
                <div className="dot" />
                Open for collaborations
              </div>
              <div className="fi tabular">
                <Icon name="clock" />
                <Clock />
              </div>
            </div>
          </div>
        </section>

        <hr className="dash" />

        <section id="introduction">
          <div className="container">
            <div className="card card-prose">
              <p>
                <span className="ft">I&rsquo;m a creative developer</span> that builds a little
                of everything. My work spans AI, security research and accessibility, with
                design somewhere in the middle.
              </p>
              <p>
                Currently, I run a student platform at{" "}
                <a className="tu" href="https://dekport.com" target="_blank" rel="noreferrer">
                  Dekport
                </a>{" "}
                while finishing my final year at The Prince Royal&rsquo;s College.
              </p>
              <p>
                Before that. Apple named me a{" "}
                <a
                  className="tu"
                  href="https://github.com/JNX03/Neuralia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Distinguished Winner
                </a>{" "}
                of the Swift Student Challenge
              </p>
            </div>
          </div>
        </section>

        <hr className="dash" />

        <section id="information">
          <div className="container">
            <div className="grid6">
              <div className="col-portrait">
                <div className="portrait">
                  <Image
                    src="/assets/profile.webp"
                    alt="card"
                    fill
                    sizes="(min-width: 640px) 220px, 100vw"
                    priority
                  />
                </div>
              </div>

              <div className="col-list">
                <div className="card card-list">
                  <div>
                    {EXPERIENCE.map((e) => (
                      <Row
                        key={e.title}
                        title={e.title}
                        sub={e.sub}
                        meta={e.meta}
                        href={e.href}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="dash" />

        <section id="story">
          <div className="container">
            <div className="stack-sm">
              <div className="card card-flush">
                <div className="story">
                  <div className="story-text">
                    <span className="ft">When offline,</span> I compete in FTC robotics and
                    take photographs I never get around to sorting. As someone who reads far
                    too many papers, I occasionally indulge in breaking things to see how they
                    were built.
                  </div>
                  <div className="story-art">
                    <Image src="/assets/pattern.svg" alt="pattern" width={240} height={160} />
                  </div>
                </div>
              </div>

              <div className="card card-list">
                <div>
                  {PAGES.map((p) => (
                    <Row key={p.href} title={p.title} sub={p.sub} href={p.href} />
                  ))}
                </div>
              </div>

              <div className="card card-cta">
                <a href="https://github.com/JNX03" target="_blank" rel="noreferrer">
                  Go to <span className="ft">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className="dash" />

        <Footer />
      </div>
    </section>
  );
}
