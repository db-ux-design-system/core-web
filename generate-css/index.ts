import { writeFileSync } from "fs";
import { type ColorName, type ColorPalette, colors, DEFAULT_COLOR } from "./color.ts";
import {
	type ContainerContrastProps,
	type ContentContrastProps,
	type ContrastLevel,
	type MaterialConfig,
	type MaterialName,
	containerPropToCss,
	contentPropToCss,
	materials,
} from "./material.ts";

// --- Types ---

type MaterialRule = {
	material: MaterialName;
	contrastType?: "container-contrast" | "content-contrast";
	contrastLevel?: ContrastLevel;
	noMaterialFallback?: boolean;
	props: ContainerContrastProps | ContentContrastProps;
	cssMap: Record<string, string>;
};

// --- Flatten materials into rules ---

const contrastDefaults: Record<string, ContrastLevel> = {
	"container-contrast": "min",
	"content-contrast": "max",
};

const contrastTypes = {
	container: "container-contrast",
	content: "content-contrast",
} as const;

const isContrastSide = (side: any): side is Record<ContrastLevel, any> =>
	side && typeof side === "object" && ("max" in side || "min" in side);

const flattenMaterials = (): MaterialRule[] => {
	const rules: MaterialRule[] = [];
	for (const [matName, config] of Object.entries(materials) as [MaterialName, MaterialConfig][]) {
		for (const [side, dataAttr] of Object.entries(contrastTypes) as [keyof typeof contrastTypes, string][]) {
			const cssMap = side === "container" ? containerPropToCss : contentPropToCss;
			const sideConfig = config[side];
			if (isContrastSide(sideConfig)) {
				for (const [level, props] of Object.entries(sideConfig) as [ContrastLevel, (ContainerContrastProps | ContentContrastProps)][]) {
					rules.push({
						material: matName,
						contrastType: dataAttr as MaterialRule["contrastType"],
						contrastLevel: level,
						props,
						cssMap,
					});
				}
			} else {
				rules.push({ material: matName, props: sideConfig, cssMap });
			}
		}
	}
	return rules;
};

const materialRules = flattenMaterials();

// Collect only the highContrast overrides (diff only, not merged)
// Since overrides apply to ALL contrast levels, no contrast-level selector needed
type HighContrastRule = {
	material: MaterialName;
	contrastType: "container-contrast" | "content-contrast";
	props: Partial<ContainerContrastProps> | Partial<ContentContrastProps>;
	cssMap: Record<string, string>;
};

const highContrastDiffRules: HighContrastRule[] = [];
for (const [matName, config] of Object.entries(materials) as [MaterialName, MaterialConfig][]) {
	if (!config.highContrast) continue;
	const hc = config.highContrast;
	for (const [side, dataAttr] of Object.entries(contrastTypes) as [keyof typeof contrastTypes, string][]) {
		const hcSide = hc[side];
		if (!hcSide) continue;
		const cssMap = side === "container" ? containerPropToCss : contentPropToCss;
		const merged: Record<string, keyof ColorPalette> = {};
		for (const level of ["max", "min"] as ContrastLevel[]) {
			const overrides = hcSide[level];
			if (overrides) Object.assign(merged, overrides);
		}
		if (Object.keys(merged).length === 0) continue;
		highContrastDiffRules.push({
			material: matName,
			contrastType: dataAttr as HighContrastRule["contrastType"],
			props: merged as Partial<ContainerContrastProps> | Partial<ContentContrastProps>,
			cssMap,
		});
	}
}

// --- Helpers ---

const buildSelectorParts = (rule: MaterialRule, prefix = ""): string[] => {
	const { material, contrastType, contrastLevel } = rule;
	const matSel = `${prefix}[data-material="${material}"]`;

	// Flat material (no contrast levels)
	if (!contrastType || !contrastLevel) return [matSel];

	const parts: string[] = [];

	if (contrastLevel === contrastDefaults[contrastType]) {
		parts.push(`${matSel}:not([data-${contrastType}])`);
		parts.push(`${matSel}[data-${contrastType}="${contrastLevel}"]`);
	} else {
		parts.push(`${matSel}[data-${contrastType}="${contrastLevel}"]`);
	}

	if (rule.noMaterialFallback) {
		if (contrastLevel === contrastDefaults[contrastType]) {
			parts.push(`${prefix}:not([data-material]):not([data-${contrastType}])`);
		} else {
			parts.push(`${prefix}:not([data-material])[data-${contrastType}="${contrastLevel}"]`);
		}
	}

	return parts;
};

const renderProps = (
	props: ContainerContrastProps | ContentContrastProps,
	cssMap: Record<string, string>,
	palette: ColorPalette,
	indent = ""
): string =>
	Object.entries(props)
		.map(([prop, key]) => {
			const [light, dark] = palette[key as keyof ColorPalette];
			return `${indent}\t${cssMap[prop]}: light-dark(${light}, ${dark});`;
		})
		.join("\n");

const generateRulesForPalette = (
	rules: MaterialRule[],
	palette: ColorPalette,
	suffix: string,
	prefix = ""
): string => {
	let out = "";
	for (const rule of rules) {
		const parts = buildSelectorParts(rule, prefix);
		const selectors = parts
			.map((s) => `${s}${suffix}`)
			.join(",\n");
		out += `${selectors} {\n${renderProps(rule.props, rule.cssMap, palette)}\n}\n\n`;
	}
	return out;
};

// --- Generate CSS ---

let css = "@layer material, material-high-contrast;\n\n";
const defaultPalette = colors[DEFAULT_COLOR];
const defaultConfig = materials.filled;
const defaultContainer = (defaultConfig.container as Record<ContrastLevel, ContainerContrastProps>).min;
const defaultContent = (defaultConfig.content as Record<ContrastLevel, ContentContrastProps>).max;

// 1–4: Base material rules
css += "@layer material {\n\n";

// 1. Defaults for :is(:root,:host)
css += `:is(:root,:host) {\n${renderProps(defaultContainer, containerPropToCss, defaultPalette)}\n${renderProps(defaultContent, contentPropToCss, defaultPalette)}\n}\n\n`;

// 1b. data-color set but no data-material → filled/max defaults with color palette
for (const [colorName, palette] of Object.entries(colors) as [ColorName, ColorPalette][]) {
	css += `[data-color="${colorName}"]:not([data-material]) {\n${renderProps(defaultContainer, containerPropToCss, palette)}\n${renderProps(defaultContent, contentPropToCss, palette)}\n}\n\n`;
}

// 2. Material set, but no color → default palette
css += generateRulesForPalette(materialRules, defaultPalette, ":not([data-color])");

// 3. Explicit color on the material element
for (const [colorName, palette] of Object.entries(colors) as [ColorName, ColorPalette][]) {
	css += generateRulesForPalette(materialRules, palette, `[data-color="${colorName}"]`);
}

// 4. Child with data-color inside a material parent
for (const [colorName, palette] of Object.entries(colors) as [ColorName, ColorPalette][]) {
	css += generateRulesForPalette(materialRules, palette, ` [data-color="${colorName}"]:not([data-material])`);
}

css += "} /* @layer material */\n\n";

// 5. High contrast: only the overridden properties, no contrast-level qualifier

const generateAllHcCss = (selectorPrefix: string, indent = ""): string => {
	let out = "";

	const generateHcRules = (
		palette: ColorPalette,
		suffix: string
	): string => {
		let result = "";
		for (const rule of highContrastDiffRules) {
			const sel = `${indent}${selectorPrefix}[data-material="${rule.material}"]${suffix}`;
			result += `${sel} {\n${renderProps(rule.props as ContainerContrastProps | ContentContrastProps, rule.cssMap, palette, indent)}\n${indent}}\n\n`;
		}
		return result;
	};

	// Root defaults (no material/color set → filled defaults)
	const filledHcRules = highContrastDiffRules.filter((r) => r.material === "filled");
	if (filledHcRules.length > 0) {
		const hcRootProps = filledHcRules
			.flatMap((rule) =>
				Object.entries(rule.props).map(([prop, colorKey]) => {
					const [light, dark] = defaultPalette[colorKey as keyof ColorPalette];
					return `${indent}\t${rule.cssMap[prop]}: light-dark(${light}, ${dark});`;
				})
			)
			.join("\n");
		const rootSel = selectorPrefix.trimEnd() || ":is(:root,:host)";
		out += `${indent}${rootSel} {\n${hcRootProps}\n${indent}}\n\n`;

		// 1b HC: data-color set but no data-material → filled HC overrides with color palette
		for (const [colorName, palette] of Object.entries(colors) as [ColorName, ColorPalette][]) {
			const props = filledHcRules
				.flatMap((rule) =>
					Object.entries(rule.props).map(([prop, colorKey]) => {
						const [light, dark] = palette[colorKey as keyof ColorPalette];
						return `${indent}\t${rule.cssMap[prop]}: light-dark(${light}, ${dark});`;
					})
				)
				.join("\n");
			const sel = `${indent}${selectorPrefix}[data-color="${colorName}"]:not([data-material])`;
			out += `${sel} {\n${props}\n${indent}}\n\n`;
		}
	}

	out += generateHcRules(defaultPalette, ":not([data-color])");

	for (const [colorName, palette] of Object.entries(colors) as [ColorName, ColorPalette][]) {
		out += generateHcRules(palette, `[data-color="${colorName}"]`);
	}

	for (const [colorName, palette] of Object.entries(colors) as [ColorName, ColorPalette][]) {
		out += generateHcRules(palette, ` [data-color="${colorName}"]:not([data-material])`);
	}

	return out;
};

css += "@layer material-high-contrast {\n\n";

// data-contrast="more" attribute
css += generateAllHcCss(':is(:root,:host)[data-contrast="more"] ');

// @media (prefers-contrast: more) fallback
css += `@media (prefers-contrast: more) {\n${generateAllHcCss("", "\t")}}\n\n`;

css += "} /* @layer material-high-contrast */\n";

writeFileSync(new URL("../generated-colors.css", import.meta.url), css);
console.log("Generated generated-colors.css");
