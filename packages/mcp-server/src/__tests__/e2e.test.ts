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
 */
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { resolve } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const SERVER_ENTRY = resolve(import.meta.dirname, '../index.ts');
const TSX_CLI = resolve(
	import.meta.dirname,
	'../../../../node_modules/tsx/dist/cli.mjs'
);
const REPO_ROOT = resolve(import.meta.dirname, '../../../..');

/**
 Spawns the server over stdio and connects a client using the given era negotiation.
 */
async function connect(
	options?: ConstructorParameters<typeof Client>[1]
): Promise<{ client: Client; transport: StdioClientTransport }> {
	const transport = new StdioClientTransport({
		command: process.execPath,
		args: [TSX_CLI, SERVER_ENTRY],
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
		({ client, transport } = await connect({
			versionNegotiation: { mode: { pin: '2026-07-28' } }
		}));
	}, 20_000);

	afterAll(async () => {
		await transport.close();
	});

	it('negotiates the 2026-07-28 era when pinned', () => {
		expect(client.getProtocolEra()).toBe('modern');
	});

	it('advertises the same tools as on the legacy era', async () => {
		const { tools } = await client.listTools();

		expect(tools.map((t) => t.name)).toContain('list_components');
		expect(tools).toHaveLength(14);
	}, 10_000);

	it('advertises the prompts', async () => {
		const { prompts } = await client.listPrompts();

		expect(prompts.map((p) => p.name)).toContain('scaffold_page');
		expect(prompts).toHaveLength(4);
	}, 10_000);

	it('serves a tool call with validated arguments', async () => {
		const response = await client.callTool({
			name: 'get_component_props',
			arguments: { componentName: 'button' }
		});

		expect(response.isError).toBeFalsy();
		expect(textOf(response).length).toBeGreaterThan(0);
	}, 10_000);
});
