/*
 * CLI detector re-export (Requirement 7.3; design Component 4).
 *
 * The CLI `init` subcommand scans the project through the shared Detector.
 * Task 20.1 moved the detector into the package-owned shared module
 * (`../detector/`), so this file is now a thin re-export of `detectUsage` from
 * that single source rather than a local placeholder. The `init` call site
 * (`./init.ts`) is unchanged — it still imports `detectUsage` from
 * `./detector.js` — and the real source-scanning implementation it calls
 * through lands in Task 20.2 inside the shared module. The `UsageSignal` type
 * is the shared module's `@public` contract; import it from
 * `@db-ux/core-theme-tools/detector` (or `../detector/index.js`) directly
 * rather than through this CLI-local barrel.
 */

export { detectUsage } from '../detector/index.js';
