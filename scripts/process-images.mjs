// One-off pipeline: takes raw client photos from source-images-v2/Website/
// (folder name = real project locality) and produces optimized, auto-oriented
// images in public/images/projects/<slug>/, plus a JSON manifest.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_ROOT = path.join(ROOT, "source-images-v2", "Website");
const OUT_ROOT = path.join(ROOT, "public", "images", "projects");
const MANIFEST_PATH = path.join(ROOT, "src", "lib", "projects-manifest.json");

// folder name -> project slug
const PROJECTS = {
  "Ambattur, Chennai": "ambattur",
  "Anna Nagar west extension, Chennai": "anna-nagar-west-extension",
  "Anna Nagar west, Chennai": "anna-nagar-west",
  "Appaswamy, Park house mews, Guindy": "appaswamy-park-house-mews",
  "Mannivakkam, Chennai": "mannivakkam",
  "PanneerSelvam street, Ambattur": "panneerselvam-street",
  "Prestige Windsor Park, Vanagaram, Chennai": "prestige-windsor-park",
  "Thirumullaivoyal, Chennai": "thirumullaivoyal",
  "Vaarppu Boutique, Ambattur": "vaarppu-boutique",
  "Vivekananda Nagar, Ambattur": "vivekananda-nagar",
};

// exact frame that captured a household member's face (privacy — only
// empty-room / product shots ship) and an unusable construction-debris frame
const EXCLUDE = [
  /^anna-nagar-west-extension\/20260114_105644\.jpg$/i,
  /^appaswamy-park-house-mews\/img-20251217-wa0099\.jpg$/i,
];

const MAX_WIDTH = 2400;
const JPEG_QUALITY = 82;

function outFileName(original) {
  return original.toLowerCase().replace(/\s+/g, "-");
}

async function processFolder(folderName, slug) {
  const srcDir = path.join(SRC_ROOT, folderName);
  const outDir = path.join(OUT_ROOT, slug);
  await fs.mkdir(outDir, { recursive: true });

  const entries = (await fs.readdir(srcDir)).filter((f) =>
    /\.jpe?g$/i.test(f)
  );

  const files = [];
  for (const entry of entries) {
    const relCheck = `${slug}/${outFileName(entry)}`;
    if (EXCLUDE.some((re) => re.test(relCheck))) continue;

    const srcPath = path.join(srcDir, entry);
    const outName = outFileName(entry).replace(/\.jpe?g$/i, ".jpg");
    const outPath = path.join(outDir, outName);

    const pipeline = sharp(srcPath).rotate(); // auto-orient from EXIF, then strip it
    const meta = await pipeline.metadata();
    const isPortrait = (meta.height ?? 0) > (meta.width ?? 0);

    const resized = pipeline.resize({
      width: isPortrait ? Math.round(MAX_WIDTH * 0.75) : MAX_WIDTH,
      withoutEnlargement: true,
    });

    const info = await resized
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(outPath);

    files.push({ file: outName, width: info.width, height: info.height });
    process.stdout.write(`  ${slug}/${outName} (${info.width}x${info.height})\n`);
  }

  return files;
}

async function main() {
  // wipe previously generated output so stale (old zip) images can't linger
  await fs.rm(OUT_ROOT, { recursive: true, force: true });
  await fs.mkdir(OUT_ROOT, { recursive: true });

  const manifest = {};
  for (const [folder, slug] of Object.entries(PROJECTS)) {
    console.log(`Processing "${folder}" -> ${slug}`);
    manifest[slug] = await processFolder(folder, slug);
  }
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${path.relative(ROOT, MANIFEST_PATH)}`);
  const total = Object.values(manifest).reduce((n, arr) => n + arr.length, 0);
  console.log(`Total images processed: ${total}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
