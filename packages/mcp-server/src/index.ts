import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
	handleAuditAccessibilityPrompt,
	handleReviewUiCodePrompt,
	handleScaffoldPagePrompt
} from './prompts';
import {
	auditAccessibilitySchema,
	reviewUiCodeSchema,
	scaffoldPageSchema
} from './prompts/schemas.js';
import { registerLifecycleHandlers, server } from './server.js';
import {
	handleDocsSearch,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleGetDesignTokens,
	handleGetExampleCode,
	handleGetMigrationGuide,
	handleListComponents,
	handleListDesignTokenCategories,
	handleListIcons,
	handleListMigrationGuides
} from './tools';
import {
	docsSearchSchema,
	getComponentDetailsSchema,
	getComponentPropsSchema,
	getDesignTokensSchema,
	getExampleCodeSchema,
	getMigrationGuideSchema,
	listComponentsSchema,
	listDesignTokenCategoriesSchema,
	listIconsSchema,
	listMigrationGuidesSchema
} from './tools/schemas.js';

export {
	handleDocsSearch,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleGetDesignTokens,
	handleGetExampleCode,
	handleGetMigrationGuide,
	handleListComponents,
	handleListDesignTokenCategories,
	handleListIcons,
	handleListMigrationGuides
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
	'audit_accessibility',
	auditAccessibilitySchema,
	handleAuditAccessibilityPrompt
);

// Bootstrap
registerLifecycleHandlers();
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('[DB UX MCP] Server is running and waiting for requests...');
