import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

const COMPONENTS_REQUIRING_CONTENT = [
	'DBAccordionItem',
	'DBBadge',
	'DBButton',
	'DBLink',
	'DBIcon',
	'DBInfotext',
	'DBNavigationItem',
	'DBNotification'
];

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure components have text property or children content',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#text-or-children-required'
		},
		messages: {
			missingContent: MESSAGES.TEXT_OR_CHILDREN_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const componentName = node.name;
			const component = COMPONENTS_REQUIRING_CONTENT.find((comp) =>
				isDBComponent(node, comp)
			);
			if (!component) return;

			const text = getAttributeValue(node, 'text');
			const hasChildren = node.children?.some(
				(child: any) =>
					(child.type === 'Text' && child.value.trim() !== '') ||
					child.type === 'Element' ||
					child.type === 'Element$1'
			);

			if (text === null && !hasChildren) {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.TEXT_OR_CHILDREN_REQUIRED,
					data: { component: componentName }
				});
			}
		};

		for (const comp of COMPONENTS_REQUIRING_CONTENT) {
			const angularVisitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (angularVisitors) return angularVisitors;
		}

		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;

			const component = COMPONENTS_REQUIRING_CONTENT.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) return;

			const componentName =
				openingElement.name?.name || openingElement.rawName;

			const text = getAttributeValue(openingElement, 'text');
			const hasChildren = node.children?.some(
				(child: any) =>
					(child.type === 'JSXText' && child.value.trim() !== '') ||
					(child.type === 'VText' && child.value.trim() !== '') ||
					child.type === 'JSXElement' ||
					child.type === 'VElement' ||
					child.type === 'JSXExpressionContainer' ||
					child.type === 'VExpressionContainer'
			);

			if (text === null && !hasChildren) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.TEXT_OR_CHILDREN_REQUIRED,
					data: { component: componentName }
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
