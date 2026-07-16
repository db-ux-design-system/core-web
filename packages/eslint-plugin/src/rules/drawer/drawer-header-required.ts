import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	isDBComponent
} from '../../shared/utils.js';

/**
 * Checks if an Angular node has a child with the `header` attribute that
 * contains (or is) a DBDrawerHeader component.
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
				// Verify the child IS a db-drawer-header or CONTAINS one
				if (isDBComponent(child, 'DBDrawerHeader')) {
					return true;
				}
				// Check if any descendant is a db-drawer-header
				return hasDrawerHeader(child);
			}
		}
		return false;
	});
}

/**
 * Recursively checks if a node or its children contain a DBDrawerHeader component.
 */
function hasDrawerHeader(node: any): boolean {
	if (!node.children) {
		return false;
	}
	return node.children.some((child: any) => {
		if (
			(child.type === 'Element' || child.type === 'Element$1') &&
			isDBComponent(child, 'DBDrawerHeader')
		) {
			return true;
		}
		return hasDrawerHeader(child);
	});
}

/**
 * Checks if a Vue node has a child template with v-slot:header or #header
 * that contains a DBDrawerHeader component.
 * In Vue, the drawer uses a named slot:
 *   <DBDrawer><template v-slot:header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer>
 *   <DBDrawer><template #header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer>
 */
function hasVueHeaderSlot(node: any): boolean {
	return (node.children || []).some((child: any) => {
		if (child.type !== 'VElement' && child.type !== 'Element') {
			return false;
		}

		if (child.rawName !== 'template' && child.name !== 'template') {
			return false;
		}

		const attrs = child.startTag?.attributes || [];
		const isHeaderSlot = attrs.some((attr: any) => {
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

			return keyName === 'slot' && argName === 'header';
		});

		if (!isHeaderSlot) {
			return false;
		}

		// Verify the slot template contains a DBDrawerHeader
		return hasVueDrawerHeader(child);
	});
}

/**
 * Recursively checks if a Vue node or its children contain a DBDrawerHeader component.
 */
function hasVueDrawerHeader(node: any): boolean {
	if (!node.children) {
		return false;
	}
	return node.children.some((child: any) => {
		if (
			(child.type === 'VElement' || child.type === 'Element') &&
			isDBComponent(child, 'DBDrawerHeader')
		) {
			return true;
		}
		return hasVueDrawerHeader(child);
	});
}

/**
 * Checks if a JSX header attribute value contains a valid DBDrawerHeader or
 * a dynamic expression that we cannot statically verify.
 */
function isValidHeaderProp(headerAttr: any): boolean {
	const { value } = headerAttr;

	// Boolean attribute (e.g. <DBDrawer header>) or string literal (e.g. <DBDrawer header="Title">)
	// are NOT valid — the header prop must contain a DBDrawerHeader component
	if (!value || value.type === 'Literal') {
		return false;
	}

	if (value?.type !== 'JSXExpressionContainer') {
		return false;
	}

	const expr = value.expression;
	if (expr?.type === 'JSXElement') {
		const innerOpening = expr.openingElement;
		return (
			Boolean(innerOpening) &&
			isDBComponent(innerOpening, COMPONENTS.DBDrawerHeader)
		);
	}

	// Allow variable references (e.g. header={headerSlot})
	// since we can't statically verify what the variable contains
	const dynamicTypes = [
		'Identifier',
		'MemberExpression',
		'CallExpression',
		'ConditionalExpression',
		'LogicalExpression'
	];

	// Allow JSX fragments only if they contain a DBDrawerHeader child
	if (expr?.type === 'JSXFragment') {
		const children = expr.children || [];
		return children.some(
			(child: any) =>
				child.type === 'JSXElement' &&
				child.openingElement &&
				isDBComponent(child.openingElement, COMPONENTS.DBDrawerHeader)
		);
	}

	return dynamicTypes.includes(expr?.type);
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

			// In React, DBDrawerHeader is passed via the `header` prop (JSXAttribute)
			const headerAttr = (openingElement.attributes || []).find(
				(attr: any) =>
					attr.type === 'JSXAttribute' && attr.name?.name === 'header'
			);
			if (headerAttr && isValidHeaderProp(headerAttr)) {
				return;
			}

			// In Vue, check for <template v-slot:header> or <template #header>
			if (hasVueHeaderSlot(node)) {
				return;
			}

			// In Vue, check for v-bind:header / :header prop
			const startTag = node.startTag || openingElement;
			const vueHeaderAttr = (startTag.attributes || []).find(
				(attr: any) => {
					if (attr.directive && attr.key) {
						const keyName =
							typeof attr.key.name === 'string'
								? attr.key.name
								: attr.key.name?.name;
						const argName = attr.key.argument
							? typeof attr.key.argument === 'string'
								? attr.key.argument
								: attr.key.argument.name
							: undefined;
						return keyName === 'bind' && argName === 'header';
					}
					return false;
				}
			);
			if (vueHeaderAttr) {
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
