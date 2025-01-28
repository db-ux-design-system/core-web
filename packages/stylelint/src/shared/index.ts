import stylelint, { type PostcssResult } from 'stylelint';
import type { RuleFunctionType } from './create-rule.js';
import { Declaration } from 'postcss';

const {
	utils: { report }
} = stylelint;

export const DefaultExact: string[] = [
	'0px',
	'0',
	'auto',
	'inherit',
	'initial',
	'unset'
];

export const DefaultColorsExact: string[] = [
	'transparent',
	'currentcolor'
];

export type IncludesAllowType = {
	include: string;
	and?: string[];
	or?: string[];
};

export type AllowedType = {
	includes?: string[] | IncludesAllowType[];
	exact?: string[];
	startsWith?: string[];
	/**
	 * Used to determine if:
	 * - every: All parts of the value (e.g. margin: x x x x) should be allowed
	 * - some: Only some parts of the value (e.g. border: x solid red) should be allowed
	 */
	type?: 'every' | 'some';
};

export const isAllowed = (
	value: string | string[],
	allowedValues: AllowedType
): boolean => {
	const splitValue =
		value instanceof Array ? value : value.replace(/\s+/g, ' ').split(' ');

	const allowMap = splitValue.map(
		(val) =>
			allowedValues.exact?.includes(val) ||
			!!allowedValues.startsWith?.find((sw) => val.startsWith(sw)) ||
			!!allowedValues.includes?.find((include) => {
				if (typeof include === 'string') {
					return val.includes(include);
				} else {
					return (
						val.includes(include.include) &&
						(include.and
							? include.and.every((a) => val.includes(a))
							: include.or
								? include.or.some((a) => val.includes(a))
								: true)
					);
				}
			})
	);

	if (allowedValues.type === 'some') {
		return allowMap.some((val) => val);
	}

	return allowMap.every((val) => val);
};

export type DefaultRuleOptions = {
	allowCalc?: boolean;
	ignore?: string[];
	allow?: AllowedType;
};

export type DefaultRuleOptionsHitType = {
	result: PostcssResult;
	options: DefaultRuleOptions;
	value: string;
};

export const isDefaultRuleOptionsHit = ({
	options,
	result,
	value
}: DefaultRuleOptionsHitType) => {
	if (options?.ignore) {
		const from = result.opts.from;
		if (from) {
			const isIgnored = options.ignore.some(
				(i) => from.includes(i) || new RegExp(i).test(from)
			);
			if (isIgnored) return true;
		}
	}

	if (
		options?.allowCalc &&
		isAllowed([value], { includes: [{ include: 'calc(' }] })
	)
		return true;

	return !!(options?.allow && isAllowed([value], options.allow));
};

export const getDeclarationRuleFunction = ({
	allowedDeclarations,
	allowedValues,
	ruleName,
	messages
}: {
	allowedDeclarations: AllowedType;
	allowedValues: AllowedType;
	ruleName: string;
	messages: any;
}) => {
	const ruleFunction: RuleFunctionType<DefaultRuleOptions> = (
		root,
		result: PostcssResult,
		_,
		options
	) => {
		root.walkDecls((decl: Declaration) => {
			const { prop, value } = decl;

			if (isDefaultRuleOptionsHit({ result, options, value })) return;

			if (prop.startsWith('--') || prop.startsWith('$')) return;
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

	return ruleFunction;
};
