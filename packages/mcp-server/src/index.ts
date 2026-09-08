import { serveStdio } from '@modelcontextprotocol/server/stdio';
import { buildServer, registerLifecycleHandlers } from './server.js';

export {
	handleDocsSearch,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleGetDesignTokens,
	handleGetExampleCode,
	handleGetMigrationGuide,
	handleGetVisualReference,
	handleListComponents,
	handleListDesignTokenCategories,
	handleListIcons,
	handleListMigrationGuides,
	handleListVisuals,
	handleScanV2Migration,
	handleVerifyMigratedCode
} from './tools/index.js';
export { resolveSafePath } from './utils/index.js';

// Bootstrap
//
// `serveStdio` replaces the v1 `new StdioServerTransport()` + `server.connect()`
// wiring. It owns the era decision: the opening exchange selects whether the
// connection speaks the 2025 (`legacy`) or the 2026-07-28 (`modern`) protocol
// era, and pins one instance from the factory for that connection.
//
// `legacy` is deliberately left at its default (`'serve'`) so hosts that have
// not adopted 2026-07-28 keep working unchanged.
const handle = serveStdio(() => buildServer());
registerLifecycleHandlers(handle);
console.error('[DB UX MCP] Server is running and waiting for requests...');
