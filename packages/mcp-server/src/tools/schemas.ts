import { z } from 'zod';
import { APP_TYPES, PLAN_FRAMEWORKS, SOURCES } from './plan.js';

export const listComponentsSchema = {
	description:
		'Returns all available DB UX component names by scanning packages/components/src/components.'
};

export const getComponentDetailsSchema = {
	description:
		'Returns the list of examples (e.g. Density, Variant) for a component by reading its showcase file.',
	inputSchema: z.object({
		componentName: z.string().max(100).describe("e.g. 'button'")
	})
};

export const getComponentPropsSchema = {
	description:
		"Returns the raw TypeScript content of a component's model.ts, listing all interfaces and props.",
	inputSchema: z.object({
		componentName: z.string().max(100).describe("e.g. 'button'")
	})
};

export const listDesignTokenCategoriesSchema = {
	description:
		'Returns all available DB UX design token categories (e.g. colors, spacing, typography).'
};

export const getDesignTokensSchema = {
	description:
		'Returns CSS custom properties (--db-*) for a given design token category. For spacing, elevation, and density, returns compiled primitive values (rem, px, box-shadow). For colors, typography, animation, and transitions, returns SCSS variable declarations.',
	inputSchema: z.object({
		category: z
			.string()
			.max(100)
			.describe(
				"Token category, e.g. 'colors', 'spacing', 'typography', 'elevation', 'density'. Use list_design_token_categories to get available categories."
			)
	})
};

export const listIconsSchema = {
	description:
		"Returns all available DB UX icon names (e.g. 'arrow_down', 'chevron_right') from the generated all-icons.ts in packages/foundations/src."
};

export const getExampleCodeSchema = {
	description:
		'Returns the generated framework-specific source code for a component example. For Angular, the template is inline inside the @Component decorator within the .ts file. Plain HTML has no generated examples - use docs_search with docType "HTML" for that.',
	inputSchema: z.object({
		componentName: z.string().max(100).describe("e.g. 'button'"),
		exampleName: z
			.string()
			.max(100)
			.describe("Readable example name, e.g. 'Show Icon Leading'"),
		// Narrowed to the frameworks that actually have generated examples
		// (`ExampleCodeFramework`). Offering 'html' or 'vanilla' here would
		// advertise a value the handler can only answer with an error.
		framework: z
			.enum(['react', 'angular', 'vue', 'web-components'])
			.describe(
				"Target framework: 'react', 'angular', 'vue' or 'web-components'"
			)
	})
};

export const docsSearchSchema = {
	description:
		'Searches the DB UX component and foundation documentation (guidelines, Accessibility, framework-specific docs). Only docs from packages/components/ and packages/foundations/docs/ are included. For migration guides, use list_migration_guides and get_migration_guide instead.',
	inputSchema: z.object({
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
			.enum(['React', 'Angular', 'Vue', 'HTML', 'Accessibility'])
			.optional()
			.describe(
				"Optional: The specific doc file to read for a component (e.g., 'Accessibility'). For migration docs, use list_migration_guides / get_migration_guide instead."
			)
	})
};

export const listMigrationGuidesSchema = {
	description:
		'Returns all available DB UX migration guide names. Call this first to discover which guides exist before calling get_migration_guide.'
};

export const getMigrationGuideSchema = {
	description:
		'Returns the full markdown content of a specific DB UX migration guide. Use this to learn the exact syntax changes needed to refactor legacy "DB UI" code to "DB UX" code.',
	inputSchema: z.object({
		guideName: z
			.string()
			.max(100)
			.regex(
				/^[\w\-.]+$/v,
				'Guide name must only contain alphanumeric characters, dots, hyphens, and underscores.'
			)
			.describe(
				"Exact guide name as returned by list_migration_guides, e.g. 'color-migration' or 'icon-migration'."
			)
	})
};

export const verifyMigratedCodeSchema = {
	description:
		'IMPORTANT: ALWAYS call this tool after generating or modifying Generation 3 code and BEFORE showing it to the user. ' +
		"The tool instructs you to verify the workspace using the project's own scripts (typecheck, lint, build) from package.json. " +
		'If errors are found, fix the code and call the tool again (max 3 attempts).'
};

// Wrapped in `z.object()` like every other input
// schema: SDK v2 does not accept a raw shape.
const scanMigrationInputSchema = z.object({
	filePath: z
		.string()
		.max(500)
		.describe(
			'Absolute path or path relative to the workspace root of the file to scan.'
		)
});

export const scanGeneration2MigrationSchema = {
	description:
		'Call this tool for every file before migrating it (after plan_migration). ' +
		'Scans a source file for DB UX Design System – Generation 2 patterns (Generation 2 CSS classes (cmp-*, elm-*, rea-*), ' +
		'Generation 2 Web Components from @db-ui/elements (<db-*>) and their React/Vue wrappers (<Db*>), ' +
		'color tokens like db-color-*, legacy icon names, and @db-ui/* packages, distinguishing Generation 2 ' +
		'from Generation 3 pre-releases), self-built controls (candidate) and hard-coded colors, sizes and shadows (value), and returns a JSON report ' +
		'with exact line numbers and deterministic migration suggestions resolved from ' +
		'the official migration guides. This gives you a precise migration plan before ' +
		'you start generating code — no guessing needed.',
	inputSchema: scanMigrationInputSchema
};

export const planMigrationSchema = {
	description:
		'IMPORTANT: Call this tool FIRST, before any other tool, when the user asks to migrate an application or files to DB UX Design System – Generation 3. ' +
		"It reads the project's package.json and returns either the questions you must ask the user (application type, framework, what the current interface is built with, DB Theme, local URL, browser inspection) " +
		'or, once all answers are passed in, the ordered workflow with the tools and migration guides to use. ' +
		'Call it again with the answers. Do not change code before you have the plan.',
	inputSchema: z.object({
		projectRoot: z
			.string()
			.max(500)
			.optional()
			.describe(
				'Folder that contains the package.json, relative to the workspace root. Defaults to the workspace root.'
			),
		appType: z
			.enum(APP_TYPES)
			.optional()
			.describe(
				'business (internal tool), consumer (app or portal for customers) or marketing (campaign, landing page).'
			),
		framework: z
			.enum(PLAN_FRAMEWORKS)
			.optional()
			.describe('Target framework.'),
		sources: z
			.array(z.enum(SOURCES))
			.max(SOURCES.length)
			.optional()
			.describe(
				'What the current interface is built with, as answered by the user. Several values possible.'
			),
		dbProduct: z
			.boolean()
			.optional()
			.describe('true if the product needs the DB Theme.'),
		appRunsLocally: z
			.boolean()
			.optional()
			.describe(
				'true if the application can run locally for inspection.'
			),
		appUrl: z
			.string()
			.max(500)
			.optional()
			.describe(
				'URL of the locally running application, e.g. http://localhost:5173.'
			),
		browserTool: z
			.boolean()
			.optional()
			.describe(
				'true if you (the agent) have a browser tool such as the Chrome DevTools MCP with take_snapshot and take_screenshot.'
			)
	})
};

export const listVisualsSchema = {
	description:
		'Returns all available visual reference names (e.g. dashboard, form, table). ' +
		'Call this first to discover which visuals exist before requesting one.'
};

export const getVisualReferenceSchema = {
	description:
		'Returns a pre-optimised visual reference image (max 800×800 px, JPEG q75) as a ' +
		'Base64-encoded image block. Use this when you need visual context for complex layouts, ' +
		'z-index reasoning, or verifying visual hierarchies. Call list_visuals first to see ' +
		'available names.',
	inputSchema: z.object({
		name: z
			.string()
			.max(100)
			.describe(
				"Name of the visual reference (e.g. 'dashboard', 'form', 'table'). Call list_visuals to see all available names."
			)
	})
};
