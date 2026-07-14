import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

const TARGET_COMPONENT = 'DBControlPanelNavigationItemGroup';

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure DBControlPanelNavigationItemGroup has backButtonText for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#navigation-item-back-button-text-required'
		},
		messages: {
			missingBackButtonText:
				MESSAGES.NAVIGATION_ITEM_MISSING_BACK_BUTTON_TEXT
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const backButtonText = getAttributeValue(node, 'backButtonText');
			if (backButtonText === undefined || backButtonText === '') {
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
			TARGET_COMPONENT,
			angularHandler
		);
		if (angularVisitors) {
			return angularVisitors;
		}

		const checkNavigationItemGroup = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, TARGET_COMPONENT)) {
				return;
			}

			const backButtonText = getAttributeValue(
				openingElement,
				'backButtonText'
			);

			if (backButtonText === undefined || backButtonText === '') {
				context.report({
					node: openingElement,
					messageId:
						MESSAGE_IDS.NAVIGATION_ITEM_MISSING_BACK_BUTTON_TEXT
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{
				VElement: checkNavigationItemGroup,
				Element: checkNavigationItemGroup
			},
			{ JSXElement: checkNavigationItemGroup }
		);
	}
};
