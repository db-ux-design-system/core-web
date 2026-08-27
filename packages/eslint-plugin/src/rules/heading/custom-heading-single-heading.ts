import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAngularComponentName,
	isDBComponent
} from '../../shared/utils.js';

const NATIVE_HEADINGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

/*
 * The generated custom element is `db-heading-h-1`, which does not match what
 * `getAngularComponentName('DBHeadingH1')` produces (`db-heading-h1`). Both
 * spellings are listed so the rule keeps working if that ever changes.
 */
const HEADING_COMPONENTS = new Set(
	[1, 2, 3, 4, 5, 6].flatMap((level) => [
		`DBHeadingH${level}`,
		`db-heading-h-${level}`,
		`db-heading-h${level}`
	])
);

const KNOWN_COMPONENTS = new Set([
	...Object.values(COMPONENTS).flatMap((component) => [
		component,
		getAngularComponentName(component)
	]),
	...HEADING_COMPONENTS
]);

/**
 * Elements whose rendered content cannot be resolved statically. Their presence
 * only suppresses the "missing heading" report, never the "multiple headings"
 * one.
 */
const DYNAMIC_ELEMENTS = new Set([
	'slot',
	'component',
	'ng-content',
	'ng-template'
]);

/** Framework elements whose rendered children are represented in the current AST. */
const STATIC_FRAMEWORK_ELEMENTS = new Set(['ng-container']);

/** Node types that represent a real element. Vue sometimes falls back to `Element`. */
const ELEMENT_TYPES = new Set([
	'JSXElement',
	'VElement',
	'Element',
	'Element$1'
]);

/** Slots whose content renders inside the wrapper next to the default content. */
const SLOT_ATTRIBUTES = new Set(['startSlot', 'endSlot']);

/**
 * Expression kinds whose elements are part of this AST. Everything else, such as
 * an identifier or a conditional, resolves at runtime and only suppresses the
 * "missing heading" report.
 */
const STATIC_EXPRESSION_TYPES = new Set([
	'JSXElement',
	'JSXFragment',
	'Literal',
	'JSXEmptyExpression'
]);

/**
 * Angular wraps structural directives in a `Template` node that repeats the
 * element name (`<h2 *ngIf>` becomes `Template[h2] > Element[h2]`), so these
 * types must never contribute to the heading count — only to the dynamic-child
 * lookup and to recursion.
 */
const WRAPPER_TYPES = new Set([
	'Content',
	'Content$1',
	'Template',
	'Template$1'
]);

/**
 * Reads the tag name from a JSX, Vue or Angular element node. Angular uses
 * `name`, Vue uses `rawName`.
 */
function getElementName(node: any): string | undefined {
	if (node.type === 'JSXElement') {
		const identifier = node.openingElement?.name;
		return identifier?.type === 'JSXIdentifier'
			? identifier.name
			: undefined;
	}

	if (ELEMENT_TYPES.has(node.type) || WRAPPER_TYPES.has(node.type)) {
		return node.rawName ?? node.name;
	}

	return undefined;
}

/**
 * Consumer components can render the required native heading, but their output
 * is not part of the current template AST. Treat them like slots and other
 * dynamic content instead of reporting a definite missing heading.
 */
function isUnresolvedComponent(node: any, name?: string): boolean {
	if (!ELEMENT_TYPES.has(node.type)) {
		return false;
	}

	if (node.type === 'JSXElement') {
		const identifier = node.openingElement?.name;
		if (identifier?.type !== 'JSXIdentifier') {
			return true;
		}

		return (
			(/^[A-Z]/.test(identifier.name) || identifier.name.includes('-')) &&
			!KNOWN_COMPONENTS.has(identifier.name)
		);
	}

	return (
		name !== undefined &&
		(/^[A-Z]/.test(name) || name.includes('-')) &&
		!KNOWN_COMPONENTS.has(name) &&
		!STATIC_FRAMEWORK_ELEMENTS.has(name)
	);
}

function isHeading(name: string): boolean {
	return NATIVE_HEADINGS.has(name) || HEADING_COMPONENTS.has(name);
}

/**
 * React passes slot content as a JSX attribute, so `endSlot={<h2 />}` never shows
 * up in `node.children` even though it renders inside the wrapper. Vue and
 * Angular project their slot content as a real child, which the child walk
 * already covers.
 */
function getSlotValues(node: any): any[] {
	const openingElement = node.openingElement ?? node;
	if (openingElement?.type !== 'JSXOpeningElement') {
		return [];
	}

	return (openingElement.attributes ?? [])
		.filter(
			(attribute: any) =>
				attribute.type === 'JSXAttribute' &&
				SLOT_ATTRIBUTES.has(attribute.name?.name)
		)
		.map((attribute: any) => attribute.value)
		.filter(Boolean);
}

/** Everything rendered inside the node: its children plus its slot values. */
function getContent(node: any): any[] {
	return [...(node.children ?? []), ...getSlotValues(node)];
}

/** Unwraps `{…}` so a slot value and an inlined child expression look alike. */
function unwrapExpression(node: any): any {
	return node.type === 'JSXExpressionContainer' ? node.expression : node;
}

function countHeadings(node: any): number {
	let count = 0;
	for (const content of getContent(node)) {
		const child = unwrapExpression(content);
		const name = getElementName(child);
		if (
			name !== undefined &&
			ELEMENT_TYPES.has(child.type) &&
			isHeading(name)
		) {
			count++;
		}
		if (child.children) {
			count += countHeadings(child);
		}
	}
	return count;
}

function isDynamicContent(content: any): boolean {
	if (content.type === 'JSXExpressionContainer') {
		return (
			!STATIC_EXPRESSION_TYPES.has(content.expression?.type) ||
			isDynamicContent(content.expression)
		);
	}

	const name = getElementName(content);
	if (
		(name !== undefined && DYNAMIC_ELEMENTS.has(name)) ||
		isUnresolvedComponent(content, name)
	) {
		return true;
	}

	return content.children ? hasDynamicChildren(content) : false;
}

function hasDynamicChildren(node: any): boolean {
	return getContent(node).some(isDynamicContent);
}

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure DBCustomHeading wraps exactly one heading, because it only provides layout and no heading semantics',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#custom-heading-single-heading'
		},
		messages: {
			[MESSAGE_IDS.CUSTOM_HEADING_MISSING_HEADING]:
				MESSAGES.CUSTOM_HEADING_MISSING_HEADING,
			[MESSAGE_IDS.CUSTOM_HEADING_MULTIPLE_HEADINGS]:
				MESSAGES.CUSTOM_HEADING_MULTIPLE_HEADINGS
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const count = countHeadings(node);
			if (count === 1) {
				return;
			}
			if (count === 0 && hasDynamicChildren(node)) {
				return;
			}

			const loc = parserServices.convertNodeSourceSpanToLoc(
				node.sourceSpan
			);
			context.report({
				loc,
				messageId:
					count === 0
						? MESSAGE_IDS.CUSTOM_HEADING_MISSING_HEADING
						: MESSAGE_IDS.CUSTOM_HEADING_MULTIPLE_HEADINGS,
				data: { component: node.name, count: String(count) }
			});
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBCustomHeading,
			angularHandler
		);
		if (angularVisitors) {
			return angularVisitors;
		}

		const checkCustomHeading = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBCustomHeading)) {
				return;
			}

			const count = countHeadings(node);
			if (count === 1) {
				return;
			}
			if (count === 0 && hasDynamicChildren(node)) {
				return;
			}

			context.report({
				node: openingElement,
				messageId:
					count === 0
						? MESSAGE_IDS.CUSTOM_HEADING_MISSING_HEADING
						: MESSAGE_IDS.CUSTOM_HEADING_MULTIPLE_HEADINGS,
				data: {
					component:
						openingElement.name?.name || openingElement.rawName,
					count: String(count)
				}
			});
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkCustomHeading, Element: checkCustomHeading },
			{ JSXElement: checkCustomHeading }
		);
	}
};
