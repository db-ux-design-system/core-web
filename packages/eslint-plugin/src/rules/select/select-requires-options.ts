import {
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

function hasOptionChildren(node: any): boolean {
	return node.children?.some((child: any) => {
		if (child.type === 'JSXElement') {
			const name = child.openingElement.name;
			if (name.type === 'JSXIdentifier') {
				return name.name === 'option';
			}
		}
		if (child.type === 'VElement' || child.type === 'Element') {
			return child.rawName === 'option' || child.name === 'option';
		}
		return false;
	});
}

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBSelect has options property or option children',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#select-requires-options'
		},
		messages: {
			[MESSAGE_IDS.SELECT_MISSING_OPTIONS]: MESSAGES.SELECT_MISSING_OPTIONS
		},
		schema: []
	},
	create(context: any) {
		const checkSelect = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBSelect)) return;

			const options = getAttributeValue(openingElement, 'options');
			const hasChildren = hasOptionChildren(node);

			if (!options && !hasChildren) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.SELECT_MISSING_OPTIONS
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkSelect, Element: checkSelect },
			{ JSXElement: checkSelect }
		);
	}
};
