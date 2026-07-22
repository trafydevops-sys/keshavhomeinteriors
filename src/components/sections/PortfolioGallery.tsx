"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { projects, type ProjectImage } from "@/lib/projects";

const CATEGORY_BY_SLUG: Record<string, string> = {
  "anna-nagar": "Kitchen",
  vasumathi: "Kitchen",
  prestige: "Kitchen",
  appaswamy: "Bedroom & Wardrobe",
  brigade: "Bedroom & Wardrobe",
  manivakkam: "Living & TV Unit",
  thirumullaivoyal: "Utility",
  preethi: "Utility",
  kallikuppam: "Craft Details",
};

const FILTERS = [
  "All",
  "Kitchen",
  "Bedroom & Wardrobe",
  "Living & TV Unit",
  "Utility",
  "Craft Details",
];

type GalleryItem = ProjectImage & {
  key: string;
  projectTitle: string;
  category: string;
};

const ALL_ITEMS: GalleryItem[] = projects.flatMap((project) =>
  project.gallery.map((image, i) => ({
    ...image,
    key: `${project.slug}-${i}`,
    projectTitle: project.title,
    category: CATEGORY_BY_SLUG[project.slug] ?? "Craft Details",
  }))
);

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? ALL_ITEMS
        : ALL_ITEMS.filter((item) => item.category === filter),
    [filter]
  );

  const active = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="gallery" className="relative bg-canvas py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-ink-soft">07 — PORTFOLIO</p>
        </Reveal>
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.15] text-ink md:text-5xl">
          <RevealText text="Every room we've" />{" "}
          <RevealText text="actually built." delay={0.15} className="italic" />
        </h2>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                data-cursor-hover
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2 text-sm tracking-wide transition-colors ${
                  filter === f
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/20 text-ink-soft hover:border-ink/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 md:columns-3 md:gap-5">
          {items.map((item, i) => (
            <button
              key={item.key}
              data-cursor-hover
              onClick={() => setLightbox(i)}
              className="group relative mb-4 block w-full overflow-hidden break-inside-avoid md:mb-5"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            >
              <Image
                src={item.src}
                alt={item.projectTitle}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs tracking-wide text-cream">
                  {item.projectTitle}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              data-cursor-hover
              className="absolute right-6 top-6 text-2xl text-cream/70 hover:text-cream"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            {lightbox !== null && lightbox > 0 && (
              <button
                aria-label="Previous image"
                data-cursor-hover
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((v) => (v !== null ? v - 1 : v));
                }}
                className="absolute left-4 text-3xl text-cream/70 hover:text-cream md:left-8"
              >
                ←
              </button>
            )}
            {lightbox !== null && lightbox < items.length - 1 && (
              <button
                aria-label="Next image"
                data-cursor-hover
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((v) => (v !== null ? v + 1 : v));
                }}
                className="absolute right-4 text-3xl text-cream/70 hover:text-cream md:right-8"
              >
                →
              </button>
            )}
            <motion.div
              key={active.key}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[85vh] max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.projectTitle}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="h-auto max-h-[75vh] w-auto max-w-full rounded-sm object-contain"
              />
              <p className="mt-4 text-center text-sm tracking-wide text-cream/70">
                {active.projectTitle}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
