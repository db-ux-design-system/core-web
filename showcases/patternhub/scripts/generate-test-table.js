import FS from 'node:fs';
import { getComponentName } from './utils.js';

// If you want to hide components from the test table, add it to the unlistedComponents array.
const unlistedComponents = new Set([
	'page',
	'custom-select-form-field',
	'custom-select-dropdown'
]);
const unlistedSubComponentsPrefixes = new Set(['-list', '-panel', '-item']);

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
		FS.readFileSync(
			'./../shared/_accessibility-review.json',
			'utf8'
		).toString()
	);
	const data = [];
	for (const { name } of elements) {
		const componentName = getComponentName(name);
		if (
			unlistedComponents.has(componentName) ||
			[...unlistedSubComponentsPrefixes].some((suffix) =>
				componentName.endsWith(suffix)
			)
		) {
			// We don't want to add something like accordion-item
			continue;
		}

		const hasComponentTest = FS.existsSync(
			`./../../packages/components/src/components/${componentName}/${componentName}.spec.tsx`
		);
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
			singleComponentVisuals: hasComponentTest,
			singleComponentAxe: hasComponentTest,
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
		`./data/testing-table.ts`,
		'export const testTableData: any[] = ' + JSON.stringify(data)
	);
};

generateTestTable();
