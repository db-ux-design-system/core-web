/* eslint-disable import/no-anonymous-default-export */

/**
 * @param options {string[]}
 * @param elements {{name:string, value?:string, elements?:any[]}[]}
 */
export const getUnionElements = (options, elements) => {
	if (elements) {
		for (const element of elements) {
			options.push(
				element.name === 'literal'
					? element.value
					: element.elements
						? getUnionElements(options, element.elements)
						: element.name
			);
		}
	}
};

/**
 * @param props {object}
 * @param framework {'angular'|'react'|'vue'}
 * @param noEvents {boolean}
 * @return {*[]}
 */
const getAttributes = (props, framework, noEvents) => {
	const attributes = [];

	// Some slots which shouldn't be attributes
	const propertyKeys = props
		? Object.keys(props).filter(
				(key) =>
					key !== 'children' &&
					key !== 'component' &&
					key !== 'identifier' &&
					key !== 'img' &&
					key !== 'link' &&
					key !== 'noContent'
			)
		: [];

	for (const key of propertyKeys) {
		let value = props[key];
		const isEventListener = key.startsWith('on');

		if (noEvents && (isEventListener || value === key)) {
			continue;
		}

		if (
			['boolean', 'number'].includes(typeof value) ||
			value instanceof Object ||
			value === key ||
			isEventListener
		) {
			if (value instanceof Object) {
				value = JSON.stringify(value);
			}

			if (framework === 'angular') {
				if (isEventListener) {
					attributes.push(`(${key})="${value}"`);
				} else {
					attributes.push(`[${key}]="${value}"`);
				}
			} else if (framework === 'vue') {
				if (isEventListener) {
					attributes.push(`@${key}="${value}"`);
				} else {
					attributes.push(`:${key}="${value}"`);
				}
			} else if (typeof props[key] === 'boolean') {
				attributes.push(key);
			} else if (isEventListener) {
				attributes.push(`${key}={()=>${value}}`);
			} else {
				attributes.push(`${key}={${value}}`);
			}
		} else {
			attributes.push(`${key}="${value}"`);
		}
	}

	return attributes;
};

const getTag = (componentName) =>
	componentName
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');

/**
 * @param componentName {string}
 * @param framework {'angular'|'react'|'vue'}
 * @param example {{name:string, props: object,native?:boolean, className?:string, content?:string,children?:{name:string, props: object,native?:boolean}[]}}
 * @param noEvents {boolean}
 * @param [children] {{name:string, props: object,native?:boolean,slot?:string, angularDirective?:boolean, content?:string,children?:{name:string, props: object,native?:boolean}[]}[]}
 * @returns {string}
 */
export const getCodeByFramework = (
	componentName,
	framework,
	example,
	noEvents,
	children
) => {
	const { props, name, content, native } = example;
	let className = '';
	let tag = `DB${getTag(componentName)}`;
	if (framework === 'angular') {
		tag = `db-${componentName}`;
	}

	if (native) {
		tag = componentName;
	}

	if (example.className) {
		className =
			framework === 'react'
				? ` className="${example.className}"`
				: ` class="${example.className}"`;
	}

	const attributes = getAttributes(props, framework, noEvents);
	const nonSlots = (children ?? example.children)?.filter(
		(child) =>
			!child.slot ||
			(child.slot.includes('Navigation') && framework !== 'angular')
	);
	const innerContent =
		nonSlots?.length > 0
			? nonSlots
					.map((child) =>
						getCodeByFramework(
							child.name,
							framework,
							child,
							noEvents,
							child.children
						)
					)
					.join('\n') + (content ?? '')
			: (content ?? name);

	const slots = (children ?? example.children)?.filter((child) =>
		child.slot
			? !(child.slot.includes('Navigation') && framework !== 'angular')
			: false
	);
	let reactSlots = '';
	let otherSlots = '';
	if (slots) {
		if (framework === 'react') {
			reactSlots =
				' ' +
				slots
					.map((child) => {
						let slotName = getTag(child.slot);
						slotName =
							slotName.charAt(0).toLowerCase() +
							slotName.slice(1);
						return `${slotName}={${getCodeByFramework(
							child.name,
							framework,
							child,
							noEvents,
							child.children
						)}}`;
					})
					.join('\n');
		} else {
			otherSlots =
				' ' +
				slots
					.map((child) => {
						const resolvedSlot = getCodeByFramework(
							child.name,
							framework,
							child,
							noEvents,
							child.children
						);
						if (framework === 'angular') {
							return `<ng-container ${child.angularDirective ? `*db${getTag(child.slot)}` : child.slot}>${resolvedSlot}</ng-container>`;
						}

						return `<template v-slot:${child.slot}>${resolvedSlot}</template>`;
					})
					.join('\n');
		}
	}

	if (native && name === 'input') {
		return `<${tag}${className} ${attributes.join(' ')}${reactSlots}/>`;
	}

	return `<${tag}${className} ${attributes.join(' ')}${reactSlots}>
${otherSlots}${innerContent}
</${tag}>`;
};

export const getColorVariants = () => [
	'neutral',
	'neutral-strong',
	'neutral-transparent-full',
	'neutral-transparent-semi',
	'primary',
	'primary-transparent-full',
	'primary-transparent-semi',
	'successful',
	'successful-transparent-full',
	'successful-transparent-semi',
	'critical',
	'critical-transparent-full',
	'critical-transparent-semi',
	'warning',
	'warning-transparent-full',
	'warning-transparent-semi',
	'informational',
	'informational-transparent-full',
	'informational-transparent-semi'
];

export const getComponentName = (filePath) => {
	let componentName = filePath.split('/').at(-1);
	componentName = componentName.replace('.tsx', '').replaceAll(/\s/g, '');
	return componentName;
};

export const getComponentGroup = (components, componentName) => {
	return components.find((comp) =>
		comp.subNavigation.find(
			(sub) =>
				componentName.includes(sub.name) ||
				componentName.replace('tab-item', 'tabs').includes(sub.name)
		)
	);
};

export default {
	getUnionElements,
	getCodeByFramework,
	getColorVariants,
	getComponentName,
	getComponentGroup
};
