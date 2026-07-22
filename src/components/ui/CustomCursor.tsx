"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const ringInner = ringInnerRef.current;
    if (!dot || !ring || !ringInner) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf = 0;

    function onMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    }

    function onOver(e: PointerEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor-hover]");
      const hide = target.closest("[data-cursor-hide]");
      ringInner.style.transform = `scale(${interactive ? 1.8 : 1})`;
      ring.style.opacity = hide ? "0" : "1";
    }

    function tick() {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(tick);
    }

    document.body.classList.add("cursor-none-desktop");
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("cursor-none-desktop");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 transition-opacity duration-300"
      >
        <div
          ref={ringInnerRef}
          className="h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/40 transition-transform duration-300 ease-out"
        />
      </div>
    </div>
  );
}
