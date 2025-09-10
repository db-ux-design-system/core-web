import { glob } from 'glob';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename).replaceAll('\\', '/');

// Security: Using execFile instead of exec to eliminate shell injection risks
// execFile directly executes the binary without involving a shell
const execFileAsync = promisify(execFile);

const generateFonts = async () => {
	console.log('Generating EU fonts...');
	try {
		// Security: Using array arguments instead of concatenated string
		// This prevents shell interpretation of special characters
		await execFileAsync('pyftsubset', ['--help']);
	} catch (e) {
		console.warn(
			'You need to install pyftsubset. Check packages/foundations/assets/fonts/README.md for more information.'
		);
	}

	try {
		const files = await glob(`${__dirname}/*.ttf`);

		for (const file of files) {
			// Security: Validate that the file is within the expected directory
			// and has the expected extension to prevent path traversal attacks
			if (!file.startsWith(__dirname) || !file.endsWith('.ttf')) {
				console.warn(`Skipping potentially unsafe file path: ${file}`);
				continue;
			}

			// Security: Arguments are passed as separate array elements
			// No shell concatenation means no risk of command injection
			const args = [
				file,
				'--layout-features=*',
				'--flavor=woff2',
				`--unicodes-file=${__dirname}/unicode-eu.txt`,
				`--output-file=${file.replace('.ttf', '-EU.woff2')}`
			];

			// Security: execFile provides better performance and type safety
			// as it doesn't spawn a shell process
			const { stdout, stderr } = await execFileAsync('pyftsubset', args);
			if (stdout) console.log(`stdout: ${stdout}`);
			if (stderr) console.error(`stderr: ${stderr}`);
		}
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

void generateFonts();
