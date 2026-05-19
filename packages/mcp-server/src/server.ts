import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import packageJson from '../package.json';

/** The singleton McpServer instance shared across the entire application. */
export const server = new McpServer({
	name: 'db-ux-mcp',
	version: packageJson.version
});

/**
 * Registers process-level signal and error handlers for graceful shutdown
 * and crash resistance. Should be called once during server bootstrap.
 *
 * Handles: SIGINT, SIGTERM, uncaughtException, unhandledRejection.
 */
export function registerLifecycleHandlers() {
	const cleanup = async () => {
		console.error('[DB UX MCP] Shutting down server gracefully...');
		try {
			await server.close();
		} catch (error) {
			console.error('[DB UX MCP] Error during server shutdown:', error);
		}
		process.exit(0);
	};

	process.on('SIGINT', cleanup);
	process.on('SIGTERM', cleanup);

	process.on('uncaughtException', (error) => {
		console.error('[DB UX MCP] Fatal Error - Uncaught Exception:', error);
	});

	process.on('unhandledRejection', (reason, promise) => {
		console.error(
			'[DB UX MCP] Fatal Error - Unhandled Rejection at:',
			promise,
			'reason:',
			reason
		);
	});
}
