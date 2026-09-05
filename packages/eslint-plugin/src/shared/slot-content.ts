import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	isDBComponent,
	toKebabCase
} from './utils.js';

type HeaderRequiredRuleOptions = {
	/** Component that must carry the header slot, e.g. `DBDrawer`. */
	parent: string;
	/** Component that has to be assigned to the header slot, e.g. `DBDrawerHeader`. */
	header: string;
	/** ESLint message id, e.g. `drawerHeaderRequired`. */
	messageId: string;
	/** Message text for `messageId`, supporting the `{{component}}` placeholder. */
	message: string;
	/** `meta.docs.description` of the created rule. */
	description: string;
};

/**
 * Recursively checks if a node or its children contain the header component.
 */
function hasAngularHeader(node: any, header: string): boolean {
	if (!node.children) {
		return false;
	}
	return node.children.some((child: any) => {
		if (
			(child.type === 'Element' || child.type === 'Element$1') &&
			isDBComponent(child, header)
		) {
			return true;
		}
		return hasAngularHeader(child, header);
	});
}

/**
 * Checks if an Angular node has a child with the `header` attribute that
 * contains (or is) the header component.
 * In Angular, the parent uses `<ng-content select="[header]">` for slot projection,
 * so a valid usage is:
 *   <db-drawer><db-drawer-header header>Title</db-drawer-header></db-drawer>
 *   <db-drawer><ng-container header><db-drawer-header>Title</db-drawer-header></ng-container></db-drawer>
 * The Web Components output renders `<slot name="header">` instead, so `slot="header"`
 * is accepted as well for consumers that use the custom elements in an Angular template.
 */
function hasAngularHeaderSlot(node: any, header: string): boolean {
	return (node.children || []).some((child: any) => {
		if (child.type === 'Element' || child.type === 'Element$1') {
			// Check if child has the `header` or `slot="header"` attribute
			const hasHeaderAttr = child.attributes?.some(
				(attr: any) =>
					attr.name === 'header' ||
					(attr.name === 'slot' && attr.value === 'header')
			);
			if (hasHeaderAttr) {
				// Verify the child IS the header component or CONTAINS one
				if (isDBComponent(child, header)) {
					return true;
				}
				// Check if any descendant is the header component
				return hasAngularHeader(child, header);
			}
		}
		return false;
	});
}

/**
 * Recursively checks if a Vue node or its children contain the header component.
 */
function hasVueHeader(node: any, header: string): boolean {
	if (!node.children) {
		return false;
	}
	return node.children.some((child: any) => {
		if (
			(child.type === 'VElement' || child.type === 'Element') &&
			isDBComponent(child, header)
		) {
			return true;
		}
		return hasVueHeader(child, header);
	});
}

/**
 * Checks if a Vue node has a child template with v-slot:header or #header
 * that contains the header component.
 * In Vue, the parent uses a named slot:
 *   <DBDrawer><template v-slot:header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer>
 *   <DBDrawer><template #header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer>
 */
function hasVueHeaderSlot(node: any, header: string): boolean {
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

		// Verify the slot template contains the header component
		return hasVueHeader(child, header);
	});
}

/**
 * Recursively checks if a JSX expression tree contains the header component.
 */
function hasJsxHeader(node: any, header: string): boolean {
	if (!node) {
		return false;
	}

	if (node.type === 'JSXElement') {
		const opening = node.openingElement;
		if (opening && isDBComponent(opening, header)) {
			return true;
		}
		// Recursively check children of JSX elements (e.g. <div><DBDrawerHeader>...</DBDrawerHeader></div>)
		const children = node.children || [];
		return children.some((child: any) => hasJsxHeader(child, header));
	}

	if (node.type === 'JSXFragment') {
		const children = node.children || [];
		return children.some((child: any) => hasJsxHeader(child, header));
	}

	return false;
}

/**
 * Checks if a JSX header attribute value contains a valid header component or
 * a dynamic expression that we cannot statically verify.
 */
function isValidHeaderProp(headerAttr: any, header: string): boolean {
	const { value } = headerAttr;

	// Boolean attribute (e.g. <DBDrawer header>) or string literal (e.g. <DBDrawer header="Title">)
	// are NOT valid - the header prop must contain the header component
	if (!value || value.type === 'Literal') {
		return false;
	}

	if (value?.type !== 'JSXExpressionContainer') {
		return false;
	}

	const expr = value.expression;

	// Allow variable references (e.g. header={headerSlot})
	// since we can't statically verify what the variable contains
	const dynamicTypes = [
		'Identifier',
		'MemberExpression',
		'CallExpression',
		'ConditionalExpression',
		'LogicalExpression'
	];

	if (dynamicTypes.includes(expr?.type)) {
		return true;
	}

	// Check if expression contains the header component (recursively)
	return hasJsxHeader(expr, header);
}

/**
 * Creates a rule that reports a `parent` usage whose `header` slot does not
 * resolve to the `header` component, for React, Angular and Vue.
 */
export function createHeaderRequiredRule({
	parent,
	header,
	messageId,
	message,
	description
}: HeaderRequiredRuleOptions) {
	// `drawerHeaderRequired` -> `drawer-header-required`
	const ruleName = toKebabCase(messageId);

	return {
		meta: {
			type: 'problem' as const,
			docs: {
				description,
				url: `https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#${ruleName}`
			},
			messages: {
				[messageId]: message
			},
			schema: []
		},
		create(context: any) {
			const angularHandler = (node: any, parserServices: any) => {
				// In Angular, check for a child with the `header` attribute
				// e.g. <db-drawer-header header> or <ng-container header>
				if (hasAngularHeaderSlot(node, header)) {
					return;
				}

				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId,
					data: { component: node.name }
				});
			};

			const angularVisitors = createAngularVisitors(
				context,
				parent,
				angularHandler
			);
			if (angularVisitors) {
				return angularVisitors;
			}

			const checkParent = (node: any) => {
				const openingElement = node.openingElement || node;
				if (!isDBComponent(openingElement, parent)) {
					return;
				}

				// In React, the header component is passed via the `header` prop (JSXAttribute)
				const headerAttr = (openingElement.attributes || []).find(
					(attr: any) =>
						attr.type === 'JSXAttribute' &&
						attr.name?.name === 'header'
				);
				if (headerAttr && isValidHeaderProp(headerAttr, header)) {
					return;
				}

				// In Vue, check for <template v-slot:header> or <template #header>
				if (hasVueHeaderSlot(node, header)) {
					return;
				}

				// Note: v-bind:header / :header is NOT accepted for Vue because
				// Vue uses named slots (<template #header>), not prop bindings.
				// A bound :header prop would not actually project into the header slot.

				const componentName =
					openingElement.name?.name || openingElement.rawName;

				context.report({
					node: openingElement,
					messageId,
					data: { component: componentName }
				});
			};

			return defineTemplateBodyVisitor(
				context,
				{ VElement: checkParent, Element: checkParent },
				{ JSXElement: checkParent }
			);
		}
	};
}
