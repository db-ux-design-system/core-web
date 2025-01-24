import stylelint, { type PostcssResult } from 'stylelint';
import { createRule, type RuleFunctionType } from '../shared/create-rule.js';
import { Declaration } from 'postcss';
import { type AllowedType, isAllowed } from '../shared/allowed.js';

const {
	utils: { report, ruleMessages }
} = stylelint;

const ruleName = 'db-ui/use-spacings';

const messages = ruleMessages(ruleName, {
	rejected: (prop: string, value: string) =>
		`Unexpected value: ${value} within prop: ${prop}.`
});

const meta = {
	url: 'TODO'
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
	exact: ['0px', '0', 'auto', 'inherit', 'initial', 'unset']
};

type UseSpacingsOptions = {
	allowCalc?: boolean;
	allowVariables?: boolean;
	ignore?: string[];
	allow?: AllowedType;
};

const ruleFunction: RuleFunctionType<UseSpacingsOptions> = (
	root,
	result: PostcssResult,
	_,
	secondaryOptions
) => {
	root.walkDecls((decl: Declaration) => {
		const { prop, value } = decl;

		if (secondaryOptions?.ignore) {
			const from = result.opts.from;
			if (from) {
				const isIgnored = secondaryOptions.ignore.some(
					(i) => from.includes(i) || new RegExp(i).test(from)
				);
				if (isIgnored) return;
			}
		}

		if (
			secondaryOptions?.allowCalc &&
			isAllowed([value], { includes: ['calc('] })
		)
			return;

		if (
			secondaryOptions?.allow &&
			isAllowed([value], secondaryOptions.allow)
		)
			return;

		if (prop.startsWith('--')) return;
		if (!isAllowed(prop, allowedDeclarations)) return;
		if (isAllowed(value, allowedValues)) return;

		report({
			result,
			ruleName,
			message: messages.rejected(prop, value),
			node: decl,
			word: value
		});
	});
};

const useSpacings = createRule({
	ruleName,
	meta,
	messages,
	fn: ruleFunction
});

export default useSpacings;
