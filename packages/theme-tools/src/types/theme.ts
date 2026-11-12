/*
 * Core data-model types for the theme input (Data Model 1 + Model 2 of the
 * core-theme-tools design).
 *
 * `theme.json` carries color VALUES only — the fifteen palette steps, the
 * origin / on-origin colors, the focus/backdrop/indicator role anchors, and the
 * base opacity values.
 *
 * The palette, color-index, light/dark, material-name and material-config
 * shapes are the ones the refactored `generate-css/materials/*` sources use, so
 * they are modelled identically here — a refactor can later import these types
 * in place of the module-local ones without any shape drift.
 */

/*
 * These two generic helpers are intentionally inlined here (identical to the
 * copies in `@db-ux/core-foundations`) instead of imported from
 * `@db-ux/core-foundations`. theme-tools is built BEFORE foundations in the
 * monorepo (foundations' theme-CSS generation depends on theme-tools' build
 * output), so a build-time type import from foundations would create a circular
 * build order. They are tiny, stable type aliases, so duplicating them is
 * cheaper than coupling the two package builds.
 */

/**
 * Provide default values for a string literal type but allow any other string
 * as well.
 * @example type Keys = "DEFAULT" | LooseAutocomplete
 */
type LooseAutocomplete = string & Record<never, never>;

/**
 * Assign property types from right to left. Think `Object.assign` for types.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
type Assign<Target, Source> = Omit<Target, keyof Source> & Source;

/**
 * @public A `[light, dark]` value pair. Reused from
 * `generate-css/materials/color.ts`.
 */
export type LightDark = [string, string];

/** @public Palette index `0..14` (fifteen adaptive steps). */
export type ColorIndex =
	0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

/**
 * @public A full adaptive palette of VALUES for one color: the fifteen steps
 * `0..14` as `[light, dark]` pairs plus the twelve named roles the `origin` /
 * `on-origin` / transparent references resolve against.
 */
export type ColorPalette = Record<ColorIndex, LightDark> & {
	'origin-default': LightDark;
	'origin-hovered': LightDark;
	'origin-pressed': LightDark;
	'on-origin-default': LightDark;
	'on-origin-hovered': LightDark;
	'on-origin-pressed': LightDark;
};

/**
 * @public The three interaction states an `origin` layer carries per scheme.
 */
export type OriginStates = {
	default: string;
	hovered: string;
	pressed: string;
};

/**
 * @public The single `default` state the `on-origin` layer carries per scheme.
 */
export type OnOriginState = {
	default: string;
};

/**
 * @public The per-color input a consumer authors in the theme JSON, matching
 * the Deutsche Bahn Figma three-layer Palette -> Scheme -> Material model.
 *
 * - `palette`: the fifteen adaptive steps `"0".."14"`, a SINGLE value per step.
 *   The same `palette[N]` value is used in BOTH schemes; the light/dark
 *   difference comes entirely from the Scheme layer selecting different step
 *   numbers per scheme (there is no mirroring in the input).
 * - `origin`: the brand origin anchors, per scheme (`light` / `dark`), each with
 *   `default` / `hovered` / `pressed` states.
 * - `on-origin`: the on-origin color, per scheme, `default` only.
 * - `origin-base` (optional): provenance only — accepted and IGNORED (it emits
 *   nothing).
 */
export type ColorInput = {
	palette: Record<`${ColorIndex}`, string>;
	origin: {
		light: OriginStates;
		dark: OriginStates;
	};
	'on-origin': {
		light: OnOriginState;
		dark: OnOriginState;
	};
	'origin-base'?: unknown;
};

/**
 * @public Built-in material names. Reused from
 * `generate-css/materials/material.ts`.
 */
export type MaterialName =
	| 'filled-1'
	| 'filled-2'
	| 'filled-3'
	| 'vibrant'
	| 'origin'
	| 'inverted'
	| 'semi-transparent'
	| 'transparent';

/**
 * The built-in adaptive color names, mirroring `ColorList` in
 * `packages/components/src/shared/model.ts`.
 */
const BuiltInColorList = [
	'grey',
	'red',
	'brand',
	'green',
	'yellow',
	'orange',
	'burgundy',
	'pink',
	'violet',
	'blue',
	'cyan',
	'turquoise'
] as const;

/** @public The built-in adaptive color names. */
export type BaseColorName = (typeof BuiltInColorList)[number];

/**
 * @public Empty by design: a theme or consuming app augments this interface
 * with its own custom color names so they autocomplete as a `ColorName`.
 * Mirrors `OverwriteColors` in `packages/components/src/shared/model.ts`.
 */
export interface OverwriteColors {}

type InternalColors = Assign<
	{
		types: BaseColorName | LooseAutocomplete;
	},
	OverwriteColors
>;

/**
 * @public A color key of the theme's open `colors` map. The built-in
 * `BaseColorName` names autocomplete, while any custom color string (from a
 * consumer's theme) is still accepted via `LooseAutocomplete` — reusing the
 * pattern already implemented in `packages/components/src/shared/model.ts`
 * (Data Model 2), so a custom color behaves exactly like a built-in one.
 */
export type ColorName = InternalColors['types'];

/**
 * @public The container-side roles a material fills (background, border). After
 * the Scheme/Material resolver runs, each role holds the concrete `[light,
 * dark]` value pair the generator emits as `light-dark(l, d)`.
 */
export type ContainerContrastProps = {
	border: LightDark;
	borderVibrant: LightDark;
	borderDecorative: LightDark;
	bgDefault: LightDark;
	bgHovered: LightDark;
	bgPressed: LightDark;
};

/**
 * @public The content-side roles a material fills (text, visual). After the
 * Scheme/Material resolver runs, each role holds the concrete `[light, dark]`
 * value pair the generator emits as `light-dark(l, d)`.
 */
export type ContentContrastProps = {
	onBgDefault: LightDark;
	onBgHovered: LightDark;
	onBgPressed: LightDark;
	textVibrant: LightDark;
	visualVibrant: LightDark;
};

/**
 * @public One material's RESOLVED role values plus its optional high-contrast
 * (WCAG Max) overrides. Produced by `resolveMaterials` from the nested
 * Scheme/Material model against one color's `ColorPalette`; the matrix
 * generator consumes it directly.
 */
export type MaterialConfig = {
	container: ContainerContrastProps;
	content: ContentContrastProps;
	highContrast?: Partial<{
		container: Partial<ContainerContrastProps>;
		content: Partial<ContentContrastProps>;
	}>;
};

/**
 * @public A single Material role's UNRESOLVED value: a leaf of light/dark color
 * references plus an optional opacity. `light` / `dark` are a palette step
 * number (`0..14`) or an origin-reference string; `opacity` is an
 * opacity-reference string. The precise enum-typed authoring shape lives in
 * `generate/materials-config.ts` (`SchemeLeaf`), which structurally satisfies
 * this type.
 */
export type MaterialRoleRef = {
	light: number | string;
	dark: number | string;
	opacity?: string;
};

/**
 * @public One material's UNRESOLVED definition: the eleven roles, each a
 * {@link MaterialRoleRef}. `resolveMaterials` joins this with a color's
 * `ColorPalette` to produce a resolved {@link MaterialConfig}.
 */
export type MaterialDefinition = {
	background: {
		default: MaterialRoleRef;
		hovered: MaterialRoleRef;
		pressed: MaterialRoleRef;
	};
	text: {
		default: MaterialRoleRef;
		hovered: MaterialRoleRef;
		pressed: MaterialRoleRef;
		vibrant: MaterialRoleRef;
	};
	visual: { vibrant: MaterialRoleRef };
	border: {
		default: MaterialRoleRef;
		vibrant: MaterialRoleRef;
		decorative: MaterialRoleRef;
	};
};

/**
 * @public The Material layer: one {@link MaterialDefinition} per built-in
 * material name. This is the nested, reference-based model a `Theme` carries
 * (the resolved values are produced per-color at generation time).
 */
export type MaterialDefinitions = Record<MaterialName, MaterialDefinition>;

/**
 * @public A color/index anchor for a single-purpose role (focus, indicator),
 * resolved against the matching `ColorPalette` step. Mirrors today's
 * `FOCUS_OUTLINE_COLOR` / `INDICATOR_COLOR` in
 * `generate-css/materials/color.ts`.
 */
export type ThemeRoleAnchor = {
	color: ColorName;
	index: ColorIndex;
};

/**
 * @public The backdrop (dialog/drawer overlay) anchor: a base color/index plus
 * the weak and strong alpha values the overlay mixes toward transparent.
 * Mirrors today's `BACKDROP_COLOR` in `generate-css/materials/color.ts`.
 */
export type BackdropRoleAnchor = ThemeRoleAnchor & {
	weakAlpha: number;
	strongAlpha: number;
};

/**
 * @public The tap-highlight anchor: a base color/index plus the alpha the
 * `-webkit-tap-highlight-color` mixes toward transparent. Resolves against
 * `palette[index]` (so the dark channel is the mirror step).
 */
export type TapHighlightRoleAnchor = ThemeRoleAnchor & {
	alpha: number;
};

/**
 * @public The focus / backdrop / indicator anchors the generator reads for the
 * document-level role tokens (today's `FOCUS_OUTLINE_COLOR`, `BACKDROP_COLOR`,
 * `INDICATOR_COLOR`).
 */
export type ThemeRoleAnchors = {
	focusOutline: ThemeRoleAnchor;
	backdrop: BackdropRoleAnchor;
	indicator: ThemeRoleAnchor;
	tapHighlight: TapHighlightRoleAnchor;
};

/**
 * @public The fully-resolved theme the generator consumes, produced by
 * `expandTheme` from a `ThemeInput`. Every color is a complete `ColorPalette`
 * of `[light, dark]` pairs.
 */
export interface Theme {
	/**
	 * Open map: built-in color names + any custom color key, each supplying a
	 * full `ColorPalette`.
	 */
	colors: Record<ColorName, ColorPalette>;
	/**
	 * The nested Scheme/Material definitions (reference-based). The generator
	 * resolves them per-color against each `ColorPalette`.
	 */
	materials: MaterialDefinitions;
	/** Which color is the default (today: `"grey"`). */
	defaultColor: ColorName;
	/** Focus / backdrop / indicator anchors. */
	roles: ThemeRoleAnchors;
	/**
	 * Base opacity VALUES the composed (transparent-material) material roles
	 * reference by name, e.g. `"opacity/decorative"`,
	 * `"opacity/materials/enabled"`.
	 */
	opacities: Record<string, number>;
}

/**
 * The non-color theme settings: everything a `Theme` carries except the color
 * palettes (materials, focus/backdrop/indicator anchors, the default color, and
 * the base opacities). These are built-in DB values a consumer does NOT author
 * and cannot override — they are supplied internally by `defaultThemeSettings`.
 */
export type ThemeSettings = {
	materials: MaterialDefinitions;
	defaultColor: ColorName;
	roles: ThemeRoleAnchors;
	opacities: Record<string, number>;
};

/**
 * @public The theme input a consumer authors: an open `colors` map of
 * {@link ColorInput} palettes (the nested `palette` / `origin` / `on-origin`
 * form). A consumer can add any custom color key (e.g. `"ocean"`) alongside the
 * built-in ones. The non-color settings are NOT part of the input — they are
 * fixed built-ins. `expandTheme` turns this into the full {@link Theme} the
 * generator consumes.
 */
export type ThemeInput = {
	colors: Record<ColorName, ColorInput>;
};

/**
 * @public The required baseline — the color and material optimization never
 * drops: the theme's `defaultColor` (today `"grey"`) plus the `filled-1`
 * material.
 */
export const requiredBaseline: {
	color: ColorName;
	material: MaterialName;
} = {
	color: 'grey',
	material: 'filled-1'
};
