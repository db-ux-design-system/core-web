import type { AtRule, ChildNode, Declaration, Root, Rule } from 'postcss';
import type { VarEntry } from '../data.js';

/**
 * Check whether a CSS selector targets only `:root` and/or `:host`.
 * @param selector - The CSS selector string to check
 * @returns True if the selector only contains `:root` and/or `:host`
 */
export const isRootSelector = (selector: string): boolean => {
	const trimmed = selector.trim();
	return /^(:root|:host)(\s*,\s*(:root|:host))*$/.test(trimmed);
};

/**
 * Walk up the PostCSS AST from a node to find the enclosing `@layer` name.
 * @param node - The PostCSS child node to start from
 * @returns The layer name, or null if not inside any `@layer`
 */
export const getLayerName = (node: ChildNode): string | null => {
	let current: any = node.parent;
	while (current) {
		if (
			current.type === 'atrule' &&
			current.name === 'layer' &&
			current.params
		) {
			return current.params.trim();
		}
		current = current.parent;
	}
	return null;
};

/**
 * Parse `@layer` order declarations (e.g. `@layer db-ux, db-theme;`) from a root.
 * Later names in the list get higher priority indices.
 * @param root - The PostCSS root to scan
 * @returns A map of layer name to priority index
 */
export const collectLayerOrder = (root: Root): Map<string, number> => {
	const order = new Map<string, number>();
	root.walkAtRules('layer', (atRule: AtRule) => {
		if (atRule.nodes && atRule.nodes.length > 0) return;
		const names = atRule.params
			.split(',')
			.map((n) => n.trim())
			.filter(Boolean);
		for (let i = 0; i < names.length; i++) {
			order.set(names[i], i);
		}
	});
	return order;
};

/**
 * Parse `@import` rules to extract file-specifier to layer name mappings.
 * @param root - The PostCSS root to scan
 * @returns A map of import specifier to layer name
 */
export const collectImportLayers = (root: Root): Map<string, string> => {
	const importLayers = new Map<string, string>();
	root.walkAtRules('import', (atRule: AtRule) => {
		const params = atRule.params;
		const layerMatch = params.match(/layer\(([^)]+)\)/);
		if (!layerMatch) return;
		const layerName = layerMatch[1].trim();
		const fileMatch = params.match(
			/(?:url\(\s*)?["']([^"']+)["'](?:\s*\))?/
		);
		if (!fileMatch) return;
		importLayers.set(fileMatch[1], layerName);
	});
	return importLayers;
};

/**
 * Get the numeric priority for a layer. Unlayered CSS (null) gets the highest
 * priority (`MAX_SAFE_INTEGER`), matching the CSS spec.
 * @param layer - The layer name, or null for unlayered CSS
 * @param layerOrder - The layer priority map
 * @returns The numeric priority (higher = wins)
 */
export const getLayerPriority = (
	layer: string | null,
	layerOrder: Map<string, number>
): number => {
	if (layer === null) return Number.MAX_SAFE_INTEGER;
	return layerOrder.get(layer) ?? -1;
};

/**
 * Pick the best (highest-priority) value from multiple `VarEntry` entries
 * for the same variable, based on `@layer` priority.
 * @param entries - All collected entries for a single variable
 * @param layerOrder - The layer priority map
 * @returns The value string from the highest-priority entry
 */
export const pickBestVar = (
	entries: VarEntry[],
	layerOrder: Map<string, number>
): string => {
	let best = entries[0];
	for (let i = 1; i < entries.length; i++) {
		if (
			getLayerPriority(entries[i].layer, layerOrder) >=
			getLayerPriority(best.layer, layerOrder)
		) {
			best = entries[i];
		}
	}
	return best.value;
};

/**
 * Look up the `@layer` name for a file by matching its path against
 * known `@import ... layer()` specifiers.
 * @param filePath - The absolute file path to look up
 * @param importLayerMap - Map of import specifiers to layer names
 * @returns The layer name, or null if not associated with any layer
 */
export const getFileLayer = (
	filePath: string,
	importLayerMap: Map<string, string>
): string | null => {
	for (const [specifier, layer] of importLayerMap) {
		if (
			filePath.replace(/\\/g, '/').endsWith(specifier.replace(/\\/g, '/'))
		) {
			return layer;
		}
	}
	return null;
};

/**
 * Collect all CSS custom property declarations and `@property` initial-values
 * from a PostCSS root, assigning each a layer and detecting dynamic variables.
 *
 * A variable is marked as dynamic if:
 * - Its name matches one of the `prefixes`
 * - It is declared inside a non-`:root`/`:host` selector
 * - It is declared inside `@media` within `:root`/`:host`
 *
 * Duplicate entries (same prop + file + layer) are skipped.
 *
 * @param root - The PostCSS root to scan
 * @param varMap - Shared map to accumulate variable entries into
 * @param propertyNames - Shared set to track `@property` variable names
 * @param dynamicVars - Shared set to track dynamic variable names
 * @param prefixes - Variable prefixes that are always treated as dynamic
 * @param forceLayer - If set, overrides the detected layer for all entries
 * @param file - The source file path for deduplication
 */
export const collectVarsWithLayer = (
	root: Root,
	varMap: Map<string, VarEntry[]>,
	propertyNames: Set<string>,
	dynamicVars: Set<string>,
	prefixes: string[],
	forceLayer: string | null,
	file: string
) => {
	const addVar = (prop: string, value: string, layer: string | null) => {
		const entries = varMap.get(prop);
		if (entries) {
			if (entries.some((e) => e.file === file && e.layer === layer))
				return;
			entries.push({ value, layer, file });
		} else {
			varMap.set(prop, [{ value, layer, file }]);
		}
	};

	root.walkAtRules('property', (atRule: AtRule) => {
		const propName = atRule.params.trim();
		propertyNames.add(propName);
		const layer = forceLayer ?? getLayerName(atRule);
		atRule.walkDecls('initial-value', (decl: Declaration) => {
			addVar(propName, decl.value, layer);
		});
	});

	root.walkDecls(/^--/, (decl: Declaration) => {
		const parent = decl.parent;

		if (prefixes.some((p) => decl.prop.startsWith(p))) {
			dynamicVars.add(decl.prop);
		}

		if (parent && parent.type === 'rule') {
			const rule = parent as Rule;
			if (!isRootSelector(rule.selector)) {
				dynamicVars.add(decl.prop);
			}
		}

		if (parent && parent.type === 'rule') {
			const rule = parent as Rule;
			if (
				isRootSelector(rule.selector) &&
				rule.parent &&
				rule.parent.type === 'atrule'
			) {
				const atRule = rule.parent as AtRule;
				if (atRule.name === 'media') {
					dynamicVars.add(decl.prop);
				}
			}
		}

		addVar(decl.prop, decl.value, forceLayer ?? getLayerName(decl));
	});
};
