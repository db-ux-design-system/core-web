import getUnionElements from './get-union-elements.js';

const getOptions = (tsType) => {
	switch (tsType.name) {
		case 'literal': {
			return tsType.value;
		}

		case 'signature': {
			return tsType.raw;
		}

		case 'union': {
			const options = [];
			getUnionElements(options, tsType.elements);
			return options.join(',');
		}

		default: {
			return '';
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
		propTable += `| ${propKey} `;
		propTable += `| ${
			prop.description.replace(/\r\n|\r|\n/g, '<br/>') || 'No description'
		} `;
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

export default getIndexFile;
