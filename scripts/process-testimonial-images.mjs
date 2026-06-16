// Crops the source testimonial photos to the carousel's 4:5 portrait frame
// (1000x1250, retina-friendly) and writes optimized JPEGs into
// public/images/testimonials/. Re-running is safe (overwrites outputs).
//
// Run:  node scripts/process-testimonial-images.mjs
//
// Per-image `position` controls which part of a wider/taller source is kept
// when cover-cropping. `trim:true` removes solid letterbox bars first (used
// for the Clive Leach phone screenshot, which has black bars top and bottom).

import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "C:/Users/steve/Downloads/";
const OUT = "public/images/testimonials/";
const W = 1000;
const H = 1250;

const jobs = [
  { src: "Doctor Lee with Cameron Young.png", out: "cameron-young.jpg", position: "top" },
  { src: "Doctor Lee with Mark Messier.jpg", out: "mark-messier.jpg", position: "top" },
  { src: "Doctor Lee Signed Photo with Genie Bouchard.jpg", out: "genie-bouchard.jpg", position: "centre" },
  { src: "Doctor Lee with Katrina Adams.jpg", out: "katrina-adams.jpg", position: "centre" },
  { src: "Doctor Lee with Jim McClean.jpg", out: "jim-mclean.jpg", position: "centre" },
  { src: "Doctor Lee with Clive Leech.jpg", out: "clive-leach.jpg", position: "centre" },
];

await mkdir(OUT, { recursive: true });

for (const j of jobs) {
  let img = sharp(SRC + j.src).rotate();
  if (j.trim) img = img.trim({ threshold: 30 });
  await img
    .resize(W, H, { fit: "cover", position: j.position })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(OUT + j.out);
  console.log("wrote", OUT + j.out);
}
