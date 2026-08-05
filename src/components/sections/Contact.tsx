import { Reveal, RevealText } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.pincode}`;
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  fullAddress
)}&output=embed`;

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.25em] text-cream/50">10 — LET&apos;S BEGIN</p>
            </Reveal>
            <h2 className="mt-6 font-display text-4xl leading-[1.15] md:text-6xl">
              <RevealText text="Tell us about" />
              <br />
              <RevealText text="the home you want." delay={0.15} className="text-brass-soft" />
            </h2>
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/60">
                Reach out on WhatsApp or call directly for a free consultation.
                We&apos;ll ask a few questions about your space, then arrange a
                site visit — no obligation, no pressure.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03]"
                >
                  Message on WhatsApp
                </a>
                <a
                  href={site.phoneHref}
                  data-cursor-hover
                  className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium tracking-wide text-cream hover:border-cream"
                >
                  {site.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-14 grid grid-cols-2 gap-8 border-t border-cream/10 pt-8 text-sm">
                <div>
                  <p className="text-xs tracking-[0.2em] text-cream/40">EMAIL</p>
                  <a
                    href={`mailto:${site.email}`}
                    data-cursor-hover
                    className="mt-2 block text-cream/80 hover:text-cream"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-cream/40">STUDIO</p>
                  <p className="mt-2 text-cream/80">{fullAddress}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative min-h-[360px] overflow-hidden md:min-h-[500px]">
            <iframe
              title="Keshav Home Interiors studio location"
              src={mapSrc}
              className="h-full w-full grayscale invert-[0.92] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
