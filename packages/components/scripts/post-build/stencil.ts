import { existsSync, writeFileSync } from 'node:fs';
import { replaceInFileSync } from 'replace-in-file';
import { runReplacements, transformToUpperComponentName } from '../utils';
import components, { Overwrite } from './components';

const getSlotDocs = (foundSlots: string[]): string => {
	return `
/**
 * @slot children - This is a default/unnamed slot
${foundSlots.map((slot) => ` * @slot ${slot} - TODO: Add description for slot${transformToUpperComponentName(slot)}`).join('\n')}
 */
 `;
};

const changeFile = (upperComponentName: string, input: string) => {
	const foundSlots: string[] = [];

	return input
		.split('\n')
		.map((line) => {
			if (line.includes('@Prop()')) {
				let option = '';
				if (line.includes('children')) {
					return '';
				}

				if (line.includes('className')) {
					option = '{attribute: "classname"}';
				}

				return line.replace('@Prop()', `@Prop(${option})`);
			}

			if (line.includes('<slot name=')) {
				const firstPart = line.substring(
					line.indexOf('<slot name='),
					line.length
				);
				const slotName = firstPart
					.substring(0, firstPart.indexOf('</slot>') + 7)
					.replace('<slot name="', '')
					.replace('"></slot>', '')
					.trim();
				if (!foundSlots.includes(slotName)) {
					foundSlots.push(slotName);
				}
			}

			return line;
		})
		.join('\n')
		.replace('@Component', getSlotDocs(foundSlots) + '@Component');
};

const replaceIndexFile = (
	file: string,
	componentName: string,
	upperComponentName: string
) => {
	const replacement = `import { ${upperComponentName} } from './${componentName}';

export default ${upperComponentName};`;

	if (existsSync(file)) {
		writeFileSync(file, replacement);
	}
};

const deleteConnectedElement = () => {
	return (
		'if(document && this.rootElement.dataset.connect){\n' +
		'const connectedElement = document.querySelector(`[data-connect-id="${this.rootElement.dataset.connect}"]`);\n' +
		'if (connectedElement){\n' +
		'connectedElement.remove();\n' +
		'}\n}'
	);
};

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const file = `../../${outputFolder}/stencil/src/components/${componentName}/${componentName}.tsx`;
		const indexFile = `../../${outputFolder}/stencil/src/components/${componentName}/index.ts`;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;

		replaceInFileSync({
			files: [file],
			processor: (input: string) => changeFile(upperComponentName, input)
		});

		const replacements: Overwrite[] = [
			{ from: 'for={', to: 'htmlFor={' },
			{
				from: 'componentDidLoad() {',
				to: `componentDidLoad() {${deleteConnectedElement()}\n`
			},
			{
				from: '} from "@stencil/core"',
				to: `, Element } from "@stencil/core"`
			},
			{
				from: 'private _ref',
				to: `@Element() rootElement: HTMLElement;\nprivate _ref`
			}
		];
		replaceIndexFile(indexFile, componentName, upperComponentName);
		runReplacements(replacements, component, 'stencil', file);
	}
};
