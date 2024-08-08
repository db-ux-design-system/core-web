import FS from 'node:fs';
import { getComponentName } from './utils.js';

const generateTestTable = () => {
	const docs = JSON.parse(
		FS.readFileSync('./../../output/docs.json', 'utf8').toString()
	);
	const accessibilityReview = JSON.parse(
		FS.readFileSync(
			'./../shared/_accessibility-review.json',
			'utf8'
		).toString()
	);
	const data = [];
	for (const key of Object.keys(docs)) {
		const componentName = getComponentName(key);
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
		const hasShowcaseTest = FS.existsSync(
			`./../../showcases/e2e/${componentName}/showcase-${componentName}.spec.ts`
		);
		const hasScreenReaderTest = FS.existsSync(
			`./../../showcases/screen-reader/tests/${componentName}.spec.ts`
		);

		data.push({
			name: componentName,
			singleComponentVisuals: hasComponentTest,
			singleComponentAxe: hasComponentTest,
			showcaseVisuals: hasShowcaseTest,
			showcaseAxe: hasShowcaseTest,
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
