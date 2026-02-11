import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

export default {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Ensure DBInput has type attribute for better developer experience',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#input-type-required'
		},
		fixable: 'code',
		messages: {
			[MESSAGE_IDS.INPUT_TYPE_REQUIRED]: MESSAGES.INPUT_TYPE_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const type = getAttributeValue(node, 'type');
			if (!type) {
				const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
				context.report({
					loc,
					messageId: MESSAGE_IDS.INPUT_TYPE_REQUIRED
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBInput, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkInput = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBInput)) return;

			const type = getAttributeValue(openingElement, 'type');

			if (!type) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.INPUT_TYPE_REQUIRED,
					fix(fixer: any) {
						if (node.openingElement) {
							// JSX
							const lastAttr =
								openingElement.attributes[
									openingElement.attributes.length - 1
								];
							const insertPos = lastAttr
								? lastAttr.range[1]
								: openingElement.name.range[1];
							return fixer.insertTextAfterRange(
								[insertPos, insertPos],
								' type="text"'
							);
						} else {
							// Vue
							const attrs = openingElement.startTag.attributes;
							if (attrs.length > 0) {
								const lastAttr = attrs[attrs.length - 1];
								const insertPos = lastAttr.range[1];
								return fixer.insertTextAfterRange(
									[insertPos, insertPos],
									' type="text"'
								);
							} else {
								const insertPos =
									openingElement.startTag.range[0] +
									1 +
									openingElement.rawName.length;
								return fixer.insertTextAfterRange(
									[insertPos, insertPos],
									' type="text"'
								);
							}
						}
					}
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkInput, Element: checkInput },
			{ JSXElement: checkInput }
		);
	}
};
