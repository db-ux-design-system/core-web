import { getTsProgram } from 'cem-plugin-expanded-types';
import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';
import { resolveTypesPlugin } from './scripts/resolveTypes.js';

const outdir = './dist';

const HEADING_TAGS = new Set([
	'db-heading-h-1',
	'db-heading-h-2',
	'db-heading-h-3',
	'db-heading-h-4',
	'db-heading-h-5',
	'db-heading-h-6',
	'db-custom-heading'
]);

const getDocumentationPath = (tag) =>
	HEADING_TAGS.has(tag) ? 'data-display/heading' : tag.replace('db-', '');

const vsCodeOptions = {
	outdir,
	cssFileName: null
};

const intellijOptions = {
	outdir,
	excludeCss: true,
	referenceTemplate: (name, tag) => ({
		name: 'Documentation',
		url: `https://design-system.deutschebahn.com/core-web/review/main/components/${getDocumentationPath(tag)}/properties`
	})
};

export default {
	globs: ['src'],
	outdir,
	stencil: true,
	overrideModuleCreation: ({ ts, globs }) => {
		const program = getTsProgram(ts, globs);
		const sourceFiles = program.getSourceFiles();
		const filteredFiles = [];

		// Wired issue .filter() didn't work
		sourceFiles.forEach((sf) => {
			if (sf.fileName.includes('node_modules')) {
				return false;
			}
			const foundGlob = globs.find((glob) => sf.fileName.includes(glob));
			if (foundGlob) {
				filteredFiles.push(sf);
			}
		});
		return filteredFiles;
	},
	plugins: [
		resolveTypesPlugin(({ customElementsManifest }) => {
			generateVsCodeCustomElementData(
				customElementsManifest,
				vsCodeOptions
			);
			generateJetBrainsWebTypes(customElementsManifest, intellijOptions);
		})
	]
};
