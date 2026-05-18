/** A nested Figma instance swap prop (e.g. icon components). */
export type FigmaInstanceProp = {
	/** Use 'instance' for generic instance swaps, 'iconSwap' for icon instances that resolve to a string name. */
	type: 'instance' | 'iconSwap';
	/** The Figma property key of the instance swap (e.g. '🔄 Icon Small'). */
	key: string;
};

/** An enum prop mapping Figma variant values to code values. */
export type FigmaEnumProp = {
	type: 'enum';
	/** The Figma property key (e.g. 'Size', '💻 Variant'). */
	key: string;
	/** Map of Figma variant value → code value. Values can be strings, booleans, numbers, or instance swaps. */
	value: Record<string, string | boolean | number | FigmaInstanceProp>;
	/**
	 * Optional Figma boolean property key that guards this prop.
	 * When set, the resolved value is only emitted if getPropertyValue(guardKey) === 'True'.
	 * Useful for icon swaps that are only present when a show-flag is enabled.
	 */
	guardKey?: string;
};

/** A simple scalar prop. */
export type FigmaSimpleProp = {
	/**
	 * - 'string': maps to instance.getString()
	 * - 'boolean': maps to instance.getBoolean()
	 * - 'children': maps to instance.getSlot() — replaces slot content
	 * - 'textContent': maps to instance.getString() — used for text content rendered as children
	 */
	type: 'string' | 'boolean' | 'children' | 'textContent';
	/** The Figma property key (e.g. '✏️ Text', '✏️ Label'). */
	key: string;
};

/** Reads a text property from a named nested instance via instance.findInstance(layerName)?.getString(key). */
export type FigmaNestedTextProp = {
	type: 'nestedText';
	/** The exact Figma layer name of the nested instance to find. */
	layerName: string;
	/** The Figma property key on the nested instance (e.g. '✏️ Text'). */
	key: string;
};

/**
 * Reads a text property from the first code-connected child instance.
 * Generates: instance.findConnectedInstances((node) => node.hasCodeConnect())
 *   .filter((node) => node.type === 'INSTANCE')
 *   .filter((node) => !!node.properties[key])[0]
 *   .getString(key)
 */
export type FigmaConnectedTextProp = {
	type: 'connectedText';
	/** The Figma property key to read from each connected instance (e.g. '✏️ Text'). */
	key: string;
	/** Index into the array of connected instances. Defaults to 0. */
	index?: number;
};

/**
 * Generates a single message variable from a connected instance's text,
 * then maps it to different attribute names based on another prop's value.
 *
 * @example
 * validationMessage: { type: 'validationMessage', key: '✏️ Text', conditionProp: 'validation', map: { 'invalid': 'invalidMessage', 'valid': 'validMessage', default: 'message' } }
 */
export type FigmaValidationMessageProp = {
	type: 'validationMessage';
	/** The Figma property key to read from the connected instance (e.g. '✏️ Text'). */
	key: string;
	/** The prop name whose value determines which attribute to use. */
	conditionProp: string;
	/** Map of condition prop values to attribute names, plus a 'default' fallback. */
	map: Record<string, string>;
};

/**
 * Renders all direct code-connected child instances as children.
 * Generates: instance.findConnectedInstances((node) => node.hasCodeConnect())
 *   .map((child) => child.executeTemplate().example)
 */
export type FigmaConnectedInstancesProp = {
	type: 'connectedInstances';
};

/**
 * Renders code-connected child instances recursively, filtered by a nestedImports string.
 * Uses traverseInstances: true to find all descendants, then filters by checking whether
 * the instance's template nestedImports contains the given filter string.
 *
 * @example filter: 'DBAccordionItem' generates:
 *   instance
 *     .findConnectedInstances((node) => node.hasCodeConnect(), { traverseInstances: true })
 *     .filter((node) => node.type === 'INSTANCE')
 *     .filter((node) => node.executeTemplate().example
 *       .some((section) => section.nestedImports?.some((i) => i.includes('DBAccordionItem'))))
 *     .map((child) => child.executeTemplate().example)
 */
export type FigmaNestedConnectedInstancesProp = {
	type: 'nestedConnectedInstances';
	/** Import string to filter by (e.g. 'DBAccordionItem'). Only instances whose template nestedImports contain this string are included. When omitted, all connected instances are included. */
	filter?: string;
};

/**
 * Wraps an iconSwap prop so it is only rendered when a boolean Figma property is 'True'.
 * Generates: let icon = ''; if (getPropertyValue(guardKey) === 'True') { icon = `\n\t\ticon="${iconLeading}"` }
 */
export type FigmaConditionalProp = {
	type: 'conditionalProp';
	/** The Figma property key of the icon instance swap. */
	key: string;
	/** The Figma boolean property key that guards this prop (e.g. 'Show Icon Leading'). */
	guardKey: string;
	/** The attribute name to render (e.g. 'icon'). */
	attrName: string;
};

export type FigmaProp =
	| FigmaEnumProp
	| FigmaInstanceProp
	| FigmaNestedTextProp
	| FigmaConnectedTextProp
	| FigmaValidationMessageProp
	| FigmaConditionalProp
	| FigmaConnectedInstancesProp
	| FigmaNestedConnectedInstancesProp
	| FigmaSimpleProp;

export type FigmaCodeConnect = {
	/** Figma node URLs this component connects to. Use 'FIGMA_FILE' as placeholder for the file key. */
	urls: string[];
	/** Map of prop name → Figma prop definition. */
	props: Record<string, FigmaProp>;
};
