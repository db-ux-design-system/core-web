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

	if (prop.tsType.name === 'signature' && prop.tsType.raw === '() => void') {
		return `${optionName}={() => console.log("${optionName} triggered")}`;
	}

	if (
		prop.tsType.name === 'signature' &&
		prop.tsType.raw.includes('boolean) => void')
	) {
		return `${optionName}={(event) => console.log(event)}`;
	}

	if (optionName.toLowerCase().endsWith('src')) {
		return `${optionName}="https://db-ui.github.io/images/db_logo.svg"`;
	}

	if (optionName.toLowerCase().startsWith('slot')) {
		return `${optionName}={<div>${optionName}</div>}`;
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

	const isDialog = ['drawer'].includes(componentName);

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

	uniqueOptionArrays
		.filter(
			(optionArray) =>
				!optionArray.includes('open') &&
				!optionArray.includes('onClose')
		)
		.forEach((optionArray, index) => {
			variants += `<p>${optionArray.join(', ')}:</p> ${
				isDialog
					? `<DBButton onClick={()=>{setDialog(${index})}}>Open Dialog</DBButton>`
					: ''
			} <${displayName} ${
				isDialog
					? `open={dialog===${index}} onClose={()=>setDialog(-1)}`
					: ''
			} ${optionArray
				.map((opt) => getOption(opt, props[opt]))
				.join(' ')}>Test</${displayName}>\n`;
		});

	return `
${
	isDialog
		? 'import { useState } from "react";\nimport DBButton from "../../../components/src/components/button/button";'
		: ''
}
import DefaultPage from "../../../components/default-page";
import ${displayName} from "../../../components/src/components/${componentName}/${componentName}";


export default () => {
${isDialog ? 'const [dialog, setDialog] = useState<number>(-1);' : ''}
return (<DefaultPage>
<h1> ${displayName} Examples </h1>

<div className="example-list">
${variants}
</div>
</DefaultPage>);
}
	`;
};

export default getExampleFile;
