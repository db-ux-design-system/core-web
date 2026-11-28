import { mkdirSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
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

describe('scan_generation_2_migration framework packages', () => {
	it('tells framework projects to install only the framework package for @db-ui/core', async () => {
		const output = await scan(
			'core-framework-note',
			"import '@db-ui/core/dist/css/enterprise/db-ui-core.css';"
		);

		expect(output).toContain(
			'install only the framework package (@db-ux/react-core-components'
		);
	});

	it('adds no framework note to the wrapper packages', async () => {
		const output = await scan(
			'wrapper-no-note',
			"import { DbButton } from '@db-ui/react-elements';"
		);

		expect(output).not.toContain('install only the framework package');
	});
});

describe('scan_generation_2_migration comments and assets', () => {
	it('ignores packages, classes and values inside comments', async () => {
		const output = await scan(
			'comments',
			[
				'// Replaces @db-ui/core and the elm-button class.',
				'/* Generation 2 used @db-ui/react-elements',
				'   with cmp-card and padding: 12px. */',
				'{/* <DbButton> from @db-ui/react-elements */}',
				'<!-- @db-ui/elements <db-mainnavigation> -->',
				"import { DBButton } from '@db-ux/react-core-components';"
			].join('\n')
		);

		expect(output).toContain('No Generation 2 patterns found');
	});

	it('still reports code after a comment and CDN URLs with //', async () => {
		const output = await scan(
			'code-after-comment',
			[
				'/* setup */ import "@db-ui/core/dist/css/db-ui-core.css"; // load styles',
				'<script src="https://unpkg.com/@db-ui/elements@0.33.2/dist/db-ui-elements.esm.js"></script>',
				'@import url(//unpkg.com/@db-ui/base@3.3.7/build/css/base.css);',
				"<p>Don't miss it</p>",
				'<div className="cmp-card"></div>'
			].join('\n')
		);

		expect(output).toContain('"found": "@db-ui/core"');
		expect(output).toContain('"found": "@db-ui/elements"');
		expect(output).toContain('"found": "@db-ui/base"');
		// The apostrophe in the text line must not hide the next line.
		expect(output).toContain('"found": "cmp-card"');
	});

	it('keeps the original line, comment included, as context', async () => {
		const output = await scan(
			'context',
			"import '@db-ui/core/dist/css/db-ui-core.css'; // Generation 2"
		);

		expect(output).toContain('// Generation 2');
	});

	it('skips image and font files', async () => {
		const temporary = join(process.cwd(), `.scan-test-${Date.now()}.svg`);
		writeFileSync(
			temporary,
			'<svg xmlns="http://www.w3.org/2000/svg"><rect fill="#ec0016" /></svg>'
		);
		try {
			const result = await handleScanGeneration2Migration({
				filePath: temporary
			});
			const [first] = result.content;
			const { text } = first as { type: 'text'; text: string };

			expect(text).toContain(
				'images, fonts and media contain nothing to migrate'
			);
			expect(text).not.toContain('Hard-coded color');
		} finally {
			unlinkSync(temporary);
		}
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

	it('sends the login to actions2 and drops the own logo of the brand', async () => {
		const output = await scan(
			'brand-meta',
			'<div class="cmp-brand"><img class="elm-image is-logo" alt="DB"></div>\n<div class="rea-meta"><a class="elm-link">Log in</a></div>'
		);

		expect(output).toContain('shows the DB logo from the DB Theme');
		expect(output).toContain('a logo inside cmp-brand is dropped');
		expect(output).toContain(
			'login, profile and language actions go into actions2'
		);
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

	it('reports self-built controls as candidates and points to the custom-component guide', async () => {
		const output = await scan(
			'custom-controls',
			[
				'<button className="action-button action-button--primary">Book</button>',
				'<div className="dropdown" onClick={toggle}>',
				'<li role="option">Price</li>',
				'<button className="elm-button">Gen 2</button>',
				'<DBButton className="x">Gen 3</DBButton>'
			].join('\n')
		);

		expect(output).toContain(
			String.raw`"found": "<button class=\"action-button action-button--primary\">"`
		);
		expect(output).toContain('"found": "<div onClick>"');
		expect(output).toContain(String.raw`"found": "<li role=\"option\">"`);
		expect(output).toContain('3 self-built control(s) to classify');
		expect(output).toContain('Load `custom-component-migration`');
		// The elm-button class is a Generation 2 finding, <DBButton> is Generation 3.
		expect(output).not.toContain(String.raw`<button class=\"elm-button\">`);
	});

	it('reports a self-built component definition with its own stylesheet', async () => {
		const output = await scan(
			'component-definition',
			[
				"import './OfferCard.css';",
				'',
				'export function OfferCard({ title }: { title: string }) {',
				'\treturn <article className="offer-card">{title}</article>;',
				'}'
			].join('\n')
		);

		expect(output).toContain('"found": "component OfferCard"');
		expect(output).toContain('"line": 3');
		expect(output).toContain('own stylesheet (./OfferCard.css)');
	});

	it('reports usages of self-built components, but not of pages', async () => {
		const folder = join(process.cwd(), `.scan-test-usage-${Date.now()}`);
		mkdirSync(join(folder, 'components'), { recursive: true });
		writeFileSync(
			join(folder, 'components', 'ActionButton.tsx'),
			"import './ActionButton.css';\nexport function ActionButton() { return null; }"
		);
		writeFileSync(
			join(folder, 'Page.tsx'),
			'export function Page() { return null; }'
		);
		const file = join(folder, 'App.tsx');
		writeFileSync(
			file,
			[
				"import { DBButton } from '@db-ux/react-core-components';",
				"import { ActionButton } from './components/ActionButton';",
				"import { Page, type PageProps } from './Page';",
				"import logo from './logo.svg';",
				'<ActionButton variant="primary">Go</ActionButton>',
				'<Page />',
				'<DBButton>Gen 3</DBButton>'
			].join('\n')
		);

		try {
			const result = await handleScanGeneration2Migration({
				filePath: file
			});
			const output = (result.content[0] as { text: string }).text;

			expect(output).toContain('"found": "<ActionButton>"');
			expect(output).toContain('(./components/ActionButton)');
			expect(output).not.toContain('"found": "<Page>"');
			expect(output).not.toContain('"found": "<DBButton>"');
		} finally {
			rmSync(folder, { recursive: true, force: true });
		}
	});

	it('reports hard-coded colors, sizes and shadows but not tokens', async () => {
		const output = await scan(
			'values',
			[
				'.btn { color: #fff; background-color: #ec0016; }',
				'.btn { padding: 12px 16px; font-size: 14px; }',
				'.card { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); }',
				'.ok { padding: var(--db-spacing-fixed-md); box-shadow: var(--db-elevation-md); }',
				"const style = { borderRadius: '4px' };",
				'<a href="#add">Add</a>'
			].join('\n')
		);

		expect(output).toContain('"found": "color: #fff"');
		expect(output).toContain('"found": "background-color: #ec0016"');
		expect(output).toContain('"found": "padding: 12px 16px"');
		expect(output).toContain('"found": "font-size: 14px"');
		expect(output).toContain(
			'"found": "box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)"'
		);
		expect(output).toContain('"found": "borderRadius: 4px"');
		expect(output).toContain('6 hard-coded value(s)');
		expect(output).not.toContain('--db-spacing-fixed-md"');
		expect(output).not.toContain('#add');
	});

	it('points to the review-migration guide in every report with findings', async () => {
		const withFindings = await scan(
			'review-hint',
			'<div class="cmp-card"></div>'
		);
		const withoutFindings = await scan('review-hint-none', '<p>Plain</p>');

		expect(withFindings).toContain(
			'load `review-migration` with `get_migration_guide`'
		);
		expect(withoutFindings).not.toContain('review-migration');
	});

	it('warns that db-card overrides layout classes on the card itself', async () => {
		const output = await scan('card', '<div class="cmp-card"></div>');

		expect(output).toContain('"suggestion": "db-card - ');
		expect(output).toContain('put custom layout classes on a wrapper');
	});
});
