/* eslint-disable unicorn/prefer-top-level-await, no-await-in-loop */

import FS from 'node:fs';
import writeCodeFiles from './get-code-files.js';
import getHowToFile from './get-how-to-file.js';
import getMigrationFile from './get-migration-file.js';
import getPropertiesFile from './get-properties-file.js';
import { getComponentName } from './utils.js';

const componentsPath = './pages/components';
const webTypesPath = './../../output/stencil/dist/web-types.json';

const getRedirectOldFiles = (
	importPath
) => `import OldRoutingFallback from '${importPath}components/old-routing-fallback';
const Fallback = () => <OldRoutingFallback />;
export default Fallback;`;

/**
 Resolves the navigation entry that documents a custom element.
 Most components map one element to one entry via their shared name. A component
 family (e.g. Heading) documents several elements on one page and declares them
 explicitly via `elements` in `components.json`, because element names like
 `db-heading-h-1` or `db-custom-heading` never equal the entry name `heading`.
 @param components {{name: string, subNavigation: {name: string, label: string, elements?: string[]}[]}[]}
 @param elementName {string} the custom element name, e.g. `db-tag`
 @param componentName {string} the element name without the `db-` prefix
 @returns {{group: object, component: object} | undefined}
 */
const resolveNavigationEntry = (components, elementName, componentName) => {
	for (const group of components) {
		for (const component of group.subNavigation ?? []) {
			if (
				component.elements?.includes(elementName) ||
				component.name === componentName
			) {
				return { group, component };
			}
		}
	}

	return undefined;
};

const generateDocsMdx = async () => {
	let elements = [];
	if (FS.existsSync(webTypesPath)) {
		const webTypes = JSON.parse(
			FS.readFileSync(webTypesPath, 'utf8').toString()
		);
		elements = webTypes?.contributions?.html?.elements;
	}

	const components = JSON.parse(
		FS.readFileSync('./data/components.json', 'utf8').toString()
	);
	// Group the custom elements by the page that documents them, so that a
	// component family produces one page listing all of its elements instead of
	// being skipped for not matching a navigation entry name.
	const pages = new Map();
	for (const element of elements ?? []) {
		const componentName = getComponentName(element.name);
		const entry = resolveNavigationEntry(
			components,
			element.name,
			componentName
		);
		if (!entry) {
			console.error(
				`Component ${componentName} not found in the components.json file`
			);
			continue;
		}

		const key = `${entry.group.name}/${entry.component.name}`;
		if (pages.has(key)) {
			pages.get(key).elements.push(element);
		} else {
			pages.set(key, { ...entry, elements: [element] });
		}
	}

	for (const { group, component, elements: pageElements } of pages.values()) {
		const elementOrder = new Map(
			(component.elements ?? []).map((element, index) => [element, index])
		);
		const orderedPageElements =
			elementOrder.size > 0
				? pageElements.toSorted(
						(a, b) =>
							(elementOrder.get(a.name) ??
								Number.MAX_SAFE_INTEGER) -
							(elementOrder.get(b.name) ??
								Number.MAX_SAFE_INTEGER)
					)
				: pageElements;

		// The navigation entry name is also the folder name in
		// `packages/components/src/components`, which is where the docs live.
		const componentName = component.name;
		const displayName = component.label;
		const componentOldPath = `${componentsPath}/${componentName}`;
		const componentGroupPath = `${componentsPath}/${group.name}`;
		const componentPath = `${componentGroupPath}/${componentName}`;

		if (!FS.existsSync(componentGroupPath)) {
			FS.mkdirSync(componentGroupPath);
		}

		if (!FS.existsSync(componentPath)) {
			FS.mkdirSync(componentPath);
		}

		FS.writeFileSync(
			`${componentPath}/properties.mdx`,
			getPropertiesFile(orderedPageElements, displayName)
		);

		const docsPath = `./../../packages/components/src/components/${componentName}/docs`;
		if (FS.existsSync(docsPath)) {
			FS.cpSync(docsPath, `./${componentPath}/docs`, {
				recursive: true
			});
		}

		FS.writeFileSync(
			`${componentPath}/how-to-use.mdx`,
			getHowToFile(componentName, displayName)
		);

		FS.writeFileSync(
			`${componentPath}/migration.mdx`,
			getMigrationFile(componentName, displayName)
		);

		if (!FS.existsSync('./components/code-docs')) {
			FS.mkdirSync('./components/code-docs');
		}

		await writeCodeFiles(
			`./components/code-docs/${componentName}`,
			componentName
		);

		// Write old files for Marketingportal

		if (!FS.existsSync(componentOldPath)) {
			FS.mkdirSync(componentOldPath);
		}

		if (!FS.existsSync(`${componentOldPath}/docs`)) {
			FS.mkdirSync(`${componentOldPath}/docs`);
		}

		for (const framework of ['Angular', 'HTML', 'React', 'Vue']) {
			FS.writeFileSync(
				`${componentOldPath}/docs/${framework}.tsx`,
				getRedirectOldFiles('../../../../')
			);
		}

		if (!FS.existsSync(`${componentOldPath}/properties.tsx`)) {
			FS.writeFileSync(
				`${componentOldPath}/properties.tsx`,
				getRedirectOldFiles('../../../')
			);
		}
	}
};

generateDocsMdx();
