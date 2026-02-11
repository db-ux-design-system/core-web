import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

const INTERACTIVE_PARENTS = ['DBButton', 'DBLink', 'button', 'a'];

export default createRule({
	name: 'badge-no-inline-in-interactive',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Prevent inline placement for DBBadge inside interactive elements'
		},
		fixable: 'code',
		messages: {
			noInline:
				'DBBadge inside {{parent}} cannot have placement="inline". Use corner placement instead'
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
				if (placement && placement !== 'inline') return;

				let parent: TSESTree.Node | undefined = node.parent;
				while (parent) {
					if (parent.type === 'JSXElement') {
						const parentName = parent.openingElement.name;
						if (parentName.type === 'JSXIdentifier') {
							const name = parentName.name;
							const matchedParent = INTERACTIVE_PARENTS.find(
								(p) =>
									name === p ||
									name ===
										p.toLowerCase().replace('db', 'db-')
							);

							if (matchedParent) {
								context.report({
									node: node.openingElement,
									messageId: 'noInline',
									data: { parent: matchedParent },
									fix(fixer) {
										const placementAttr =
											node.openingElement.attributes.find(
												(a) =>
													a.type === 'JSXAttribute' &&
													a.name.name === 'placement'
											) as TSESTree.JSXAttribute;

										if (placementAttr) {
											return fixer.replaceText(
												placementAttr,
												'placement="corner-top-right"'
											);
										} else {
											const lastAttr =
												node.openingElement.attributes[
													node.openingElement
														.attributes.length - 1
												];
											const insertPos = lastAttr
												? lastAttr.range[1]
												: node.openingElement.name
														.range[1];
											return fixer.insertTextAfterRange(
												[insertPos, insertPos],
												' placement="corner-top-right"'
											);
										}
									}
								});
								return;
							}
						}
					}
					parent = parent.parent;
				}
			}
		};
	}
});
