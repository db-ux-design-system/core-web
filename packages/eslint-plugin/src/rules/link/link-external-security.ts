import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularFix,
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
				'Ensure external links have proper security attributes',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#link-external-security'
		},
		fixable: 'code',
		messages: {
			[MESSAGE_IDS.LINK_MISSING_TARGET_BLANK]:
				MESSAGES.LINK_MISSING_TARGET_BLANK,
			[MESSAGE_IDS.LINK_MISSING_REFERRER_POLICY]:
				MESSAGES.LINK_MISSING_REFERRER_POLICY,
			[MESSAGE_IDS.LINK_MISSING_CONTENT_EXTERNAL]:
				MESSAGES.LINK_MISSING_CONTENT_EXTERNAL
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const content = getAttributeValue(node, 'content');
			const target = getAttributeValue(node, 'target');
			const referrerPolicy = getAttributeValue(node, 'referrerPolicy');
			const loc = parserServices.convertNodeSourceSpanToLoc(
				node.sourceSpan
			);

			if (content === 'external' && target !== '_blank') {
				context.report({
					loc,
					messageId: MESSAGE_IDS.LINK_MISSING_TARGET_BLANK,
					fix(fixer: any) {
						const fixData = createAngularFix(
							context,
							node,
							' target="_blank"'
						);
						if (!fixData) return null;
						return fixer.insertTextBeforeRange(
							[fixData.insertPos, fixData.insertPos],
							fixData.attributeText
						);
					}
				});
			}
			if (content === 'external' && !referrerPolicy) {
				context.report({
					loc,
					messageId: MESSAGE_IDS.LINK_MISSING_REFERRER_POLICY,
					fix(fixer: any) {
						const fixData = createAngularFix(
							context,
							node,
							' referrerPolicy="no-referrer"'
						);
						if (!fixData) return null;
						return fixer.insertTextBeforeRange(
							[fixData.insertPos, fixData.insertPos],
							fixData.attributeText
						);
					}
				});
			}
			if (target === '_blank' && content !== 'external') {
				context.report({
					loc,
					messageId: MESSAGE_IDS.LINK_MISSING_CONTENT_EXTERNAL,
					fix(fixer: any) {
						const fixData = createAngularFix(
							context,
							node,
							' content="external"'
						);
						if (!fixData) return null;
						return fixer.insertTextBeforeRange(
							[fixData.insertPos, fixData.insertPos],
							fixData.attributeText
						);
					}
				});
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBLink,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		const checkLink = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBLink)) return;

			const content = getAttributeValue(openingElement, 'content');
			const target = getAttributeValue(openingElement, 'target');
			const referrerPolicy = getAttributeValue(
				openingElement,
				'referrerPolicy'
			);

			if (content === 'external') {
				if (target !== '_blank') {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.LINK_MISSING_TARGET_BLANK,
						fix(fixer: any) {
							if (node.openingElement) {
								const lastAttr =
									openingElement.attributes[
										openingElement.attributes.length - 1
									];
								const insertPos = lastAttr
									? lastAttr.range[1]
									: openingElement.name.range[1];
								return fixer.insertTextAfterRange(
									[insertPos, insertPos],
									' target="_blank"'
								);
							} else {
								const attrs =
									openingElement.startTag.attributes;
								if (attrs.length > 0) {
									return fixer.insertTextAfterRange(
										[
											attrs[attrs.length - 1].range[1],
											attrs[attrs.length - 1].range[1]
										],
										' target="_blank"'
									);
								} else {
									const insertPos =
										openingElement.startTag.range[0] +
										1 +
										openingElement.rawName.length;
									return fixer.insertTextAfterRange(
										[insertPos, insertPos],
										' target="_blank"'
									);
								}
							}
						}
					});
				}
				if (!referrerPolicy) {
					context.report({
						node: openingElement,
						messageId: MESSAGE_IDS.LINK_MISSING_REFERRER_POLICY,
						fix(fixer: any) {
							if (node.openingElement) {
								const lastAttr =
									openingElement.attributes[
										openingElement.attributes.length - 1
									];
								const insertPos = lastAttr
									? lastAttr.range[1]
									: openingElement.name.range[1];
								return fixer.insertTextAfterRange(
									[insertPos, insertPos],
									' referrerPolicy="no-referrer"'
								);
							} else {
								const attrs =
									openingElement.startTag.attributes;
								if (attrs.length > 0) {
									return fixer.insertTextAfterRange(
										[
											attrs[attrs.length - 1].range[1],
											attrs[attrs.length - 1].range[1]
										],
										' referrerPolicy="no-referrer"'
									);
								} else {
									const insertPos =
										openingElement.startTag.range[0] +
										1 +
										openingElement.rawName.length;
									return fixer.insertTextAfterRange(
										[insertPos, insertPos],
										' referrerPolicy="no-referrer"'
									);
								}
							}
						}
					});
				}
			}

			if (target === '_blank' && content !== 'external') {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.LINK_MISSING_CONTENT_EXTERNAL,
					fix(fixer: any) {
						if (node.openingElement) {
							const lastAttr =
								openingElement.attributes[
									openingElement.attributes.length - 1
								];
							const insertPos = lastAttr
								? lastAttr.range[1]
								: openingElement.name.range[1];
							return fixer.insertTextAfterRange(
								[insertPos, insertPos],
								' content="external"'
							);
						} else {
							const attrs = openingElement.startTag.attributes;
							if (attrs.length > 0) {
								return fixer.insertTextAfterRange(
									[
										attrs[attrs.length - 1].range[1],
										attrs[attrs.length - 1].range[1]
									],
									' content="external"'
								);
							} else {
								const insertPos =
									openingElement.startTag.range[0] +
									1 +
									openingElement.rawName.length;
								return fixer.insertTextAfterRange(
									[insertPos, insertPos],
									' content="external"'
								);
							}
						}
					}
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
