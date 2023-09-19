import { getUnionElements } from './utils.js';

const getOption = (optionName, tsType) => {
	if (tsType.name === 'boolean') {
		return `${optionName}={true}`;
	}

	if (tsType.name === 'Array') {
		if (optionName === 'dataList') {
			return `${optionName}={[{key:'test1', value:'Test1'},{key:'test2', value:'Test2'}]}`;
		}

		if (tsType?.raw.includes('DBSelect')) {
			return `${optionName}={[{"value":"Test1"},{"value":"Test2"}]}`;
		}

		return `${optionName}={['test1','test2']}`;
	}

	if (
		tsType.name === 'intersection' &&
		tsType.raw.includes('DBNavigationItemActionProps')
	) {
		return `${optionName}={{"text":"Test", "icon":"edit"}}`;
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

	if (tsType.name === 'COLOR') {
		return `${optionName}="primary"`;
	}

	if (tsType.name === 'signature' && tsType.raw === '(event: any) => void') {
		return `${optionName}={(event) => console.log(event)}`;
	}

	if (tsType.name === 'signature' && tsType.raw === '() => void') {
		return `${optionName}={() => console.log("${optionName} triggered")}`;
	}

	if (
		tsType.name === 'signature' &&
		tsType.raw.includes('boolean) => void')
	) {
		return `${optionName}={(event) => console.log(event)}`;
	}

	if (
		tsType.name === 'signature' &&
		tsType.raw.includes('openAccordionItemIds')
	) {
		return `${optionName}={(openAccordionItemIds) => console.log(openAccordionItemIds)}`;
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

	for (const [index, optionArray] of uniqueOptionArrays
		.filter(
			(optionArray) =>
				!optionArray.includes('open') &&
				!optionArray.includes('onClose')
		)
		.entries()) {
		variants += `<dt>${optionArray.join(', ')}:</dt> ${
			isDialog
				? `<DBButton onClick={()=>{setDialog(${index})}}>Open Dialog</DBButton>`
				: ''
		}<dd> <${displayName} ${
			isDialog
				? `open={dialog===${index}} onClose={()=>setDialog(-1)}`
				: ''
		} ${optionArray
			.map((opt) => getOption(opt, props[opt].tsType))
			.join(' ')}>Test</${displayName}></dd>\n`;
	}

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

<dl className="example-list">
${variants}
</dl>
</DefaultPage>);
}
	`;
};

export default getExampleFile;
