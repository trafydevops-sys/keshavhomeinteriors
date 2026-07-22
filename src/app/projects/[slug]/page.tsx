import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      images: [project.cover.src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article>
      <section className="relative flex h-[70svh] min-h-[440px] w-full items-end bg-ink">
        <Image
          src={project.cover.src}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-10">
          <Link
            href="/#projects"
            className="text-xs tracking-[0.2em] text-cream/60 hover:text-cream"
          >
            ← ALL PROJECTS
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-4xl text-cream md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-sm tracking-[0.15em] text-cream/60">
            {project.locality.toUpperCase()}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="col-span-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {project.summary}
          </p>
          <div className="col-span-5 flex flex-wrap content-start gap-2 md:justify-end">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border hairline px-4 py-1.5 text-xs tracking-wide text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 md:mt-20">
          {project.gallery.map((image) => (
            <div
              key={image.src}
              className="relative mb-5 w-full overflow-hidden break-inside-avoid"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
              <Image
                src={image.src}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t hairline bg-canvas-deep py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-xs tracking-[0.25em] text-ink-soft">MORE PROJECTS</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                data-cursor-hover
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.cover.src}
                    alt={p.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <p className="mt-3 font-display text-lg text-ink">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
