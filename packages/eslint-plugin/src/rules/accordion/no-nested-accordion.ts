import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'no-nested-accordion',
	meta: {
		type: 'problem',
		docs: {
			description: 'Prevent nesting DBAccordion components'
		},
		messages: {
			noNested:
				'DBAccordion must not be nested inside another DBAccordion as it confuses users'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBAccordion')) return;

				let parent: TSESTree.Node | undefined = node.parent;
				while (parent) {
					if (
						parent.type === 'JSXElement' &&
						isDBComponent(parent.openingElement, 'DBAccordion')
					) {
						context.report({
							node: node.openingElement,
							messageId: 'noNested'
						});
						return;
					}
					parent = parent.parent;
				}
			}
		};
	}
});
