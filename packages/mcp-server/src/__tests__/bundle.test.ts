/**
 Bundle smoke test — runs against the built dist/index.js, not the sources.

 Every other suite spawns src/index.ts through tsx, where `import.meta.dirname`
 sits in src/. esbuild flattens the server into dist/index.js, which shifts that
 directory by one level, so a fixed relative asset path resolves outside the
 package. That class of bug is invisible to the source-based suites and only
 affects the artifact consumers actually run via npx.

 These tests therefore exercise the tools that read from assets/ at runtime:
 the visuals tools and the design-token tool. They are the only ones whose
 behaviour differs between the sources and the bundle.
 */
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const BUNDLE = resolve(import.meta.dirname, '../../dist/index.js');
const REPO_ROOT = resolve(import.meta.dirname, '../../../..');

let client: Client;
let transport: StdioClientTransport;

/**
Returns the first text block of a tool result.
*/
function text(result: { content?: unknown }): string {
	return (
		(
			result.content as Array<{ type: string; text?: string }> | undefined
		)?.find((c) => c.type === 'text')?.text ?? ''
	);
}

/**
Returns the first image block of a tool result.
*/
function image(result: {
	content?: unknown;
}): { mimeType: string; data: string } | undefined {
	return (
		result.content as
			| Array<{ type: string; mimeType?: string; data?: string }>
			| undefined
	)?.find((c) => c.type === 'image') as
		{ mimeType: string; data: string } | undefined;
}

beforeAll(async () => {
	// `pnpm run test` builds before running vitest, so the bundle is present.
	expect(
		existsSync(BUNDLE),
		`bundle missing at ${BUNDLE} — run the package build first`
	).toBe(true);

	transport = new StdioClientTransport({
		command: process.execPath,
		args: [BUNDLE],
		cwd: REPO_ROOT,
		stderr: 'pipe'
	});
	client = new Client({ name: 'bundle-smoke-test', version: '1.0.0' });
	await client.connect(transport);
}, 20_000);

afterAll(async () => {
	await transport.close();
});

describe('bundled server — assets are reachable', () => {
	it('list_visuals reports the committed visuals instead of an empty directory', async () => {
		const result = await client.callTool({ name: 'list_visuals' });

		expect(result.isError).toBeFalsy();
		// The failure mode this guards is a *silent* empty list, not an error.
		expect(text(result)).not.toContain('No visual references available');

		const visuals = JSON.parse(text(result)) as string[];
		expect(visuals).toContain('dashboard');
	}, 15_000);

	it('get_visual_reference returns an actual image block', async () => {
		const result = await client.callTool({
			name: 'get_visual_reference',
			arguments: { name: 'dashboard' }
		});

		expect(result.isError).toBeFalsy();
		const img = image(result);
		expect(img?.mimeType).toBe('image/jpeg');
		expect(img?.data.length ?? 0).toBeGreaterThan(1000);
	}, 15_000);

	it('get_design_tokens serves a category that exists only in tokens.json', async () => {
		// Elevation, border and opacity have no SCSS fallback in the manifest,
		// so they fail outright when assets/tokens/tokens.json cannot be read.
		const categories = ['elevation', 'border', 'opacity'];
		const results = await Promise.all(
			categories.map(async (category) =>
				client.callTool({
					name: 'get_design_tokens',
					arguments: { category }
				})
			)
		);

		for (const [index, result] of results.entries()) {
			const category = categories[index];
			expect(result.isError, `category ${category}`).toBeFalsy();
			expect(text(result), `category ${category}`).toContain(
				`--db-${category}-`
			);
		}
	}, 15_000);

	it('get_design_tokens resolves values instead of falling back to raw SCSS', async () => {
		const result = await client.callTool({
			name: 'get_design_tokens',
			arguments: { category: 'spacing' }
		});

		expect(result.isError).toBeFalsy();
		const body = text(result);
		// The structured JSON carries concrete values, so it parses as an object
		// and contains rem units. The SCSS fallback is not JSON at all and
		// carries unresolved var() references behind `$db-` declarations.
		const tokens = JSON.parse(body) as Record<string, string>;
		expect(Object.values(tokens).join(' ')).toContain('rem');
		expect(body).not.toContain('$db-');
	}, 15_000);
});
