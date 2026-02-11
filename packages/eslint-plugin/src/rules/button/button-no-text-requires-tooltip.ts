import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	hasChildOfType,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBButton with noText has icon and DBTooltip child',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#button-no-text-requires-tooltip'
		},
		fixable: 'code',
		messages: {
			[MESSAGE_IDS.BUTTON_NO_TEXT_MISSING_ICON]: MESSAGES.BUTTON_NO_TEXT_MISSING_ICON,
			[MESSAGE_IDS.BUTTON_NO_TEXT_MISSING_TOOLTIP]: MESSAGES.BUTTON_NO_TEXT_MISSING_TOOLTIP
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const noText = getAttributeValue(node, 'noText');
			if (!noText) return;

			const icon =
				getAttributeValue(node, 'icon') ||
				getAttributeValue(node, 'iconLeading') ||
				getAttributeValue(node, 'iconTrailing');
			
			const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
			
			if (!icon) {
				context.report({
					loc,
					messageId: MESSAGE_IDS.BUTTON_NO_TEXT_MISSING_ICON
				});
			}

			const hasTooltip = hasChildOfType(node, COMPONENTS.DBTooltip);
			if (!hasTooltip) {
				context.report({
					loc,
					messageId: MESSAGE_IDS.BUTTON_NO_TEXT_MISSING_TOOLTIP
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBButton, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkButton = (node: any) => {
			const openingElement = node.openingElement || node;

			if (!isDBComponent(openingElement, COMPONENTS.DBButton)) return;

			const noText = getAttributeValue(openingElement, 'noText');
			if (!noText) return;

			const icon =
				getAttributeValue(openingElement, 'icon') ||
				getAttributeValue(openingElement, 'iconLeading') ||
				getAttributeValue(openingElement, 'iconTrailing');
			if (!icon) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.BUTTON_NO_TEXT_MISSING_ICON
				});
			}

			const hasTooltip = hasChildOfType(node, COMPONENTS.DBTooltip);
			if (!hasTooltip) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.BUTTON_NO_TEXT_MISSING_TOOLTIP,
					fix(fixer: any) {
						if (node.openingElement) {
							// JSX
							const closingTag = node.closingElement;
							if (!closingTag) return null;
							const componentName =
								openingElement.name.type === 'JSXIdentifier'
									? openingElement.name.name
									: 'DBButton';
							const tooltipName = componentName.includes('-')
								? 'db-tooltip'
								: 'DBTooltip';
							return fixer.insertTextBefore(
								closingTag,
								`\n  <${tooltipName}>Describe action</${tooltipName}>`
							);
						} else {
							// Vue
							if (!node.endTag) return null;
							const componentName = openingElement.rawName;
							const tooltipName = componentName.includes('-')
								? 'db-tooltip'
								: 'DBTooltip';
							return fixer.insertTextAfterRange(
								[
									node.startTag.range[1],
									node.startTag.range[1]
								],
								`\n  <${tooltipName}>Describe action</${tooltipName}>`
							);
						}
					}
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
