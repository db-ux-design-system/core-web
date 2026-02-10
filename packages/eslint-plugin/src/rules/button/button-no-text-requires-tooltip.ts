import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import {
	getAttributeValue,
	hasChildOfType,
	isDBComponent
} from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

export default createRule({
	name: 'button-no-text-requires-tooltip',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBButton with noText has icon and DBTooltip child'
		},
		fixable: 'code',
		messages: {
			missingIcon: 'DBButton with noText must have an icon prop',
			missingTooltip:
				'DBButton with noText must have a DBTooltip child for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				const openingElement = node.openingElement;

				if (!isDBComponent(openingElement, 'DBButton')) return;

				const noText = getAttributeValue(openingElement, 'noText');
				if (!noText) return;

				const icon =
					getAttributeValue(openingElement, 'icon') ||
					getAttributeValue(openingElement, 'iconLeading') ||
					getAttributeValue(openingElement, 'iconTrailing');
				if (!icon) {
					context.report({
						node: openingElement,
						messageId: 'missingIcon'
					});
				}

				const hasTooltip = hasChildOfType(node, 'DBTooltip');
				if (!hasTooltip) {
					context.report({
						node: openingElement,
						messageId: 'missingTooltip',
						fix(fixer) {
							const closingTag = node.closingElement;
							if (!closingTag) return null;

							const componentName =
								openingElement.name.type === 'JSXIdentifier'
									? openingElement.name.name
									: 'DBButton';
							const tooltipName = componentName.includes('-')
								? 'db-tooltip'
								: 'DBTooltip';

							return fixer.insertTextBefore(
								closingTag,
								`\n  <${tooltipName}>Describe action</${tooltipName}>`
							);
						}
					});
				}
			}
		};
	}
});
