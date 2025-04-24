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

export const isInView = (el: Element) => {
	const { top, bottom, left, right } = el.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;

	let outTop = top < 0;
	let outBottom = bottom > innerHeight;
	let outLeft = left < 0;
	let outRight = right > innerWidth;

	// We need to check if it was already outside
	const outsideY = el.hasAttribute('data-outside-vy');
	const outsideX = el.hasAttribute('data-outside-vx');
	const parentRect = el?.parentElement?.getBoundingClientRect();

	if (parentRect) {
		if (outsideY) {
			const position = el.getAttribute('data-outside-vy');
			if (position === 'top') {
				outTop = parentRect.top - (bottom - parentRect.bottom) < 0;
			} else {
				outBottom =
					parentRect.bottom + (parentRect.top - top) > innerHeight;
			}
		}

		if (outsideX) {
			const position = el.getAttribute('data-outside-vx');
			if (position === 'left') {
				outLeft = parentRect.left - (right - parentRect.right) < 0;
			} else {
				outRight =
					parentRect.right + (parentRect.left - left) > innerWidth;
			}
		}
	}

	return {
		outTop,
		outBottom,
		outLeft,
		outRight
	};
};

export interface DBDataOutsidePair {
	vx?: 'left' | 'right';
	vy?: 'top' | 'bottom';
}
export const handleDataOutside = (el: Element): DBDataOutsidePair => {
	const { outTop, outBottom, outLeft, outRight } = isInView(el);
	let dataOutsidePair: DBDataOutsidePair = {};

	if (outTop || outBottom) {
		dataOutsidePair = { vy: outTop ? 'top' : 'bottom' };
		el.setAttribute('data-outside-vy', dataOutsidePair.vy!);
	} else {
		el.removeAttribute('data-outside-vy');
	}
	if (outLeft || outRight) {
		dataOutsidePair = {
			...dataOutsidePair,
			vx: outRight ? 'right' : 'left'
		};
		el.setAttribute('data-outside-vx', dataOutsidePair.vx!);
	} else {
		el.removeAttribute('data-outside-vx');
	}

	return dataOutsidePair;
};

export const isArrayOfStrings = (value: unknown): value is string[] =>
	Array.isArray(value) && value.every((item) => typeof item === 'string');

const appleOs = ['Mac', 'iPhone', 'iPad', 'iPod'];
export const hasVoiceOver = (): boolean =>
	typeof window !== 'undefined' &&
	appleOs.some((os) => window.navigator.userAgent.includes(os));

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
		return String(Boolean(originBool));
	}

	return String(originBool);
};

export const getBoolean = (
	originBool?: boolean | string,
	propertyName?: string
): boolean | undefined => {
	if (originBool === undefined || originBool === null) return;

	if (typeof originBool === 'string' && propertyName) {
		return Boolean(propertyName === originBool || originBool);
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getHideProp = (show?: boolean | string): any => {
	if (show === undefined || show === null) {
		return undefined;
	}

	return getBooleanAsString(!show);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDefaultProp = (defaultValue: any, prop?: any): any => {
	return prop || defaultValue;
};

export const stringPropVisible = (
	givenString?: string,
	showString?: boolean | string
) => {
	if (showString === undefined) {
		return !!givenString;
	} else {
		return Boolean(showString) && Boolean(givenString);
	}
};

export const getSearchInput = (element: HTMLElement): HTMLInputElement | null =>
	element.querySelector<HTMLInputElement>(`input[type="search"]`);
