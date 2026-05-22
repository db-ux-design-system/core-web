import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { getInstructions } from '../utils';

export const generateAmazonQ = (rootPath: string) => {
	const outputFolder = resolve(rootPath, '.amazonq', 'rules');

	if (!existsSync(outputFolder)) {
		mkdirSync(outputFolder, { recursive: true });
	}

	const amazonqInstructionsPath = join(outputFolder, 'db-ux.md');
	if (!existsSync(amazonqInstructionsPath)) {
		writeFileSync(amazonqInstructionsPath, '');
	}

	const amazonqInstructionsContent = getInstructions(rootPath);

	if (amazonqInstructionsContent !== '') {
		let amazonqFileContent = readFileSync(amazonqInstructionsPath, 'utf8');
		const startMarker =
			'--- START: DB UX Amazon Q Instructions \u2013 do not edit below ---';
		const endMarker =
			'--- END: DB UX Amazon Q Instructions \u2013 do not edit above ---';
		const startIndex = amazonqFileContent.indexOf(startMarker);
		const endIndex = amazonqFileContent.indexOf(endMarker);
		if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
			amazonqFileContent = (
				amazonqFileContent.slice(0, startIndex) +
				amazonqFileContent.slice(endIndex + endMarker.length)
			).trim();
		}

		amazonqFileContent += `
${startMarker}

> **NOTE**: Always use "DB UX" components and variables as project's conventions
${amazonqInstructionsContent}

${endMarker}
`;

		writeFileSync(amazonqInstructionsPath, amazonqFileContent);
	}
};
