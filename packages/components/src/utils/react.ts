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

/** @public */
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

/** @public */
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

type RefCleanup = () => void;
type RefCallback<T> = (instance: T | null) => void | RefCleanup;

/**
 * Creates a stable ref callback that assigns the element to both an internal
 * RefObject and an external forwarded ref (which may be a RefObject or
 * a callback function). This ensures the component always has access to
 * the DOM element via the internal ref, even when the consumer passes a
 * callback ref (e.g. react-hook-form's `register()`).
 *
 * The returned object has a stable `.current` setter so it can be used
 * directly as a ref without causing re-invocation on every render. Cleanup
 * functions returned by React 19 callback refs are invoked when their element
 * is cleared or replaced.
 *
 * @public
 */
export const mergeRefs = <T>(
	internalRef: { current: T | null },
	externalRef: RefCallback<T> | { current: T | null } | null
): { current: T | null } => {
	let currentInstance = internalRef.current;
	let callbackAttached = false;
	let callbackCleanup: RefCleanup | undefined;

	const clearCallbackRef = (): void => {
		const cleanup = callbackCleanup;
		callbackAttached = false;
		callbackCleanup = undefined;

		if (cleanup) {
			cleanup();
		} else if (typeof externalRef === 'function') {
			externalRef(null);
		}
	};

	return {
		set current(instance: T | null) {
			if (currentInstance === instance) {
				return;
			}

			if (callbackAttached) {
				clearCallbackRef();
			}

			currentInstance = instance;
			internalRef.current = instance;

			if (typeof externalRef === 'function') {
				if (instance !== null) {
					const cleanup = externalRef(instance);
					callbackAttached = true;
					callbackCleanup =
						typeof cleanup === 'function' ? cleanup : undefined;
				}
			} else if (externalRef) {
				externalRef.current = instance;
			}
		},
		get current(): T | null {
			return currentInstance;
		}
	};
};

/** @public */
export default {
	getRootProps,
	filterPassingProps,
	mergeRefs
};
