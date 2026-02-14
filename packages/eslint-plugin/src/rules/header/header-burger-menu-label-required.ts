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
				'Ensure DBHeader has burgerMenuLabel for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#header-burger-menu-label-required'
		},
		messages: {
			[MESSAGE_IDS.HEADER_MISSING_BURGER_MENU_LABEL]: MESSAGES.HEADER_MISSING_BURGER_MENU_LABEL
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const burgerMenuLabel = getAttributeValue(node, 'burgerMenuLabel');
			if (!burgerMenuLabel) {
				const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
				context.report({
					loc,
					messageId: MESSAGE_IDS.HEADER_MISSING_BURGER_MENU_LABEL
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBHeader, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkHeader = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBHeader)) return;

			const burgerMenuLabel = getAttributeValue(
				openingElement,
				'burgerMenuLabel'
			);

			if (!burgerMenuLabel) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.HEADER_MISSING_BURGER_MENU_LABEL
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkHeader, Element: checkHeader },
			{ JSXElement: checkHeader }
		);
	}
};
