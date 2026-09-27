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
 * Whether `attrName` is present as a bare valueless attribute (e.g. `text`,
 * `<DBDialogHeader text />`, `<db-dialog-header text>`) rather than a bound value.
 *
 * `getAttributeValue` collapses a bare attribute and a dynamic binding
 * (`[text]="x"` / `:text="x"`) to the same `true`, which hides the difference:
 * a bare attribute renders no text (React boolean) or an empty string
 * (Angular/Vue), while a dynamic binding is unverifiable content. Call this when
 * `getAttributeValue` returned `true` to distinguish the two - a bare attribute
 * means "no accessible content", a binding means "leave it alone".
 */
export function isBareBooleanAttribute(
	node: ElementNode,
	attrName: string
): boolean {
	const kebabAttrName = toKebabCase(attrName);

	if (isAngularElement(node)) {
		const attr = node.attributes.find(
			(a) => a.name === attrName || a.name === kebabAttrName
		);
		// A static attribute with no value is bare; a `[attr]` binding lives in
		// `inputs`, so its presence means the `true` came from a binding.
		return Boolean(attr && (attr.value === undefined || attr.value === ''));
	}

	if (isVElement(node)) {
		const attr = node.startTag.attributes.find((a: any) => {
			if (a.directive) {
				return false;
			}
			const keyName =
				typeof a.key?.name === 'string'
					? a.key.name
					: a.key?.name?.name;
			return keyName === attrName || keyName === kebabAttrName;
		});
		return Boolean(attr && !attr.value);
	}

	// JSX: a bare attribute has no `value` (a binding is a JSXExpressionContainer).
	const jsxAttr = (node.attributes as any[])?.find(
		(a: any) => a.type === 'JSXAttribute' && a.name?.name === attrName
	);
	return Boolean(jsxAttr && !jsxAttr.value);
}

/**
 * Angular equivalent of isStaticallyEmptyExpression for parsed input bindings.
 * The Angular template AST exposes a string literal as `LiteralPrimitive` with a
 * string `value`; the raw `source` (e.g. `''`) is the quoted text. Only an empty
 * (or whitespace-only) string literal counts as empty; any other expression is
 * unresolvable dynamic content.
 */
export function isStaticallyEmptyAngularInput(value: any): boolean {
	if (!value) {
		return false;
	}
	if (value.type === 'LiteralPrimitive') {
		// `null` renders no text, same as an empty string literal.
		if (value.value === null) {
			return true;
		}
		if (typeof value.value === 'string' && value.value.trim() === '') {
			return true;
		}
	}
	// Some parser versions expose only the raw source for the binding.
	return (
		value.source === "''" ||
		value.source === '""' ||
		value.source === '``' ||
		value.source === 'null'
	);
}

/**
 * Detects expressions that statically render no text: a `null` literal, the
 * `undefined` identifier, an empty string literal `''`/`""` or a template literal
 * with no substitutions and empty text (` `` `). Whitespace-only literals count as
 * empty because they render no visible or accessible text. Anything else (other
 * identifiers, calls, member access, non-empty literals) is treated as
 * unresolvable dynamic content.
 */
export function isStaticallyEmptyExpression(expression: any): boolean {
	if (!expression) {
		return false;
	}
	// `undefined` is a plain identifier in the AST (not a Literal); React and Vue
	// both render nothing for it, same as `null`.
	if (expression.type === 'Identifier') {
		return expression.name === 'undefined';
	}
	if (expression.type === 'Literal') {
		// `null` renders no text, same as an empty string literal.
		return (
			expression.value === null ||
			(typeof expression.value === 'string' &&
				expression.value.trim() === '')
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

	// The Angular parser exposes elements as either `Element` or its fallback
	// `Element$1` node type, so register both. Missing `Element$1` would let a
	// rule silently skip a component the parser happened to emit as the fallback.
	return {
		[`Element[name="${kebabName}"]`]: wrappedHandler,
		[`Element[name="${componentName}"]`]: wrappedHandler,
		[`Element$1[name="${kebabName}"]`]: wrappedHandler,
		[`Element$1[name="${componentName}"]`]: wrappedHandler
	};
}

/** @public */
export function toKebabCase(string_: string): string {
	return string_.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Reads the slot argument off a Vue `v-slot` / `#slot` directive attribute.
 *
 * A static slot (`#header`) exposes a `VIdentifier` argument whose `name` is the
 * literal slot name. A dynamic slot (`#[slotName]`) exposes a `VExpressionContainer`
 * argument instead, whose name cannot be resolved statically - so it is reported as
 * `dynamic`, and callers treat it as an unverifiable match rather than rejecting
 * valid runtime markup (consistent with how identifier-valued React headers are
 * accepted).
 *
 * @returns `undefined` when the attribute is not a slot directive; otherwise
 * `{ dynamic }` for a dynamic argument, or `{ name }` for a static one (`name` is
 * `undefined` for a bare `v-slot`/`#default`).
 */
export function getVueSlotArgument(
	attr: any
): { dynamic: boolean; name?: string } | undefined {
	const keyName =
		typeof attr.key?.name === 'string'
			? attr.key.name
			: attr.key?.name?.name;
	if (keyName !== 'slot') {
		return undefined;
	}

	const argument = attr.key?.argument;
	// A dynamic argument (`#[slotName]`) is a VExpressionContainer - unresolvable.
	if (argument?.type === 'VExpressionContainer') {
		return { dynamic: true };
	}

	const name =
		typeof argument === 'string'
			? argument
			: typeof argument?.name === 'string'
				? argument.name
				: argument?.name?.name;
	return { dynamic: false, name };
}

/**
 * Whether the final value of `attribute` on a React/Vue element may be supplied by
 * a spread whose contents cannot be verified statically:
 *   - React JSX spread: `<DBDialogHeader {...props} />`
 *   - Vue object v-bind: `<DBDialogHeader v-bind="props" />` (argumentless bind)
 * Returns true only when such a spread comes after the last explicit occurrence of
 * the attribute, so it can still determine the final value (JSX/Vue later-wins). A
 * later explicit attribute overrides the spread and must be validated normally.
 */
export function isUnresolvedBySpread(
	openingElement: any,
	attribute: string
): boolean {
	// React: attributes live directly on the opening element.
	const jsxAttributes = openingElement.attributes;
	if (jsxAttributes) {
		const lastAttributeIndex = jsxAttributes.findLastIndex(
			(a: any) => a.type === 'JSXAttribute' && a.name?.name === attribute
		);
		const lastSpreadIndex = jsxAttributes.findLastIndex(
			(a: any) => a.type === 'JSXSpreadAttribute'
		);
		if (lastSpreadIndex > lastAttributeIndex) {
			return true;
		}
	}

	// Vue: attributes live on the start tag. An argumentless `v-bind="obj"` is a
	// `bind` directive with no argument, so its object contents cannot be resolved.
	const vueAttributes = openingElement.startTag?.attributes;
	if (vueAttributes) {
		const kebabAttr = toKebabCase(attribute);
		const directiveName = (a: any) =>
			typeof a.key?.name === 'string' ? a.key.name : a.key?.name?.name;
		const lastAttributeIndex = vueAttributes.findLastIndex((a: any) => {
			const keyName = directiveName(a);
			// Static attr (key.name is the attr) or bound `:attr` (bind + argument).
			return (
				keyName === attribute ||
				keyName === kebabAttr ||
				(keyName === 'bind' &&
					(a.key?.argument?.name === attribute ||
						a.key?.argument?.name === kebabAttr))
			);
		});
		const lastObjectVBindIndex = vueAttributes.findLastIndex(
			(a: any) => directiveName(a) === 'bind' && !a.key?.argument
		);
		if (lastObjectVBindIndex > lastAttributeIndex) {
			return true;
		}
	}

	return false;
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
