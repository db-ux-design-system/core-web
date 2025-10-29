import fs from 'node:fs';
import path from 'node:path';
import { getInstructions } from '../utils';

export const generateCopilot = (rootPath: string) => {
	const outputFolder = path.resolve(rootPath, '.github');

	if (!fs.existsSync(outputFolder)) {
		fs.mkdirSync(outputFolder, { recursive: true });
	}

	const copilotInstructionsPath = path.join(
		outputFolder,
		'copilot-instructions.md'
	);
	if (!fs.existsSync(copilotInstructionsPath)) {
		fs.writeFileSync(copilotInstructionsPath, '');
	}

	const copilotInstructionsContent = getInstructions(rootPath);

	if (copilotInstructionsContent) {
		let copilotFileContent = fs.readFileSync(
			copilotInstructionsPath,
			'utf8'
		);
		const startMarker =
			'--- START: DB UX Copilot Instructions – do not edit below ---';
		const endMarker =
			'--- END: DB UX Copilot Instructions – do not edit above ---';
		const startIndex = copilotFileContent.indexOf(startMarker);
		const endIndex = copilotFileContent.indexOf(endMarker);
		if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
			copilotFileContent = (
				copilotFileContent.slice(0, startIndex) +
				copilotFileContent.slice(endIndex + endMarker.length)
			).trim();
		}

		copilotFileContent += `
${startMarker}

> **NOTE**: Always use "DB UX" components and variables as project's conventions
${copilotInstructionsContent}

${endMarker}
		`;

		fs.writeFileSync(copilotInstructionsPath, copilotFileContent);
	}
};
