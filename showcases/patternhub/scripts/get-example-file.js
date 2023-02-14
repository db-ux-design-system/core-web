import getUnionElements from './get-union-elements.js';

const getOption = (optionName, prop) => {
	if (prop.tsType.name === 'boolean') {
		return `${optionName}`;
	}

	if (prop.tsType.name === 'number') {
		return `${optionName}={100}`;
	}

	if (prop.tsType.name === 'literal') {
		return `${optionName}="${prop.tsType.value?.replace(/'/g, '')}"`;
	}

	if (prop.tsType.name === 'union') {
		const options = [];
		getUnionElements(options, prop.tsType.elements);
		return `${optionName}="${(options[1] || options[0])?.replace(
			/'/g,
			''
		)}"`;
	}

	if (
		prop.tsType.name === 'signature' &&
		prop.tsType.raw === '(event: any) => void'
	) {
		return `${optionName}={(event) => console.log(event)}`;
	}

	if (
		prop.tsType.name === 'signature' &&
		prop.tsType.raw === '(valid: boolean) => void'
	) {
		return `${optionName}={(valid) => console.log(valid)}`;
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
			.map((opt) => getOption(opt, props[opt]))
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
