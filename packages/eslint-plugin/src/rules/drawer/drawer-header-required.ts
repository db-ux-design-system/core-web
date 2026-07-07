import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

/**
 * Checks if an Angular node has a child with the `header` attribute.
 * In Angular, the drawer uses `<ng-content select="[header]">` for slot projection,
 * so a valid usage is:
 *   <db-drawer><db-drawer-header header>Title</db-drawer-header></db-drawer>
 *   <db-drawer><ng-container header><db-drawer-header>Title</db-drawer-header></ng-container></db-drawer>
 */
function hasAngularHeaderSlot(node: any): boolean {
	return (node.children || []).some((child: any) => {
		if (child.type === 'Element' || child.type === 'Element$1') {
			// Check if child has the `header` attribute
			const hasHeaderAttr = child.attributes?.some(
				(attr: any) => attr.name === 'header'
			);
			if (hasHeaderAttr) {
				return true;
			}
		}
		return false;
	});
}

/**
 * Checks if a Vue node has a child template with v-slot:header or #header.
 * In Vue, the drawer uses a named slot:
 *   <DBDrawer><template v-slot:header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer>
 *   <DBDrawer><template #header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer>
 */
function hasVueHeaderSlot(node: any): boolean {
	return (node.children || []).some((child: any) => {
		if (child.type === 'VElement' || child.type === 'Element') {
			// Check for <template v-slot:header> or <template #header>
			if (child.rawName === 'template' || child.name === 'template') {
				const attrs = child.startTag?.attributes || [];
				return attrs.some((attr: any) => {
					const keyName =
						typeof attr.key?.name === 'string'
							? attr.key.name
							: attr.key?.name?.name;
					const argName = attr.key?.argument
						? typeof attr.key.argument === 'string'
							? attr.key.argument
							: typeof attr.key.argument.name === 'string'
								? attr.key.argument.name
								: attr.key.argument.name?.name
						: undefined;

					// v-slot:header (keyName='slot', argName='header')
					if (keyName === 'slot' && argName === 'header') {
						return true;
					}
					// #header shorthand (keyName='slot', argName='header' via VDirectiveKey)
					return false;
				});
			}
		}
		return false;
	});
}

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure DBDrawer has a DBDrawerHeader for accessibility (provides close button and aria-labelledby)',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#drawer-header-required'
		},
		messages: {
			[MESSAGE_IDS.DRAWER_HEADER_REQUIRED]:
				MESSAGES.DRAWER_HEADER_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			// In Angular, check for a child with the `header` attribute
			// e.g. <db-drawer-header header> or <ng-container header>
			if (hasAngularHeaderSlot(node)) {
				return;
			}

			const loc = parserServices.convertNodeSourceSpanToLoc(
				node.sourceSpan
			);
			context.report({
				loc,
				messageId: MESSAGE_IDS.DRAWER_HEADER_REQUIRED,
				data: { component: node.name }
			});
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBDrawer,
			angularHandler
		);
		if (angularVisitors) {
			return angularVisitors;
		}

		const checkDrawer = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBDrawer)) {
				return;
			}

			// In React, DBDrawerHeader is passed via the `header` prop
			const headerProp = getAttributeValue(openingElement, 'header');
			if (headerProp !== undefined) {
				return;
			}

			// In Vue, check for <template v-slot:header> or <template #header>
			if (hasVueHeaderSlot(node)) {
				return;
			}

			const componentName =
				openingElement.name?.name || openingElement.rawName;

			context.report({
				node: openingElement,
				messageId: MESSAGE_IDS.DRAWER_HEADER_REQUIRED,
				data: { component: componentName }
			});
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkDrawer, Element: checkDrawer },
			{ JSXElement: checkDrawer }
		);
	}
};
