import { unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { handleScanGeneration2Migration } from '../tools/scanner.js';

// ---------------------------------------------------------------------------
// scan_generation_2_migration: package and markup classification
//
// Generation 2 (aka DB UI) shipped as @db-ui/core, @db-ui/base,
// @db-ui/elements and the *-elements wrappers. The @db-ui/*-components
// packages are Generation 3 pre-releases under the former scope. Generation 3
// Angular, Vue and Web Components share the <db-*> tag prefix with
// @db-ui/elements, so these tests pin down which markup counts as legacy.
// ---------------------------------------------------------------------------

/** Scans `content` from a temp file inside process.cwd() and returns the report text. */
async function scan(name: string, content: string): Promise<string> {
	const temporary = join(process.cwd(), `.scan-test-${name}-${Date.now()}`);
	writeFileSync(temporary, content);
	try {
		const result = await handleScanGeneration2Migration({
			filePath: temporary
		});
		const [first] = result.content;
		expect(first?.type).toBe('text');
		return (first as { type: 'text'; text: string }).text;
	} finally {
		unlinkSync(temporary);
	}
}

describe('scan_generation_2_migration package detection', () => {
	it('detects Generation 2 packages including subpaths, SCSS and CDN URLs', async () => {
		const output = await scan(
			'gen2-packages',
			[
				"import { DbButton } from '@db-ui/react-elements';",
				"import '@db-ui/core/dist/css/db-ui-core.vars.css';",
				"@use '~@db-ui/base/scss/variables';",
				'<script src="https://unpkg.com/@db-ui/elements@0.33.2/dist/db-ui-elements/db-ui-elements.esm.js"></script>',
				'"@db-ui/ngx-elements": "0.33.2",',
				'"@db-ui/v-elements": "0.33.2"'
			].join('\n')
		);

		for (const [found, successor] of [
			['@db-ui/react-elements', '@db-ux/react-core-components'],
			[
				'@db-ui/core',
				'@db-ux/core-foundations and @db-ux/core-components'
			],
			['@db-ui/base', '@db-ux/core-foundations'],
			['@db-ui/elements', '@db-ux/core-components'],
			['@db-ui/ngx-elements', '@db-ux/ngx-core-components'],
			['@db-ui/v-elements', '@db-ux/v-core-components']
		]) {
			expect(output).toContain(`"found": "${found}"`);
			expect(output).toContain(
				`Generation 2 package. Replace with ${successor}.`
			);
		}

		expect(output).toContain('6 legacy package reference(s)');
	});

	it('reports @db-ui/*-components as Generation 3 pre-releases, not Generation 2', async () => {
		const output = await scan(
			'pre-release',
			"import { DBButton } from '@db-ui/react-components';\nimport '@db-ui/foundations/build/css/db-ui-foundations.css';"
		);

		expect(output).toContain('"found": "@db-ui/react-components"');
		expect(output).toContain(
			'Generation 3 pre-release under the former @db-ui scope, not Generation 2. Replace with @db-ux/react-core-components'
		);
		expect(output).toContain(
			'not Generation 2. Replace with @db-ux/core-foundations'
		);
		expect(output).not.toContain('Generation 2 package.');
	});
});

describe('scan_generation_2_migration markup detection', () => {
	it('detects React and Vue wrappers of @db-ui/elements (<Db*>)', async () => {
		const output = await scan(
			'wrappers',
			'<DbButton variant="primary">Go</DbButton>\n<DbTabBar></DbTabBar>\n<DbSidenavi></DbSidenavi>\n<DbBreadcrumb></DbBreadcrumb>'
		);

		expect(output).toContain('"found": "<DbButton>"');
		expect(output).toContain('DBButton (Generation 3)');
		expect(output).toContain('"found": "<DbTabBar>"');
		expect(output).toContain('DBTabs (Generation 3)');
		expect(output).toContain('DBDrawer with DBNavigation (Generation 3)');
		expect(output).toContain('"found": "<DbBreadcrumb>"');
		expect(output).toContain('No direct Generation 3 equivalent');
	});

	it('does not report Generation 3 wrappers (<DB*>)', async () => {
		const output = await scan(
			'gen3-react',
			'<DBButton variant="brand">Go</DBButton>'
		);

		expect(output).toContain('No Generation 2 patterns found');
	});

	it('does not report Generation 3 Angular markup as Generation 2', async () => {
		const output = await scan(
			'gen3-angular',
			'<db-stack>\n  <db-button variant="brand">Save</db-button>\n  <db-input label="Name"></db-input>\n</db-stack>'
		);

		expect(output).toContain('No Generation 2 patterns found');
		expect(output).toContain('Skipped 2 <db-*> tag(s)');
	});

	it('reports shared <db-*> tags when the file contains Generation 2 markers', async () => {
		const output = await scan(
			'gen2-elements',
			'<db-button variant="primary">Save</db-button>\n<db-toggle></db-toggle>\n<style>.x { color: var(--db-color-red-500); }</style>'
		);

		expect(output).toContain('"found": "<db-button>"');
		expect(output).toContain('db-button (Generation 3)');
		expect(output).toContain('"found": "<db-toggle>"');
		expect(output).toContain('db-switch (Generation 3)');
		expect(output).not.toContain('Skipped');
	});

	it('reports Generation 2-only <db-*> tags without further markers', async () => {
		const output = await scan(
			'gen2-only-tag',
			'<db-mainnavigation></db-mainnavigation>\n<db-shell></db-shell>'
		);

		expect(output).toContain('"found": "<db-mainnavigation>"');
		expect(output).toContain('db-navigation (Generation 3)');
		// <db-shell> does not exist in @db-ui/elements.
		expect(output).not.toContain('<db-shell>');
	});
});
