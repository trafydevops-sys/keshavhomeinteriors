"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProjectImage } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export type FilmstripItem = ProjectImage & { caption: string };

export default function HorizontalScrollGallery({ items }: { items: FilmstripItem[] }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const pin = pinRef.current;
      if (!track || !pin) return;

      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.scrollTrigger?.kill();
    }, pinRef);
    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex h-full w-fit items-center gap-6 pl-6 md:gap-8 md:pl-10"
      >
        {items.map((item, i) => (
          <figure
            key={item.src}
            className="relative h-[52vh] w-[78vw] shrink-0 overflow-hidden md:h-[64vh] md:w-[42vw]"
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              sizes="(min-width: 768px) 42vw, 78vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-sm tracking-wide text-cream/85">
              {item.caption}
            </figcaption>
          </figure>
        ))}
        <div className="w-6 shrink-0 md:w-10" aria-hidden />
      </div>
    </div>
  );
}
