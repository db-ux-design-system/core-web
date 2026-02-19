import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure DBCustomSelect with selectedType="tag" has removeTagsTexts',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#custom-select-tags-remove-text-required'
		},
		messages: {
			[MESSAGE_IDS.CUSTOM_SELECT_MISSING_REMOVE_TAGS_TEXTS]:
				MESSAGES.CUSTOM_SELECT_MISSING_REMOVE_TAGS_TEXTS
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const selectedType = getAttributeValue(node, 'selectedType');
			if (selectedType !== 'tag') return;

			const removeTagsTexts = getAttributeValue(node, 'removeTagsTexts');

			if (removeTagsTexts === undefined || removeTagsTexts === '') {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId:
						MESSAGE_IDS.CUSTOM_SELECT_MISSING_REMOVE_TAGS_TEXTS
				});
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBCustomSelect,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		const checkCustomSelect = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBCustomSelect))
				return;

			const selectedType = getAttributeValue(
				openingElement,
				'selectedType'
			);
			if (selectedType !== 'tag') return;

			const removeTagsTexts = getAttributeValue(
				openingElement,
				'removeTagsTexts'
			);

			if (removeTagsTexts === undefined || removeTagsTexts === '') {
				context.report({
					node: openingElement,
					messageId:
						MESSAGE_IDS.CUSTOM_SELECT_MISSING_REMOVE_TAGS_TEXTS
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkCustomSelect, Element: checkCustomSelect },
			{ JSXElement: checkCustomSelect }
		);
	}
};
