import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'button-single-icon-attribute',
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure DBButton uses only one icon attribute'
		},
		messages: {
			multipleIcons:
				'DBButton can only use one of: icon, iconLeading, or iconTrailing'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBButton')) return;

				const icon = getAttributeValue(node.openingElement, 'icon');
				const iconLeading = getAttributeValue(
					node.openingElement,
					'iconLeading'
				);
				const iconTrailing = getAttributeValue(
					node.openingElement,
					'iconTrailing'
				);

				const iconCount = [icon, iconLeading, iconTrailing].filter(
					Boolean
				).length;

				if (iconCount > 1) {
					context.report({
						node: node.openingElement,
						messageId: 'multipleIcons'
					});
				}
			}
		};
	}
});
