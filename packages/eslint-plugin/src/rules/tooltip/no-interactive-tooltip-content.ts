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

function hasInteractiveChild(node: any): boolean {
	return node.children?.some((child: any) => {
		if (child.type === 'JSXElement' || child.type === 'VElement') {
			const openingElement = child.openingElement || child;
			const name = openingElement.name || openingElement.rawName;
			const tagName =
				typeof name === 'string'
					? name
					: name.type === 'JSXIdentifier'
						? name.name
						: null;
			if (
				tagName &&
				INTERACTIVE_ELEMENTS.some(
					(el) =>
						tagName === el ||
						tagName === el.toLowerCase().replace('db', 'db-')
				)
			) {
				return true;
			}
			return hasInteractiveChild(child);
		}
		return false;
	});
}

export default {
	meta: {
		type: 'problem',
		docs: {
			description: 'Prevent interactive elements inside DBTooltip',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#no-interactive-tooltip-content'
		},
		messages: {
			[MESSAGE_IDS.TOOLTIP_NO_INTERACTIVE]:
				MESSAGES.TOOLTIP_NO_INTERACTIVE
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			if (hasInteractiveChild(node)) {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.TOOLTIP_NO_INTERACTIVE
				});
			}
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

			if (hasInteractiveChild(node)) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.TOOLTIP_NO_INTERACTIVE
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkTooltip, Element: checkTooltip },
			{ JSXElement: checkTooltip }
		);
	}
};
