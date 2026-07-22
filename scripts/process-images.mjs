// One-off pipeline: takes raw client photos from source-images/ and produces
// optimized, auto-oriented images in public/images/projects/<slug>/, plus a
// JSON manifest describing what's available for each project.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_ROOT = path.join(ROOT, "source-images", "compliction images");
const OUT_ROOT = path.join(ROOT, "public", "images", "projects");
const MANIFEST_PATH = path.join(ROOT, "src", "lib", "projects-manifest.json");

// folder name -> project slug
const PROJECTS = {
  "anna nagar": "anna-nagar",
  appaswamy: "appaswamy",
  brigade: "brigade",
  kallikuppam: "kallikuppam",
  manivakkam: "manivakkam",
  "preethi client": "preethi",
  prestige: "prestige",
  thirumullaivoyal: "thirumullaivoyal",
  "vasumathi client": "vasumathi",
};

// files to skip entirely: exact duplicates ("- Copy") and any frame that
// captured a household member's face (privacy — only empty-room shots ship)
const EXCLUDE = [/copy/i, /^vasumathi\/20260114_105644\.jpg$/i];

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
    if (EXCLUDE.some((re) => re.test(entry) || re.test(relCheck))) continue;

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

    files.push({
      file: outName,
      width: info.width,
      height: info.height,
    });
    process.stdout.write(`  ${slug}/${outName} (${info.width}x${info.height})\n`);
  }

  return files;
}

async function main() {
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
