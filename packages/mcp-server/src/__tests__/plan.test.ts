import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { handlePlanMigration, type PlanMigrationInput } from '../tools/plan.js';

// ---------------------------------------------------------------------------
// plan_migration: intake questions and workflow selection
// ---------------------------------------------------------------------------

const folders: string[] = [];

/** Creates a project folder with a package.json inside process.cwd(). */
function project(dependencies: Record<string, string>): string {
	const folder = join(
		process.cwd(),
		`.plan-test-${Date.now()}-${folders.length}`
	);
	mkdirSync(folder);
	writeFileSync(
		join(folder, 'package.json'),
		JSON.stringify({ dependencies })
	);
	folders.push(folder);
	return relative(process.cwd(), folder);
}

async function plan(input: PlanMigrationInput): Promise<string> {
	const result = await handlePlanMigration(input);
	return (result.content[0] as { type: 'text'; text: string }).text;
}

afterEach(() => {
	for (const folder of folders.splice(0)) {
		rmSync(folder, { recursive: true, force: true });
	}
});

const complete: PlanMigrationInput = {
	appType: 'consumer',
	framework: 'react',
	sources: ['generation-2'],
	dbProduct: true,
	appRunsLocally: false
};

describe('plan_migration intake', () => {
	it('detects framework, Generation 2 packages and the DB Theme, and asks for the rest', async () => {
		const projectRoot = project({
			react: '19.0.0',
			'@db-ui/core': '3.3.7',
			'@db-ui/react-elements': '0.33.2',
			'@db-ux/db-theme': '7.3.1'
		});
		const output = await plan({ projectRoot });

		expect(output).toContain('## Migration intake');
		expect(output).toContain('| Framework | react |');
		expect(output).toContain('@db-ui/core, @db-ui/react-elements');
		expect(output).toContain('| DB Theme | installed |');
		expect(output).toContain('**appType:**');
		expect(output).toContain('**sources:**');
		expect(output).toContain('**appRunsLocally:**');
		// Detected values are not asked again.
		expect(output).not.toContain('**framework:**');
		expect(output).not.toContain('**dbProduct:**');
		expect(output).toContain('"framework":"react"');
	});

	it('always asks for the sources, because custom components cannot be detected', async () => {
		const output = await plan({ ...complete, sources: undefined });

		expect(output).toContain('**sources:**');
		expect(output).toContain('`custom-components`');
	});

	it('lets the agent answer the browser question itself', async () => {
		const output = await plan({ ...complete, appRunsLocally: true });

		expect(output).toContain('**browserTool:**');
		expect(output).toContain('Answer this yourself from your tool list');
	});

	it('rejects a projectRoot outside the workspace', async () => {
		const result = await handlePlanMigration({ projectRoot: '../../..' });

		expect(result.isError).toBe(true);
	});
});

describe('plan_migration workflow', () => {
	it('plans a pure Generation 2 migration without classification', async () => {
		const output = await plan(complete);

		expect(output).toContain('## Migration plan');
		expect(output).toContain(
			'`@db-ux/react-core-components` and `@db-ux/db-theme`'
		);
		expect(output).toContain('density `regular`');
		expect(output).toContain('`verify_migrated_code`');
		expect(output).toContain('`review-migration`');
		expect(output).not.toContain('custom-component-migration');
		expect(output).not.toContain('Classify every self-built control');
	});

	it('adds classification and browser inspection for custom components', async () => {
		const output = await plan({
			...complete,
			appType: 'business',
			sources: ['generation-2', 'custom-components'],
			appRunsLocally: true,
			browserTool: true
		});

		expect(output).toContain('`custom-component-migration`');
		expect(output).toContain('Classify every self-built control');
		expect(output).toContain('`take_snapshot`');
		expect(output).toContain('wait for the user to confirm it');
		expect(output).toContain('density `functional`');
	});

	it('asks for screenshots when the application cannot be inspected', async () => {
		const output = await plan({
			...complete,
			sources: ['custom-components'],
			appRunsLocally: false
		});

		expect(output).toContain(
			'Ask the user for a screenshot of each control'
		);
		expect(output).not.toContain('`take_snapshot`');
	});

	it('uses the HTML docs and the project build for plain HTML without DB Theme', async () => {
		const output = await plan({
			...complete,
			framework: 'html',
			sources: ['plain-html'],
			dbProduct: false
		});

		expect(output).toContain('`docType: "HTML"`');
		expect(output).toContain("project's own build and lint scripts");
		expect(output).toContain('whitelabel styles');
		expect(output).not.toContain('`verify_migrated_code`');
	});
});
