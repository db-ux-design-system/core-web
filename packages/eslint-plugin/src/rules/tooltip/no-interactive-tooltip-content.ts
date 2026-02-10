import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

const INTERACTIVE_ELEMENTS = [
	'a',
	'button',
	'input',
	'select',
	'textarea',
	'details',
	'summary',
	'DBButton',
	'DBLink',
	'DBInput',
	'DBSelect',
	'DBTextarea',
	'DBCheckbox',
	'DBRadio',
	'DBSwitch'
];

function hasInteractiveChild(node: TSESTree.JSXElement): boolean {
	return node.children.some((child) => {
		if (child.type === 'JSXElement') {
			const name = child.openingElement.name;
			if (name.type === 'JSXIdentifier') {
				const tagName = name.name;
				if (
					INTERACTIVE_ELEMENTS.some(
						(el) =>
							tagName === el ||
							tagName === el.toLowerCase().replace('db', 'db-')
					)
				) {
					return true;
				}
			}
			return hasInteractiveChild(child);
		}
		return false;
	});
}

export default createRule({
	name: 'no-interactive-tooltip-content',
	meta: {
		type: 'problem',
		docs: {
			description: 'Prevent interactive elements inside DBTooltip'
		},
		messages: {
			noInteractive:
				'DBTooltip must not contain interactive elements. Use DBPopover for interactive content'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				if (!isDBComponent(node.openingElement, 'DBTooltip')) return;

				if (hasInteractiveChild(node)) {
					context.report({
						node: node.openingElement,
						messageId: 'noInteractive'
					});
				}
			}
		};
	}
});
