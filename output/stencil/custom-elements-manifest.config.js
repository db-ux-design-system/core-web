import { getTsProgram } from 'cem-plugin-expanded-types';
import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';
import { getOverviewTarget } from '../../storybooks/_shared/overview/structure.ts';
import { resolveTypesPlugin } from './scripts/resolveTypes.js';

const outdir = './dist';

/*
 * Documentation link of every element in the IDE (web-types.json): the
 * overview page of the Web Components Storybook of the latest release. Parts
 * are documented on the page of their main component (`#dbtabitem` on the
 * DBTabs page), resolved by the same module as the overview pages.
 */
const STORYBOOK =
	'https://design-system.deutschebahn.com/core-web/version/latest/stencil-storybook';

const getDocumentationUrl = (tag) => {
	// Examples of the showcases in a local build are no components.
	const target = tag.startsWith('db-')
		? getOverviewTarget(tag.slice('db-'.length))
		: undefined;
	return `${STORYBOOK}/?path=/docs/${target ?? 'getting-started--docs'}`;
};

const vsCodeOptions = {
	outdir,
	cssFileName: null
};

const intellijOptions = {
	outdir,
	excludeCss: true,
	referenceTemplate: (name, tag) => ({
		name: 'Documentation',
		url: getDocumentationUrl(tag)
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
