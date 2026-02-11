import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAttributeValue, isDBComponent } from '../../shared/utils.js';

const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${name}`
);

const COMPONENTS_WITH_CLOSE_BUTTON = {
	DBNotification: 'closeButtonText',
	DBDrawer: 'closeButtonText',
	DBCustomSelect: 'mobileCloseButtonText'
};

export default createRule({
	name: 'close-button-text-required',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure components have close button text for accessibility'
		},
		messages: {
			missingCloseButtonText:
				'{{component}} must have {{attribute}} attribute for accessibility'
		},
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return {
			JSXElement(node: TSESTree.JSXElement) {
				const component = Object.keys(
					COMPONENTS_WITH_CLOSE_BUTTON
				).find((comp) => isDBComponent(node.openingElement, comp));

				if (!component) return;

				const attribute =
					COMPONENTS_WITH_CLOSE_BUTTON[
						component as keyof typeof COMPONENTS_WITH_CLOSE_BUTTON
					];
				const value = getAttributeValue(node.openingElement, attribute);

				if (!value) {
					context.report({
						node: node.openingElement,
						messageId: 'missingCloseButtonText',
						data: { component, attribute }
					});
				}
			}
		};
	}
});
