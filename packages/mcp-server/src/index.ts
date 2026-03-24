import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
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
const MAX_FILE_CONTENT = 20_000;
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
 * Prevents Path Traversal (Directory Climbing) attacks, including URL-encoded payloads.
 */
export function resolveSafePath(baseDir: string, userPath: string): string {
	const absoluteBase = resolve(baseDir);
	// Decode URL-encoded sequences repeatedly until stable (prevents %252F double-encoding bypass)
	let decoded = userPath;
	while (decoded !== decodeURIComponent(decoded)) {
		decoded = decodeURIComponent(decoded);
	}
	const absoluteRequested = resolve(baseDir, decoded);

	if (
		!absoluteRequested.startsWith(absoluteBase + sep) &&
		absoluteRequested !== absoluteBase
	) {
		throw new Error('Path traversal detected');
	}
	return absoluteRequested;
}
const OUTPUT_DIR = join(REPO_ROOT, 'output');
const ALL_ICONS_FILE = join(REPO_ROOT, 'packages/foundations/src/all-icons.ts');
const FOUNDATIONS_DIR = join(REPO_ROOT, 'packages/foundations');

// Embedded manifest (npx / installed package)
import type { Framework } from './types.js';
import { FRAMEWORK_PKG } from './types.js';
import {
	handleScaffoldPagePrompt,
	handleReviewUiCodePrompt,
	handleMigrateComponentPrompt,
	handleAuditAccessibilityPrompt
} from './prompts/index.js';
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
	tokens: Record<string, string>;
	docs: Record<string, string>;
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
	try {
		_manifest = JSON.parse(await readFile(manifestPath, 'utf-8')) as Manifest;
	} catch {
		throw new Error('Failed to parse manifest.json — file may be corrupt or incomplete.');
	}
	return _manifest;
}

// ---------------------------------------------------------------------------
type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

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
		let safeComponentPath: string;
		try {
			safeComponentPath = resolveSafePath(COMPONENTS_DIR, componentName);
		} catch {
			return {
				content: [{ type: 'text', text: `Error: Invalid component name '${componentName}'.` }],
				isError: true
			};
		}
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
		inputSchema: { componentName: z.string().max(100).describe("e.g. 'button'") }
	},
	handleGetComponentDetails
);

// ---------------------------------------------------------------------------
// get_component_props
// ---------------------------------------------------------------------------
export async function handleGetComponentProps({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	if (IS_MONOREPO) {
		let safeComponentPath: string;
		try {
			safeComponentPath = resolveSafePath(COMPONENTS_DIR, componentName);
		} catch {
			return {
				content: [{ type: 'text', text: `Error: Invalid component name '${componentName}'.` }],
				isError: true
			};
		}
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
		inputSchema: { componentName: z.string().max(100).describe("e.g. 'button'") }
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
	density: join(FOUNDATIONS_DIR, 'scss/density/_variables.scss'),
	animation: join(FOUNDATIONS_DIR, 'scss/animation/_animations.scss'),
	transitions: join(FOUNDATIONS_DIR, 'scss/animation/_transitions.scss')
};

export async function handleListDesignTokenCategories(): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const categories = Object.keys(TOKEN_FILES).filter((key) =>
			existsSync(TOKEN_FILES[key])
		);
		return {
			content: [{ type: 'text', text: JSON.stringify(categories, null, 2) }]
		};
	}
	const manifest = await getManifest();
	return {
		content: [{ type: 'text', text: JSON.stringify(Object.keys(manifest.tokens), null, 2) }]
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
	if (!IS_MONOREPO) {
		const manifest = await getManifest();
		const source = manifest.tokens[category];
		if (!source) {
			return {
				content: [{
					type: 'text',
					text: `Error: unknown category '${category}'. Available: ${Object.keys(manifest.tokens).join(', ')}`
				}],
				isError: true
			};
		}
		const lines = source.split('\n').filter((line) => /--db-|^\$db-/.test(line));
		return {
			content: [{ type: 'text', text: truncate(lines.length > 0 ? lines.join('\n') : source, MAX_JSON_OUTPUT) }]
		};
	}
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
				.max(100)
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
	vue: 'vue',
	'web-components': 'tsx',
	html: 'html'
};

// Maps framework key to the output/ subdirectory name
const FRAMEWORK_OUTPUT_DIR: Partial<Record<Framework, string>> = {
	'web-components': 'stencil'
};

// Maps framework key to the correct @db-ux/* npm package name
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
			try {
			const kebab = toKebabCase(exampleName);
			const ext = FRAMEWORK_EXT[framework];

			if (IS_MONOREPO) {
				// html: serve the component's index.html (one file, not per-example)
				if (framework === 'html') {
					const htmlFile = join(COMPONENTS_DIR, componentName, 'index.html');
					if (!existsSync(htmlFile)) {
						return {
							content: [{ type: 'text', text: COMPONENT_NOT_FOUND_MSG(componentName) }],
							isError: true
						};
					}
					return {
						content: [{ type: 'text', text: truncate(await readFile(htmlFile, 'utf-8'), MAX_FILE_CONTENT) }]
					};
				}
				const outputSubDir = FRAMEWORK_OUTPUT_DIR[framework] ?? framework;
				let safeComponentPath: string;
				try {
					safeComponentPath = resolveSafePath(
						join(OUTPUT_DIR, outputSubDir, 'src/components'),
						componentName
					);
				} catch {
					return {
						content: [{ type: 'text', text: `Error: Invalid component name '${componentName}'.` }],
						isError: true
					};
				}
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
						return stem === kebab || stem.includes(kebab) || kebab.includes(stem);
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
			// html manifest fallback: return index.html regardless of exampleName
			if (framework === 'html') {
				const htmlEntry = comp.exampleCode['html']?.['index.html'];
				if (!htmlEntry) {
					return {
						content: [{ type: 'text', text: `Error: No HTML example found for component '${componentName}'.` }],
						isError: true
					};
				}
				return { content: [{ type: 'text', text: truncate(htmlEntry, MAX_FILE_CONTENT) }] };
			}
			const fwExamples = comp.exampleCode[framework] ?? {};
			const directKey = `${kebab}.example.${ext}`;
			const matchKey = fwExamples[directKey]
				? directKey
				: Object.keys(fwExamples).find((k) => {
						if (!k.endsWith(`.example.${ext}`)) return false;
						const stem = k.replace(`.example.${ext}`, '');
						return stem === kebab || stem.includes(kebab) || kebab.includes(stem);
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
			} catch (error: any) {
				return {
					content: [{ type: 'text', text: `Error: ${error.message}` }],
					isError: true
				};
			}
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
			componentName: z.string().max(100).describe("e.g. 'button'"),
			exampleName: z
				.string()
				.max(100)
				.describe("Readable example name, e.g. 'Show Icon Leading'"),
			framework: z
				.enum(['react', 'angular', 'vue', 'web-components', 'html'])
				.describe("Target framework: 'react', 'angular', 'vue', 'web-components', or 'html'")
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
		return withTimeout(
			(async () => {
				const manifest = await getManifest();
				const searchTerms = query
					.toLowerCase()
					.split(' ')
					.filter((t) => t.trim().length > 2);
				const results: string[] = [];
				for (const [path, content] of Object.entries(manifest.docs)) {
					const haystack = (path + '\n' + content).toLowerCase();
					const isMatch =
						searchTerms.length === 0 ||
						searchTerms.every((term) => haystack.includes(term));
					if (isMatch) {
						const snippet = content.length > 3000
							? content.substring(0, 3000) + '\n... [TRUNCATED]'
							: content;
						results.push(`--- ${path} ---\n${snippet}`);
					}
				}
				if (results.length === 0) {
					return {
						content: [{ type: 'text', text: `No documentation found matching query: '${query}'` }]
					};
				}
				const truncated = results.length > 3;
				const content: { type: 'text'; text: string }[] = [
					{ type: 'text', text: results.slice(0, 3).join('\n\n') }
				];
				if (truncated) {
					content.push({
						type: 'text',
						text: 'Note: More than 3 results were found. Some results were truncated. Please refine your search query for more specific results.'
					});
				}
				return { content };
			})(),
			'Error: Search took too long (exceeded 10 seconds). Please refine your query.'
		) as any;
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
				let safeComponentPath: string;
				try {
					safeComponentPath = resolveSafePath(COMPONENTS_DIR, componentName);
				} catch {
					return {
						content: [{ type: 'text', text: `Error: Invalid component name '${componentName}'.` }],
						isError: true
					};
				}
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
					const searchDir = async (currentDir: string, depth = 5) => {
						if (depth === 0) return;
						const entries = await readdir(currentDir, {
							withFileTypes: true
						});
						for (const entry of entries) {
							const fullPath = join(currentDir, entry.name);
							if (entry.isDirectory()) {
								await searchDir(fullPath, depth - 1);
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
			const truncated = results.length > 3;
			const content: { type: 'text'; text: string }[] = [
				{ type: 'text', text: results.slice(0, 3).join('\n\n') }
			];
			if (truncated) {
				content.push({
					type: 'text',
					text: 'Note: More than 3 results were found. Some results were truncated. Please refine your search query for more specific results.'
				});
			}
			return { content };
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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// migrate_component prompt

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// audit_accessibility prompt
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

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
