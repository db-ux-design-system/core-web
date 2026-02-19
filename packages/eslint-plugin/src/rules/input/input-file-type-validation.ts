import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure DBInput file type has accept and validate file-only attributes',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#input-file-type-validation'
		},
		messages: {
			[MESSAGE_IDS.INPUT_FILE_MISSING_ACCEPT]:
				MESSAGES.INPUT_FILE_MISSING_ACCEPT,
			[MESSAGE_IDS.INPUT_INVALID_MULTIPLE]:
				MESSAGES.INPUT_INVALID_MULTIPLE,
			[MESSAGE_IDS.INPUT_INVALID_ACCEPT]: MESSAGES.INPUT_INVALID_ACCEPT
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const type = getAttributeValue(node, 'type');
			const accept = getAttributeValue(node, 'accept');
			const multiple = getAttributeValue(node, 'multiple');

			if (type === 'file') {
				if (accept === null) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.INPUT_FILE_MISSING_ACCEPT
					});
				}
			} else {
				if (multiple !== null) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.INPUT_INVALID_MULTIPLE
					});
				}
				if (accept !== null) {
					const loc = parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					);
					context.report({
						loc,
						messageId: MESSAGE_IDS.INPUT_INVALID_ACCEPT
					});
				}
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBInput,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		const checkInput = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBInput)) return;

			const type = getAttributeValue(openingElement, 'type');
			const accept = getAttributeValue(openingElement, 'accept');
			const multiple = getAttributeValue(openingElement, 'multiple');

			if (type === 'file') {
				if (accept === null) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.INPUT_FILE_MISSING_ACCEPT
					});
				}
			} else {
				if (multiple !== null) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.INPUT_INVALID_MULTIPLE
					});
				}
				if (accept !== null) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.INPUT_INVALID_ACCEPT
					});
				}
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkInput, Element: checkInput },
			{ JSXElement: checkInput }
		);
	}
};
