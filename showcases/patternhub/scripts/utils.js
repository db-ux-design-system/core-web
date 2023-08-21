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
					: getUnionElements(options, element.elements)
			);
		}
	}
};

/**
 * @param componentName {string}
 * @param framework {'angular'|'react'|'vue'}
 * @param example {{name:string, props: object}}
 * @returns {string}
 */
export const getCodeByFramework = (componentName, framework, example) => {
	const props = example.props;
	let tag = `DB${componentName
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('')}`;
	if (framework === 'angular') {
		tag = `db-${componentName}`;
	}

	const attributes = [];

	const propKeys = props
		? Object.keys(props).filter((key) => key !== 'children')
		: [];

	for (const key of propKeys) {
		let value = props[key];

		if (value instanceof Object) {
			value = JSON.stringify(value);
		}

		if (
			typeof props[key] === 'boolean' ||
			typeof props[key] === 'number' ||
			props[key] instanceof Object ||
			key === 'click'
		) {
			if (
				framework !== 'react' &&
				(props[key] instanceof Object || key === 'click')
			) {
				value = value.replace(/"/g, "'");
			}

			if (framework === 'angular') {
				attributes.push(`[${key}]="${value}"`);
			} else if (framework === 'vue') {
				attributes.push(`:${key}="${value}"`);
			} else if (framework === 'react' && key === 'click') {
				attributes.push(`onClick={${value}}`);
			} else if (typeof props[key] === 'boolean') {
				attributes.push(key);
			} else {
				attributes.push(`${key}={${value}}`);
			}
		} else {
			attributes.push(`${key}="${value}"`);
		}
	}

	return `<${tag} ${attributes.join(' ')}>${example.name}</${tag}>`;
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

export default { getUnionElements, getCodeByFramework, getColorVariants };
