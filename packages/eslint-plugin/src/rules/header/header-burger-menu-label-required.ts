import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'header-burger-menu-label-required',
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure DBHeader has burgerMenuLabel for accessibility'
		},
		messages: {
			missingBurgerMenuLabel:
				'DBHeader must have burgerMenuLabel attribute for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBHeader')) return;

				const burgerMenuLabel = getAttributeValue(
					node.openingElement,
					'burgerMenuLabel'
				);

				if (!burgerMenuLabel) {
					context.report({
						node: node.openingElement,
						messageId: 'missingBurgerMenuLabel'
					});
				}
			}
		};
	}
});
