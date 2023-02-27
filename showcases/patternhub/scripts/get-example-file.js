import getUnionElements from './get-union-elements.js';

const getOption = (optionName, tsType) => {
	if (tsType.name === 'boolean') {
		return `${optionName}={true}`;
	}

	if (tsType.name === 'Array') {
		return `${optionName}={['test1','test2']}`;
	}

	if (tsType.name === 'number') {
		return `${optionName}={100}`;
	}

	if (tsType.name === 'literal') {
		return `${optionName}="${tsType.value?.replace(/'/g, '')}"`;
	}

	if (tsType.name === 'union') {
		const options = [];
		getUnionElements(options, tsType.elements);
		return `${optionName}="${(options[1] || options[0])?.replace(
			/'/g,
			''
		)}"`;
	}

	if (tsType.name === 'signature' && tsType.raw === '(event: any) => void') {
		return `${optionName}={(event) => console.log(event)}`;
	}

	if (
		tsType.name === 'signature' &&
		tsType.raw === '(valid: boolean) => void'
	) {
		return `${optionName}={(valid) => console.log(valid)}`;
	}

	if (tsType.name === 'signature' && tsType.type === 'object') {
		return `${optionName}={{${tsType.signature?.properties?.map(
			(property) =>
				`"${getOption(property.key, property.value)
					.replace('=', '":')
					.replace(/{/g, '')
					.replace(/}/g, '')}`
		)}}}`;
	}

	if (optionName.toLowerCase().endsWith('src')) {
		return `${optionName}="https://db-ui.github.io/images/db_logo.svg"`;
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

	const uniqueOptionArrays = [];
	for (const optionArray of optionArrays.map((optionArray) =>
		optionArray.sort()
	)) {
		const foundArray = uniqueOptionArrays.find(
			(uniqueOptionArray) =>
				optionArray?.toString() === uniqueOptionArray?.toString()
		);
		if (!foundArray) {
			uniqueOptionArrays.push(optionArray);
		}
	}

	for (const optionArray of uniqueOptionArrays) {
		variants += `<p>${optionArray.join(
			', '
		)}:</p> <${displayName} ${optionArray
			.map((opt) => getOption(opt, props[opt].tsType))
			.join(' ')}>Test</${displayName}>\n`;
	}

	return `
import DefaultPage from "../../../components/default-page";
import ${displayName} from "../../../components/src/components/${componentName}/${componentName}";

export default () => <DefaultPage>
<h1> ${displayName} Examples </h1>

<div className="example-list">
Default: <${displayName}>Test</${displayName}>
${variants}
</div>
</DefaultPage>;
	`;
};

export default getExampleFile;
