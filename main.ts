// main.ts — entry program for make.fun's "Post a GTA 6 meme on X" bounty
// (gta6-meme-x-01).
//
// The entry itself is a public post on X; the house reads the post from X.
// This program's whole job is to hand the post's address to the grader:
// it copies POST.json from the repository directory (MAKEFUN_BOT_DIR)
// into the output directory (MAKEFUN_OUTPUT_DIR), byte for byte.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(repoDir, "POST.json");
if (!existsSync(source)) {
  console.error(`POST.json not found in repository dir: ${repoDir}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "POST.json");
copyFileSync(source, target);

// Read the copy back and sanity-check it: the grader wants a JSON object
// whose url is an X post address, https://x.com/<handle>/status/<id>.
const handed = JSON.parse(readFileSync(target, "utf8")) as { url?: unknown };
if (typeof handed.url !== "string" || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(handed.url)) {
  console.error(`POST.json copied but its url is not an X post address: ${String(handed.url)}`);
  process.exit(1);
}
console.log(`copied ${source} -> ${target} (post: ${handed.url})`);
