import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

function hasOptionChildren(node: TSESTree.JSXElement): boolean {
	return node.children.some((child) => {
		if (child.type === 'JSXElement') {
			const name = child.openingElement.name;
			if (name.type === 'JSXIdentifier') {
				return name.name === 'option';
			}
		}
		return false;
	});
}

export default createRule({
	name: 'select-requires-options',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBSelect has options property or option children'
		},
		messages: {
			missingOptions:
				'DBSelect must have either an options property or <option> children'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBSelect')) return;

				const options = getAttributeValue(
					node.openingElement,
					'options'
				);
				const hasChildren = hasOptionChildren(node);

				if (!options && !hasChildren) {
					context.report({
						node: node.openingElement,
						messageId: 'missingOptions'
					});
				}
			}
		};
	}
});
