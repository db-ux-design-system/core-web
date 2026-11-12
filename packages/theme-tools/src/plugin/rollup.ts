/*
 * @db-ux/core-theme-tools/rollup — Rollup bundler-plugin entry.
 *
 * Per-bundler surface over the shared unplugin factory: re-exports the Rollup
 * factory output as the default export a consumer adds to `plugins`. The
 * `rollup` peer is declared OPTIONAL in package.json, so importing this entry
 * without Rollup installed fails with the standard module-resolution error
 * (Requirements 8.1, 8.6, 8.7).
 */

import { dbUxThemeToolsPlugin } from './index.js';

export { dbUxThemeToolsPlugin } from './index.js';
export type { ThemeToolsPluginOptions } from './index.js';

export default dbUxThemeToolsPlugin.rollup;
