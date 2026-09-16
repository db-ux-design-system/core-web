import { getTsProgram } from 'cem-plugin-expanded-types';
import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';
import { resolveTypesPlugin } from './scripts/resolveTypes.js';

const outdir = './dist';

// Elements that are documented on another element's page, because they belong to a
// component family. The Patternhub lists them there via `elements` in
// `components.json`, so their own tag name resolves to no page.
const FAMILY_DOCUMENTATION_PATHS = new Map([
	['db-heading-h-1', 'data-display/heading'],
	['db-heading-h-2', 'data-display/heading'],
	['db-heading-h-3', 'data-display/heading'],
	['db-heading-h-4', 'data-display/heading'],
	['db-heading-h-5', 'data-display/heading'],
	['db-heading-h-6', 'data-display/heading'],
	['db-custom-heading', 'data-display/heading'],
	['db-pagination-item', 'navigation/pagination']
]);

const getDocumentationPath = (tag) =>
	FAMILY_DOCUMENTATION_PATHS.get(tag) ?? tag.replace('db-', '');

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
