import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const files = [
  "index.html",
  "styles.css",
  "app.js",
  "overview-map.js",
  "route-ui.js",
  "runtime-storage.js",
  "site-navigation.js",
  "ticket-pdf-preview.js",
  "ledger.css",
  "ledger.js",
  "trip-data.json"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all(files.map((file) => cp(path.join(root, file), path.join(output, file))));
await cp(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });
console.log(`Built static site in ${output}`);
