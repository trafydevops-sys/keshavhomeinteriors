import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

const LOCALITIES = Array.from(new Set(projects.map((p) => p.locality)));

export default function ClientExperience() {
  return (
    <section className="relative overflow-hidden bg-canvas-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-ink-soft">06 — TRUST, IN NUMBERS</p>
        </Reveal>
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.15] text-ink md:text-5xl">
          <RevealText text="Built on repeat referrals," />{" "}
          <RevealText text="not ad spend." delay={0.15} className="italic" />
        </h2>

        <div className="mt-16 grid gap-10 border-y hairline py-12 sm:grid-cols-3 md:mt-24">
          <Reveal>
            <p className="font-display text-6xl text-ink md:text-7xl">
              <Counter to={site.stats.projects} suffix="+" />
            </p>
            <p className="mt-3 text-xs tracking-[0.15em] text-ink-soft">
              PROJECTS COMPLETED
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-6xl text-ink md:text-7xl">
              <Counter to={site.stats.clients} suffix="+" />
            </p>
            <p className="mt-3 text-xs tracking-[0.15em] text-ink-soft">
              HAPPY CLIENTS
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-3xl leading-tight text-ink md:text-4xl">
              One team,
              <br />
              start to finish.
            </p>
            <p className="mt-3 text-xs tracking-[0.15em] text-ink-soft">
              NO HANDOFFS, NO SUBCONTRACT CHAIN
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-16 md:mt-20">
        <div className="flex select-none overflow-hidden">
          <div className="flex shrink-0 animate-[marquee_32s_linear_infinite] items-center gap-10 pr-10">
            {[...LOCALITIES, ...LOCALITIES].map((loc, i) => (
              <span
                key={`${loc}-${i}`}
                className="flex items-center gap-10 font-display text-2xl text-ink-soft/40 md:text-3xl"
              >
                {loc.split(",")[0]}
                <span className="text-brass">✦</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
