// ============================================================================
// Dependencies
// ============================================================================
const { getChildren } = require('./nodes.cjs');
const { findAllSlots, isEvent, toDashedLowerCase } = require('./utils.cjs');

// ============================================================================
// Template Generation Functions
// ============================================================================

/**
 * Generates the style block for hiding non-hydrated web components
 * @param {string} componentName - The component name in dashed format
 * @returns {string} The style block as a string
 */
const getStyle = (componentName) => {
	return `<style>
	db-${componentName}{
		&:not(.hydrated),
		&:is(.hydrated) + .db-${componentName}[data-connect-id] {
			display: none;
		}
	}
</style>`;
};

/**
 * Generates the Web Component template markup
 * @param {string} componentName - The component name in dashed format
 * @param {string[]} props - Array of component properties
 * @param {string[]} allSlots - Array of slot names
 * @param {object} metaData - Metadata containing ignore properties
 * @returns {string} The Web Component template markup
 */
const getWCTemplate = (componentName, props, allSlots, metaData) =>
	`
{requiresWebComponent && (
	<db-${componentName}
		data-connect={connectId}
		${props
			.filter(
				(prop) =>
					!isEvent(prop) && // Exclude event handlers
					(!metaData.ignoreProperties ||
						!metaData.ignoreProperties.includes(prop)) // Exclude ignored properties
			)
			.map((prop) => `${toDashedLowerCase(prop)}={${prop}}`) // Convert props to attributes
			.join('\n		')}
		{...rest}
	>
	${allSlots.map((slotName) => `<slot name="${slotName}" slot="${slotName}" />`).join('\n')}
		<slot />
	</db-${componentName}>
)}`;

/**
 * Main function to generate the complete Astro component template
 * @param {import('@builder.io/mitosis').MitosisComponent} json - The Mitosis component JSON
 * @returns {string} The complete Astro component template
 */
const getAstroTemplate = (json) => {
	// ========================================================================
	// Extract component data
	// ========================================================================
	const { children, propsTypeRef, imports, state, refs, meta } = json;
	const allSlots = findAllSlots(children);
	const metaData = meta?.useMetadata?.['astro'] ?? {};

	// ========================================================================
	// Process props - filter out special props and slots
	// ========================================================================
	let props;
	if (json.props) {
		props = Object.keys(json.props).filter(
			(prop) =>
				prop !== 'children' && // Exclude children prop
				prop !== 'class' && // Exclude class prop
				!allSlots.includes(prop) // Exclude slot props
		);
	} else {
		props = [];
	}

	// ========================================================================
	// Process imports - ensure uuid is imported and convert paths
	// ========================================================================
	let foundUtils = false;
	imports.forEach((imp) => {
		if (imp.path === '../../utils') {
			imp.imports['uuid'] = 'uuid'; // Ensure uuid is imported
			foundUtils = true;
		}
	});

	if (!foundUtils) {
		const relativeUtils =
			json.pluginData.path.replaceAll('\\', '/').split('/').length - 2;
		const importPath =
			Array.from({ length: relativeUtils })
				.map(() => '..')
				.join('/') + '/utils';
		imports.push({
			imports: {
				uuid: 'uuid'
			},
			path: importPath
		});
	}

	const importsString = imports
		.map(({ imports: imps, path }) => {
			if (path.endsWith('.lite')) {
				// Convert .lite files to .astro imports
				return `import ${Object.keys(imps)[0]} from '${path.replace('.lite', '.astro')}';`;
			} else {
				// Standard named imports
				return `import { ${Object.entries(imps)
					.map(([key, value]) => {
						if (key === value) {
							return key;
						} else {
							return `${value} as ${key}`;
						}
					})
					.join(', ')} } from '${path}';`;
			}
		})
		.join('\n');

	// ========================================================================
	// Determine if component requires JavaScript
	// ========================================================================
	const requiresWebComponent =
		json.hooks.onMount.length > 0 ||
		(json.hooks.onUpdate ? json.hooks.onUpdate?.length > 0 : false);

	// ========================================================================
	// Generate TypeScript Props interface
	// ========================================================================

	const requiresWebComponentPropertyString = `
		/**
	 * Removes the margin of the divider.
	 */
	 requiresWebComponent?: boolean;
	 `;

	const propsInterface = props.length
		? `interface Props {
		${props.map((prop) => `${prop}?: ${propsTypeRef ? `${propsTypeRef}["${prop}"]` : 'any'};`).join('\n	')}
		${requiresWebComponentPropertyString}
		[key: string]: any; // Allow everything else
		}`
		: `
		interface Props { ${requiresWebComponentPropertyString}
		[key: string]: any; // Allow everything else
		}
`;

	// ========================================================================
	// Generate state object
	// ========================================================================
	let stateType = 'any';
	if (
		state &&
		Object.keys(state).length > 0 &&
		Object.values(state)[0].typeParameter
	) {
		stateType = Object.values(state)[0].typeParameter.split('[')[0];
	}
	const stateString = // TODO: Add proper TS typing
		state
			? `const state: ${stateType} = {${Object.entries(state)
					.map(([key, { code, type }]) => {
						if (type === 'function') {
							return ''; // Skip functions
						}
						// Generate property or direct code
						return `${type === 'property' ? `${key}: ` : ''}${code.replaceAll('props.', '')}`;
					})
					.join(',\n')}}`
			: '';

	// ========================================================================
	// Generate refs declarations
	// ========================================================================
	const refsString = Object.entries(refs)
		.map(
			([key, { argument, typeParameter }]) =>
				`const ${key}: ${typeParameter} = ${argument};`
		)
		.join('\n');

	// ========================================================================
	// Generate component identifiers
	// ========================================================================
	const uuidString = '${uuid()}';
	const lowerCaseComponentName = toDashedLowerCase(
		json.name.startsWith('DB')
			? json.name.slice(2, json.name.length)
			: json.name // Remove 'DB' prefix
	);

	// ========================================================================
	// Return complete Astro template
	// ========================================================================
	return `---
// This file is auto-generated. Do not edit it directly.
${requiresWebComponent ? '// !!! This component requires JavaScript to run with all functions you should enable the requiresWebComponent property. !!!' : ''}

${importsString}
${propsInterface}

const { ${props.join(', ')}${props.length ? ', ' : ''}requiresWebComponent = ${requiresWebComponent}, ...rest } = Astro.props;

${refsString}
${stateString}


const connectId = \`connect-${uuidString}\`;
---
${getStyle(lowerCaseComponentName)}
${getWCTemplate(lowerCaseComponentName, props, allSlots, metaData)}
${getChildren(json, json.children, props, true)}`;
};

// ============================================================================
// Exports
// ============================================================================
module.exports = { getAstroTemplate, toDashedLowerCase };
