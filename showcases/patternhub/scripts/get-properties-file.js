import { getColorVariants, getUnionElements } from './utils.js';

const getOptions = (tsType) => {
	switch (tsType.name) {
		case 'literal': {
			return tsType.value;
		}

		case 'Array': {
			return `const array:${tsType.raw} = [${tsType.elements
				.map((element) => getOptions(element))
				.join('\n')}]`;
		}

		case 'signature': {
			return `${tsType.raw
				.replace(/\/\*\*\n\t/g, '')
				.replace(/\*\/\n\t/g, '')
				.replace(/\*/g, '//')
				.replace(/{/g, '&#123;')
				.replace(/}/g, '&#125;')
				.replace(/\r\n\t\t/g, ' ')
				.replace(/\t/g, '&ensp;')
				.replace(/\r\n|\r|\n/g, '<br/>')
				.replace(/\|/g, '&#124;')}`;
		}

		case 'union': {
			const options = [];
			getUnionElements(options, tsType.elements);
			return options.join(' &#124; ');
		}

		case 'COLOR': {
			return getColorVariants().join(' &#124; ');
		}

		default: {
			return undefined;
		}
	}
};

/**
 *
 * @param componentValue {{description: string, methods: any[], displayName: string, props:any}}
 * @returns {string}
 */
const getPropertiesFile = ({ displayName, description, props }) => {
	const propKeys = Object.keys(props);

	let propTable = '';

	for (const propKey of propKeys) {
		const prop = props[propKey];
		const options = getOptions(prop.tsType);
		propTable += `| ${propKey} `;
		propTable += `| ${
			prop.description.replace(/\r\n|\r|\n/g, '<br/>') || 'No description'
		} `;
		propTable += `| ${prop.tsType.type ?? prop.tsType.name} `;
		propTable += `| ${
			options
				? `<pre><code className="code-pre-wrap">${options}</code></pre>`
				: ''
		} |\n`;
	}

	return `
import DefaultPage from "../../../components/default-page";

# ${displayName}
${description}
## Properties

| Name | Description | Type | Options |
| ---- | ----------- | ---- | ------- |
${propTable}

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;`;
};

export default getPropertiesFile;
