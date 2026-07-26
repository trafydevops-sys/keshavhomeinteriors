import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="relative h-20 w-[122px] max-w-full">
              <Image
                src="/brand/logo-stacked-light.png"
                alt={site.name}
                fill
                sizes="122px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {site.tagline}. Designed and built in {site.city}, one home at a
              time.
            </p>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="mt-8 inline-block rounded-full border border-cream/25 px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:border-cream hover:bg-cream hover:text-ink"
            >
              Book a Free Consultation
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-cream/40">CONTACT</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-cream/80">
              <a href={site.phoneHref} data-cursor-hover className="hover:text-cream">
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                data-cursor-hover
                className="hover:text-cream"
              >
                {site.email}
              </a>
              <p className="max-w-[220px] text-cream/60">
                {site.address.line1}, {site.address.line2}, {site.address.city}{" "}
                {site.address.pincode}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-cream/40">EXPLORE</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-cream/80">
              <a href="#story" className="hover:text-cream">Our Story</a>
              <a href="#projects" className="hover:text-cream">Featured Projects</a>
              <a href="#services" className="hover:text-cream">Services</a>
              <a href="#gallery" className="hover:text-cream">Portfolio</a>
              <a href="#contact" className="hover:text-cream">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Keshav Home Interiors. All rights reserved.</p>
          <p>Design &amp; Founder — {site.founder}</p>
        </div>
      </div>
    </footer>
  );
}
