/*
 * `expandTheme(input)` — turn the authored `ThemeInput` into the fully-resolved
 * `Theme` the generator consumes.
 *
 * The theme INPUT (see `../types/theme.ts`) carries, per color:
 *
 *   - `palette`: the 15 single step values `"0".."14"`. One value per step,
 *     shared by both schemes.
 *   - `origin` / `on-origin`: the per-scheme (`light` / `dark`) brand anchors.
 *
 * The GENERATOR's internal representation is a `ColorPalette`: every step and
 * named role is a `[light, dark]` pair, because `materials.ts` emits
 * `light-dark(pair[0], pair[1])`. `expandColor` bridges the two:
 *
 *   - Step `N` becomes `[palette[N], palette[14 - N]]`. There is no per-scheme
 *     palette value; the dark channel is the MIRROR step, so the dark scheme is
 *     reproduced by selecting a different step number (the generator reads the
 *     matching channel of each).
 *   - `origin-{default,hovered,pressed}` becomes
 *     `[origin.light.state, origin.dark.state]`.
 *   - `on-origin-{default,hovered,pressed}` all map to
 *     `[on-origin.light.default, on-origin.dark.default]` — the input carries a
 *     single on-origin state per scheme, and the hovered / pressed on-origin
 *     roles reuse it.
 *
 * The transparent-material steps are NOT part of the palette: opacity now lives
 * on the material role refs (see `materials-config.ts`), composed at resolve
 * time, so `expandColor` only produces the concrete palette + origin values.
 *
 * Non-color settings (`materials`, `defaultColor`, `roles`, `opacities`) are not
 * authored per color: they are the fixed built-in `defaultThemeSettings`, which
 * a consumer cannot override.
 */

import type {
	ColorIndex,
	ColorInput,
	ColorName,
	ColorPalette,
	LightDark,
	Theme,
	ThemeInput
} from '../types/theme.js';
import { defaultThemeSettings } from './materials-config.js';

/** The fifteen palette step indices `0..14`. */
const PALETTE_INDICES: readonly ColorIndex[] = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

/**
 * Build a color's full `ColorPalette` from its authored {@link ColorInput}.
 */
const expandColor = (input: ColorInput): ColorPalette => {
	const { palette, origin } = input;
	const onOrigin = input['on-origin'];

	// Steps 0..14: [palette[N], palette[14 - N]] (dark channel is the mirror).
	const steps = {} as Record<ColorIndex, LightDark>;
	for (const index of PALETTE_INDICES) {
		const mirror = (14 - index) as ColorIndex;
		steps[index] = [palette[`${index}`], palette[`${mirror}`]];
	}

	const onOriginPair: LightDark = [
		onOrigin.light.default,
		onOrigin.dark.default
	];

	return {
		...steps,
		'origin-default': [origin.light.default, origin.dark.default],
		'origin-hovered': [origin.light.hovered, origin.dark.hovered],
		'origin-pressed': [origin.light.pressed, origin.dark.pressed],
		// The input carries one on-origin state per scheme; hovered / pressed
		// reuse it (the origin material renders identical text in all states).
		'on-origin-default': onOriginPair,
		'on-origin-hovered': onOriginPair,
		'on-origin-pressed': onOriginPair
	};
};

/**
 * @public Expand a {@link ThemeInput} into the fully-resolved {@link Theme} the
 * generator consumes.
 *
 * Each color's nested `palette` / `origin` / `on-origin` input is turned into a
 * complete {@link ColorPalette} of `[light, dark]` pairs (steps mirrored, origin
 * / on-origin carried per scheme). The non-color settings are the fixed built-in
 * `defaultThemeSettings` — a consumer cannot override them.
 */
export const expandTheme = (input: ThemeInput): Theme => {
	const expandedColors = Object.fromEntries(
		Object.entries(input.colors).map(([name, colorInput]) => [
			name,
			expandColor(colorInput)
		])
	) as Record<ColorName, ColorPalette>;

	return {
		colors: expandedColors,
		materials: defaultThemeSettings.materials,
		defaultColor: defaultThemeSettings.defaultColor,
		roles: defaultThemeSettings.roles,
		opacities: defaultThemeSettings.opacities
	};
};
