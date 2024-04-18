import { SemanticType } from '../shared/model';
import { AriaRole, CSSProperties } from 'react';

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

	args.forEach((arg, index) => {
		if (arg) {
			if (typeof arg === 'string') {
				result += `${arg} `;
			} else {
				for (let key in arg) {
					if (arg[key]) {
						result += `${key} `;
					}
				}
			}
		}
	});

	return result.trim();
};

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
	'autoFocus',
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
	'color'
];

export const filterPassingProps = (
	props: any,
	propsPassingFilter: string[]
): any =>
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
		.reduce((obj: any, key: string) => {
			obj[key] = props[key];
			return obj;
		}, {});

export const visibleInVX = (el: Element) => {
	const { left, right } = el.getBoundingClientRect();
	const { innerWidth } = window;
	return left >= 0 && right <= innerWidth;
};
export const visibleInVY = (el: Element) => {
	const { top, bottom } = el.getBoundingClientRect();
	const { innerHeight } = window;
	return top >= 0 && bottom <= innerHeight;
};

export const isInView = (el: Element) => {
	const { top, bottom, left, right, height, width } =
		el.getBoundingClientRect();
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

export const handleDataOutside = (el: Element) => {
	const { outTop, outBottom, outLeft, outRight } = isInView(el);
	if (outTop || outBottom) {
		el.setAttribute('data-outside-vy', outTop ? 'top' : 'bottom');
	} else {
		el.removeAttribute('data-outside-vy');
	}
	if (outLeft || outRight) {
		el.setAttribute('data-outside-vx', outRight ? 'right' : 'left');
	} else {
		el.removeAttribute('data-outside-vx');
	}
};

export class TestClass {
	private test: string;

	constructor(test: string) {
		this.test = test;
	}

	public start() {
		document.addEventListener('mousemove', this.callback);
	}

	public stop() {
		document.removeEventListener('mousemove', this.callback);
	}

	public callback() {
		console.log('TEST');
	}

	public getCallback() {
		return this.callback;
	}
}

export default {
	filterPassingProps,
	cls,
	addAttributeToChildren,
	uuid,
	visibleInVX,
	visibleInVY,
	isInView,
	handleDataOutside
};
