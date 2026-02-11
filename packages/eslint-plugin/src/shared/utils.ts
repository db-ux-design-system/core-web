import type { TSESTree } from '@typescript-eslint/utils';

export function getAttributeValue(
	node: TSESTree.JSXOpeningElement,
	attrName: string
): string | boolean | null {
	// Try: noText (React), [noText] (Angular), :noText (Vue)
	const variants = [attrName, `[${attrName}]`, `:${attrName}`];

	const attr = node.attributes.find(
		(a) =>
			a.type === 'JSXAttribute' &&
			variants.includes(a.name.name as string)
	) as TSESTree.JSXAttribute | undefined;

	if (!attr) return null;
	if (!attr.value) return true;
	if (attr.value.type === 'Literal') return attr.value.value as string;
	if (attr.value.type === 'JSXExpressionContainer') return true;
	return null;
}

export function hasChildOfType(
	node: TSESTree.JSXElement,
	componentName: string
): boolean {
	const kebabName = componentName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.replace(/^-/, '');

	return node.children.some((child) => {
		if (child.type === 'JSXElement') {
			const openingElement = child.openingElement;
			if (openingElement.name.type === 'JSXIdentifier') {
				const name = openingElement.name.name;
				return name === componentName || name === kebabName;
			}
		}
		return false;
	});
}

export function isDBComponent(
	node: TSESTree.JSXOpeningElement,
	componentName: string
): boolean {
	if (node.name.type !== 'JSXIdentifier') return false;

	const name = node.name.name;
	const kebabName = componentName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.replace(/^-/, '');

	return name === componentName || name === kebabName;
}

export const INTERACTIVE_ELEMENTS = [
	'a',
	'button',
	'input',
	'select',
	'textarea',
	'details',
	'summary',
	'DBButton',
	'DBLink',
	'DBInput',
	'DBSelect',
	'DBTextarea',
	'DBCheckbox',
	'DBRadio',
	'DBSwitch',
	'DBNavigationItem',
	'DBTabItem',
	'DBTag'
];
