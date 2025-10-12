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
		const fullPath = path.join(directory, entry.name);
		// Use statSync to follow symlinks (important for pnpm compatibility)
		let isDirectory = false;
		try {
			isDirectory = fs.statSync(fullPath).isDirectory();
		} catch {
			// Skip entries that can't be accessed
			continue;
		}

		if (isDirectory) {
			if (entry.name === 'node_modules') {
				found.push(fullPath);
			} else if (!entry.name.startsWith('.')) {
				findAllNodeModulesDirectories(fullPath, found);
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
				const packagePath = path.join(databaseUxPath, package_.name);
				// Use statSync to follow symlinks (important for pnpm compatibility)
				let isDirectory = false;
				try {
					isDirectory = fs.statSync(packagePath).isDirectory();
				} catch {
					// Skip entries that can't be accessed
					continue;
				}

				if (isDirectory) {
					const instructionsPath = path.join(
						packagePath,
						'agent',
						'_instructions.md'
					);
					if (fs.existsSync(instructionsPath)) {
						let content = fs.readFileSync(instructionsPath, 'utf8');
						const relativePath = path.relative(
							rootPath,
							packagePath
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

		copilotFileContent += `\n${startMarker}\n${copilotInstructionsContent}\n${endMarker}\n`;

		fs.writeFileSync(copilotInstructionsPath, copilotFileContent);
	}
};
