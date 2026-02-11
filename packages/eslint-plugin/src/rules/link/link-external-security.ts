import {
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

export default {
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure external links have proper security attributes',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#link-external-security'
		},
		messages: {
			[MESSAGE_IDS.LINK_MISSING_TARGET_BLANK]: MESSAGES.LINK_MISSING_TARGET_BLANK,
			[MESSAGE_IDS.LINK_MISSING_REFERRER_POLICY]: MESSAGES.LINK_MISSING_REFERRER_POLICY,
			[MESSAGE_IDS.LINK_MISSING_CONTENT_EXTERNAL]: MESSAGES.LINK_MISSING_CONTENT_EXTERNAL
		},
		schema: []
	},
	create(context: any) {
		const checkLink = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBLink)) return;

			const content = getAttributeValue(openingElement, 'content');
			const target = getAttributeValue(openingElement, 'target');
			const referrerPolicy = getAttributeValue(openingElement, 'referrerPolicy');

			if (content === 'external') {
				if (target !== '_blank') {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.LINK_MISSING_TARGET_BLANK
					});
				}
				if (!referrerPolicy) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.LINK_MISSING_REFERRER_POLICY
					});
				}
			}

			if (target === '_blank' && content !== 'external') {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.LINK_MISSING_CONTENT_EXTERNAL
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkLink, Element: checkLink },
			{ JSXElement: checkLink }
		);
	}
};
