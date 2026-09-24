import { formatRemValue } from '../tokens/format.ts';
import { loadCollection, type TokenMode } from '../tokens/load.ts';

// --- Token collections ---
//
// The generated size/spacing CSS is now driven entirely by the DTCG token
// exports in `generate-css/new`. Each collection folder holds one file per
// Figma mode; this module turns those modes into scoped CSS custom properties.

const COMPONENT_SIZE_COLLECTION = '🎨 Component-Size';
const LAYOUT_COLLECTION = '🌐 Layout';
const DEVICE_COLLECTION = '🌐 Device';
const BASE_SIZE_COLLECTION = '0 - Base Sizes';

// --- Component sizes ---

// Order the component-size modes small -> large so clustering (which groups
// adjacent modes) stays meaningful. MD is the default applied to :root/:host.
const SIZE_ORDER = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
const DEFAULT_SIZE = 'md';

// Compatibility props consumed by the SCSS (see styles/next/_component.scss and
// checkbox.next.scss) that are not 1:1 token roles:
//   --db-component-padding(-nested)   alias of component-padding-inline(-nested)
//   --db-icon-size-name(-nested)      font-weight selector string, "<icon-size>"
//   --db-icon-size(-nested)           rem length of icon-size(-nested)
//   --db-icon-margin-block-start      (content-height - icon-size)/2

type Decl = [prop: string, value: string];

// --- Declaration grouping ---
//
// Within a rule block the custom properties are grouped by their semantic
// prefix and each group gets a `/* <group> */` comment header, so the generated
// CSS stays skimmable. Groups are emitted in this order; a property matches the
// first entry whose prefix it starts with (after the `--db-` prefix), so more
// specific prefixes must come before their broader parents.
const GROUP_ORDER: { label: string; prefixes: string[] }[] = [
	{ label: 'component', prefixes: ['component'] },
	{ label: 'content', prefixes: ['content'] },
	{ label: 'text', prefixes: ['text'] },
	{ label: 'font & line', prefixes: ['font-size', 'line-height'] },
	{ label: 'border', prefixes: ['border'] },
	{ label: 'icon', prefixes: ['icon'] },
	{ label: 'stacked', prefixes: ['stacked'] },
	{ label: 'margin', prefixes: ['margin'] },
	{ label: 'layout', prefixes: ['layout'] },
	{ label: 'device', prefixes: ['device'] },
	{ label: 'base size', prefixes: ['base-size'] }
];

/** The base group index for a `--db-*` property (ignoring nested-ness). */
const baseGroupIndexOf = (prop: string): number => {
	const role = prop.replace(/^--db-/, '');
	const idx = GROUP_ORDER.findIndex(({ prefixes }) =>
		prefixes.some((p) => role === p || role.startsWith(`${p}-`))
	);
	return idx === -1 ? GROUP_ORDER.length : idx;
};

/** Whether a property is a `-nested` companion. */
const isNested = (prop: string): boolean => prop.endsWith('-nested');

/**
 * Sort rank for a property: non-nested groups first (in GROUP_ORDER), then all
 * nested groups (in the same order). Nested props are shifted past the whole
 * non-nested range so they always cluster after it.
 */
const groupIndexOf = (prop: string): number => {
	const base = baseGroupIndexOf(prop);
	const span = GROUP_ORDER.length + 1; // +1 for the "other" fallback bucket
	return isNested(prop) ? span + base : base;
};

/** The comment label for a property's group. */
const groupLabelOf = (prop: string): string => {
	const base = GROUP_ORDER[baseGroupIndexOf(prop)]?.label ?? 'other';
	return isNested(prop) ? `nested ${base}` : base;
};

/**
 * Render a list of declarations as indented CSS lines, inserting a
 * `/* <group> *\/` comment header before each group. Declaration order within
 * a group is preserved. By default groups follow GROUP_ORDER (matched on the
 * `--db-` prefix), with anything unmatched last under "other". Pass `groupBy`
 * to override with a custom label per prop (used for the layout/device blocks,
 * which group by their sub-role instead). `render` maps a prop to its
 * `prop: value;` body.
 */
const renderGrouped = (
	props: string[],
	render: (prop: string) => string,
	groupBy?: (prop: string) => string
): string => {
	const seenOrder: string[] = [];
	const byLabel = new Map<string, { rank: number; props: string[] }>();
	for (const prop of props) {
		const rank = groupIndexOf(prop);
		const label = groupBy ? groupBy(prop) : groupLabelOf(prop);
		if (!byLabel.has(label)) {
			byLabel.set(label, { rank, props: [] });
			seenOrder.push(label);
		}
		byLabel.get(label)!.props.push(prop);
	}
	// Default: order groups by GROUP_ORDER rank. Custom groupBy: first-seen.
	const labels = groupBy
		? seenOrder
		: [...byLabel.keys()].sort(
				(a, b) => byLabel.get(a)!.rank - byLabel.get(b)!.rank
			);
	const lines: string[] = [];
	for (const label of labels) {
		lines.push(`\t/* ${label} */`);
		for (const prop of byLabel.get(label)!.props) {
			lines.push(`\t${render(prop)}`);
		}
	}
	return lines.join('\n');
};

/**
 * Build the ordered CSS declarations for one component size from its flattened
 * token map. Every token role becomes `--db-<role>`; a few compatibility props
 * are derived on top (see note above).
 */
// Token roles that are not emitted verbatim as `--db-<role>`:
//  - component-padding-*: uniform (block === inline), collapsed into a single
//    `--db-component-padding` (+ `-nested`).
//  - icon-size(-nested): re-emitted below as `--db-icon-size` (+ `-nested`)
//    alongside the derived weight-name, so it is skipped in the verbatim loop
//    to control ordering.
//  - border-radius-focus(-nested): not consumed in development, dropped.
//  - font-size-small(-nested), line-height-small(-nested): not consumed in
//    development, dropped.
const SKIPPED_ROLES = new Set([
	'component-padding-block',
	'component-padding-inline',
	'component-padding-block-nested',
	'component-padding-inline-nested',
	'icon-size',
	'icon-size-nested',
	'border-radius-focus',
	'border-radius-focus-nested',
	'font-size-small',
	'font-size-small-nested',
	'line-height-small',
	'line-height-small-nested'
]);

const buildSizeDecls = (tokens: Map<string, number>): Decl[] => {
	const decls: Decl[] = [];
	const push = (prop: string, value: string) => decls.push([prop, value]);

	// 1) Every token role, verbatim, as a rem length. Roles keep their literal
	// DTCG name (e.g. `content-height-nested` -> `--db-content-height-nested`);
	// the token file already carries every nested value, so nothing is
	// re-derived here. Skipped roles (collapsed padding, duplicate icon-size,
	// focus radius) are handled or dropped below.
	for (const [role, value] of tokens) {
		if (SKIPPED_ROLES.has(role)) continue;
		push(`--db-${role}`, formatRemValue(value));
	}

	// The tokens omit a nested content-padding-block role, but consumers read
	// `--db-content-padding-block-nested` (and the [data-nested] promotion pairs
	// it with `--db-content-padding-block`). Nested elements are always a
	// smaller size whose block correction is 0, so emit 0 as the companion.
	if (!tokens.has('content-padding-block-nested')) {
		push('--db-content-padding-block-nested', formatRemValue(0));
	}

	// 2) Collapsed component padding: a single value (and its nested companion)
	// since block always equals inline.
	const componentPadding = tokens.get('component-padding-inline');
	const componentPaddingNested = tokens.get(
		'component-padding-inline-nested'
	);
	if (componentPadding !== undefined) {
		push('--db-component-padding', formatRemValue(componentPadding));
	}
	if (componentPaddingNested !== undefined) {
		push(
			'--db-component-padding-nested',
			formatRemValue(componentPaddingNested)
		);
	}

	// 3) Icon font-weight selector string + rem length, for both the size and
	// its nested companion (the tokens only carry the numeric px size).
	const iconSize = tokens.get('icon-size');
	const iconSizeNested = tokens.get('icon-size-nested');
	if (iconSize !== undefined) {
		push('--db-icon-size-name', `"${iconSize}"`);
		push('--db-icon-size', formatRemValue(iconSize));
	}
	if (iconSizeNested !== undefined) {
		push('--db-icon-size-name-nested', `"${iconSizeNested}"`);
		push('--db-icon-size-nested', formatRemValue(iconSizeNested));
	}

	// 4) Vertical offset that centres an icon within the content-box.
	// Computed directly (resolved rem, no runtime calc).
	const contentHeight = tokens.get('content-height');
	if (contentHeight !== undefined && iconSize !== undefined) {
		push(
			'--db-icon-margin-block-start',
			formatRemValue((contentHeight - iconSize) / 2)
		);
	}

	return decls;
};

const generateBaseTokensCss = (): string => {
	// The Base Sizes collection has a single mode; emit each primitive globally.
	// Flattened keys look like `db-base-size-<n>`; emit them with the `--`
	// prefix so `db-base-size/0` -> `--db-base-size-0`.
	const [mode] = loadCollection(BASE_SIZE_COLLECTION);
	const decls = renderGrouped(
		mode.order.map((key) => `--${key}`),
		(prop) => `${prop}: ${formatRemValue(mode.values.get(prop.slice(2))!)};`
	);
	return `:is(:root,:host) {\n${decls}\n}\n\n`;
};

// Typography roles whose nested value a "capped" size inherits from the default
// size. Body font-size caps at 16 (MD..2XL all share font-size: 16), so a
// nested component under any of those sizes should step down to the same place
// MD's nested step lands on -- not stay at the parent's (capped) body size.
const CAPPED_NESTED_TYPOGRAPHY_ROLES = [
	'font-size-nested',
	'line-height-nested'
];

/**
 * Normalize the nested typography of sizes whose body font-size is capped at
 * the default size's value: their nested typography is forced to the default
 * size's nested typography. Mutates each affected mode's value map in place.
 */
const normalizeCappedNestedTypography = (
	byName: Map<string, TokenMode>
): void => {
	const base = byName.get(DEFAULT_SIZE);
	if (!base) return;
	const baseFontSize = base.values.get('font-size');
	if (baseFontSize === undefined) return;

	for (const [name, mode] of byName) {
		if (name === DEFAULT_SIZE) continue;
		// Only sizes at (or above) the cap, i.e. same body font-size as default.
		if (mode.values.get('font-size') !== baseFontSize) continue;
		for (const role of CAPPED_NESTED_TYPOGRAPHY_ROLES) {
			const baseValue = base.values.get(role);
			if (baseValue !== undefined) mode.values.set(role, baseValue);
		}
	}
};

const generateSizeTokensCss = (): string => {
	const modes = loadCollection(COMPONENT_SIZE_COLLECTION);
	// Index modes by their lower-cased Figma mode name (e.g. "3XS" -> "3xs").
	const byName = new Map(modes.map((m) => [m.mode.toLowerCase(), m]));
	normalizeCappedNestedTypography(byName);

	const sizeNames = SIZE_ORDER.filter((s) => byName.has(s));
	const declsPerSize = new Map<string, Decl[]>();
	const propOrder: string[] = [];
	const seenProp = new Set<string>();
	const recordProp = (name: string) => {
		if (!seenProp.has(name)) {
			seenProp.add(name);
			propOrder.push(name);
		}
	};

	for (const sizeName of sizeNames) {
		const decls = buildSizeDecls(byName.get(sizeName)!.values);
		for (const [name] of decls) recordProp(name);
		declsPerSize.set(sizeName, decls);
	}

	// Selector parts for a size. The default size also matches :root/:host.
	const selectorFor = (sizeName: string): string[] =>
		sizeName === DEFAULT_SIZE
			? [':is(:root,:host)', `[data-size="${sizeName}"]`]
			: [`[data-size="${sizeName}"]`];

	const valueOf = (sizeName: string, propName: string): string | undefined =>
		declsPerSize.get(sizeName)!.find(([name]) => name === propName)?.[1];

	// Props whose value is identical across every size are constants: emit them
	// once globally on :is(:root,:host) and exclude them from clustering.
	const constantProps = propOrder.filter((p) => {
		const first = valueOf(sizeNames[0], p);
		return (
			first !== undefined &&
			sizeNames.every((s) => valueOf(s, p) === first)
		);
	});
	let css = '';
	if (constantProps.length > 0) {
		const decls = renderGrouped(
			constantProps,
			(p) => `${p}: ${valueOf(sizeNames[0], p)};`
		);
		css += `:is(:root,:host) {\n${decls}\n}\n\n`;
	}
	const constantSet = new Set(constantProps);
	const variableProps = propOrder.filter((p) => !constantSet.has(p));

	// Count how many properties two sizes share the same value on.
	const sharedCount = (a: string, b: string): number =>
		variableProps.filter((p) => valueOf(a, p) === valueOf(b, p)).length;

	// Greedily cluster adjacent sizes (in size order). A size joins the current
	// cluster when it shares more than half its properties with the cluster's
	// anchor (first member); otherwise it starts a new cluster.
	const clusters: string[][] = [];
	for (const sizeName of sizeNames) {
		const current = clusters.at(-1);
		if (
			current &&
			sharedCount(current[0], sizeName) > variableProps.length / 2
		) {
			current.push(sizeName);
		} else {
			clusters.push([sizeName]);
		}
	}

	// Emit each cluster: the shared declarations (common to every member) under
	// the combined selector, then a per-member override block for the props
	// that member differs on.
	for (const cluster of clusters) {
		const [anchor, ...rest] = cluster;

		const commonProps = variableProps.filter((p) => {
			const v = valueOf(anchor, p);
			return v !== undefined && cluster.every((s) => valueOf(s, p) === v);
		});
		const commonSet = new Set(commonProps);

		const commonDecls = renderGrouped(
			commonProps,
			(p) => `${p}: ${valueOf(anchor, p)};`
		);
		const clusterSelector = cluster.flatMap(selectorFor).join(',\n');
		css += `${clusterSelector} {\n${commonDecls}\n}\n\n`;

		for (const member of [anchor, ...rest]) {
			const overrideProps = variableProps.filter(
				(p) => !commonSet.has(p) && valueOf(member, p) !== undefined
			);
			if (overrideProps.length === 0) continue;
			const overrideDecls = renderGrouped(
				overrideProps,
				(p) => `${p}: ${valueOf(member, p)};`
			);
			css += `${selectorFor(member).join(',\n')} {\n${overrideDecls}\n}\n\n`;
		}
	}

	// Promotion rule: a [data-nested="true"] element adopts the smaller nested
	// size by pointing each size variable at its `-nested` companion, which it
	// inherits from the nearest [data-size] ancestor. Only promote props that
	// actually have a `<prop>-nested` companion.
	const nestedSuffix = '-nested';
	const nestedProps = new Set(
		propOrder.filter((p) => p.endsWith(nestedSuffix))
	);
	const realProps = propOrder.filter(
		(p) =>
			!p.endsWith(nestedSuffix) && nestedProps.has(`${p}${nestedSuffix}`)
	);
	const nestedPromotions = renderGrouped(
		realProps,
		(p) => `${p}: var(${p}${nestedSuffix});`
	);
	css += `[data-nested="true"] {\n${nestedPromotions}\n}\n\n`;

	return css;
};

// --- Layout density ---

const DEFAULT_DENSITY = 'standard';

const generateLayoutCss = (): string => {
	const modes = loadCollection(LAYOUT_COLLECTION);
	let css = '';
	for (const { mode, values, order } of modes) {
		const density = mode.toLowerCase();

		const props = renderGrouped(
			order.map((role) => `--db-layout-${role}`),
			(prop) =>
				`${prop}: ${formatRemValue(
					values.get(prop.replace('--db-layout-', ''))!
				)};`,
			() => 'spacing'
		);

		const selector =
			density === DEFAULT_DENSITY
				? `:is(:root,:host),\n[data-layout-density="${density}"]`
				: `[data-layout-density="${density}"]`;
		css += `${selector} {\n${props}\n}\n\n`;
	}
	return css;
};

// --- Device ---

const DEFAULT_DEVICE = 'desktop';

const generateDeviceCss = (): string => {
	const modes = loadCollection(DEVICE_COLLECTION);
	let css = '';
	for (const { mode, values, order } of modes) {
		const device = mode.toLowerCase();
		const props = renderGrouped(
			order.map((role) => `--db-device-${role}`),
			(prop) =>
				`${prop}: ${formatRemValue(
					values.get(prop.replace('--db-device-', ''))!
				)};`,
			// Group by the sub-role: section, section-padding, font-size, ...
			(prop) => {
				const role = prop.replace('--db-device-', '');
				if (role.startsWith('section-padding'))
					return 'section-padding';
				if (role.startsWith('section')) return 'section';
				if (role.startsWith('font-size')) return 'font-size';
				return 'other';
			}
		);
		const selector =
			device === DEFAULT_DEVICE
				? `:is(:root,:host),\n[data-device="${device}"]`
				: `[data-device="${device}"]`;
		css += `${selector} {\n${props}\n}\n\n`;
	}
	return css;
};

// --- Public API ---

export const generateSizesCss = (): string => {
	let css = '';

	css += generateBaseTokensCss();
	css += generateSizeTokensCss();
	css += generateLayoutCss();
	css += generateDeviceCss();

	return css;
};
