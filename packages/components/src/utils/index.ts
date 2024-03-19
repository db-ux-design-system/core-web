import { DefaultVariantType } from '../shared/model';

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

export const getMessageIcon = (
	variant?: DefaultVariantType,
	messageIcon?: string
): string | undefined => {
	return messageIcon
		? messageIcon
		: !variant || variant === 'adaptive'
			? 'none'
			: undefined;
};

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
					key.startsWith('on')) &&
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

export default {
	filterPassingProps,
	getMessageIcon,
	cls,
	addAttributeToChildren,
	uuid,
	visibleInVX,
	visibleInVY
};
