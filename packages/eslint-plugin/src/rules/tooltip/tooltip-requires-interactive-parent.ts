import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { INTERACTIVE_ELEMENTS, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

function isInteractiveElement(node: TSESTree.JSXElement): boolean {
	const name = node.openingElement.name;
	if (name.type === 'JSXIdentifier') {
		const tagName = name.name;
		return INTERACTIVE_ELEMENTS.some(
			(el) =>
				tagName === el ||
				tagName === el.toLowerCase().replace('db', 'db-')
		);
	}
	return false;
}

export default createRule({
	name: 'tooltip-requires-interactive-parent',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBTooltip is child of interactive element for accessibility'
		},
		messages: {
			requiresInteractive:
				'DBTooltip must be a child of an interactive element (button, link, etc.) for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBTooltip')) return;

				let parent: TSESTree.Node | undefined = node.parent;
				while (parent) {
					if (parent.type === 'JSXElement') {
						if (isInteractiveElement(parent)) {
							return;
						}
					}
					parent = parent.parent;
				}

				context.report({
					node: node.openingElement,
					messageId: 'requiresInteractive'
				});
			}
		};
	}
});
