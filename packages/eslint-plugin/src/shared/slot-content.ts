import {
	angularChildNodes,
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getVueSlotArgument,
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
	return angularChildNodes(node).some((child: any) => {
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
 * Checks if an Angular node has a child with the slot-projection attribute that
 * contains (or is) the header component.
 * In Angular, the parent uses `<ng-content select="[header]">` for slot projection,
 * which matches the `header` attribute, not a `slot="header"` value, so a valid usage is:
 *   <db-drawer><db-drawer-header header>Title</db-drawer-header></db-drawer>
 *   <db-drawer><ng-container header><db-drawer-header>Title</db-drawer-header></ng-container></db-drawer>
 * `slot="header"` is deliberately NOT accepted: Angular does not project it into the
 * named region, so the markup would not enter the slot. This also keeps this rule
 * consistent with `sub-component-required-parent`, which matches the same attribute.
 */
function hasAngularHeaderSlot(node: any, header: string): boolean {
	return angularChildNodes(node).some((child: any) => {
		// The projected header may sit one (or more) levels deeper inside a
		// wrapper that still projects transparently into the slot:
		//   - a structural directive (*ngIf, *ngFor) wraps it in a Template node
		//   - built-in control flow (@if, @for, @switch, @defer) wraps it in block
		//     nodes (IfBlock -> IfBlockBranch, ForLoopBlock, SwitchBlock ->
		//     SwitchBlockCase, DeferredBlock, ...) whose children live in varying
		//     collections (children/branches/cases). angularChildNodes flattens
		//     them, so recurse through any non-element wrapper; real elements are
		//     handled below where the projection attribute is checked.
		if (
			child.type !== 'Element' &&
			child.type !== 'Element$1' &&
			angularChildNodes(child).length > 0
		) {
			return hasAngularHeaderSlot(child, header);
		}

		if (child.type === 'Element' || child.type === 'Element$1') {
			// Check if child has the `header` projection attribute
			const hasHeaderAttr = child.attributes?.some(
				(attr: any) => attr.name === 'header'
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
			(child.type === 'VElement' ||
				child.type === 'Element' ||
				child.type === 'Element$1') &&
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
		if (
			child.type !== 'VElement' &&
			child.type !== 'Element' &&
			child.type !== 'Element$1'
		) {
			return false;
		}

		if (child.rawName !== 'template' && child.name !== 'template') {
			return false;
		}

		const attrs = child.startTag?.attributes || [];
		const slotArgs = attrs
			.map((attr: any) => getVueSlotArgument(attr))
			.filter(Boolean);

		// A dynamic slot argument (`#[slotName]`) cannot be resolved to a slot
		// name statically, so its destination is unknown. But its content is
		// statically visible, so we still require the header component to appear
		// inside it - only the destination, not the content, is treated as
		// unverified. A dynamic slot holding a real header is accepted; one that
		// holds plain markup falls through so the header must be found elsewhere.
		const isDynamicSlot = slotArgs.some((arg: any) => arg.dynamic);
		if (isDynamicSlot) {
			return hasVueHeader(child, header);
		}

		const isHeaderSlot = slotArgs.some((arg: any) => arg.name === 'header');
		if (!isHeaderSlot) {
			return false;
		}

		// Verify the slot template contains the header component
		return hasVueHeader(child, header);
	});
}

// Expression kinds whose contents cannot be verified statically. When the header
// resolves to one of these it may still contain the header component at runtime
// (e.g. `header={show && <DBDialogHeader />}`), so it is accepted as unresolved -
// both as a direct header value and when nested inside a fragment/element wrapper.
const DYNAMIC_EXPRESSION_TYPES = new Set([
	'Identifier',
	'MemberExpression',
	'CallExpression',
	'ConditionalExpression',
	'LogicalExpression'
]);

/**
 * Recursively checks if a JSX expression tree contains the header component or a
 * dynamic expression that we cannot statically verify (and therefore accept).
 */
function hasJsxHeader(node: any, header: string): boolean {
	if (!node) {
		return false;
	}

	// A wrapper may nest the header in an expression container, e.g.
	// `header={<>{show && <DBDialogHeader />}</>}`, or in a transparent TypeScript
	// node that does not change what React renders, e.g.
	// `header={(<DBDialogHeader />) as ReactNode}` (TSAsExpression),
	// `... satisfies ReactNode` (TSSatisfiesExpression) or `header!` (TSNonNullExpression).
	// A `ChainExpression` wraps an optional chain (`header={slots?.header}`) around
	// its inner Member/Call expression, and a `SpreadElement` wraps a spread
	// (`header={[...headers]}`) around its argument - both are transparent for what
	// value flows through. Peel all of these up front so the inner expression is
	// treated exactly like the same expression used directly (a dynamic expression
	// is accepted, an element/fragment/array is searched).
	let current = node;
	while (current) {
		if (
			current.type === 'JSXExpressionContainer' ||
			current.type === 'TSAsExpression' ||
			current.type === 'TSSatisfiesExpression' ||
			current.type === 'TSNonNullExpression' ||
			current.type === 'ChainExpression'
		) {
			current = current.expression;
		} else if (current.type === 'SpreadElement') {
			current = current.argument;
		} else {
			break;
		}
	}
	if (!current) {
		return false;
	}

	if (current.type === 'JSXElement') {
		const opening = current.openingElement;
		if (opening && isDBComponent(opening, header)) {
			return true;
		}
		// Recursively check children (e.g. <div><DBDrawerHeader>...</DBDrawerHeader></div>).
		return (current.children || []).some((child: any) =>
			hasJsxHeader(child, header)
		);
	}

	if (current.type === 'JSXFragment') {
		return (current.children || []).some((child: any) =>
			hasJsxHeader(child, header)
		);
	}

	// React renders a node array normally, e.g. `header={[<DBDialogHeader />]}`,
	// so recurse through its elements (skipping array holes/`null`) before
	// falling through to the dynamic-type check.
	if (current.type === 'ArrayExpression') {
		return (current.elements || []).some((element: any) =>
			hasJsxHeader(element, header)
		);
	}

	// `undefined` is an Identifier, but it is the statically known empty value:
	// React renders no header for `header={undefined}`, so it must NOT be accepted
	// as an unresolved dynamic expression - the dialog would lack its close
	// control and accessible name. (A `null` literal is already rejected: it is a
	// Literal, not in DYNAMIC_EXPRESSION_TYPES.)
	if (current.type === 'Identifier' && current.name === 'undefined') {
		return false;
	}

	// An unverifiable dynamic expression is accepted (may resolve to the header).
	return DYNAMIC_EXPRESSION_TYPES.has(current.type);
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

	// Accept a dynamic value or an expression that (recursively) contains the header.
	return hasJsxHeader(value.expression, header);
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

				const attributes = openingElement.attributes || [];

				// In React, the header component is passed via the `header` prop.
				// With JSX later-wins semantics, the last explicit `header`
				// attribute is authoritative; take it if present.
				const lastHeaderIndex = attributes.findLastIndex(
					(attr: any) =>
						attr.type === 'JSXAttribute' &&
						attr.name?.name === 'header'
				);
				const lastSpreadIndex = attributes.findLastIndex(
					(attr: any) => attr.type === 'JSXSpreadAttribute'
				);

				// A JSX spread (e.g. <DBDialog {...dialogProps}>) may carry the
				// `header` prop, and its contents cannot be verified statically -
				// same as an identifier or call-expression header value. Treat it
				// as unresolved and do not report, so a standard React composition
				// pattern does not fail lint. But only when the spread can still
				// determine the final value: a later explicit `header` overrides
				// the spread (React later-wins), so that explicit value must be
				// validated instead.
				if (lastSpreadIndex > lastHeaderIndex) {
					return;
				}

				const headerAttr =
					lastHeaderIndex === -1
						? undefined
						: attributes[lastHeaderIndex];
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
				// `Element$1` is the Vue parser's fallback element type; register
				// it too so a DBDialog/DBDrawer root exposed as that node is still
				// validated (the traversal helpers already recognize `Element$1`).
				{
					VElement: checkParent,
					Element: checkParent,
					Element$1: checkParent
				},
				{ JSXElement: checkParent }
			);
		}
	};
}
