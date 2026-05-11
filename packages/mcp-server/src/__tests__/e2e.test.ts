/**
 * E2E transport test — verifies the MCP server communicates correctly over stdio.
 *
 * StdioClientTransport spawns the server process itself, so no manual
 * child_process.spawn is needed. transport.close() shuts down the child
 * process cleanly on teardown.
 */
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { resolve } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const SERVER_ENTRY = resolve(import.meta.dirname, '../index.ts');
const TSX_CLI = resolve(
	import.meta.dirname,
	'../../../../node_modules/tsx/dist/cli.mjs'
);
const REPO_ROOT = resolve(import.meta.dirname, '../../../..');

let client: Client;
let transport: StdioClientTransport;

beforeAll(async () => {
	transport = new StdioClientTransport({
		command: process.execPath,
		args: [TSX_CLI, SERVER_ENTRY],
		cwd: REPO_ROOT,
		stderr: 'pipe'
	});

	client = new Client({ name: 'e2e-test-client', version: '1.0.0' });
	await client.connect(transport);
}, 15_000);

afterAll(async () => {
	await transport.close();
});

describe('MCP server — stdio transport', () => {
	it('responds to list_components with a valid component list containing "button"', async () => {
		const response = await client.callTool({ name: 'list_components' });

		expect(response.isError).toBeFalsy();

		const text =
			(response.content as { type: string; text: string }[]).find(
				(c) => c.type === 'text'
			)?.text ?? '';

		const components: string[] = JSON.parse(text);
		expect(Array.isArray(components)).toBe(true);
		expect(components).toContain('button');
	}, 10_000);
});
