import getUnionElements from './get-union-elements.js';

const getOptions = (tsType) => {
	switch (tsType.name) {
		case 'literal': {
			return tsType.value;
		}

		case 'signature': {
			return `${tsType.raw
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
const getIndexFile = ({ displayName, description, props }) => {
	const propKeys = Object.keys(props);

	let propTable = '';

	for (const propKey of propKeys) {
		const prop = props[propKey];
		const options = getOptions(prop.tsType);
		propTable += `| ${propKey} `;
		propTable += `| ${
			prop.description.replace(/\r\n|\r|\n/g, '<br/>') || 'No description'
		} `;
		propTable += `| ${prop.required ? '✅' : '❌'} `;
		propTable += `| ${prop.tsType.type ?? prop.tsType.name} `;
		propTable += `| ${
			options ? `<pre><code>${options}</code></pre>` : ''
		} |\n`;
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

export default getIndexFile;
