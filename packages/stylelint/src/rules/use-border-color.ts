import stylelint from 'stylelint';
import { createRule } from '../shared/create-rule.js';
import {
	type AllowedType,
	DefaultColorsExact,
	DefaultExact,
	getDeclarationRuleFunction
} from '../shared/index.js';

const {
	utils: { ruleMessages }
} = stylelint;

const ruleName = 'db-ui/use-border-color';

const messages = ruleMessages(ruleName, {
	rejected: (prop: string, value: string) =>
		`Unexpected value: ${value} within prop: ${prop}.\n` +
		"Please use 'db-xx-on-bg-emphasis-[100|70|60|50]' instead."
});

const meta = {
	url: 'https://github.com/db-ui/mono/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: [{ include: 'border', and: ['color'] }],
	exact: ['border']
};
const allowedValues: AllowedType = {
	includes: [
		{
			include: 'on-bg-basic-emphasis',
			or: ['100', '70', '60', '50']
		},
		{ include: 'on-bg-inverted' }
	],
	exact: [...DefaultExact, ...DefaultColorsExact],
	type: 'some'
};

const useBorderColor = createRule({
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

export default useBorderColor;
