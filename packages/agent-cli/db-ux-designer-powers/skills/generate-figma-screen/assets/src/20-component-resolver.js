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

/** Resolve a local layout primitive PORTABLY: id hint first (instant in the source file),
 *  then match a LOCAL COMPONENT_SET/COMPONENT by normalized NAME (works in any file). */
const _localCache = {};
function findLocalComponent(name) {
	if (_localCache[name]) return _localCache[name];
	const spec = LOCAL[name];
	if (!spec) stop(`Local primitive "${name}" unknown.`);

	// 1) Fast path: the original file's node id.
	if (spec.idHint) {
		for (const page of figma.root.children) {
			const byId = safe(
				() => page.findOne((n) => n.id === spec.idHint),
				null
			);
			if (byId) {
				_localCache[name] = byId;
				return byId;
			}
		}
	}

	// 2) Portable path: match a local component set/component by name.
	const candidates = [];
	for (const page of figma.root.children) {
		const found = safe(
			() =>
				page.findAll(
					(n) =>
						(n.type === 'COMPONENT_SET' ||
							n.type === 'COMPONENT') &&
						normName(n.name).includes(spec.match)
				),
			[]
		);
		for (const f of found) candidates.push(f);
	}
	if (!candidates.length)
		stop(
			`Local primitive "${name}" not found (id ${spec.idHint} or name ~"${spec.match}"). ` +
				`Ensure the DB UX local layout primitives exist in this file.`
		);

	// Prefer a COMPONENT_SET, then a local (non-remote) one, then the shortest name.
	candidates.sort((a, b) => {
		const set = (b.type === 'COMPONENT_SET') - (a.type === 'COMPONENT_SET');
		if (set) return set;
		const remote =
			(safe(() => a.remote, false) ? 1 : 0) -
			(safe(() => b.remote, false) ? 1 : 0);
		if (remote) return remote;
		return normName(a.name).length - normName(b.name).length;
	});
	_localCache[name] = candidates[0];
	return candidates[0];
}

/** Create a local layout primitive; optionally pick a variant by axis substrings. */
function createLocalInstance(name, variantMatch = {}) {
	const set = findLocalComponent(name);
	const children = set.type === 'COMPONENT_SET' ? set.children : [set];
	const entries = Object.entries(variantMatch);
	let variant = entries.length
		? (children.find((c) =>
				entries.every(([k, v]) => c.name.includes(`${k}=${v}`))
			) ?? children[0])
		: set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? children[0])
			: set;
	return variant.createInstance();
}

/* -----------------------------------------------------------------------------
 * FONTS + TEXT
 * -------------------------------------------------------------------------- */
