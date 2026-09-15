// Converts large PNG/JPG images in src/assets to resized WebP.
// Usage: node scripts/optimize-images.mjs [file ...]   (defaults to every PNG/JPG over 50 KB)
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const ASSETS_DIR = path.resolve("src/assets");
const MIN_BYTES = 50 * 1024;
const MAX_WIDTH = 1920;
const QUALITY = 80;

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

const args = process.argv.slice(2);
const files = args.length
  ? args
  : (await readdir(ASSETS_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const input = path.join(ASSETS_DIR, file);
  const { size } = await stat(input);
  if (!args.length && size < MIN_BYTES) continue;

  const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
  const meta = await sharp(input).metadata();
  const info = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(output);

  console.log(
    `${file}: ${meta.width}x${meta.height} ${kb(size)} -> ${info.width}x${info.height} ${kb(info.size)}`,
  );
}
