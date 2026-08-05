import { Reveal, RevealText } from "@/components/ui/Reveal";
import { reviews, googleReviewsUrl } from "@/lib/reviews";

const AVATAR_TONES = [
  "bg-walnut",
  "bg-brass",
  "bg-ink-soft",
  "bg-walnut-deep",
  "bg-[#8a6d9c]",
  "bg-[#3f7d7a]",
  "bg-[#b5563f]",
  "bg-ink",
];

function GoogleG() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.98 13.98 0 0 1 10.9 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brass" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.85L10 14.9l-5.25 2.77 1-5.85L1.5 7.68l5.87-.85z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="relative bg-canvas-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.25em] text-ink-soft">07 — REAL CLIENT REVIEWS</p>
            </Reveal>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.15] text-ink md:text-5xl">
              <RevealText text="What Chennai homeowners" />{" "}
              <RevealText text="actually say." delay={0.15} className="text-brass" />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="flex items-center gap-3 rounded-full border border-ink/15 bg-canvas px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              <GoogleG />
              Read all reviews on Google
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 md:mt-20">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review, i) => (
              <article
                key={review.name}
                className="relative flex h-[340px] w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-ink/10 bg-canvas p-6 md:w-[340px]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm text-cream ${
                      AVATAR_TONES[i % AVATAR_TONES.length]
                    }`}
                  >
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{review.name}</p>
                    <p className="truncate text-xs text-ink-soft">{review.meta}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <Stars count={review.rating} />
                  <span className="text-xs text-ink-soft">{review.time}</span>
                  {review.isNew && (
                    <span className="rounded-full bg-brass/15 px-2 py-0.5 text-[0.65rem] tracking-wide text-brass">
                      NEW
                    </span>
                  )}
                </div>

                <div className="relative mt-4 flex-1 overflow-y-auto pr-1 text-sm leading-relaxed text-ink-soft [scrollbar-width:thin]">
                  {review.text.split("\n\n").map((para, pi) => (
                    <p key={pi} className={pi > 0 ? "mt-3" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-canvas to-transparent" />
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 text-xs text-ink-soft">
            Scroll for more — {reviews.length} reviews shown, unedited, transcribed directly from Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
