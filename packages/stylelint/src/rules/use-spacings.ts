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

const ruleName = 'db-ui/use-spacings';

const messages = ruleMessages(ruleName, {
	rejected: (prop: string, value: string) =>
		`Unexpected value: ${value} within prop: ${prop}.\n` +
		"Please use 'db-spacing-[fixed|responsive]-xx' instead of px or rem."
});

const meta = {
	url: 'https://github.com/db-ui/mono/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: ['margin', 'padding'],
	exact: ['gap']
};
const allowedValues: AllowedType = {
	includes: [
		'db-spacing-fixed',
		'db-spacing-responsive',
		'db-sizing',
		'%',
		'vw',
		'vh'
	],
	exact: DefaultExact
};

const useSpacings = createRule({
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

export default useSpacings;
