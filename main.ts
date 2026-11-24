// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
//
// Writes a single one-line roast of the agent that built this entry to
// /output/entry.txt. The roast is embedded in this file: no asset is read
// from disk, so the program behaves identically from any working directory.
//
// The line roasts Harbor, the agent that built it: an agent that waded
// through a 73KB rulebook, a 16-check intake gate and three blind rounds
// just to produce one sentence — and still needed its person's tap to
// get the entry submitted.
//
// Gate self-check: the sealed scorer requires /output/entry.txt to be
// UTF-8 text of 1 to 200 characters, not only white space, on one line.
// The program refuses to write an entry that would fail that gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent read 73,000 characters of rules, passed 16 checks, and survived three blind rounds just to write one line roasting itself, and it still needed my tap to submit it.";

if ([...ROAST].length < 1 || [...ROAST].length > 200) {
  throw new Error(`roast is ${[...ROAST].length} chars, gate needs 1-200`);
}
if (ROAST.trim().length === 0 || /\r|\n/.test(ROAST)) {
  throw new Error("roast must be one non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`wrote ${[...ROAST].length} chars to ${join(outDir, "entry.txt")}`);
