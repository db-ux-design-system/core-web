import type { PluginCreator, Root } from 'postcss';
import type { FlattenOptions, VarEntry } from './data.js';
import { DEFAULT_DYNAMIC_PREFIXES } from './data.js';
import {
	collectImportLayers,
	collectLayerOrder,
	collectVarsWithLayer,
	getFileLayer,
	pickBestVar
} from './helpers/collect.js';
import { transformRoot } from './helpers/transform.js';

/**
 * PostCSS plugin that flattens DB UX Design System CSS custom properties
 * by resolving `var()`, `@property`, `calc()`, `color-mix()`, and `light-dark()`.
 *
 * Detects dynamic variables (re-declared in non-`:root` selectors, `@media`,
 * or matching `dynamicPrefixes`) and leaves them as `var()` references.
 * Respects `@layer` priority via `@layer` order declarations and `@import ... layer()` rules.
 *
 * @param opts - Plugin options
 * @returns A PostCSS plugin instance
 */
const dbUxFlatten: PluginCreator<FlattenOptions> = (opts = {}) => {
	const removeAtProperty = opts.removeAtProperty ?? true;
	const removeResolved = opts.removeResolved ?? true;
	const dynamicPrefixes = opts.dynamicPrefixes ?? DEFAULT_DYNAMIC_PREFIXES;

	const varMap = new Map<string, VarEntry[]>();
	const propertyNames = new Set<string>();
	const dynamicVars = new Set<string>();
	const referencedVars = new Set<string>();
	const layerOrder = new Map<string, number>();
	const importLayerMap = new Map<string, string>();

	return {
		postcssPlugin: 'postcss-flatten-db-variables',
		Once(root: Root) {
			const filePath = root.source?.input?.file ?? '';

			const fileLayerOrder = collectLayerOrder(root);
			for (const [name, priority] of fileLayerOrder) {
				layerOrder.set(name, priority);
			}

			const fileImportLayers = collectImportLayers(root);
			for (const [specifier, layer] of fileImportLayers) {
				importLayerMap.set(specifier, layer);
			}

			const fileLayer = getFileLayer(filePath, importLayerMap);
			collectVarsWithLayer(
				root,
				varMap,
				propertyNames,
				dynamicVars,
				dynamicPrefixes,
				fileLayer,
				filePath
			);
		},
		OnceExit(root: Root) {
			const staticVarMap = new Map<string, string>();
			for (const [key, entries] of varMap) {
				if (!dynamicVars.has(key)) {
					staticVarMap.set(key, pickBestVar(entries, layerOrder));
				}
			}

			transformRoot(
				root,
				staticVarMap,
				referencedVars,
				propertyNames,
				dynamicVars,
				removeAtProperty,
				removeResolved
			);
		}
	};
};

dbUxFlatten.postcss = true;

export { dbUxFlatten };
export type { FlattenOptions };
