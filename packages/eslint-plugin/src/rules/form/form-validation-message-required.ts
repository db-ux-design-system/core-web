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
	'DBCheckbox'
];

export default createRule({
	name: 'form-validation-message-required',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure form components with validation have invalidMessage'
		},
		messages: {
			missingInvalidMessage:
				'{{component}} with {{attribute}} must have invalidMessage attribute'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				const component = FORM_COMPONENTS.find((comp) =>
					isDBComponent(node.openingElement, comp)
				);
				if (!component) return;

				const invalidMessage = getAttributeValue(
					node.openingElement,
					'invalidMessage'
				);
				if (invalidMessage) return;

				const required = getAttributeValue(
					node.openingElement,
					'required'
				);
				if (required) {
					context.report({
						node: node.openingElement,
						messageId: 'missingInvalidMessage',
						data: { component, attribute: 'required' }
					});
					return;
				}

				if (component === 'DBInput' || component === 'DBTextarea') {
					const maxLength = getAttributeValue(
						node.openingElement,
						'maxLength'
					);
					const minLength = getAttributeValue(
						node.openingElement,
						'minLength'
					);

					if (maxLength) {
						context.report({
							node: node.openingElement,
							messageId: 'missingInvalidMessage',
							data: { component, attribute: 'maxLength' }
						});
						return;
					}

					if (minLength) {
						context.report({
							node: node.openingElement,
							messageId: 'missingInvalidMessage',
							data: { component, attribute: 'minLength' }
						});
						return;
					}
				}

				if (component === 'DBInput') {
					const min = getAttributeValue(node.openingElement, 'min');
					const max = getAttributeValue(node.openingElement, 'max');
					const pattern = getAttributeValue(
						node.openingElement,
						'pattern'
					);

					if (min) {
						context.report({
							node: node.openingElement,
							messageId: 'missingInvalidMessage',
							data: { component, attribute: 'min' }
						});
						return;
					}

					if (max) {
						context.report({
							node: node.openingElement,
							messageId: 'missingInvalidMessage',
							data: { component, attribute: 'max' }
						});
						return;
					}

					if (pattern) {
						context.report({
							node: node.openingElement,
							messageId: 'missingInvalidMessage',
							data: { component, attribute: 'pattern' }
						});
					}
				}
			}
		};
	}
});
