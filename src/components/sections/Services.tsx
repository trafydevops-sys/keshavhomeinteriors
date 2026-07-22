import Image from "next/image";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { highlights } from "@/lib/projects";
import { site } from "@/lib/site";

const VISUAL_DISCIPLINES = [
  {
    title: "Modular Kitchens",
    copy: "Layouts built around how you actually cook — lacquer, veneer and stone finishes chosen to last.",
    image: highlights.kitchen,
  },
  {
    title: "Bedrooms & Wardrobes",
    copy: "Platform beds, full-height wardrobes and cove lighting, tuned to the quietest room in the house.",
    image: highlights.bedroom,
  },
  {
    title: "Living Spaces & TV Units",
    copy: "Book-matched veneer, stone cladding and hand-detailed pooja units built into the everyday room.",
    image: highlights.tvUnit,
  },
  {
    title: "Lighting & Craft Details",
    copy: "Cove lighting, statement pendants and laser-cut motifs — the details that make a room feel finished.",
    image: highlights.lighting,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-canvas-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-ink-soft">03 — WHAT WE BUILD</p>
        </Reveal>
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.15] text-ink md:text-5xl">
          <RevealText text="One studio, every room," />{" "}
          <RevealText text="under one roof." delay={0.15} className="italic" />
        </h2>

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-2">
          {VISUAL_DISCIPLINES.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="group relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={d.image.src}
                  alt={d.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="font-display text-xl text-cream md:text-2xl">
                    {d.title}
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/70">
                    {d.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t hairline pt-12 md:mt-32">
          <Reveal>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              And the full scope of what {site.name} takes on, end to end:
            </p>
          </Reveal>
          <ol className="mt-8 grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service, i) => (
              <Reveal key={service} delay={i * 0.04}>
                <li className="flex items-baseline gap-4 border-b hairline py-5">
                  <span className="font-display text-sm text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] text-ink">{service}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
