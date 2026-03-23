import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { z } from 'zod/v3';

// ---------------------------------------------------------------------------
// Path resolution — works in two environments:
//
//   Monorepo  (npx tsx packages/mcp-server/src/index.ts)
//     __dirname = packages/mcp-server/src/
//     REPO_ROOT = ../../..  →  core-web/
//
//   Installed package  (npx @db-ux/core-foundations)
//     __dirname = node_modules/@db-ux/core-foundations/build/mcp/
//     REPO_ROOT candidate would not contain packages/ → falls back to manifest
// ---------------------------------------------------------------------------

const SERVER_DIR = import.meta.dirname;
const REPO_ROOT_CANDIDATE = resolve(SERVER_DIR, '../../..');

function isMonorepo(): boolean {
	return existsSync(
		join(REPO_ROOT_CANDIDATE, 'packages/components/src/components')
	);
}

// Live paths (monorepo only)
const REPO_ROOT = REPO_ROOT_CANDIDATE;
const COMPONENTS_DIR = join(REPO_ROOT, 'packages/components/src/components');
const OUTPUT_DIR = join(REPO_ROOT, 'output');
const ALL_ICONS_FILE = join(REPO_ROOT, 'packages/foundations/src/all-icons.ts');
const FOUNDATIONS_DIR = join(REPO_ROOT, 'packages/foundations');

// Embedded manifest (npx / installed package)
type Framework = 'react' | 'angular' | 'vue';
type Manifest = {
	icons: string[];
	components: Record<
		string,
		{
			props: string | null;
			examples: string[];
			exampleCode: Record<Framework, Record<string, string>>;
		}
	>;
};

let _manifest: Manifest | null = null;
async function getManifest(): Promise<Manifest> {
	if (_manifest) return _manifest;
	const manifestPath = join(SERVER_DIR, 'manifest.json');
	if (!existsSync(manifestPath)) {
		throw new Error(`manifest.json not found at ${manifestPath}`);
	}
	_manifest = JSON.parse(await readFile(manifestPath, 'utf-8')) as Manifest;
	return _manifest;
}

// ---------------------------------------------------------------------------

const server = new McpServer({ name: 'db-ux-mcp', version: '0.1.0' });

// ---------------------------------------------------------------------------
// list_components
// ---------------------------------------------------------------------------
server.registerTool(
	'list_components',
	{
		description:
			'Returns all available DB UX component names by scanning packages/components/src/components.'
	},
	async () => {
		if (isMonorepo()) {
			const entries = await readdir(COMPONENTS_DIR, {
				withFileTypes: true
			});
			const components = entries
				.filter((e) => e.isDirectory())
				.map((e) => e.name);
			return {
				content: [
					{ type: 'text', text: JSON.stringify(components, null, 2) }
				]
			};
		}
		const manifest = await getManifest();
		return {
			content: [
				{
					type: 'text',
					text: JSON.stringify(
						Object.keys(manifest.components),
						null,
						2
					)
				}
			]
		};
	}
);

// ---------------------------------------------------------------------------
// get_component_details
// ---------------------------------------------------------------------------
server.registerTool(
	'get_component_details',
	{
		description:
			'Returns the list of examples (e.g. Density, Variant) for a component by reading its showcase file.',
		inputSchema: { componentName: z.string().describe("e.g. 'button'") }
	},
	async ({ componentName }) => {
		if (isMonorepo()) {
			const showcaseFile = join(
				COMPONENTS_DIR,
				componentName,
				'showcase',
				`${componentName}.showcase.lite.tsx`
			);
			if (!existsSync(showcaseFile)) {
				return {
					content: [
						{
							type: 'text',
							text: `Error: showcase file not found at ${showcaseFile}`
						}
					],
					isError: true
				};
			}
			const source = await readFile(showcaseFile, 'utf-8');
			const examples = [...source.matchAll(/exampleName="([^"]+)"/g)].map(
				(m) => m[1]
			);
			return {
				content: [
					{
						type: 'text',
						text:
							examples.length > 0
								? JSON.stringify(examples, null, 2)
								: 'No examples found.'
					}
				]
			};
		}
		const manifest = await getManifest();
		const comp = manifest.components[componentName];
		if (!comp) {
			return {
				content: [
					{
						type: 'text',
						text: `Error: component '${componentName}' not found in manifest`
					}
				],
				isError: true
			};
		}
		return {
			content: [
				{
					type: 'text',
					text:
						comp.examples.length > 0
							? JSON.stringify(comp.examples, null, 2)
							: 'No examples found.'
				}
			]
		};
	}
);

// ---------------------------------------------------------------------------
// get_component_props
// ---------------------------------------------------------------------------
server.registerTool(
	'get_component_props',
	{
		description:
			"Returns the raw TypeScript content of a component's model.ts, listing all interfaces and props.",
		inputSchema: { componentName: z.string().describe("e.g. 'button'") }
	},
	async ({ componentName }) => {
		if (isMonorepo()) {
			const modelFile = join(COMPONENTS_DIR, componentName, 'model.ts');
			if (!existsSync(modelFile)) {
				return {
					content: [
						{
							type: 'text',
							text: `Error: model.ts not found at ${modelFile}`
						}
					],
					isError: true
				};
			}
			return {
				content: [
					{ type: 'text', text: await readFile(modelFile, 'utf-8') }
				]
			};
		}
		const manifest = await getManifest();
		const comp = manifest.components[componentName];
		if (!comp?.props) {
			return {
				content: [
					{
						type: 'text',
						text: `Error: props for '${componentName}' not found in manifest`
					}
				],
				isError: true
			};
		}
		return { content: [{ type: 'text', text: comp.props }] };
	}
);

// ---------------------------------------------------------------------------
// list_design_token_categories / get_design_tokens  (monorepo-only)
// ---------------------------------------------------------------------------
const TOKEN_FILES: Record<string, string> = {
	colors: join(FOUNDATIONS_DIR, 'scss/colors/_variables.scss'),
	typography: join(FOUNDATIONS_DIR, 'scss/fonts/_variables.scss'),
	spacing: join(FOUNDATIONS_DIR, 'scss/_variables.scss'),
	sizing: join(FOUNDATIONS_DIR, 'scss/_variables.scss'),
	density: join(FOUNDATIONS_DIR, 'scss/density/_variables.scss'),
	animation: join(FOUNDATIONS_DIR, 'scss/animation/_animations.scss'),
	transitions: join(FOUNDATIONS_DIR, 'scss/animation/_transitions.scss')
};

server.registerTool(
	'list_design_token_categories',
	{
		description:
			'Returns all available DB UX design token categories (e.g. colors, spacing, typography).'
	},
	async () => {
		const categories = Object.keys(TOKEN_FILES).filter((key) =>
			existsSync(TOKEN_FILES[key])
		);
		return {
			content: [
				{ type: 'text', text: JSON.stringify(categories, null, 2) }
			]
		};
	}
);

server.registerTool(
	'get_design_tokens',
	{
		description:
			'Returns CSS custom properties (--db-*) and SCSS variables ($db-*) for a given design token category.',
		inputSchema: {
			category: z
				.string()
				.describe(
					"Token category, e.g. 'colors', 'spacing', 'typography'. Use list_design_token_categories to get available categories."
				)
		}
	},
	async ({ category }) => {
		const filePath = TOKEN_FILES[category];
		if (!filePath) {
			return {
				content: [
					{
						type: 'text' as const,
						text: `Error: unknown category '${category}'. Available: ${Object.keys(TOKEN_FILES).join(', ')}`
					}
				],
				isError: true
			};
		}
		if (!existsSync(filePath)) {
			return {
				content: [
					{
						type: 'text' as const,
						text: `Error: token file not found at ${filePath}`
					}
				],
				isError: true
			};
		}
		const source = await readFile(filePath, 'utf-8');
		const lines = source
			.split('\n')
			.filter((line) => /--db-|^\$db-/.test(line));
		return {
			content: [
				{
					type: 'text' as const,
					text: lines.length > 0 ? lines.join('\n') : source
				}
			]
		};
	}
);

// ---------------------------------------------------------------------------
// list_icons
// ---------------------------------------------------------------------------
server.registerTool(
	'list_icons',
	{
		description:
			"Returns all available DB UX icon names (e.g. 'arrow_down', 'chevron_right') " +
			'from the generated all-icons.ts in packages/foundations/src.'
	},
	async () => {
		if (isMonorepo() && existsSync(ALL_ICONS_FILE)) {
			const source = await readFile(ALL_ICONS_FILE, 'utf-8');
			const icons = [...source.matchAll(/'([^']+)'/g)].map((m) => m[1]);
			return {
				content: [
					{
						type: 'text' as const,
						text: JSON.stringify(icons, null, 2)
					}
				]
			};
		}
		const manifest = await getManifest();
		return {
			content: [
				{
					type: 'text' as const,
					text: JSON.stringify(manifest.icons, null, 2)
				}
			]
		};
	}
);

// ---------------------------------------------------------------------------
// get_example_code
// ---------------------------------------------------------------------------
function toKebabCase(name: string): string {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

const FRAMEWORK_EXT: Record<Framework, string> = {
	react: 'tsx',
	angular: 'ts',
	vue: 'vue'
};

server.registerTool(
	'get_example_code',
	{
		description:
			'Returns the generated framework-specific source code for a component example. ' +
			'For Angular, the template is inline inside the @Component decorator within the .ts file.',
		inputSchema: {
			componentName: z.string().describe("e.g. 'button'"),
			exampleName: z
				.string()
				.describe("Readable example name, e.g. 'Show Icon Leading'"),
			framework: z
				.enum(['react', 'angular', 'vue'])
				.describe("Target framework: 'react', 'angular', or 'vue'")
		}
	},
	async ({ componentName, exampleName, framework }) => {
		const kebab = toKebabCase(exampleName);
		const ext = FRAMEWORK_EXT[framework];

		if (isMonorepo()) {
			const examplesDir = join(
				OUTPUT_DIR,
				framework,
				'src/components',
				componentName,
				'examples'
			);
			let resolvedPath = join(examplesDir, `${kebab}.example.${ext}`);
			if (!existsSync(resolvedPath)) {
				const entries = existsSync(examplesDir)
					? await readdir(examplesDir)
					: [];
				const match = entries.find(
					(f) =>
						f.endsWith(`.example.${ext}`) &&
						kebab.startsWith(f.replace(`.example.${ext}`, ''))
				);
				if (match) {
					resolvedPath = join(examplesDir, match);
				} else {
					return {
						content: [
							{
								type: 'text' as const,
								text: `Error: file not found at ${resolvedPath}`
							}
						],
						isError: true
					};
				}
			}
			return {
				content: [
					{
						type: 'text' as const,
						text: await readFile(resolvedPath, 'utf-8')
					}
				]
			};
		}

		// Manifest fallback
		const manifest = await getManifest();
		const comp = manifest.components[componentName];
		if (!comp) {
			return {
				content: [
					{
						type: 'text' as const,
						text: `Error: component '${componentName}' not found`
					}
				],
				isError: true
			};
		}
		const fwExamples = comp.exampleCode[framework] ?? {};
		const directKey = `${kebab}.example.${ext}`;
		let src: string | undefined = fwExamples[directKey];
		if (!src) {
			// Prefix fallback
			const matchKey = Object.keys(fwExamples).find(
				(k) =>
					k.endsWith(`.example.${ext}`) &&
					kebab.startsWith(k.replace(`.example.${ext}`, ''))
			);
			src = matchKey ? fwExamples[matchKey] : undefined;
		}
		if (!src) {
			return {
				content: [
					{
						type: 'text' as const,
						text: `Error: example '${exampleName}' for '${componentName}' (${framework}) not found in manifest`
					}
				],
				isError: true
			};
		}
		return { content: [{ type: 'text' as const, text: src }] };
	}
);

// ---------------------------------------------------------------------------
// scaffold_page prompt
// ---------------------------------------------------------------------------
server.registerPrompt(
	'scaffold_page',
	{
		description:
			'Generates the initial structure of a complete web page or complex module (e.g. dashboard, form). Enforces the full DB UX MCP discovery workflow before writing any code.',
		argsSchema: {
			page_type: z
				.string()
				.describe(
					"The functional domain or structural type of the page (e.g. 'Login Portal', 'Dashboard', 'Settings Form'). Used in Phase 1 to decompose the page into UI blocks and drives component selection throughout the workflow."
				),
			framework: z
				.string()
				.describe(
					"The target framework for code generation. Allowed values: angular, react, vue, web-components, html. Must be passed verbatim as the 'framework' parameter to every get_example_code call."
				),
			additional_requirements: z
				.string()
				.optional()
				.describe(
					"Optional functional or architectural requirements (e.g. 'must include a data table with pagination', 'dark mode support required'). These requirements refine the UI block decomposition in Phase 1 and may add or remove components from the plan."
				)
		}
	},
	({ page_type, framework, additional_requirements }) => ({
		description:
			'Builds a DB UX page layout using the full MCP discovery workflow',
		messages: [
			{
				role: 'user',
				content: {
					type: 'text',
					text: `You are a Lead Enterprise Frontend Architect specializing in the DB UX Design System v3. Your objective is to architect and implement a production-ready page layout for the Deutsche Bahn digital ecosystem.

Target Framework: ${framework}
Page Type: ${page_type}
Additional Requirements: ${additional_requirements ?? 'None specified.'}

The DB UX system strictly enforces declarative, accessible, and decoupled HTML/CSS architecture. Framework-specific components reside in dedicated packages (e.g., @db-ux/react-core-components, @db-ux/ngx-core-components, @db-ux/v-core-components, @db-ux/wc-core-components).

CRITICAL INSTRUCTION: You are explicitly FORBIDDEN from:
- Hallucinating component names, properties, CSS variables, or import statements
- Using native HTML interactive elements (<button>, <input>, <select>, <a>, <textarea>) where a DB UX component exists
- Using hardcoded color values (e.g. #ec0016) or magic spacing numbers (e.g. margin: 15px) — always use design tokens
- Inventing icon names — always verify via list_icons

If a required UI element does not exist as a DB UX component, STOP and explicitly report which element is missing instead of falling back to a native HTML or custom implementation.

You MUST follow this exact workflow using your MCP tools BEFORE writing any code:

1. PLANNING PHASE: Deconstruct the requested "${page_type}" into logical UI blocks (e.g., Header, Main Content, Form Fields, Data Tables, Modals). Factor in the Additional Requirements: "${additional_requirements ?? 'None specified.'}" — they may add, remove, or constrain the components in your plan.

2. COMPONENT DISCOVERY: Execute 'list_components' to verify that every planned UI block maps to an existing DB UX v3 component. Remove any block whose component does not exist and report it.

3. PROPS & EXAMPLES RETRIEVAL: For every confirmed component:
   a. Execute 'get_component_props' to retrieve the full TypeScript prop API (types, required fields, defaults).
   b. Execute 'get_component_details' to list available example names.
   c. Execute 'get_example_code' with the component name, the most relevant example name, and framework="${framework}" to obtain the exact generated source. Adapt this code — do not rewrite it from scratch.

4. TOKEN & ASSET VALIDATION:
   a. Execute 'list_design_token_categories' to retrieve all valid token categories.
   b. Execute 'get_design_tokens' for every category you need (e.g. "colors", "spacing", "typography"). Use only the returned CSS custom properties (--db-*) — never hardcode values.
   c. If any icon prop is required, execute 'list_icons' and copy the exact name from the returned array.

Native HTML replacement rules (enforce strictly):
- <button>      → DBButton
- <input>       → DBInput
- <select>      → DBSelect
- <a>           → DBLink
- <textarea>    → DBTextarea
- <div> layout  → DBStack, DBSection, DBCard

Do not output code until all four phases are complete. Then structure your response as follows:

1. "Architectural Blueprint": Bulleted list of DB UX components selected, the example used for each, and how Additional Requirements influenced the plan.
2. "Implementation": Complete source code for the requested page as a single file (or clearly separated components if complexity demands it). All imports must reference the correct @db-ux/* package for "${framework}". No hardcoded values, no native interactive elements, no invented icon names.
3. "Accessibility Statement": Confirmation of how semantic HTML and ARIA states are applied through DB UX components, and any additional accessibility measures taken.`
				}
			}
		]
	})
);

// review_ui_code prompt
// ---------------------------------------------------------------------------
server.registerPrompt(
	'review_ui_code',
	{
		description:
			'Performs a strict multi-layered QA, accessibility, and DB UX compliance audit on a provided code snippet.',
		argsSchema: {
			code_snippet: z
				.string()
				.describe(
					'The source code to be evaluated (including markup, styling, logic).'
				),
			framework: z
				.string()
				.describe(
					'The framework used in the code (e.g., react, angular, vue).'
				)
		}
	},
	({ code_snippet, framework }) => ({
		description:
			'Audits a UI code snippet against DB UX v3 compliance, design tokens, and WCAG 2.2 AA',
		messages: [
			{
				role: 'user',
				content: {
					type: 'text',
					text: `You are a highly rigorous QA Automation Expert, Accessibility Auditor, and DB UX Design System Guardian.
Perform a merciless, multi-layered code review of the provided ${framework} snippet.

<snippet>
${code_snippet}
</snippet>

To prevent false positives or inaccurate advice, you MUST base your review on documented facts.
Execute the following actions using your MCP tools:

1. Cross-Reference Components: Call 'list_components' and 'get_example_code' to analyze if the components used in the snippet deviate from the official DB UX v3 specifications (e.g., deprecated props, missing mandatory slots, wrong variant syntax).
2. Token Audit: Call 'get_design_tokens'. Scan the snippet for any hardcoded hex values, rem/px/em definitions, or raw font families. Verify the exact DB UX CSS variable that must replace them.

Analyze the code against these strict domains:
- Architecture & Compliance: Are declarative selectors used correctly? Are the framework-specific wrappers (@db-ux/${framework}-core-components) imported properly? Are there any inline styles (which are strictly forbidden)?
- Accessibility (A11y): You must verify:
  * WCAG 1.3.5: Are input purposes programmatically determinable?
  * WCAG 1.4.3: Is there a risk of contrast minimum failure due to incorrect class usage?
  * WCAG 2.1.1 & 2.1.2: Are there potential keyboard traps? Are interactive elements reachable via Tab?
  * ARIA: Are aria-roles, aria-expanded, and aria-describedby used correctly based on the DB UX examples?

Deliver your analysis in the following strict format:
1. "Review Summary": A high-level assessment of the snippet's quality.
2. "Critical Violations": A prioritized list of issues. For each violation, you MUST provide EVIDENCE from the DB UX tools (e.g., "The component 'DBButton' requires the prop 'variant' according to the manifest, but it is missing").
3. "The Refactored Solution": The fully corrected, clean, and DB UX-compliant code block.`
				}
			}
		]
	})
);

const transport = new StdioServerTransport();
await server.connect(transport);
