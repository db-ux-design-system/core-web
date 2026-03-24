import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod/v3';
import packageJson from '../package.json';
import {
	handleAuditAccessibilityPrompt,
	handleMigrateComponentPrompt,
	handleReviewUiCodePrompt,
	handleScaffoldPagePrompt
} from './prompts';
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
export { resetManifestCache, resolveSafePath } from './utils.js';

const server = new McpServer({
	name: 'db-ux-mcp',
	version: packageJson.version
});

// ---------------------------------------------------------------------------
// Tools
// ---------------------------------------------------------------------------

server.registerTool(
	'list_components',
	{
		description:
			'Returns all available DB UX component names by scanning packages/components/src/components.'
	},
	handleListComponents
);

server.registerTool(
	'get_component_details',
	{
		description:
			'Returns the list of examples (e.g. Density, Variant) for a component by reading its showcase file.',
		inputSchema: {
			componentName: z.string().max(100).describe("e.g. 'button'")
		}
	},
	handleGetComponentDetails
);

server.registerTool(
	'get_component_props',
	{
		description:
			"Returns the raw TypeScript content of a component's model.ts, listing all interfaces and props.",
		inputSchema: {
			componentName: z.string().max(100).describe("e.g. 'button'")
		}
	},
	handleGetComponentProps
);

server.registerTool(
	'list_design_token_categories',
	{
		description:
			'Returns all available DB UX design token categories (e.g. colors, spacing, typography).'
	},
	handleListDesignTokenCategories
);

server.registerTool(
	'get_design_tokens',
	{
		description:
			'Returns CSS custom properties (--db-*) and SCSS variables ($db-*) for a given design token category.',
		inputSchema: {
			category: z
				.string()
				.max(100)
				.describe(
					"Token category, e.g. 'colors', 'spacing', 'typography'. Use list_design_token_categories to get available categories."
				)
		}
	},
	handleGetDesignTokens
);

server.registerTool(
	'list_icons',
	{
		description:
			"Returns all available DB UX icon names (e.g. 'arrow_down', 'chevron_right') " +
			'from the generated all-icons.ts in packages/foundations/src.'
	},
	handleListIcons
);

server.registerTool(
	'get_example_code',
	{
		description:
			'Returns the generated framework-specific source code for a component example. ' +
			'For Angular, the template is inline inside the @Component decorator within the .ts file.',
		inputSchema: {
			componentName: z.string().max(100).describe("e.g. 'button'"),
			exampleName: z
				.string()
				.max(100)
				.describe("Readable example name, e.g. 'Show Icon Leading'"),
			framework: z
				.enum(['react', 'angular', 'vue', 'web-components', 'html'])
				.describe(
					"Target framework: 'react', 'angular', 'vue', 'web-components', or 'html'"
				)
		}
	},
	handleGetExampleCode
);

server.registerTool(
	'docs_search',
	{
		description:
			'Searches the DB UX conceptual documentation (guidelines, A11y, migration, ADRs) or component-specific markdown docs.',
		inputSchema: {
			query: z
				.string()
				.max(200)
				.describe(
					"Search term (e.g., 'focus state', 'migration', 'accessibility'). Use empty string if you just want to read a specific component doc."
				),
			category: z
				.enum(['global', 'component'])
				.describe(
					"Search scope: 'global' (docs/ directory) or 'component' (packages/components/.../docs/)."
				),
			componentName: z
				.string()
				.max(100)
				.optional()
				.describe(
					"Required if category is 'component' (e.g., 'button', 'navigation')."
				),
			docType: z
				.enum([
					'React',
					'Angular',
					'Vue',
					'HTML',
					'Migration',
					'Accessibility'
				])
				.optional()
				.describe(
					"Optional: The specific doc file to read for a component (e.g., 'Migration')."
				)
		}
	},
	handleDocsSearch
);

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

server.registerPrompt(
	'scaffold_page',
	{
		description:
			'Generates the initial structure of a complete web page or complex module (e.g. dashboard, form). Enforces the full DB UX MCP discovery workflow before writing any code.',
		argsSchema: {
			page_type: z
				.string()
				.max(200)
				.describe(
					"The functional domain or structural type of the page (e.g. 'Login Portal', 'Dashboard', 'Settings Form'). Used in Phase 1 to decompose the page into UI blocks and drives component selection throughout the workflow."
				),
			framework: z
				.string()
				.transform((val) => val.trim().toLowerCase())
				.refine(
					(val) =>
						[
							'react',
							'angular',
							'vue',
							'web-components',
							'html'
						].includes(val),
					{
						message:
							'Framework must be exactly one of: react, angular, vue, web-components, html'
					}
				)
				.describe(
					'The target framework. Valid options are: react, angular, vue, web-components, html (case-insensitive).'
				),
			additional_requirements: z
				.string()
				.max(1000)
				.optional()
				.describe(
					"Optional functional or architectural requirements (e.g. 'must include a data table with pagination', 'dark mode support required'). These requirements refine the UI block decomposition in Phase 1 and may add or remove components from the plan."
				)
		}
	},
	handleScaffoldPagePrompt
);

server.registerPrompt(
	'review_ui_code',
	{
		description:
			'Performs a strict multi-layered QA, accessibility, and DB UX compliance audit on a provided code snippet.',
		argsSchema: {
			code_snippet: z
				.string()
				.max(10000)
				.describe(
					'The source code to be evaluated (including markup, styling, logic).'
				),
			framework: z
				.string()
				.transform((val) => val.trim().toLowerCase())
				.refine(
					(val) =>
						[
							'react',
							'angular',
							'vue',
							'web-components',
							'html'
						].includes(val),
					{
						message:
							'Framework must be exactly one of: react, angular, vue, web-components, html'
					}
				)
				.describe(
					'The target framework. Valid options are: react, angular, vue, web-components, html (case-insensitive).'
				)
		}
	},
	handleReviewUiCodePrompt
);

server.registerPrompt(
	'migrate_component',
	{
		description:
			'Transforms legacy UI code (e.g., Bootstrap, native HTML, DB UI v1/v2) into the modern DB UX v3 architecture. Aware of package renames, deprecated props, CLI migration tooling, and components without direct v3 equivalents.',
		argsSchema: {
			legacy_code: z
				.string()
				.max(10000)
				.describe(
					'The source code of the outdated component (e.g., DB UI v1/v2, Bootstrap, raw HTML/CSS).'
				),
			source_context: z
				.string()
				.max(100)
				.describe(
					"The origin/context of the legacy code. Use one of: 'db-ui-v1', 'db-ui-v2', 'db-ux-v1', 'db-ux-v2', 'db-ux-v3', 'bootstrap-4', 'native-html'."
				),
			target_framework: z
				.string()
				.transform((val) => val.trim().toLowerCase())
				.refine(
					(val) =>
						[
							'react',
							'angular',
							'vue',
							'web-components',
							'html'
						].includes(val),
					{
						message:
							'Framework must be exactly one of: react, angular, vue, web-components, html'
					}
				)
				.describe(
					'The target framework. Valid options are: react, angular, vue, web-components, html (case-insensitive).'
				)
		}
	},
	handleMigrateComponentPrompt
);

server.registerPrompt(
	'audit_accessibility',
	{
		description:
			'Specialized deep scan exclusively for inclusion and accessibility standards (WCAG 2.2 AA). Evaluates interactive patterns, focus orders, and generates manual test scripts.',
		argsSchema: {
			code_snippet: z
				.string()
				.max(10000)
				.describe(
					'The UI source code to be audited for accessibility compliance.'
				),
			framework: z
				.string()
				.transform((val) => val.trim().toLowerCase())
				.refine(
					(val) =>
						[
							'react',
							'angular',
							'vue',
							'web-components',
							'html'
						].includes(val),
					{
						message:
							'Framework must be exactly one of: react, angular, vue, web-components, html'
					}
				)
				.describe(
					'The target framework. Valid options are: react, angular, vue, web-components, html (case-insensitive).'
				)
		}
	},
	handleAuditAccessibilityPrompt
);

// ---------------------------------------------------------------------------
// Server startup
// ---------------------------------------------------------------------------

const transport = new StdioServerTransport();
await server.connect(transport);

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
