import type { AtRule, Declaration, Root, Rule } from 'postcss';
import { findCssFunction, findTopLevelComma } from './css-parser.js';
import {
	collectVarReferences,
	resolveCalc,
	resolveColorMix,
	resolveVars
} from './resolve.js';

/**
 * Collapse `light-dark(x, y)` to just `x` when both arguments are identical
 * after trimming whitespace. Handles nested parentheses correctly.
 * @param value - The CSS value string potentially containing `light-dark()` calls
 * @returns The value with identical-argument `light-dark()` calls collapsed
 */
export const collapseLightDark = (value: string): string => {
	let result = value;
	let searchFrom = 0;

	while (searchFrom < result.length) {
		const found = findCssFunction(result, 'light-dark', searchFrom);
		if (!found) break;

		const commaIdx = findTopLevelComma(found.inner);
		if (commaIdx === -1) {
			searchFrom = found.end;
			continue;
		}

		const light = found.inner.slice(0, commaIdx).trim();
		const dark = found.inner.slice(commaIdx + 1).trim();

		if (light === dark) {
			result =
				result.slice(0, found.start) + light + result.slice(found.end);
			searchFrom = found.start + light.length;
		} else {
			searchFrom = found.end;
		}
	}

	return result;
};

/**
 * Transform all declarations in a PostCSS root by resolving static `var()`,
 * evaluating `calc()` and `color-mix()`, collapsing identical `light-dark()`,
 * and optionally removing `@property` rules and unused declarations.
 *
 * @param root - The PostCSS root to transform
 * @param staticVarMap - Map of static variable names to their resolved values
 * @param referencedVars - Set to track which variables are still referenced after resolution
 * @param propertyNames - Set of variable names that came from `@property`
 * @param dynamicVars - Set of dynamic variable names (never removed)
 * @param removeAtProperty - Whether to remove `@property` rules
 * @param removeResolved - Whether to remove unused `@property`-sourced declarations
 */
export const transformRoot = (
	root: Root,
	staticVarMap: Map<string, string>,
	referencedVars: Set<string>,
	propertyNames: Set<string>,
	dynamicVars: Set<string>,
	removeAtProperty: boolean,
	removeResolved: boolean
) => {
	root.walkDecls((decl: Declaration) => {
		const hasVar = decl.value.includes('var(');
		const hasCalc = decl.value.includes('calc(');
		const hasColorMix = decl.value.includes('color-mix(');
		const hasLightDark = decl.value.includes('light-dark(');

		if (!hasVar && !hasCalc && !hasColorMix && !hasLightDark) return;

		let resolved = decl.value;

		if (hasVar) {
			resolved = resolveVars(resolved, staticVarMap);
		}
		if (resolved.includes('calc(')) {
			resolved = resolveCalc(resolved);
		}
		if (resolved.includes('color-mix(')) {
			resolved = resolveColorMix(resolved);
		}
		if (resolved.includes('light-dark(')) {
			resolved = collapseLightDark(resolved);
		}

		collectVarReferences(resolved, referencedVars);
		decl.value = resolved;
	});

	if (removeAtProperty) {
		root.walkAtRules('property', (atRule: AtRule) => {
			const propName = atRule.params.trim();
			if (!referencedVars.has(propName)) {
				atRule.remove();
			}
		});
	}

	if (removeResolved) {
		root.walkDecls(/^--/, (decl: Declaration) => {
			if (
				propertyNames.has(decl.prop) &&
				!referencedVars.has(decl.prop) &&
				!dynamicVars.has(decl.prop)
			) {
				decl.remove();
			}
		});
	}

	removeEmptyContainers(root);
};

/**
 * Remove empty rules and `@layer` at-rules left behind after
 * declarations and `@property` rules have been stripped.
 * Walks bottom-up so nested empty containers are cleaned recursively.
 */
const removeEmptyContainers = (root: Root) => {
	let changed = true;
	while (changed) {
		changed = false;

		root.walkRules((rule: Rule) => {
			if (rule.nodes && rule.nodes.length === 0) {
				rule.remove();
				changed = true;
			}
		});

		root.walkAtRules('layer', (atRule: AtRule) => {
			if (atRule.nodes && atRule.nodes.length === 0) {
				atRule.remove();
				changed = true;
			}
		});
	}
};
