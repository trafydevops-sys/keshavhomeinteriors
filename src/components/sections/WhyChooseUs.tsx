import Image from "next/image";
import { Reveal, RevealScale, RevealText } from "@/components/ui/Reveal";
import { highlights } from "@/lib/projects";

const REASONS = [
  {
    title: "Attention to detail",
    copy: "Grain lined up across panels, hardware that closes quietly, a pooja niche cut exactly where the light falls. The parts no one asks about are the parts we obsess over.",
  },
  {
    title: "Timely delivery",
    copy: "A site visit before a single measurement is finalised, and a schedule you're told upfront — not one that slips a month at a time.",
  },
  {
    title: "Premium materials",
    copy: "Lacquer, veneer and stone chosen for how they age, not just how they photograph on day one.",
  },
  {
    title: "Built around you",
    copy: "Basic, Exclusive or Elite — every home starts from how you actually live in it, not a fixed catalogue of finishes.",
  },
  {
    title: "A transparent process",
    copy: "One invoice, one point of contact, and visibility into what's happening on site — from the first sketch to the final handover.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-canvas py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs tracking-[0.25em] text-ink-soft">08 — WHY KESHAV</p>
            </Reveal>
            <h2 className="mt-6 font-display text-4xl leading-[1.15] text-ink md:text-5xl">
              <RevealText text="Not the cheapest quote." />
              <br />
              <RevealText text="The one you don't" delay={0.15} />{" "}
              <RevealText text="regret." delay={0.3} className="text-brass" />
            </h2>
            <RevealScale delay={0.2} className="relative mt-10 hidden aspect-[4/5] overflow-hidden md:block">
              <Image
                src={highlights.foyer.src}
                alt="Foyer wash area finished in wood slat screening, Anna Nagar West"
                fill
                sizes="35vw"
                className="object-cover"
              />
            </RevealScale>
          </div>

          <div className="md:col-span-7">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.05}>
                <div className="flex gap-6 border-b hairline py-8 first:pt-0 md:gap-10 md:py-10">
                  <span className="font-display text-xl text-ink-soft/50 md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-xl text-ink md:text-2xl">
                      {reason.title}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                      {reason.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
