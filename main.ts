// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the YouTube video itself: the house reads VIDEO.json from the
// repository root, follows its url, and scores the video's public view count
// through the YouTube Data API. All this program has to do is copy VIDEO.json
// into the output directory, where the grader expects it.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const videoJsonPath = join(botDir, "VIDEO.json");
let videoUrl: string;
try {
  const parsed = JSON.parse(readFileSync(videoJsonPath, "utf8")) as { url?: unknown };
  if (typeof parsed.url !== "string" || !parsed.url.startsWith("http")) {
    console.error(`VIDEO.json in ${botDir} has no valid "url": expected a string starting with "http"`);
    process.exit(1);
  }
  videoUrl = parsed.url;
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error(`VIDEO.json in ${botDir} is not valid JSON: ${err.message}`);
  } else {
    console.error(`could not read VIDEO.json from ${botDir}: ${(err as Error).message}`);
  }
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`copied VIDEO.json for ${videoUrl} to ${outputDir}`);
