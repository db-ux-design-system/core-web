import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

const FORM_COMPONENTS = [
	'DBInput',
	'DBTextarea',
	'DBSelect',
	'DBCustomSelect',
	'DBCheckbox',
	'DBRadio',
	'DBSwitch'
];

const COMPONENTS_WITH_CHILDREN_LABEL = ['DBCheckbox', 'DBRadio', 'DBSwitch'];

export default createRule({
	name: 'form-label-required',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure form components have a label attribute for accessibility'
		},
		messages: {
			missingLabel:
				'{{component}} must have a label attribute for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				const openingElement = node.openingElement;

				const component = FORM_COMPONENTS.find((comp) =>
					isDBComponent(openingElement, comp)
				);
				if (!component) return;

				const label = getAttributeValue(openingElement, 'label');
				const hasChildren = node.children.some(
					(child) =>
						child.type === 'JSXText' && child.value.trim() !== ''
				);

				const canUseChildren =
					COMPONENTS_WITH_CHILDREN_LABEL.includes(component);

				if (!label && !(canUseChildren && hasChildren)) {
					context.report({
						node: openingElement,
						messageId: 'missingLabel',
						data: { component }
					});
				}
			}
		};
	}
});
