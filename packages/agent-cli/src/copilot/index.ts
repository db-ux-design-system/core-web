import fs from 'fs';
import path from 'path';

function findAllNodeModulesDirs(dir: string, found: string[] = []): string[] {
	if (!fs.existsSync(dir)) return found;
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.isDirectory()) {
			if (entry.name === 'node_modules') {
				found.push(path.join(dir, entry.name));
			} else if (!entry.name.startsWith('.')) {
				findAllNodeModulesDirs(path.join(dir, entry.name), found);
			}
		}
	}
	return found;
}

export const generateCopilot = (rootPath: string) => {
	const outputFolder = path.resolve(rootPath, '.github');

	const nodeModulesDirs = findAllNodeModulesDirs(rootPath);
	if (nodeModulesDirs.length === 0) {
		console.error('No node_modules folders found.');
		return;
	}

	let copilotInstructionsContent = '';

	for (const nodeModulesPath of nodeModulesDirs) {
		const dbUxPath = path.join(nodeModulesPath, '@db-ux');
		if (!fs.existsSync(dbUxPath)) {
			continue;
		}
		const packages = fs.readdirSync(dbUxPath, { withFileTypes: true });
		for (const pkg of packages) {
			if (pkg.isDirectory()) {
				const instructionsPath = path.join(
					dbUxPath,
					pkg.name,
					'agent',
					'_instructions.md'
				);
				if (fs.existsSync(instructionsPath)) {
					let content = fs.readFileSync(instructionsPath, 'utf-8');
					const relPath = path.relative(
						rootPath,
						path.join(dbUxPath, pkg.name)
					);
					content = content.replace(
						/__agent-path__/g,
						relPath.replace(/\\/g, '/')
					);
					copilotInstructionsContent += `\n# @db-ux/${pkg.name}\n${content}\n`;
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
			'utf-8'
		);
		const startMarker = '--- START: DB UX Copilot Instructions ---';
		const endMarker = '--- END: DB UX Copilot Instructions ---';
		const startIdx = copilotFileContent.indexOf(startMarker);
		const endIdx = copilotFileContent.indexOf(endMarker);
		if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
			copilotFileContent = (
				copilotFileContent.slice(0, startIdx) +
				copilotFileContent.slice(endIdx + endMarker.length)
			).trim();
		}

		copilotFileContent += `\n${startMarker}\n${copilotInstructionsContent}\n${endMarker}\n`;

		fs.writeFileSync(copilotInstructionsPath, copilotFileContent);
	}
};
