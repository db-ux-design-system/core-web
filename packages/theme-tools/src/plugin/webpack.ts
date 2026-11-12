/*
 * @db-ux/core-theme-tools/webpack — webpack bundler-plugin entry.
 *
 * Per-bundler surface over the shared unplugin factory: re-exports the webpack
 * factory output as the default export a consumer adds to `plugins`. The
 * `webpack` peer is declared OPTIONAL in package.json, so importing this entry
 * without webpack installed fails with the standard module-resolution error
 * (Requirements 8.1, 8.6, 8.7).
 */

import { dbUxThemeToolsPlugin } from './index.js';

export { dbUxThemeToolsPlugin } from './index.js';
export type { ThemeToolsPluginOptions } from './index.js';

export default dbUxThemeToolsPlugin.webpack;
