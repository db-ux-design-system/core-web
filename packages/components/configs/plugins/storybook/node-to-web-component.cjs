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
 * A Mitosis node name is treated as a DB component (and therefore a custom
 * element) when it is listed in the example's imports or, as a fallback, when it
 * carries the `DB` prefix every component in this package uses. The fallback
 * fails loudly in the right direction: a mistyped or unimported `DBIcon` still
 * resolves to `db-icon` rather than silently emitting an unknown `<DBIcon>` tag
 * that renders nothing.
 * @param {string} nodeName
 * @param {Array<string>} childComponents - component names imported by the example
 * @returns {boolean}
 */
const isComponentName = (nodeName, childComponents) =>
	childComponents.includes(nodeName) || /^DB[A-Z]/.test(nodeName);

/**
 * Resolve the HTML tag for a Mitosis node. A node whose name is one of the
 * example's imported components (e.g. `DBButton`) -- or any `DB`-prefixed name,
 * see {@link isComponentName} -- becomes its custom-element tag (`db-button`,
 * and `db-heading-h-1` for digit-boundary names) via the shared
 * `componentNameToTag`, matching the registered Stencil element. Everything else
 * is treated as a native element and keeps its tag unchanged.
 *
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @param {Array<string>} childComponents - component names imported by the example
 * @returns {string}
 */
const resolveTag = (node, childComponents) =>
	isComponentName(node.name, childComponents)
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
 * Resolve the attribute name a given element reads for a prop key.
 *
 * - **Custom elements** read kebab-case attributes (they do not reflect
 *   camelCase attributes to props), so `headlinePlain` -> `headline-plain`,
 *   `showIcon` -> `show-icon`.
 * - **Native elements** must NOT be kebab-cased: HTML attributes are a fixed
 *   lowercased vocabulary, so a React-style camelCase key is lowercased to the
 *   real attribute (`tabIndex` -> `tabindex`, `readOnly` -> `readonly`,
 *   `maxLength` -> `maxlength`, `colSpan` -> `colspan`). Kebab-casing them (e.g.
 *   `tab-index`) produces an attribute the browser ignores, which silently
 *   changes behaviour (a `tabIndex={-1}` anchor would stay focusable).
 *
 * Names that are already kebab-case (`data-*` / `aria-*`), namespaced (`xlink:`)
 * or verbatim placeholders are returned unchanged in both modes.
 * @param {string} key
 * @param {boolean} isCustomElement - whether the key's element is a DB custom element
 * @returns {string}
 */
const toAttributeName = (key, isCustomElement) => {
	if (
		VERBATIM_ATTRIBUTES.has(key) ||
		key.includes('-') ||
		key.includes(':')
	) {
		return key;
	}
	if (isCustomElement) {
		return key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
	}
	return key.toLowerCase();
};

/**
 * Escape the two characters that break a double-quoted HTML attribute value when
 * interpolated into generated markup: `&` (ambiguous ampersand) and `"` (closes
 * the value early). No current example trips this, but escaping here keeps a
 * value like `He said "hi"` from producing `label="He said "hi""`.
 * @param {string} value
 * @returns {string}
 */
const escapeAttributeValue = (value) =>
	String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

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
const serializeProperties = (node, isCustomElement) => {
	const properties = node.properties || {};
	return Object.entries(properties)
		.filter(([key]) => key !== '_text')
		.map(([key, value]) => {
			const attribute = toAttributeName(key, isCustomElement);
			return value === '' || value === undefined || value === null
				? ` ${attribute}`
				: ` ${attribute}="${escapeAttributeValue(value)}"`;
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
 * - a `getImage()` call -> `src="getImage"`, the shared placeholder spelling the
 *   `get-stories.cjs` post-pass rewrites to the placeholder image path (the
 *   other targets emit the same marker). Without this the `<img>` in the brand
 *   and notification examples would lose its `src` entirely, because `getImage`
 *   is a non-literal expression.
 * - event handlers (`on*`), `ref`, and spreads -> skipped (no attribute form).
 * - non-literal expressions -> skipped (cannot be represented as a static
 *   attribute; a value a story needs would live on the reference element, whose
 *   bindings are handled separately via the args spread).
 *
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @param {boolean} isCustomElement - whether the node is a DB custom element
 * @returns {string}
 */
const serializeBindings = (node, isCustomElement) => {
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

			const attribute = toAttributeName(key, isCustomElement);
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
			// A `getImage()` call (brand/notification examples) is non-literal,
			// so it would be dropped below. Emit the shared `getImage` marker
			// instead; the get-stories.cjs post-pass rewrites it to the
			// placeholder image path for every target.
			if (/\bgetImage\(\)$/.test(code)) {
				return ` ${attribute}="getImage"`;
			}

			const literal = unwrapLiteral(code);
			// Only emit simple literal values; a complex expression has no static
			// attribute form.
			if (/^[\w\s./:-]*$/.test(literal)) {
				return ` ${attribute}="${escapeAttributeValue(literal)}"`;
			}
			return '';
		})
		.join('');
};

/**
 * The only interpolation `get-stories.cjs` injects into a `_text` node for the
 * web-components target: the serialized slotted children, wrapped in
 * `unsafeHTML` so lit renders them as markup. It is a build-time literal, not a
 * user-controllable string, and must be passed through the template literal
 * verbatim. Any other `${` or backtick in example text is escaped (see
 * {@link escapeTemplateLiteral}) so it cannot break codegen.
 * @type {RegExp}
 */
const INJECTED_PLACEHOLDER = /\$\{unsafeHTML\(/;

/**
 * Escape the characters that are special inside the JS template literal the
 * render function wraps this markup in: a backtick would close the literal and a
 * `${` would start an unintended interpolation. Example text containing either
 * would otherwise break codegen rather than fail visibly.
 * @param {string} text
 * @returns {string}
 */
const escapeTemplateLiteral = (text) =>
	text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

/**
 * Serialize a node's named slots (JSX slot-props such as
 * `brand={<DBControlPanelBrand />}`, `endSlot={<DBBadge>New</DBBadge>}`,
 * `header={<DBDialogHeader text="Title" />}`) into slotted custom-element
 * children. Mitosis parses a JSX-valued prop into `node.slots[key]` (an array of
 * nodes), and the matching web component reads it via `<Slot name="key" />`, so
 * each projected element carries `slot="key"` -- in camelCase, matching the
 * stencil output (see `configs/plugins/stencil/slots.cjs`). A `Fragment` slot
 * value is unwrapped and each of its children carries the slot. This is what
 * keeps the brand/control-panel/dialog/drawer examples from losing their
 * projected content in the web-components story.
 *
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @param {Array<string>} childComponents - component names imported by the example
 * @returns {string}
 */
const serializeSlots = (node, childComponents) => {
	const slots = node.slots || {};
	return Object.entries(slots)
		.map(([key, slotNodes]) =>
			(slotNodes || [])
				.flatMap((slotNode) =>
					slotNode.name === 'Fragment'
						? slotNode.children || []
						: [slotNode]
				)
				.map((slotNode) => {
					const markup = nodeToWebComponent(
						slotNode,
						childComponents
					);
					// Inject `slot="key"` into the opening tag of the projected
					// element. The element is always a DB component here, so it is
					// never a void/self-closing tag.
					return markup.replace(
						/^<([a-z0-9-]+)/i,
						`<$1 slot="${key}"`
					);
				})
				.join('')
		)
		.join('');
};

/**
 * Serialize a Mitosis node tree into a static HTML string of real custom
 * elements for a web-components Storybook story template. The result is embedded
 * in a JS template literal by the render function, so the injected
 * `${unsafeHTML(...)}` placeholder in `_text` is passed through verbatim while
 * all other text is escaped.
 *
 * Dynamic bindings are intentionally not serialized: the reference element's
 * bindings are stripped upstream (replaced by `properties="replace"`), and the
 * remaining example markup is static. `Show`/`For` are not expected in rendered
 * examples and fall back to emitting their children.
 *
 * @param {import('@builder.io/mitosis').MitosisNode} node
 * @param {Array<string>} [childComponents] - component names imported by the example
 * @returns {string}
 */
const nodeToWebComponent = (node, childComponents = []) => {
	if (!node) {
		return '';
	}

	// Text payload. Every text node in this pipeline arrives as `name: "div"`
	// carrying its text in `_text`; it is a text carrier, not a real element, so
	// emit the bare text and do not wrap it. In the source markup each element
	// sits on its own indented line, so the whitespace around a text node
	// (`\n\t\t\tCheck All\n\t\t`) is mostly formatting: collapse runs of
	// whitespace to a single space, drop a whitespace-only node entirely, but
	// keep a single leading/trailing space on real text -- it is semantic next to
	// an inline sibling (`<img/> Custom Logo`, `text <db-link>...</db-link> text`)
	// and dropping it would glue the words together. The injected
	// `${unsafeHTML(...)}` placeholder is passed through verbatim; everything else
	// is escaped so a literal backtick or `${` cannot break the template literal.
	if (node.properties && typeof node.properties._text === 'string') {
		const raw = node.properties._text;
		if (INJECTED_PLACEHOLDER.test(raw)) {
			return raw;
		}
		const collapsed = raw.replace(/\s+/g, ' ');
		const content =
			collapsed.trim() === '' ? '' : escapeTemplateLiteral(collapsed);
		// A `data-sb-replace` readout node is rewritten by `get-stories.cjs` into
		// a text carrier tagged with `data-sb-wrap-text`. Keep its wrapper so
		// stencil emits `<div>text</div>` like Angular/Vue, instead of dropping
		// the block element down to inline text.
		return node.properties['data-sb-wrap-text']
			? `<${node.name}>${content}</${node.name}>`
			: content;
	}

	const children =
		serializeSlots(node, childComponents) +
		(node.children || [])
			.map((child) => nodeToWebComponent(child, childComponents))
			.join('');

	// Transparent wrappers (Fragment/Slot, control-flow nodes, and the synthetic
	// carrier that holds the injected children placeholder) render no element of
	// their own -- emit only their children.
	if (
		!node.name ||
		TRANSPARENT_NODES.has(node.name) ||
		node.name === 'Show' ||
		node.name === 'For'
	) {
		return children;
	}

	const tag = resolveTag(node, childComponents);
	const isCustomElement = isComponentName(node.name, childComponents);
	const attributes =
		serializeProperties(node, isCustomElement) +
		serializeBindings(node, isCustomElement);

	if (VOID_ELEMENTS.has(tag)) {
		return `<${tag}${attributes} />`;
	}

	return `<${tag}${attributes}>${children}</${tag}>`;
};

module.exports = {
	nodeToWebComponent,
	nodeToWebComponentSlots: serializeSlots
};
