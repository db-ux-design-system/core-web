const reactHtmlAttributes = [
	'suppressHydrationWarning',
	'suppressContentEditableWarning',
	'translate',
	'title',
	'tabIndex',
	'style',
	'spellCheck',
	'nonce',
	'lang',
	'hidden',
	'draggable',
	'dir',
	'contextMenu',
	'contentEditable',
	'accessKey',
	'is',
	'inputMode',
	'unselectable',
	'security',
	'results',
	'vocab',
	'typeof',
	'rev',
	'resource',
	'rel',
	'property',
	'inlist',
	'datatype',
	'content',
	'about',
	'role',
	'radioGroup',
	'color',
	// other attributes for button,input,etc.
	'form',
	'formAction',
	'formEncType',
	'formMethod',
	'formNoValidate',
	'formTarget',
	'capture',
	'dirName',
	'download',
	'ping'
];

export const filterPassingProps = (
	props: any,
	propsPassingFilter: string[]
): Record<string, unknown> =>
	Object.keys(props)
		.filter(
			(key) =>
				(key.startsWith('data-') ||
					key.startsWith('aria-') ||
					key.startsWith('default') ||
					key.startsWith('auto') ||
					key.startsWith('item') ||
					key.startsWith('on') ||
					reactHtmlAttributes.includes(key)) &&
				!propsPassingFilter.includes(key)
		)
		.reduce((obj: Record<string, unknown>, key: string) => {
			return { ...obj, [key]: props[key] };
		}, {});

export const getRootProps = (
	props: any,
	rooProps: string[]
): Record<string, unknown> => {
	return Object.keys(props)
		.filter((key) => rooProps.includes(key))
		.reduce((obj: Record<string, unknown>, key: string) => {
			return { ...obj, [key]: props[key] };
		}, {});
};

/**
 * Creates a stable ref callback that assigns the element to both an internal
 * RefObject and an external forwarded ref (which may be a RefObject or
 * a callback function). This ensures the component always has access to
 * the DOM element via the internal ref, even when the consumer passes a
 * callback ref (e.g. react-hook-form's `register()`).
 *
 * The returned object has a stable `.current` setter so it can be used
 * directly as a ref without causing re-invocation on every render.
 */
export const mergeRefs = <T>(
	internalRef: { current: T | null },
	externalRef: ((instance: T | null) => void) | { current: T | null } | null
): { current: T | null } => {
	return {
		set current(instance: T | null) {
			internalRef.current = instance;
			if (typeof externalRef === 'function') {
				externalRef(instance);
			} else if (externalRef) {
				externalRef.current = instance;
			}
		},
		get current(): T | null {
			return internalRef.current;
		}
	};
};

export default {
	getRootProps,
	filterPassingProps,
	mergeRefs
};
