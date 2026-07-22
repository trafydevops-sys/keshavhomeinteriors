import Image from "next/image";
import { Reveal, RevealScale, RevealText } from "@/components/ui/Reveal";
import { highlights } from "@/lib/projects";
import { site } from "@/lib/site";

export default function BrandStory() {
  return (
    <section id="story" className="relative bg-canvas py-28 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-ink-soft">01 — THE STUDIO</p>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl leading-[1.15] text-ink md:text-5xl">
            <RevealText text="We don't decorate rooms." />
            <br />
            <RevealText text="We design the way a home" delay={0.15} />{" "}
            <RevealText text="feels to come back to." delay={0.3} className="italic" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
              Founded by {site.founder}, Keshav Home Interiors takes on every
              home the same way — start to finish, one point of contact,
              nothing handed off halfway. Concept, material selection,
              execution and the final handover all sit under one roof, so the
              home that gets built is the one that was actually designed.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 grid max-w-md grid-cols-2 gap-8 border-t hairline pt-8">
              <div>
                <p className="font-display text-4xl text-ink">{site.stats.projects}+</p>
                <p className="mt-1 text-xs tracking-[0.15em] text-ink-soft">
                  PROJECTS COMPLETED
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-ink">{site.stats.clients}+</p>
                <p className="mt-1 text-xs tracking-[0.15em] text-ink-soft">
                  HAPPY CLIENTS
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealScale className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto">
          <Image
            src={highlights.storyMain.src}
            alt="Detail of a champagne-lacquer modular kitchen with a hidden pooja niche, Anna Nagar residence"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </RevealScale>
      </div>
    </section>
  );
}
