import Link from "next/link";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <Link
        href="/"
        data-cursor-hover
        className="text-xs tracking-[0.2em] text-ink-soft hover:text-ink"
      >
        ← BACK TO HOME
      </Link>
      <h1 className="mt-8 font-display text-3xl leading-tight text-ink md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-xs tracking-[0.15em] text-ink-soft">
        LAST UPDATED {updated.toUpperCase()}
      </p>
      <p className="mt-10 text-base leading-relaxed text-ink-soft md:text-lg">
        {intro}
      </p>
      <div className="mt-14 space-y-12 border-t hairline pt-12">{children}</div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-lg text-ink md:text-xl">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
