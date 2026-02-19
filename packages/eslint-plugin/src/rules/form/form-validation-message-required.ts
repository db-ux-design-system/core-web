import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

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
			[MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED]:
				MESSAGES.FORM_VALIDATION_MESSAGE_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const component = FORM_COMPONENTS.find((comp) =>
				isDBComponent(node, comp)
			);
			if (!component) return;

			const invalidMessage = getAttributeValue(node, 'invalidMessage');
			if (invalidMessage !== undefined) return;

			const required = getAttributeValue(node, 'required');
			if (required !== undefined) {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
					data: { component, attribute: 'required' }
				});
				return;
			}

			if (component === 'DBInput' || component === 'DBTextarea') {
				const maxLength = getAttributeValue(node, 'maxLength');
				const minLength = getAttributeValue(node, 'minLength');

				if (maxLength !== undefined) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'maxLength' }
					});
					return;
				}

				if (minLength !== undefined) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'minLength' }
					});
					return;
				}
			}

			if (component === 'DBInput') {
				const min = getAttributeValue(node, 'min');
				const max = getAttributeValue(node, 'max');
				const pattern = getAttributeValue(node, 'pattern');

				if (min !== undefined) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'min' }
					});
					return;
				}

				if (max !== undefined) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'max' }
					});
					return;
				}

				if (pattern !== undefined) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'pattern' }
					});
				}
			}
		};

		for (const comp of FORM_COMPONENTS) {
			const angularVisitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (angularVisitors) return angularVisitors;
		}

		const checkFormComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			const component = FORM_COMPONENTS.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) return;

			const invalidMessage = getAttributeValue(
				openingElement,
				'invalidMessage'
			);
			if (invalidMessage !== undefined) return;

			const required = getAttributeValue(openingElement, 'required');
			if (required !== undefined) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
					data: { component, attribute: 'required' }
				});
				return;
			}

			if (component === 'DBInput' || component === 'DBTextarea') {
				const maxLength = getAttributeValue(
					openingElement,
					'maxLength'
				);
				const minLength = getAttributeValue(
					openingElement,
					'minLength'
				);

				if (maxLength !== undefined) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'maxLength' }
					});
					return;
				}

				if (minLength !== undefined) {
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

				if (min !== undefined) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'min' }
					});
					return;
				}

				if (max !== undefined) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.FORM_VALIDATION_MESSAGE_REQUIRED,
						data: { component, attribute: 'max' }
					});
					return;
				}

				if (pattern !== undefined) {
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
