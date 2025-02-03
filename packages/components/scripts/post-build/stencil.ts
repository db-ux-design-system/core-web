import components, { Overwrite } from './components';
import { runReplacements, transformToUpperComponentName } from '../utils';
import { replaceInFileSync } from 'replace-in-file';
import { writeFileSync, existsSync } from 'node:fs';

const enableCustomElementsAttributePassing = (componentName: string) =>
	'componentDidLoad() {\n' +
	`\tenableCustomElementAttributePassing(this._ref, "db-${componentName}")`;

const getSlotDocs = (foundSlots: string[]): string => {
	return `
/**
 * @slot children - This is a default/unnamed slot
${foundSlots.map((slot) => ` * @slot ${slot} - TODO: Add description for slot${transformToUpperComponentName(slot)}`).join('\n')}
 */
 `;
};

const changeFile = (
	componentName: string,
	upperComponentName: string,
	input: string
) => {
	let resolvedInput = input;
	if (resolvedInput.includes('componentDidLoad')) {
		resolvedInput = resolvedInput.replace(
			'componentDidLoad() {',
			enableCustomElementsAttributePassing(componentName)
		);
	} else {
		resolvedInput = resolvedInput.replace(
			'render() {',
			enableCustomElementsAttributePassing(componentName) +
				'}\n' +
				'render() {'
		);
	}

	const foundSlots = [];

	return resolvedInput
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

				return line
					.replace('@Prop()', `@Prop(${option})`)
					.replace(
						'any',
						`${upperComponentName}Props["${line.replace(`@Prop() `, '').replace(': any;', '').trim()}"]`
					);
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

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const file = `../../${outputFolder}/stencil/src/components/${componentName}/${componentName}.tsx`;
		const indexFile = `../../${outputFolder}/stencil/src/components/${componentName}/index.ts`;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;

		replaceInFileSync({
			files: [file],
			processor: (input: string) =>
				changeFile(componentName, upperComponentName, input)
		});

		const replacements: Overwrite[] = [
			{
				from: '} from "../../utils"',
				to: ', enableCustomElementAttributePassing } from "../../utils"'
			},
			{ from: /ref=\{\(el\)/g, to: 'ref={(el:any)' },
			{ from: 'for={', to: 'htmlFor={' },
			{
				from: 'onInput={(event) => this.handleChange(event)}',
				to: 'onChange={(event) => this.handleChange(event)}'
			}
		];
		replaceIndexFile(indexFile, componentName, upperComponentName);
		runReplacements(replacements, component, 'stencil', file);
	}
};
