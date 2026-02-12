import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularFix,
	createAngularVisitors,
	createJsxVueFix,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

export default {
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure DBButton has explicit type attribute',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#button-type-required'
		},
		fixable: 'code',
		messages: {
			[MESSAGE_IDS.BUTTON_TYPE_REQUIRED]: MESSAGES.BUTTON_TYPE_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const type = getAttributeValue(node, 'type');
			if (!type) {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.BUTTON_TYPE_REQUIRED,
					fix(fixer: any) {
						const fixData = createAngularFix(
							context,
							node,
							' type="button"'
						);
						if (!fixData) return null;
						return fixer.insertTextBeforeRange(
							[fixData.insertPos, fixData.insertPos],
							fixData.attributeText
						);
					}
				});
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBButton,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		const checkButton = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBButton)) return;

			const type = getAttributeValue(openingElement, 'type');
			if (type) return;

			const hasClickHandler =
				getAttributeValue(openingElement, 'onClick') ||
				getAttributeValue(openingElement, '(click)') ||
				getAttributeValue(openingElement, '@click');

			const typeValue = hasClickHandler ? 'button' : 'submit';

			context.report({
				node: openingElement,
				messageId: MESSAGE_IDS.BUTTON_TYPE_REQUIRED,
				fix(fixer: any) {
					const fixData = createJsxVueFix(
						node,
						openingElement,
						` type="${typeValue}"`
					);
					return fixer.insertTextAfterRange(
						[fixData.insertPos, fixData.insertPos],
						fixData.attributeText
					);
				}
			});
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkButton, Element: checkButton },
			{ JSXElement: checkButton }
		);
	}
};
