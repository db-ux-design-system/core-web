import {
	type ColorName,
	type ColorPalette,
	colors,
	DEFAULT_COLOR,
	DIVIDER_BG_COLOR,
	FOCUS_OUTLINE_COLOR
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

const renderProps = (
	props: ContainerContrastProps | ContentContrastProps,
	cssMap: Record<string, string>,
	palette: ColorPalette,
	indent = ''
): string =>
	Object.entries(props)
		.map(([prop, key]) => {
			const [light, dark] = palette[key as keyof ColorPalette];
			return `${indent}\t${cssMap[prop]}: color-mix(in srgb, light-dark(${light}, ${dark}) var(--db-color-transparency), transparent);`;
		})
		.join('\n');

// --- Generate CSS for a given prefix ---

const generateForPrefix = (prefix: string): string => {
	const p = prefix ? `${prefix}-` : '';
	const containerCss = containerPropToCss(prefix ? `${prefix}-` : '');
	const contentCss = contentPropToCss(prefix ? `${prefix}-` : '');
	const dataColor = `data-${p}color-next`;
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
	const defaultConfig = materials.filled;
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
			(r) => r.material === 'filled'
		);
		if (filledHcRules.length > 0) {
			const hcRootProps = filledHcRules
				.flatMap((rule) =>
					Object.entries(rule.props).map(([prop, colorKey]) => {
						const [light, dark] =
							defaultPalette[colorKey as keyof ColorPalette];
						return `${indent}\t${rule.cssMap[prop]}: color-mix(in srgb, light-dark(${light}, ${dark}) var(--db-color-transparency), transparent);`;
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
							return `${indent}\t${rule.cssMap[prop]}: color-mix(in srgb, light-dark(${light}, ${dark}) var(--db-color-transparency), transparent);`;
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
	const activeSet = generateForPrefix('active');

	let css = '@layer material, material-high-contrast, size;\n\n';

	const focusPalette = colors[FOCUS_OUTLINE_COLOR.color];
	const [focusLight, focusDark] = focusPalette[FOCUS_OUTLINE_COLOR.index];
	const dividerPalette = colors[DIVIDER_BG_COLOR.color];
	const [dividerLight, dividerDark] = dividerPalette[DIVIDER_BG_COLOR.index];
	css += `:is(:root,:host) {\n\t--db-focus-outline-color: light-dark(${focusLight}, ${focusDark});\n\t--db-divider-bg-color: light-dark(${dividerLight}, ${dividerDark});\n\t--db-color-transparency: 100%;\n\t--db-font-weight: normal;\n}\n\n`;

	css += '@layer material {\n\n';
	css += defaultSet.materialCss;
	css += activeSet.materialCss;
	css += '[data-emphasis="low"] {\n\t--db-color-transparency: 80%;\n}\n\n';
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
