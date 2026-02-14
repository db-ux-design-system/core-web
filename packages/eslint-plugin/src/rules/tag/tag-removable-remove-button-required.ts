import {
	createAngularVisitors,
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
				'Ensure DBTag with behavior="removable" has removeButton',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#tag-removable-remove-button-required'
		},
		messages: {
			[MESSAGE_IDS.TAG_REMOVABLE_REMOVE_BUTTON_REQUIRED]: MESSAGES.TAG_REMOVABLE_REMOVE_BUTTON_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const behavior = getAttributeValue(node, 'behavior');
			if (behavior !== 'removable') return;

			const removeButton = getAttributeValue(node, 'removeButton');

			if (!removeButton) {
				const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
				context.report({
					loc,
					messageId: MESSAGE_IDS.TAG_REMOVABLE_REMOVE_BUTTON_REQUIRED
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBTag, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkTag = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBTag)) return;

			const behavior = getAttributeValue(openingElement, 'behavior');
			if (behavior !== 'removable') return;

			const removeButton = getAttributeValue(
				openingElement,
				'removeButton'
			);

			if (!removeButton) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.TAG_REMOVABLE_REMOVE_BUTTON_REQUIRED
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkTag, Element: checkTag },
			{ JSXElement: checkTag }
		);
	}
};
