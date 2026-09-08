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
//
// `onerror` is not optional in practice: it is the ONLY channel for out-of-band
// failures. `serveStdio` reports a rejected `transport.start()` (and every later
// transport error) through this callback and then swallows the rejection, so
// without it a server that never came up is indistinguishable from a healthy one
// — the v1 wiring at least surfaced it through the `unhandledRejection` handler.
const handle = serveStdio(() => buildServer(), {
	onerror(error) {
		console.error('[DB UX MCP] Transport error:', error);
	}
});
registerLifecycleHandlers(handle);
console.error('[DB UX MCP] Server is starting on stdio...');
