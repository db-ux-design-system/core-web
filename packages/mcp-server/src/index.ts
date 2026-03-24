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
	handleDocsSearch,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleGetDesignTokens,
	handleGetExampleCode,
	handleListComponents,
	handleListDesignTokenCategories,
	handleListIcons
} from './tools';
import {
	docsSearchSchema,
	getComponentDetailsSchema,
	getComponentPropsSchema,
	getDesignTokensSchema,
	getExampleCodeSchema,
	listComponentsSchema,
	listDesignTokenCategoriesSchema,
	listIconsSchema
} from './tools/schemas.js';

export {
	handleDocsSearch,
	handleGetComponentDetails,
	handleGetComponentProps,
	handleGetDesignTokens,
	handleGetExampleCode,
	handleListComponents,
	handleListDesignTokenCategories,
	handleListIcons
} from './tools/index.js';
export { resetManifestCache, resolveSafePath } from './utils/index.js';

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
