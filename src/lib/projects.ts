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

// Curated, factual descriptions written from what the photographs actually
// show — no invented client names, quotes, or specifics beyond what's visible.
export const projects: Project[] = [
  {
    slug: "anna-nagar",
    title: "Anna Nagar Residence",
    locality: "Anna Nagar, Chennai",
    summary:
      "A champagne-lacquer modular kitchen built around a waterfall island, with a fluted-oak partition screening the entry and a hidden pooja niche carved into the run of cabinetry.",
    tags: ["Modular Kitchen", "Foyer"],
    cover: img("anna-nagar", "img_20240831_111804.jpg"),
    gallery: gallery("anna-nagar"),
  },
  {
    slug: "vasumathi",
    title: "Vasumathi Residence",
    locality: "Chennai",
    summary:
      "A kitchen built for entertaining — teal lacquer cabinetry, a hand-thrown wooden vessel sink, and a pair of caged pendant lights suspended over patterned cement-tile flooring.",
    tags: ["Modular Kitchen", "Lighting"],
    cover: img("vasumathi", "20260114_105903.jpg"),
    gallery: gallery("vasumathi"),
  },
  {
    slug: "appaswamy",
    title: "Appaswamy Residence",
    locality: "Chennai",
    summary:
      "A master bedroom finished in charcoal laminate — a floating platform bed, a full-height wardrobe in high-gloss black glass, and a warm cove of concealed lighting along the headboard wall.",
    tags: ["Bedroom", "Wardrobe"],
    cover: img("appaswamy", "img-20251217-wa0124.jpg"),
    gallery: gallery("appaswamy"),
  },
  {
    slug: "manivakkam",
    title: "Manivakkam Residence",
    locality: "Manivakkam, Chennai",
    summary:
      "A living room TV wall in book-matched wood veneer and marble-finish cladding, paired with a hand-detailed pooja unit — brass-inlay shutters over a laser-cut jaali screen.",
    tags: ["TV Unit", "Living Room", "Pooja Unit"],
    cover: img("manivakkam", "20260504_170608.jpg"),
    gallery: gallery("manivakkam"),
  },
  {
    slug: "prestige",
    title: "Prestige Residence",
    locality: "Chennai",
    summary:
      "A kitchen finished in warm walnut cabinetry with a honed black-granite counter and full utility sink, paired with a glossy walnut wardrobe fitted with clean white-lined drawers.",
    tags: ["Modular Kitchen", "Wardrobe"],
    cover: img("prestige", "20260508_191747.jpg"),
    gallery: gallery("prestige"),
  },
  {
    slug: "brigade",
    title: "Brigade Residence",
    locality: "Chennai",
    summary:
      "A dresser and vanity unit in walnut laminate, built around an arched mirror inset — one of the quieter, more sculptural details from this bedroom fit-out.",
    tags: ["Bedroom", "Vanity"],
    cover: img("brigade", "20260523_125201.jpg"),
    gallery: gallery("brigade"),
  },
  {
    slug: "thirumullaivoyal",
    title: "Thirumullaivoyal Residence",
    locality: "Thirumullaivoyal, Chennai",
    summary:
      "A compact utility yard finished in two-tone navy and warm-oak cabinetry, lit through a glass-block skylight and opening onto a tiled wash area.",
    tags: ["Utility"],
    cover: img("thirumullaivoyal", "20260417_155255.jpg"),
    gallery: gallery("thirumullaivoyal"),
  },
  {
    slug: "kallikuppam",
    title: "Kallikuppam Residence",
    locality: "Kallikuppam, Chennai",
    summary:
      "A storage wall detailed with a laser-cut peacock-feather motif in walnut, backlit to read as a piece of craft rather than a cabinet.",
    tags: ["Luxury Details", "Storage"],
    cover: img("kallikuppam", "20260515_162306.jpg"),
    gallery: gallery("kallikuppam"),
  },
  {
    slug: "preethi",
    title: "Preethi Residence",
    locality: "Chennai",
    summary:
      "A compact wet-area and utility fit-out in navy-lacquer cabinetry with a granite counter, built to keep a small footprint feeling fully finished.",
    tags: ["Utility", "Wet Area"],
    cover: img("preethi", "20260224_120702.jpg"),
    gallery: gallery("preethi"),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// Hand-picked images for homepage sections that need one strong photo per
// theme, rather than a whole project gallery.
export const highlights = {
  heroPrimary: img("appaswamy", "img-20251217-wa0124.jpg"),
  heroSecondary: img("vasumathi", "20260114_105903.jpg"),
  kitchen: img("anna-nagar", "img_20240831_111804.jpg"),
  kitchenAlt: img("vasumathi", "20251228_012105.jpg"),
  bedroom: img("appaswamy", "img-20251217-wa0124.jpg"),
  wardrobe: img("appaswamy", "img-20251217-wa0120.jpg"),
  tvUnit: img("manivakkam", "20260504_170608.jpg"),
  lighting: img("vasumathi", "20260114_105742.jpg"),
  craftsmanship: img("manivakkam", "20260504_170904.jpg"),
  craftsmanshipAlt: img("kallikuppam", "20260515_162306.jpg"),
  utility: img("preethi", "20260224_120702.jpg"),
  foyer: img("anna-nagar", "img_20240831_111725.jpg"),
  storyMain: img("anna-nagar", "img_20240831_111711.jpg"),
};
