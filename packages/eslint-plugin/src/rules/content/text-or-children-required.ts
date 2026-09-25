import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	angularChildNodes,
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isBareBooleanAttribute,
	isDBComponent,
	isStaticallyEmptyAngularInput,
	isStaticallyEmptyExpression,
	isUnresolvedBySpread
} from '../../shared/utils.js';

/**
 * A `text` attribute only counts as content when it is not absent and not an
 * empty (or whitespace-only) string. A valueless boolean attribute (`true`) and
 * a dynamic expression (non-empty sentinel string) are left as content, since
 * the former is not this rule's concern and the latter cannot be verified
 * statically. An empty string, by contrast, leaves the rendered element (and any
 * `aria-labelledby` pointing at it) without an accessible name.
 */
const hasTextContent = (text: string | boolean | undefined): boolean => {
	if (text === undefined) {
		return false;
	}
	if (typeof text === 'string') {
		return text.trim() !== '';
	}
	return true;
};

/**
 * Whether a React expression renders nothing. React renders no output for `null`,
 * `undefined`, `true`, `false`, an empty/whitespace string (`''`, `'   '`) or an
 * empty template literal, and an empty expression (`{}`). A node array renders
 * nothing when every element is itself empty (e.g. `[]`, `[null, false]`), so it
 * is inspected recursively; an array hole (`null` element) renders nothing too.
 * Anything else - an identifier, call, member access, conditional or non-empty
 * literal - cannot be verified statically, so it is treated as (possible) content.
 */
const isEmptyReactExpression = (expression: any): boolean => {
	if (!expression || expression.type === 'JSXEmptyExpression') {
		return true;
	}
	if (expression.type === 'Literal') {
		const { value } = expression;
		return (
			value === null ||
			value === true ||
			value === false ||
			(typeof value === 'string' && value.trim() === '')
		);
	}
	if (expression.type === 'Identifier') {
		return expression.name === 'undefined';
	}
	if (expression.type === 'TemplateLiteral') {
		return (
			expression.expressions.length === 0 &&
			// cspell:ignore quasis
			expression.quasis.every(
				(quasi: any) => (quasi.value?.cooked ?? '').trim() === ''
			)
		);
	}
	if (expression.type === 'ArrayExpression') {
		// An array of only non-rendering elements (or an empty array) renders
		// nothing; a hole is a `null` element that also renders nothing.
		return expression.elements.every((element: any) =>
			isEmptyReactExpression(element)
		);
	}
	return false;
};

/**
 * Whether a React JSX expression child (`{...}`) renders nothing, so it does not
 * count as content.
 */
const isEmptyJsxExpression = (container: any): boolean =>
	isEmptyReactExpression(container.expression);

/**
 * Whether an element node is a custom component (React PascalCase, or a custom
 * element with a hyphen such as `db-heading`) rather than a native HTML element.
 * A component renders content we cannot inspect statically, so it is treated as
 * (possible) content; a native element (`span`, `div`, `h2`) must be recursed
 * into, since an empty one (`<span />`) renders no accessible text.
 */
const isComponentElement = (child: any): boolean => {
	// JSX: the tag name lives on the opening element.
	const jsxName = child.openingElement?.name;
	if (jsxName) {
		// A member expression (e.g. <Foo.Bar />) is always a component.
		if (jsxName.type !== 'JSXIdentifier') {
			return true;
		}
		// React treats an uppercase-initial tag as a component, lowercase as a
		// native host element.
		return /^[A-Z]/.test(jsxName.name);
	}
	// Vue/Angular: the tag name is on rawName (Vue) or name (Angular). A custom
	// element / component contains a hyphen (`db-heading`) or starts uppercase
	// (`DBIcon`); a plain lowercase tag with no hyphen is native.
	const tagName: string = child.rawName ?? child.name ?? '';
	return /^[A-Z]/.test(tagName) || tagName.includes('-');
};

/**
 * Whether an Angular `BoundText` (`{{ ... }}`) statically renders no text. The
 * interpolation exposes its literal segments in `value.ast.strings` and its
 * expressions in `value.ast.expressions`. It renders nothing only when every
 * static segment is whitespace and every expression is statically empty
 * (`null`/`undefined` or an empty/whitespace string) - so `{{ null }}` and
 * `{{ '' }}` are empty, while a dynamic `{{ title }}` (and Angular's text-
 * rendering `{{ false }}`/`{{ 0 }}`) still counts as content.
 */
const isEmptyAngularBoundText = (child: any): boolean => {
	const interpolation = child.value?.ast ?? child.value;
	const expressions = interpolation?.expressions;
	if (!Array.isArray(expressions)) {
		// Shape we do not recognize - treat as (possible) content, not empty.
		return false;
	}
	const strings: string[] = interpolation.strings ?? [];
	return (
		strings.every((s) => (s ?? '').trim() === '') &&
		expressions.every((expression: any) =>
			isStaticallyEmptyAngularInput(expression)
		)
	);
};

/**
 * Whether an Angular node has renderable content, recursing through wrapper nodes.
 * A structural directive (`*ngIf`) or built-in control flow (`@if`, `@for`, ...)
 * makes the header's title a descendant of a Template/block node rather than a
 * direct child, so a flat check would miss it. `angularChildNodes` flattens those
 * wrappers. A non-empty `Text` or a `BoundText` (`{{ }}`) that does not statically
 * render empty counts as content. An element child counts when it is a custom
 * component (`db-*`, opaque render) or a native element that itself renders
 * content - recurse into it so an empty native wrapper (`<span></span>`) is not
 * mistaken for an accessible name.
 */
const hasAngularContent = (node: any): boolean =>
	angularChildNodes(node).some(
		(child: any) =>
			(child.type === 'Text' && child.value.trim() !== '') ||
			(child.type === 'BoundText' && !isEmptyAngularBoundText(child)) ||
			((child.type === 'Element' || child.type === 'Element$1') &&
				isComponentElement(child)) ||
			hasAngularContent(child)
	);

const COMPONENTS_REQUIRING_CONTENT = [
	'DBAccordionItem',
	'DBBadge',
	'DBButton',
	'DBLink',
	'DBIcon',
	'DBInfotext',
	'DBControlPanelNavigationItem',
	'DBNavigationItem',
	'DBNotification',
	// The dialog/drawer header sets the dialog's aria-labelledby to its content
	// container; without `text` or children that container is empty and the
	// dialog has no accessible name.
	COMPONENTS.DBDialogHeader,
	COMPONENTS.DBDrawerHeader
];

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure components have text property or children content',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#text-or-children-required'
		},
		messages: {
			missingContent: MESSAGES.TEXT_OR_CHILDREN_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const componentName = node.name;
			const component = COMPONENTS_REQUIRING_CONTENT.find((comp) =>
				isDBComponent(node, comp)
			);
			if (!component) {
				return;
			}

			// `getAttributeValue` collapses an empty Angular attribute value
			// (`text=""`) to `true`, which would hide an empty title. Read the
			// raw attribute so `text=""` is treated as empty, not as a boolean.
			const rawTextAttr = node.attributes?.find(
				(a: any) => a.name === 'text'
			);
			// A bare valueless attribute (`text`) renders an empty string in
			// Angular, so treat it as empty content rather than boolean `true`.
			// A dynamic `[text]="x"` binding also yields `true` but is unverifiable
			// content, so it must not be forced to empty.
			const text =
				rawTextAttr?.value === undefined
					? isBareBooleanAttribute(node, 'text')
						? ''
						: getAttributeValue(node, 'text')
					: rawTextAttr.value;
			// Recurse through Angular wrapper nodes (*ngIf Template, @if/@for/@switch
			// blocks) so a title nested in conditional control flow still counts.
			const hasChildren = hasAngularContent(node);

			if (!hasTextContent(text) && !hasChildren) {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.TEXT_OR_CHILDREN_REQUIRED,
					data: { component: componentName }
				});
			}
		};

		const angularVisitors: any = {};
		for (const comp of COMPONENTS_REQUIRING_CONTENT) {
			const visitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (visitors) {
				Object.assign(angularVisitors, visitors);
			}
		}

		if (Object.keys(angularVisitors).length > 0) {
			return angularVisitors;
		}

		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;

			const component = COMPONENTS_REQUIRING_CONTENT.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) {
				return;
			}

			const componentName =
				openingElement.name?.name || openingElement.rawName;

			// A bare valueless `text` (React `<DBDialogHeader text />` renders no
			// text; Vue `<DBDialogHeader text>` yields an empty string) is empty
			// content. getAttributeValue collapses it to `true`, so map a bare
			// attribute to '' while leaving dynamic values (DYNAMIC sentinel) intact.
			const text = isBareBooleanAttribute(openingElement, 'text')
				? ''
				: getAttributeValue(openingElement, 'text');

			// React also accepts `children` as an explicit prop
			// (`<DBDialogHeader children="Title" />` or `children={title}`), which
			// renders as the component's content. Evaluate it the same way as
			// `text`: a non-empty static string or a dynamic binding counts as
			// content; a bare attribute, empty/whitespace string or empty
			// expression does not.
			const childrenAttr = isBareBooleanAttribute(
				openingElement,
				'children'
			)
				? ''
				: getAttributeValue(openingElement, 'children');
			const isContentChild = (child: any): boolean =>
				(child.type === 'JSXText' && child.value.trim() !== '') ||
				(child.type === 'VText' && child.value.trim() !== '') ||
				// An element child. A custom/DB component renders opaque content
				// we cannot inspect, so it counts (unresolved). A native element
				// (<span>, <div>, <h2>, ...) only counts when it actually renders
				// text - an empty <span /> leaves the aria-labelledby target with
				// no accessible name - so recurse into its descendants. Covers the
				// Vue `Element`/`Element$1` fallbacks as well as VElement/JSXElement.
				((child.type === 'JSXElement' ||
					child.type === 'VElement' ||
					child.type === 'Element' ||
					child.type === 'Element$1') &&
					(isComponentElement(child) ||
						(child.children || []).some(isContentChild))) ||
				// A fragment renders no wrapper of its own, so React shows its
				// descendants directly (e.g. <DBDialogHeader><>Title</></...>).
				// Recurse with the same predicate; an empty fragment (or one with
				// only non-rendering children) still counts as no content.
				(child.type === 'JSXFragment' &&
					(child.children || []).some(isContentChild)) ||
				// A JSX expression child counts as content unless it renders
				// nothing (e.g. {null}, {false}, {''}), which would leave the
				// element referenced by aria-labelledby empty.
				(child.type === 'JSXExpressionContainer' &&
					!isEmptyJsxExpression(child)) ||
				// A Vue interpolation ({{ ... }}) counts as content unless it
				// statically renders no text (e.g. {{ null }}, {{ '' }}). Vue
				// differs from React here: {{ false }}/{{ true }}/{{ 0 }} DO
				// render text, so isStaticallyEmptyExpression (not the JSX
				// check) is the right predicate.
				(child.type === 'VExpressionContainer' &&
					!isStaticallyEmptyExpression(child.expression));

			// Content is present when the `text` attribute, an explicit `children`
			// attribute, or a rendered JSX/template child node carries it.
			const hasContent =
				hasTextContent(text) ||
				hasTextContent(childrenAttr) ||
				node.children?.some(isContentChild);

			if (hasContent) {
				return;
			}

			// A React spread (<DBDialogHeader {...headerProps} />) or Vue object
			// v-bind may supply content whose value cannot be verified statically,
			// so treat the header as unresolved rather than reporting. `text` and
			// `children` are alternative content sources, so a spread that can still
			// supply EITHER (it comes after that attribute's last explicit
			// occurrence) is enough to avoid a false positive - even if the other
			// alternative is explicitly pinned empty after the spread (e.g.
			// `text="" {...props} children=""`, where the spread may still provide a
			// non-empty `text`). `children` is a React-only content prop, so only a
			// JSX node (which carries an `attributes` array) treats it as a spread-
			// supplied alternative; in Vue content comes through the slot, not a
			// `children` prop.
			const isJsxNode = Array.isArray(openingElement.attributes);
			if (
				isUnresolvedBySpread(openingElement, 'text') ||
				(isJsxNode && isUnresolvedBySpread(openingElement, 'children'))
			) {
				return;
			}

			context.report({
				node: openingElement,
				messageId: MESSAGE_IDS.TEXT_OR_CHILDREN_REQUIRED,
				data: { component: componentName }
			});
		};

		return defineTemplateBodyVisitor(
			context,
			// `Element$1` is the Vue parser's fallback element type; register it
			// too so a DBDialogHeader/DBDrawerHeader exposed as that node still
			// runs through this recommended accessibility check (matches the
			// header-required rules, which register all three).
			{
				VElement: checkComponent,
				Element: checkComponent,
				Element$1: checkComponent
			},
			{ JSXElement: checkComponent }
		);
	}
};
