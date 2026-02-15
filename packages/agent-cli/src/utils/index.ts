import fs from 'node:fs';
import path from 'node:path';

function findAllNodeModulesDirectories(
	directory: string,
	found: Set<string> = new Set()
): Set<string> {
	if (!fs.existsSync(directory)) {
		return found;
	}

	const entries = fs
		.readdirSync(directory, { withFileTypes: true })
		.sort((a, b) => a.name.localeCompare(b.name, 'en'));
	for (const entry of entries) {
		const fullPath = path.resolve(directory, entry.name);
		// Use statSync to follow symlinks (important for pnpm compatibility)
		let isDirectory = false;
		try {
			const stats = fs.statSync(fullPath);
			isDirectory = stats.isDirectory();
		} catch {
			// Skip entries that can't be accessed
			continue;
		}

		if (isDirectory) {
			if (entry.name === 'node_modules') {
				found.add(fs.realpathSync(fullPath));
			} else if (!entry.name.startsWith('.')){
				findAllNodeModulesDirectories(fullPath, found);
			}
		}
	}

	return found;
}

export const getInstructions = (rootPath: string): string => {
	const nodeModulesDirectories = findAllNodeModulesDirectories(rootPath);
	if (nodeModulesDirectories.size === 0) {
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
				let packagePath = path.resolve(databaseUxPath, package_.name);
				// Use statSync to follow symlinks (important for pnpm compatibility)
				let isDirectory = false;
				try {
					const stats = fs.statSync(packagePath);
					isDirectory = stats.isDirectory();
					if (!isDirectory && stats.isFile()) {
						const content = fs.readFileSync(packagePath, 'utf8').trim();
						if (!content.includes('\n')) {
							const targetPath = path.resolve(path.dirname(packagePath), content);
							if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
								isDirectory = true;
								packagePath = targetPath;
							}
						}
					}
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
