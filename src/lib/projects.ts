import manifest from "./projects-manifest.json";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  locality: string;
  summary: string;
  tags: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
};

type Manifest = Record<string, { file: string; width: number; height: number }[]>;

const m = manifest as Manifest;

function img(slug: string, file: string): ProjectImage {
  const entry = m[slug]?.find((f) => f.file === file);
  if (!entry) throw new Error(`Missing manifest entry: ${slug}/${file}`);
  return { src: `/images/projects/${slug}/${file}`, width: entry.width, height: entry.height };
}

function gallery(slug: string): ProjectImage[] {
  return (m[slug] ?? []).map((f) => ({
    src: `/images/projects/${slug}/${f.file}`,
    width: f.width,
    height: f.height,
  }));
}

// Project name and locality are taken directly from how the client's own
// photo folders were named — nothing here is invented. Descriptions are
// written from what's actually visible in the photographs.
export const projects: Project[] = [
  {
    slug: "anna-nagar-west-extension",
    title: "Anna Nagar West Extension, Chennai",
    locality: "Anna Nagar West Extension, Chennai",
    summary:
      "A kitchen built for entertaining — teal lacquer cabinetry, a hand-thrown wooden vessel sink, and a pair of caged pendant lights suspended over patterned cement-tile flooring.",
    tags: ["Modular Kitchen", "Lighting"],
    cover: img("anna-nagar-west-extension", "20260114_105903.jpg"),
    gallery: gallery("anna-nagar-west-extension"),
  },
  {
    slug: "appaswamy-park-house-mews",
    title: "Appaswamy, Park House Mews, Guindy",
    locality: "Guindy, Chennai",
    summary:
      "A bedroom finished in warm oak veneer — a full-height sliding wardrobe in high-gloss black glass, a floating study nook and a wall-mounted vanity, all built around a matching pair of caged pendant lights.",
    tags: ["Bedroom", "Wardrobe", "Bathroom"],
    cover: img("appaswamy-park-house-mews", "img-20251217-wa0106.jpg"),
    gallery: gallery("appaswamy-park-house-mews"),
  },
  {
    slug: "mannivakkam",
    title: "Mannivakkam, Chennai",
    locality: "Mannivakkam, Chennai",
    summary:
      "A living room built around the staircase — a marble-clad TV wall, a floating console under caged pendant lighting, and a hand-detailed pooja unit with a brass-inlay laser-cut jaali screen.",
    tags: ["Living Room", "TV Unit", "Pooja Unit"],
    cover: img("mannivakkam", "20260504_170834.jpg"),
    gallery: gallery("mannivakkam"),
  },
  {
    slug: "vaarppu-boutique",
    title: "Vaarppu Boutique, Ambattur",
    locality: "Ambattur, Chennai",
    summary:
      "A retail fit-out for a textile boutique — full-height display shelving in warm veneer, backlit and organised by colour, built around the brand's own signage wall.",
    tags: ["Commercial", "Retail"],
    cover: img("vaarppu-boutique", "20251219_182629.jpg"),
    gallery: gallery("vaarppu-boutique"),
  },
  {
    slug: "vivekananda-nagar",
    title: "Vivekananda Nagar, Ambattur",
    locality: "Ambattur, Chennai",
    summary:
      "A full home fit-out — a teal-lacquer kitchen with patterned tile accents, a wall-mounted bathroom vanity with an oval LED mirror, and a bedroom wardrobe in bright teal and white.",
    tags: ["Modular Kitchen", "Bathroom", "Bedroom"],
    cover: img("vivekananda-nagar", "20260101_184106.jpg"),
    gallery: gallery("vivekananda-nagar"),
  },
  {
    slug: "anna-nagar-west",
    title: "Anna Nagar West, Chennai",
    locality: "Anna Nagar West, Chennai",
    summary:
      "A champagne-lacquer modular kitchen built around a waterfall island, with a fluted-oak partition screening the entry and a hidden pooja niche carved into the run of cabinetry.",
    tags: ["Modular Kitchen", "Foyer"],
    cover: img("anna-nagar-west", "img_20240831_111804.jpg"),
    gallery: gallery("anna-nagar-west"),
  },
  {
    slug: "panneerselvam-street",
    title: "PanneerSelvam Street, Ambattur",
    locality: "Ambattur, Chennai",
    summary:
      "A formal pooja unit in dark wood with a laser-cut peacock-feather motif, lit from within, standing beside a dressing table framed by an arched mirror.",
    tags: ["Pooja Unit", "Vanity"],
    cover: img("panneerselvam-street", "20260317_185727.jpg"),
    gallery: gallery("panneerselvam-street"),
  },
  {
    slug: "prestige-windsor-park",
    title: "Prestige Windsor Park, Vanagaram, Chennai",
    locality: "Vanagaram, Chennai",
    summary:
      "A kitchen finished in warm walnut cabinetry with a honed black-granite counter and a full utility sink, built for a compact footprint without feeling cramped.",
    tags: ["Modular Kitchen"],
    cover: img("prestige-windsor-park", "20260508_191751.jpg"),
    gallery: gallery("prestige-windsor-park"),
  },
  {
    slug: "thirumullaivoyal",
    title: "Thirumullaivoyal, Chennai",
    locality: "Thirumullaivoyal, Chennai",
    summary:
      "A utility yard finished in two-tone navy and warm-oak cabinetry under a glass-block skylight, paired with a marble-laminate pooja cabinet detailed in a laser-cut motif.",
    tags: ["Utility", "Pooja Unit"],
    cover: img("thirumullaivoyal", "20260417_155130.jpg"),
    gallery: gallery("thirumullaivoyal"),
  },
  {
    slug: "ambattur",
    title: "Ambattur, Chennai",
    locality: "Ambattur, Chennai",
    summary:
      "A modular kitchen in slate-blue lacquer with a black granite counter and a patterned tile backsplash, finished alongside a compact utility wash area.",
    tags: ["Modular Kitchen", "Utility"],
    cover: img("ambattur", "20260224_120647.jpg"),
    gallery: gallery("ambattur"),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// Hand-picked images for homepage sections that need one strong photo per
// theme, rather than a whole project gallery.
export const heroRotation = [
  img("anna-nagar-west-extension", "20260114_105903.jpg"),
  img("appaswamy-park-house-mews", "img-20251217-wa0106.jpg"),
  img("mannivakkam", "20260504_170834.jpg"),
  img("vivekananda-nagar", "20260101_184106.jpg"),
  img("panneerselvam-street", "20260317_185727.jpg"),
];

export const highlights = {
  heroPrimary: heroRotation[0],
  kitchen: img("anna-nagar-west", "img_20240831_111804.jpg"),
  kitchenAlt: img("anna-nagar-west-extension", "20251228_011841.jpg"),
  bedroom: img("appaswamy-park-house-mews", "img-20251217-wa0106.jpg"),
  wardrobe: img("vivekananda-nagar", "20260101_184557.jpg"),
  tvUnit: img("mannivakkam", "20260504_170621.jpg"),
  lighting: img("anna-nagar-west-extension", "20260114_105808.jpg"),
  craftsmanship: img("mannivakkam", "20260504_170834.jpg"),
  craftsmanshipAlt: img("panneerselvam-street", "20260317_185727.jpg"),
  utility: img("thirumullaivoyal", "20260417_155130.jpg"),
  foyer: img("anna-nagar-west", "img_20240831_111725.jpg"),
  storyMain: img("anna-nagar-west", "img_20240831_111711.jpg"),
  bathroom: img("vivekananda-nagar", "20260101_183344.jpg"),
  boutique: img("vaarppu-boutique", "20251219_182629.jpg"),
};
