/*
 * This script can be used to update the icon type for all components using icons.
 */

import { readFileSync, writeFileSync } from 'node:fs';

export type GenerateIconTypesProps = {
	fontJsonPath: string;
	outDir: string;
};

export const generateIconTypes = ({
	fontJsonPath,
	outDir
}: GenerateIconTypesProps) => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const allIcons: Record<string, string[]> = JSON.parse(
			readFileSync(fontJsonPath, 'utf8')
		);

		const icons = Object.keys(allIcons);

		const generatedDisclaimer = '/* This file was generated */\n';
		const iconTypes = `${generatedDisclaimer}export type BaseIconTypes = ${icons.map((icon) => `"${icon}"`).join('|\n')};`;
		const allIconsFile = `${generatedDisclaimer}export const ALL_ICONS: string[] = ${JSON.stringify(icons)};`;

		const filesToWrite = [
			{
				name: 'base-icon-types',
				content: iconTypes
			},
			{
				name: 'all-icons',
				content: allIconsFile
			}
		];

		for (const { name, content } of filesToWrite) {
			writeFileSync(`${outDir}/${name}.ts`, content);
		}

		const indexContent = [
			...filesToWrite.map(({ name }) => name),
			'icon-types'
		]
			.map((name) => `export * from "./${name}.js";`)
			.join('\n');

		writeFileSync(`${outDir}/index.ts`, indexContent);
	} catch (error) {
		console.error(error);
	}
};
