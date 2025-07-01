import FS from 'node:fs';
import { getComponentName } from './utils.js';

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
			componentName.endsWith('-list') ||
			componentName.endsWith('-panel') ||
			componentName.endsWith('-item')
		) {
			// We don't want to add something like accordion-item
			continue;
		}

		const hasComponentTest = FS.existsSync(
			`./../../packages/components/src/components/${componentName}/${componentName}.spec.tsx`
		);
		const hasShowcaseVisuals = FS.existsSync(
			`./../../showcases/e2e/${componentName}/${componentName}-snapshot.spec.ts`
		);
		const hasShowcaseTest = FS.existsSync(
			`./../../showcases/e2e/${componentName}/${componentName}-a11y.spec.ts`
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
