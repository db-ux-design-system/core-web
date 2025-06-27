import type { Declaration } from 'postcss';
import stylelint, { type PostcssResult } from 'stylelint';
import type { RuleFunctionType } from './create-rule.js';

const {
	utils: { report }
} = stylelint;

export const defaultExact: string[] = [
	'0px',
	'0',
	'auto',
	'inherit',
	'initial',
	'unset'
];

export const defaultColorsExact: string[] = ['transparent', 'currentcolor'];

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

const checkIncludes = (value: string, allowedValues: AllowedType): boolean => {
	return Boolean(
		allowedValues.includes?.find((include) => {
			if (typeof include === 'string') {
				return value.includes(include);
			}

			return (
				value.includes(include.include) &&
				(include.and
					? include.and.every((a) => value.includes(a))
					: include.or
						? include.or.some((a) => value.includes(a))
						: true)
			);
		})
	);
};

export const isAllowed = (
	value: string | string[],
	allowedValues: AllowedType
): boolean => {
	const splitValue = Array.isArray(value)
		? value
		: value.replaceAll(/\s+/g, ' ').split(' ');

	const allowMap = splitValue.map(
		(val) =>
			Boolean(allowedValues.exact?.includes(val)) ||
			Boolean(
				allowedValues.startsWith?.find((sw) => val.startsWith(sw))
			) ||
			checkIncludes(val, allowedValues)
	);

	if (allowedValues.type === 'some') {
		return allowMap.some(Boolean);
	}

	return allowMap.every(Boolean);
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

	return Boolean(options?.allow && isAllowed([value], options.allow));
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
	messages: {
		rejected: (props: string, value: string) => string;
	};
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
