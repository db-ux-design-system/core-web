import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateAmazonQ } from './amazonq';
import { generateCopilot } from './copilot';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copyPowers = (rootPath: string) => {
	const source = path.resolve(__dirname, '..', 'db-ux-consumer-powers');
	const destination = path.resolve(rootPath, 'db-ux-powers');

	if (!fs.existsSync(source)) {
		throw new Error(
			`db-ux-consumer-powers source folder not found at ${source}. Ensure the package is built correctly.`
		);
	}

	fs.cpSync(source, destination, { recursive: true, force: true });
};

export const action = async (rootPath: string = '.') => {
	copyPowers(rootPath);

	const hasCopilot = fs.existsSync(
		path.join(rootPath, '.github', 'copilot-instructions.md')
	);
	const hasAmazonQ = fs.existsSync(path.join(rootPath, '.amazonq', 'rules'));

	if (!hasCopilot && !hasAmazonQ) {
		generateCopilot(rootPath);
		generateAmazonQ(rootPath);
	} else if (hasCopilot && hasAmazonQ) {
		generateCopilot(rootPath);
		generateAmazonQ(rootPath);
	} else if (hasCopilot) {
		generateCopilot(rootPath);
	} else {
		generateAmazonQ(rootPath);
	}
};
