import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAngularComponentName,
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
	DBDrawerHeader: { parents: [{ name: 'DBDrawer', slot: 'header' }] },
	DBDrawerFooter: { parents: [{ name: 'DBDrawer', slot: 'footer' }] },
	DBAccordionItem: { parents: [{ name: 'DBAccordion', slot: undefined }] },
	DBNavigationItem: {
		parents: [
			{ name: 'DBNavigation', slot: undefined },
			{ name: 'DBNavigationItem', slot: 'subNavigation' }
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
 * For slot-based placement, the slot attribute can be on:
 * - The sub-component itself: <db-drawer-header header>
 * - A wrapper element: <ng-container header><db-drawer-header></ng-container>
 */
function isInsideAngularParent(
	node: any,
	parentName: string,
	slotName: string | undefined
): boolean {
	// First check if the node itself has the slot attribute
	let hasSlotAttribute = false;
	if (slotName) {
		const selfAttrs = node.attributes || [];
		if (selfAttrs.some((a: any) => doesSlotNameMatch(a.name, slotName))) {
			hasSlotAttribute = true;
		}
	}

	let current = node.parent;

	while (current) {
		// Check if current node has the slot attribute
		if (
			slotName &&
			!hasSlotAttribute &&
			current.attributes?.some((a: any) =>
				doesSlotNameMatch(a.name, slotName)
			)
		) {
			hasSlotAttribute = true;
		}

		// Check if we reached the parent component
		if (
			(current.type === 'Element' || current.type === 'Element$1') &&
			isDBComponent(current, parentName)
		) {
			return slotName ? hasSlotAttribute : true;
		}

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
		// Skip non-element nodes (text nodes, document fragments, etc.)
		if (current.type !== 'VElement' && current.type !== 'Element') {
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
				const keyName =
					typeof attr.key?.name === 'string'
						? attr.key.name
						: attr.key?.name?.name;
				const argName = attr.key?.argument
					? typeof attr.key.argument === 'string'
						? attr.key.argument
						: typeof attr.key.argument.name === 'string'
							? attr.key.argument.name
							: attr.key.argument.name?.name
					: undefined;

				return (
					keyName === 'slot' &&
					argName !== undefined &&
					doesSlotNameMatch(argName, slotName)
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
 * Checks if a JSX node is inside the expected parent, or is passed as a slot prop value.
 */
function isInsideJsxParent(
	node: any,
	parentName: string,
	slotName: string | undefined
): boolean {
	let current = node.parent;

	while (current) {
		if (current.type === 'JSXElement') {
			const opening = current.openingElement;
			if (opening && isDBComponent(opening, parentName)) {
				// If no slot is required, any ancestor match is valid
				if (!slotName) {
					return true;
				}
				// If a slot IS required, accept direct JSX children of the parent
				// (React Mitosis output handles children as slots internally)
				if (node.parent === current) {
					return true;
				}
				// For nested cases, only accept if passed through the slot prop
				// (handled by the JSXExpressionContainer check below).
				// Do not return true here — continue walking up.
			}
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
			{ VElement: checkComponent, Element: checkComponent },
			{ JSXElement: checkComponent }
		);
	}
};
