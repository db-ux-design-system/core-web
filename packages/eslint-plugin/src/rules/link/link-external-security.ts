import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'link-external-security',
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure external links have proper security attributes'
		},
		messages: {
			missingTargetBlank:
				'DBLink with content="external" should have target="_blank"',
			missingReferrerPolicy:
				'DBLink with content="external" should have referrerPolicy attribute',
			missingContentExternal:
				'DBLink with target="_blank" should have content="external"'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBLink')) return;

				const content = getAttributeValue(
					node.openingElement,
					'content'
				);
				const target = getAttributeValue(node.openingElement, 'target');
				const referrerPolicy = getAttributeValue(
					node.openingElement,
					'referrerPolicy'
				);

				if (content === 'external') {
					if (target !== '_blank') {
						context.report({
							node: node.openingElement,
							messageId: 'missingTargetBlank'
						});
					}
					if (!referrerPolicy) {
						context.report({
							node: node.openingElement,
							messageId: 'missingReferrerPolicy'
						});
					}
				}

				if (target === '_blank' && content !== 'external') {
					context.report({
						node: node.openingElement,
						messageId: 'missingContentExternal'
					});
				}
			}
		};
	}
});
