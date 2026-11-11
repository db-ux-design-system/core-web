import { getTsProgram } from 'cem-plugin-expanded-types';
import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';
import { readdirSync, readFileSync } from 'node:fs';
import { resolveTypesPlugin } from './scripts/resolveTypes.js';

const outdir = './dist';

/*
 * Documentation link of every element in the IDE (web-types.json): the
 * overview page of the Web Components Storybook of the latest release.
 * Parts are documented on the page of their main component, below a heading
 * with their name (`#dbtabitem` on the DBTabs page). The structure follows
 * storybooks/_shared/overview/meta.ts: the folder name prefix
 * (`table-row` -> `table`) plus `partOf` in overrides.json.
 */
const STORYBOOK =
	'https://design-system.deutschebahn.com/core-web/version/latest/stencil-storybook';
const COMPONENTS = new URL(
	'../../packages/components/src/components/',
	import.meta.url
);
const FOLDERS = readdirSync(COMPONENTS);
const OVERRIDES = JSON.parse(
	readFileSync(
		new URL(
			'../../storybooks/_shared/overview/overrides.json',
			import.meta.url
		),
		'utf8'
	)
);
/** Elements without a folder of their own. */
const FAMILY = new Map([['custom-heading', 'heading']]);
/** No overview page (no examples): the Getting Started page instead. */
const NO_OVERVIEW = new Set(['page']);

/** Longest folder that is `name` or starts it (`heading` for `heading-h-1`). */
const findFolder = (name) =>
	FOLDERS.filter((folder) => name === folder || name.startsWith(`${folder}-`))
		.sort((a, b) => b.length - a.length)
		.at(0);

/** Main component of a folder, e.g. `tab-item` -> `tabs`. */
const findMain = (folder) => {
	const partOf = OVERRIDES[folder]?.partOf;
	if (partOf) {
		return findMain(partOf);
	}

	const prefix = FOLDERS.filter(
		(other) => other !== folder && folder.startsWith(`${other}-`)
	)
		.sort((a, b) => b.length - a.length)
		.at(0);
	return prefix ? findMain(prefix) : folder;
};

const toId = (name) => `db${name.replaceAll('-', '')}`;

const getDocumentationUrl = (tag) => {
	const name = tag.replace(/^db-/, '');
	const folder = FAMILY.get(name) ?? findFolder(name) ?? name;
	const main = findMain(folder);
	// Examples of the showcases in a local build are no components.
	if (!tag.startsWith('db-') || NO_OVERVIEW.has(main)) {
		return `${STORYBOOK}/?path=/docs/getting-started--docs`;
	}

	const anchor = name === main ? '' : `#${toId(name)}`;
	return `${STORYBOOK}/?path=/docs/components-${toId(main)}-overview--docs${anchor}`;
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
