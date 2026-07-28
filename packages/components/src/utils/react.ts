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

/**
 * Standard HTML defaultX attributes that React recognizes on DOM elements.
 * Only these should be forwarded — custom default* props (e.g. defaultOpen)
 * must NOT be passed to the DOM.
 */
const reactDefaultAttributes = [
	'defaultChecked',
	'defaultValue',
	'defaultSelected'
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
					reactDefaultAttributes.includes(key) ||
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

export default {
	getRootProps,
	filterPassingProps
};
