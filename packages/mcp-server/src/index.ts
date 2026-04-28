import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
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
import { registerLifecycleHandlers, server } from './server.js';
import {
	handleAnalyzeV2Migration,
	handleDocsSearch,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleGetComponentVisual,
	handleGetDesignTokens,
	handleGetExampleCode,
	handleGetMigrationGuide,
	handleListComponents,
	handleListDesignTokenCategories,
	handleListIcons,
	handleListMigrationGuides,
	handleVerifyMigratedCode
} from './tools';
import {
	analyzeV2MigrationSchema,
	docsSearchSchema,
	getComponentDetailsSchema,
	getComponentPropsSchema,
	getComponentVisualSchema,
	getDesignTokensSchema,
	getExampleCodeSchema,
	getMigrationGuideSchema,
	listComponentsSchema,
	listDesignTokenCategoriesSchema,
	listIconsSchema,
	listMigrationGuidesSchema,
	verifyMigratedCodeSchema
} from './tools/schemas.js';

export {
	handleAnalyzeV2Migration,
	handleDocsSearch,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleGetComponentVisual,
	handleGetDesignTokens,
	handleGetExampleCode,
	handleGetMigrationGuide,
	handleListComponents,
	handleListDesignTokenCategories,
	handleListIcons,
	handleListMigrationGuides,
	handleVerifyMigratedCode
} from './tools/index.js';
export { resolveSafePath } from './utils/index.js';

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
	'get_component_visual',
	getComponentVisualSchema,
	handleGetComponentVisual
);
server.registerTool(
	'analyze_v2_migration',
	analyzeV2MigrationSchema,
	handleAnalyzeV2Migration
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

// Bootstrap
registerLifecycleHandlers();
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('[DB UX MCP] Server is running and waiting for requests...');
