import type { TSESTree } from '@typescript-eslint/utils';

/**
 * Sentinel returned by getAttributeValue for dynamic expressions
 * (JSX: attr={expr}, Vue: :attr="expr"). Distinguishes from valueless
 * boolean attributes which return literal `true`.
 */
const DYNAMIC_EXPRESSION = '__DYNAMIC__';

type VElement = {
	type: 'VElement';
	startTag: {
		attributes: Array<{
			key: {
				name: string | { name: string };
				argument?: string | { name: string | { name: string } };
			};
			value?: { value: string };
		}>;
		range: [number, number];
	};
	rawName: string;
	children?: VElement[];
	range: [number, number];
};

type AngularElement = {
	type?: string;
	name: string;
	attributes: Array<{
		name: string;
		value?: string;
	}>;
	inputs: Array<{
		name: string;
		value?: any;
	}>;
	outputs: Array<{
		name: string;
	}>;
	children?: AngularElement[];
};

type ElementNode = TSESTree.JSXOpeningElement | VElement | AngularElement;

function isVElement(node: any): node is VElement {
	return node.type === 'VElement';
}

function isAngularElement(node: any): node is AngularElement {
	return (
		node &&
		typeof node.name === 'string' &&
		(node.attributes || node.inputs)
	);
}

export function getAttributeValue(
	node: ElementNode,
	attrName: string
): string | boolean | undefined {
	const kebabAttrName = toKebabCase(attrName);

	if (isAngularElement(node)) {
		const attr = node.attributes.find(
			(a) => a.name === attrName || a.name === kebabAttrName
		);
		if (attr) {
			return attr.value === undefined || attr.value === ''
				? true
				: attr.value;
		}

		const input = node.inputs.find(
			(i) => i.name === attrName || i.name === kebabAttrName
		);
		if (input) {
			// A statically empty binding ([attr]="''") carries no accessible
			// content, so surface it as an empty string rather than dynamic.
			if (isStaticallyEmptyAngularInput(input.value)) {
				return '';
			}
			return true;
		}
		return undefined;
	}

	if (isVElement(node)) {
		const attr = node.startTag.attributes.find((a) => {
			const keyName =
				typeof a.key.name === 'string' ? a.key.name : a.key.name?.name;
			const argName = a.key.argument
				? typeof a.key.argument === 'string'
					? a.key.argument
					: typeof a.key.argument.name === 'string'
						? a.key.argument.name
						: a.key.argument.name?.name
				: undefined;
			if (
				keyName === 'bind' &&
				(argName === attrName ||
					argName === kebabAttrName ||
					argName === attrName.toLowerCase() ||
					argName === kebabAttrName.toLowerCase())
			) {
				return true;
			}

			return (
				keyName === attrName ||
				keyName === kebabAttrName ||
				keyName === `:${attrName}` ||
				keyName === `:${kebabAttrName}`
			);
		});
		if (!attr) {
			return undefined;
		}
		if (!attr.value) {
			return true;
		}
		// A statically empty binding (:attr="''", :attr="``") carries no
		// accessible content, so surface it as an empty string rather than a
		// dynamic sentinel.
		if (isStaticallyEmptyExpression((attr.value as any)?.expression)) {
			return '';
		}
		// Dynamic bindings (:attr="expr") return a non-empty string or
		// fall back to DYNAMIC_EXPRESSION to distinguish from valueless true
		return attr.value.value ?? DYNAMIC_EXPRESSION;
	}

	const variants = new Set([attrName, `[${attrName}]`, `:${attrName}`]);
	const attr = node.attributes.find(
		(a) => a.type === 'JSXAttribute' && variants.has(a.name.name as string)
	) as TSESTree.JSXAttribute | undefined;

	if (!attr) {
		return undefined;
	}
	if (!attr.value) {
		return true;
	}
	if (attr.value.type === 'Literal') {
		return attr.value.value as string;
	}
	if (attr.value.type === 'JSXExpressionContainer') {
		// A statically empty expression (attr={''}, attr={``}) carries no
		// accessible content, so surface it as an empty string rather than a
		// dynamic sentinel.
		if (isStaticallyEmptyExpression(attr.value.expression)) {
			return '';
		}
		// Dynamic expressions (attr={expr}) — distinct from valueless true
		return DYNAMIC_EXPRESSION;
	}
	return undefined;
}

/**
 * Angular equivalent of isStaticallyEmptyExpression for parsed input bindings.
 * The Angular template AST exposes a string literal as `LiteralPrimitive` with a
 * string `value`; the raw `source` (e.g. `''`) is the quoted text. Only an empty
 * (or whitespace-only) string literal counts as empty; any other expression is
 * unresolvable dynamic content.
 */
function isStaticallyEmptyAngularInput(value: any): boolean {
	if (!value) {
		return false;
	}
	if (
		value.type === 'LiteralPrimitive' &&
		typeof value.value === 'string' &&
		value.value.trim() === ''
	) {
		return true;
	}
	// Some parser versions expose only the raw source for the binding.
	return (
		value.source === "''" || value.source === '""' || value.source === '``'
	);
}

/**
 * Detects expressions that are statically an empty string: a string literal
 * `''`/`""` or a template literal with no substitutions and empty text (` `` `).
 * Whitespace-only literals count as empty because they render no visible or
 * accessible text. Anything else (identifiers, calls, member access, non-empty
 * literals) is treated as unresolvable dynamic content.
 */
function isStaticallyEmptyExpression(expression: any): boolean {
	if (!expression) {
		return false;
	}
	if (expression.type === 'Literal') {
		return (
			typeof expression.value === 'string' &&
			expression.value.trim() === ''
		);
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
	return false;
}

export function hasChildOfType(
	node: TSESTree.JSXElement | VElement | AngularElement,
	componentName: string
): boolean {
	const kebabName = getAngularComponentName(componentName);
	if (isAngularElement(node)) {
		return (node.children || []).some((child: any) => {
			if (child.type === 'Element' || child.type === 'Element$1') {
				return child.name === componentName || child.name === kebabName;
			}

			return false;
		});
	}

	if (isVElement(node)) {
		return (node.children || []).some((child: any) => {
			if (child.type === 'VElement' || child.type === 'Element') {
				return (
					child.rawName === componentName ||
					child.rawName === kebabName
				);
			}

			return false;
		});
	}

	return node.children.some((child) => {
		if (child.type === 'JSXElement') {
			const { openingElement } = child;
			if (openingElement.name.type === 'JSXIdentifier') {
				const { name } = openingElement.name;
				return name === componentName || name === kebabName;
			}
		}

		return false;
	});
}

export function isDBComponent(
	node: ElementNode,
	componentName: string
): boolean {
	const kebabName = getAngularComponentName(componentName);
	if (isAngularElement(node)) {
		return node.name === componentName || node.name === kebabName;
	}

	if (isVElement(node)) {
		return node.rawName === componentName || node.rawName === kebabName;
	}

	if (node.name.type !== 'JSXIdentifier') {
		return false;
	}
	const { name } = node.name;
	return name === componentName || name === kebabName;
}

export function defineTemplateBodyVisitor(
	context: any,
	templateVisitor: any,
	scriptVisitor?: any
) {
	const { sourceCode } = context;

	// Vue templates
	if (sourceCode.parserServices?.defineTemplateBodyVisitor) {
		return sourceCode.parserServices.defineTemplateBodyVisitor(
			templateVisitor,
			scriptVisitor || {}
		);
	}

	// Angular templates
	if (sourceCode.parserServices?.convertNodeSourceSpanToLoc) {
		const angularVisitors: any = {};
		for (const [key, handler] of Object.entries(templateVisitor)) {
			if (key === 'VElement' || key === 'Element') {
				angularVisitors.Element = handler;
			} else {
				angularVisitors[key] = handler;
			}
		}

		return angularVisitors;
	}

	// JSX
	return scriptVisitor || {};
}

export function createAngularVisitors(
	context: any,
	componentName: string,
	handler: (node: any, parserServices: any) => void
) {
	const { sourceCode } = context;
	const parserServices = sourceCode?.parserServices;
	const isAngular = parserServices?.convertNodeSourceSpanToLoc;

	if (!isAngular) {
		return null;
	}

	const kebabName = getAngularComponentName(componentName);

	const wrappedHandler = (node: any) => {
		handler(node, parserServices);
	};

	return {
		[`Element[name="${kebabName}"]`]: wrappedHandler,
		[`Element[name="${componentName}"]`]: wrappedHandler
	};
}

/** @public */
export function toKebabCase(string_: string): string {
	return string_.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Returns the traversable child nodes of an Angular template AST node, flattening
 * the collections that built-in control flow spreads its content across. `@if`
 * keeps its content under `branches[].children`, `@switch` under `groups[].children`,
 * and `@for` exposes an `empty` block alongside its `children`; plain elements and
 * `@for`/`@defer` blocks use `children` directly. Callers can therefore recurse
 * transparently through control-flow wrappers without enumerating every version-
 * specific block type.
 */
export function angularChildNodes(node: any): any[] {
	if (!node) {
		return [];
	}
	const nodes: any[] = Array.isArray(node.children) ? [...node.children] : [];
	for (const collection of [node.branches, node.groups]) {
		if (Array.isArray(collection)) {
			nodes.push(...collection);
		}
	}
	if (node.empty) {
		nodes.push(node.empty);
	}
	return nodes;
}

/** @public */
export function getAngularComponentName(componentName: string): string {
	// For DB components, convert DBComponentName -> db-component-name
	return componentName.startsWith('DB')
		? 'db-' + toKebabCase(componentName.slice(2))
		: toKebabCase(componentName);
}

export function createAngularFix(
	context: any,
	node: any,
	attributeText: string
) {
	const { sourceCode } = context;
	const text = sourceCode.getText();
	const startOffset = node.sourceSpan.start.offset;
	const endOffset = node.sourceSpan.end.offset;
	const tagText = text.substring(startOffset, endOffset);
	const closeTagIndex = tagText.indexOf('>');
	if (closeTagIndex === -1) {
		return null;
	}

	let insertPos = startOffset + closeTagIndex;
	// For self-closing tags (/>), insert before the slash (and any preceding whitespace)
	if (closeTagIndex > 0 && tagText[closeTagIndex - 1] === '/') {
		const beforeSlash = tagText.substring(0, closeTagIndex - 1);
		insertPos = startOffset + beforeSlash.trimEnd().length;
	}

	return { insertPos, attributeText };
}

export function createJsxVueFix(
	node: any,
	openingElement: any,
	attributeText: string
) {
	if (node.openingElement) {
		// JSX
		const lastAttr = openingElement.attributes.at(-1);
		const insertPos = lastAttr
			? lastAttr.range[1]
			: openingElement.name.range[1];
		return { insertPos, attributeText };
	}

	// Vue
	const attrs = openingElement.startTag.attributes;
	if (attrs.length > 0) {
		const lastAttr = attrs.at(-1);
		return { insertPos: lastAttr.range[1], attributeText };
	}

	const insertPos =
		openingElement.startTag.range[0] + 1 + openingElement.rawName.length;
	return { insertPos, attributeText };
}
