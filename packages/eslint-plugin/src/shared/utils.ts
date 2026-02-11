import type { TSESTree } from '@typescript-eslint/utils';

type VElement = {
	type: 'VElement';
	startTag: {
		attributes: Array<{
			key: { name: string; argument?: { name: string } };
			value?: { value: string };
		}>;
			range: [number, number];
	};
	rawName: string;
	children?: VElement[];
	range: [number, number];
};

type AngularElement = {
	type?: string;
	name: string;
	attributes: Array<{
		name: string;
		value?: string;
	}>;
	inputs: Array<{
		name: string;
		value?: any;
	}>;
	outputs: Array<{
		name: string;
	}>;
	children?: AngularElement[];
};

type ElementNode = TSESTree.JSXOpeningElement | VElement | AngularElement;

function isVElement(node: any): node is VElement {
	return node.type === 'VElement';
}

function isAngularElement(node: any): node is AngularElement {
	return node && typeof node.name === 'string' && (node.attributes || node.inputs);
}

export function getAttributeValue(
	node: ElementNode,
	attrName: string
): string | boolean | null {
	const kebabAttrName = attrName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

	if (isAngularElement(node)) {
		const attr = node.attributes.find(
			(a) => a.name === attrName || a.name === kebabAttrName
		);
		if (attr) {
			return attr.value === undefined || attr.value === '' ? true : attr.value;
		}
		const input = node.inputs.find(
			(i) => i.name === attrName || i.name === kebabAttrName
		);
		if (input) return true;
		return null;
	}

	if (isVElement(node)) {
		const attr = node.startTag.attributes.find((a) => {
			if (a.key.name === 'bind' && a.key.argument?.name === attrName)
				return true;
			return (
				a.key.name === attrName ||
				a.key.name === kebabAttrName ||
				a.key.name === `:${attrName}` ||
				a.key.name === `:${kebabAttrName}`
			);
		});
		if (!attr) return null;
		if (!attr.value) return true;
		return attr.value.value;
	}

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
	node: TSESTree.JSXElement | VElement | AngularElement,
	componentName: string
): boolean {
	const kebabName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

	if (isAngularElement(node)) {
		return (node.children || []).some((child: any) => {
			if (child.type === 'Element') {
				return child.name === componentName || child.name === kebabName;
			}
			return false;
		});
	}

	if (isVElement(node)) {
		return (node.children || []).some((child: any) => {
			if (child.type === 'VElement') {
				return (
					child.rawName === componentName ||
					child.rawName === kebabName
				);
			}
			return false;
		});
	}

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
	node: ElementNode,
	componentName: string
): boolean {
	const kebabName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

	if (isAngularElement(node)) {
		return node.name === componentName || node.name === kebabName;
	}

	if (isVElement(node)) {
		return node.rawName === componentName || node.rawName === kebabName;
	}

	if (node.name.type !== 'JSXIdentifier') return false;
	const name = node.name.name;
	return name === componentName || name === kebabName;
}

export function defineTemplateBodyVisitor(
	context: any,
	templateVisitor: any,
	scriptVisitor?: any
) {
	const sourceCode = context.sourceCode || context.getSourceCode();

	// Vue templates
	if (sourceCode.parserServices?.defineTemplateBodyVisitor) {
		return sourceCode.parserServices.defineTemplateBodyVisitor(
			templateVisitor,
			scriptVisitor || {}
		);
	}

	// Angular templates
	if (sourceCode.parserServices?.convertNodeSourceSpanToLoc) {
		const angularVisitors: any = {};
		for (const [key, handler] of Object.entries(templateVisitor)) {
			if (key === 'VElement' || key === 'Element') {
				angularVisitors['Element'] = handler;
			} else {
				angularVisitors[key] = handler;
			}
		}
		return angularVisitors;
	}

	// JSX
	return scriptVisitor || {};
}

export function createAngularVisitors(
	context: any,
	componentName: string,
	handler: (node: any, parserServices: any) => void
) {
	const sourceCode = context.sourceCode || context.getSourceCode();
	const parserServices = sourceCode?.parserServices;
	const isAngular = parserServices?.convertNodeSourceSpanToLoc;

	if (!isAngular) {
		return null;
	}

	// For DB components, convert DBComponentName -> db-component-name
	const kebabName = componentName.startsWith('DB')
		? 'db-' + componentName.slice(2).replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
		: componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

	const wrappedHandler = (node: any) => handler(node, parserServices);

	return {
		[`Element[name="${kebabName}"]`]: wrappedHandler,
		[`Element[name="${componentName}"]`]: wrappedHandler
	};
}
