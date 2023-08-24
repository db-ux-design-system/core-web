import { DefaultVariantType } from '../shared/model';

export const uuid = () => {
	try {
		if (typeof window !== 'undefined') {
			if (window.crypto) {
				if (window.crypto.randomUUID) {
					return window.crypto.randomUUID();
				} else if (window.crypto.getRandomValues) {
					return window.crypto
						.getRandomValues(new Uint32Array(3))
						.join('-');
				}
			}
		}
	} catch (error) {
		console.warn(error);
	}

	return Math.random().toString();
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
