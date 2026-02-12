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
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.INPUT_TYPE_REQUIRED,
					fix(fixer: any) {
						const fixData = createAngularFix(
							context,
							node,
							' type="text"'
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
			COMPONENTS.DBInput,
			angularHandler
		);
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
						const fixData = createJsxVueFix(
							node,
							openingElement,
							' type="text"'
						);
						return fixer.insertTextAfterRange(
							[fixData.insertPos, fixData.insertPos],
							fixData.attributeText
						);
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
