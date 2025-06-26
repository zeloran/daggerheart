const fs = require("fs");

const version = process.env.RELEASE_VERSION; // e.g., "v1.0.0"
if (!version) {
    console.error("RELEASE_VERSION env var not set.");
    process.exit(1);
}

const raw = fs.readFileSync("system.json", "utf-8");
const manifest = JSON.parse(raw);

const repo = process.env.GITHUB_REPOSITORY; // e.g., "yourusername/daggerheart"

manifest.manifest = `https://github.com/${repo}/releases/download/${version}/system.json`;
manifest.url = `https://github.com/${repo}/releases/download/${version}/daggerheart-system.zip`;
manifest.version = version.replace(/^v/, "");

fs.writeFileSync("system.json", JSON.stringify(manifest, null, 2));
console.log("system.json updated for release:", version);
