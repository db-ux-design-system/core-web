import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

function getTextContent(node: TSESTree.JSXElement): string | null {
	const textChild = node.children.find((child) => child.type === 'JSXText');
	return textChild && textChild.type === 'JSXText'
		? textChild.value.trim()
		: null;
}

export default createRule({
	name: 'badge-corner-placement-rules',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBBadge with corner placement has max 3 characters and label'
		},
		fixable: 'code',
		messages: {
			textTooLong:
				'DBBadge with corner placement must have max 3 characters in text/children',
			missingLabel:
				'DBBadge with corner placement must have a label attribute for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBBadge')) return;

				const placement = getAttributeValue(
					node.openingElement,
					'placement'
				);
				if (!placement || placement === 'inline') return;

				const text = getAttributeValue(node.openingElement, 'text');
				const children = getTextContent(node);
				const content =
					(typeof text === 'string' ? text : children) || '';
				const label = getAttributeValue(node.openingElement, 'label');

				if (content.length > 3) {
					context.report({
						node: node.openingElement,
						messageId: 'textTooLong',
						fix(fixer) {
							const fixes = [];
							const shortText = content.slice(0, 3);

							if (text && typeof text === 'string') {
								const textAttr =
									node.openingElement.attributes.find(
										(a) =>
											a.type === 'JSXAttribute' &&
											a.name.name === 'text'
									) as TSESTree.JSXAttribute;
								if (textAttr) {
									fixes.push(
										fixer.replaceText(
											textAttr,
											`text="${shortText}" label="${content}"`
										)
									);
								}
							} else if (children) {
								const textChild = node.children.find(
									(c) => c.type === 'JSXText'
								) as TSESTree.JSXText;
								if (textChild) {
									fixes.push(
										fixer.replaceText(textChild, shortText)
									);
									const lastAttr =
										node.openingElement.attributes[
											node.openingElement.attributes
												.length - 1
										];
									const insertPos = lastAttr
										? lastAttr.range[1]
										: node.openingElement.name.range[1];
									fixes.push(
										fixer.insertTextAfterRange(
											[insertPos, insertPos],
											` label="${content}"`
										)
									);
								}
							}

							return fixes;
						}
					});
				}

				if (!label) {
					context.report({
						node: node.openingElement,
						messageId: 'missingLabel'
					});
				}
			}
		};
	}
});
