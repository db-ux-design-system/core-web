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

const ruleName = 'db-ui/use-border-radius';

const messages = ruleMessages(ruleName, {
	rejected: (prop: string, value: string) =>
		`Unexpected value: ${value} within prop: ${prop}.\n` +
		"Please use 'db-border-radius-xx' instead of px or rem."
});

const meta = {
	url: 'https://github.com/db-ui/mono/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: [{ include: 'border', and: ['radius'] }]
};
const allowedValues: AllowedType = {
	includes: ['db-border-radius'],
	exact: DefaultExact
};

const useBorderRadius = createRule({
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

export default useBorderRadius;
