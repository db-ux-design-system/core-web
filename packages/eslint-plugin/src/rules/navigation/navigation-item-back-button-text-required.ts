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
				'Ensure DBNavigationItem has backButtonText for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#navigation-item-back-button-text-required'
		},
		messages: {
			[MESSAGE_IDS.NAVIGATION_ITEM_MISSING_BACK_BUTTON_TEXT]:
				MESSAGES.NAVIGATION_ITEM_MISSING_BACK_BUTTON_TEXT
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const backButtonText = getAttributeValue(node, 'backButtonText');
			if (backButtonText === null || backButtonText === '') {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId:
						MESSAGE_IDS.NAVIGATION_ITEM_MISSING_BACK_BUTTON_TEXT
				});
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBNavigationItem,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		const checkNavigationItem = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBNavigationItem))
				return;

			const backButtonText = getAttributeValue(
				openingElement,
				'backButtonText'
			);

			if (backButtonText === null || backButtonText === '') {
				context.report({
					node: openingElement,
					messageId:
						MESSAGE_IDS.NAVIGATION_ITEM_MISSING_BACK_BUTTON_TEXT
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkNavigationItem, Element: checkNavigationItem },
			{ JSXElement: checkNavigationItem }
		);
	}
};
