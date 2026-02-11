import {
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBInput file type has accept and validate file-only attributes',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#input-file-type-validation'
		},
		messages: {
			[MESSAGE_IDS.INPUT_FILE_MISSING_ACCEPT]: MESSAGES.INPUT_FILE_MISSING_ACCEPT,
			[MESSAGE_IDS.INPUT_INVALID_MULTIPLE]: MESSAGES.INPUT_INVALID_MULTIPLE,
			[MESSAGE_IDS.INPUT_INVALID_ACCEPT]: MESSAGES.INPUT_INVALID_ACCEPT
		},
		schema: []
	},
	create(context: any) {
		const checkInput = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBInput)) return;

			const type = getAttributeValue(openingElement, 'type');
			const accept = getAttributeValue(openingElement, 'accept');
			const multiple = getAttributeValue(openingElement, 'multiple');

			if (type === 'file') {
				if (!accept) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.INPUT_FILE_MISSING_ACCEPT
					});
				}
			} else {
				if (multiple) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.INPUT_INVALID_MULTIPLE
					});
				}
				if (accept) {
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
