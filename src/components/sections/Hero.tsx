"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { heroRotation } from "@/lib/projects";
import { site } from "@/lib/site";
import { RevealText } from "@/components/ui/Reveal";
import { scrollToElement } from "@/lib/lenis";

const ROTATE_MS = 7000;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroRotation.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 14,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const next = sectionRef.current?.nextElementSibling;
    if (next) scrollToElement(next);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <div ref={imageRef} className="absolute inset-0 scale-[1.02]">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: ROTATE_MS / 1000, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroRotation[active].src}
              alt="A recent Keshav Home Interiors project — real photography, not a rendering"
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
        <div className="absolute inset-0 bg-ink/10" />
      </div>

      {/* rotation progress ticks */}
      <div className="absolute right-6 top-28 z-10 flex flex-col gap-2 md:right-10">
        {heroRotation.map((_, i) => (
          <span
            key={i}
            className="h-6 w-px overflow-hidden bg-cream/25"
          >
            <span
              className="block h-full w-full origin-top bg-cream transition-transform ease-linear"
              style={{
                transform: `scaleY(${i === active ? 1 : 0})`,
                transitionDuration: i === active ? `${ROTATE_MS}ms` : "0ms",
              }}
            />
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <p className="text-[0.72rem] tracking-[0.3em] text-cream/70">
          AWARD-WINNING INTERIOR DESIGN &nbsp;·&nbsp; {site.city.toUpperCase()}
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          <RevealText text="Interiors crafted around" delay={0.15} />
          <br />
          <RevealText
            text="how you actually live."
            delay={0.55}
            className="text-brass-soft"
          />
        </h1>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/70 md:text-base">
          {site.tagline} — from first consultation to the final reveal,
          across {site.stats.projects}+ homes in {site.city}.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03]"
          >
            Book Consultation
          </a>
          <a
            href="#projects"
            data-cursor-hover
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream"
          >
            Explore Projects
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        data-cursor-hover
        className="group absolute bottom-8 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-colors hover:border-cream hover:text-cream md:right-10"
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M1 4L7 10L13 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
    </section>
  );
}
