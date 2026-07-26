"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { onLenisScroll } from "@/lib/lenis";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onNativeScroll = () => setScrolled(window.scrollY > 24);
    onNativeScroll();
    const unsubscribeLenis = onLenisScroll(({ scroll }) => setScrolled(scroll > 24));
    // fallback for the moment before Lenis has mounted (e.g. reduced-motion)
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    return () => {
      unsubscribeLenis();
      window.removeEventListener("scroll", onNativeScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Header sits transparent over the dark hero image until scrolled (or the
  // mobile panel opens) and switches to a solid light bar — every piece of
  // text/iconography below has to swap with it or it disappears against
  // whichever background is behind it.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-canvas/95 backdrop-blur-md hairline border-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          data-cursor-hover
          className="relative block h-12 w-[73px] shrink-0 md:h-14 md:w-[85px]"
        >
          <Image
            src="/brand/logo-stacked-light.png"
            alt={site.name}
            fill
            priority
            sizes="85px"
            className={`object-contain object-left transition-opacity duration-500 ${
              solid ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/brand/logo-stacked.png"
            alt={site.name}
            fill
            priority
            sizes="85px"
            className={`object-contain object-left transition-opacity duration-500 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className={`text-[0.82rem] font-medium tracking-[0.08em] transition-colors ${
                solid
                  ? "text-ink-soft hover:text-ink"
                  : "text-cream/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className={`rounded-full border px-5 py-2.5 text-[0.78rem] font-medium tracking-[0.06em] transition-colors ${
              solid
                ? "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream"
                : "border-cream/50 text-cream hover:border-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Book Consultation
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          data-cursor-hover
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full transition-transform duration-300 ${
              solid ? "bg-ink" : "bg-cream"
            } ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-transform duration-300 ${
              solid ? "bg-ink" : "bg-cream"
            } ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-canvas lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-8">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="border-b hairline py-4 font-display text-xl text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full bg-ink px-6 py-3.5 text-center text-sm font-medium tracking-wide text-cream"
              >
                Book Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
