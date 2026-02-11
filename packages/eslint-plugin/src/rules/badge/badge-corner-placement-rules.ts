import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

function getTextContent(node: any): string | null {
	if (node.children) {
		for (const child of node.children) {
			if (child.type === 'JSXText') {
				return child.value.trim();
			}
			if (child.type === 'Text') {
				return child.value?.trim() || null;
			}
			if (child.type === 'VText') {
				return child.value?.trim() || null;
			}
		}
	}
	return null;
}

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBBadge with corner placement has max 3 characters and label',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#badge-corner-placement-rules'
		},
		fixable: 'code',
		messages: {
			[MESSAGE_IDS.BADGE_CORNER_TEXT_TOO_LONG]: MESSAGES.BADGE_CORNER_TEXT_TOO_LONG,
			[MESSAGE_IDS.BADGE_CORNER_MISSING_LABEL]: MESSAGES.BADGE_CORNER_MISSING_LABEL
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const placement = getAttributeValue(node, 'placement');
			if (!placement || placement === 'inline') return;

			const text = getAttributeValue(node, 'text');
			const children = getTextContent(node);
			const content = (typeof text === 'string' ? text : children) || '';
			const label = getAttributeValue(node, 'label');

			const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);

			if (content.length > 3) {
				context.report({
					loc,
					messageId: MESSAGE_IDS.BADGE_CORNER_TEXT_TOO_LONG
				});
			}

			if (!label) {
				context.report({
					loc,
					messageId: MESSAGE_IDS.BADGE_CORNER_MISSING_LABEL
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBBadge, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkBadge = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBBadge)) return;

			const placement = getAttributeValue(openingElement, 'placement');
			if (!placement || placement === 'inline') return;

			const text = getAttributeValue(openingElement, 'text');
			const children = getTextContent(node);
			const content = (typeof text === 'string' ? text : children) || '';
			const label = getAttributeValue(openingElement, 'label');

			if (content.length > 3) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.BADGE_CORNER_TEXT_TOO_LONG,
					fix(fixer: any) {
						const fixes = [];
						const shortText = content.slice(0, 3);

						if (text && typeof text === 'string') {
							const textAttr = openingElement.attributes.find(
								(a: any) => a.type === 'JSXAttribute' && a.name.name === 'text'
							);
							if (textAttr) {
								fixes.push(
									fixer.replaceText(
										textAttr,
										`text="${shortText}" label="${content}"`
									)
								);
							}
						} else if (children) {
							const textChild = node.children.find(
								(c: any) => c.type === 'JSXText'
							);
							if (textChild) {
								fixes.push(fixer.replaceText(textChild, shortText));
								const lastAttr =
									openingElement.attributes[
										openingElement.attributes.length - 1
									];
								const insertPos = lastAttr
									? lastAttr.range[1]
									: openingElement.name.range[1];
								fixes.push(
									fixer.insertTextAfterRange(
										[insertPos, insertPos],
										` label="${content}"`
									)
								);
							}
						}

						return fixes;
					}
				});
			}

			if (!label) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.BADGE_CORNER_MISSING_LABEL
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkBadge, Element: checkBadge },
			{ JSXElement: checkBadge }
		);
	}
};
