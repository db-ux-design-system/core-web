import { ClickEvent, GeneralKeyboardEvent } from '../shared/model';

export const uuid = () => {
	if (typeof window !== 'undefined') {
		if (window.crypto?.randomUUID) {
			return window.crypto.randomUUID();
		} else if (window.crypto?.getRandomValues) {
			return window.crypto.getRandomValues(new Uint32Array(3)).join('-');
		}
	}

	return Math.random().toString().substring(2);
};

export const addAttributeToChildren = (
	element: Element,
	attribute: { key: string; value: string }
) => {
	const children = element.children;
	Object.values(children).forEach((child: Element) => {
		child.setAttribute(attribute.key, attribute.value);
		if (child.children.length > 0) {
			addAttributeToChildren(child, attribute);
		}
	});
};

export type ClassNameArg =
	| string
	| { [key: string]: boolean | undefined }
	| undefined;
export const cls = (...args: ClassNameArg[]) => {
	let result = '';

	for (const arg of args) {
		if (arg) {
			if (typeof arg === 'string') {
				result += `${arg} `;
			} else {
				for (const key in arg) {
					if (arg[key]) {
						result += `${key} `;
					}
				}
			}
		}
	}

	return result.trim();
};

export const isArrayOfStrings = (value: unknown): value is string[] =>
	Array.isArray(value) && value.every((item) => typeof item === 'string');

const appleOs = ['Mac', 'iPhone', 'iPad', 'iPod'];
export const hasVoiceOver = (): boolean =>
	typeof window !== 'undefined' &&
	appleOs.some((os) => window.navigator.userAgent.includes(os));

/**
 * Determines if the current browser is Safari running on an iOS device.
 *
 * This function checks the user agent string to verify both iOS platform
 * (iPad, iPhone, or iPod) and Safari browser, excluding other browsers
 * such as Chrome, Firefox, Opera, and Edge on iOS.
 *
 * @returns {boolean} `true` if the browser is Safari on iOS, otherwise `false`.
 */
export const isIOSSafari = (): boolean => {
	if (typeof window === 'undefined' || typeof navigator === 'undefined')
		return false;
	const ua = navigator.userAgent;
	// iOS detection
	const isIOS = /iP(ad|hone|od)/.test(ua);
	// Safari detection (not Chrome or Firefox on iOS)
	const isSafari =
		!!ua.match(/Safari/) && !ua.match(/CriOS|FxiOS|OPiOS|EdgiOS/);
	return isIOS && isSafari;
};

export const delay = (fn: () => void, ms: number) =>
	new Promise(() => setTimeout(fn, ms));

/**
 * Some frameworks like stencil would not add "true" as value for a prop
 * if it is used in a framework like angular e.g.: [disabled]="myDisabledProp"
 * @param originBool Some boolean to convert to string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBooleanAsString = (originBool?: boolean | string): any => {
	if (originBool === undefined || originBool === null) return;

	if (typeof originBool === 'string') {
		return String(originBool === 'true');
	}

	return String(originBool);
};

export const getBoolean = (
	originBool?: boolean | string,
	propertyName?: string
): boolean | undefined => {
	if (originBool === undefined || originBool === null) return;

	if (typeof originBool === 'string') {
		return Boolean(propertyName === originBool || originBool === 'true');
	}

	return Boolean(originBool);
};

export const getNumber = (
	originNumber?: number | string,
	alternativeNumber?: number | string
): number | undefined => {
	if (
		(originNumber === undefined || originNumber === null) &&
		(alternativeNumber === undefined || alternativeNumber === null)
	) {
		return;
	}

	return Number(originNumber ?? alternativeNumber);
};

/**
 * Retrieves the input value based on the provided value and input type.
 *
 * If the input type is "number" or "range", the value is processed as a number.
 * Otherwise, the value is returned as-is.
 *
 * @param value - The input value, which can be a number, string, or undefined.
 * @param inputType - The type of the input, such as "number", "range", or other string types.
 * @returns The processed input value as a string, number, or undefined.
 */
export const getInputValue = (
	value?: number | string,
	inputType?: string
): string | number | undefined => {
	return inputType && ['number', 'range'].includes(inputType)
		? getNumber(value)
		: value;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getHideProp = (show?: boolean | string): any => {
	if (show === undefined || show === null) {
		return undefined;
	}

	let _show;
	if (typeof show === 'string') {
		_show = show === 'true';
	} else {
		_show = show;
	}

	return getBooleanAsString(!_show);
};

export const stringPropVisible = (
	givenString?: string,
	showString?: boolean | string
) => {
	if (showString === undefined) {
		return !!givenString;
	} else {
		return showString === 'true' && Boolean(givenString);
	}
};

export const getSearchInput = (element: HTMLElement): HTMLInputElement | null =>
	element.querySelector<HTMLInputElement>(`input[type="search"]`);

export const getOptionKey = (
	option: { id?: string; value?: string | number | string[] | undefined },
	prefix: string
) => {
	const key = option.id ?? option.value ?? uuid();
	return `${prefix}${key}`;
};

export const isKeyboardEvent = <T>(
	event?: ClickEvent<T> | GeneralKeyboardEvent<T>
): event is GeneralKeyboardEvent<T> =>
	(event as GeneralKeyboardEvent<T>).key !== undefined;
