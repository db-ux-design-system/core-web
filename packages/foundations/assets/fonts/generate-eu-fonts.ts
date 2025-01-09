import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { glob } from 'glob';

const execAsync = promisify(exec);

const generateFonts = async () => {
	console.log('Generating EU fonts...');
	try {
		await execAsync('pyftsubset --help');
	} catch (e) {
		console.warn(
			'You need to install pyftsubset. Check packages/foundations/assets/fonts/README.md for more information.'
		);
	}

	try {
		const files = await glob('**/*.ttf');
		const commands = files.map((file) =>
			[
				'pyftsubset',
				file,
				'--layout-features=*',
				'--flavor=woff2',
				'--unicodes-file=unicode-eu.txt',
				`--output-file=${file.replace('.ttf', '-EU.woff2')}`
			].join(' ')
		);

		for (const command of commands) {
			const { stdout, stderr } = await execAsync(command);
			if (stdout) console.log(`stdout: ${stdout}`);
			if (stderr) console.error(`stderr: ${stderr}`);
		}
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

void generateFonts();
