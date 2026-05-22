import {
	existsSync,
	readdirSync,
	readFileSync,
	realpathSync,
	statSync
} from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';

function findAllNodeModulesDirectories(
	directory: string,
	found = new Set<string>()
): Set<string> {
	if (!existsSync(directory)) {
		return found;
	}

	const entries = readdirSync(directory, { withFileTypes: true }).sort(
		(a, b) => a.name.localeCompare(b.name, 'en')
	);
	for (const entry of entries) {
		const fullPath = resolve(directory, entry.name);
		let isDirectory = false;
		try {
			const stats = statSync(fullPath);
			isDirectory = stats.isDirectory();
		} catch {
			continue;
		}

		if (isDirectory) {
			if (entry.name === 'node_modules') {
				found.add(realpathSync(fullPath));
			} else if (!entry.name.startsWith('.')) {
				findAllNodeModulesDirectories(fullPath, found);
			}
		}
	}

	return found;
}

export const getInstructions = (rootPath: string): string => {
	const nodeModulesDirectories = findAllNodeModulesDirectories(rootPath);
	if (nodeModulesDirectories.size === 0) {
		console.error('No node_modules folders found in', rootPath);
		return '';
	}

	let copilotInstructionsContent = '';

	for (const nodeModulesPath of nodeModulesDirectories) {
		const databaseUxPaths = [
			join(nodeModulesPath, '@db-ux/'),
			join(nodeModulesPath, '@db-ux-inner-source/')
		];

		for (const databaseUxPath of databaseUxPaths) {
			if (!existsSync(databaseUxPath)) {
				continue;
			}

			const packages = readdirSync(databaseUxPath, {
				withFileTypes: true
			});
			for (const package_ of packages) {
				let packagePath = resolve(databaseUxPath, package_.name);
				let isDirectory = false;
				try {
					const stats = statSync(packagePath);
					isDirectory = stats.isDirectory();
					// Handle text-file-based symlinks (e.g., Yarn PnP .pnp.cjs creates text files containing relative paths)
					// These aren't OS-level symlinks, so statSync() sees them as regular files
					if (!isDirectory && stats.isFile()) {
						const content = readFileSync(
							packagePath,
							'utf8'
						).trim();
						if (!content.includes('\n')) {
							const targetPath = resolve(
								dirname(packagePath),
								content
							);
							if (
								existsSync(targetPath) &&
								statSync(targetPath).isDirectory()
							) {
								isDirectory = true;
								packagePath = targetPath;
							}
						}
					}
				} catch {
					continue;
				}

				if (isDirectory) {
					const instructionsPath = join(
						packagePath,
						'agent',
						'_instructions.md'
					);
					if (existsSync(instructionsPath)) {
						let content = readFileSync(instructionsPath, 'utf8');
						const relativePath = relative(rootPath, packagePath);
						content = content
							.replaceAll(
								'__agent-path__',
								relativePath.replaceAll('\\', '/')
							)
							.replaceAll(
								'**agent-path**',
								relativePath.replaceAll('\\', '/')
							);
						copilotInstructionsContent += `\n# ${basename(databaseUxPath)}/${package_.name}\n${content}\n`;
					}
				}
			}
		}
	}

	copilotInstructionsContent = copilotInstructionsContent.trim();

	return copilotInstructionsContent;
};
