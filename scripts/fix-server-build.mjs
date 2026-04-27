import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const serverPath = new URL("../dist/server/server.js", import.meta.url);
const serverCode = readFileSync(serverPath, "utf8");

const original = `function getStartResponseHeaders(opts) {
  return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.stores.activeMatchesSnapshot.state.map((match) => {
    return match.headers;
  }));
}`;

const replacement = `function getStartResponseHeaders(opts) {
  const activeMatches = opts.router?.stores?.activeMatchesSnapshot?.state ?? [];
  return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...activeMatches.map((match) => {
    return match.headers;
  }));
}`;

if (serverCode.includes(original)) {
  writeFileSync(serverPath, serverCode.replace(original, replacement), "utf8");
} else if (!serverCode.includes(replacement)) {
  throw new Error("Expected getStartResponseHeaders implementation was not found in dist/server/server.js");
}

const clientAssetsPath = new URL("../dist/client/assets", import.meta.url);
const publicAssetsPath = new URL("../public/assets", import.meta.url);

mkdirSync(publicAssetsPath, { recursive: true });
cpSync(clientAssetsPath, publicAssetsPath, { recursive: true, force: true });