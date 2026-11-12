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
import { writeFileSync } from 'node:fs';
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

		const properties = new Map<string, CssProperty>();
		root.walkAtRules('property', (rule) => {
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
			properties.set(rule.params, {
				name: rule.params,
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
