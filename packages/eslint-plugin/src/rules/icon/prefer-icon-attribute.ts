import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

const COMPONENTS_WITH_ICON_ATTR = [
	'DBInput',
	'DBBrand',
	'DBButton',
	'DBCustomSelectListItem',
	'DBCustomSelect',
	'DBInfotext',
	'DBLink',
	'DBNavigationItem',
	'DBNotification',
	'DBSelect',
	'DBSwitch',
	'DBTabItem',
	'DBTag'
];

export default {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prefer icon attribute over DBIcon child component',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#prefer-icon-attribute'
		},
		fixable: 'code',
		messages: {
			[MESSAGE_IDS.ICON_PREFER_ATTRIBUTE]: MESSAGES.ICON_PREFER_ATTRIBUTE
		},
		schema: []
	},
	create(context: any) {
		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;

			const component = COMPONENTS_WITH_ICON_ATTR.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) return;

			const iconChild = node.children?.find(
				(child: any) =>
					(child.type === 'JSXElement' ||
						child.type === 'VElement') &&
					isDBComponent(child.openingElement || child, 'DBIcon')
			);

			if (iconChild) {
				const iconChildOpening = iconChild.openingElement || iconChild;
				const iconValue = getAttributeValue(iconChildOpening, 'icon');

				context.report({
					node: iconChild,
					messageId: MESSAGE_IDS.ICON_PREFER_ATTRIBUTE,
					data: { component },
					fix(fixer: any) {
						if (!iconValue || typeof iconValue !== 'string')
							return null;

						const fixes = [];
						fixes.push(fixer.remove(iconChild));

						if (node.openingElement) {
							// JSX
							const lastAttr =
								openingElement.attributes[
									openingElement.attributes.length - 1
								];
							const insertPos = lastAttr
								? lastAttr.range[1]
								: openingElement.name.range[1];
							fixes.push(
								fixer.insertTextAfterRange(
									[insertPos, insertPos],
									` icon="${iconValue}"`
								)
							);
						} else {
							// Vue
							const attrs = openingElement.startTag.attributes;
							if (attrs.length > 0) {
								const lastAttr = attrs[attrs.length - 1];
								const insertPos = lastAttr.range[1];
								fixes.push(
									fixer.insertTextAfterRange(
										[insertPos, insertPos],
										` icon="${iconValue}"`
									)
								);
							} else {
								const insertPos =
									openingElement.startTag.range[0] +
									1 +
									openingElement.rawName.length;
								fixes.push(
									fixer.insertTextAfterRange(
										[insertPos, insertPos],
										` icon="${iconValue}"`
									)
								);
							}
						}

						return fixes;
					}
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
