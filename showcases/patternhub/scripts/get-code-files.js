/* eslint-disable no-await-in-loop */
import FS from 'node:fs';
import prettier from 'prettier';
import prettier0 from 'prettier/parser-babel.js';
import { allExamples } from './generated/index.jsx';
import { getCodeByFramework } from './utils.js';

const sharedPath = '../shared';
const reactPath = '../react-showcase/src/components';

const codeFrameworks = ['angular', 'html', 'react', 'vue'];
const plugins = [prettier0];

const getFileTypeByFramework = (framework) => {
	if (framework === 'react') {
		return 'tsx';
	}

	if (framework === 'vue') {
		return 'tsx';
	}

	return 'html';
};

const getExamplesAsMDX = async (componentName, variant) => {
	const examples = variant.examples;

	let result =
		"import { useEffect, useState } from 'react';\n" +
		'import {\n' +
		'DBButton,\n' +
		'DBCard,\n' +
		'DBTabItem,\n' +
		'DBTabList,\n' +
		'DBTabPanel,\n' +
		'DBTabs\n' +
		"} from '../../../../../../output/react/src';\n" +
		`const ${variant.name} = () => {
			const [copied, setCopied] = useState<string>();

			useEffect(() => {
			if (copied) {
			setTimeout(() => setCopied(""), 1500);
			}
			}, [copied]);
			return (
			<>`;

	for (const example of examples) {
		result += `
			<DBCard className="tab-container">
			<DBTabs>
			<DBTabList>
			<DBTabItem>Angular</DBTabItem>
			<DBTabItem>HTML</DBTabItem>
			<DBTabItem>React</DBTabItem>
			<DBTabItem>Vue</DBTabItem>
			</DBTabList>`;
		for (const framework of codeFrameworks) {
			let exampleCode;

			if (example.code && example.code[framework]) {
				exampleCode = example.code[framework];
			} else if (framework === 'html') {
				exampleCode =
					allExamples[
						`${componentName}${variant.name}${example.name}`
					];
			} else {
				exampleCode = getCodeByFramework(
					componentName,
					framework,
					example
				);
			}

			try {
				exampleCode = await prettier.format(exampleCode, {
					parser: 'babel',
					plugins
				});
			} catch {
				// We do not care about errors here
			}

			exampleCode = exampleCode?.replace(/;/g, '').trim();

			result += `
				<DBTabPanel>
				<pre>
				<code className="hljs language-${getFileTypeByFramework(framework)}">{\`${exampleCode}\`}</code>
				</pre>

				<DBButton
				className="copy-button"
				noText
				icon={copied === \`${exampleCode}\` ? 'done' : 'copy'}
				variant="ghost"
				onClick={()=>{
				setCopied(\`${exampleCode}\`);
				navigator.clipboard.writeText(\`${exampleCode}\`);
				}}>
				Copy
				</DBButton>
				</DBTabPanel>`;
		}

		result += `
			</DBTabs>
			</DBCard>`;
	}

	result += `</>
);
};

export default ${variant.name};`;

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
		variants = JSON.parse(FS.readFileSync(path, 'utf8')).map((variant) => ({
			...variant,
			name: variant.name.replaceAll(/\s/g, '').replaceAll(/\W/g, '')
		}));
		for (const variant of variants) {
			if (!FS.existsSync(codePath)) {
				FS.mkdirSync(codePath);
			}

			FS.writeFileSync(
				`${codePath}/${variant.name}.tsx`,
				await getExamplesAsMDX(componentName, variant)
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
						`import ${variant.name} from './code/${variant.name}'`
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
			)
			.replaceAll('// Patternhub:', '');

		return `${pre}\n${readFile}`;
	}

	return undefined;
};

export default writeCodeFiles;
