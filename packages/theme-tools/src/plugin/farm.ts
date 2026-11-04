/*
 * @db-ux/core-theme-tools/farm — Farm bundler-plugin entry.
 *
 * Per-bundler surface over the shared unplugin factory: re-exports the Farm
 * factory output as the default export a consumer adds to `plugins`. The
 * `@farmfe/core` peer is declared OPTIONAL in package.json, so importing this
 * entry without Farm installed fails with the standard module-resolution error
 * (Requirements 8.1, 8.6, 8.7).
 */

import { dbUxThemeToolsPlugin } from './index.js';

export { dbUxThemeToolsPlugin } from './index.js';
export type { ThemeToolsPluginOptions } from './index.js';

export default dbUxThemeToolsPlugin.farm;
