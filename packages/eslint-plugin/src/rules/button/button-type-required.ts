import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'button-type-required',
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure DBButton has explicit type attribute'
		},
		fixable: 'code',
		messages: {
			missingType:
				'DBButton must have an explicit type attribute (submit, button, or reset)'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				const openingElement = node.openingElement;

				if (!isDBComponent(openingElement, 'DBButton')) return;

				const type = getAttributeValue(openingElement, 'type');
				if (!type) {
					const hasClickHandler =
						getAttributeValue(openingElement, 'onClick') ||
						getAttributeValue(openingElement, '(click)') ||
						getAttributeValue(openingElement, '@click');

					const typeValue = hasClickHandler ? 'button' : 'submit';

					context.report({
						node: openingElement,
						messageId: 'missingType',
						fix(fixer) {
							const lastAttr =
								openingElement.attributes[
									openingElement.attributes.length - 1
								];
							const insertPos = lastAttr
								? lastAttr.range[1]
								: openingElement.name.range[1];
							return fixer.insertTextAfterRange(
								[insertPos, insertPos],
								` type="${typeValue}"`
							);
						}
					});
				}
			}
		};
	}
});
