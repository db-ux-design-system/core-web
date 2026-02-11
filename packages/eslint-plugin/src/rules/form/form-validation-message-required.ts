import {
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

const FORM_COMPONENTS = [
	'DBInput',
	'DBTextarea',
	'DBSelect',
	'DBCustomSelect',
	'DBCheckbox'
];

export default {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Ensure form components with validation have invalidMessage',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#form-validation-message-required'
		},
		messages: {
			[MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED]: MESSAGES.FORM_VALIDATION_MESSAGE_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const checkFormComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			const component = FORM_COMPONENTS.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) return;

			const invalidMessage = getAttributeValue(openingElement, 'invalidMessage');
			if (invalidMessage) return;

			const required = getAttributeValue(openingElement, 'required');
			if (required) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
					data: { component, attribute: 'required' }
				});
				return;
			}

			if (component === 'DBInput' || component === 'DBTextarea') {
				const maxLength = getAttributeValue(openingElement, 'maxLength');
				const minLength = getAttributeValue(openingElement, 'minLength');

				if (maxLength) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'maxLength' }
					});
					return;
				}

				if (minLength) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'minLength' }
					});
					return;
				}
			}

			if (component === 'DBInput') {
				const min = getAttributeValue(openingElement, 'min');
				const max = getAttributeValue(openingElement, 'max');
				const pattern = getAttributeValue(openingElement, 'pattern');

				if (min) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'min' }
					});
					return;
				}

				if (max) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'max' }
					});
					return;
				}

				if (pattern) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'pattern' }
					});
				}
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkFormComponent, Element: checkFormComponent },
			{ JSXElement: checkFormComponent }
		);
	}
};
