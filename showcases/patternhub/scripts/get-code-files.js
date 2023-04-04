/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
import FS from 'node:fs';

const sharedPath = '../shared';
const reactPath = '../react-showcase/src/components';

// TODO: Pass renderToString as html code
const codeFrameworks = ['html', 'angular', 'react', 'vue'];

const getExamplesAsMDX = (examples) => {
	if (!examples?.find((example) => example.code)) {
		return `No code available`;
	}

	let result = '';

	for (const example1 of examples.filter((example) => example.code)) {
		result += '<CH.Code>\n';
		for (const framework of codeFrameworks) {
			if (example1.code) {
				result += `\`\`\`js ${framework}\n`;
				result += `\n${
					example1.code[framework]
						? example1.code[framework]
						: example1.code.default
				}\n`;
				result += '```\n';
			}
		}

		result += '</CH.Code>\n';
	}

	return result;
};

/**
 * @param componentPath {string}
 * @param componentName {string}
 * @returns {Promise<string>}
 */
const writeCodeFiles = async (componentPath, componentName) => {
	const codePath = `${componentPath}/code`;
	const path = `${sharedPath}/${componentName}.json`;
	let variants;
	if (FS.existsSync(path)) {
		variants = JSON.parse(FS.readFileSync(path, 'utf8'));
		for (const variant of variants) {
			if (!FS.existsSync(codePath)) {
				FS.mkdirSync(codePath);
			}

			FS.writeFileSync(
				`${codePath}/${variant.name}.mdx`,
				getExamplesAsMDX(variant.examples)
			);
		}
	}

	const reactComponentPath = `${reactPath}/${componentName}/index.tsx`;
	if (FS.existsSync(reactComponentPath)) {
		let pre = '';
		let tags = '';
		if (variants) {
			pre = variants
				.map(
					(variant) =>
						`import ${variant.name} from './code/${variant.name}.mdx'`
				)
				.join('\n');
			tags = variants.map((variant) => `<${variant.name}/>`).join(',');
		}

		const readFile = FS.readFileSync(reactComponentPath, 'utf8')
			.replace(
				'../../../../../output/react/src',
				'./../../../components/src'
			)
			.replace('../index', './../../../components')
			.replace('../data', '../../../components/data')
			.replace(
				`../../../../../output/react/src/components/${componentName}/model`,
				`./../../../components//src/components/${componentName}/model`
			)
			.replace(
				')}></DefaultComponent>',
				`,[${tags}])}></DefaultComponent>`
			);

		return `${pre}\n${readFile}`;
	}

	return undefined;
};

export default writeCodeFiles;
