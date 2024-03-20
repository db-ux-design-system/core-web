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
				.replaceAll('/**\n\t', '')
				.replaceAll('*/\n\t', '')
				.replaceAll('*', '//')
				.replaceAll('{', '&#123;')
				.replaceAll('}', '&#125;')
				.replaceAll('\r\n\t\t', ' ')
				.replaceAll('\t', '&ensp;')
				.replaceAll(/\r\n|\r|\n/g, '<br/>')
				.replaceAll('|', '&#124;')}`;
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
	const propertyKeys = Object.keys(props);

	let propertyTable = '';

	for (const propertyKey of propertyKeys) {
		const property = props[propertyKey];
		const options = getOptions(property.tsType);
		propertyTable += `| ${propertyKey} `;
		propertyTable += `| ${
			property.description.replaceAll(/\r\n|\r|\n/g, '<br/>') ||
			'No description'
		} `;
		propertyTable += `| ${property.tsType.type ?? property.tsType.name} `;
		propertyTable += `| ${
			options
				? `<pre><code className="code-pre-wrap">${options.replaceAll(
						'<T>',
						''
					)}</code></pre>`
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
${propertyTable}

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;`;
};

export default getPropertiesFile;
