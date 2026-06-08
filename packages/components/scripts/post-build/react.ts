import components, { Overwrite } from './components';

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
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
	'data-font',
	'data-density'
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

const collectSourceFiles = (root: string): string[] => {
	const sourceFiles: string[] = [];

	for (const entry of readdirSync(root, { withFileTypes: true })) {
		const entryPath = resolve(root, entry.name);
		if (entry.isDirectory()) {
			sourceFiles.push(...collectSourceFiles(entryPath));
			continue;
		}

		if (entry.isFile() && ['.ts', '.tsx'].includes(extname(entry.name))) {
			sourceFiles.push(entryPath);
		}
	}

	return sourceFiles;
};

const overwriteEsmImportExtensions = (tmp?: boolean) => {
	const sourceRoot = `../../${tmp ? 'output/tmp' : 'output'}/react/src`;
	const sourceFiles = collectSourceFiles(sourceRoot);

	for (const sourceFilePath of sourceFiles) {
		// Only process files in components/ folder, skip shared/ utilities
		if (!sourceFilePath.includes('/components/')) {
			continue;
		}

		let sourceCode = readFileSync(sourceFilePath).toString('utf-8');

		// Fix imports: remove .js from shared utilities but keep it for components
		const lines = sourceCode.split('\n');
		const fixedLines = lines.map((line) => {
			// Remove .js from shared utilities
			line = line.replace(
				/from ['"](\.[^'"]*\/shared\/examples\/[^'"]*?)\.js['"]/g,
				"from '$1'"
			);
			line = line.replace(
				/from ['"](\.[^'"]*\/shared\/showcase\/[^'"]*?)\.js['"]/g,
				"from '$1'"
			);
			line = line.replace(
				/from ['"](\.[^'"]*\/shared\/constants)\.js['"]/g,
				"from '$1'"
			);
			line = line.replace(
				/from ['"](\.[^'"]*\/shared\/figma)\.js['"]/g,
				"from '$1'"
			);
			line = line.replace(
				/from ['"](\.[^'"]*\/shared\/show-code-link)\.js['"]/g,
				"from '$1'"
			);

			// Remove .js from showcase and example imports
			line = line.replace(
				/from ['"](\.[^'"]*\.showcase)['"]/g,
				"from '$1'"
			);
			line = line.replace(
				/from ['"](\.[^'"]*\.example)['"]/g,
				"from '$1'"
			);

			// Same for import statements
			line = line.replace(
				/import ['"](\.[^'"]*\/shared\/examples\/[^'"]*?)\.js['"]/g,
				"import '$1'"
			);
			line = line.replace(
				/import ['"](\.[^'"]*\/shared\/showcase\/[^'"]*?)\.js['"]/g,
				"import '$1'"
			);
			line = line.replace(
				/import ['"](\.[^'"]*\.showcase)['"]/g,
				"import '$1'"
			);
			line = line.replace(
				/import ['"](\.[^'"]*\.example)['"]/g,
				"import '$1'"
			);

			return line;
		});

		const fixedCode = fixedLines.join('\n');
		writeFileSync(sourceFilePath, fixedCode);
	}
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
					from: `function DB${upperComponentName}(props: DB${upperComponentName}Props) {`,
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
						`{...getRootProps(props,${JSON.stringify(rootProps)})}` +
						'\nclassName={'
				},
				/* We need to overwrite the internal state._value property just for react to have controlled components.
				 * It works for Angular & Vue, so we overwrite it only for React.  */
				{
					from: 'props.value ?? _value ?? ""',
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

		overwriteEsmImportExtensions(tmp);
	} catch (error) {
		console.error('Error occurred:', error);
	}
};
