/**
 * Minimal static file server for the built Storybooks (no dependency).
 *
 * Usage: node storybooks/_shared/tests/serve.ts <directory> <port>
 */
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const [directory = 'build-storybooks', port = '6110'] = process.argv.slice(2);
const root = resolve(directory);

const TYPES: Record<string, string> = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.woff2': 'font/woff2',
	'.woff': 'font/woff',
	'.ico': 'image/x-icon',
	'.map': 'application/json'
};

createServer((request, response) => {
	const pathname = decodeURIComponent(
		new URL(request.url ?? '/', 'http://localhost').pathname
	);
	// Stay inside the served directory.
	let file = normalize(join(root, pathname));
	if (!file.startsWith(root)) {
		response.writeHead(403).end();
		return;
	}
	if (existsSync(file) && statSync(file).isDirectory()) {
		file = join(file, 'index.html');
	}
	if (!existsSync(file)) {
		response.writeHead(404).end();
		return;
	}
	response.writeHead(200, {
		'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream',
		'Access-Control-Allow-Origin': '*'
	});
	createReadStream(file).pipe(response);
}).listen(Number(port), () => {
	console.log(`[serve] ${root} on http://localhost:${port}`);
});
