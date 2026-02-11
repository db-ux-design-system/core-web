import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'navigation-item-back-button-text-required',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBNavigationItem has backButtonText for accessibility'
		},
		messages: {
			missingBackButtonText:
				'DBNavigationItem must have backButtonText attribute for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBNavigationItem'))
					return;

				const backButtonText = getAttributeValue(
					node.openingElement,
					'backButtonText'
				);

				if (!backButtonText) {
					context.report({
						node: node.openingElement,
						messageId: 'missingBackButtonText'
					});
				}
			}
		};
	}
});
