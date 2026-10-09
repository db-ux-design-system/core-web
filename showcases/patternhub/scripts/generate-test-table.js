import FS from 'node:fs';
import { getComponentName } from './utils.js';

// If you want to hide components from the test table, add it to the unlistedComponents array.
const unlistedComponents = new Set([
	'page',
	'custom-select-form-field',
	'custom-select-dropdown',
	// Covered by the DBFooter row: their names match none of the suffixes below.
	'footer-content',
	'footer-meta'
]);
const unlistedSubComponentsSuffixes = new Set([
	'-list',
	'-panel',
	'-item',
	'-handle',
	'-menu'
]);
// Sub-components grouped under a parent that has no standalone element of its
// own (e.g. control-panel-brand, control-panel-mobile). They are internal parts
// of DBControlPanel and must not appear as their own validation rows.
const unlistedSubComponentsPrefixes = new Set(['control-panel-']);

const webTypesPath = './../../output/stencil/dist/web-types.json';

const generateTestTable = () => {
	let elements = [];
	if (FS.existsSync(webTypesPath)) {
		const webTypes = JSON.parse(
			FS.readFileSync(webTypesPath, 'utf8').toString()
		);
		elements = webTypes?.contributions?.html?.elements;
	}

	const accessibilityReview = JSON.parse(
		FS.readFileSync('./data/_accessibility-review.json', 'utf8').toString()
	);
	const data = [];
	for (const { name } of elements) {
		// Only real components carry the `db-` prefix. Everything else in the
		// web-types (badge-examples, control-panel-mobile-showcase, ...) is an
		// example/showcase element and must never appear in the table.
		if (!name.startsWith('db-')) {
			continue;
		}

		const componentName = getComponentName(name);
		if (
			unlistedComponents.has(componentName) ||
			[...unlistedSubComponentsSuffixes].some((suffix) =>
				componentName.endsWith(suffix)
			) ||
			[...unlistedSubComponentsPrefixes].some((prefix) =>
				componentName.startsWith(prefix)
			)
		) {
			// We don't want to add something like accordion-item
			continue;
		}

		const hasShowcaseVisuals = FS.existsSync(
			`./../../showcases/e2e/${componentName}/${componentName}-visual-snapshot.spec.ts`
		);
		const hasShowcaseTest = FS.existsSync(
			`./../../showcases/e2e/${componentName}/${componentName}-axe-core.spec.ts`
		);
		const hasScreenReaderTest = FS.existsSync(
			`./../../showcases/screen-reader/tests/${componentName}.spec.ts`
		);

		data.push({
			name: componentName,
			showcaseVisuals: hasShowcaseVisuals,
			showcaseAxe: hasShowcaseTest,
			showcaseAria: hasShowcaseTest,
			showcaseAC: hasShowcaseTest,
			showcaseGP: hasScreenReaderTest,
			accessibilityReview: accessibilityReview.find(
				(ar) => ar.name === componentName
			)
		});
	}

	FS.writeFileSync(
		'./data/testing-table.ts',
		'export const testTableData: any[] = ' + JSON.stringify(data)
	);
};

generateTestTable();
