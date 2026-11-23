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
		expect(output).toContain('DBControlPanelDesktop (Generation 3)');
		expect(output).toContain('"found": "<DbBreadcrumb>"');
		expect(output).toContain('DBBreadcrumb (Generation 3)');
	});

	it('reports elements without a Generation 3 equivalent', async () => {
		const output = await scan('no-equivalent', '<DbCards></DbCards>');

		expect(output).toContain('"found": "<DbCards>"');
		expect(output).toContain('No direct Generation 3 equivalent');
	});

	it('suggests the same Generation 3 target for class, tag and wrapper', async () => {
		const output = await scan(
			'same-target',
			[
				'<header class="rea-header"></header>',
				'<db-header></db-header>',
				'<DbHeader></DbHeader>',
				'<nav class="cmp-mainnavigation"></nav>',
				'<db-mainnavigation></db-mainnavigation>',
				'<DbMainnavigation></DbMainnavigation>'
			].join('\n')
		);

		// Class and custom element share the kebab-case name ...
		expect(output.match(/db-control-panel-desktop/g)?.length).toBe(
			// Suggestion + note for the class, suggestion + note for the tag
			4
		);
		// ... the React wrapper gets the PascalCase name.
		expect(output).toContain('DBControlPanelDesktop (Generation 3)');
		expect(output).toContain('DBShell');
		// Not counting db-control-panel-navigation-item from the note.
		expect(
			output.match(/db-control-panel-navigation(?![\w-])/g)?.length
		).toBe(2);
		expect(output).toContain('DBControlPanelNavigation (Generation 3)');
		// The deprecated Generation 3 components are never the target.
		expect(output).not.toMatch(/"suggestion": "db-(header|navigation)\b/);
		expect(output).not.toMatch(/DB(Header|Navigation) \(Generation 3\)/);
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
		expect(output).toContain('db-control-panel-navigation (Generation 3)');
		// <db-shell> does not exist in @db-ui/elements.
		expect(output).not.toContain('<db-shell>');
	});

	it('treats Generation 2-only <db-*> tags as markers for shared tags', async () => {
		const output = await scan(
			'gen2-only-tag-marker',
			'<db-mainnavigation></db-mainnavigation>\n<db-header></db-header>\n<db-button>Save</db-button>'
		);

		expect(output).toContain('"found": "<db-mainnavigation>"');
		expect(output).toContain('"found": "<db-header>"');
		expect(output).toContain('"found": "<db-button>"');
		expect(output).not.toContain('Skipped');
	});
});

describe('scan_generation_2_migration icon detection', () => {
	it('detects hyphenated icon names and the Generation 2 icon attributes', async () => {
		const output = await scan(
			'icons',
			[
				'<DbButton icon="swap-horizontal">Swap</DbButton>',
				'<DbButton iconafter="arrow-forward">Next</DbButton>',
				'<a class="elm-link" data-icon-before="search">Find</a>',
				'<a class="elm-link" data-icon-after="close">Close</a>'
			].join('\n')
		);

		for (const [found, suggestion] of [
			['swap-horizontal', 'arrows_horizontal'],
			['arrow-forward', 'arrow_right'],
			['search', 'magnifying_glass'],
			['close', 'cross']
		]) {
			expect(output).toContain(`"found": "${found}"`);
			expect(output).toContain(`"suggestion": "${suggestion}"`);
		}

		expect(output).toContain('4 icon(s)');
	});

	it('does not report Generation 3 icon names', async () => {
		const output = await scan(
			'gen3-icons',
			'<DBButton icon="magnifying_glass">Find</DBButton>'
		);

		expect(output).toContain('No Generation 2 patterns found');
	});
});

describe('scan_generation_2_migration class mapping', () => {
	it('gives every Generation 2 class from component-migration.md a suggestion', async () => {
		const { readFileSync } = await import('node:fs');
		const { fileURLToPath } = await import('node:url');
		const guide = readFileSync(
			fileURLToPath(
				new URL(
					'../../../../docs/migration/db-ui/component-migration.md',
					import.meta.url
				)
			),
			'utf8'
		);
		const { migrationData } =
			await import('../data/db-ui-migration-map.js');

		const classes = [
			...new Set(
				[...guide.matchAll(/`((?:cmp|elm|rea)-[\w-]+)`/g)].map(
					(match) => match[1]
				)
			)
		];
		const missing = classes.filter(
			(name) =>
				!migrationData.components[name] &&
				!migrationData.componentNotes[name]
		);

		expect(classes.length).toBeGreaterThan(20);
		expect(missing).toEqual([]);
	});

	it('explains classes that have no own Generation 3 component', async () => {
		const output = await scan(
			'notes',
			'<label class="elm-label">Name</label>\n<img class="elm-image" alt="">\n<h1 class="elm-headline">Title</h1>\n<span class="elm-chip"></span>'
		);

		expect(output).toContain('label prop of db-input');
		expect(output).toContain('native img with alt text');
		expect(output).toContain('db-heading-h-1 to db-heading-h-6');
		expect(output).toContain(
			'db-tag with db-checkbox, db-radio or db-button inside'
		);
		expect(output.match(/"suggestion":/g)?.length).toBe(4);
	});

	it('maps cmp-notification, the class @db-ui/core 3.x actually uses', async () => {
		const output = await scan(
			'notification',
			'<div class="cmp-notification" data-type="error"></div>'
		);

		expect(output).toContain('"suggestion": "db-notification - ');
		expect(output).toContain('for in-content notices');
	});

	it('warns that db-card overrides layout classes on the card itself', async () => {
		const output = await scan('card', '<div class="cmp-card"></div>');

		expect(output).toContain('"suggestion": "db-card - ');
		expect(output).toContain('put custom layout classes on a wrapper');
	});
});
