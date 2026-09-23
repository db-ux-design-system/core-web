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
//
// Logging alone is not enough for the startup case: with no transport there is
// nothing left to keep the event loop alive, so the process would exit 0 and a
// host would read a failed start as a clean shutdown. But the callback must not
// exit unconditionally either — `serveStdio` multiplexes recoverable events
// through it as well (probe-instance discard timeouts, late instance disposal,
// a 2025-era request on a modern-only connection, and every `wire.onerror`
// during a live session). Killing the process on those would undo the v2
// robustness guarantee that a single bad line no longer ends the connection.
//
// The factory is the discriminator: `serveStdio` calls it from the opening arm,
// after the first inbound message. `transport.start()` rejects before any
// message can arrive, so a startup failure is exactly the case where no
// instance has been built yet.
let hasBuiltInstance = false;
const handle = serveStdio(
	() => {
		hasBuiltInstance = true;

		return buildServer();
	},
	{
		onerror(error) {
			console.error('[DB UX MCP] Transport error:', error);
			if (!hasBuiltInstance) {
				console.error(
					'[DB UX MCP] The stdio transport never came up; exiting so the host sees a failed start.'
				);
				process.exit(1);
			}
		}
	}
);
registerLifecycleHandlers(handle);
console.error('[DB UX MCP] Server is starting on stdio...');
