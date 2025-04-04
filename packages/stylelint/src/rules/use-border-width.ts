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

const ruleName = 'db-ux/use-border-width';

const messages = ruleMessages(ruleName, {
	rejected: (property: string, value: string) =>
		`Unexpected value: ${value} within prop: ${property}.\n` +
		"Please use 'db-border-width-xx' instead of px or rem."
});

const meta = {
	url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: [{ include: 'border', and: ['height'] }],
	exact: ['border']
};
const allowedValues: AllowedType = {
	includes: ['db-border-width'],
	exact: defaultExact,
	type: 'some'
};

const useBorderWidth = createRule({
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

export default useBorderWidth;
