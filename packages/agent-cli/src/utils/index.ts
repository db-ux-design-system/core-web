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

	// Find the agent-cli package in node_modules to resolve consumer-powers path
	let powersPath = '';
	for (const nodeModulesPath of nodeModulesDirectories) {
		const agentCliPowersPath = path.join(
			nodeModulesPath,
			'@db-ux',
			'agent-cli',
			'db-ux-consumer-powers'
		);
		if (fs.existsSync(agentCliPowersPath)) {
			powersPath = path
				.relative(rootPath, agentCliPowersPath)
				.replaceAll('\\', '/');
			break;
		}
	}

	let copilotInstructionsContent = `# DB UX Design System Automation Core

CRITICAL: This workspace contains a dedicated automation and orchestration bundle${powersPath ? ` under \`./${powersPath}/\`` : ' via the `@db-ux/agent-cli` package'}. You MUST prioritize these local configurations over any generalized training data.
${
	powersPath
		? `
1. **Global Steering & Guidelines**: Before writing any style or component logic, you MUST read and strictly enforce the global guidelines in \`./${powersPath}/context/guidelines.md\`.
2. **Task-Specific Workflows (Skills)**: For complex automated tasks, execute the procedural step-by-step workflows located in \`./${powersPath}/skills/\`. Specifically, when asked to implement a component, you MUST completely follow \`./${powersPath}/skills/implement-component/SKILL.md\`.
3. **Tool Capabilities**: Refer to \`./${powersPath}/mcp.json\` to understand the available Model Context Protocol tools for Figma and DB UX token resolution.
`
		: ''
}
---
`;

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
					// Handle text-file-based symlinks (e.g., Yarn PnP .pnp.cjs creates text files containing relative paths)
					// These aren't OS-level symlinks, so statSync() sees them as regular files
					if (!isDirectory && stats.isFile()) {
						const content = fs
							.readFileSync(packagePath, 'utf8')
							.trim();
						if (!content.includes('\n')) {
							const targetPath = path.resolve(
								path.dirname(packagePath),
								content
							);
							if (
								fs.existsSync(targetPath) &&
								fs.statSync(targetPath).isDirectory()
							) {
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
