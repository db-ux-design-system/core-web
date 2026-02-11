import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'custom-select-tags-remove-text-required',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBCustomSelect with selectedType="tag" has removeTagsTexts'
		},
		messages: {
			missingRemoveTagsTexts:
				'DBCustomSelect with selectedType="tag" must have removeTagsTexts attribute for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBCustomSelect'))
					return;

				const selectedType = getAttributeValue(
					node.openingElement,
					'selectedType'
				);
				if (selectedType !== 'tag') return;

				const removeTagsTexts = getAttributeValue(
					node.openingElement,
					'removeTagsTexts'
				);

				if (!removeTagsTexts) {
					context.report({
						node: node.openingElement,
						messageId: 'missingRemoveTagsTexts'
					});
				}
			}
		};
	}
});
