import stylelint from 'stylelint';
import { createRule } from '../shared/create-rule.js';
import {
	type AllowedType,
	defaultExact,
	getDeclarationRuleFunction
} from '../shared/index.js';

const {
	utils: { ruleMessages }
} = stylelint;

const ruleName = 'db-ux/use-sizing';

const messages = ruleMessages(ruleName, {
	rejected: (property: string, value: string) =>
		`Unexpected value: ${value} within prop: ${property}.\n` +
		"Please use 'db-sizing-*', '%', 'lh', 'vw', 'vh', 'db-screen-*', or 'db-container-*' instead."
});

const meta = {
	url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: ['block-size', 'inline-size'],
	exact: [
		'height',
		'width',
		'min-height',
		'min-width',
		'max-height',
		'max-width'
	]
};
const allowedValues: AllowedType = {
	includes: [
		'db-sizing',
		'db-screen',
		'db-border-width',
		'db-container',
		'%',
		'lh',
		'ch',
		'vw',
		'vh'
	],
	exact: [
		...defaultExact,
		'fit-content',
		'max-content',
		'min-content',
		'revert',
		'revert-layer',
		'none'
	]
};

const useSizing = createRule({
	ruleName,
	meta,
	messages,
	fn: getDeclarationRuleFunction({
		allowedDeclarations,
		allowedValues,
		messages,
		ruleName
	})
});

export default useSizing;
