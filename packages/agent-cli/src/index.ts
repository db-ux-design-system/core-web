import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { generateAmazonQ } from './amazonq';
import { generateCopilot } from './copilot';

export const action = async (rootPath = '.') => {
	const hasCopilot = existsSync(
		join(rootPath, '.github', 'copilot-instructions.md')
	);
	const hasAmazonQ = existsSync(join(rootPath, '.amazonq', 'rules'));

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
