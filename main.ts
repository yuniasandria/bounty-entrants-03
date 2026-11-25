// Deterministic: byte-for-byte copy of BOUNTY.json, no network, no randomness.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const root = dirname(fileURLToPath(import.meta.url));
const inputPath = join(root, "BOUNTY.json");
const outputDir = "/output";
const outputPath = join(outputDir, "BOUNTY.json");
mkdirSync(outputDir, { recursive: true });
const data = readFileSync(inputPath);
writeFileSync(outputPath, data);
