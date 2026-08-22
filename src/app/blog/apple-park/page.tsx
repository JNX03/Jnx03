import Image from "next/image";
import Link from "next/link";
import SubPage from "@/components/SubPage";
import JsonLd from "@/components/JsonLd";
import Icon, { type IconName } from "@/components/Icon";
import { POSTS, SITE } from "@/lib/data";
import { breadcrumbs, pageMeta } from "@/lib/seo";

const post = POSTS.find((p) => p.slug === "apple-park")!;
const PATH = `/blog/${post.slug}`;

/** The recap video is not up yet. Set the id and the placeholder below becomes
 *  the embed — nothing else on the page needs to change. */
const YOUTUBE_ID: string | null = null;

export const metadata = pageMeta({
  title: post.title,
  description: post.desc,
  path: PATH,
});

const SHOTS = {
  timCook: { src: "/assets/blog/apple-park/tim-cook.webp", w: 1380, h: 1035 },
  groupPhoto: { src: "/assets/blog/apple-park/group-photo.webp", w: 1000, h: 748 },
  friendSelfie: { src: "/assets/blog/apple-park/friend-selfie.webp", w: 860, h: 770 },
  keynoteCrowd: { src: "/assets/blog/apple-park/keynote-crowd.webp", w: 860, h: 770 },
  lunchLawn: { src: "/assets/blog/apple-park/lunch-lawn.webp", w: 1000, h: 750 },
  engineerTalk: { src: "/assets/blog/apple-park/engineer-talk.webp", w: 915, h: 770 },
  accessibility: { src: "/assets/blog/apple-park/accessibility.webp", w: 750, h: 770 },
  hoodieRing: { src: "/assets/blog/apple-park/hoodie-ring.webp", w: 1380, h: 1840 },
};

type Shot = { src: string; w: number; h: number };

function Figure({
  shot,
  alt,
  caption,
  priority,
}: {
  shot: Shot;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="shot">
      <Image
        src={shot.src}
        alt={alt}
        width={shot.w}
        height={shot.h}
        sizes="(min-width: 640px) 340px, 100vw"
        priority={priority}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function DayMark({ icon, no, date }: { icon: IconName; no: string; date: string }) {
  return (
    <div className="day-mark">
      <Icon name={icon} size="0.95rem" />
      <span className="day-no">{no}</span>
      <span className="day-date">{date}</span>
    </div>
  );
}

const article = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.desc,
  datePublished: post.date,
  dateModified: post.date,
  url: `${SITE.url}${PATH}`,
  mainEntityOfPage: `${SITE.url}${PATH}`,
  inLanguage: "en",
  author: { "@id": `${SITE.url}#person` },
  publisher: { "@id": `${SITE.url}#person` },
  image: `${SITE.url}${SHOTS.timCook.src}`,
  about: "Apple Swift Student Challenge 2026 Distinguished Winner experience at Apple Park",
  locationCreated: {
    "@type": "Place",
    name: "Apple Park",
    address: { "@type": "PostalAddress", addressLocality: "Cupertino", addressRegion: "CA" },
  },
};

export default function ApplePark() {
  return (
    <SubPage current="/blog">
      <article className="stack-sm">
        <div className="card card-flush">
          <div className="post-hero">
            <Image
              src={SHOTS.timCook.src}
              alt="Jean standing with Tim Cook in front of the WWDC26 rainbow arch at Apple Park"
              width={SHOTS.timCook.w}
              height={SHOTS.timCook.h}
              sizes="(min-width: 752px) 688px, 100vw"
              priority
            />
          </div>
        </div>

        <header className="card post-head">
          <h1>{post.title}</h1>
          <p className="post-meta">
            Three days &middot; 7&ndash;9 June 2026 &middot; Apple Park, Cupertino
          </p>
        </header>

        <div className="card card-prose">
          <p>
            <span className="ft">Every year Apple runs the Swift Student Challenge</span>, and
            every year it picks 350 Winners from students all over the world. Fifty of those are
            named <mark className="hl">Distinguished Winners</mark> and flown to Cupertino. In
            2026 I was one of them, for{" "}
            <a
              className="tu"
              href="https://github.com/JNX03/Neuralia"
              target="_blank"
              rel="noreferrer"
            >
              Neuralia
            </a>
            .
          </p>
          <p>
            Neuralia is an app playground that introduces AI to students aged 13 and up. Through
            a chatbot, visual stories and small games, it walks a learner through prompting,
            image processing and image classification, and ends with them training a simple
            model of their own. That is the project. This is what happened after it.
          </p>
        </div>

        <div className="card card-flush">
          {YOUTUBE_ID ? (
            <div className="video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}`}
                title={`${post.title} — video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="video video-soon">
              <div>
                <span className="ft">Video coming soon</span>
                <p>A recap of the three days will land here shortly.</p>
              </div>
            </div>
          )}
        </div>

        <section className="card post-day">
          <DayMark icon="users" no="Day 1" date="Sun 7 June" />
          <h2>Connect and get inspired</h2>
          <p>
            The first day was mostly people. Fifty students who had each spent months alone with
            Xcode, suddenly in the same place, all slightly surprised to be there. I met winners
            from countries I had only ever seen in the leaderboard.
          </p>
          <p>
            Apple engineers came and talked about what they had shipped &mdash; the people behind
            Genmoji, Live Camera, Swift and Siri. We were also taught how Apple pitches: say the
            thing, say why it matters, stop talking. Then{" "}
            <mark className="hl">Tim Cook and John Ternus</mark> came out onto the lawn.
          </p>
        </section>

        <div className="shots shots-1">
          <Figure
            shot={SHOTS.groupPhoto}
            alt="The Swift Student Challenge Distinguished Winners cohort, gathered outdoors at Apple Park"
            caption="The full cohort, day one."
          />
          <Figure
            shot={SHOTS.friendSelfie}
            alt="Jean, circled, meeting another Swift Student Challenge winner"
            caption="Meeting winners from everywhere else."
          />
        </div>

        <section className="card post-day">
          <DayMark icon="deviceDesktop" no="Day 2" date="Mon 8 June" />
          <h2>WWDC26</h2>
          <p>
            Keynote day. We <mark className="hl">watched the whole thing live</mark> at Apple
            Park, sitting outside with the other Challenge winners, which is a strange way to see
            a keynote &mdash; you hear the announcement and the reaction to it in the same second.
          </p>
          <p>
            The rest of the day was spent going through what had just been announced, hands on,
            with people who had actually built it. I got there early, and for about an hour the
            lawn was completely empty.
          </p>
        </section>

        <div className="shots shots-2">
          <Figure
            shot={SHOTS.keynoteCrowd}
            alt="Winners watching the WWDC26 keynote live on the big screen at Apple Park, Jean circled in the crowd"
            caption="Watching WWDC26 live, from the lawn."
          />
          <Figure
            shot={SHOTS.lunchLawn}
            alt="Empty benches and umbrellas on the Apple Park lawn before the keynote"
            caption="Keynote morning, 8:48."
          />
        </div>

        <section className="card post-day">
          <DayMark icon="messageCircle" no="Day 3" date="Tue 9 June" />
          <h2>Feedback and reflection</h2>
          <p>
            The last day was one-on-one time with Apple engineers. I pitched Neuralia to Apple
            employees and got it taken apart properly &mdash; the useful kind, where someone who
            has shipped to a billion people tells you exactly which part of your idea is doing no
            work.
          </p>
          <p>
            A lot of it was about <mark className="hl">accessibility</mark>, which is the session
            I keep going back to. Then it ended, and I flew home with a list of things to fix and
            a group chat full of people in other time zones.
          </p>
        </section>

        <div className="shots shots-3">
          <Figure
            shot={SHOTS.engineerTalk}
            alt="Jean, circled, talking with an Apple engineer at Apple Park"
            caption="Getting feedback on Neuralia."
          />
          <Figure
            shot={SHOTS.accessibility}
            alt="Jean and other winners at an Apple Accessibility session"
            caption="The Apple Accessibility session."
          />
        </div>

        <div className="card card-flush">
          <div className="post-banner">
            <Image
              src={SHOTS.hoodieRing.src}
              alt="Jean in a retro Apple hoodie looking across the meadow at the Apple Park ring"
              width={SHOTS.hoodieRing.w}
              height={SHOTS.hoodieRing.h}
              sizes="(min-width: 752px) 688px, 100vw"
            />
          </div>
        </div>

        <div className="card card-prose">
          <p>
            <span className="ft">What I actually took away</span> is smaller than the trip. Good
            technology is not only about what you build, it is about how clearly someone else can
            understand and use it. Neuralia taught me that by forcing me to simplify AI down to
            something a thirteen-year-old would sit through. Apple Park taught me the rest of it
            &mdash; engineering mindset, accessibility, how to pitch, how to take feedback, and
            how much faster you learn standing next to people from everywhere else.
          </p>
        </div>

        <div className="card card-cta">
          <Link href="/blog">
            Back to <span className="ft">Blog</span>
          </Link>
        </div>
      </article>

      <JsonLd data={[breadcrumbs(post.title, PATH), article]} />
    </SubPage>
  );
}
