import { type Root } from 'postcss';
import stylelint, {
	type PostcssResult,
	type Rule,
	type RuleContext,
	type RuleMessages,
	type RuleMeta
} from 'stylelint';

const {
	createPlugin,
	utils: { validateOptions }
} = stylelint;

export type RuleFunctionType<T> = (
	root: Root,
	result: PostcssResult,
	primaryOptions: boolean,
	secondaryOptions: T,
	context: RuleContext
) => void;

export type CreateRuleProps<T> = {
	ruleName: string;
	meta: RuleMeta;
	messages: RuleMessages;
	fn: RuleFunctionType<T>;
};

export const createRule = <T = any>({
	ruleName,
	meta,
	messages,
	fn
}: CreateRuleProps<T>) => {
	const ruleFunction: Rule =
		(primaryOptions: boolean, secondaryOptions: T, context) =>
		(root: Root, result: PostcssResult) => {
			const validOptions = validateOptions(result, ruleName, {
				actual: primaryOptions,
				possible: [true]
			});

			if (!validOptions) {
				return;
			}

			fn(root, result, primaryOptions, secondaryOptions, context);
		};

	ruleFunction.ruleName = ruleName;
	ruleFunction.messages = messages;
	ruleFunction.meta = meta;

	return createPlugin(ruleName, ruleFunction);
};
