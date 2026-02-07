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

export default (tmp?: boolean) => {
	const outputFolder = tmp ? 'tmp/stencil/' : '';
	for (const component of components) {
		const componentName = component.name;
		const file = `../wc-core-components/${outputFolder}src/components/${componentName}/${componentName}.tsx`;
		const indexFile = `../wc-core-components/${outputFolder}src/components/${componentName}/index.ts`;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;

		replaceInFileSync({
			files: [file],
			processor: (input: string) => changeFile(upperComponentName, input)
		});

		const replacements: Overwrite[] = [{ from: 'for={', to: 'htmlFor={' }];
		replaceIndexFile(indexFile, componentName, upperComponentName);
		runReplacements(replacements, component, 'stencil', file);
	}
};
