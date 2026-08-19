function resolveKey(componentName, props = {}) {
	const entry = COMPONENTS[componentName];
	if (!entry)
		stop(
			`Component "${componentName}" is not in the runtime component map.`
		);
	const keys = Object.keys(props);
	const match =
		keys.length === 0
			? entry.variants[0]
			: entry.variants.find((vv) =>
					keys.every((k) => String(vv.axes[k]) === String(props[k]))
				);
	if (!match)
		stop(
			`No ${componentName} variant matches props ${JSON.stringify(props)}. Report as missing-variant; never approximate.`
		);
	return match.key;
}

const _setCache = {};
async function importSet(key) {
	if (_setCache[key]) return _setCache[key];
	const set = await figma.importComponentSetByKeyAsync(key);
	_setCache[key] = set;
	return set;
}

async function createLibraryInstance(componentName, props = {}) {
	const set = await importSet(resolveKey(componentName, props));
	const variant =
		set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? set.children[0])
			: set;
	return variant.createInstance();
}

/** Create a Core Lab (Concept) instance — typography (Heading/Text) or a layout primitive
 *  (Grid/Container). Resolved ONLY from the published Core Lab LIBRARY via its registry set
 *  key; there is deliberately no local-component fallback, so a look-alike component sitting
 *  in the working file can never be picked up instead of the design-system component.
 *  `variantMatch` selects a variant by exact axis labels, e.g. { Layout: "50-50", Gap: "sm" }. */
async function createConceptInstance(name, variantMatch = {}) {
	const key = CONCEPT_KEYS[name];
	if (!key)
		stop(
			`Concept component "${name}" is not in the runtime concept map. Available: ${Object.keys(
				CONCEPT_KEYS
			).join(', ')}.`
		);
	const set = await importSet(key);
	const children = set.type === 'COMPONENT_SET' ? set.children : [set];
	const entries = Object.entries(variantMatch);
	const variant = entries.length
		? (children.find((c) =>
				entries.every(([k, v]) => c.name.includes(`${k}=${v}`))
			) ??
			set.defaultVariant ??
			children[0])
		: set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? children[0])
			: set;
	return variant.createInstance();
}

/* -----------------------------------------------------------------------------
 * FONTS + TEXT
 * -------------------------------------------------------------------------- */
