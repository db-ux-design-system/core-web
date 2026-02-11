import {
	defineTemplateBodyVisitor,
	isDBComponent
} from '../../shared/utils.js';
import { INTERACTIVE_ELEMENTS } from '../../shared/constants.js';

function isInteractiveElement(node: any): boolean {
	const openingElement = node.openingElement || node;
	const tagName =
		openingElement.rawName ||
		(openingElement.name?.type === 'JSXIdentifier'
			? openingElement.name.name
			: null);
	if (!tagName) return false;
	return INTERACTIVE_ELEMENTS.some(
		(el) =>
			tagName === el || tagName === el.toLowerCase().replace('db', 'db-')
	);
}

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBTooltip is child of interactive element for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#tooltip-requires-interactive-parent'
		},
		messages: {
			requiresInteractive:
				'DBTooltip must be a child of an interactive element (button, link, etc.) for accessibility'
		},
		schema: []
	},
	create(context: any) {
		const checkTooltip = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, 'DBTooltip')) return;

			let parent: any = node.parent;
			while (parent) {
				if (
					parent.type === 'JSXElement' ||
					parent.type === 'VElement'
				) {
					if (isInteractiveElement(parent)) {
						return;
					}
				}
				parent = parent.parent;
			}

			context.report({
				node: openingElement,
				messageId: 'requiresInteractive'
			});
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkTooltip, Element: checkTooltip },
			{ JSXElement: checkTooltip }
		);
	}
};
