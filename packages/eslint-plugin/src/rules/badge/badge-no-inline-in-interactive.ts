import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

const INTERACTIVE_PARENTS = ['DBButton', 'DBLink', 'button', 'a'];

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Prevent inline placement for DBBadge inside interactive elements',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#badge-no-inline-in-interactive'
		},
		fixable: 'code',
		messages: {
			[MESSAGE_IDS.BADGE_NO_INLINE_IN_INTERACTIVE]: MESSAGES.BADGE_NO_INLINE_IN_INTERACTIVE
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const placement = getAttributeValue(node, 'placement');
			if (placement && placement !== 'inline') return;

			let parent: any = node.parent;
			while (parent) {
				if (parent.type === 'Element') {
					const matchedParent = INTERACTIVE_PARENTS.find(
						(p) => parent.name === p || parent.name === p.toLowerCase().replace('db', 'db-')
					);

					if (matchedParent) {
						const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
						context.report({
							loc,
							messageId: MESSAGE_IDS.BADGE_NO_INLINE_IN_INTERACTIVE,
							data: { parent: matchedParent }
						});
						return;
					}
				}
				parent = parent.parent;
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBBadge, angularHandler);
		if (angularVisitors) return angularVisitors;

		const checkBadge = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBBadge)) return;

			const placement = getAttributeValue(openingElement, 'placement');
			if (placement && placement !== 'inline') return;

			let parent: any = node.parent;
			while (parent) {
				if (
					parent.type === 'JSXElement' ||
					parent.type === 'VElement'
				) {
					const parentOpening = parent.openingElement || parent;
					const parentName =
						parentOpening.name || parentOpening.rawName;
					const name =
						typeof parentName === 'string'
							? parentName
							: parentName.type === 'JSXIdentifier'
								? parentName.name
								: null;
					if (name) {
						const matchedParent = INTERACTIVE_PARENTS.find(
							(p) =>
								name === p ||
								name === p.toLowerCase().replace('db', 'db-')
						);

						if (matchedParent) {
							context.report({
								node: openingElement,
								messageId: MESSAGE_IDS.BADGE_NO_INLINE_IN_INTERACTIVE,
								data: { parent: matchedParent },
								fix(fixer: any) {
									if (node.openingElement) {
										// JSX
										const placementAttr =
											openingElement.attributes.find(
												(a: any) =>
													a.type === 'JSXAttribute' &&
													a.name.name === 'placement'
											);
										if (placementAttr) {
											return fixer.replaceText(
												placementAttr,
												'placement="corner-top-right"'
											);
										} else {
											const lastAttr =
												openingElement.attributes[
													openingElement.attributes
														.length - 1
												];
											const insertPos = lastAttr
												? lastAttr.range[1]
												: openingElement.name.range[1];
											return fixer.insertTextAfterRange(
												[insertPos, insertPos],
												' placement="corner-top-right"'
											);
										}
									} else {
										// Vue
										const placementAttr =
											openingElement.startTag.attributes.find(
												(a: any) =>
													a.key.name === 'placement'
											);
										if (placementAttr) {
											return fixer.replaceText(
												placementAttr,
												'placement="corner-top-right"'
											);
										} else {
											const attrs =
												openingElement.startTag
													.attributes;
											if (attrs.length > 0) {
												const lastAttr =
													attrs[attrs.length - 1];
												return fixer.insertTextAfterRange(
													[
														lastAttr.range[1],
														lastAttr.range[1]
													],
													' placement="corner-top-right"'
												);
											} else {
												const insertPos =
													openingElement.startTag
														.range[0] +
													1 +
													openingElement.rawName
														.length;
												return fixer.insertTextAfterRange(
													[insertPos, insertPos],
													' placement="corner-top-right"'
												);
											}
										}
									}
								}
							});
							return;
						}
					}
				}
				parent = parent.parent;
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkBadge, Element: checkBadge },
			{ JSXElement: checkBadge }
		);
	}
};
