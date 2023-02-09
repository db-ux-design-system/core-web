import FS from 'node:fs';

const componentsPath = './pages/components';

const getOptions = (tsType) => {
	switch (tsType.name) {
		case 'literal': {
			return tsType.value;
		}

		case 'union':
		case 'signature': {
			return tsType.raw.replace(/\|/g, ',');
		}
		default:
			return '';
	}
};

/**
 *
 * @param componentValue {{description: string, methods: any[], displayName: string, props:any}}
 * @returns {string}
 */
const getIndexFile = ({ displayName, description, props }) => {
	const propKeys = Object.keys(props);

	let propTable = '';

	for (const propKey of propKeys) {
		const prop = props[propKey];
		propTable += `| ${propKey} `;
		propTable += `| ${prop.description || 'No description'} `;
		propTable += `| ${prop.required ? '✅' : '❌'} `;
		propTable += `| ${prop.tsType.type ?? prop.tsType.name} `;
		propTable += `| ${getOptions(prop.tsType)} |\n`;
	}

	return `
import DefaultPage from "../../../components/default-page";

# ${displayName}
${description}
## Properties

| Name | Description | Required | Type | Options |
| ---- | ----------- | :------: | ---- | ------- |
${propTable}

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;`;
};

const getOption = (optionName, prop) => {
	// TODO: Add other types as well
	// TODO: Add faker.js
	if (prop.tsType.name === 'boolean') {
		return `${optionName}="true"`;
	}

	return `${optionName}="account"`;
};

/**
 * @param componentName {string}
 * @param componentValue {{description: string, methods: any[], displayName: string, props:any}}
 * @returns {string}
 */
const getExampleFile = (componentName, { displayName, props }) => {
	let variants = '';
	const optionArrays = [];

	const propKeys = Object.keys(props).filter(
		(key) =>
			key !== 'className' && key !== 'children' && key !== 'stylePath'
	);
	for (const [index, key] of propKeys.entries()) {
		optionArrays.push([key]);
		let start = index;
		while (start < propKeys.length) {
			const additionalOptions = [];
			for (let i = start; i < propKeys.length; i++) {
				additionalOptions.push(propKeys[i]);
			}

			optionArrays.push(additionalOptions);
			start++;
		}
	}

	// TODO: Filter unique
	for (const optionArray of optionArrays) {
		variants += `${optionArray.join(', ')}: <${displayName} ${optionArray
			.map((opt) => getOption(opt, props[opt]))
			.join(' ')}>Test</${displayName}>\n`;
	}

	return `
import DefaultPage from "../../../components/default-page";
import ${displayName} from "../../../components/src/components/${componentName}/${componentName}";

# ${displayName} Examples

<div class="example-list">
Default: <${displayName}>Test</${displayName}>
${variants}
</div>

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;
	`;
};

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
				`${componentPath}/examples.mdx`,
				getExampleFile(componentName, componentValue)
			);
		}
	}
};

generateDocsMdx();
