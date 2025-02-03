import stylelint from 'stylelint';
import { createRule } from '../shared/create-rule.js';
import {
	type AllowedType,
	DefaultExact,
	getDeclarationRuleFunction
} from '../shared/index.js';

const {
	utils: { ruleMessages }
} = stylelint;

const ruleName = 'db-ui/use-border-height';

const messages = ruleMessages(ruleName, {
	rejected: (prop: string, value: string) =>
		`Unexpected value: ${value} within prop: ${prop}.\n` +
		"Please use 'db-border-height-xx' instead of px or rem."
});

const meta = {
	url: 'https://github.com/db-ui/mono/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: [{ include: 'border', and: ['height'] }],
	exact: ['border']
};
const allowedValues: AllowedType = {
	includes: ['db-border-height'],
	exact: DefaultExact,
	type: 'some'
};

const useBorderHeight = createRule({
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

export default useBorderHeight;
