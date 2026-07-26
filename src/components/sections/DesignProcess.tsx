"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function DesignProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative bg-canvas py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-ink-soft">04 — HOW IT WORKS</p>
        </Reveal>
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.15] text-ink md:text-5xl">
          <RevealText text="A process built to remove" />{" "}
          <RevealText text="the guesswork." delay={0.15} className="text-brass" />
        </h2>

        <div className="relative mt-20 max-w-3xl md:mt-28">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-line md:left-[15px]">
            <div ref={lineRef} className="h-full w-full bg-ink" />
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {site.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="relative flex gap-8 pl-10 md:pl-14">
                  <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-canvas font-display text-xs text-ink ring-1 ring-ink md:h-8 md:w-8">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-2xl text-ink md:text-3xl">
                      {step.title}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                      {step.copy}
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
