import fs from 'node:fs';
import path from 'node:path';

function findAllNodeModulesDirectories(
	directory: string,
	found: string[] = [],
	visited: Set<string> = new Set()
): string[] {
	if (!fs.existsSync(directory)) {
		return found;
	}

	const realPath = fs.realpathSync(directory);
	if (visited.has(realPath)) {
		return found;
	}
	visited.add(realPath);

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
				const path = fs.realpathSync(fullPath);
				found.push(path);
				visited.add(path);
			} else {
				findAllNodeModulesDirectories(fullPath, found, visited);
			}
		}
	}

	return found;
}

export const getInstructions = (rootPath: string): string => {
	const nodeModulesDirectories = findAllNodeModulesDirectories(rootPath);
	if (nodeModulesDirectories.length === 0) {
		return 'No node_modules folders found.';
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

	copilotInstructionsContent = copilotInstructionsContent.trim();

	return copilotInstructionsContent;
};
