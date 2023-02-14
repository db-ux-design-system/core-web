import FS from 'node:fs';
import getExampleFile from './get-example-file.js';
import getIndexFile from './get-index-file.js';
import getHowToFile from './get-how-to-file.js';

const componentsPath = './pages/components';

const generateDocsMdx = () => {
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
				`${componentPath}/index.mdx`,
				getIndexFile(componentValue)
			);
			FS.writeFileSync(
				`${componentPath}/examples.tsx`,
				getExampleFile(componentName, componentValue)
			);
			FS.writeFileSync(
				`${componentPath}/how-to-use.mdx`,
				getHowToFile(componentName)
			);
		}
	}
};

generateDocsMdx();
