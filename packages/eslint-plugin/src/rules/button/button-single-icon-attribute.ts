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
			description: 'Ensure DBButton uses only one icon attribute',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#button-single-icon-attribute'
		},
		messages: {
			[MESSAGE_IDS.BUTTON_MULTIPLE_ICONS]: MESSAGES.BUTTON_MULTIPLE_ICONS
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const icon = getAttributeValue(node, 'icon');
			const iconLeading = getAttributeValue(node, 'iconLeading');
			const iconTrailing = getAttributeValue(node, 'iconTrailing');

			const iconCount = [icon, iconLeading, iconTrailing].filter(Boolean).length;

			if (iconCount > 1) {
				const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
				context.report({
					loc,
					messageId: MESSAGE_IDS.BUTTON_MULTIPLE_ICONS
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBButton, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkButton = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBButton)) return;

			const icon = getAttributeValue(openingElement, 'icon');
			const iconLeading = getAttributeValue(
				openingElement,
				'iconLeading'
			);
			const iconTrailing = getAttributeValue(
				openingElement,
				'iconTrailing'
			);

			const iconCount = [icon, iconLeading, iconTrailing].filter(
				Boolean
			).length;

			if (iconCount > 1) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.BUTTON_MULTIPLE_ICONS
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkButton, Element: checkButton },
			{ JSXElement: checkButton }
		);
	}
};
