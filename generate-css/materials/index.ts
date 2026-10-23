import {
	type ColorName,
	type ColorPalette,
	BACKDROP_COLOR,
	colors,
	DEFAULT_COLOR,
	FOCUS_OUTLINE_COLOR,
	INDICATOR_COLOR
} from './color.ts';
import {
	type ContainerContrastProps,
	type ContentContrastProps,
	type MaterialConfig,
	type MaterialName,
	containerPropToCss,
	contentPropToCss,
	materials
} from './material.ts';

// --- Types ---

type MaterialRule = {
	material: MaterialName;
	noMaterialFallback?: boolean;
	props: ContainerContrastProps | ContentContrastProps;
	cssMap: Record<string, string>;
};

type HighContrastRule = {
	material: MaterialName;
	props: Partial<ContainerContrastProps> | Partial<ContentContrastProps>;
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

const renderProps = (
	props: ContainerContrastProps | ContentContrastProps,
	cssMap: Record<string, string>,
	palette: ColorPalette,
	indent = ''
): string =>
	Object.entries(props)
		.map(([prop, key]) => {
			const [light, dark] = palette[key as keyof ColorPalette];
			const cssProp = cssMap[prop];
			return `${indent}\t${cssProp}: color-mix(in srgb, light-dark(${light}, ${dark}) ${transparencyFor(cssProp)}, transparent);`;
		})
		.join('\n');

// --- Generate CSS for a given prefix ---

const generateForPrefix = (prefix: string): string => {
	const p = prefix ? `${prefix}-` : '';
	const containerCss = containerPropToCss(prefix ? `${prefix}-` : '');
	const contentCss = contentPropToCss(prefix ? `${prefix}-` : '');
	const dataColor = `data-${p}color`;
	const dataMaterial = `data-${p}material`;

	const sides = {
		container: containerCss,
		content: contentCss
	} as const;

	// Flatten materials into rules
	const flattenMaterials = (): MaterialRule[] => {
		const rules: MaterialRule[] = [];
		for (const [matName, config] of Object.entries(materials) as [
			MaterialName,
			MaterialConfig
		][]) {
			for (const [side, cssMap] of Object.entries(sides) as [
				keyof typeof sides,
				Record<string, string>
			][]) {
				rules.push({
					material: matName,
					props: config[side],
					cssMap
				});
			}
		}
		return rules;
	};

	const materialRules = flattenMaterials();

	// Collect highContrast overrides
	const highContrastDiffRules: HighContrastRule[] = [];
	for (const [matName, config] of Object.entries(materials) as [
		MaterialName,
		MaterialConfig
	][]) {
		if (!config.highContrast) continue;
		const hc = config.highContrast;
		for (const [side, cssMap] of Object.entries(sides) as [
			keyof typeof sides,
			Record<string, string>
		][]) {
			const overrides = hc[side];
			if (!overrides || Object.keys(overrides).length === 0) continue;
			highContrastDiffRules.push({
				material: matName,
				props: overrides,
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

		const parts: string[] = [matSel];

		if (rule.noMaterialFallback) {
			parts.push(`${selectorPrefix}:not([${dataMaterial}])`);
		}

		return parts;
	};

	const generateRulesForPalette = (
		rules: MaterialRule[],
		palette: ColorPalette,
		suffix: string,
		selectorPrefix = ''
	): string => {
		let out = '';
		for (const rule of rules) {
			const parts = buildSelectorParts(rule, selectorPrefix);
			const selectors = parts.map((s) => `${s}${suffix}`).join(',\n');
			out += `${selectors} {\n${renderProps(rule.props, rule.cssMap, palette)}\n}\n\n`;
		}
		return out;
	};

	// --- Defaults ---
	const defaultPalette = colors[DEFAULT_COLOR];
	const defaultConfig = materials['filled-1'];
	const defaultContainer = defaultConfig.container;
	const defaultContent = defaultConfig.content;

	let css = '';

	// 1. Defaults for :is(:root,:host)
	css += `:is(:root,:host) {\n${renderProps(defaultContainer, containerCss, defaultPalette)}\n${renderProps(defaultContent, contentCss, defaultPalette)}\n}\n\n`;

	// 1b. data-color set but no data-material
	for (const [colorName, palette] of Object.entries(colors) as [
		ColorName,
		ColorPalette
	][]) {
		css += `[${dataColor}="${colorName}"]:not([${dataMaterial}]) {\n${renderProps(defaultContainer, containerCss, palette)}\n${renderProps(defaultContent, contentCss, palette)}\n}\n\n`;
	}

	// 2. Material set, but no color
	css += generateRulesForPalette(
		materialRules,
		defaultPalette,
		`:not([${dataColor}])`
	);

	// 3. Explicit color on the material element
	for (const [colorName, palette] of Object.entries(colors) as [
		ColorName,
		ColorPalette
	][]) {
		css += generateRulesForPalette(
			materialRules,
			palette,
			`[${dataColor}="${colorName}"]`
		);
	}

	// 4. Child with data-color inside a material parent
	for (const [colorName, palette] of Object.entries(colors) as [
		ColorName,
		ColorPalette
	][]) {
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

		const generateHcRules = (
			palette: ColorPalette,
			suffix: string
		): string => {
			let result = '';
			for (const rule of highContrastDiffRules) {
				const sel = `${indent}${hcSelectorPrefix}[${dataMaterial}="${rule.material}"]${suffix}`;
				result += `${sel} {\n${renderProps(rule.props as ContainerContrastProps | ContentContrastProps, rule.cssMap, palette, indent)}\n${indent}}\n\n`;
			}
			return result;
		};

		const filledHcRules = highContrastDiffRules.filter(
			(r) => r.material === 'filled-1'
		);
		if (filledHcRules.length > 0) {
			const hcRootProps = filledHcRules
				.flatMap((rule) =>
					Object.entries(rule.props).map(([prop, colorKey]) => {
						const [light, dark] =
							defaultPalette[colorKey as keyof ColorPalette];
						const cssProp = rule.cssMap[prop];
						return `${indent}\t${cssProp}: color-mix(in srgb, light-dark(${light}, ${dark}) ${transparencyFor(cssProp)}, transparent);`;
					})
				)
				.join('\n');
			const rootSel = hcSelectorPrefix.trimEnd() || ':is(:root,:host)';
			out += `${indent}${rootSel} {\n${hcRootProps}\n${indent}}\n\n`;

			for (const [colorName, palette] of Object.entries(colors) as [
				ColorName,
				ColorPalette
			][]) {
				const props = filledHcRules
					.flatMap((rule) =>
						Object.entries(rule.props).map(([prop, colorKey]) => {
							const [light, dark] =
								palette[colorKey as keyof ColorPalette];
							const cssProp = rule.cssMap[prop];
							return `${indent}\t${cssProp}: color-mix(in srgb, light-dark(${light}, ${dark}) ${transparencyFor(cssProp)}, transparent);`;
						})
					)
					.join('\n');
				const sel = `${indent}${hcSelectorPrefix}[${dataColor}="${colorName}"]:not([${dataMaterial}])`;
				out += `${sel} {\n${props}\n${indent}}\n\n`;
			}
		}

		out += generateHcRules(defaultPalette, `:not([${dataColor}])`);

		for (const [colorName, palette] of Object.entries(colors) as [
			ColorName,
			ColorPalette
		][]) {
			out += generateHcRules(palette, `[${dataColor}="${colorName}"]`);
		}

		for (const [colorName, palette] of Object.entries(colors) as [
			ColorName,
			ColorPalette
		][]) {
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

export const generateMaterialsCss = (): string => {
	const defaultSet = generateForPrefix('');
	const activeSet = generateForPrefix('alt-state');

	let css = '@layer material, material-high-contrast, size;\n\n';

	const focusPalette = colors[FOCUS_OUTLINE_COLOR.color];
	const [focusLight, focusDark] = focusPalette[FOCUS_OUTLINE_COLOR.index];

	// Backdrop: a dimmed neutral, alpha applied via color-mix on the light-dark value.
	const backdropPalette = colors[BACKDROP_COLOR.color];
	const [backdropLight, backdropDark] = backdropPalette[BACKDROP_COLOR.index];
	const backdrop = (alpha: number): string =>
		`color-mix(in srgb, light-dark(${backdropLight}, ${backdropDark}) ${alpha * 100}%, transparent)`;

	// Indicator (active tab/navigation marker), based on brand/7. Pride gradient:
	// each stop falls back to `--db-indicator-color` until the consumer sets the
	// `--db-pride-*` custom properties.
	const indicatorPalette = colors[INDICATOR_COLOR.color];
	const [indicatorLight, indicatorDark] =
		indicatorPalette[INDICATOR_COLOR.index];
	const indicatorColor = `light-dark(${indicatorLight}, ${indicatorDark})`;

	const prideStops: [string, string][] = [
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

	css += `:is(:root,:host) {\n\t--db-focus-outline-color: light-dark(${focusLight}, ${focusDark});\n\t--db-divider-bg-color: var(--db-border-default);\n\t--db-backdrop-color-weak: ${backdrop(BACKDROP_COLOR.weakAlpha)};\n\t--db-backdrop-color-strong: ${backdrop(BACKDROP_COLOR.strongAlpha)};\n\t--db-indicator-color: ${indicatorColor};\n\t--db-indicator-background: ${indicatorBackground};\n\t--db-font-weight: normal;\n}\n\n`;

	// Apply the base surface to the root/host itself so an unstyled document
	// (or a custom-element host) picks up the adaptive background and text color.
	css += `:root,\n:host {\n\tbackground-color: var(--db-bg-default);\n\tcolor: var(--db-text-default);\n}\n\n`;

	// Neutralize the legacy color-class declarations on `[data-color]` elements.
	// The legacy `_get-class.scss` rule sets `color`/`background-color` from the
	// old `--db-adaptive-on-bg-basic-emphasis-100-default` /
	// `--db-adaptive-bg-basic-level-1-default` tokens and is unlayered, so it
	// wins over the adaptive `@layer material` tokens. Assigning those tokens an
	// invalid `<color>` (`1`) makes the legacy declarations invalid at
	// computed-value time, so they drop out and the component's own adaptive
	// styling takes over. FIXME: temporary workaround - the real fix is to stop
	// the legacy color classes from matching `[data-color]` (adaptive attribute).
	css += `[data-color] {\n\t--db-adaptive-on-bg-basic-emphasis-100-default: 1;\n\t--db-adaptive-bg-basic-level-1-default: 1;\n}\n\n`;

	// `[data-pride="true"]` opt-in: set the `--db-pride-*` stops to the adaptive
	// origin colors so the indicator (and anything using them) renders the pride
	// gradient. Uses `green` for the green stop (the former `light-green` is not
	// part of the adaptive palette).
	const prideMap: [string, ColorName][] = [
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

	css += '@layer material {\n\n';
	css += defaultSet.materialCss;
	css += activeSet.materialCss;
	css += '[data-emphasis="low"] {\n\t--db-emphasis-transparency: 75%;\n}\n\n';
	css += '[data-emphasis="high"] {\n\t--db-font-weight: bold;\n}\n\n';
	css += '} /* @layer material */\n\n';

	css += '@layer material-high-contrast {\n\n';
	css += defaultSet.generateAllHcCss(
		':is(:root,:host)[data-contrast="more"] '
	);
	css += activeSet.generateAllHcCss(
		':is(:root,:host)[data-contrast="more"] '
	);
	css += `@media (prefers-contrast: more) {\n${defaultSet.generateAllHcCss('', '\t')}${activeSet.generateAllHcCss('', '\t')}}\n\n`;
	css += '} /* @layer material-high-contrast */\n';

	return css;
};
