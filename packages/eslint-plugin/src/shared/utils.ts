import type { TSESTree } from '@typescript-eslint/utils';

type VElement = {
	type: 'VElement';
	startTag: {
		attributes: Array<{
			key: {
				name: string | { name: string };
				argument?: string | { name: string | { name: string } };
			};
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
	return (
		node &&
		typeof node.name === 'string' &&
		(node.attributes || node.inputs)
	);
}

export function getAttributeValue(
	node: ElementNode,
	attrName: string
): string | boolean | undefined {
	const kebabAttrName = toKebabCase(attrName);

	if (isAngularElement(node)) {
		const attr = node.attributes.find(
			(a) => a.name === attrName || a.name === kebabAttrName
		);
		if (attr) {
			return attr.value === undefined || attr.value === ''
				? true
				: attr.value;
		}

		const input = node.inputs.find(
			(i) => i.name === attrName || i.name === kebabAttrName
		);
		if (input) return true;
		return undefined;
	}

	if (isVElement(node)) {
		const attr = node.startTag.attributes.find((a) => {
			const keyName =
				typeof a.key.name === 'string' ? a.key.name : a.key.name?.name;
			const argName = a.key.argument
				? typeof a.key.argument === 'string'
					? a.key.argument
					: typeof a.key.argument.name === 'string'
						? a.key.argument.name
						: a.key.argument.name?.name
				: undefined;
			if (
				keyName === 'bind' &&
				(argName === attrName ||
					argName === kebabAttrName ||
					argName === attrName.toLowerCase() ||
					argName === kebabAttrName.toLowerCase())
			)
				return true;
			return (
				keyName === attrName ||
				keyName === kebabAttrName ||
				keyName === `:${attrName}` ||
				keyName === `:${kebabAttrName}`
			);
		});
		if (!attr) return undefined;
		if (!attr.value) return true;
		return attr.value.value ?? true;
	}

	const variants = new Set([attrName, `[${attrName}]`, `:${attrName}`]);
	const attr = node.attributes.find(
		(a) => a.type === 'JSXAttribute' && variants.has(a.name.name as string)
	) as TSESTree.JSXAttribute | undefined;

	if (!attr) return undefined;
	if (!attr.value) return true;
	if (attr.value.type === 'Literal') return attr.value.value as string;
	if (attr.value.type === 'JSXExpressionContainer') return true;
	return undefined;
}

export function hasChildOfType(
	node: TSESTree.JSXElement | VElement | AngularElement,
	componentName: string
): boolean {
	const kebabName = getAngularComponentName(componentName);
	if (isAngularElement(node)) {
		return (node.children || []).some((child: any) => {
			if (child.type === 'Element' || child.type === 'Element$1') {
				return child.name === componentName || child.name === kebabName;
			}

			return false;
		});
	}

	if (isVElement(node)) {
		return (node.children || []).some((child: any) => {
			if (child.type === 'VElement' || child.type === 'Element') {
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
			const { openingElement } = child;
			if (openingElement.name.type === 'JSXIdentifier') {
				const { name } = openingElement.name;
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
	const kebabName = getAngularComponentName(componentName);
	if (isAngularElement(node)) {
		return node.name === componentName || node.name === kebabName;
	}

	if (isVElement(node)) {
		return node.rawName === componentName || node.rawName === kebabName;
	}

	if (node.name.type !== 'JSXIdentifier') return false;
	const { name } = node.name;
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
				angularVisitors.Element = handler;
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

	const kebabName = getAngularComponentName(componentName);

	const wrappedHandler = (node: any) => {
		handler(node, parserServices);
	};

	return {
		[`Element[name="${kebabName}"]`]: wrappedHandler,
		[`Element[name="${componentName}"]`]: wrappedHandler
	};
}

export function toKebabCase(string_: string): string {
	return string_.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function getAngularComponentName(componentName: string): string {
	// For DB components, convert DBComponentName -> db-component-name
	return componentName.startsWith('DB')
		? 'db-' + toKebabCase(componentName.slice(2))
		: toKebabCase(componentName);
}

export function createAngularFix(
	context: any,
	node: any,
	attributeText: string
) {
	const sourceCode = context.sourceCode || context.getSourceCode();
	const text = sourceCode.getText();
	const startOffset = node.sourceSpan.start.offset;
	const endOffset = node.sourceSpan.end.offset;
	const tagText = text.substring(startOffset, endOffset);
	const closeTagIndex = tagText.indexOf('>');
	if (closeTagIndex === -1) return null;
	const insertPos = startOffset + closeTagIndex;
	return { insertPos, attributeText };
}

export function createJsxVueFix(
	node: any,
	openingElement: any,
	attributeText: string
) {
	if (node.openingElement) {
		// JSX
		const lastAttr = openingElement.attributes.at(-1);
		const insertPos = lastAttr
			? lastAttr.range[1]
			: openingElement.name.range[1];
		return { insertPos, attributeText };
	}

	// Vue
	const attrs = openingElement.startTag.attributes;
	if (attrs.length > 0) {
		const lastAttr = attrs.at(-1);
		return { insertPos: lastAttr.range[1], attributeText };
	}

	const insertPos =
		openingElement.startTag.range[0] + 1 + openingElement.rawName.length;
	return { insertPos, attributeText };
}
