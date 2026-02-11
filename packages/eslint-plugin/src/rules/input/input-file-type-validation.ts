import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'input-file-type-validation',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBInput file type has accept and validate file-only attributes'
		},
		messages: {
			missingAccept:
				'DBInput with type="file" should have accept attribute',
			invalidMultiple:
				'DBInput multiple attribute is only valid for type="file"',
			invalidAccept:
				'DBInput accept attribute is only valid for type="file"'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBInput')) return;

				const type = getAttributeValue(node.openingElement, 'type');
				const accept = getAttributeValue(node.openingElement, 'accept');
				const multiple = getAttributeValue(
					node.openingElement,
					'multiple'
				);

				if (type === 'file') {
					if (!accept) {
						context.report({
							node: node.openingElement,
							messageId: 'missingAccept'
						});
					}
				} else {
					if (multiple) {
						context.report({
							node: node.openingElement,
							messageId: 'invalidMultiple'
						});
					}
					if (accept) {
						context.report({
							node: node.openingElement,
							messageId: 'invalidAccept'
						});
					}
				}
			}
		};
	}
});
