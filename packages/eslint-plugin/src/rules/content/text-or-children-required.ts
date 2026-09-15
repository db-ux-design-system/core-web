import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	angularChildNodes,
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isBareBooleanAttribute,
	isDBComponent,
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
 * Whether an Angular node has renderable content, recursing through wrapper nodes.
 * A structural directive (`*ngIf`) or built-in control flow (`@if`, `@for`, ...)
 * makes the header's title a descendant of a Template/block node rather than a
 * direct child, so a flat check would miss it. `angularChildNodes` flattens those
 * wrappers; a non-empty `Text`, a `BoundText` (dynamic `{{ }}`, unverifiable) or
 * any `Element`/`Element$1` counts as content.
 */
const hasAngularContent = (node: any): boolean =>
	angularChildNodes(node).some(
		(child: any) =>
			(child.type === 'Text' && child.value.trim() !== '') ||
			child.type === 'BoundText' ||
			child.type === 'Element' ||
			child.type === 'Element$1' ||
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
	'DBDialogHeader',
	'DBDrawerHeader'
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
			const hasChildren = node.children?.some(
				(child: any) =>
					(child.type === 'JSXText' && child.value.trim() !== '') ||
					(child.type === 'VText' && child.value.trim() !== '') ||
					child.type === 'JSXElement' ||
					child.type === 'VElement' ||
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
						!isStaticallyEmptyExpression(child.expression))
			);

			// A React spread (<DBDialogHeader {...headerProps} />) or Vue object
			// v-bind may supply `text`, and its contents cannot be verified
			// statically, so treat the header as unresolved rather than reporting -
			// unless a later explicit `text` determines the final value.
			if (
				!hasTextContent(text) &&
				!hasChildren &&
				isUnresolvedBySpread(openingElement, 'text')
			) {
				return;
			}

			if (!hasTextContent(text) && !hasChildren) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.TEXT_OR_CHILDREN_REQUIRED,
					data: { component: componentName }
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
