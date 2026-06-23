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
				'Ensure DBControlPanelMobile/DBHeader has burgerMenuLabel for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#control-panel-mobile-burger-menu-label-required'
		},
		messages: {
			missingBurgerMenuLabel: MESSAGES.HEADER_MISSING_BURGER_MENU_LABEL
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const burgerMenuLabel = getAttributeValue(node, 'burgerMenuLabel');
			if (burgerMenuLabel === undefined || burgerMenuLabel === '') {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.HEADER_MISSING_BURGER_MENU_LABEL
				});
			}
		};

		const angularVisitors: any = {};
		for (const comp of [
			COMPONENTS.DBHeader,
			COMPONENTS.DBControlPanelMobile
		]) {
			const visitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (visitors) {
				Object.assign(angularVisitors, visitors);
			}
		}

		if (Object.keys(angularVisitors).length > 0) return angularVisitors;

		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			if (
				!isDBComponent(openingElement, COMPONENTS.DBHeader) &&
				!isDBComponent(openingElement, COMPONENTS.DBControlPanelMobile)
			)
				return;

			const burgerMenuLabel = getAttributeValue(
				openingElement,
				'burgerMenuLabel'
			);

			if (burgerMenuLabel === undefined || burgerMenuLabel === '') {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.HEADER_MISSING_BURGER_MENU_LABEL
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkComponent, Element: checkComponent },
			{ JSXElement: checkComponent }
		);
	}
};
