/*
 * The built-in DB material definitions, expressed directly as per-role scheme
 * LEAVES.
 *
 * Each material maps its eleven roles to a leaf `{ light, dark, opacity? }`:
 *   - `light` / `dark`: a palette step `0..14` (NUMBER) or an `OriginRef` enum
 *     for the brand origin anchors.
 *   - `opacity?`: an optional `OpacityRef` composed on top via color-mix.
 *
 * The handful of leaves shared across materials (the basic on-background colors
 * and the transparent background base) are extracted as `const` variables so
 * there is a single source for each; everything else is inlined per material.
 *
 * A resolver (`resolveMaterials`) joins these definitions with a color's
 * expanded `ColorPalette` into the flat `MaterialConfig` the matrix generator
 * (`materials.ts`) consumes, so every role resolves to a `[light, dark]` value
 * pair the generator wraps in `color-mix(in srgb, light-dark(l, d)
 * <transparency>, transparent)`.
 *
 * This module is also the single home for ALL built-in DB settings a consumer
 * does NOT author per color: the material definitions, the base opacity values
 * and enums, the high-contrast overrides, and the focus / backdrop / indicator
 * / tap-highlight role anchors + default color. They are assembled into
 * `defaultThemeSettings`, which `expandTheme` applies (and a consumer cannot
 * override). The color palettes are never bundled here — a consumer always
 * supplies them via a `ThemeInput`.
 *
 * Note: the `on-background` hovered/pressed states are MISSING from the Figma
 * scheme (a confirmed omission). They are supplied here, derived from the former
 * flat config via the palette mirror rule (`{ light: idx, dark: 14 - idx }`
 * reproduces the old single-index `light-dark(palette[idx][0], palette[idx][1])`
 * output) so `--db-text-hovered` / `--db-text-pressed` stay reproducible.
 */

import type {
	ColorIndex,
	ColorPalette,
	ContainerContrastProps,
	ContentContrastProps,
	LightDark,
	MaterialConfig,
	MaterialDefinition,
	MaterialDefinitions,
	MaterialName,
	MaterialRoleRef,
	ThemeRoleAnchors,
	ThemeSettings
} from '../types/theme.js';

/*
 * ---------------------------------------------------------------------------
 * Internal settings: origin references, opacity references + their values.
 * ---------------------------------------------------------------------------
 */

/**
 * @public The known origin references a leaf's `light` / `dark` may carry
 * instead of a palette step number. Each selects a per-scheme channel of a
 * color's `origin` / `on-origin` anchors (the brand colors a palette step
 * cannot express).
 */
export enum OriginRef {
	OriginLightDefault = 'origin/light/default',
	OriginLightHovered = 'origin/light/hovered',
	OriginLightPressed = 'origin/light/pressed',
	OriginDarkDefault = 'origin/dark/default',
	OriginDarkHovered = 'origin/dark/hovered',
	OriginDarkPressed = 'origin/dark/pressed',
	OnOriginLightDefault = 'on-origin/light/default',
	OnOriginDarkDefault = 'on-origin/dark/default'
}

/**
 * @public The known opacity references a leaf may carry. `TransparentBase` is
 * the literal-zero opacity of the fully transparent material bases; the others
 * are the named Figma Scheme/Material opacities.
 */
export enum OpacityRef {
	TransparentBase = 'opacity/transparent-base',
	MaterialsEnabled = 'opacity/materials/enabled',
	MaterialsHovered = 'opacity/materials/hovered',
	MaterialsPressed = 'opacity/materials/pressed',
	Decorative = 'opacity/decorative'
}

/**
 * Internal setting: the numeric value each {@link OpacityRef} resolves to. The
 * fully transparent bases use a literal `0`; the named material/decorative
 * opacities carry the Figma Scheme values.
 */
const OPACITY_VALUES: Record<OpacityRef, number> = {
	[OpacityRef.TransparentBase]: 0,
	[OpacityRef.MaterialsEnabled]: 0.08,
	[OpacityRef.MaterialsHovered]: 0.16,
	[OpacityRef.MaterialsPressed]: 0.32,
	[OpacityRef.Decorative]: 0.4
};

/**
 * @public The named base opacity VALUES keyed by their string reference, for
 * wiring into `Theme.opacities` so a validated theme carries every named
 * opacity a consumer could reference. (The internal `transparent-base` literal
 * is omitted — it is not one of the authored named opacities.)
 */
export const OPACITY_VALUES_BY_NAME: Record<string, number> = {
	[OpacityRef.Decorative]: OPACITY_VALUES[OpacityRef.Decorative],
	[OpacityRef.MaterialsEnabled]: OPACITY_VALUES[OpacityRef.MaterialsEnabled],
	[OpacityRef.MaterialsHovered]: OPACITY_VALUES[OpacityRef.MaterialsHovered],
	[OpacityRef.MaterialsPressed]: OPACITY_VALUES[OpacityRef.MaterialsPressed]
};

/** A leaf's color reference: a palette step `0..14` or an origin anchor. */
type ColorRef = ColorIndex | OriginRef;

/**
 * @public One resolved leaf: the light/dark color references plus an optional
 * opacity. `light` / `dark` are a palette step NUMBER or an {@link OriginRef};
 * `opacity` (when present) is an {@link OpacityRef} composed on top.
 */
export type SchemeLeaf = {
	light: ColorRef;
	dark: ColorRef;
	opacity?: OpacityRef;
};

/*
 * ---------------------------------------------------------------------------
 * Shared leaves (single source, referenced by several materials).
 * ---------------------------------------------------------------------------
 */

/**
 * The basic on-background colors, shared by the filled and transparent
 * materials (and the origin material's vibrant roles).
 */
const onBg = {
	default: { light: 1, dark: 12 },
	hovered: { light: 5, dark: 9 },
	pressed: { light: 2, dark: 12 },
	vibrantVisual: { light: 7, dark: 8 },
	vibrantText: { light: 6, dark: 9 }
} as const satisfies Record<string, SchemeLeaf>;

/** The shared decorative-border base (filled + transparent materials). */
const decorativeBasic = { light: 1, dark: 13 } as const satisfies SchemeLeaf;

/**
 * The transparent background base (no opacity). The per-state opacity is applied
 * by the transparent / semi-transparent materials via each role's `opacity`.
 */
const transparentBg = { light: 6, dark: 9 } as const satisfies SchemeLeaf;

/*
 * ---------------------------------------------------------------------------
 * Material definitions.
 * ---------------------------------------------------------------------------
 */

/**
 * Build a basic-surface material definition (`filled-1/2/3`). The three levels
 * differ only in their background step pairs (level 1 -> 2 -> 3 get lighter).
 */
const filledMaterial = (bg: {
	default: SchemeLeaf;
	hovered: SchemeLeaf;
	pressed: SchemeLeaf;
}): MaterialDefinition => ({
	background: bg,
	text: {
		default: onBg.default,
		hovered: onBg.hovered,
		pressed: onBg.pressed,
		vibrant: onBg.vibrantText
	},
	visual: { vibrant: onBg.vibrantVisual },
	border: {
		default: onBg.default,
		vibrant: onBg.vibrantVisual,
		decorative: { ...decorativeBasic, opacity: OpacityRef.Decorative }
	}
});

/**
 * Build a transparent material (`transparent` / `semi-transparent`). The two
 * differ only in the DEFAULT background opacity (the hovered/pressed background
 * opacities and the text/visual/border roles are identical); every border role
 * carries `TransparentBase`.
 */
const transparentMaterial = (
	defaultBgOpacity: OpacityRef
): MaterialDefinition => ({
	background: {
		default: { ...transparentBg, opacity: defaultBgOpacity },
		hovered: { ...transparentBg, opacity: OpacityRef.MaterialsHovered },
		pressed: { ...transparentBg, opacity: OpacityRef.MaterialsPressed }
	},
	text: {
		default: onBg.default,
		hovered: onBg.hovered,
		pressed: onBg.pressed,
		vibrant: onBg.vibrantText
	},
	visual: { vibrant: onBg.vibrantVisual },
	border: {
		default: { ...onBg.default, opacity: OpacityRef.TransparentBase },
		vibrant: { ...onBg.vibrantVisual, opacity: OpacityRef.TransparentBase },
		decorative: { ...decorativeBasic, opacity: OpacityRef.TransparentBase }
	}
});

/**
 * @public The built-in DB material definitions. Each material's eleven roles are
 * resolved leaves (`{ light, dark, opacity? }`); the `disabled` and
 * `low-emphasis` roles are intentionally dropped — disabled is applied at
 * generation time via `var(--db-adaptive-transparency, 100%)`.
 */
export const materials: MaterialDefinitions = {
	'filled-1': filledMaterial({
		default: { light: 14, dark: 0 },
		hovered: { light: 12, dark: 2 },
		pressed: { light: 10, dark: 4 }
	}),
	'filled-2': filledMaterial({
		default: { light: 13, dark: 1 },
		hovered: { light: 11, dark: 3 },
		pressed: { light: 9, dark: 5 }
	}),
	'filled-3': filledMaterial({
		default: { light: 12, dark: 2 },
		hovered: { light: 10, dark: 4 },
		pressed: { light: 8, dark: 6 }
	}),
	'semi-transparent': transparentMaterial(OpacityRef.MaterialsEnabled),
	transparent: transparentMaterial(OpacityRef.TransparentBase),
	vibrant: {
		background: {
			default: { light: 9, dark: 9 },
			hovered: { light: 12, dark: 12 },
			pressed: { light: 10, dark: 10 }
		},
		text: {
			default: { light: 1, dark: 1 },
			hovered: { light: 4, dark: 4 },
			pressed: { light: 2, dark: 2 },
			vibrant: { light: 4, dark: 4 }
		},
		visual: { vibrant: { light: 5, dark: 5 } },
		border: {
			default: { light: 1, dark: 1 },
			vibrant: { light: 5, dark: 5 },
			decorative: { light: 6, dark: 9 }
		}
	},
	inverted: {
		background: {
			default: { light: 0, dark: 14 },
			hovered: { light: 2, dark: 12 },
			pressed: { light: 4, dark: 10 }
		},
		text: {
			default: { light: 14, dark: 3 },
			hovered: { light: 11, dark: 5 },
			pressed: { light: 13, dark: 2 },
			vibrant: { light: 8, dark: 6 }
		},
		visual: { vibrant: { light: 7, dark: 7 } },
		border: {
			default: { light: 14, dark: 3 },
			vibrant: { light: 7, dark: 7 },
			decorative: { light: 3, dark: 11 }
		}
	},
	origin: {
		background: {
			default: {
				light: OriginRef.OriginLightDefault,
				dark: OriginRef.OriginDarkDefault
			},
			hovered: {
				light: OriginRef.OriginLightHovered,
				dark: OriginRef.OriginDarkHovered
			},
			pressed: {
				light: OriginRef.OriginLightPressed,
				dark: OriginRef.OriginDarkPressed
			}
		},
		/*
		 * The origin material renders identical text in all states; the Figma
		 * Material dump self-refers hovered/pressed to the same on-origin anchor.
		 */
		text: {
			default: {
				light: OriginRef.OnOriginLightDefault,
				dark: OriginRef.OnOriginDarkDefault
			},
			hovered: {
				light: OriginRef.OnOriginLightDefault,
				dark: OriginRef.OnOriginDarkDefault
			},
			pressed: {
				light: OriginRef.OnOriginLightDefault,
				dark: OriginRef.OnOriginDarkDefault
			},
			vibrant: onBg.vibrantText
		},
		visual: { vibrant: onBg.vibrantVisual },
		border: {
			default: {
				light: OriginRef.OnOriginLightDefault,
				dark: OriginRef.OnOriginDarkDefault
			},
			vibrant: onBg.vibrantVisual,
			decorative: {
				light: OriginRef.OnOriginLightDefault,
				dark: OriginRef.OnOriginDarkDefault,
				opacity: OpacityRef.Decorative
			}
		}
	}
};

/*
 * ---------------------------------------------------------------------------
 * Internal setting: high-contrast (WCAG Max) overrides.
 * ---------------------------------------------------------------------------
 *
 * Index-based (the simplest form that reproduces today's high-contrast layer),
 * resolved through the palette mirror rule `{ light: idx, dark: 14 - idx }`. The
 * `border: 6` override is basic-surface only; the vibrant/decorative/text
 * overrides are shared across every material.
 */

const sharedContainerHc = {
	borderVibrant: 5,
	borderDecorative: 1
} as const;
const sharedContentHc = {
	textVibrant: 4,
	visualVibrant: 5
} as const;

/** High-contrast overrides for the basic-surface materials (adds `border: 6`). */
const basicHc = {
	container: { border: 6, ...sharedContainerHc },
	content: { ...sharedContentHc }
} as const;

/** High-contrast overrides for the non-basic materials (shared roles only). */
const nonBasicHc = {
	container: { ...sharedContainerHc },
	content: { ...sharedContentHc }
} as const;

/**
 * The high-contrast override set per material, index-based. Resolved via the
 * mirror rule in {@link resolveMaterials}.
 */
const highContrastOverrides: Record<
	MaterialName,
	{
		container: Partial<Record<keyof ContainerContrastProps, ColorIndex>>;
		content: Partial<Record<keyof ContentContrastProps, ColorIndex>>;
	}
> = {
	'filled-1': basicHc,
	'filled-2': basicHc,
	'filled-3': basicHc,
	'semi-transparent': basicHc,
	transparent: basicHc,
	vibrant: basicHc,
	inverted: nonBasicHc,
	origin: nonBasicHc
};

/*
 * ---------------------------------------------------------------------------
 * The resolver: material leaves + palette -> flat `MaterialConfig` value pairs.
 * ---------------------------------------------------------------------------
 */

/** Parse a `#RRGGBB` string into its decimal `r, g, b` channels. */
const hexToRgb = (hex: string): [number, number, number] => {
	const value = hex.replace('#', '');
	return [
		Number.parseInt(value.slice(0, 2), 16),
		Number.parseInt(value.slice(2, 4), 16),
		Number.parseInt(value.slice(4, 6), 16)
	];
};

/** Format a resolved channel as `rgba(r, g, b, a)` (opacity baked into value). */
const rgba = (hex: string, alpha: number): string => {
	const [r, g, b] = hexToRgb(hex);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/* Each origin ref -> the `[namedRole, channel]` it reads from a palette. */
const ORIGIN_REF_SOURCE: Record<OriginRef, [keyof ColorPalette, 0 | 1]> = {
	[OriginRef.OriginLightDefault]: ['origin-default', 0],
	[OriginRef.OriginLightHovered]: ['origin-hovered', 0],
	[OriginRef.OriginLightPressed]: ['origin-pressed', 0],
	[OriginRef.OriginDarkDefault]: ['origin-default', 1],
	[OriginRef.OriginDarkHovered]: ['origin-hovered', 1],
	[OriginRef.OriginDarkPressed]: ['origin-pressed', 1],
	[OriginRef.OnOriginLightDefault]: ['on-origin-default', 0],
	[OriginRef.OnOriginDarkDefault]: ['on-origin-default', 1]
};

/**
 * Resolve a single color reference (a palette step number or an origin enum) to
 * its hex value against the expanded palette. A palette step reads that step's
 * base light hex; an origin ref reads the matching channel of the named role.
 */
const resolveColorRef = (
	ref: number | string,
	palette: ColorPalette
): string => {
	if (typeof ref === 'number') {
		return palette[ref as ColorIndex][0];
	}
	const [role, channel] = ORIGIN_REF_SOURCE[ref as OriginRef];
	return palette[role][channel];
};

/** Resolve one role leaf to a `[light, dark]` value pair for a palette. */
const resolveLeaf = (
	leaf: MaterialRoleRef,
	palette: ColorPalette
): LightDark => {
	const light = resolveColorRef(leaf.light, palette);
	const dark = resolveColorRef(leaf.dark, palette);
	if (leaf.opacity === undefined) {
		return [light, dark];
	}
	const alpha = OPACITY_VALUES[leaf.opacity as OpacityRef];
	return [rgba(light, alpha), rgba(dark, alpha)];
};

/** Resolve an index-based high-contrast override via the palette mirror rule. */
const resolveHcIndex = (
	index: ColorIndex,
	palette: ColorPalette
): LightDark => {
	const mirror = (14 - index) as ColorIndex;
	return [palette[index][0], palette[mirror][0]];
};

/**
 * @public Resolve the material definitions against a color's expanded
 * {@link ColorPalette}, producing the flat {@link MaterialConfig} shape the
 * matrix generator consumes.
 *
 * Every material role is resolved to a concrete `[light, dark]` value pair
 * (opacities baked into `rgba(...)`), and the high-contrast overrides are
 * resolved via the palette mirror rule.
 */
export const resolveMaterials = (
	definitions: MaterialDefinitions,
	palette: ColorPalette
): Record<MaterialName, MaterialConfig> => {
	const resolved: Partial<Record<MaterialName, MaterialConfig>> = {};

	for (const [name, def] of Object.entries(definitions) as Array<
		[MaterialName, MaterialDefinition]
	>) {
		/*
		 * Key order matters: the generator emits container props in object
		 * insertion order, which must match the committed output
		 * (border, bg default/hovered/pressed, borderVibrant, borderDecorative).
		 */
		const container: ContainerContrastProps = {
			border: resolveLeaf(def.border.default, palette),
			bgDefault: resolveLeaf(def.background.default, palette),
			bgHovered: resolveLeaf(def.background.hovered, palette),
			bgPressed: resolveLeaf(def.background.pressed, palette),
			borderVibrant: resolveLeaf(def.border.vibrant, palette),
			borderDecorative: resolveLeaf(def.border.decorative, palette)
		};
		const content: ContentContrastProps = {
			onBgDefault: resolveLeaf(def.text.default, palette),
			onBgHovered: resolveLeaf(def.text.hovered, palette),
			onBgPressed: resolveLeaf(def.text.pressed, palette),
			textVibrant: resolveLeaf(def.text.vibrant, palette),
			visualVibrant: resolveLeaf(def.visual.vibrant, palette)
		};

		const hc = highContrastOverrides[name];
		const highContrast = {
			container: Object.fromEntries(
				Object.entries(hc.container).map(([prop, index]) => [
					prop,
					resolveHcIndex(index, palette)
				])
			) as Partial<ContainerContrastProps>,
			content: Object.fromEntries(
				Object.entries(hc.content).map(([prop, index]) => [
					prop,
					resolveHcIndex(index, palette)
				])
			) as Partial<ContentContrastProps>
		};

		resolved[name] = { container, content, highContrast };
	}

	return resolved as Record<MaterialName, MaterialConfig>;
};

/*
 * ---------------------------------------------------------------------------
 * The built-in theme settings (`defaultThemeSettings`).
 * ---------------------------------------------------------------------------
 */

/*
 * The focus / backdrop / indicator / tap-highlight anchors.
 *
 * Backdrop (dialog/drawer overlay) is a dimmed grey (grey/1) with weak/strong
 * alphas applied via color-mix. Indicator (active tab/navigation marker) is
 * brand/7. Focus outline is cyan/7. Tap-highlight is a subtle translucent cyan.
 */
const roles: ThemeRoleAnchors = {
	focusOutline: { color: 'cyan', index: 7 },
	backdrop: {
		color: 'grey',
		index: 1,
		weakAlpha: 0.32,
		strongAlpha: 0.68
	},
	indicator: { color: 'brand', index: 7 },
	tapHighlight: { color: 'cyan', index: 6, alpha: 0.08 }
};

/**
 * @public The built-in NON-color theme settings: the material definitions, the
 * focus/backdrop/indicator/tap-highlight anchors, the default color, and the
 * base opacity values. These are the DB defaults a consumer does NOT author in
 * the theme JSON and cannot override; `expandTheme` applies them to the
 * consumer's colors.
 */
export const defaultThemeSettings: ThemeSettings = {
	materials,
	defaultColor: 'grey',
	roles,
	/*
	 * The base opacity VALUES, surfaced so a validated theme is complete. The
	 * resolver bakes these alphas into the resolved `rgba(...)` values directly,
	 * so the generator does not read this map while reproducing today's output;
	 * it is supplied so an expanded `Theme` carries every named opacity.
	 */
	opacities: OPACITY_VALUES_BY_NAME
};
