import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { getInstructions } from '../utils';

export const generateCopilot = (rootPath: string) => {
	const outputFolder = resolve(rootPath, '.github');

	if (!existsSync(outputFolder)) {
		mkdirSync(outputFolder, { recursive: true });
	}

	const copilotInstructionsPath = join(
		outputFolder,
		'copilot-instructions.md'
	);
	if (!existsSync(copilotInstructionsPath)) {
		writeFileSync(copilotInstructionsPath, '');
	}

	const copilotInstructionsContent = getInstructions(rootPath);

	if (copilotInstructionsContent !== '') {
		let copilotFileContent = readFileSync(copilotInstructionsPath, 'utf8');
		const startMarker =
			'--- START: DB UX Copilot Instructions \u2013 do not edit below ---';
		const endMarker =
			'--- END: DB UX Copilot Instructions \u2013 do not edit above ---';
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

		writeFileSync(copilotInstructionsPath, copilotFileContent);
	}
};
