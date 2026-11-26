// Write the museum label to the requested output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "Bread-bag clip, the key to a loaf's plastic cell. The lock remains missing.";

if ([...text].length < 1 || [...text].length > 200 || !text.trim()) {
  throw new Error("Entry must contain 1-200 non-whitespace characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
