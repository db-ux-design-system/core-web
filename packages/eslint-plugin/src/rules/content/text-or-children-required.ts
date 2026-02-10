import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

const COMPONENTS_REQUIRING_CONTENT = [
	'DBAccordionItem',
	'DBBadge',
	'DBButton',
	'DBLink',
	'DBIcon',
	'DBInfotext',
	'DBNavigationItem',
	'DBNotification'
];

export default createRule({
	name: 'text-or-children-required',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure components have text property or children content'
		},
		messages: {
			missingContent:
				'{{component}} must have either a text property or children content'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				const openingElement = node.openingElement;

				const component = COMPONENTS_REQUIRING_CONTENT.find((comp) =>
					isDBComponent(openingElement, comp)
				);
				if (!component) return;

				const text = getAttributeValue(openingElement, 'text');
				const hasChildren = node.children.some(
					(child) =>
						(child.type === 'JSXText' &&
							child.value.trim() !== '') ||
						child.type === 'JSXElement' ||
						child.type === 'JSXExpressionContainer'
				);

				if (!text && !hasChildren) {
					context.report({
						node: openingElement,
						messageId: 'missingContent',
						data: { component }
					});
				}
			}
		};
	}
});
