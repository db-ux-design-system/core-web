import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

const COMPONENTS_WITH_CLOSE_BUTTON = {
	DBNotification: 'closeButtonText',
	DBDrawer: 'closeButtonText',
	DBCustomSelect: 'mobileCloseButtonText'
};

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure components have close button text for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#close-button-text-required'
		},
		messages: {
			[MESSAGE_IDS.CLOSE_BUTTON_TEXT_REQUIRED]:
				MESSAGES.CLOSE_BUTTON_TEXT_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const component = Object.keys(COMPONENTS_WITH_CLOSE_BUTTON).find(
				(comp) => isDBComponent(node, comp)
			);

			if (!component) return;

			const attribute =
				COMPONENTS_WITH_CLOSE_BUTTON[
					component as keyof typeof COMPONENTS_WITH_CLOSE_BUTTON
				];
			const value = getAttributeValue(node, attribute);

			if (value === undefined || value === '') {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.CLOSE_BUTTON_TEXT_REQUIRED,
					data: { component, attribute }
				});
			}
		};

		for (const comp of Object.keys(COMPONENTS_WITH_CLOSE_BUTTON)) {
			const angularVisitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (angularVisitors) return angularVisitors;
		}

		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			const component = Object.keys(COMPONENTS_WITH_CLOSE_BUTTON).find(
				(comp) => isDBComponent(openingElement, comp)
			);

			if (!component) return;

			const attribute =
				COMPONENTS_WITH_CLOSE_BUTTON[
					component as keyof typeof COMPONENTS_WITH_CLOSE_BUTTON
				];
			const value = getAttributeValue(openingElement, attribute);

			if (value === undefined || value === '') {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.CLOSE_BUTTON_TEXT_REQUIRED,
					data: { component, attribute }
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
