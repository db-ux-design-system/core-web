import fs from 'node:fs';
import path from 'node:path';
import { getInstructions } from '../utils';

export const generateAmazonQ = (rootPath: string) => {
	const outputFolder = path.resolve(rootPath, '.amazonq', 'rules');

	if (!fs.existsSync(outputFolder)) {
		fs.mkdirSync(outputFolder, { recursive: true });
	}

	const amazonqInstructionsPath = path.join(outputFolder, 'db-ux.md');
	if (!fs.existsSync(amazonqInstructionsPath)) {
		fs.writeFileSync(amazonqInstructionsPath, '');
	}

	const amazonqInstructionsContent = getInstructions(rootPath);

	if (amazonqInstructionsContent) {
		let amazonqFileContent = fs.readFileSync(
			amazonqInstructionsPath,
			'utf8'
		);
		const startMarker =
			'--- START: DB UX Amazon Q Instructions – do not edit below ---';
		const endMarker =
			'--- END: DB UX Amazon Q Instructions – do not edit above ---';
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

		fs.writeFileSync(amazonqInstructionsPath, amazonqFileContent);
	}
};
