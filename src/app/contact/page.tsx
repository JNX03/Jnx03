import type { Metadata } from "next";
import SocialList from "@/components/sections/SocialList";

export const metadata: Metadata = {
  title: "JNX03 — Contact",
};

export default function ContactPage() {
  return (
    <section className="contact" style={{ padding: "160px 0 140px" }}>
      <div className="container">
        <div
          className="crumb f-mono"
          style={{
            color: "#fff",
            opacity: 0.7,
            letterSpacing: "0.3em",
            fontSize: 11,
            display: "flex",
            gap: 14,
            marginBottom: 24,
          }}
        >
          <span>JNX03</span>
          <span>／</span>
          <span style={{ color: "var(--accent)" }}>CH.06</span>
          <span>／</span>
          <span>FINAL CONTACT</span>
        </div>

        <div className="contact-cta reveal">
          <div>
            <div className="big">
              <span>LET&apos;S MAKE</span>
              <br />
              <span className="outline">SOMETHING</span>
              <br />
              <span className="accent">EPIC</span>
              <span>.</span>
            </div>
            <p>
              I&apos;m a high-school developer in Thailand. Open to commissions, collaborations, internships,
              and global competitions — especially around AI, accessibility, security, or design. Reach out
              via any channel below.
            </p>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.25em",
                opacity: 0.7,
              }}
            >
              <span>● AVAILABLE</span>
              <span>REPLY ＜ 24H</span>
              <span>EN ／ TH ／ JP (LIMITED)</span>
            </div>
          </div>
          <SocialList />
        </div>
      </div>
    </section>
  );
}
