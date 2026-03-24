import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { z } from 'zod/v3';
import packageJson from '../package.json';

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
const REPO_ROOT = resolve(SERVER_DIR, '../../..');

const IS_MONOREPO = existsSync(
	join(REPO_ROOT, 'packages/components/src/components')
);

// Live paths (monorepo only)
const COMPONENTS_DIR = join(REPO_ROOT, 'packages/components/src/components');

// --- Security Utilities ---
const MAX_FILE_CONTENT = 5000;
const MAX_JSON_OUTPUT = 20_000;

function truncate(
	text: string,
	limit: number,
	label = 'TRUNCATED DUE TO SIZE'
): string {
	return text.length > limit
		? text.substring(0, limit) + `\n... [${label}]`
		: text;
}

// --- Timeout Utility (Hanging-Prevention) ---
const TOOL_TIMEOUT_MS = 10000; // 10 seconds

/**
 * Wraps a promise with a timeout. If it takes longer than 10 seconds,
 * it returns a semantic MCP error object to the LLM instead of crashing.
 */
async function withTimeout<T>(
	operation: Promise<T>,
	timeoutMessage: string
): Promise<
	T | { content: { type: 'text'; text: string }[]; isError: boolean }
> {
	let timer: ReturnType<typeof setTimeout> | undefined;
	const timeoutPromise = new Promise<any>((resolve) => {
		timer = setTimeout(() => {
			resolve({
				content: [{ type: 'text', text: timeoutMessage }],
				isError: true
			});
		}, TOOL_TIMEOUT_MS);
	});

	const result = await Promise.race([operation, timeoutPromise]);
	if (timer) clearTimeout(timer);
	return result;
}

const COMPONENT_NOT_FOUND_MSG = (name: string) =>
	`Error: Component '${name}' is not available in the DB UX Design System. Please check your spelling or use the 'list_components' tool to see all valid components.`;

/**
 * Resolves a path and ensures it remains strictly within the allowed base directory.
 * Prevents Path Traversal (Directory Climbing) attacks.
 */
function resolveSafePath(baseDir: string, userPath: string): string {
	const absoluteBase = resolve(baseDir);
	const absoluteRequested = resolve(baseDir, userPath);

	if (
		!absoluteRequested.startsWith(absoluteBase + '/') &&
		absoluteRequested !== absoluteBase
	) {
		throw new Error(
			'Security Access Denied: Path traversal detected. The requested path is outside the allowed directory.'
		);
	}
	return absoluteRequested;
}
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
export function resetManifestCache() {
	_manifest = null;
}
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

const server = new McpServer({
	name: 'db-ux-mcp',
	version: packageJson.version
});

// ---------------------------------------------------------------------------
// list_components
// ---------------------------------------------------------------------------
export async function handleListComponents(): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const entries = await readdir(COMPONENTS_DIR, { withFileTypes: true });
		const components = entries
			.filter((e) => e.isDirectory())
			.map((e) => e.name);
		return {
			content: [
				{
					type: 'text',
					text: truncate(
						JSON.stringify(components, null, 2),
						MAX_JSON_OUTPUT
					)
				}
			]
		};
	}
	const manifest = await getManifest();
	return {
		content: [
			{
				type: 'text',
				text: truncate(
					JSON.stringify(Object.keys(manifest.components), null, 2),
					MAX_JSON_OUTPUT
				)
			}
		]
	};
}

server.registerTool(
	'list_components',
	{
		description:
			'Returns all available DB UX component names by scanning packages/components/src/components.'
	},
	handleListComponents
);

// ---------------------------------------------------------------------------
// get_component_details
// ---------------------------------------------------------------------------
export async function handleGetComponentDetails({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const safeComponentPath = resolveSafePath(
			COMPONENTS_DIR,
			componentName
		);
		if (!existsSync(safeComponentPath)) {
			return {
				content: [
					{
						type: 'text',
						text: COMPONENT_NOT_FOUND_MSG(componentName)
					}
				],
				isError: true
			};
		}
		const showcaseFile = join(
			safeComponentPath,
			'showcase',
			`${componentName}.showcase.lite.tsx`
		);
		if (!existsSync(showcaseFile)) {
			return {
				content: [
					{
						type: 'text',
						text: `Error: File for component '${componentName}' not found.`
					}
				],
				isError: true
			};
		}
		const source = truncate(
			await readFile(showcaseFile, 'utf-8'),
			MAX_FILE_CONTENT
		);
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
				{ type: 'text', text: COMPONENT_NOT_FOUND_MSG(componentName) }
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

server.registerTool(
	'get_component_details',
	{
		description:
			'Returns the list of examples (e.g. Density, Variant) for a component by reading its showcase file.',
		inputSchema: { componentName: z.string().describe("e.g. 'button'") }
	},
	handleGetComponentDetails
);

// ---------------------------------------------------------------------------
// get_component_props
// ---------------------------------------------------------------------------
type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

export async function handleGetComponentProps({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const safeComponentPath = resolveSafePath(
			COMPONENTS_DIR,
			componentName
		);
		if (!existsSync(safeComponentPath)) {
			return {
				content: [
					{
						type: 'text',
						text: COMPONENT_NOT_FOUND_MSG(componentName)
					}
				],
				isError: true
			};
		}
		const modelFile = join(safeComponentPath, 'model.ts');
		if (!existsSync(modelFile)) {
			return {
				content: [
					{
						type: 'text',
						text: `Error: Props file (model.ts) for component '${componentName}' not found.`
					}
				],
				isError: true
			};
		}
		return {
			content: [
				{
					type: 'text',
					text: truncate(
						await readFile(modelFile, 'utf-8'),
						MAX_FILE_CONTENT
					)
				}
			]
		};
	}
	const manifest = await getManifest();
	const comp = manifest.components[componentName];
	if (!comp) {
		return {
			content: [
				{ type: 'text', text: COMPONENT_NOT_FOUND_MSG(componentName) }
			],
			isError: true
		};
	}
	if (!comp.props) {
		return {
			content: [
				{
					type: 'text',
					text: `Error: Props file (model.ts) for component '${componentName}' not found.`
				}
			],
			isError: true
		};
	}
	return {
		content: [
			{ type: 'text', text: truncate(comp.props, MAX_FILE_CONTENT) }
		]
	};
}

server.registerTool(
	'get_component_props',
	{
		description:
			"Returns the raw TypeScript content of a component's model.ts, listing all interfaces and props.",
		inputSchema: { componentName: z.string().describe("e.g. 'button'") }
	},
	handleGetComponentProps
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

export async function handleListDesignTokenCategories(): Promise<ToolResult> {
	const categories = Object.keys(TOKEN_FILES).filter((key) =>
		existsSync(TOKEN_FILES[key])
	);
	return {
		content: [{ type: 'text', text: JSON.stringify(categories, null, 2) }]
	};
}

server.registerTool(
	'list_design_token_categories',
	{
		description:
			'Returns all available DB UX design token categories (e.g. colors, spacing, typography).'
	},
	handleListDesignTokenCategories
);

export async function handleGetDesignTokens({
	category
}: {
	category: string;
}): Promise<ToolResult> {
	const filePath = TOKEN_FILES[category];
	if (!filePath) {
		return {
			content: [
				{
					type: 'text',
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
					type: 'text',
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
				type: 'text',
				text: truncate(
					lines.length > 0 ? lines.join('\n') : source,
					MAX_JSON_OUTPUT
				)
			}
		]
	};
}

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
	handleGetDesignTokens
);

// ---------------------------------------------------------------------------
// list_icons
// ---------------------------------------------------------------------------
export async function handleListIcons(): Promise<ToolResult> {
	if (IS_MONOREPO && existsSync(ALL_ICONS_FILE)) {
		const source = await readFile(ALL_ICONS_FILE, 'utf-8');
		const icons = [...source.matchAll(/'([^']+)'/g)].map((m) => m[1]);
		return {
			content: [
				{
					type: 'text',
					text: truncate(
						JSON.stringify(icons, null, 2),
						MAX_JSON_OUTPUT
					)
				}
			]
		};
	}
	const manifest = await getManifest();
	return {
		content: [
			{
				type: 'text',
				text: truncate(
					JSON.stringify(manifest.icons, null, 2),
					MAX_JSON_OUTPUT
				)
			}
		]
	};
}

server.registerTool(
	'list_icons',
	{
		description:
			"Returns all available DB UX icon names (e.g. 'arrow_down', 'chevron_right') " +
			'from the generated all-icons.ts in packages/foundations/src.'
	},
	handleListIcons
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

export async function handleGetExampleCode({
	componentName,
	exampleName,
	framework
}: {
	componentName: string;
	exampleName: string;
	framework: Framework;
}): Promise<ToolResult> {
	return withTimeout(
		(async () => {
			const kebab = toKebabCase(exampleName);
			const ext = FRAMEWORK_EXT[framework];

			if (IS_MONOREPO) {
				const safeComponentPath = resolveSafePath(
					join(OUTPUT_DIR, framework, 'src/components'),
					componentName
				);
				if (!existsSync(safeComponentPath)) {
					return {
						content: [
							{
								type: 'text',
								text: COMPONENT_NOT_FOUND_MSG(componentName)
							}
						],
						isError: true
					};
				}
				const examplesDir = join(safeComponentPath, 'examples');
				let resolvedPath = join(examplesDir, `${kebab}.example.${ext}`);
				if (!existsSync(resolvedPath)) {
					const allEntries = existsSync(examplesDir)
						? await readdir(examplesDir)
						: [];
					const match = allEntries.slice(0, 10).find((f) => {
						if (!f.endsWith(`.example.${ext}`)) return false;
						const stem = f.replace(`.example.${ext}`, '');
						return kebab.startsWith(stem) || stem.startsWith(kebab);
					});
					if (match) {
						resolvedPath = join(examplesDir, match);
					} else {
						return {
							content: [
								{
									type: 'text',
									text: `Error: Example '${exampleName}' for component '${componentName}' not found. Use 'get_component_details' to see available examples.`
								}
							],
							isError: true
						};
					}
				}
				return {
					content: [
						{
							type: 'text',
							text: truncate(
								await readFile(resolvedPath, 'utf-8'),
								MAX_FILE_CONTENT
							)
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
							type: 'text',
							text: COMPONENT_NOT_FOUND_MSG(componentName)
						}
					],
					isError: true
				};
			}
			const fwExamples = comp.exampleCode[framework] ?? {};
			const directKey = `${kebab}.example.${ext}`;
			const matchKey = fwExamples[directKey]
				? directKey
				: Object.keys(fwExamples).find((k) => {
						if (!k.endsWith(`.example.${ext}`)) return false;
						const stem = k.replace(`.example.${ext}`, '');
						return kebab.startsWith(stem) || stem.startsWith(kebab);
					});
			if (!matchKey) {
				return {
					content: [
						{
							type: 'text',
							text: `Error: Example '${exampleName}' for component '${componentName}' not found. Use 'get_component_details' to see available examples.`
						}
					],
					isError: true
				};
			}
			return {
				content: [
					{
						type: 'text',
						text: truncate(fwExamples[matchKey], MAX_FILE_CONTENT)
					}
				]
			};
		})(),
		'Error: Reading example files took too long (exceeded 10 seconds).'
	) as any;
}

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
	handleGetExampleCode
);

// ---------------------------------------------------------------------------
// docs_search
// ---------------------------------------------------------------------------
export async function handleDocsSearch({
	query,
	category,
	componentName,
	docType
}: {
	query: string;
	category: 'global' | 'component';
	componentName?: string;
	docType?: string;
}): Promise<ToolResult> {
	if (!IS_MONOREPO) {
		return {
			content: [
				{
					type: 'text',
					text: 'Error: docs_search is only available in the monorepo environment.'
				}
			],
			isError: true
		};
	}
	return withTimeout(
		(async () => {
			const results: string[] = [];
			const searchTerms = query
				.toLowerCase()
				.split(' ')
				.filter((t) => t.trim().length > 2);

			if (category === 'component') {
				if (!componentName) {
					return {
						content: [
							{
								type: 'text',
								text: 'Error: componentName is required for component search.'
							}
						],
						isError: true
					};
				}
				const safeComponentPath = resolveSafePath(
					COMPONENTS_DIR,
					componentName
				);
				const compDocsDir = join(safeComponentPath, 'docs');
				if (existsSync(compDocsDir)) {
					const files = await readdir(compDocsDir);
					for (const file of files) {
						if (!file.endsWith('.md')) continue;
						if (
							docType &&
							!file.toLowerCase().includes(docType.toLowerCase())
						)
							continue;
						const content = await readFile(
							join(compDocsDir, file),
							'utf-8'
						);
						const isMatch =
							searchTerms.length === 0 ||
							searchTerms.every((term) =>
								content.toLowerCase().includes(term)
							);
						if (isMatch)
							results.push(
								`--- ${componentName}/docs/${file} ---\n${content}`
							);
					}
				} else {
					results.push(
						`No documentation found for component '${componentName}'.`
					);
				}
			} else {
				const docsDir = join(REPO_ROOT, 'docs');
				if (existsSync(docsDir)) {
					const searchDir = async (currentDir: string) => {
						const entries = await readdir(currentDir, {
							withFileTypes: true
						});
						for (const entry of entries) {
							const fullPath = join(currentDir, entry.name);
							if (entry.isDirectory()) {
								await searchDir(fullPath);
							} else if (entry.name.endsWith('.md')) {
								const content = await readFile(
									fullPath,
									'utf-8'
								);
								const isMatch =
									searchTerms.length === 0 ||
									searchTerms.every((term) =>
										content.toLowerCase().includes(term)
									);
								if (isMatch) {
									const snippet =
										content.length > 3000
											? content.substring(0, 3000) +
												'\n... [TRUNCATED]'
											: content;
									results.push(
										`--- ${fullPath.replace(REPO_ROOT, '')} ---\n${snippet}`
									);
								}
							}
						}
					};
					await searchDir(docsDir);
				}
			}

			if (results.length === 0) {
				return {
					content: [
						{
							type: 'text',
							text: `No documentation found matching query: '${query}'`
						}
					]
				};
			}
			return {
				content: [
					{ type: 'text', text: results.slice(0, 3).join('\n\n') }
				]
			};
		})(),
		'Error: Search took too long (exceeded 10 seconds). The directory might be too large. Please refine your query.'
	) as any;
}

server.registerTool(
	'docs_search',
	{
		description:
			'Searches the DB UX conceptual documentation (guidelines, A11y, migration, ADRs) or component-specific markdown docs.',
		inputSchema: {
			query: z
				.string()
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
// scaffold_page prompt
// ---------------------------------------------------------------------------
export function handleScaffoldPagePrompt({
	page_type,
	framework,
	additional_requirements
}: {
	page_type: string;
	framework: string;
	additional_requirements?: string;
}) {
	return {
		description:
			'Builds a DB UX page layout using the full MCP discovery workflow',
		messages: [
			{
				role: 'user' as const,
				content: {
					type: 'text' as const,
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
	};
}

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
				.optional()
				.describe(
					"Optional functional or architectural requirements (e.g. 'must include a data table with pagination', 'dark mode support required'). These requirements refine the UI block decomposition in Phase 1 and may add or remove components from the plan."
				)
		}
	},
	handleScaffoldPagePrompt
);

// ---------------------------------------------------------------------------
export function handleReviewUiCodePrompt({
	code_snippet,
	framework
}: {
	code_snippet: string;
	framework: string;
}) {
	return {
		description:
			'Audits a UI code snippet against DB UX v3 compliance, design tokens, and WCAG 2.2 AA',
		messages: [
			{
				role: 'user' as const,
				content: {
					type: 'text' as const,
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
	};
}

// ---------------------------------------------------------------------------
// migrate_component prompt
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// migrate_component prompt

// ---------------------------------------------------------------------------
export function handleMigrateComponentPrompt({
	legacy_code,
	source_context,
	target_framework
}: {
	legacy_code: string;
	source_context: string;
	target_framework: string;
}) {
	return {
		description:
			'Migrates legacy UI code to DB UX v3 standards using MCP tools',
		messages: [
			{
				role: 'user' as const,
				content: {
					type: 'text' as const,
					text: `You are a Legacy Systems Modernization Specialist and DB UX Architecture Expert.
Your assignment is to securely migrate UI code from ${source_context} into the modern DB UX Design System v3 standard.

<legacy_snippet>
${legacy_code}
</legacy_snippet>

Target V3 Framework: ${target_framework}

Do not perform a naive, line-by-line syntax translation. Be aware of these documented structural shifts in DB UX v3:

PACKAGE RENAMES (db-ui → db-ux):
- @db-ui/foundations → @db-ux/core-foundations
- @db-ui/components → @db-ux/core-components
- @db-ui/ngx-components → @db-ux/ngx-core-components
- @db-ui/react-components → @db-ux/react-core-components
- @db-ui/v-components → @db-ux/v-core-components
- @db-ui/web-components → @db-ux/wc-core-components

KNOWN BREAKING CHANGES TO APPLY:
- data-color-scheme → data-mode
- data-container-color → data-color
- behaviour → behavior (all components)
- data-icon-before/after → data-icon-leading/trailing, iconLeading/iconTrailing
- DBButton: removed describedbyid/ariaexpanded/ariapressed/label props → use native aria-* attributes directly
- DBLink: removed selected/current/label props → use aria-selected/aria-current/aria-label
- DBNavigation: removed labelledBy → use aria-labelledby
- DBCard behavior='interactive': no longer sets role='button' or tabIndex — wrap with <button> or <a> instead
- DBSwitch: emphasis prop removed
- DBCustomSelect: ariaListLabel renamed to listLabel
- Tooltip: variant='with arrow'|'basic' → showArrow=true|false

COMPONENTS WITHOUT DIRECT V3 EQUIVALENTS (do not invent replacements — use documented strategies):
- rea-main → db-page (already includes <main>)
- rea-grid → CSS Grid with var(--db-spacing-fixed-md) or db-stack
- rea-footer → semantic <footer> + db-link (planned Q4/2025)
- elm-headline → semantic <h1>–<h6> + db-infotext for subtitles
- elm-loadingindicator → planned Q4/2025; use aria-live region temporarily
- elm-progress → planned Q4/2025; use HTML5 <progress> with aria-label
- elm-chip → db-tag wrapping db-button/db-checkbox/db-radio
- cmp-breadcrumb → planned Q4/2025; use <nav aria-label="Breadcrumb"> + db-link
- cmp-pagination → planned Q4/2025; use db-button with ARIA labels
- cmp-table → under research; use semantic <table> with custom styling
- cmp-sidenavi → db-navigation inside db-drawer
- cmp-dialog → db-drawer or custom modal with focus management + ARIA

CLI AUTOMATION HINT: Inform the developer that automated search-and-replace migration is available:
- DB UI v1 → v1.0.0: npx @db-ux/core-migration --type=v007_v100 --src=./src
- v1/v2 → v3.0.0: npx @db-ux/core-migration --type=v200_v300 --src=./src
- v3 → v4.0.0: npx @db-ux/core-migration --type=v300_v400 --src=./src
Always advise the developer to review CLI output manually afterwards.

You must execute this cognitive workflow:

1. SEMANTIC PARSING: Analyze the legacy snippet to understand its functional intent (e.g., navigation bar, data table, form with validation states). Identify which of the known breaking changes or missing components apply.
2. V3 MAPPING: Call 'list_components' to verify the exact equivalent components in the DB UX v3 ecosystem. If a component has no direct equivalent, apply the documented strategy above — do not invent a custom solution.
3. SPECIFICATION ACQUISITION: For every confirmed v3 component, call 'get_component_props' and 'get_example_code' with framework="${target_framework}". Study the v3 prop API carefully — do not assume legacy prop names still exist.
4. TOKEN MIGRATION: Call 'get_design_tokens' to replace any legacy CSS variables, utility classes, or hardcoded values with the correct --db-* custom properties.

Your response must be structured as follows:

1. "Migration Analysis": Map each legacy element to its v3 replacement. Explicitly call out every breaking change applied and every component without a direct equivalent (with its documented workaround).
2. "V3 Refactored Code": The fully migrated, production-ready code block using the correct @db-ux/* package for "${target_framework}". No legacy prop names, no hardcoded values, no invented components.
3. "CLI Migration Hint": State the exact npx @db-ux/core-migration command applicable for the detected source_context.
4. "Actionable Post-Migration Notes": List behavioral shifts and ARIA states the developer must manually verify after migration.`
				}
			}
		]
	};
}

server.registerPrompt(
	'migrate_component',
	{
		description:
			'Transforms legacy UI code (e.g., Bootstrap, native HTML, DB UI v1/v2) into the modern DB UX v3 architecture. Aware of package renames, deprecated props, CLI migration tooling, and components without direct v3 equivalents.',
		argsSchema: {
			legacy_code: z
				.string()
				.describe(
					'The source code of the outdated component (e.g., DB UI v1/v2, Bootstrap, raw HTML/CSS).'
				),
			source_context: z
				.string()
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

// ---------------------------------------------------------------------------
// audit_accessibility prompt
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
export function handleAuditAccessibilityPrompt({
	code_snippet,
	framework
}: {
	code_snippet: string;
	framework: string;
}) {
	return {
		description:
			'Performs a deep accessibility audit and generates manual screen reader/keyboard test scripts',
		messages: [
			{
				role: 'user' as const,
				content: {
					type: 'text' as const,
					text: `You are an Accessibility (A11y) Expert and DB UX Design System Guardian.
Your objective is to perform a specialized deep scan exclusively for inclusion and accessibility standards (WCAG 2.2 AA) on the provided ${framework} snippet.

<snippet>
${code_snippet}
</snippet>

This audit goes beyond traditional linters. You must evaluate interactive patterns, logical focus orders, and the programmatic purpose of inputs (WCAG 1.3.5).

Execute the following cognitive workflow using your MCP tools:

1. CONTEXT GATHERING: Call 'docs_search' with the query 'accessibility' or 'a11y' to retrieve global DB UX accessibility guidelines.
2. COMPONENT VERIFICATION: Call 'list_components' and 'get_example_code' to verify how the used DB UX components handle ARIA attributes and keyboard events natively.

Analyze the code against these strict A11y domains:
- Screen Reader Support: Are visually hidden texts used correctly? Are decorative images hidden via aria-hidden="true"?
- Keyboard Navigation: Are there keyboard traps? Is the focus order logical? Are interactive elements reachable via Tab?
- Semantics & ARIA: Are ARIA roles, aria-expanded, and aria-describedby applied correctly without overriding native HTML semantics unnecessarily?

Deliver your analysis in the following strict format:
1. "Accessibility Audit Summary": A high-level assessment of the snippet's A11y compliance.
2. "WCAG Violations": A prioritized list of issues. You MUST provide EVIDENCE from the DB UX tools or WCAG guidelines for each violation.
3. "Manual Testing Script": Step-by-step instructions for a QA engineer to manually validate this snippet using Keyboard-only navigation and a Screen Reader.
4. "Remediated Code": The fully accessible, DB UX-compliant code block.`
				}
			}
		]
	};
}

server.registerPrompt(
	'audit_accessibility',
	{
		description:
			'Specialized deep scan exclusively for inclusion and accessibility standards (WCAG 2.2 AA). Evaluates interactive patterns, focus orders, and generates manual test scripts.',
		argsSchema: {
			code_snippet: z
				.string()
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

const transport = new StdioServerTransport();
await server.connect(transport);

// --- Graceful Shutdown & Process Stability ---
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

// --- Global Error Handling (Crash Resistance) ---
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
