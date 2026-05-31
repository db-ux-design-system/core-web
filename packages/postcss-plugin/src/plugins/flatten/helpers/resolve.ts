import { findCssFunction, findTopLevelComma } from './css-parser.js';

// ── var() ───────────────────────────────────────────────────────────────

/**
 * Find the next `var(` occurrence and parse it into name and optional fallback.
 * @param value - The CSS value string to search
 * @param fromIndex - The index to start searching from
 * @returns The parsed var reference, or null if not found
 */
const findNextVar = (
	value: string,
	fromIndex: number
): {
	start: number;
	end: number;
	name: string;
	fallback: string | null;
} | null => {
	const found = findCssFunction(value, 'var', fromIndex);
	if (!found) return null;

	const commaIdx = findTopLevelComma(found.inner);

	if (commaIdx === -1) {
		return {
			start: found.start,
			end: found.end,
			name: found.inner.trim(),
			fallback: null
		};
	}

	return {
		start: found.start,
		end: found.end,
		name: found.inner.slice(0, commaIdx).trim(),
		fallback: found.inner.slice(commaIdx + 1).trim()
	};
};

/**
 * Recursively resolve `var()` references in a CSS value string.
 * Uses a `seen` set per resolution chain to prevent circular references.
 * If a var is known, it replaces the entire `var(...)` with the resolved value.
 * If unknown but has a fallback, it resolves vars inside the fallback.
 * @param value - The CSS value string containing `var()` references
 * @param varMap - Map of variable names to their resolved values
 * @param seen - Set of variable names already visited in the current chain
 * @returns The value with all resolvable `var()` references inlined
 */
export const resolveVars = (
	value: string,
	varMap: Map<string, string>,
	seen: Set<string> = new Set()
): string => {
	let result = value;
	let searchFrom = 0;

	while (searchFrom < result.length) {
		const found = findNextVar(result, searchFrom);
		if (!found) break;

		const { start, end, name, fallback } = found;

		if (seen.has(name)) {
			searchFrom = end;
			continue;
		}

		const resolved = varMap.get(name);
		if (resolved !== undefined) {
			const childSeen = new Set(seen);
			childSeen.add(name);
			const resolvedValue = resolveVars(resolved, varMap, childSeen);
			result = result.slice(0, start) + resolvedValue + result.slice(end);
			searchFrom = start + resolvedValue.length;
		} else if (fallback !== null) {
			const resolvedFallback = resolveVars(fallback, varMap, seen);
			const replacement = `var(${name}, ${resolvedFallback})`;
			result = result.slice(0, start) + replacement + result.slice(end);
			searchFrom = start + replacement.length;
		} else {
			searchFrom = end;
		}
	}

	return result;
};

/**
 * Collect all CSS variable names referenced in a value, including
 * names inside nested `var()` fallbacks.
 * @param value - The CSS value string to scan
 * @param refs - Set to add discovered variable names to
 */
export const collectVarReferences = (
	value: string,
	refs: Set<string>
): void => {
	let searchFrom = 0;
	while (searchFrom < value.length) {
		const found = findNextVar(value, searchFrom);
		if (!found) break;
		refs.add(found.name);
		if (found.fallback) {
			collectVarReferences(found.fallback, refs);
		}
		searchFrom = found.end;
	}
};

// ── Generic CSS function resolver ───────────────────────────────────────

/**
 * Find and evaluate all occurrences of a CSS function in a value string.
 * Skips occurrences that still contain unresolved `var()` references.
 * @param value - The CSS value string to process
 * @param funcName - The CSS function name to match (e.g. "calc", "color-mix")
 * @param evaluate - Callback that receives the inner content and returns the
 *                   evaluated result, or null to skip
 * @param skipNestedFunctions - If true, skip when inner content contains other CSS functions
 * @returns The value with all evaluable occurrences replaced
 */
const resolveCssFunction = (
	value: string,
	funcName: string,
	evaluate: (inner: string) => string | null,
	skipNestedFunctions = false
): string => {
	let result = value;
	let searchFrom = 0;

	while (searchFrom < result.length) {
		const found = findCssFunction(result, funcName, searchFrom);
		if (!found) break;

		if (found.inner.includes('var(')) {
			searchFrom = found.end;
			continue;
		}
		if (skipNestedFunctions && /[a-z-]+\(/i.test(found.inner)) {
			searchFrom = found.end;
			continue;
		}

		const evaluated = evaluate(found.inner);
		if (evaluated !== null) {
			result =
				result.slice(0, found.start) +
				evaluated +
				result.slice(found.end);
			searchFrom = found.start + evaluated.length;
		} else {
			searchFrom = found.end;
		}
	}

	return result;
};

// ── calc() ──────────────────────────────────────────────────────────────

/**
 * Parse a CSS unit value like "0.75rem" into its numeric value and unit.
 * @param str - The string to parse (e.g. "0.75rem", "100%", "2")
 * @returns An object with `value` and `unit`, or null if not parseable
 */
const parseUnit = (str: string): { value: number; unit: string } | null => {
	const match = str.trim().match(/^(-?[\d.]+)\s*(%|[a-z]*)$/i);
	if (!match) return null;
	return { value: Number.parseFloat(match[1]), unit: match[2] || '' };
};

/**
 * Evaluate a simple `calc()` expression with static values.
 * Supports `+`, `-`, `*`, `/` with a single unit type (e.g. `calc(2 * 0.75rem)`).
 * @param expr - The inner content of a `calc()` expression
 * @returns The evaluated result as a string (e.g. "1.5rem"), or null if not evaluable
 */
const evaluateCalc = (expr: string): string | null => {
	const tokens = expr.trim().split(/\s+/).filter(Boolean);
	if (tokens.length === 0) return null;

	let result = 0;
	let resultUnit = '';
	let operator = '+';

	for (const token of tokens) {
		if (['+', '-', '*', '/'].includes(token)) {
			operator = token;
			continue;
		}

		const parsed = parseUnit(token);
		if (!parsed) return null;

		if (parsed.unit && !resultUnit) {
			resultUnit = parsed.unit;
		} else if (parsed.unit && parsed.unit !== resultUnit && resultUnit) {
			return null;
		}

		switch (operator) {
			case '+':
				result += parsed.value;
				break;
			case '-':
				result -= parsed.value;
				break;
			case '*':
				result *= parsed.value;
				break;
			case '/':
				if (parsed.value === 0) return null;
				result /= parsed.value;
				break;
		}
	}

	const rounded =
		Math.abs(result) < 1e-10 ? 0 : Math.round(result * 1e6) / 1e6;
	return `${rounded}${resultUnit}`;
};

/**
 * Resolve all fully-static `calc()` expressions in a CSS value.
 * Skips expressions that still contain unresolved `var()` or nested CSS functions.
 * @param value - The CSS value string potentially containing `calc()` expressions
 * @returns The value with all evaluable `calc()` expressions replaced
 */
export const resolveCalc = (value: string): string =>
	resolveCssFunction(value, 'calc', evaluateCalc, true);

// ── color-mix() ─────────────────────────────────────────────────────────

/**
 * Parse a hex color string to an RGBA tuple.
 * Supports `#rgb`, `#rrggbb`, `#rgba`, and `#rrggbbaa`.
 * @param hex - The hex color string
 * @returns An [r, g, b, a] tuple (0-255 for rgb, 0-1 for alpha), or null if not parseable
 */
const parseHexColor = (
	hex: string
): [number, number, number, number] | null => {
	const h = hex.replace('#', '');
	let r: number, g: number, b: number;
	let a = 1;
	if (h.length === 3) {
		r = Number.parseInt(h[0] + h[0], 16);
		g = Number.parseInt(h[1] + h[1], 16);
		b = Number.parseInt(h[2] + h[2], 16);
	} else if (h.length === 4) {
		r = Number.parseInt(h[0] + h[0], 16);
		g = Number.parseInt(h[1] + h[1], 16);
		b = Number.parseInt(h[2] + h[2], 16);
		a = Number.parseInt(h[3] + h[3], 16) / 255;
	} else if (h.length === 6) {
		r = Number.parseInt(h.slice(0, 2), 16);
		g = Number.parseInt(h.slice(2, 4), 16);
		b = Number.parseInt(h.slice(4, 6), 16);
	} else if (h.length === 8) {
		r = Number.parseInt(h.slice(0, 2), 16);
		g = Number.parseInt(h.slice(2, 4), 16);
		b = Number.parseInt(h.slice(4, 6), 16);
		a = Number.parseInt(h.slice(6, 8), 16) / 255;
	} else {
		return null;
	}
	if (
		Number.isNaN(r) ||
		Number.isNaN(g) ||
		Number.isNaN(b) ||
		Number.isNaN(a)
	)
		return null;
	return [r, g, b, a];
};

/**
 * Convert a number (0-255) to a two-digit hex string.
 * @param n - The number to convert
 * @returns A zero-padded hex string (e.g. "0a", "ff")
 */
const toHex = (n: number): string =>
	Math.round(Math.max(0, Math.min(255, n)))
		.toString(16)
		.padStart(2, '0');

/**
 * Evaluate a `color-mix(in srgb, ...)` expression with two color arguments.
 * Supports hex colors and `transparent`. Handles percentage-based mixing
 * with premultiplied alpha blending.
 * @param args - The inner arguments of `color-mix()`
 * @returns The mixed color as a hex string, "transparent", or null if not evaluable
 */
const evaluateColorMix = (args: string): string | null => {
	const srgbMatch = args.match(
		/^in\s+srgb\s*,\s*([\s\S]+?)\s*,\s*([\s\S]+?)\s*$/
	);
	if (!srgbMatch) return null;

	const parseColorArg = (
		arg: string
	): { color: string; percentage: number | null } | null => {
		const parts = arg.trim().split(/\s+/);
		if (parts.length === 1) return { color: parts[0], percentage: null };
		if (parts.length === 2) {
			const pctMatch = parts[1].match(/^([\d.]+)%$/);
			if (!pctMatch) return null;
			return {
				color: parts[0],
				percentage: Number.parseFloat(pctMatch[1])
			};
		}
		return null;
	};

	const arg1 = parseColorArg(srgbMatch[1]);
	const arg2 = parseColorArg(srgbMatch[2]);
	if (!arg1 || !arg2) return null;

	let p1 = arg1.percentage;
	let p2 = arg2.percentage;
	if (p1 === null && p2 === null) {
		p1 = 50;
		p2 = 50;
	} else if (p1 !== null && p2 === null) {
		p2 = 100 - p1;
	} else if (p1 === null && p2 !== null) {
		p1 = 100 - p2;
	}

	const pct1 = p1! / 100;
	const pct2 = p2! / 100;
	const isTransparent = (c: string) => c === 'transparent';

	let rgb1: [number, number, number],
		alpha1 = 1;
	if (isTransparent(arg1.color)) {
		rgb1 = [0, 0, 0];
		alpha1 = 0;
	} else {
		const parsed = parseHexColor(arg1.color);
		if (!parsed) return null;
		rgb1 = [parsed[0], parsed[1], parsed[2]];
		alpha1 = parsed[3];
	}

	let rgb2: [number, number, number],
		alpha2 = 1;
	if (isTransparent(arg2.color)) {
		rgb2 = [0, 0, 0];
		alpha2 = 0;
	} else {
		const parsed = parseHexColor(arg2.color);
		if (!parsed) return null;
		rgb2 = [parsed[0], parsed[1], parsed[2]];
		alpha2 = parsed[3];
	}

	const mixedAlpha = alpha1 * pct1 + alpha2 * pct2;
	if (mixedAlpha === 0) return 'transparent';

	const mix = (c1: number, c2: number): number =>
		(c1 * alpha1 * pct1 + c2 * alpha2 * pct2) / mixedAlpha;

	const r = mix(rgb1[0], rgb2[0]);
	const g = mix(rgb1[1], rgb2[1]);
	const b = mix(rgb1[2], rgb2[2]);

	if (mixedAlpha >= 0.995) return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(mixedAlpha * 255)}`;
};

/**
 * Resolve all fully-static `color-mix()` expressions in a CSS value.
 * Skips expressions that still contain unresolved `var()` references.
 * @param value - The CSS value string potentially containing `color-mix()` expressions
 * @returns The value with all evaluable `color-mix()` expressions replaced
 */
export const resolveColorMix = (value: string): string =>
	resolveCssFunction(value, 'color-mix', evaluateColorMix);
