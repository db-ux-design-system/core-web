import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAngularComponentName,
	getVueSlotArgument,
	isDBComponent
} from '../../shared/utils.js';

/**
 * Configuration for sub-components that must be used inside a specific parent.
 *
 * - `slot`: The named slot the sub-component must be in.
 *   - Angular: the sub-component or an ancestor has the `[slot]` attribute inside the parent
 *   - Vue: child is inside `<template v-slot:[slot]>` or `<template #[slot]>`
 *   - React: sub-component is passed as a prop value (checked via parent hierarchy)
 * - `slot: null`: The sub-component must be a direct child of the parent (no slot required).
 * - `parents`: Array of valid parent configurations (the sub-component can be in ANY of them).
 */
const SUB_COMPONENT_CONFIG: Record<
	string,
	{ parents: Array<{ name: string; slot: string | undefined }> }
> = {
	[COMPONENTS.DBDrawerHeader]: {
		parents: [{ name: COMPONENTS.DBDrawer, slot: 'header' }]
	},
	[COMPONENTS.DBDrawerFooter]: {
		parents: [{ name: COMPONENTS.DBDrawer, slot: 'footer' }]
	},
	[COMPONENTS.DBDialogHeader]: {
		parents: [{ name: COMPONENTS.DBDialog, slot: 'header' }]
	},
	[COMPONENTS.DBDialogFooter]: {
		parents: [{ name: COMPONENTS.DBDialog, slot: 'footer' }]
	},
	DBAccordionItem: { parents: [{ name: 'DBAccordion', slot: undefined }] },
	DBNavigationItem: {
		parents: [
			{ name: 'DBNavigation', slot: undefined },
			{ name: 'DBNavigationItem', slot: 'subNavigation' },
			{ name: 'DBHeader', slot: undefined }
		]
	},
	DBTabList: { parents: [{ name: 'DBTabs', slot: undefined }] },
	DBTabItem: { parents: [{ name: 'DBTabList', slot: undefined }] },
	DBTabPanel: { parents: [{ name: 'DBTabs', slot: undefined }] },
	DBTableHead: { parents: [{ name: 'DBTable', slot: undefined }] },
	DBTableBody: { parents: [{ name: 'DBTable', slot: undefined }] },
	DBTableFooter: { parents: [{ name: 'DBTable', slot: undefined }] },
	DBTableCaption: { parents: [{ name: 'DBTable', slot: 'caption' }] },
	DBTableRow: {
		parents: [
			{ name: 'DBTableHead', slot: undefined },
			{ name: 'DBTableBody', slot: undefined },
			{ name: 'DBTableFooter', slot: undefined }
		]
	},
	DBTableHeaderCell: { parents: [{ name: 'DBTableRow', slot: undefined }] },
	DBTableDataCell: { parents: [{ name: 'DBTableRow', slot: undefined }] }
};

/**
 * Checks if a Vue rawName or name matches the given component name (PascalCase or kebab-case).
 */
function isMatchingComponentName(
	rawName: string | undefined,
	componentName: string
): boolean {
	if (!rawName) {
		return false;
	}
	const kebabName = getAngularComponentName(componentName);
	return rawName === componentName || rawName === kebabName;
}

/**
 * Converts a camelCase string to kebab-case for slot name comparison.
 */
function toKebabCase(string_: string): string {
	return string_.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Checks if two slot names match, comparing both camelCase and kebab-case forms.
 */
function doesSlotNameMatch(actual: string, expected: string): boolean {
	if (actual === expected) {
		return true;
	}
	return (
		toKebabCase(actual) === toKebabCase(expected) ||
		actual === toKebabCase(expected) ||
		toKebabCase(actual) === expected
	);
}

/**
 * Checks if an Angular node is inside the expected parent, optionally within a named slot.
 * For slot-based placement, Angular projects with `<ng-content select="[slot]">`,
 * which matches only the element that is a DIRECT child of the parent. So the slot
 * attribute must be on that directly-projected node - either:
 * - the sub-component itself when it is the direct child: <db-drawer-header header>
 * - a directly-projected wrapper: <db-drawer><ng-container header><db-drawer-header>
 * A marker on a deeper descendant (e.g. <db-dialog><div><db-dialog-footer footer>)
 * does NOT project: Angular matches the unmarked <div>, so the content lands in the
 * default slot, not the footer row - that case must still be reported.
 */
function isInsideAngularParent(
	node: any,
	parentName: string,
	slotName: string | undefined
): boolean {
	// Track the node one level below `current` so that, when we reach the parent,
	// `projected` is the element Angular actually projects (the parent's direct
	// child). The slot marker only counts when it sits on that projected node.
	let projected = node;
	let current = node.parent;

	while (current) {
		// Check if we reached the parent component
		if (
			(current.type === 'Element' || current.type === 'Element$1') &&
			isDBComponent(current, parentName)
		) {
			if (!slotName) {
				return true;
			}
			const projectedAttrs = projected.attributes || [];
			return projectedAttrs.some((a: any) =>
				doesSlotNameMatch(a.name, slotName)
			);
		}

		projected = current;
		current = current.parent;
	}

	return false;
}

/**
 * Checks if a Vue node is inside the expected parent, optionally within a named slot.
 */
function isInsideVueParent(
	node: any,
	parentName: string,
	slotName: string | undefined
): boolean {
	let current = node.parent;
	let hasSlotTemplate = false;

	while (current) {
		// Skip non-element nodes (text nodes, document fragments, etc.).
		// `Element$1` is the Vue parser's fallback element type; it can expose the
		// slot template or the parent component, so it must be walked like a real
		// element rather than skipped.
		if (
			current.type !== 'VElement' &&
			current.type !== 'Element' &&
			current.type !== 'Element$1'
		) {
			current = current.parent;
			continue;
		}

		// Check if current is a <template v-slot:[slotName]> or <template #[slotName]>
		if (
			slotName &&
			(current.rawName === 'template' || current.name === 'template')
		) {
			const attrs = current.startTag?.attributes || [];
			const matchesSlot = attrs.some((attr: any) => {
				const slotArg = getVueSlotArgument(attr);
				if (!slotArg) {
					return false;
				}
				// A dynamic slot argument (`#[slotName]`) cannot be resolved
				// statically, so it may place the sub-component in the required
				// slot at runtime - accept it as unverified rather than reporting.
				if (slotArg.dynamic) {
					return true;
				}
				return (
					slotArg.name !== undefined &&
					doesSlotNameMatch(slotArg.name, slotName)
				);
			});
			if (matchesSlot) {
				hasSlotTemplate = true;
			}
		}

		// Check if we reached the parent component (skip template elements)
		if (
			current.rawName !== 'template' &&
			isMatchingComponentName(current.rawName, parentName)
		) {
			return slotName ? hasSlotTemplate : true;
		}

		current = current.parent;
	}

	return false;
}

/**
 * Whether `node` is a direct child of `parentElement`, counting a transparent
 * inline array/TS wrapper as direct: `<DBAccordion>{[<DBAccordionItem />]}</DBAccordion>`
 * renders the item directly inside DBAccordion. `effectiveParent` is the JSX
 * container that holds the node after peeling those wrappers, so the node itself
 * (unwrapped), that container, or the container's parent must be `parentElement`.
 */
function isDirectChild(
	node: any,
	effectiveParent: any,
	parentElement: any
): boolean {
	return (
		node.parent === parentElement ||
		effectiveParent === parentElement ||
		effectiveParent?.parent === parentElement
	);
}

/**
 * Checks if a JSX node is inside the expected parent, or is passed as a slot prop value.
 */
function isInsideJsxParent(
	node: any,
	parentName: string,
	slotName: string | undefined
): boolean {
	// Conservatively allow indirectly composed sub-components. When the element
	// is not rendered inline inside another JSX tree - e.g. it is extracted into
	// a variable (`const header = <DBDialogHeader />`), returned from a function,
	// or stored in an array/object - its placement cannot be verified statically.
	// This mirrors dialog-header-required, which accepts identifier and
	// call-expression slot values as unverifiable, so normal React component
	// extraction does not fail lint.
	const jsxContainerTypes = new Set([
		'JSXElement',
		'JSXFragment',
		'JSXExpressionContainer'
	]);

	// An inline array (or transparent TS wrapper) inside a JSX expression still
	// has a statically known placement, e.g. `<div>{[<DBDialogHeader />]}</div>`
	// renders the header inside the div, not in a DBDialog header slot. Peel such
	// wrappers to find the effective parent so the placement is verified rather
	// than bypassed. An array/wrapper that is NOT inside a JSX tree (e.g.
	// `const items = [<DBDialogHeader />]`) stays unverifiable and is allowed.
	const transparentWrapperTypes = new Set([
		'ArrayExpression',
		'TSAsExpression',
		'TSSatisfiesExpression',
		'TSNonNullExpression'
	]);
	let effectiveParent = node.parent;
	while (
		effectiveParent &&
		transparentWrapperTypes.has(effectiveParent.type)
	) {
		effectiveParent = effectiveParent.parent;
	}

	if (!jsxContainerTypes.has(effectiveParent?.type)) {
		return true;
	}

	let current = node.parent;

	while (current) {
		if (current.type === 'JSXElement') {
			const opening = current.openingElement;
			if (opening && isDBComponent(opening, parentName) && !slotName) {
				// If no slot is required, only accept direct children of the
				// parent - counting a transparent inline array/wrapper as direct.
				return isDirectChild(node, effectiveParent, current);
			}
			// If a slot IS required, only accept if passed through the named slot prop
			// (handled by the JSXExpressionContainer check below).
			// Direct JSX children without slot prop are NOT valid for slot-based relationships.
		}

		// Check if this node is passed as a prop value (JSX expression container)
		// e.g. <DBDrawer header={<DBDrawerHeader>Title</DBDrawerHeader>}>
		if (
			slotName &&
			current.type === 'JSXExpressionContainer' &&
			current.parent?.type === 'JSXAttribute'
		) {
			const attr = current.parent;
			const attrName =
				typeof attr.name?.name === 'string' ? attr.name.name : '';
			if (doesSlotNameMatch(attrName, slotName)) {
				// Check that the attribute belongs to the expected parent
				const parentElement = attr.parent; // JSXOpeningElement
				if (parentElement && isDBComponent(parentElement, parentName)) {
					return true;
				}
			}
		}

		current = current.parent;
	}

	return false;
}

export default {
	meta: {
		type: 'problem' as const,
		docs: {
			description:
				'Ensure sub-components are used inside their required parent component',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#sub-component-required-parent'
		},
		messages: {
			[MESSAGE_IDS.SUB_COMPONENT_REQUIRED_PARENT]:
				MESSAGES.SUB_COMPONENT_REQUIRED_PARENT
		},
		schema: []
	},
	create(context: any) {
		const subComponents = Object.keys(SUB_COMPONENT_CONFIG);

		const angularHandler = (node: any, parserServices: any) => {
			const component = subComponents.find((comp) =>
				isDBComponent(node, comp)
			);
			if (!component) {
				return;
			}

			const config = SUB_COMPONENT_CONFIG[component];
			const isValid = config.parents.some((p) =>
				isInsideAngularParent(node, p.name, p.slot)
			);
			if (isValid) {
				return;
			}

			// Build the parent description for the error message
			const parentDesc = config.parents
				.map((p) => {
					const parentName = node.name.startsWith('db-')
						? getAngularComponentName(p.name)
						: p.name;
					return p.slot
						? `${parentName} (in slot "${p.slot}")`
						: parentName;
				})
				.join(' or ');

			const loc = parserServices.convertNodeSourceSpanToLoc(
				node.sourceSpan
			);
			context.report({
				loc,
				messageId: MESSAGE_IDS.SUB_COMPONENT_REQUIRED_PARENT,
				data: {
					component: node.name,
					parent: parentDesc,
					slot: ''
				}
			});
		};

		const angularVisitors: any = {};
		for (const comp of subComponents) {
			const visitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (visitors) {
				Object.assign(angularVisitors, visitors);
			}
		}
		if (Object.keys(angularVisitors).length > 0) {
			return angularVisitors;
		}

		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			const component = subComponents.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) {
				return;
			}

			const config = SUB_COMPONENT_CONFIG[component];
			const componentName =
				openingElement.name?.name || openingElement.rawName;

			// Determine if JSX or Vue
			const isJsx =
				node.type === 'JSXElement' || node.openingElement !== undefined;

			const isValid = isJsx
				? config.parents.some((p) =>
						isInsideJsxParent(node, p.name, p.slot)
					)
				: config.parents.some((p) =>
						isInsideVueParent(node, p.name, p.slot)
					);

			if (!isValid) {
				const parentDesc = config.parents
					.map((p) =>
						p.slot ? `${p.name} (in slot "${p.slot}")` : p.name
					)
					.join(' or ');
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.SUB_COMPONENT_REQUIRED_PARENT,
					data: {
						component: componentName,
						parent: parentDesc,
						slot: ''
					}
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			// `Element$1` is the Vue parser's fallback element type; register it
			// too so a sub-component (e.g. DBDialogHeader/DBDialogFooter) exposed
			// as that node is still validated. Walking `Element$1` ancestors does
			// not help when the root sub-component itself is skipped (matches the
			// header-required rules and text-or-children-required).
			{
				VElement: checkComponent,
				Element: checkComponent,
				Element$1: checkComponent
			},
			{ JSXElement: checkComponent }
		);
	}
};
