import { Config } from '@stencil/core';

/**
 * Opt-in build variant that enables Stencil's `experimentalSlotFixes`.
 *
 * The slot fixes patch DOM tree accessors (`childNodes`, `children`,
 * `firstChild`, `lastChild`, `parentNode`, `textContent`, ...) on every scoped
 * host so that slotted light-DOM content behaves more like native Shadow DOM
 * (see issue #8807). That patching is deliberately NOT enabled in the default
 * build (`stencil.config.ts`), because it changes how the real DOM is reported
 * and breaks DOM-walking tooling such as axe-core.
 *
 * This variant is published alongside the default one under the
 * `dist-slot-fixes` / `bundle-slot-fixes` folders, so consumers who need the
 * slot relocation fixes can opt in without forcing the patched behavior on
 * everyone.
 */
export const config: Config = {
	namespace: 'DB-UX',
	srcDir: 'src',
	extras: {
		experimentalSlotFixes: true
	},
	outputTargets: [
		{
			type: 'dist-custom-elements',
			dir: 'bundle-slot-fixes',
			externalRuntime: false,
			customElementsExportBehavior: 'bundle'
		},
		{
			type: 'dist',
			dir: 'dist-slot-fixes'
		}
	]
};
