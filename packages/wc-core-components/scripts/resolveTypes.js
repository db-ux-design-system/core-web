import { analyzePhase } from './analyzePhase.js';
import { packageLinkPhase } from './packageLinkPhase.js';

export const resolveTypesPlugin = (postFn) => {
	return {
		name: 'resolve-types-plugin',
		analyzePhase,
		packageLinkPhase: ({ customElementsManifest, context }) =>
			packageLinkPhase({ customElementsManifest, context }, postFn)
	};
};
