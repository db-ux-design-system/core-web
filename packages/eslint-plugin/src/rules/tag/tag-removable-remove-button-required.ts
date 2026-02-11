import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'tag-removable-remove-button-required',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBTag with behavior="removable" has removeButton'
		},
		messages: {
			missingRemoveButton:
				'DBTag with behavior="removable" must have removeButton attribute for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBTag')) return;

				const behavior = getAttributeValue(
					node.openingElement,
					'behavior'
				);
				if (behavior !== 'removable') return;

				const removeButton = getAttributeValue(
					node.openingElement,
					'removeButton'
				);

				if (!removeButton) {
					context.report({
						node: node.openingElement,
						messageId: 'missingRemoveButton'
					});
				}
			}
		};
	}
});
