"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { highlights } from "@/lib/projects";
import { site } from "@/lib/site";
import { RevealText } from "@/components/ui/Reveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 18,
        scale: 1.12,
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

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <div ref={imageRef} className="absolute inset-0 scale-[1.02]">
        <Image
          src={highlights.heroPrimary.src}
          alt="Master bedroom with a floating platform bed and full-height glass wardrobe, finished by Keshav Home Interiors"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
        <div className="absolute inset-0 bg-ink/10" />
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
            className="italic text-brass-soft"
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
            className="rounded-full bg-cream px-7 py-3.5 text-sm tracking-wide text-ink transition-transform hover:scale-[1.03]"
          >
            Book Consultation
          </a>
          <a
            href="#projects"
            data-cursor-hover
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:border-cream"
          >
            Explore Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 flex items-center gap-3 md:right-10">
        <span className="text-[0.65rem] tracking-[0.25em] text-cream/50">
          SCROLL
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-cream/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollLine_1.8s_ease-in-out_infinite] bg-cream/80" />
        </span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
