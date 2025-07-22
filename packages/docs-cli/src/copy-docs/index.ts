import fs from 'fs';
import path from 'path';

/**
 * Copy documentation folders from @db-ux packages to a central location.
 */
export const copyDocs = (rootPath: string) => {
	const nodeModulesPath = path.resolve(rootPath, 'node_modules');
	const outputFolder = path.resolve(rootPath, '_db-ux-docs');

	if (!fs.existsSync(nodeModulesPath)) {
		console.error('node_modules folder not found.');
		return;
	}

	if (!fs.existsSync(outputFolder)) {
		fs.mkdirSync(outputFolder);
	} else {
		fs.rm(outputFolder);
	}

	const dbUxPath = path.join(nodeModulesPath, '@db-ux');

	if (!fs.existsSync(dbUxPath)) {
		console.error('@db-ux folder not found in node_modules.');
		return;
	}

	const packages = fs.readdirSync(dbUxPath, { withFileTypes: true });

	for (const pkg of packages) {
		if (pkg.isDirectory()) {
			const docsPath = path.join(dbUxPath, pkg.name, 'docs');
			const readmePath = path.join(dbUxPath, pkg.name, 'README.md');
			const targetPath = path.join(outputFolder, pkg.name);

			fs.mkdirSync(targetPath, { recursive: true });

			if (fs.existsSync(readmePath)) {
				fs.copyFileSync(
					readmePath,
					path.join(outputFolder, pkg.name, 'README.md')
				);
			}

			if (fs.existsSync(docsPath)) {
				fs.readdirSync(docsPath).forEach((file) => {
					const sourceFile = path.join(docsPath, file);
					const targetFile = path.join(targetPath, file);

					fs.copyFileSync(sourceFile, targetFile);
				});

				console.log(`Copied docs for ${pkg.name} to ${targetPath}`);
			}
		}
	}

	console.log('Documentation copy process completed.');
};
