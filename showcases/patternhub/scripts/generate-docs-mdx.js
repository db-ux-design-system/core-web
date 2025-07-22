/* eslint-disable unicorn/prefer-top-level-await, no-await-in-loop */

import FS from 'node:fs';
import writeCodeFiles from './get-code-files.js';
import getHowToFile from './get-how-to-file.js';
import getMigrationFile from './get-migration-file.js';
import getPropertiesFile from './get-properties-file.js';
import { getComponentGroup, getComponentName } from './utils.js';

const componentsPath = './pages/components';
const webTypesPath = './../../output/stencil/dist/web-types.json';

const getRedirectOldFiles = (
	importPath
) => `import OldRoutingFallback from '${importPath}components/old-routing-fallback';
const Fallback = () => <OldRoutingFallback />;
export default Fallback;`;

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
	if (elements) {
		for (const element of elements) {
			const componentName = getComponentName(element.name);
			const componentGroup = getComponentGroup(components, componentName);
			const foundComponent = componentGroup?.subNavigation?.find(
				(component) => component.name === componentName
			);
			if (!foundComponent) {
				console.error(
					`Component ${componentName} not found in the components.json file`
				);
				continue;
			}

			const displayName = foundComponent.label;

			if (componentGroup) {
				const componentOldPath = `${componentsPath}/${componentName}`;
				const componentGroupPath = `${componentsPath}/${componentGroup.name}`;
				const componentPath = `${componentGroupPath}/${componentName}`;

				if (!FS.existsSync(componentGroupPath)) {
					FS.mkdirSync(componentGroupPath);
				}

				if (!FS.existsSync(componentPath)) {
					FS.mkdirSync(componentPath);
				}

				FS.writeFileSync(
					`${componentPath}/properties.mdx`,
					getPropertiesFile(element)
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
		}
	}
};

generateDocsMdx();
