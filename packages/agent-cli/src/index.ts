import fs from 'node:fs';
import path from 'node:path';
import { generateAmazonQ } from './amazonq';
import { generateCopilot } from './copilot';

export const action = async (rootPath: string = '.') => {
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
