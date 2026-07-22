import Image from "next/image";
import { Reveal, RevealScale, RevealText } from "@/components/ui/Reveal";
import { highlights } from "@/lib/projects";

const DETAILS = [
  {
    label: "Wood & Veneer",
    copy: "Walnut, oak and teak-tone veneers, fluted and book-matched by hand for grain that lines up across every panel.",
  },
  {
    label: "Hardware",
    copy: "Soft-close hinges and channels chosen to stay quiet for years, not just on handover day.",
  },
  {
    label: "Finishes",
    copy: "High-gloss lacquer, matte laminate and honed stone — matched to how a surface actually gets used.",
  },
  {
    label: "Lighting",
    copy: "Cove lighting, statement pendants and concealed strips, layered instead of left to a single ceiling light.",
  },
];

export default function Materials() {
  return (
    <section className="relative bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-cream/50">05 — MATERIAL &amp; CRAFT</p>
        </Reveal>
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.15] md:text-5xl">
          <RevealText text="The details you feel" />{" "}
          <RevealText text="before you notice them." delay={0.15} className="italic text-brass-soft" />
        </h2>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12">
          <RevealScale className="relative col-span-7 aspect-[4/3] overflow-hidden md:aspect-auto">
            <Image
              src={highlights.craftsmanship.src}
              alt="Hand-detailed laser-cut pooja unit shutter in brass-inlay laminate"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </RevealScale>

          <div className="col-span-5 flex flex-col justify-center gap-8">
            {DETAILS.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <div className="border-b border-cream/10 pb-6">
                  <p className="font-display text-lg text-cream">{d.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {d.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <RevealScale className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={highlights.craftsmanshipAlt.src}
              alt="Laser-cut peacock-feather motif storage wall, backlit walnut finish"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </RevealScale>
          <RevealScale delay={0.1} className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={highlights.lighting.src}
              alt="Caged pendant lighting fixture detail over a kitchen island"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </RevealScale>
        </div>
      </div>
    </section>
  );
}
