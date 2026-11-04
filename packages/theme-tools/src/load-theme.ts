/*
 * Theme loading and validation.
 *
 * `loadTheme(path)` reads a theme JSON from disk, parses it, validates it as a
 * Style Dictionary (DTCG) token file, converts it to the generator's per-color
 * {@link ColorInput} shape, and returns the expanded {@link Theme} the
 * generator consumes (via `expandTheme`).
 *
 * INPUT FORMAT — Style Dictionary / DTCG tokens (`theme.tokens.json`):
 *
 *   {
 *     "db": {
 *       "blue": {
 *         "0":  { "$type": "color", "$value": "#010d29" }, ... "14": { ... },
 *         "origin": {
 *           "base":  { "$type": "color", "$value": "#1455c0" },
 *           "light": { "default": {...}, "hovered": {...}, "pressed": {...} },
 *           "dark":  { "default": {...}, "hovered": {...}, "pressed": {...} }
 *         },
 *         "on": { "origin": { "light": { "default": {...} }, "dark": { ... } } }
 *       }
 *     }
 *   }
 *
 * Conversion rules (confirmed product decisions):
 *   - Colors live under the fixed `db` prefix. The 15 palette steps `0..14`,
 *     `origin.{light,dark}.{default,hovered,pressed}`, and
 *     `on.origin.{light,dark}.default` become a {@link ColorInput}.
 *   - `neutral` is mapped to `grey` (the generator baseline color).
 *   - ALIAS tokens — whose `$value` is a Style Dictionary reference like
 *     `"{db.blue.0}"` — are SKIPPED (the semantic colors informational /
 *     successful / warning / critical duplicate a base color).
 *   - NON-COLOR tokens (`border` radii, `font` families) and `origin.base` are
 *     IGNORED.
 *
 * The loader never returns a partial theme: any failure rejects with a
 * {@link ThemeValidationError} naming the offending color and the missing /
 * malformed key, so an incomplete input is reported at its source rather than
 * surfacing as an empty `color-mix()` deep in the generated CSS.
 */

import { readFile } from 'node:fs/promises';

import { expandTheme } from './generate/expand-theme.js';
import { ThemeValidationError } from './types/generate.js';
import type {
	ColorInput,
	ColorName,
	OriginStates,
	Theme
} from './types/theme.js';

/** The fixed top-level prefix the colors live under in the token file. */
const DB_PREFIX = 'db';

/** The token key mapped onto the generator's baseline `grey` color. */
const NEUTRAL_KEY = 'neutral';
const GREY_KEY = 'grey';

/** The fifteen palette steps `0..14` every color must supply. */
const PALETTE_STEPS: readonly string[] = Array.from(
	{ length: 15 },
	(_, index) => `${index}`
);

/** The origin states every color must supply per scheme. */
const ORIGIN_STATES: ReadonlyArray<keyof OriginStates> = [
	'default',
	'hovered',
	'pressed'
];

const isRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Read a DTCG token leaf's concrete string `$value`, or `undefined` when the
 * leaf is absent, malformed, or an unresolved Style Dictionary reference
 * (a `"{db.x.y}"` string). References are treated as "not a concrete value" so
 * ALIAS colors (whose every leaf is a reference) are detected and skipped.
 */
const tokenValue = (leaf: unknown): string | undefined => {
	if (!isRecord(leaf)) {
		return undefined;
	}
	const value = leaf.$value;
	if (typeof value !== 'string') {
		return undefined;
	}
	// A `{db.blue.0}`-style reference is not a concrete value.
	if (value.startsWith('{') && value.endsWith('}')) {
		return undefined;
	}
	return value;
};

/**
 * True when a token entry is an ALIAS color — its palette step `0` resolves to
 * a reference rather than a concrete value. Such colors (informational,
 * successful, warning, critical) duplicate a base color and are skipped.
 */
const isAliasColor = (entry: Record<string, unknown>): boolean => {
	const step0 = entry['0'];
	return (
		isRecord(step0) &&
		typeof step0.$value === 'string' &&
		step0.$value.startsWith('{')
	);
};

/**
 * True when a token entry is a color (carries a palette step `0` leaf at all),
 * as opposed to the non-color groups (`border` radii, `font` families) that
 * have no numeric steps.
 */
const isColorEntry = (entry: Record<string, unknown>): boolean =>
	isRecord(entry['0']);

/**
 * Convert one DTCG color entry into a {@link ColorInput}, collecting every
 * problem. Returns `{ input }` when valid or `{ messages }` when not.
 */
const convertColor = (
	colorName: string,
	entry: Record<string, unknown>
): { input?: ColorInput; messages: string[] } => {
	const messages: string[] = [];

	// Palette: 15 steps, each a concrete color token.
	const palette = {} as ColorInput['palette'];
	for (const step of PALETTE_STEPS) {
		const value = tokenValue(entry[step]);
		if (value === undefined) {
			messages.push(
				`color "${colorName}" palette step "${step}" is missing or not a concrete color.`
			);
		} else {
			palette[step as keyof ColorInput['palette']] = value;
		}
	}

	// Origin: { light, dark } each with default/hovered/pressed.
	const originOut = { light: {}, dark: {} } as {
		light: OriginStates;
		dark: OriginStates;
	};
	const { origin } = entry;
	if (isRecord(origin)) {
		for (const scheme of ['light', 'dark'] as const) {
			const states = origin[scheme];
			if (isRecord(states)) {
				for (const state of ORIGIN_STATES) {
					const value = tokenValue(states[state]);
					if (value === undefined) {
						messages.push(
							`color "${colorName}" origin.${scheme}.${state} is missing or not a concrete color.`
						);
					} else {
						originOut[scheme][state] = value;
					}
				}
			} else {
				messages.push(
					`color "${colorName}" origin is missing the "${scheme}" scheme.`
				);
			}
		}
	} else {
		messages.push(`color "${colorName}" is missing an "origin" map.`);
	}

	// On-origin: `on.origin.{light,dark}.default`.
	const onOut = { light: { default: '' }, dark: { default: '' } };
	const { on } = entry;
	const onOrigin = isRecord(on) ? on.origin : undefined;
	if (isRecord(onOrigin)) {
		for (const scheme of ['light', 'dark'] as const) {
			const states = onOrigin[scheme];
			const value = isRecord(states)
				? tokenValue(states.default)
				: undefined;
			if (value === undefined) {
				messages.push(
					`color "${colorName}" on.origin.${scheme}.default is missing or not a concrete color.`
				);
			} else {
				onOut[scheme].default = value;
			}
		}
	} else {
		messages.push(`color "${colorName}" is missing an "on.origin" map.`);
	}

	if (messages.length > 0) {
		return { messages };
	}

	return {
		input: { palette, origin: originOut, 'on-origin': onOut },
		messages
	};
};

/**
 * Convert the parsed Style Dictionary token file into the per-color
 * {@link ColorInput} map `expandTheme` consumes. Applies the skip/map/ignore
 * rules; collects every per-color problem into one error. Throws on structural
 * failure (not an object, missing `db`, no colors after filtering).
 */
const convertTokens = (data: unknown): Record<ColorName, ColorInput> => {
	if (!isRecord(data)) {
		throw new ThemeValidationError('Theme is not a valid object.');
	}

	const db = data[DB_PREFIX];
	if (!isRecord(db)) {
		throw new ThemeValidationError(
			`Theme is missing the required "${DB_PREFIX}" token group.`
		);
	}

	const colors = {} as Record<string, ColorInput>;
	const problems: string[] = [];

	for (const [rawName, entry] of Object.entries(db)) {
		if (!isRecord(entry)) {
			continue;
		}
		// Ignore non-color groups (border radii, font families, ...).
		if (!isColorEntry(entry)) {
			continue;
		}
		// Skip alias colors (informational / successful / warning / critical).
		if (isAliasColor(entry)) {
			continue;
		}

		// `neutral` is the token name for the generator's baseline `grey`.
		const name = rawName === NEUTRAL_KEY ? GREY_KEY : rawName;

		const { input, messages } = convertColor(name, entry);
		problems.push(...messages);
		if (input) {
			colors[name] = input;
		}
	}

	if (problems.length > 0) {
		throw new ThemeValidationError(problems.join('\n'));
	}

	if (Object.keys(colors).length === 0) {
		throw new ThemeValidationError(
			`Theme defines no concrete colors under "${DB_PREFIX}".`
		);
	}

	return colors;
};

/**
 * @public Load and validate a Style Dictionary (DTCG) theme token file from
 * disk, returning the expanded {@link Theme} the generator consumes.
 *
 * The file carries colors under the fixed `db` prefix (`theme.tokens.json`).
 * Alias colors (reference `$value`s) and non-color groups are skipped, `neutral`
 * is mapped to `grey`. Rejects with a {@link ThemeValidationError} when the file
 * cannot be read, does not parse as JSON, is missing the `db` group, defines no
 * concrete colors, or any color is missing / malforms its palette steps,
 * `origin`, or `on.origin`. A partial theme is never returned.
 */
export const loadTheme = async (path: string): Promise<Theme> => {
	let contents: string;
	try {
		contents = await readFile(path, 'utf8');
	} catch (error) {
		throw new ThemeValidationError(
			`Theme file could not be read: "${path}".`,
			{ cause: error }
		);
	}

	let data: unknown;
	try {
		data = JSON.parse(contents);
	} catch (error) {
		throw new ThemeValidationError(
			`Theme file "${path}" is not valid JSON.`,
			{ cause: error }
		);
	}

	const colors = convertTokens(data);
	return expandTheme({ colors });
};
