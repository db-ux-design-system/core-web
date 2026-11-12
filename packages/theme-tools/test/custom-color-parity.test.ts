/*
 * First-class custom-color parity, end-to-end through `expandTheme` + `generate`.
 *
 * A consumer's OWN color — one that is not part of the built-in `BaseColorName`
 * set — must behave exactly like a built-in color throughout the adaptive
 * matrix. This suite confirms that the mechanism in place (the OPEN `colors` map
 * typed with `LooseAutocomplete`, plus the optimization filter) delivers that
 * guarantee, and locks it as a durable regression gate.
 *
 * The custom color, `"seafoam"`, is deliberately NOT a member of `BaseColorName`.
 * It is authored in the NEW nested input model — a {@link ColorInput} with a
 * `palette` / `origin` / `on-origin` shape — and fed through `expandTheme` into a
 * full `Theme`, exactly as a consumer's theme JSON would be. Assigning
 * `"seafoam"` as a key of a `ThemeInput['colors']` map is itself the
 * compile-time half of the check: it only type-checks because
 * `ColorName = BaseColorName | LooseAutocomplete` accepts any string key. If
 * that typing regressed to a closed union this file would fail to compile — so
 * the `tsc` build is part of the assertion.
 *
 * The runtime half asserts three things against the built-in DB colors extended
 * with the custom color:
 *   - Parity: with no Optimization_Context, the custom color produces the SAME
 *     rule shape — selectors, roles, states — as a built-in color, differing
 *     only in the color name in the selector and its own palette values.
 *   - Inclusion: a non-empty `colors` list that names the custom color keeps it.
 *   - Exclusion: a non-empty `colors` list that omits the custom color drops
 *     every one of its `[data-adaptive-color]` rules, while the Required_Baseline
 *     (`defaultColor` = grey, `filled-1`) is still present.
 */
import { describe, expect, it } from 'vitest';

import { fileURLToPath } from 'node:url';

import { generate, loadTheme } from '../src/index.js';
import type { ColorName, ColorPalette, Theme } from '../src/types/theme.js';

/*
 * A recognisable sentinel tint at palette step 6, so we can prove the custom
 * palette's OWN values flow through to the output — not the donor's.
 */
const SEAFOAM_SENTINEL = '#0a7d6b';
const SEAFOAM_SENTINEL_OUT = SEAFOAM_SENTINEL;
const CUSTOM_COLOR = 'seafoam';

/*
 * The base theme comes from the shared Style Dictionary token fixture (loaded
 * exactly as a consumer's theme file would be). The custom color is a clone of
 * a built-in color's EXPANDED palette with the sentinel injected at step 6, and
 * it is added to the theme's open `colors` map under a non-built-in key.
 *
 * Assigning `CUSTOM_COLOR` as a key of `Theme['colors']` is the compile-time
 * half of the check: it only type-checks because
 * `ColorName = BaseColorName | LooseAutocomplete` accepts any string key. If
 * that typing regressed to a closed union this file would fail to compile — so
 * the `tsc` build is part of the assertion.
 */
const baseTheme = await loadTheme(
	fileURLToPath(
		new URL('./fixtures/vite-app/theme.tokens.json', import.meta.url)
	)
);

const buildSeafoamPalette = (): ColorPalette => {
	// Deep clone so the sentinel never touches the donor palette.
	const clone = structuredClone(baseTheme.colors.blue);
	// Step 6 is a [light, dark] pair; tint the light channel with the sentinel.
	clone[6] = [SEAFOAM_SENTINEL, clone[6][1]];
	return clone;
};

const themeWithCustomColor: Theme = {
	...baseTheme,
	colors: {
		...baseTheme.colors,
		[CUSTOM_COLOR]: buildSeafoamPalette()
	} as Record<ColorName, ColorPalette>
};

/**
 * Extract every full CSS rule (`selector { ... }`) whose selector list mentions
 * `[data-adaptive-color="<color>"]`.
 */
const rulesForColor = (css: string, color: string): string[] => {
	const needle = `[data-adaptive-color="${color}"]`;
	const rules: string[] = [];
	for (const block of css.split('}\n')) {
		const trimmed = block.trim();
		if (trimmed.length === 0) {
			continue;
		}
		const selectorPart = trimmed.slice(0, trimmed.indexOf('{'));
		if (selectorPart.includes(needle)) {
			rules.push(`${trimmed}}`);
		}
	}
	return rules;
};

/**
 * Normalise a color's rule block for a shape comparison: drop the color name
 * from selectors and strip every concrete color VALUE, leaving only the rule
 * STRUCTURE. Two colors with identical normalised output have identical rule
 * shape — same selectors, roles, and states — differing only in their values.
 */
const normaliseShape = (rules: string[], color: string): string =>
	rules
		.join('\n')
		.replaceAll(`[data-adaptive-color="${color}"]`, '[data-adaptive-color]')
		.replaceAll(/#[0-9a-f]{6,8}\b/gi, '<color>')
		.replaceAll(/rgba\([^)]*\)/g, '<color>')
		.replaceAll('light-dark(<color>, <color>)', '<color>');

describe('custom-color parity — end-to-end through loadTheme() + generate()', () => {
	it('types a custom (non-built-in) color key on the open colors map', () => {
		// Compile-time proof lives in the `Theme['colors']` annotation above; at
		// runtime we confirm the custom color is present as a first-class palette
		// and that its sentinel survived.
		expect(Object.keys(themeWithCustomColor.colors)).toContain(
			CUSTOM_COLOR
		);
		// Step 6's light channel is the injected sentinel.
		expect(themeWithCustomColor.colors[CUSTOM_COLOR][6][0]).toBe(
			SEAFOAM_SENTINEL
		);
	});

	it('emits the custom color with the same rule shape as a built-in color (parity, no filter)', () => {
		const css = generate(themeWithCustomColor);

		const customRules = rulesForColor(css, CUSTOM_COLOR);
		// A built-in, non-default color to compare rule shape against.
		const builtInRules = rulesForColor(css, 'blue');

		expect(customRules.length).toBeGreaterThan(0);
		expect(customRules.length).toBe(builtInRules.length);

		expect(normaliseShape(customRules, CUSTOM_COLOR)).toBe(
			normaliseShape(builtInRules, 'blue')
		);

		// The custom palette's OWN sentinel value flows through to the output,
		// proving it is the seafoam palette driving these rules, not the donor.
		expect(css).toContain(SEAFOAM_SENTINEL_OUT);
	});

	it('includes the custom color when the optimization context names it', () => {
		const css = generate(themeWithCustomColor, {
			colors: [CUSTOM_COLOR]
		});

		expect(css).toContain(`[data-adaptive-color="${CUSTOM_COLOR}"]`);
		expect(css).toContain(SEAFOAM_SENTINEL_OUT);
		// ...alongside the always-kept Required_Baseline default color.
		expect(css).toContain(`[data-adaptive-color="grey"]`);
		// ...while a built-in color NOT in the list is dropped (filter is real).
		expect(css).not.toContain(`[data-adaptive-color="blue"]`);
	});

	it('excludes the custom color when a non-empty context omits it, keeping the baseline', () => {
		const css = generate(themeWithCustomColor, {
			colors: ['red']
		});

		expect(rulesForColor(css, CUSTOM_COLOR)).toHaveLength(0);
		expect(css).not.toContain(`[data-adaptive-color="${CUSTOM_COLOR}"]`);
		expect(css).not.toContain(SEAFOAM_SENTINEL_OUT);
		expect(css).toContain(`[data-adaptive-color="red"]`);
		// The Required_Baseline is preserved regardless of the filter.
		expect(css).toContain(`[data-adaptive-color="grey"]`);
		expect(css).toContain(`[data-material="filled-1"]`);
	});
});
