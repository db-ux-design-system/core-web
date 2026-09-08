import { McpServer } from '@modelcontextprotocol/server';
import type { StdioServerHandle } from '@modelcontextprotocol/server/stdio';
import packageJson from '../package.json';
import {
	handleAuditAccessibilityPrompt,
	handleMigrateComponentPrompt,
	handleReviewUiCodePrompt,
	handleScaffoldPagePrompt
} from './prompts';
import {
	auditAccessibilitySchema,
	migrateComponentSchema,
	reviewUiCodeSchema,
	scaffoldPageSchema
} from './prompts/schemas.js';
import {
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
} from './tools';
import {
	docsSearchSchema,
	getComponentDetailsSchema,
	getComponentPropsSchema,
	getDesignTokensSchema,
	getExampleCodeSchema,
	getMigrationGuideSchema,
	getVisualReferenceSchema,
	listComponentsSchema,
	listDesignTokenCategoriesSchema,
	listIconsSchema,
	listMigrationGuidesSchema,
	listVisualsSchema,
	scanV2MigrationSchema,
	verifyMigratedCodeSchema
} from './tools/schemas.js';

/**
 Builds a fully registered McpServer instance.

 This is a factory, not a singleton: `serveStdio` owns the era decision for a
 connection and pins ONE instance from this factory for that connection's
 lifetime. The same factory serves both the 2025 (`legacy`) and the 2026-07-28
 (`modern`) protocol era, so every tool and prompt must be registered here
 rather than as a module side effect.

 All tools are read-only and era-agnostic — they derive nothing from the
 connection, which is why the factory ignores its `McpRequestContext`.
 */
export function buildServer(): McpServer {
	const server = new McpServer({
		name: 'db-ux-mcp',
		version: packageJson.version
	});

	// Tools
	server.registerTool(
		'list_components',
		listComponentsSchema,
		handleListComponents
	);
	server.registerTool(
		'get_component_details',
		getComponentDetailsSchema,
		handleGetComponentDetails
	);
	server.registerTool(
		'get_component_props',
		getComponentPropsSchema,
		handleGetComponentProps
	);
	server.registerTool(
		'list_design_token_categories',
		listDesignTokenCategoriesSchema,
		handleListDesignTokenCategories
	);
	server.registerTool(
		'get_design_tokens',
		getDesignTokensSchema,
		handleGetDesignTokens
	);
	server.registerTool('list_icons', listIconsSchema, handleListIcons);
	server.registerTool(
		'get_example_code',
		getExampleCodeSchema,
		handleGetExampleCode
	);
	server.registerTool('docs_search', docsSearchSchema, handleDocsSearch);
	server.registerTool(
		'list_migration_guides',
		listMigrationGuidesSchema,
		handleListMigrationGuides
	);
	server.registerTool(
		'get_migration_guide',
		getMigrationGuideSchema,
		handleGetMigrationGuide
	);
	server.registerTool(
		'verify_migrated_code',
		verifyMigratedCodeSchema,
		handleVerifyMigratedCode
	);
	server.registerTool(
		'scan_v2_migration',
		scanV2MigrationSchema,
		handleScanV2Migration
	);
	server.registerTool('list_visuals', listVisualsSchema, handleListVisuals);
	server.registerTool(
		'get_visual_reference',
		getVisualReferenceSchema,
		handleGetVisualReference
	);

	// Prompts
	server.registerPrompt(
		'scaffold_page',
		scaffoldPageSchema,
		handleScaffoldPagePrompt
	);
	server.registerPrompt(
		'review_ui_code',
		reviewUiCodeSchema,
		handleReviewUiCodePrompt
	);
	server.registerPrompt(
		'migrate_component',
		migrateComponentSchema,
		handleMigrateComponentPrompt
	);
	server.registerPrompt(
		'audit_accessibility',
		auditAccessibilitySchema,
		handleAuditAccessibilityPrompt
	);

	return server;
}

/**
 Registers process-level signal and error handlers for graceful shutdown
 and crash resistance. Should be called once during server bootstrap.

 Handles: SIGINT, SIGTERM, uncaughtException, unhandledRejection.

 @param handle - The handle returned by `serveStdio`. Closing it tears down
 the pinned server instance and the underlying stdio transport.
 */
export function registerLifecycleHandlers(handle: StdioServerHandle) {
	const cleanup = async () => {
		console.error('[DB UX MCP] Shutting down server gracefully...');
		try {
			await handle.close();
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
