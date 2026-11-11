import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	angularChildNodes,
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

// Wrappers whose nested options still end up in the select.
const OPTION_WRAPPERS = new Set([
	'optgroup',
	'template',
	'ng-container',
	'ng-template'
]);

const isElementNode = (child: any): boolean =>
	child.type === 'VElement' ||
	child.type === 'Element' ||
	child.type === 'Element$1';

// Unresolvable React expressions (e.g. `.map()`) count as possible options.
const canRenderOptions = (expression: any): boolean => {
	if (!expression) {
		return false;
	}
	switch (expression.type) {
		case 'JSXEmptyExpression':
		case 'Literal':
		case 'TemplateLiteral': {
			return false;
		}
		case 'Identifier': {
			return expression.name !== 'undefined';
		}
		case 'JSXElement':
		case 'JSXFragment': {
			return isOptionChild(expression);
		}
		case 'LogicalExpression': {
			// `a && b` only renders `b`; `||`/`??` may render either side.
			return expression.operator === '&&'
				? canRenderOptions(expression.right)
				: canRenderOptions(expression.left) ||
						canRenderOptions(expression.right);
		}
		case 'ConditionalExpression': {
			return (
				canRenderOptions(expression.consequent) ||
				canRenderOptions(expression.alternate)
			);
		}
		default: {
			return true;
		}
	}
};

// Whether a node is or (via wrappers / control flow) contains an `<option>`.
function isOptionChild(child: any): boolean {
	if (!child) {
		return false;
	}

	// React
	if (child.type === 'JSXElement') {
		const { name } = child.openingElement;
		if (name.type !== 'JSXIdentifier') {
			return false;
		}
		if (name.name === 'option') {
			return true;
		}
		return (
			OPTION_WRAPPERS.has(name.name) &&
			(child.children ?? []).some(isOptionChild)
		);
	}
	if (child.type === 'JSXFragment') {
		return (child.children ?? []).some(isOptionChild);
	}
	if (child.type === 'JSXExpressionContainer') {
		return canRenderOptions(child.expression);
	}

	// Vue / Angular elements
	if (isElementNode(child)) {
		const tagName = child.rawName ?? child.name;
		if (tagName === 'option') {
			return true;
		}
		if (!OPTION_WRAPPERS.has(tagName)) {
			return false;
		}
		return angularChildNodes(child).some(isOptionChild);
	}

	// Angular structural directives and control flow blocks (`@for`, `@if`, ...)
	if (child.type !== 'Text' && child.type !== 'BoundText') {
		return angularChildNodes(child).some(isOptionChild);
	}

	return false;
}

function hasOptionChildren(node: any): boolean {
	return angularChildNodes(node).some(isOptionChild);
}

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure DBSelect has options property or option children',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#select-requires-options'
		},
		messages: {
			missingOptions: MESSAGES.SELECT_MISSING_OPTIONS
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const options = getAttributeValue(node, 'options');
			const hasChildren = hasOptionChildren(node);

			if (options === undefined && !hasChildren) {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.SELECT_MISSING_OPTIONS
				});
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBSelect,
			angularHandler
		);
		if (angularVisitors) {
			return angularVisitors;
		}

		const checkSelect = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBSelect)) {
				return;
			}

			const options = getAttributeValue(openingElement, 'options');
			const hasChildren = hasOptionChildren(node);

			if (options === undefined && !hasChildren) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.SELECT_MISSING_OPTIONS
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkSelect, Element: checkSelect },
			{ JSXElement: checkSelect }
		);
	}
};
