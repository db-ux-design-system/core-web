/*
 * The adaptive-material CSS generator, lifted from
 * `generate-css/materials/index.ts` + `generate-css/materials/material.ts`.
 *
 * The refactor is purely about WHERE the values come from: the former module
 * constants (`colors`, `materials`, `DEFAULT_COLOR`, `FOCUS_OUTLINE_COLOR`,
 * `BACKDROP_COLOR`, `INDICATOR_COLOR`) are now read from a passed-in `Theme`,
 * so the color/material VALUES are an INPUT rather than hard-coded. The emit
 * logic, selectors, ordering, and whitespace are unchanged, so feeding
 * `defaultTheme` reproduces today's `generated-colors.css` byte-for-byte
 * (Requirement 1.5).
 *
 * The CSS-property-name maps (`containerPropToCss` / `contentPropToCss`) stay
 * here: they map a material-role key to its generated custom-property name and
 * carry no color VALUES, so they are generator logic, not theme input.
 */

import type { HighContrastMode } from '../types/generate.js';
import type {
	ColorName,
	ColorPalette,
	ContainerContrastProps,
	ContentContrastProps,
	MaterialConfig,
	MaterialDefinitions,
	MaterialName,
	Theme
} from '../types/theme.js';
import { resolveMaterials } from './materials-config.js';

/** Which side of a material a rule renders: the container or the content roles. */
type MaterialSide = 'container' | 'content';

/**
 * The resolved optimization filter the matrix generator honours. `colors` and
 * `materials` are the already-baseline-unioned keep-sets `generate` computes
 * (so this module does no baseline logic of its own); `highContrast` selects
 * which high-contrast branch(es) to emit. All fields are required here —
 * `generate` resolves the defaults (keep everything, high-contrast `"both"`)
 * before calling in, so the matrix generator stays a pure projection of an
 * explicit filter.
 */
export type MaterialsFilter = {
	colors: ReadonlySet<ColorName>;
	materials: ReadonlySet<MaterialName>;
	highContrast: HighContrastMode;
};

/**
 * Build the full, no-op filter (keep every color and material in the theme,
 * both high-contrast branches). Used so the standalone
 * `generateMaterialsCss(theme)` entry emits the complete matrix.
 */
const fullFilter = (theme: Theme): MaterialsFilter => ({
	colors: new Set(Object.keys(theme.colors) as ColorName[]),
	materials: new Set(Object.keys(theme.materials) as MaterialName[]),
	highContrast: 'both'
});

// --- CSS property-name maps ---

type ContainerProp = keyof ContainerContrastProps;
type ContentProp = keyof ContentContrastProps;

const containerPropToCss = (prefix = ''): Record<ContainerProp, string> => ({
	border: `--db-${prefix}border-default`,
	borderVibrant: `--db-${prefix}border-vibrant`,
	borderDecorative: `--db-${prefix}border-decorative`,
	bgDefault: `--db-${prefix}bg-default`,
	bgHovered: `--db-${prefix}bg-hovered`,
	bgPressed: `--db-${prefix}bg-pressed`
});

const contentPropToCss = (prefix = ''): Record<ContentProp, string> => ({
	onBgDefault: `--db-${prefix}text-default`,
	onBgHovered: `--db-${prefix}text-hovered`,
	onBgPressed: `--db-${prefix}text-pressed`,
	textVibrant: `--db-${prefix}text-vibrant`,
	visualVibrant: `--db-${prefix}visual-vibrant`
});

// --- Types ---

/*
 * A rule is color-agnostic: it names the material and which SIDE (container /
 * content) it renders, plus the CSS-property map. The concrete role VALUES are
 * resolved per-palette at render time (via `resolveMaterials`), so one rule set
 * serves every color.
 */
type MaterialRule = {
	material: MaterialName;
	side: MaterialSide;
	noMaterialFallback?: boolean;
	cssMap: Record<string, string>;
};

type HighContrastRule = {
	material: MaterialName;
	side: MaterialSide;
	cssMap: Record<string, string>;
};

// --- Helpers ---

/**
 * Transparency expression for a generated token. Container roles (bg, border)
 * only honour the adaptive transparency; text/visual content roles additionally
 * fall back to the emphasis transparency so `[data-emphasis="low"]` can dim text
 * without touching backgrounds.
 */
const transparencyFor = (cssProp: string): string =>
	/(?:^|-)(?:text|visual)-/.test(cssProp)
		? 'var(--db-adaptive-transparency, var(--db-emphasis-transparency, 100%))'
		: 'var(--db-adaptive-transparency, 100%)';

/*
 * Render a set of RESOLVED role values. After the Scheme/Material resolver runs
 * each prop already holds its `[light, dark]` value pair, so this emits the
 * value directly — the opacity (when any) is already baked into the value
 * string as `rgba(...)`, keeping the `color-mix(... light-dark(l, d) ...,
 * transparent)` shape unchanged.
 */
const renderProps = (
	props:
		| ContainerContrastProps
		| ContentContrastProps
		| Partial<ContainerContrastProps>
		| Partial<ContentContrastProps>,
	cssMap: Record<string, string>,
	indent = ''
): string =>
	Object.entries(props)
		.map(([prop, [light, dark]]) => {
			const cssProp = cssMap[prop];
			return `${indent}\t${cssProp}: color-mix(in srgb, light-dark(${light}, ${dark}) ${transparencyFor(cssProp)}, transparent);`;
		})
		.join('\n');

// --- Generate CSS for a given prefix ---

const generateForPrefix = (
	theme: Theme,
	prefix: string,
	filter: MaterialsFilter
): {
	materialCss: string;
	generateAllHcCss: (hcSelectorPrefix: string, indent?: string) => string;
} => {
	const { defaultColor } = theme;
	/*
	 * Project the theme's colors/materials down to the kept sets, preserving the
	 * theme's own insertion order (so a filtered run is a subset of the full
	 * run's rule order). `generate` has already unioned the Required_Baseline
	 * into the filter, so no baseline logic is needed here.
	 */
	const colors = Object.fromEntries(
		Object.entries(theme.colors).filter(([name]) =>
			filter.colors.has(name as ColorName)
		)
	) as Record<ColorName, ColorPalette>;
	const materials = Object.fromEntries(
		Object.entries(theme.materials).filter(([name]) =>
			filter.materials.has(name as MaterialName)
		)
	) as MaterialDefinitions;

	/*
	 * Resolve the kept material DEFINITIONS against a palette into concrete role
	 * VALUES, memoized per palette so each color resolves once even though it is
	 * rendered across several selector groups.
	 */
	const resolvedCache = new Map<
		ColorPalette,
		Record<MaterialName, MaterialConfig>
	>();
	const resolveFor = (
		palette: ColorPalette
	): Record<MaterialName, MaterialConfig> => {
		let resolved = resolvedCache.get(palette);
		if (!resolved) {
			resolved = resolveMaterials(materials, palette);
			resolvedCache.set(palette, resolved);
		}
		return resolved;
	};

	const p = prefix ? `${prefix}-` : '';
	const containerCss = containerPropToCss(prefix ? `${prefix}-` : '');
	const contentCss = contentPropToCss(prefix ? `${prefix}-` : '');
	const dataColor = `data-${p}adaptive-color`;
	const dataMaterial = `data-${p}material`;

	const sides = {
		container: containerCss,
		content: contentCss
	} as const;

	// Flatten materials into rules
	const flattenMaterials = (): MaterialRule[] => {
		const rules: MaterialRule[] = [];
		for (const matName of Object.keys(materials) as MaterialName[]) {
			for (const [side, cssMap] of Object.entries(sides) as Array<
				[MaterialSide, Record<string, string>]
			>) {
				rules.push({
					material: matName,
					side,
					cssMap
				});
			}
		}
		return rules;
	};

	const materialRules = flattenMaterials();

	/*
	 * Collect the high-contrast override rules. The override SET (which roles a
	 * material overrides) is color-agnostic, so a single resolve against the
	 * default palette tells us which (material, side) pairs carry overrides; the
	 * concrete values are resolved per-palette at render time.
	 */
	const defaultResolved = resolveFor(colors[defaultColor]);
	const highContrastDiffRules: HighContrastRule[] = [];
	for (const matName of Object.keys(materials) as MaterialName[]) {
		const hc = defaultResolved[matName].highContrast;
		if (!hc) {
			continue;
		}
		for (const [side, cssMap] of Object.entries(sides) as Array<
			[MaterialSide, Record<string, string>]
		>) {
			const overrides = hc[side];
			if (!overrides || Object.keys(overrides).length === 0) {
				continue;
			}
			highContrastDiffRules.push({
				material: matName,
				side,
				cssMap
			});
		}
	}

	// Selector builder
	const buildSelectorParts = (
		rule: MaterialRule,
		selectorPrefix = ''
	): string[] => {
		const { material } = rule;
		const matSel = `${selectorPrefix}[${dataMaterial}="${material}"]`;

		return rule.noMaterialFallback
			? [matSel, `${selectorPrefix}:not([${dataMaterial}])`]
			: [matSel];
	};

	const generateRulesForPalette = (
		rules: MaterialRule[],
		palette: ColorPalette,
		suffix: string,
		selectorPrefix = ''
	): string => {
		const resolved = resolveFor(palette);
		let out = '';
		for (const rule of rules) {
			const parts = buildSelectorParts(rule, selectorPrefix);
			const selectors = parts.map((s) => `${s}${suffix}`).join(',\n');
			const props = resolved[rule.material][rule.side];
			out += `${selectors} {\n${renderProps(props, rule.cssMap)}\n}\n\n`;
		}
		return out;
	};

	// --- Defaults ---
	const defaultPalette = colors[defaultColor];

	let css = '';

	// 1. Defaults for :is(:root,:host)
	const defaultConfig = resolveFor(defaultPalette)['filled-1'];
	css += `:is(:root,:host) {\n${renderProps(defaultConfig.container, containerCss)}\n${renderProps(defaultConfig.content, contentCss)}\n}\n\n`;

	// 1b. data-color set but no data-material
	for (const [colorName, palette] of Object.entries(colors) as Array<
		[ColorName, ColorPalette]
	>) {
		const config = resolveFor(palette)['filled-1'];
		css += `[${dataColor}="${colorName}"]:not([${dataMaterial}]) {\n${renderProps(config.container, containerCss)}\n${renderProps(config.content, contentCss)}\n}\n\n`;
	}

	// 2. Material set, but no color
	css += generateRulesForPalette(
		materialRules,
		defaultPalette,
		`:not([${dataColor}])`
	);

	// 3. Explicit color on the material element
	for (const [colorName, palette] of Object.entries(colors) as Array<
		[ColorName, ColorPalette]
	>) {
		css += generateRulesForPalette(
			materialRules,
			palette,
			`[${dataColor}="${colorName}"]`
		);
	}

	// 4. Child with data-color inside a material parent
	for (const [colorName, palette] of Object.entries(colors) as Array<
		[ColorName, ColorPalette]
	>) {
		css += generateRulesForPalette(
			materialRules,
			palette,
			` [${dataColor}="${colorName}"]:not([${dataMaterial}])`
		);
	}

	// --- High contrast generator ---
	const generateAllHcCss = (
		hcSelectorPrefix: string,
		indent = ''
	): string => {
		let out = '';

		/*
		 * The resolved high-contrast overrides for a (material, side), for the
		 * given palette. `highContrast` is always present on a resolved config
		 * (the resolver fills it for every material), so the side lookup is
		 * safe for every rule collected above.
		 */
		const hcProps = (
			rule: HighContrastRule,
			palette: ColorPalette
		): Partial<ContainerContrastProps> | Partial<ContentContrastProps> =>
			resolveFor(palette)[rule.material].highContrast![rule.side] ?? {};

		const generateHcRules = (
			palette: ColorPalette,
			suffix: string
		): string => {
			let result = '';
			for (const rule of highContrastDiffRules) {
				const sel = `${indent}${hcSelectorPrefix}[${dataMaterial}="${rule.material}"]${suffix}`;
				result += `${sel} {\n${renderProps(hcProps(rule, palette), rule.cssMap, indent)}\n${indent}}\n\n`;
			}
			return result;
		};

		const filledHcRules = highContrastDiffRules.filter(
			(r) => r.material === 'filled-1'
		);
		if (filledHcRules.length > 0) {
			const renderFilledHc = (palette: ColorPalette): string =>
				filledHcRules
					.flatMap((rule) =>
						Object.entries(hcProps(rule, palette)).map(
							([prop, [light, dark]]) => {
								const cssProp = rule.cssMap[prop];
								return `${indent}\t${cssProp}: color-mix(in srgb, light-dark(${light}, ${dark}) ${transparencyFor(cssProp)}, transparent);`;
							}
						)
					)
					.join('\n');

			const rootSel = hcSelectorPrefix.trimEnd() || ':is(:root,:host)';
			out += `${indent}${rootSel} {\n${renderFilledHc(defaultPalette)}\n${indent}}\n\n`;

			for (const [colorName, palette] of Object.entries(colors) as Array<
				[ColorName, ColorPalette]
			>) {
				const sel = `${indent}${hcSelectorPrefix}[${dataColor}="${colorName}"]:not([${dataMaterial}])`;
				out += `${sel} {\n${renderFilledHc(palette)}\n${indent}}\n\n`;
			}
		}

		out += generateHcRules(defaultPalette, `:not([${dataColor}])`);

		for (const [colorName, palette] of Object.entries(colors) as Array<
			[ColorName, ColorPalette]
		>) {
			out += generateHcRules(palette, `[${dataColor}="${colorName}"]`);
		}

		for (const [colorName, palette] of Object.entries(colors) as Array<
			[ColorName, ColorPalette]
		>) {
			out += generateHcRules(
				palette,
				` [${dataColor}="${colorName}"]:not([${dataMaterial}])`
			);
		}

		return out;
	};

	return { materialCss: css, generateAllHcCss };
};

// --- Public API ---

/**
 * Generate the adaptive-material CSS from a theme's color/material VALUES.
 * Equivalent to the former `generateMaterialsCss()`, but reading every value
 * from `theme` instead of module constants.
 */
export const generateMaterialsCss = (
	theme: Theme,
	filter: MaterialsFilter = fullFilter(theme)
): string => {
	const { colors, roles } = theme;
	const defaultSet = generateForPrefix(theme, '', filter);
	const activeSet = generateForPrefix(theme, 'alt-state', filter);

	let css = '@layer material, material-high-contrast, size;\n\n';

	const focusPalette = colors[roles.focusOutline.color];
	const [focusLight, focusDark] = focusPalette[roles.focusOutline.index];

	// Backdrop: a dimmed grey, alpha applied via color-mix on the light-dark value.
	const backdropPalette = colors[roles.backdrop.color];
	const [backdropLight, backdropDark] = backdropPalette[roles.backdrop.index];
	const backdrop = (alpha: number): string =>
		`color-mix(in srgb, light-dark(${backdropLight}, ${backdropDark}) ${alpha * 100}%, transparent)`;

	// Indicator (active tab/navigation marker), based on brand/7. Pride gradient:
	// each stop falls back to `--db-indicator-color` until the consumer sets the
	// `--db-pride-*` custom properties.
	const indicatorPalette = colors[roles.indicator.color];
	const [indicatorLight, indicatorDark] =
		indicatorPalette[roles.indicator.index];
	const indicatorColor = `light-dark(${indicatorLight}, ${indicatorDark})`;

	const prideStops: Array<[string, string]> = [
		['--db-pride-red', '16.7%'],
		['--db-pride-orange', '0'],
		['--db-pride-orange', '33.4%'],
		['--db-pride-yellow', '0'],
		['--db-pride-yellow', '50.1%'],
		['--db-pride-green', '0'],
		['--db-pride-green', '66.8%'],
		['--db-pride-blue', '0'],
		['--db-pride-blue', '83.5%'],
		['--db-pride-violet', '0']
	];
	const indicatorBackground = `linear-gradient(135deg, ${prideStops
		.map(
			([prop, stop]) => `var(${prop}, var(--db-indicator-color)) ${stop}`
		)
		.join(', ')})`;

	css += `:is(:root,:host) {\n\t--db-focus-outline-color: light-dark(${focusLight}, ${focusDark});\n\t--db-divider-bg-color: var(--db-border-decorative);\n\t--db-backdrop-color-weak: ${backdrop(roles.backdrop.weakAlpha)};\n\t--db-backdrop-color-strong: ${backdrop(roles.backdrop.strongAlpha)};\n\t--db-indicator-color: ${indicatorColor};\n\t--db-indicator-background: ${indicatorBackground};\n\t--db-font-weight: normal;\n\t--db-opacity-disabled: 0.4;\n\t--db-opacity-emphasis-low: 0.75;\n}\n\n`;

	// Apply the base surface to the root/host itself so an unstyled document
	// (or a custom-element host) picks up the adaptive background and text color.
	css += `:root,\n:host {\n\tbackground-color: var(--db-bg-default);\n\tcolor: var(--db-text-default);\n}\n\n`;

	// `[data-pride="true"]` opt-in: set the `--db-pride-*` stops to the adaptive
	// origin colors so the indicator (and anything using them) renders the pride
	// gradient. Uses `green` for the green stop (the former `light-green` is not
	// part of the adaptive palette).
	const prideMap: Array<[string, ColorName]> = [
		['--db-pride-red', 'red'],
		['--db-pride-orange', 'orange'],
		['--db-pride-yellow', 'yellow'],
		['--db-pride-green', 'green'],
		['--db-pride-blue', 'blue'],
		['--db-pride-violet', 'violet']
	];
	const prideProps = prideMap
		.map(([prop, color]) => {
			const [light, dark] = colors[color]['origin-default'];
			return `\t${prop}: light-dark(${light}, ${dark});`;
		})
		.join('\n');
	css += `[data-pride="true"] {\n${prideProps}\n}\n\n`;

	// Document-level colors that `default-required.base` deliberately omits so
	// the adaptive bundle stays free of the legacy color layer: the list-marker
	// color reuses `--db-indicator-color` (brand/7, same source as the indicator)
	// and the tap-highlight is a subtle translucent cyan (the adaptive
	// equivalent of the former informational semi-transparent).
	css += `:where(ul) li::marker {\n\tcolor: var(--db-indicator-color);\n}\n\n`;

	const tapPalette = colors[roles.tapHighlight.color];
	const [tapLight, tapDark] = tapPalette[roles.tapHighlight.index];
	const tapHighlight = `color-mix(in srgb, light-dark(${tapLight}, ${tapDark}) ${roles.tapHighlight.alpha * 100}%, transparent)`;
	css += `html {\n\t-webkit-tap-highlight-color: ${tapHighlight};\n}\n\n`;

	css += '@layer material {\n\n';
	css += defaultSet.materialCss;
	css += activeSet.materialCss;
	css += '[data-emphasis="low"] {\n\t--db-emphasis-transparency: 75%;\n}\n\n';
	css += '[data-emphasis="high"] {\n\t--db-font-weight: bold;\n}\n\n';
	css += '} /* @layer material */\n\n';

	/*
	 * High-contrast has two independent delivery branches: the opt-in
	 * `[data-contrast="more"]` attribute selector and the
	 * `@media (prefers-contrast: more)` query. The `highContrast` mode selects
	 * which to emit — `"both"`, `"data-attribute"`, `"media-query"`, or `"none"`
	 * (emit nothing). When at least one branch is emitted they share the single
	 * `@layer material-high-contrast` wrapper.
	 */
	const emitDataAttribute =
		filter.highContrast === 'both' ||
		filter.highContrast === 'data-attribute';
	const emitMediaQuery =
		filter.highContrast === 'both' || filter.highContrast === 'media-query';

	if (emitDataAttribute || emitMediaQuery) {
		css += '@layer material-high-contrast {\n\n';
		if (emitDataAttribute) {
			css += defaultSet.generateAllHcCss(
				':is(:root,:host)[data-contrast="more"] '
			);
			css += activeSet.generateAllHcCss(
				':is(:root,:host)[data-contrast="more"] '
			);
		}
		if (emitMediaQuery) {
			css += `@media (prefers-contrast: more) {\n${defaultSet.generateAllHcCss('', '\t')}${activeSet.generateAllHcCss('', '\t')}}\n\n`;
		}
		css += '} /* @layer material-high-contrast */\n';
	}

	return css;
};
