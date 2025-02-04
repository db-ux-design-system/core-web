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

const ruleName = 'db-ui/use-border-radius';

const messages = ruleMessages(ruleName, {
	rejected: (property: string, value: string) =>
		`Unexpected value: ${value} within prop: ${property}.\n` +
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
	exact: defaultExact
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
