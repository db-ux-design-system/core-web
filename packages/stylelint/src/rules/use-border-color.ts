import stylelint from 'stylelint';
import { createRule } from '../shared/create-rule.js';
import {
	type AllowedType,
	borderPropertiesExact,
	defaultColorsExact,
	defaultExact,
	getDeclarationRuleFunction
} from '../shared/index.js';

const {
	utils: { ruleMessages }
} = stylelint;

const ruleName = 'db-ux/use-border-color';

const messages = ruleMessages(ruleName, {
	rejected: (property: string, value: string) =>
		`Unexpected value: ${value} within prop: ${property}.\n` +
		"Please use 'db-xx-on-bg-emphasis-[100|90|80|70|60|50]' instead."
});

const meta = {
	url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: [{ include: 'border', and: ['color'] }],
	exact: borderPropertiesExact
};
const allowedValues: AllowedType = {
	includes: [
		{
			include: 'on-bg-basic-emphasis',
			or: ['100', '90', '80', '70', '60', '50']
		},
		{ include: 'on-bg-inverted' },
		/*
		 * Adaptive-coloring border roles, used either as the raw custom property
		 * (`var(--db-border-default)`) or via the `variables.adaptive` SCSS alias
		 * (`adaptive.$db-border-default`). Covers the three border roles and their
		 * `alt-state` variants: `db-[alt-state-]border-default|vibrant|decorative`.
		 */
		{ include: 'db-border-', or: ['default', 'vibrant', 'decorative'] },
		{
			include: 'db-alt-state-border-',
			or: ['default', 'vibrant', 'decorative']
		},
		/*
		 * The checked switch track paints its border with the alt-state surface
		 * color so the track reads as a solid pill (see switch.adaptive.scss).
		 */
		{ include: 'db-alt-state-bg-default' }
	],
	exact: [...defaultExact, ...defaultColorsExact],
	type: 'some'
};

/*
 * Tokens of a `border` shorthand that are NOT a color: the line-style keyword
 * and any width token (a `db-border-width-*` token or a bare length). They are
 * stripped before the color check so a shorthand that declares only width and
 * style (e.g. `border-block-start: $db-border-width-3xs solid;`) is valid -
 * there is no color to validate. The width itself is enforced by
 * `db-ux/use-border-width`.
 */
const borderStyleKeywordsExact: string[] = [
	'none',
	'hidden',
	'solid',
	'dashed',
	'dotted',
	'double',
	'groove',
	'ridge',
	'inset',
	'outset'
];
const neutralValues: AllowedType = {
	includes: ['db-border-width'],
	startsWith: ['calc('],
	exact: [...borderStyleKeywordsExact],
	// Bare width lengths (e.g. `1px`, `0.5rem`) carry no color either.
	type: 'some'
};

const useBorderColor = createRule({
	ruleName,
	meta,
	messages,
	fn: getDeclarationRuleFunction({
		allowedDeclarations,
		allowedValues,
		neutralValues,
		messages,
		ruleName
	})
});

export default useBorderColor;
