/*
 * @db-ux/core-theme-tools/esbuild — esbuild bundler-plugin entry.
 *
 * Per-bundler surface over the shared unplugin factory: re-exports the esbuild
 * factory output as the default export a consumer adds to `plugins`. The
 * `esbuild` peer is declared OPTIONAL in package.json, so importing this entry
 * without esbuild installed fails with the standard module-resolution error
 * (Requirements 8.1, 8.6, 8.7).
 */

import { dbUxThemeToolsPlugin } from './index.js';

export { dbUxThemeToolsPlugin } from './index.js';
export type { ThemeToolsPluginOptions } from './index.js';

export default dbUxThemeToolsPlugin.esbuild;
