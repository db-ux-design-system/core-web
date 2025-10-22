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

export const getInstructions = (rootPath: string): string => {
	let copilotInstructionsContent = '';
	const nodeModulesDirectories = findAllNodeModulesDirectories(rootPath);
	if (nodeModulesDirectories.length === 0) {
		console.error('No node_modules folders found.');
		return '';
	}

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

	copilotInstructionsContent = copilotInstructionsContent.trim();

	return copilotInstructionsContent;
};
