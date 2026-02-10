import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

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

export default createRule({
	name: 'prefer-icon-attribute',
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prefer icon attribute over DBIcon child component'
		},
		fixable: 'code',
		messages: {
			preferAttribute:
				'Use icon attribute instead of DBIcon child in {{component}}'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				const openingElement = node.openingElement;

				const component = COMPONENTS_WITH_ICON_ATTR.find((comp) =>
					isDBComponent(openingElement, comp)
				);
				if (!component) return;

				const iconChild = node.children.find(
					(child) =>
						child.type === 'JSXElement' &&
						isDBComponent(child.openingElement, 'DBIcon')
				) as TSESTree.JSXElement | undefined;

				if (iconChild) {
					const iconValue = getAttributeValue(
						iconChild.openingElement,
						'icon'
					);

					context.report({
						node: iconChild,
						messageId: 'preferAttribute',
						data: { component },
						fix(fixer) {
							if (!iconValue || typeof iconValue !== 'string')
								return null;

							const fixes = [];

							// Remove DBIcon child
							fixes.push(fixer.remove(iconChild));

							// Add icon attribute to parent
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

							return fixes;
						}
					});
				}
			}
		};
	}
});
