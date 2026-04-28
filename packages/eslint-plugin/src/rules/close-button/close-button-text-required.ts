import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

const COMPONENTS_WITH_CLOSE_BUTTON = {
	DBNotification: 'closeButtonText',
	DBDrawer: 'closeButtonText',
	DBCustomSelect: 'mobileCloseButtonText'
};

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure components have close button text for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#close-button-text-required'
		},
		messages: {
			missingCloseButtonText: MESSAGES.CLOSE_BUTTON_TEXT_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const component = Object.keys(COMPONENTS_WITH_CLOSE_BUTTON).find(
				(comp) => isDBComponent(node, comp)
			);

			if (!component) return;

			if (component === 'DBNotification') {
				const input = node.inputs?.find(
					(i: any) => i.name === 'closeable'
				);
				// Check for [closeable]="false" - Angular AST structure
				if (input) {
					const value_ = input.value;
					if (
						value_?.type === 'LiteralPrimitive' &&
						value_.value === false
					)
						return;
					if (value_?.source === 'false') return;
				} else {
					// Check for plain attribute closeable (no binding)
					const attr = node.attributes?.find(
						(a: any) => a.name === 'closeable'
					);
					if (!attr) return;
				}
			}

			const attribute =
				COMPONENTS_WITH_CLOSE_BUTTON[
					component as keyof typeof COMPONENTS_WITH_CLOSE_BUTTON
				];
			const value = getAttributeValue(node, attribute);

			if (value === null || value === '') {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.CLOSE_BUTTON_TEXT_REQUIRED,
					data: { component: node.name, attribute }
				});
			}
		};

		const angularVisitors: any = {};
		for (const comp of Object.keys(COMPONENTS_WITH_CLOSE_BUTTON)) {
			const visitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (visitors) {
				Object.assign(angularVisitors, visitors);
			}
		}

		if (Object.keys(angularVisitors).length > 0) return angularVisitors;

		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			const component = Object.keys(COMPONENTS_WITH_CLOSE_BUTTON).find(
				(comp) => isDBComponent(openingElement, comp)
			);

			if (!component) return;

			if (component === 'DBNotification') {
				// React: closeable={false}
				const closeableAttr = openingElement.attributes?.find(
					(a: any) =>
						a.type === 'JSXAttribute' && a.name.name === 'closeable'
				);
				if (
					closeableAttr?.value?.type === 'JSXExpressionContainer' &&
					closeableAttr.value.expression?.type === 'Literal' &&
					closeableAttr.value.expression.value === false
				)
					return;

				// Vue: key.name can be a VIdentifier object (key.name.name === 'bind')
				// or a plain string for non-directive attributes
				const isVueCloseableBind = (a: any) => {
					const keyName =
						typeof a.key?.name === 'string'
							? a.key.name
							: a.key?.name?.name;
					return (
						keyName === 'bind' &&
						a.key?.argument?.name === 'closeable'
					);
				};

				const isVueCloseableStatic = (a: any) => {
					const keyName =
						typeof a.key?.name === 'string'
							? a.key.name
							: a.key?.name?.name;
					return keyName === 'closeable';
				};

				const vueBindAttr =
					openingElement.startTag?.attributes?.find(
						isVueCloseableBind
					);
				if (
					vueBindAttr &&
					(vueBindAttr.value?.value === 'false' ||
						vueBindAttr.value?.expression?.value === false)
				)
					return;

				// Only skip if closeable attribute/binding doesn't exist
				const hasCloseable =
					closeableAttr ||
					openingElement.startTag?.attributes?.some(
						(a: any) =>
							isVueCloseableStatic(a) || isVueCloseableBind(a)
					);
				if (!hasCloseable) return;
			}

			const componentName =
				openingElement.name?.name || openingElement.rawName;

			const attribute =
				COMPONENTS_WITH_CLOSE_BUTTON[
					component as keyof typeof COMPONENTS_WITH_CLOSE_BUTTON
				];
			const value = getAttributeValue(openingElement, attribute);

			if (value === null || value === '') {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.CLOSE_BUTTON_TEXT_REQUIRED,
					data: { component: componentName, attribute }
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkComponent, Element: checkComponent },
			{ JSXElement: checkComponent }
		);
	}
};
