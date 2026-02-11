import {
	defineTemplateBodyVisitor,
	isDBComponent
} from '../../shared/utils.js';
import { INTERACTIVE_ELEMENTS } from '../../shared/constants.js';

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
			noInteractive:
				'DBTooltip must not contain interactive elements. Use DBPopover for interactive content'
		},
		schema: []
	},
	create(context: any) {
		const checkTooltip = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, 'DBTooltip')) return;

			if (hasInteractiveChild(node)) {
				context.report({
					node: openingElement,
					messageId: 'noInteractive'
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
