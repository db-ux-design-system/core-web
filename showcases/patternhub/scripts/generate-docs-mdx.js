/* eslint-disable unicorn/prefer-top-level-await, no-await-in-loop */

import FS from 'node:fs';
import FSE from 'fs-extra';
import getExampleFile from './get-example-file.js';
import getPropertiesFile from './get-properties-file.js';
import getHowToFile from './get-how-to-file.js';
import writeCodeFiles from './get-code-files.js';
import getMigrationFile from './get-migration-file.js';

const componentsPath = './pages/components';

const generateDocsMdx = async () => {
	const docs = JSON.parse(
		FS.readFileSync('./../../output/docs.json', 'utf8').toString()
	);
	for (const key of Object.keys(docs)) {
		let componentName = key.split('/').at(-1);
		componentName = componentName.replace('.tsx', '');

		const componentValue = docs[key].at(0);
		if (componentValue) {
			const componentPath = `${componentsPath}/${componentName}`;
			if (!FS.existsSync(componentPath)) {
				FS.mkdirSync(componentPath);
			}

			FS.writeFileSync(
				`${componentPath}/properties.mdx`,
				getPropertiesFile(componentValue)
			);
			FS.writeFileSync(
				`${componentPath}/examples.tsx`,
				getExampleFile(componentName, componentValue)
			);

			const docsPath = `./../../packages/components/src/components/${componentName}/docs`;
			if (FS.existsSync(docsPath)) {
				FSE.copySync(
					docsPath,
					`./${componentsPath}/${componentName}/docs`,
					{
						overwrite: true
					}
				);
			}

			FS.writeFileSync(
				`${componentPath}/how-to-use.mdx`,
				getHowToFile(componentName, componentValue.displayName)
			);

			FS.writeFileSync(
				`${componentPath}/migration.mdx`,
				getMigrationFile(componentName, componentValue.displayName)
			);

			const reactComponent = await writeCodeFiles(
				componentPath,
				componentName
			);
			if (reactComponent) {
				FS.writeFileSync(
					`${componentPath}/overview.tsx`,
					reactComponent
				);
				FS.writeFileSync(`${componentPath}/index.tsx`, reactComponent);
			}
		}
	}
};

generateDocsMdx();
