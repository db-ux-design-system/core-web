const { componentNameToTag } = require('../utils.cjs');

/**
 * HTML void elements that are serialized self-closing (no closing tag, no
 * children). Mirrors the set the browser treats as void.
 * @type {Set<string>}
 */
const VOID_ELEMENTS = new Set([
	'area',
	'base',
	'br',
	'col',
	'embed',
	'hr',
	'img',
	'input',
	'link',
	'meta',
	'param',
	'source',
	'track',
	'wbr'
]);

/**
 * Mitosis wrapper nodes that render no element of their own but whose children
 * are emitted inline.
 * @type {Set<string>}
 */
const TRANSPARENT_NODES = new Set(['Fragment', 'Slot']);

/**
 * Resolve the HTML tag for a Mitosis node. A node whose name is one of the
 * example's imported components (e.g. `DBButton`) becomes its custom-element tag
 * (`db-button`, and `db-heading-h-1` for digit-boundary names) via the shared
 * `componentNameToTag`, matching the registered Stencil element. Everything else
 * is treated as a native element and keeps its tag unchanged.
 *
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @param {Array<string>} childComponents - component names imported by the example
 * @returns {string}
 */
const resolveTag = (node, childComponents) =>
	childComponents.includes(node.name)
		? componentNameToTag(node.name)
		: node.name;

/**
 * Property keys that must stay verbatim rather than being kebab-cased: the
 * args-spread placeholder on the reference element and already-valid global
 * attributes.
 * @type {Set<string>}
 */
const VERBATIM_ATTRIBUTES = new Set(['properties']);

/**
 * Convert a camelCase prop name to the kebab-case attribute a custom element
 * actually reads (`headlinePlain` -> `headline-plain`, `showIcon` ->
 * `show-icon`). Names that are already kebab-case, data-/aria- attributes, or
 * single words are returned unchanged. `href` etc. stay intact.
 * @param {string} key
 * @returns {string}
 */
const toAttributeName = (key) => {
	if (
		VERBATIM_ATTRIBUTES.has(key) ||
		key.includes('-') ||
		key.includes(':')
	) {
		return key;
	}
	return key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

/**
 * Serialize the static properties of a node into an attribute string. Attribute
 * names are kebab-cased so nested custom elements receive the attributes they
 * actually read (web components do not reflect camelCase attributes to props).
 * The reference element has its properties replaced upstream with the single
 * `properties="replace"` placeholder, so this mainly runs for slotted/static
 * markup.
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @returns {string}
 */
const serializeProperties = (node) => {
	const properties = node.properties || {};
	return Object.entries(properties)
		.filter(([key]) => key !== '_text')
		.map(([key, value]) => {
			const attribute = toAttributeName(key);
			return value === '' || value === undefined || value === null
				? ` ${attribute}`
				: ` ${attribute}="${value}"`;
		})
		.join('');
};

/**
 * Unwrap a bound value's generated code to a literal (strip matching quotes).
 * Returns the raw code when it is not a simple string literal.
 * @param {string} code
 * @returns {string}
 */
const unwrapLiteral = (code) => {
	const trimmed = code.trim();
	const match = trimmed.match(/^(['"`])([\s\S]*)\1$/);
	return match ? match[2] : trimmed;
};

/**
 * Serialize a node's bindings into an attribute string. Bindings carry the bare
 * boolean shorthands and bound values authored on nested example elements
 * (`noText`, `showLabel={false}`, `interactive`), which `node.properties` does
 * not hold. For web-component markup:
 *
 * - `true` -> bare kebab-case attribute (`no-text`).
 * - `false` / `undefined` / `null` -> omitted (an absent attribute is falsy).
 * - string / number literals -> `attribute="value"`.
 * - event handlers (`on*`), `ref`, and spreads -> skipped (no attribute form).
 * - non-literal expressions -> skipped (cannot be represented as a static
 *   attribute; a value a story needs would live on the reference element, whose
 *   bindings are handled separately via the args spread).
 *
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @returns {string}
 */
const serializeBindings = (node) => {
	const bindings = node.bindings || {};
	return Object.entries(bindings)
		.map(([key, binding]) => {
			if (!binding || typeof binding.code !== 'string') {
				return '';
			}
			if (
				key === 'ref' ||
				binding.type === 'spread' ||
				key.startsWith('on')
			) {
				return '';
			}

			const attribute = toAttributeName(key);
			const code = binding.code.trim();

			// A bare `true` becomes the empty boolean attribute; the DB
			// components read an empty attribute string as `true`.
			if (code === 'true') {
				return ` ${attribute}`;
			}
			// `undefined` / `null` carry no value -> omit the attribute entirely.
			if (code === 'undefined' || code === 'null') {
				return '';
			}
			// `false` must be emitted explicitly as the string "false", NOT
			// omitted: these props (e.g. `showLabel`) default to the enabled
			// state, so an absent attribute would keep the default. The DB
			// components parse the string "false" to the boolean false
			// (see getBoolean / getBooleanAsString in src/utils).
			if (code === 'false') {
				return ` ${attribute}="false"`;
			}

			const literal = unwrapLiteral(code);
			// Only emit simple literal values; a complex expression has no static
			// attribute form.
			if (/^[\w\s./:-]*$/.test(literal)) {
				return ` ${attribute}="${literal}"`;
			}
			return '';
		})
		.join('');
};

/**
 * Serialize a Mitosis node tree into a static HTML string of real custom
 * elements for a web-components Storybook story template. The result is embedded
 * in a JS template literal by the render function, so `${children}` / `${...}`
 * placeholders in `_text` are passed through verbatim.
 *
 * Dynamic bindings are intentionally not serialized: the reference element's
 * bindings are stripped upstream (replaced by `properties="replace"`), and the
 * remaining example markup is static. `Show`/`For` are not expected in rendered
 * examples and fall back to emitting their children.
 *
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @param {Array<string>} childComponents - component names imported by the example
 * @returns {string}
 */
const nodeToWebComponent = (node, childComponents) => {
	if (!node) {
		return '';
	}

	// Text node. In the source markup each element sits on its own indented line,
	// so the whitespace around a text node (`\n\t\t\tCheck All\n\t\t`) is pure
	// formatting, not a separator. Collapse interior whitespace to single spaces
	// and trim the ends, so no stray whitespace renders inside the custom element
	// or between a text and an adjacent element. Interpolation placeholders
	// (`${children}` etc.) are passed through verbatim.
	if (node.properties && typeof node.properties._text === 'string') {
		const text = node.properties._text;
		if (text.includes('${')) {
			return text;
		}
		return text.replace(/\s+/g, ' ').trim();
	}

	const children = (node.children || [])
		.map((child) => nodeToWebComponent(child, childComponents))
		.join('');

	if (
		TRANSPARENT_NODES.has(node.name) ||
		node.name === 'Show' ||
		node.name === 'For'
	) {
		return children;
	}

	const tag = resolveTag(node, childComponents);
	const attributes = serializeProperties(node) + serializeBindings(node);

	if (VOID_ELEMENTS.has(tag)) {
		return `<${tag}${attributes} />`;
	}

	return `<${tag}${attributes}>${children}</${tag}>`;
};

module.exports = { nodeToWebComponent };
