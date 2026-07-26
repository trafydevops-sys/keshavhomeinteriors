import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { projects } from "@/lib/projects";

const FEATURED = projects.slice(0, 5);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative bg-canvas py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.25em] text-ink-soft">02 — FEATURED PROJECTS</p>
            </Reveal>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.15] text-ink md:text-5xl">
              <RevealText text="Real homes, finished the" />{" "}
              <RevealText text="way they were drawn." delay={0.15} className="text-brass" />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="#gallery"
              data-cursor-hover
              className="whitespace-nowrap text-sm tracking-wide text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              View full portfolio →
            </Link>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-36">
          {FEATURED.map((project, i) => (
            <Reveal key={project.slug} delay={0.05}>
              <article className="grid items-center gap-8 md:grid-cols-12 md:gap-6">
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor-hover
                  className={`group relative col-span-7 aspect-[5/4] overflow-hidden ${
                    i % 2 === 1 ? "md:order-2 md:col-start-6" : "md:col-start-1"
                  }`}
                >
                  <Image
                    src={project.cover.src}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/10" />
                  <span className="absolute left-5 top-5 font-display text-sm text-cream/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>

                <div
                  className={`col-span-5 flex flex-col justify-center ${
                    i % 2 === 1 ? "md:order-1 md:col-start-1" : ""
                  }`}
                >
                  <p className="text-xs tracking-[0.2em] text-ink-soft">
                    {project.locality.toUpperCase()}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border hairline px-3 py-1 text-[0.7rem] tracking-wide text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor-hover
                    className="mt-7 inline-flex w-fit items-center gap-2 text-sm tracking-wide text-ink"
                  >
                    View Project
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
