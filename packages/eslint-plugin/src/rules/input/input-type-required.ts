import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'input-type-required',
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Ensure DBInput has type attribute for better developer experience'
		},
		fixable: 'code',
		messages: {
			missingType:
				'DBInput should have type attribute for better developer experience'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBInput')) return;

				const type = getAttributeValue(node.openingElement, 'type');

				if (!type) {
					context.report({
						node: node.openingElement,
						messageId: 'missingType',
						fix(fixer) {
							const lastAttr =
								node.openingElement.attributes[
									node.openingElement.attributes.length - 1
								];
							const insertPos = lastAttr
								? lastAttr.range[1]
								: node.openingElement.name.range[1];
							return fixer.insertTextAfterRange(
								[insertPos, insertPos],
								' type="text"'
							);
						}
					});
				}
			}
		};
	}
});
