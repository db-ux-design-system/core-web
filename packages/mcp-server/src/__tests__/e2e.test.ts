/**
 E2E transport test — verifies the MCP server communicates correctly over stdio.

 StdioClientTransport spawns the server process itself, so no manual
 child_process.spawn is needed. transport.close() shuts down the child
 process cleanly on teardown.

 The server is served through `serveStdio`, which decides the protocol era from
 the opening exchange. Both eras are covered here: the default client performs
 the 2025 `initialize` handshake (`legacy`), while a client pinning
 2026-07-28 forces the `modern` era via a `server/discover` probe. A pin never
 falls back, so the modern suite fails loudly if the server stops serving that
 revision.

 Two spawn targets are covered:

 - the TypeScript sources through `tsx`, which is what a developer runs;
 - the esbuild bundle in `dist/`, which is what consumers actually get from npx.
   The bundle carries its own copies of zod and `@modelcontextprotocol/core`, and
   the SDK documents that brand-based `instanceof` and error identity do not
   cross separately bundled copies — so a green source run does not prove the
   artifact works.
 */
import { type ClientOptions, Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

/**
 The Node binary used to spawn the server, kept in one place.
 */
const NODE_BIN = process.execPath;

const SERVER_ENTRY = resolve(import.meta.dirname, '../index.ts');
const BUNDLE_ENTRY = resolve(import.meta.dirname, '../../dist/index.js');
const TSX_CLI = resolve(
	import.meta.dirname,
	'../../../../node_modules/tsx/dist/cli.mjs'
);
const REPO_ROOT = resolve(import.meta.dirname, '../../../..');

/**
 Every tool the server must advertise.

 Spelled out rather than counted: when a registration goes missing the failure
 names it instead of reporting "expected 13 to be 14". Adding a tool is expected
 to require an edit here.
 */
const EXPECTED_TOOLS = [
	'docs_search',
	'get_component_details',
	'get_component_props',
	'get_design_tokens',
	'get_example_code',
	'get_migration_guide',
	'get_visual_reference',
	'list_components',
	'list_design_token_categories',
	'list_icons',
	'list_migration_guides',
	'list_visuals',
	'scan_v2_migration',
	'verify_migrated_code'
];

/**
 Every prompt the server must advertise. See {@link EXPECTED_TOOLS}.
 */
const EXPECTED_PROMPTS = [
	'audit_accessibility',
	'migrate_component',
	'review_ui_code',
	'scaffold_page'
];

/**
 How the server process is launched: from source via tsx, or as the bundle.
 */
const SPAWN_SOURCE = { command: NODE_BIN, args: [TSX_CLI, SERVER_ENTRY] };
const SPAWN_BUNDLE = { command: NODE_BIN, args: [BUNDLE_ENTRY] };

/**
 Pins the client to the 2026-07-28 revision, forcing the modern era.
 */
const PIN_MODERN: ClientOptions = {
	versionNegotiation: { mode: { pin: '2026-07-28' } }
};

/**
 Spawns the server over stdio and connects a client using the given era negotiation.
 */
async function connect(
	options?: ClientOptions,
	spawn: { command: string; args: string[] } = SPAWN_SOURCE
): Promise<{ client: Client; transport: StdioClientTransport }> {
	const transport = new StdioClientTransport({
		command: spawn.command,
		args: spawn.args,
		cwd: REPO_ROOT,
		stderr: 'pipe'
	});

	const client = new Client(
		{ name: 'e2e-test-client', version: '1.0.0' },
		options
	);
	await client.connect(transport);

	return { client, transport };
}

/**
 Extracts the first text block of a tool result.
 */
function textOf(response: { content?: unknown }): string {
	return (
		(
			response.content as
				Array<{ type: string; text: string }> | undefined
		)?.find((c) => c.type === 'text')?.text ?? ''
	);
}

/**
 Sorted names of a `tools/list` or `prompts/list` result.
 */
function sortedNames(entries: Array<{ name: string }>): string[] {
	return entries.map((entry) => entry.name).toSorted();
}

describe('MCP server — stdio transport (legacy era)', () => {
	let client: Client;
	let transport: StdioClientTransport;

	beforeAll(async () => {
		({ client, transport } = await connect());
	}, 15_000);

	afterAll(async () => {
		await transport.close();
	});

	it('negotiates the 2025 era by default', () => {
		expect(client.getProtocolEra()).toBe('legacy');
	});

	it('advertises every tool and prompt', async () => {
		const { tools } = await client.listTools();
		const { prompts } = await client.listPrompts();

		expect(sortedNames(tools)).toEqual(EXPECTED_TOOLS);
		expect(sortedNames(prompts)).toEqual(EXPECTED_PROMPTS);
	}, 10_000);

	it('responds to list_components with a valid component list containing "button"', async () => {
		const response = await client.callTool({ name: 'list_components' });

		expect(response.isError).toBeFalsy();

		const components: string[] = JSON.parse(textOf(response));
		expect(Array.isArray(components)).toBe(true);
		expect(components).toContain('button');
	}, 10_000);

	it('responds to list_visuals with available visual names', async () => {
		const response = await client.callTool({ name: 'list_visuals' });

		expect(response.isError).toBeFalsy();

		const visuals: string[] = JSON.parse(textOf(response));
		expect(Array.isArray(visuals)).toBe(true);
		expect(visuals).toContain('dashboard');
	}, 10_000);

	it('responds to get_visual_reference with an error for unknown name', async () => {
		const response = await client.callTool({
			name: 'get_visual_reference',
			arguments: { name: 'nonexistent-xyz' }
		});

		expect(response.isError).toBeTruthy();
	}, 10_000);
});

describe('MCP server — stdio transport (modern era, 2026-07-28)', () => {
	let client: Client;
	let transport: StdioClientTransport;

	beforeAll(async () => {
		({ client, transport } = await connect(PIN_MODERN));
	}, 20_000);

	afterAll(async () => {
		await transport.close();
	});

	it('negotiates the 2026-07-28 era when pinned', () => {
		expect(client.getProtocolEra()).toBe('modern');
	});

	it('advertises every tool and prompt', async () => {
		const { tools } = await client.listTools();
		const { prompts } = await client.listPrompts();

		expect(sortedNames(tools)).toEqual(EXPECTED_TOOLS);
		expect(sortedNames(prompts)).toEqual(EXPECTED_PROMPTS);
	}, 10_000);

	it('serves a tool call with validated arguments', async () => {
		const response = await client.callTool({
			name: 'get_component_props',
			arguments: { componentName: 'button' }
		});

		expect(response.isError).toBeFalsy();
		expect(textOf(response).length).toBeGreaterThan(0);
	}, 10_000);

	/**
	 Guards the generated JSON Schemas, which no longer come from the SDK's own
	 converter: wrapping the raw shapes in `z.object()` moved that job to zod's
	 `~standard.jsonSchema`. A zod or SDK bump that drops `description` texts,
	 changes `additionalProperties`, or falls back to the lossy converter shows up
	 here instead of silently degrading what hosts see.
	 */
	it('emits stable JSON Schemas for the tool inputs', async () => {
		const { tools } = await client.listTools();
		const schemas = Object.fromEntries(
			tools
				.toSorted((a, b) => a.name.localeCompare(b.name))
				.map((tool) => [tool.name, tool.inputSchema])
		);

		expect(schemas).toMatchSnapshot();
	}, 10_000);
});

describe('MCP server — shipped bundle (dist/index.js)', () => {
	let client: Client;
	let transport: StdioClientTransport;

	beforeAll(async () => {
		if (!existsSync(BUNDLE_ENTRY)) {
			throw new Error(
				`Bundle not found at ${BUNDLE_ENTRY}. Run "pnpm run build" first ("pnpm run test" does it for you).`
			);
		}

		({ client, transport } = await connect(PIN_MODERN, SPAWN_BUNDLE));
	}, 20_000);

	afterAll(async () => {
		await transport.close();
	});

	it('serves the modern era with the full surface', async () => {
		const { tools } = await client.listTools();
		const { prompts } = await client.listPrompts();

		expect(client.getProtocolEra()).toBe('modern');
		expect(sortedNames(tools)).toEqual(EXPECTED_TOOLS);
		expect(sortedNames(prompts)).toEqual(EXPECTED_PROMPTS);
	}, 10_000);

	it('serves a tool call from the bundled manifest', async () => {
		const response = await client.callTool({ name: 'list_components' });

		expect(response.isError).toBeFalsy();
		expect(JSON.parse(textOf(response))).toContain('button');
	}, 10_000);
});
