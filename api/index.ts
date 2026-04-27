import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import server from "../dist/server/server.js";

const PROJECT_ROOT = fileURLToPath(new URL("..", import.meta.url));
const ASSETS_ROOTS = [
	join(PROJECT_ROOT, "public", "assets"),
	join(PROJECT_ROOT, "dist", "client", "assets"),
];
const WELL_KNOWN_ROOTS = [
	join(PROJECT_ROOT, "public", ".well-known"),
	join(PROJECT_ROOT, "dist", "client", ".well-known"),
];

const CONTENT_TYPES: Record<string, string> = {
	".css": "text/css; charset=utf-8",
	".js": "application/javascript; charset=utf-8",
	".mjs": "application/javascript; charset=utf-8",
	".json": "application/json; charset=utf-8",
	".svg": "image/svg+xml",
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp",
	".gif": "image/gif",
	".ico": "image/x-icon",
	".woff": "font/woff",
	".woff2": "font/woff2",
	".txt": "text/plain; charset=utf-8",
};

function sanitizePath(input: string): string | null {
	const decoded = decodeURIComponent(input);
	const normalized = normalize(decoded).replaceAll("\\", "/");
	if (normalized.startsWith("../") || normalized.includes("/../") || normalized === "..") {
		return null;
	}
	return normalized.replace(/^\/+/, "");
}

async function tryServeFile(relativePath: string, roots: string[], immutable = false): Promise<Response | null> {
	const safePath = sanitizePath(relativePath);
	if (!safePath) {
		return new Response("Bad request", { status: 400 });
	}

	for (const root of roots) {
		try {
			const file = await readFile(join(root, safePath));
			const type = CONTENT_TYPES[extname(safePath).toLowerCase()] ?? "application/octet-stream";
			return new Response(file, {
				status: 200,
				headers: {
					"content-type": type,
					"cache-control": immutable
						? "public, max-age=31536000, immutable"
						: "public, max-age=3600",
				},
			});
		} catch {
			// Try next root
		}
	}

	return null;
}

export default {
	async fetch(request: Request) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/assets/")) {
			const response = await tryServeFile(url.pathname.slice("/assets/".length), ASSETS_ROOTS, true);
			if (response) return response;
		}

		if (url.pathname.startsWith("/.well-known/")) {
			const response = await tryServeFile(url.pathname.slice("/.well-known/".length), WELL_KNOWN_ROOTS);
			if (response) return response;
		}

		return server.fetch(request);
	},
};