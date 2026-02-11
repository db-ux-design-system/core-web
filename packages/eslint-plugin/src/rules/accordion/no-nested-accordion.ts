import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

export default {
	meta: {
		type: 'problem',
		docs: {
			description: 'Prevent nesting DBAccordion components',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#no-nested-accordion'
		},
		messages: {
			[MESSAGE_IDS.ACCORDION_NO_NESTED]: MESSAGES.ACCORDION_NO_NESTED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			let parent: any = node.parent;
			while (parent) {
				if (parent.type === 'Element' && isDBComponent(parent, COMPONENTS.DBAccordion)) {
					const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
					context.report({
						loc,
						messageId: MESSAGE_IDS.ACCORDION_NO_NESTED
					});
					return;
				}
				parent = parent.parent;
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBAccordion, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkAccordion = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBAccordion)) return;

			let parent: any = node.parent;
			while (parent) {
				const parentOpening = parent.openingElement || parent;
				if (
					(parent.type === 'JSXElement' ||
						parent.type === 'VElement') &&
					isDBComponent(parentOpening, COMPONENTS.DBAccordion)
				) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.ACCORDION_NO_NESTED
					});
					return;
				}
				parent = parent.parent;
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkAccordion, Element: checkAccordion },
			{ JSXElement: checkAccordion }
		);
	}
};
