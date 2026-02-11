import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

function hasHeadlineSlot(node: any): boolean {
	return node.children?.some((child: any) => {
		// Angular: <div slot="headline">
		if (child.type === 'Element') {
			const slotAttr = child.attributes?.find((a: any) => a.name === 'slot');
			return slotAttr?.value === 'headline';
		}
		// Vue: <template #headline> or <template v-slot:headline>
		if (child.type === 'VElement' && child.rawName === 'template') {
			return child.startTag.attributes.some((a: any) => 
				a.key.name === 'slot' && a.key.argument?.name === 'headline' ||
				a.key.name === 'headline'
			);
		}
		return false;
	});
}

export default {
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure DBAccordionItem has headline or headlinePlain',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#accordion-item-headline-required'
		},
		messages: {
			[MESSAGE_IDS.ACCORDION_ITEM_HEADLINE_REQUIRED]: MESSAGES.ACCORDION_ITEM_HEADLINE_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const headlinePlain = getAttributeValue(node, 'headlinePlain');
			const hasSlot = hasHeadlineSlot(node);

			if (!headlinePlain && !hasSlot) {
				const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
				context.report({
					loc,
					messageId: MESSAGE_IDS.ACCORDION_ITEM_HEADLINE_REQUIRED
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBAccordionItem, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkAccordionItem = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBAccordionItem)) return;

			const headlinePlain = getAttributeValue(openingElement, 'headlinePlain');
			const headline = getAttributeValue(openingElement, 'headline');
			const hasSlot = hasHeadlineSlot(node);

			if (!headlinePlain && !headline && !hasSlot) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.ACCORDION_ITEM_HEADLINE_REQUIRED
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkAccordionItem, Element: checkAccordionItem },
			{ JSXElement: checkAccordionItem }
		);
	}
};
