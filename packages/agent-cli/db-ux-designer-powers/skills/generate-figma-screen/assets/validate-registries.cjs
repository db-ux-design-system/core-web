#!/usr/bin/env node
/* =============================================================================
 * validate-registries.cjs — the ONE gate for every page-type registry.
 * -----------------------------------------------------------------------------
 * WHY THIS EXISTS
 *   The page-type catalogs used to be five files per type (blocks, block-patterns,
 *   sections, template, examples) with a `schema` string that nothing enforced.
 *   The result was measurable drift: three of six types never had a `sections`
 *   key at all (they invented `regions`/`steps`/`kinds`), template.json grew a
 *   different set of top-level keys per type, patterns were unreachable from
 *   sections, and a `gridLayout: "20-20-20-20-20"` — a layout the live Grid has
 *   never had — shipped into the dashboard catalog because validation existed but
 *   was optional.
 *
 *   So: THREE files per page type, ONE enforced shape, and this validator wired
 *   into CI. A registry that does not satisfy the schema below is a build error,
 *   not a review comment.
 *
 * THE SHAPE (all three files required, no others)
 *   blocks.json    { _meta, blocks:   { "<pageType>.<id>": { source|origin, purpose, plan } } }
 *   patterns.json  { _meta, patterns: { "<pageType>.<id>": { source|origin, purpose, level,
 *                                        intent, whenToUse, cardinality, alternatives?, plan } } }
 *   template.json  { _meta, order: [...], slots: {...}, rules: [...],
 *                    contentWidth?, delivery?, spacing?, pageTypeSpecific? }
 *
 *   `sections.json` is GONE: its only unique payload (`intent` / `whenToUse` /
 *   `cardinality` / `alternatives`) now lives on the pattern it pointed at, which
 *   removes the entire "pattern unreachable from sections" error class by
 *   construction. `examples.json` is GONE: it was documented as a density
 *   reference only, was repeatedly misused as a skeleton, and is replaceable by a
 *   screenshot of the source node.
 *
 * REACHABILITY (what replaces the old orphan check)
 *   template.slots[*].allow -> patterns -> ($ref) patterns/blocks -> ($ref) blocks
 *   Every pattern and every block must be reachable from a template slot. Dead
 *   fragments are an error, because an agent cannot select them.
 *
 * USAGE
 *   node validate-registries.cjs                      # every page type
 *   node validate-registries.cjs --page-type dashboard
 *   node validate-registries.cjs --json
 * Exit code 1 = a registry violates the contract. Exit code 2 = bad invocation.
 * ========================================================================== */
const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const REQUIRED_FILES = ['blocks.json', 'patterns.json', 'template.json'];
const REGISTRY_ROOT = path.resolve(__dirname, 'registries');
const SCHEMAS = {
	'blocks.json': 'db-ux/blocks/v2',
	'patterns.json': 'db-ux/patterns/v1',
	'template.json': 'db-ux/template/v2'
};
const LEVELS = new Set(['section', 'module']);
const CARDINALITIES = new Set(['1', '0..1', '1..n', '0..n']);
const POSITIONS = new Set(['first', 'middle', 'last', 'any']);
const DELIVERIES = new Set(['page', 'module', 'overlay']);
const TEMPLATE_KEYS = new Set([
	'_meta',
	'order',
	'slots',
	'rules',
	'contentWidth',
	'delivery',
	'spacing',
	'pageTypeSpecific'
]);
const SLOT_KEYS = new Set([
	'required',
	'position',
	'repeatable',
	'minSections',
	'maxSections',
	'allow',
	'note'
]);
const PATTERN_KEYS = new Set([
	'source',
	'origin',
	'purpose',
	'level',
	'intent',
	'whenToUse',
	'cardinality',
	'alternatives',
	'plan'
]);
const BLOCK_KEYS = new Set(['source', 'origin', 'purpose', 'plan']);

/* Plan-node primitives the runtime implements directly (everything else must
 * resolve as a component in components.json / conceptComponents). */
const BASE_NODE_TYPES = new Set([
	'Body',
	'Card',
	'ChartBar',
	'ContainerHorizontal',
	'ContainerVertical',
	'Divider',
	'Grid',
	'Header',
	'Heading',
	'Icon',
	'Image',
	'ProgressBar',
	'Section',
	'Tabs'
]);
/* Slot count per Layout variant of the Core Lab 🧪 Grid
 * (conceptComponents.Grid.axes.Layout in components.json). */
const GRID_SLOTS = {
	'(Def) 33-33-33': 3,
	100: 1,
	'50-50': 2,
	'25-25-25-25': 4,
	'33-66': 2,
	'66-33': 2,
	'25-75': 2,
	'75-25': 2,
	'320-auto': 2
};
/* `src` stays in the key list on purpose: it is recognized, then rejected with an explanation,
 * instead of producing a confusing "unsupported field" error. */
const IMAGE_KEYS = new Set([
	'type',
	'label',
	'ratio',
	'imageWidth',
	'src',
	'imageHash',
	'scaleMode',
	'radius',
	'fillWidth',
	'hugWidth',
	'fillHeight',
	'placeholderFill'
]);

const isObject = (value) =>
	Boolean(value) && typeof value === 'object' && !Array.isArray(value);
const isPlaceholder = (value) =>
	typeof value === 'string' && /^<.*>$/v.test(value.trim());
const isFilledString = (value) =>
	typeof value === 'string' && value.trim().length > 0;

function fail(message, exitCode = 2) {
	throw Object.assign(new Error(message), { exitCode });
}

function listPageTypes() {
	return fs
		.readdirSync(REGISTRY_ROOT, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort((left, right) => left.localeCompare(right));
}

function loadGlobals(errors) {
	const read = (name) => {
		try {
			return JSON.parse(
				fs.readFileSync(path.join(REGISTRY_ROOT, name), 'utf8')
			);
		} catch (error) {
			errors.push(`global:${name}: ${error.message}`);
			return {};
		}
	};

	const components = read('components.json');
	const tokens = read('tokens.json');
	const icons = read('icons.json');
	const concept = Object.keys(components.conceptComponents || {}).filter(
		(name) => !name.startsWith('_')
	);
	/* Variant axes per library component, mirroring what the runtime's resolveKey() does:
	 * a plan's `props` must match the axes of at least one NON-DEPRECATED figmaSet, otherwise
	 * the render stops with "No <component> variant matches props". Catching that here turns a
	 * render-time failure into a validation error. */
	const componentVariants = {};
	for (const [name, def] of Object.entries(components.components || {})) {
		const variants = Object.values(def.figmaSets || {})
			.filter((set) => !set.deprecated)
			.map((set) => set.axes || {});
		if (variants.length > 0) componentVariants[name] = variants;
	}

	return {
		componentVariants,
		types: new Set([
			...BASE_NODE_TYPES,
			...Object.keys(components.components || {}),
			...concept
		]),
		tokens: new Set([
			...Object.keys(tokens.variables || {}),
			...Object.keys(tokens.textStyles || {})
		]),
		icons: new Set(Object.keys(icons.icons || {}))
	};
}

/* -----------------------------------------------------------------------------
 * NODE-LEVEL CONTRACTS — every plan node in a block/pattern must satisfy these.
 * These are the checks that would have rejected the legacy five-column grid and
 * the checkerboard-placeholder images.
 * -------------------------------------------------------------------------- */
function validateRadius(node, location, globals, errors) {
	if (node.radius === undefined) return;
	const value = node.radius;
	if (
		typeof value !== 'string' ||
		(value !== 'none' && !value.startsWith('radius.'))
	)
		errors.push(
			`${location}.radius: must be "none" or a registered radius token.`
		);
	else if (value !== 'none' && !globals.tokens.has(value))
		errors.push(`${location}.radius: unknown token "${value}".`);
}

function validateImage(node, location, globals, errors) {
	for (const key of Object.keys(node))
		if (!IMAGE_KEYS.has(key))
			errors.push(`${location}: unsupported Image field "${key}".`);
	// An Image in a registry fragment is EMPTY BY CONTRACT: a generated layout ships an empty
	// Figma image on Fill and the designer drops the real asset in. A concrete asset is allowed
	// only when the user explicitly provided one that already lives in the file (`imageHash`).
	// An external `src` is rejected: figma.createImageAsync does not exist in the use_figma
	// sandbox, so a URL can never be loaded — it would silently render as an empty image anyway.
	if (node.src !== undefined)
		errors.push(
			`${location}.src: not supported — figma.createImageAsync does not exist in the use_figma sandbox. Leave the Image empty, or reference an asset already in the file via "imageHash".`
		);
	if (
		node.imageHash !== undefined &&
		(!isFilledString(node.imageHash) || isPlaceholder(node.imageHash))
	)
		errors.push(
			`${location}.imageHash: must be a concrete non-empty Figma image hash of an asset in the target file.`
		);
	// The empty image sits on a token-bound surface so it is visible as a placeholder.
	if (
		node.placeholderFill !== undefined &&
		!globals.tokens.has(node.placeholderFill)
	)
		errors.push(
			`${location}.placeholderFill: unknown token "${node.placeholderFill}".`
		);
	if (
		node.ratio !== undefined &&
		!['1:1', '3:4', '16:9'].includes(node.ratio)
	)
		errors.push(`${location}.ratio: unsupported value "${node.ratio}".`);
	if (
		node.scaleMode !== undefined &&
		!['FILL', 'FIT', 'TILE'].includes(node.scaleMode)
	)
		errors.push(
			`${location}.scaleMode: unsupported value "${node.scaleMode}".`
		);
	if (
		node.imageWidth !== undefined &&
		(!Number.isFinite(node.imageWidth) || node.imageWidth <= 0)
	)
		errors.push(
			`${location}.imageWidth: must be a positive finite number.`
		);
	validateRadius(node, location, globals, errors);
}

function validateGrid(node, location, errors) {
	const children = Array.isArray(node.children) ? node.children : [];
	if (node.gridLayout === undefined) {
		if (children.length > 4)
			errors.push(
				`${location}: a Grid with ${children.length} children needs an explicit supported layout, or a ContainerHorizontal of fill-width columns.`
			);
		return;
	}

	if (!Object.hasOwn(GRID_SLOTS, node.gridLayout)) {
		errors.push(
			`${location}.gridLayout: unsupported layout "${node.gridLayout}". The live Grid offers: ${Object.keys(GRID_SLOTS).join(', ')}.`
		);
		return;
	}

	const slots = GRID_SLOTS[node.gridLayout];
	if (children.length > slots)
		errors.push(
			`${location}: ${children.length} children exceed the ${slots} slot(s) of "${node.gridLayout}".`
		);
}

function validateChartBar(node, location, globals, errors) {
	const allowed = new Set([
		'type',
		'label',
		'width',
		'height',
		'fillWidth',
		'fills',
		'radius',
		'opacity'
	]);
	for (const key of Object.keys(node))
		if (!allowed.has(key))
			errors.push(`${location}: unsupported ChartBar field "${key}".`);
	if (!Number.isFinite(node.height) || node.height <= 0)
		errors.push(`${location}.height: must be a positive finite number.`);
	const hasWidth = Number.isFinite(node.width) && node.width > 0;
	if (hasWidth === (node.fillWidth === true))
		errors.push(
			`${location}: ChartBar requires exactly one positive width OR fillWidth: true.`
		);
	if (!isFilledString(node.fills) || !globals.tokens.has(node.fills))
		errors.push(`${location}.fills: must be a registered fill token.`);
	if (
		node.opacity !== undefined &&
		(!Number.isFinite(node.opacity) ||
			node.opacity <= 0 ||
			node.opacity > 1)
	)
		errors.push(
			`${location}.opacity: must be greater than 0 and at most 1.`
		);
	validateRadius(node, location, globals, errors);
}

/* ProgressBar is the real Core Lab component, which ships only three discrete steps. Track
 * colour, height and radius belong to the component — a plan that set them was drawing its own
 * bar, which is exactly the hand-rolled geometry we removed. */
const PROGRESS_STEPS = new Set([25, 50, 75]);
function validateProgressBar(node, location, errors) {
	const allowed = new Set(['type', 'label', 'value', 'semantic']);
	for (const key of Object.keys(node))
		if (!allowed.has(key))
			errors.push(
				`${location}: unsupported ProgressBar field "${key}" — the component owns its track, height and radius.`
			);
	if (!PROGRESS_STEPS.has(node.value))
		errors.push(
			`${location}.value: must be 25, 50 or 75 — the DB progress component ships no other step.`
		);
}

function validatePagination(node, location, errors) {
	const allowed = new Set(['type', 'label', 'size', 'align']);
	for (const key of Object.keys(node))
		if (!allowed.has(key))
			errors.push(`${location}: unsupported Pagination field "${key}".`);
	if (node.size !== undefined && !['small', 'medium'].includes(node.size))
		errors.push(`${location}.size: must be "small" or "medium".`);
	if (
		node.align !== undefined &&
		!['start', 'center', 'end'].includes(node.align)
	)
		errors.push(`${location}.align: must be "start", "center" or "end".`);
}

/* A plan's `props` selects a figmaSet by axis values. Reject a combination no set offers —
 * the runtime would stop at render time with "No <component> variant matches props". */
function validateComponentProps(node, location, globals, errors) {
	const variants = globals.componentVariants[node.type];
	if (!variants || node.props === undefined) return;
	if (!isObject(node.props)) {
		errors.push(`${location}.props: must be an object of variant axes.`);
		return;
	}

	const keys = Object.keys(node.props);
	if (keys.length === 0) return;
	const known = new Set(variants.flatMap((axes) => Object.keys(axes)));
	for (const key of keys)
		if (!known.has(key))
			errors.push(
				`${location}.props: "${node.type}" has no axis "${key}". Available: ${[...known].join(', ') || '(none)'}.`
			);
	const matches = variants.some((axes) =>
		keys.every((key) => String(axes[key]) === String(node.props[key]))
	);
	if (!matches)
		errors.push(
			`${location}.props: no "${node.type}" variant matches ${JSON.stringify(node.props)}. Registered combinations: ${variants.map((axes) => JSON.stringify(axes)).join(' | ')}.`
		);
}

function validateNode(node, location, globals, errors) {
	if (!isFilledString(node.type)) {
		errors.push(`${location}.type: must be a non-empty string.`);
		return;
	}

	if (!globals.types.has(node.type))
		errors.push(
			`${location}.type: unknown component or primitive "${node.type}".`
		);
	validateComponentProps(node, location, globals, errors);
	// Node types with their own capability rules. Everything else is covered by the generic
	// prop/token/icon checks below.
	const TYPE_VALIDATORS = {
		Image: () => validateImage(node, location, globals, errors),
		Grid: () => validateGrid(node, location, errors),
		ChartBar: () => validateChartBar(node, location, globals, errors),
		ProgressBar: () => validateProgressBar(node, location, errors),
		Pagination: () => validatePagination(node, location, errors)
	};
	TYPE_VALIDATORS[node.type]?.();
	if (
		typeof node.fills === 'string' &&
		!isPlaceholder(node.fills) &&
		!globals.tokens.has(node.fills)
	)
		errors.push(`${location}.fills: unknown token "${node.fills}".`);
	const iconFields = [
		['name', node.type === 'Icon' ? node.name : undefined],
		['iconLeading', node.iconLeading],
		['iconTrailing', node.iconTrailing]
	];
	/* An icon missing from icons.json is a REGISTRY GAP, not a reason to drop the element.
	 * icons.json is a hand-curated subset of the DB Theme Icons library, so this error used to
	 * push authors into omitting the icon — and with it the thing the icon encoded (that is how
	 * the process stepper lost its active-step marker: the catalog uses `pen`, which was not
	 * registered). Name the resolution path in the message so extending the registry is the
	 * obvious move: resolve the key once, add it here, rebuild. */
	for (const [field, iconName] of iconFields)
		if (
			iconName &&
			!isPlaceholder(iconName) &&
			!globals.icons.has(iconName)
		)
			errors.push(
				`${location}.${field}: icon "${iconName}" is not in icons.json. Do NOT drop the icon — resolve its key (search_design_system for "${String(iconName).replaceAll('_', '-')}", library "DB UX DS v3 - DB Theme Icons", take the component_set key), add it to registries/icons.json, then rebuild the runtime. Only if the glyph genuinely does not exist in the library, pick a registered alternative.`
			);
}

/* -----------------------------------------------------------------------------
 * FILE + ENTRY SHAPE
 * -------------------------------------------------------------------------- */
function readCatalog(pageType, errors) {
	const directory = path.join(REGISTRY_ROOT, pageType);
	const entries = fs.readdirSync(directory, { withFileTypes: true });
	const names = entries
		.filter((entry) => entry.isFile())
		.map((entry) => entry.name);
	for (const missing of REQUIRED_FILES.filter((n) => !names.includes(n)))
		errors.push(`${missing}: missing (the three-file shape is mandatory).`);
	for (const extra of names.filter((n) => !REQUIRED_FILES.includes(n)))
		errors.push(
			`${extra}: unexpected file. A page-type catalog is exactly ${REQUIRED_FILES.join(', ')}.`
		);
	const data = {};
	for (const name of REQUIRED_FILES) {
		const file = path.join(directory, name);
		if (!fs.existsSync(file)) continue;
		try {
			data[name] = JSON.parse(fs.readFileSync(file, 'utf8'));
		} catch (error) {
			errors.push(`${name}: invalid JSON (${error.message}).`);
		}
	}

	return data;
}

function validateMeta(data, pageType, errors) {
	for (const name of REQUIRED_FILES) {
		const file = data[name];
		if (!isObject(file)) continue;
		const meta = file._meta;
		if (!isObject(meta)) {
			errors.push(`${name}._meta: required object is missing.`);
			continue;
		}

		if (meta.schema !== SCHEMAS[name])
			errors.push(
				`${name}._meta.schema: expected "${SCHEMAS[name]}", got "${meta.schema || '<missing>'}".`
			);
		if (meta.pageType !== pageType)
			errors.push(
				`${name}._meta.pageType: expected "${pageType}", got "${meta.pageType || '<missing>'}".`
			);
		if (!isFilledString(meta.source))
			errors.push(
				`${name}._meta.source: required — name the Figma file and catalog node this was captured from.`
			);
	}
}

function validateEntries(kind, entries, allowedKeys, pageType, errors) {
	const prefix = `${pageType}.`;
	const file = kind === 'block' ? 'blocks.json' : 'patterns.json';
	for (const [id, entry] of Object.entries(entries)) {
		const at = `${file}.${kind}s.${id}`;
		if (!id.startsWith(prefix))
			errors.push(`${at}: id must use the "${prefix}" namespace.`);
		if (!isObject(entry)) {
			errors.push(`${at}: must be an object.`);
			continue;
		}

		for (const key of Object.keys(entry))
			if (!allowedKeys.has(key))
				errors.push(`${at}: unsupported field "${key}".`);
		if (!isObject(entry.plan)) errors.push(`${at}.plan: required object.`);
		if (!isFilledString(entry.source) && !isFilledString(entry.origin))
			errors.push(
				`${at}: requires "source" (Figma node) or "origin" provenance.`
			);
		if (!isFilledString(entry.purpose))
			errors.push(`${at}.purpose: required one-line description.`);
	}
}

/* The selection metadata that used to live in sections.json. Required on every
 * pattern, because it is the only thing an agent has to choose between two
 * patterns whose plans look superficially similar. */
function validatePatternSelection(patterns, errors) {
	for (const [id, entry] of Object.entries(patterns)) {
		if (!isObject(entry)) continue;
		const at = `patterns.json.patterns.${id}`;
		if (!LEVELS.has(entry.level))
			errors.push(
				`${at}.level: must be "section" (brings its own Section wrapper) or "module" (embeddable).`
			);
		if (!isFilledString(entry.intent))
			errors.push(`${at}.intent: required — what this module is for.`);
		if (!isFilledString(entry.whenToUse))
			errors.push(
				`${at}.whenToUse: required — the content shape that selects this pattern.`
			);
		if (!CARDINALITIES.has(entry.cardinality))
			errors.push(
				`${at}.cardinality: must be one of ${[...CARDINALITIES].join(', ')}.`
			);
		if (entry.alternatives !== undefined) {
			if (Array.isArray(entry.alternatives)) {
				for (const alternative of entry.alternatives)
					if (!Object.hasOwn(patterns, alternative))
						errors.push(
							`${at}.alternatives: unknown pattern "${alternative}".`
						);
			} else {
				errors.push(
					`${at}.alternatives: must be an array of pattern ids.`
				);
			}
		}
	}
}

function validateTemplate(template, patterns, errors) {
	if (!isObject(template)) return;
	for (const key of Object.keys(template))
		if (!TEMPLATE_KEYS.has(key))
			errors.push(
				`template.json: unsupported top-level key "${key}". Page-type specifics belong under "pageTypeSpecific".`
			);
	if (template.delivery !== undefined && !DELIVERIES.has(template.delivery))
		errors.push(
			`template.json.delivery: must be one of ${[...DELIVERIES].join(', ')}.`
		);
	if (!Array.isArray(template.rules) || template.rules.length === 0)
		errors.push(
			'template.json.rules: required non-empty array of constraints.'
		);
	const slots = isObject(template.slots) ? template.slots : null;
	if (slots === null) {
		errors.push('template.json.slots: required object.');
		return;
	}

	if (Array.isArray(template.order)) {
		for (const name of template.order)
			if (!Object.hasOwn(slots, name))
				errors.push(`template.json.order: unknown slot "${name}".`);
		for (const name of Object.keys(slots))
			if (!template.order.includes(name))
				errors.push(`template.json.slots.${name}: missing from order.`);
	} else {
		errors.push('template.json.order: required array of slot names.');
	}

	for (const [name, slot] of Object.entries(slots)) {
		const at = `template.json.slots.${name}`;
		if (!isObject(slot)) {
			errors.push(`${at}: must be an object.`);
			continue;
		}

		for (const key of Object.keys(slot))
			if (!SLOT_KEYS.has(key))
				errors.push(`${at}: unsupported field "${key}".`);
		if (typeof slot.required !== 'boolean')
			errors.push(`${at}.required: must be a boolean.`);
		if (!POSITIONS.has(slot.position))
			errors.push(
				`${at}.position: must be one of ${[...POSITIONS].join(', ')}.`
			);
		if (!Array.isArray(slot.allow) || slot.allow.length === 0) {
			errors.push(
				`${at}.allow: required non-empty array of pattern ids.`
			);
			continue;
		}

		for (const id of slot.allow)
			if (!Object.hasOwn(patterns, id))
				errors.push(`${at}.allow: unknown pattern "${id}".`);
		if (slot.repeatable === true) {
			for (const field of ['minSections', 'maxSections'])
				if (
					slot[field] !== undefined &&
					(!Number.isInteger(slot[field]) || slot[field] < 1)
				)
					errors.push(`${at}.${field}: must be a positive integer.`);
			if (
				Number.isInteger(slot.minSections) &&
				Number.isInteger(slot.maxSections) &&
				slot.minSections > slot.maxSections
			)
				errors.push(`${at}: minSections exceeds maxSections.`);
		}
	}
}

/* -----------------------------------------------------------------------------
 * REFERENCE GRAPH — $ref resolution, cycles, and reachability from the template.
 * A pattern may $ref patterns and blocks; a block may only $ref blocks. Cross-
 * page-type refs are allowed (a shared block), and are resolved by namespace.
 * -------------------------------------------------------------------------- */
function buildResolver(pageType, blocks, patterns) {
	const cache = new Map();
	const externals = (namespace) => {
		if (namespace === pageType) return { blocks, patterns };
		if (cache.has(namespace)) return cache.get(namespace);
		const directory = path.join(REGISTRY_ROOT, namespace);
		let maps = { blocks: {}, patterns: {} };
		if (fs.existsSync(directory)) {
			const read = (name, key) => {
				try {
					return (
						JSON.parse(
							fs.readFileSync(path.join(directory, name), 'utf8')
						)[key] || {}
					);
				} catch {
					return {};
				}
			};

			maps = {
				blocks: read('blocks.json', 'blocks'),
				patterns: read('patterns.json', 'patterns')
			};
		}

		cache.set(namespace, maps);
		return maps;
	};

	return (id, allowPattern) => {
		if (!isFilledString(id)) return null;
		const namespace = id.split('.', 1)[0];
		const maps = externals(namespace);
		if (allowPattern && Object.hasOwn(maps.patterns, id))
			return { kind: 'pattern', local: namespace === pageType };
		if (Object.hasOwn(maps.blocks, id))
			return { kind: 'block', local: namespace === pageType };
		return null;
	};
}

function walkPlan(value, location, context) {
	const { owner, graph, globals, errors, resolve, allowPatternRefs } =
		context;
	if (Array.isArray(value)) {
		for (const [index, item] of value.entries())
			walkPlan(item, `${location}[${index}]`, context);
		return;
	}

	if (!isObject(value)) return;
	if (Object.hasOwn(value, '$ref')) {
		if (Object.keys(value).length !== 1)
			errors.push(
				`${location}: a $ref object must not carry other fields.`
			);
		const resolved = resolve(value.$ref, allowPatternRefs);
		if (resolved) {
			if (resolved.local && owner)
				graph.get(owner).add(`${resolved.kind}:${value.$ref}`);
		} else {
			errors.push(
				`${location}: unresolved $ref "${value.$ref}"${allowPatternRefs ? '' : ' (a block may only reference other blocks)'}.`
			);
		}

		return;
	}

	if (Object.hasOwn(value, 'type'))
		validateNode(value, location, globals, errors);
	for (const [key, child] of Object.entries(value))
		walkPlan(child, `${location}.${key}`, context);
}

function analyzeGraph(template, blocks, patterns, globals, pageType, errors) {
	const graph = new Map();
	const resolve = buildResolver(pageType, blocks, patterns);
	for (const [id, entry] of Object.entries(blocks)) {
		const owner = `block:${id}`;
		graph.set(owner, new Set());
		if (isObject(entry?.plan))
			walkPlan(entry.plan, `blocks.json.blocks.${id}.plan`, {
				owner,
				graph,
				globals,
				errors,
				resolve,
				allowPatternRefs: false
			});
	}

	for (const [id, entry] of Object.entries(patterns)) {
		const owner = `pattern:${id}`;
		graph.set(owner, new Set());
		if (isObject(entry?.plan))
			walkPlan(entry.plan, `patterns.json.patterns.${id}.plan`, {
				owner,
				graph,
				globals,
				errors,
				resolve,
				allowPatternRefs: true
			});
	}

	// Cycles: a pattern that (transitively) references itself never terminates.
	const visiting = new Set();
	const done = new Set();
	const detectCycle = (node, trail) => {
		if (visiting.has(node)) {
			errors.push(`Reference cycle: ${[...trail, node].join(' -> ')}.`);
			return;
		}

		if (done.has(node)) return;
		visiting.add(node);
		for (const next of graph.get(node) || [])
			detectCycle(next, [...trail, node]);
		visiting.delete(node);
		done.add(node);
	};

	for (const node of graph.keys()) detectCycle(node, []);

	// Reachability: template slots are the only roots. A pattern that no slot
	// allows, and that no reachable pattern references, cannot be selected.
	const roots = new Set();
	const slots = isObject(template?.slots) ? template.slots : {};
	for (const slot of Object.values(slots))
		if (Array.isArray(slot?.allow))
			for (const id of slot.allow)
				if (Object.hasOwn(patterns, id)) roots.add(`pattern:${id}`);
	const reachable = new Set();
	const mark = (node) => {
		if (reachable.has(node)) return;
		reachable.add(node);
		for (const next of graph.get(node) || []) mark(next);
	};

	for (const root of roots) mark(root);
	/* A declared alternative of ANY reachable pattern is selectable too — including a pattern
	 * reached through a $ref, not just one a template slot names directly. Run to a fixpoint,
	 * because an alternative can itself pull in further patterns and blocks. */
	let grew = true;
	while (grew) {
		grew = false;
		// The spread is NOT redundant: mark() adds to `reachable` inside this loop, so iterating
		// the live Set would mutate it while walking it. This is a snapshot per fixpoint round.
		// eslint-disable-next-line unicorn/no-useless-spread
		for (const node of [...reachable]) {
			if (!node.startsWith('pattern:')) continue;
			const id = node.slice('pattern:'.length);
			for (const alternative of patterns[id]?.alternatives || []) {
				const key = `pattern:${alternative}`;
				if (
					Object.hasOwn(patterns, alternative) &&
					!reachable.has(key)
				) {
					mark(key);
					grew = true;
				}
			}
		}
	}

	for (const node of graph.keys())
		if (!reachable.has(node)) {
			const [kind, id] = node.split(/:(.*)/v);
			errors.push(
				`${kind} "${id}" is unreachable: no template slot allows it and no reachable pattern references it.`
			);
		}
}

function validatePageType(pageType) {
	const errors = [];
	const globals = loadGlobals(errors);
	const data = readCatalog(pageType, errors);
	validateMeta(data, pageType, errors);
	const blocks = isObject(data['blocks.json']?.blocks)
		? data['blocks.json'].blocks
		: {};
	const patterns = isObject(data['patterns.json']?.patterns)
		? data['patterns.json'].patterns
		: {};
	if (data['blocks.json'] && !isObject(data['blocks.json'].blocks))
		errors.push('blocks.json.blocks: required object.');
	if (data['patterns.json'] && !isObject(data['patterns.json'].patterns))
		errors.push('patterns.json.patterns: required object.');
	if (Object.keys(patterns).length === 0)
		errors.push('patterns.json.patterns: must not be empty.');
	validateEntries('block', blocks, BLOCK_KEYS, pageType, errors);
	validateEntries('pattern', patterns, PATTERN_KEYS, pageType, errors);
	validatePatternSelection(patterns, errors);
	validateTemplate(data['template.json'], patterns, errors);
	analyzeGraph(
		data['template.json'],
		blocks,
		patterns,
		globals,
		pageType,
		errors
	);
	return {
		pageType,
		ok: errors.length === 0,
		counts: {
			blocks: Object.keys(blocks).length,
			patterns: Object.keys(patterns).length,
			slots: Object.keys(data['template.json']?.slots || {}).length
		},
		errors
	};
}

function main() {
	const argv = process.argv.slice(2);
	let only = null;
	let json = false;
	for (let index = 0; index < argv.length; index++) {
		const flag = argv[index];
		if (flag === '--json') json = true;
		else if (flag === '--page-type') {
			only = argv[++index];
			if (!only || only.startsWith('--'))
				fail('Missing value for --page-type.');
		} else {
			fail(
				`Unknown option "${flag}". Usage: validate-registries.cjs [--page-type <name>] [--json]`
			);
		}
	}

	const pageTypes = only ? [only] : listPageTypes();
	if (only && !fs.existsSync(path.join(REGISTRY_ROOT, only)))
		fail(`Unknown page type "${only}".`);
	const reports = pageTypes.map((pageType) => validatePageType(pageType));
	const ok = reports.every((report) => report.ok);
	if (json) {
		process.stdout.write(`${JSON.stringify({ ok, reports }, null, 2)}\n`);
	} else {
		const lines = [];
		for (const report of reports) {
			const { blocks, patterns, slots } = report.counts;
			lines.push(
				`${report.ok ? 'PASS' : 'FAIL'}  ${report.pageType.padEnd(12)} ${patterns} patterns, ${blocks} blocks, ${slots} slots`
			);
			for (const error of report.errors) lines.push(`        ${error}`);
		}

		lines.push(
			ok
				? `\nAll ${reports.length} page-type registries satisfy the contract.`
				: `\n${reports.filter((r) => !r.ok).length} of ${reports.length} page-type registries FAILED.`
		);
		process.stdout.write(`${lines.join('\n')}\n`);
	}

	if (!ok) process.exitCode = 1;
}

if (require.main === module) {
	try {
		main();
	} catch (error) {
		process.stderr.write(`ERROR: ${error.message}\n`);
		process.exitCode = error.exitCode || 2;
	}
}

module.exports = {
	validatePageType,
	listPageTypes,
	GRID_SLOTS,
	REQUIRED_FILES
};
