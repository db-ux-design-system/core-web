/**
 * PostCSS plugin (postcss.config.cjs, before cssnano): reads the documented
 * CSS custom properties of a component from its compiled CSS and writes them
 * next to it as `build/components/<name>/<name>.css-properties.json`.
 *
 * A property is documented by an `@property` rule with a `/** *\/` comment
 * right above it (see src/styles/internal/_form-components.properties.scss):
 *
 *   /**
 *    * Minimum inline size of the form field.
 *    * @default var(--db-sizing-lg)
 *    *\/
 *   @property --db-form-component-min-inline-size { syntax: "*"; inherits: true; }
 *
 * The Storybook overview pages show the JSON as "CSS custom properties"
 * (storybooks/_shared/overview/generate-overviews.ts). Runs before cssnano,
 * which removes the comments.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, sep } from 'node:path';
import type { AtRule, Comment, PluginCreator } from 'postcss';

/** @public */
export type CssProperty = {
	name: string;
	description: string;
	default?: string;
	syntax?: string;
	inherits?: boolean;
};

const COMPONENTS = `${sep}build${sep}components${sep}`;

// `/* @css-properties <name> */` opens the properties of a
// `_<name>.properties.scss` in the compiled CSS. A component documents only
// the properties files its own `<name>.scss` loads: its CSS also contains
// those of nested components (DBShell includes the DBDrawer styles).
const MARKER = /^@css-properties\s+([\w-]+)$/;
const USE = /@use\s+["'][^"']*?([\w-]+)\.properties["']/g;

/** Names of the properties files the component source loads. */
const getOwners = (file: string): Set<string> => {
	const source = file
		.replace(COMPONENTS, `${sep}src${sep}components${sep}`)
		.replace(/\.css$/, '.scss');
	return existsSync(source)
		? new Set(
				[...readFileSync(source, 'utf8').matchAll(USE)].map(
					(match) => match[1]
				)
			)
		: new Set();
};

/** `/** text *\/` -> description and tags; undefined without a doc comment. */
const parseComment = (
	comment: Comment
): Pick<CssProperty, 'description' | 'default'> | undefined => {
	// PostCSS strips `/*` and `*/`, a doc comment keeps its leading `*`.
	if (!comment.text.startsWith('*')) {
		return undefined;
	}

	const lines = comment.text
		.slice(1)
		.split('\n')
		.map((line) => line.replace(/^\s*\*?\s?/, '').trimEnd());
	const description: string[] = [];
	let defaultValue: string | undefined;
	for (const line of lines) {
		const tag = /^@(\w+)\s+(.*)$/.exec(line);
		if (tag?.[1] === 'default') {
			defaultValue = tag[2].trim();
		} else if (!tag) {
			description.push(line);
		}
	}

	return {
		description: description.join(' ').replaceAll(/\s+/g, ' ').trim(),
		...(defaultValue ? { default: defaultValue } : {})
	};
};

const getDeclaration = (rule: AtRule, property: string) => {
	let value: string | undefined;
	rule.walkDecls(property, (declaration) => {
		value = declaration.value;
	});
	return value;
};

/** @public */
const cssProperties: PluginCreator<never> = () => ({
	postcssPlugin: 'db-ux-css-properties',
	OnceExit(root, { result }) {
		const file = result.opts.from;
		// Only the CSS of a component (build/components/<name>/<name>.css), not
		// the bundles, which contain the properties of every component.
		if (
			!file?.includes(COMPONENTS) ||
			basename(file, '.css') !== basename(dirname(file))
		) {
			return;
		}

		const owners = getOwners(file);
		const properties = new Map<string, CssProperty>();
		let owner: string | undefined;
		root.walk((node) => {
			if (node.type === 'comment') {
				owner = MARKER.exec(node.text.trim())?.[1] ?? owner;
				return;
			}

			// A properties file holds only `@property` rules: the first
			// other rule ends its block, so a later `@property` (e.g. of a
			// nested module without a marker) is not attributed to it.
			if (node.type !== 'atrule' || node.name !== 'property') {
				if (node.parent === root) {
					owner = undefined;
				}

				return;
			}

			if (!owner || !owners.has(owner)) {
				return;
			}

			const rule = node;
			const previous = rule.prev();
			const docs =
				previous?.type === 'comment'
					? parseComment(previous)
					: undefined;
			if (!docs) {
				return;
			}

			const syntax = getDeclaration(rule, 'syntax');
			const inherits = getDeclaration(rule, 'inherits');
			// `@default` documents defaults initial-value cannot express
			// (tokens, values per variant); otherwise the initial value.
			const initialValue = getDeclaration(rule, 'initial-value');
			properties.set(rule.params, {
				name: rule.params,
				...(initialValue ? { default: initialValue } : {}),
				...docs,
				...(syntax
					? { syntax: syntax.replaceAll(/^["']|["']$/g, '') }
					: {}),
				...(inherits ? { inherits: inherits === 'true' } : {})
			});
		});

		if (properties.size === 0) {
			return;
		}

		writeFileSync(
			join(
				dirname(file),
				`${basename(file, '.css')}.css-properties.json`
			),
			`${JSON.stringify(
				[...properties.values()].sort((a, b) =>
					a.name.localeCompare(b.name)
				),
				null,
				'\t'
			)}\n`
		);
	}
});

cssProperties.postcss = true;

export default cssProperties;
