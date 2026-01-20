const { getChildren } = require('./nodes.cjs');
const { findAllSlots, isEvent } = require('./utils.cjs');

const toDashedLowerCase = (input) => {
	return input
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/\s+/g, '-')
		.toLowerCase();
};

const getWCTemplate = (componentName, props, allSlots, metaData) =>
	`
{wc && (
	<db-${componentName}
		data-connect={connectId}
		${props
			.filter(
				(prop) =>
					!isEvent(prop) &&
					(!metaData.ignoreProperties ||
						!metaData.ignoreProperties.includes(prop))
			)
			.map((prop) => `${toDashedLowerCase(prop)}={${prop}}`)
			.join('\n\t\t')}
		{...rest}
	>
	${allSlots.map((slotName) => `<Fragment set:html={slots.${slotName}} />`).join('\n')}
		<slot />
	</db-${componentName}>
)}`;

/**
 *
 * @param json {import('@builder.io/mitosis').MitosisComponent}
 * @returns {string}
 */
const getAstroTemplate = (json) => {
	const { children, propsTypeRef, imports, state, refs, meta } = json;
	const allSlots = findAllSlots(children);

	const metaData = meta?.useMetadata?.['astro'] ?? {};

	let props;
	if (json.props) {
		props = Object.keys(json.props).filter(
			(prop) =>
				prop !== 'children' &&
				prop !== 'class' &&
				!allSlots.includes(prop)
		);
	} else {
		props = [];
	}

	imports.forEach((imp) => {
		if (imp.path === '../../utils') {
			imp.imports['uuid'] = 'uuid';
		}
	});

	const importsString = imports
		.map(({ imports: imps, path }) => {
			if (path.endsWith('.lite')) {
				return `import ${Object.keys(imps)[0]} from '${path.replace('.lite', '.astro')}';`;
			} else {
				return `import { ${Object.keys(imps).join(', ')} } from '${path}';`;
			}
		})
		.join('\n');

	const requiresJavaScript =
		json.hooks.onMount.length > 0 ||
		(json.hooks.onUpdate ? json.hooks.onUpdate?.length > 0 : false);

	const propsInterface = props.length
		? `interface Props {
		${props.map((prop) => `${prop}?: ${propsTypeRef ? `${propsTypeRef}["${prop}"]` : 'any'};`).join('\n\t')}
		wc?: boolean;
		[key: string]: any; // Allow everything else
		}`
		: 'interface Props { wc?: boolean; \n		[key: string]: any; // Allow everything else}';

	let stateType = 'any';
	if (state && Object.keys(state).length > 0) {
		stateType = Object.values(state)[0].typeParameter.split('[')[0];
	}
	const stateString = // TODO: Add proper TS typing
		state
			? `const state: ${stateType} = {${Object.entries(state)
					.map(([key, { code, type }]) => {
						if (type === 'function') {
							return '';
						}
						return `${type === 'property' ? `${key}: ` : ''}${code.replaceAll('props.', '')}`;
					})
					.join(',\n')}}`
			: '';

	const refsString = Object.entries(refs)
		.map(
			([key, { argument, typeParameter }]) =>
				`const ${key}: ${typeParameter} = ${argument};`
		)
		.join('\n');

	const slotString = '${slot}';
	const namedSlotsString = allSlots.length
		? `
const slots: Record<string, string|undefined> = {${allSlots.map((slot) => `"${slot}":undefined`).join(',')}};

for (const slot of Object.keys(slots)) {
	if (Astro.slots.has(slot)) {
		slots[slot] = (await Astro.slots.render(slot)).replace(" ",\` slot="${slotString}" \`)
	}
}`
		: '';

	const uuidString = '${uuid()}';

	return `---
// This file is auto-generated. Do not edit it directly.
${requiresJavaScript ? '// !!! This component requires JavaScript to run with all functions you should enable the wc property. !!!' : ''}

import { uuid } from '../../utils';
${importsString}
${propsInterface}

const { ${props.join(', ')}${props.length ? ', ' : ''}wc = ${requiresJavaScript}, ...rest } = Astro.props;

${refsString}
${stateString}


const connectId = \`connect-${uuidString}\`;

${namedSlotsString}
---

${getChildren(json.children, props, true)}
${getWCTemplate(toDashedLowerCase(json.name.slice(2, json.name.length)), props, allSlots, metaData)}`;
};

module.exports = { getAstroTemplate, toDashedLowerCase };
