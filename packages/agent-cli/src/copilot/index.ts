import fs from 'node:fs';
import path from 'node:path';

function findAllNodeModulesDirectories(
	directory: string,
	found: string[] = []
): string[] {
	if (!fs.existsSync(directory)) {
		return found;
	}

	const entries = fs
		.readdirSync(directory, { withFileTypes: true })
		.sort((a, b) => a.name.localeCompare(b.name, 'en'));
	for (const entry of entries) {
		if (entry.isDirectory()) {
			if (entry.name === 'node_modules') {
				found.push(path.join(directory, entry.name));
			} else if (!entry.name.startsWith('.')) {
				findAllNodeModulesDirectories(
					path.join(directory, entry.name),
					found
				);
			}
		}
	}

	return found;
}

export const generateCopilot = (rootPath: string) => {
	const outputFolder = path.resolve(rootPath, '.github');

	const nodeModulesDirectories = findAllNodeModulesDirectories(rootPath);
	if (nodeModulesDirectories.length === 0) {
		console.error('No node_modules folders found.');
		return;
	}

	let copilotInstructionsContent = '';

	for (const nodeModulesPath of nodeModulesDirectories) {
		const databaseUxPaths = [
			path.join(nodeModulesPath, '@db-ux/'),
			path.join(nodeModulesPath, '@db-ux-inner-source/')
		];

		for (const databaseUxPath of databaseUxPaths) {
			if (!fs.existsSync(databaseUxPath)) {
				continue;
			}

			const packages = fs.readdirSync(databaseUxPath, {
				withFileTypes: true
			});
			for (const package_ of packages) {
				if (package_.isDirectory()) {
					const instructionsPath = path.join(
						databaseUxPath,
						package_.name,
						'agent',
						'_instructions.md'
					);
					if (fs.existsSync(instructionsPath)) {
						let content = fs.readFileSync(instructionsPath, 'utf8');
						const relativePath = path.relative(
							rootPath,
							path.join(databaseUxPath, package_.name)
						);
						content = content
							.replaceAll(
								'__agent-path__',
								relativePath.replaceAll('\\', '/')
							)
							.replaceAll(
								'**agent-path**',
								relativePath.replaceAll('\\', '/')
							);
						copilotInstructionsContent += `\n# ${path.basename(databaseUxPath)}/${package_.name}\n${content}\n`;
					}
				}
			}
		}
	}

	if (!fs.existsSync(outputFolder)) {
		fs.mkdirSync(outputFolder);
	}

	const copilotInstructionsPath = path.join(
		outputFolder,
		'copilot-instructions.md'
	);
	if (!fs.existsSync(copilotInstructionsPath)) {
		fs.writeFileSync(copilotInstructionsPath, '');
	}

	if (copilotInstructionsContent.trim()) {
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
