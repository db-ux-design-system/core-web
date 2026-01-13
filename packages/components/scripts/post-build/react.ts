import components, { Overwrite } from './components';

import { readFileSync, writeFileSync } from 'node:fs';
import { replaceInFileSync } from 'replace-in-file';

import { runReplacements, transformToUpperComponentName } from '../utils';

const overwriteEvents = (tmp?: boolean) => {
	const modelFilePath = `../../${tmp ? 'output/tmp' : 'output'}/react/src/shared/model.ts`;
	let modelFileContent = readFileSync(modelFilePath).toString('utf-8');
	modelFileContent = 'import * as React from "react";\n' + modelFileContent;
	modelFileContent = modelFileContent.replace(
		'export type ClickEvent<T> = MouseEvent;',
		'export type ClickEvent<T> = React.MouseEvent<T, MouseEvent>;'
	);
	modelFileContent = modelFileContent.replace(
		'export type ChangeEvent<T> = Event;',
		'export type ChangeEvent<T> = React.ChangeEvent<T>;'
	);
	modelFileContent = modelFileContent.replace(
		'export type InputEvent<T> = Event;',
		'export type InputEvent<T> = React.FormEvent<T>;'
	);
	modelFileContent = modelFileContent.replace(
		'export type InteractionEvent<T> = FocusEvent;',
		'export type InteractionEvent<T> = React.FocusEvent<T>;'
	);
	modelFileContent = modelFileContent.replace(
		'export type GeneralEvent<T> = Event;',
		'export type GeneralEvent<T> = React.SyntheticEvent<T>;'
	);
	modelFileContent = modelFileContent.replace(
		'export type GeneralKeyboardEvent<T> = KeyboardEvent;',
		'export type GeneralKeyboardEvent<T> = React.KeyboardEvent<T>;'
	);
	writeFileSync(modelFilePath, modelFileContent);
};

// All things from foundations should get set on the root component - custom "data-" attributes shouldn't
const rootProps = [
	'data-icon-variant',
	'data-icon-variant-before',
	'data-icon-variant-after',
	'data-icon-weight',
	'data-icon-weight-before',
	'data-icon-weight-after',
	'data-interactive',
	'data-force-mobile',
	'data-color',
	'data-container-color',
	'data-bg-color',
	'data-on-bg-color',
	'data-color-scheme',
	'data-font-size',
	'data-headline-size',
	'data-divider',
	'data-focus',
	'data-font'
];

/**
 * We want to make sure that the items inside a map containing a key
 * @param input the file as string
 */
const overwriteFragmentMap = (input: string) => {
	const splitInput = input.split('\n');
	const fragmentsBelowMap: boolean[] = [];

	return splitInput
		.map((line: string, index: number) => {
			if (line.includes('<>')) {
				if (index !== 0 && splitInput[index - 1].includes('.map(')) {
					fragmentsBelowMap.push(true);
					return line.replace('<>', '<React.Fragment key={uuid()}>');
				} else {
					fragmentsBelowMap.push(false);
				}
			}
			if (line.includes('</>')) {
				const isFragment = fragmentsBelowMap.pop();
				if (isFragment) {
					return line.replace('</>', '</React.Fragment>');
				}
			}

			return line;
		})
		.join('\n');
};

export default (tmp?: boolean) => {
	try {
		overwriteEvents(tmp);

		for (const component of components) {
			const upperComponentName = transformToUpperComponentName(
				component.name
			);

			const tsxFile = `../../${tmp ? 'output/tmp' : 'output'}/react/src/components/${component.name}/${component.name}.tsx`;

			const tsxFileContent = readFileSync(tsxFile).toString('utf-8');
			const htmlElements = tsxFileContent.match('(?<=useRef<)(.*?)(?=>)');
			let htmlElement = 'HTMLDivElement';
			if (htmlElements && htmlElements.length > 0) {
				htmlElement = htmlElements[0];
			}

			const replacements: Overwrite[] = [
				{
					from: ` } from "react"`,
					to: `, forwardRef, HTMLAttributes } from "react"`
				},
				{
					from: [
						`function DB${upperComponentName}(props: DB${upperComponentName}Props) {`,
						`function DB${upperComponentName}(
  props: DB${upperComponentName}Props
) {`
					],
					to: `function DB${upperComponentName}Fn(props: Omit<HTMLAttributes<${htmlElement}>, keyof DB${upperComponentName}Props> & DB${upperComponentName}Props, component: any) {`
				},
				{
					from: `export default DB${upperComponentName};`,
					to: `const DB${upperComponentName} = forwardRef<
${htmlElement}, Omit<HTMLAttributes<${htmlElement}>,
keyof DB${upperComponentName}Props> & DB${upperComponentName}Props
>(DB${upperComponentName}Fn);
export default DB${upperComponentName};`
				},
				{
					from: '>(null);',
					to: '>(component);'
				},
				{ from: 'useRef<', to: 'component || useRef<' },
				{
					from: '={true}',
					to: ''
				},
				{
					from: 'import * as React from "react";',
					to:
						'import * as React from "react";\n ' +
						'import { filterPassingProps, getRootProps } from "../../utils/react";\n'
				},
				{
					from: 'ref={_ref}',
					to:
						'ref={_ref}\n' +
						`{...filterPassingProps(props,${JSON.stringify([...rootProps, ...(component?.config?.react?.propsPassingFilter ?? [])])})}`
				},
				{
					from: 'className={',
					to:
						`{...getRootProps(props,${JSON.stringify(
							rootProps
						)})}` + '\nclassName={'
				},
				/* We need to overwrite the internal state._value property just for react to have controlled components.
				 * It works for Angular & Vue, so we overwrite it only for React.  */
				{
					from: 'props.value ?? _value',
					to: 'props.value'
				}
			];

			/**
			 * Mitosis generates Fragments for each mapping function.
			 * The following overwrites will prevent react from throwing duplicate key warnings.
			 */
			if (component.config?.react?.containsFragmentMap) {
				if (!tsxFileContent.includes('uuid')) {
					replacements.push({
						from: '{ cls',
						to: '{ cls, uuid'
					});
				}

				replaceInFileSync({
					files: tsxFile,
					processor: (input: string) => overwriteFragmentMap(input)
				});
			}

			runReplacements(replacements, component, 'react', tsxFile);
		}
	} catch (error) {
		console.error('Error occurred:', error);
	}
};
