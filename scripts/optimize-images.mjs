/**
 * Comprime WebP en /public para mantener el sitio liviano al escalar assets.
 * Uso: npm run optimize-images
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const publicDir = join(process.cwd(), "public");

const rules = [
  {
    match: (name) => name === "profile.webp",
    resize: { width: 352, height: 352, fit: "cover" },
    webp: { quality: 82, effort: 6 },
  },
  {
    match: (name) => name.endsWith("-preview.webp"),
    resize: { width: 1000, withoutEnlargement: true },
    webp: { quality: 75, effort: 6 },
  },
];

async function optimizeFile(filename, rule) {
  const filePath = join(publicDir, filename);
  const input = await readFile(filePath);
  const before = input.length;

  let pipeline = sharp(input);
  if (rule.resize) {
    pipeline = pipeline.resize(rule.resize);
  }

  const output = await pipeline.webp(rule.webp).toBuffer();

  if (output.length >= before) {
    console.log(`${filename}: sin cambios (${before} bytes)`);
    return;
  }

  await writeFile(filePath, output);

  const saved = ((1 - output.length / before) * 100).toFixed(1);
  console.log(`${filename}: ${before} → ${output.length} bytes (${saved}% menos)`);
}

const files = await readdir(publicDir);

for (const file of files) {
  const rule = rules.find((entry) => entry.match(file));
  if (rule) {
    await optimizeFile(file, rule);
  }
}

console.log("Listo.");
