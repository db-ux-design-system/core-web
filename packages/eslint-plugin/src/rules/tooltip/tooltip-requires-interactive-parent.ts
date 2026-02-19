import {
	COMPONENTS,
	INTERACTIVE_ELEMENTS,
	MESSAGE_IDS,
	MESSAGES
} from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	isDBComponent
} from '../../shared/utils.js';

function isInteractiveElement(node: any): boolean {
	const openingElement = node.openingElement || node;
	const tagName =
		openingElement.rawName ||
		(openingElement.name?.type === 'JSXIdentifier'
			? openingElement.name.name
			: openingElement.name || null);
	if (!tagName) return false;
	
	const normalizedTag = tagName.toLowerCase();
	return INTERACTIVE_ELEMENTS.some((el) => {
		const elLower = el.toLowerCase();
		const kebabCase = elLower.startsWith('db') 
			? elLower.replace('db', 'db-')
			: elLower;
		return normalizedTag === elLower || normalizedTag === kebabCase;
	});
}

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure DBTooltip is child of interactive element for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#tooltip-requires-interactive-parent'
		},
		messages: {
			[MESSAGE_IDS.TOOLTIP_REQUIRES_INTERACTIVE]:
				MESSAGES.TOOLTIP_REQUIRES_INTERACTIVE
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			let parent: any = node.parent;
			while (parent) {
				if (
					(parent.type === 'Element' ||
						parent.type === 'Element$1') &&
					isInteractiveElement(parent)
				) {
					return;
				}
				parent = parent.parent;
			}

			const loc = parserServices.convertNodeSourceSpanToLoc(
				node.sourceSpan
			);
			context.report({
				loc,
				messageId: MESSAGE_IDS.TOOLTIP_REQUIRES_INTERACTIVE
			});
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBTooltip,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		const checkTooltip = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, 'DBTooltip')) return;

			let parent: any = node.parent;
			while (parent) {
				if (
					parent.type === 'JSXElement' ||
					parent.type === 'VElement' ||
					parent.type === 'Element'
				) {
					if (isInteractiveElement(parent)) {
						return;
					}
				}
				parent = parent.parent;
			}

			context.report({
				node: openingElement,
				messageId: MESSAGE_IDS.TOOLTIP_REQUIRES_INTERACTIVE
			});
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkTooltip, Element: checkTooltip },
			{ JSXElement: checkTooltip }
		);
	}
};
