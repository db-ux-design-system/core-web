/** Base for all Figma prop definitions. */
export type FigmaBaseProp = {
	/** The prop type discriminator. */
	type: string;
	/**
	 * Optional layer name substring to resolve this prop from a nested subcomponent instance
	 * instead of the root instance (e.g. 'Custom Select Form Field').
	 * When set, the plugin searches _ccLayers for an instance whose name includes this string
	 * and reads the property from that instance.
	 */
	layer?: string;
};

/** A nested Figma instance swap prop (e.g. icon components). */
export type FigmaInstanceProp = FigmaBaseProp & {
	/** Use 'instance' for generic instance swaps, 'iconSwap' for icon instances that resolve to a string name. */
	type: 'instance' | 'iconSwap';
	/** The Figma property key of the instance swap (e.g. '🔄 Icon Small'). */
	key: string;
};

/** An enum prop mapping Figma variant values to code values. */
export type FigmaEnumProp = FigmaBaseProp & {
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
export type FigmaSimpleProp = FigmaBaseProp & {
	/**
	 * - 'string': maps to instance.getString()
	 * - 'boolean': maps to instance.getBoolean()
	 * - 'children': maps to instance.getSlot() — replaces slot content
	 * - 'textContent': maps to instance.getString() — used for text content rendered as children
	 */
	type: 'string' | 'boolean' | 'children' | 'textContent';
	/** The Figma property key (e.g. '✏️ Text', '✏️ Label'). */
	key: string;
	/**
	 * Optional Figma boolean property keys that guard this prop.
	 * When set, the prop value is only emitted if at least one of the guard keys is true.
	 * Useful for conditionally showing labels, timestamps, etc.
	 */
	guardKeys?: string[];
};

/**
 * Reads a text property from the first code-connected child instance.
 * Generates: instance.findConnectedInstances((node) => node.hasCodeConnect())
 *   .filter((node) => node.type === 'INSTANCE')
 *   .filter((node) => !!node.properties[key])[0]
 *   .getString(key)
 */
export type FigmaConnectedTextProp = FigmaBaseProp & {
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
export type FigmaValidationMessageProp = FigmaBaseProp & {
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
 *
 * When `filter` is provided, only instances whose template nestedImports contain
 * that import string are included.
 */
export type FigmaConnectedInstancesProp = FigmaBaseProp & {
	type: 'connectedInstances';
	/** Import string to filter by (e.g. 'DBAccordionItem'). Only instances whose template nestedImports contain this string are included. When omitted, all connected instances are included. */
	filter?: string;
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
export type FigmaNestedConnectedInstancesProp = FigmaBaseProp & {
	type: 'nestedConnectedInstances';
	/** Import string to filter by (e.g. 'DBAccordionItem'). Only instances whose template nestedImports contain this string are included. When omitted, all connected instances are included. */
	filter?: string;
};

/**
 * Maps multiple boolean Figma properties to a single enum code value.
 * The first property whose value is `true` wins; if none match, the prop is omitted.
 *
 * @example
 * linkVariant: { type: 'booleanToEnum', map: [{ key: '(Def) Link Variant: Block', value: 'block' }, { key: '↳ OR Link Variant: Inline', value: 'inline' }] }
 */
export type FigmaBooleanToEnumProp = FigmaBaseProp & {
	type: 'booleanToEnum';
	/** Ordered list of Figma boolean keys and the code value to emit when that key is true. */
	map: Array<{ key: string; value: string }>;
};

/**
 * Finds all nested instances matching a filter and maps their properties to an array.
 * Each matched instance produces one object in the array, with keys defined by `props`.
 *
 * @example
 * options: { type: 'nestedInstancesToArray', filter: 'Custom Select List Item', props: { value: { type: 'string', key: '✏️ Value' }, label: { type: 'textContent', key: '✏️ Label' } } }
 */
export type FigmaNestedInstancesToArrayProp = FigmaBaseProp & {
	type: 'nestedInstancesToArray';
	/** Instance name substring to filter by (e.g. 'Custom Select List Item'). */
	filter: string;
	/** Map of output property names → Figma prop definitions to extract from each matched instance. */
	props: Record<string, FigmaProp>;
};

/**
 * Wraps an iconSwap prop so it is only rendered when a boolean Figma property is enabled.
 * Generates: let icon = ''; if (getPropertyValue(guardKey) === true || getPropertyValue(guardKey) === 'True') { icon = `\n\t\ticon="${iconLeading}"` }
 */
export type FigmaConditionalProp = FigmaBaseProp & {
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
	| FigmaBooleanToEnumProp
	| FigmaInstanceProp
	| FigmaConnectedTextProp
	| FigmaValidationMessageProp
	| FigmaConditionalProp
	| FigmaConnectedInstancesProp
	| FigmaNestedConnectedInstancesProp
	| FigmaNestedInstancesToArrayProp
	| FigmaSimpleProp;

export type FigmaCodeConnect = {
	/** Figma node URLs this component connects to. Use 'FIGMA_FILE' as placeholder for the file key. */
	urls: string[];
	/** Map of prop name → Figma prop definition. */
	props: Record<string, FigmaProp>;
	/**
	 * Optional additional layer name substrings to include in the _ccLayers filter.
	 * Each entry adds an `|| n.name.includes('...')` condition to the findLayers predicate.
	 * Use when Code Connect properties live inside named subcomponent instances
	 * (e.g. 'Custom Select Form Field', 'Custom Select Dropdown').
	 */
	ccLayerNames?: string[];
};
