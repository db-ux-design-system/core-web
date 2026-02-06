/* eslint-disable no-await-in-loop */
import FS from 'node:fs';
import prettier from 'prettier';
import { allExamples } from './generated/index.jsx';
import { generateExampleKey, getCodeByFramework } from './utils.js';

const sharedPath = '../shared';
const reactPath = '../react-showcase/src/components';

const codeFrameworks = ['angular', 'html', 'react', 'vue'];

const getFileTypeByFramework = (framework) => {
	if (framework === 'react') {
		return 'tsx';
	}

	if (framework === 'vue') {
		return 'tsx';
	}

	return 'html';
};

const getCustomCodeCommentByFramework = (componentName, framework) => {
	return `<DBLink content="external" target="_blank" href="how-to-use?current=${framework}">How to use this in ${framework}</DBLink>`;
};

const getExamplesAsMDX = async (componentName, variant) => {
	const { examples, children } = variant;

	let result =
		"import { useEffect, useState } from 'react';\n" +
		'import {\n' +
		'DBButton,\n' +
		'DBCard,\n' +
		'DBLink,\n' +
		'DBTabItem,\n' +
		'DBTabList,\n' +
		'DBTabPanel,\n' +
		'DBTabs\n' +
		"} from '../../../../../packages/react-core-components/src';\n" +
		"import { useFramework } from '../../framework-context';\n" +
		`const ${variant.name} = () => {
			const [copied, setCopied] = useState<string>();
			const { getFrameworkIndex } = useFramework();

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
			<DBTabs initialSelectedIndex={getFrameworkIndex()} key={getFrameworkIndex()}>
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
				const exampleKey = generateExampleKey(
					componentName,
					variant.name,
					example.name
				);
				exampleCode = allExamples[exampleKey];
			} else {
				exampleCode = getCodeByFramework(
					componentName,
					framework,
					example,
					false,
					children
				);
			}

			try {
				exampleCode = await prettier.format(exampleCode, {
					parser: framework === 'react' ? 'babel' : framework
				});
			} catch {
				// We do not care about errors here
				// console.error(e);
			}

			exampleCode = exampleCode?.replace(/;/g, '').trim();

			result += `
				<DBTabPanel>
				${getCustomCodeCommentByFramework(componentName, framework)}

				<pre>
				<code className="hljs language-${getFileTypeByFramework(framework)}">{\`${exampleCode}\`}</code>
				</pre>

				<DBButton
				className="copy-button"
				noText
				icon={copied === \`${exampleCode}\` ? 'check' : 'copy'}
				variant="ghost"
				onClick={()=>{
				setCopied(\`${exampleCode}\`);
				navigator.clipboard.writeText(\`${exampleCode}\`);
				}}>
				Copy code
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
	const codePath = componentPath;
	const path = `${sharedPath}/${componentName}.json`;
	let variants;
	if (FS.existsSync(path)) {
		variants = JSON.parse(FS.readFileSync(path, 'utf8')).map((variant) => ({
			...variant,
			name: variant.name.replaceAll(/\s/g, '').replaceAll(/\W/g, '')
		}));

		let indexFile = '';

		for (const variant of variants) {
			if (!FS.existsSync(codePath)) {
				FS.mkdirSync(codePath);
			}

			indexFile += `export { default as ${variant.name} } from './${variant.name}';\n`;

			FS.writeFileSync(
				`${codePath}/${variant.name}.tsx`,
				await getExamplesAsMDX(componentName, variant)
			);
		}

		FS.writeFileSync(`${codePath}/index.tsx`, indexFile);
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
			.replace('../index', './../../../components')
			.replace('../data', '../../../components/data')
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
