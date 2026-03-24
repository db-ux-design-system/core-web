import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { Framework } from '../types.js';
import {
	COMPONENTS_DIR,
	COMPONENT_NOT_FOUND_MSG,
	IS_MONOREPO,
	MAX_FILE_CONTENT,
	MAX_JSON_OUTPUT,
	OUTPUT_DIR,
	getManifest,
	resolveSafePath,
	truncate,
	withTimeout
} from '../utils';

type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

/** Creates a standard error ToolResult with the given message. */
function err(text: string): ToolResult {
	return { content: [{ type: 'text', text }], isError: true };
}

/**
 * Resolves and verifies a component path within a given base directory.
 * Handles path traversal protection via resolveSafePath and existence check.
 * @returns The resolved absolute path, or a ToolResult error object on failure.
 */
function resolveComponentPath(
	baseDir: string,
	componentName: string
): string | ToolResult {
	let safePath: string;
	try {
		safePath = resolveSafePath(baseDir, componentName);
	} catch {
		return err(`Error: Invalid component name '${componentName}'.`);
	}
	if (!existsSync(safePath)) {
		return err(COMPONENT_NOT_FOUND_MSG(componentName));
	}
	return safePath;
}

/** Returns all available DB UX component names from the filesystem or manifest. */
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

/**
 * Returns the list of example names for a component by reading its showcase file.
 * @param componentName - The kebab-case component name (e.g. "button").
 */
export async function handleGetComponentDetails({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const pathOrError = resolveComponentPath(COMPONENTS_DIR, componentName);
		if (typeof pathOrError !== 'string') return pathOrError;
		const showcaseFile = join(
			pathOrError,
			'showcase',
			`${componentName}.showcase.lite.tsx`
		);
		if (!existsSync(showcaseFile)) {
			return err(
				`Error: File for component '${componentName}' not found.`
			);
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
	if (!comp) return err(COMPONENT_NOT_FOUND_MSG(componentName));
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

/**
 * Returns the raw TypeScript content of a component's model.ts file.
 * @param componentName - The kebab-case component name (e.g. "button").
 */
export async function handleGetComponentProps({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const pathOrError = resolveComponentPath(COMPONENTS_DIR, componentName);
		if (typeof pathOrError !== 'string') return pathOrError;
		const modelFile = join(pathOrError, 'model.ts');
		if (!existsSync(modelFile)) {
			return err(
				`Error: Props file (model.ts) for component '${componentName}' not found.`
			);
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
	if (!comp) return err(COMPONENT_NOT_FOUND_MSG(componentName));
	if (!comp.props)
		return err(
			`Error: Props file (model.ts) for component '${componentName}' not found.`
		);
	return {
		content: [
			{ type: 'text', text: truncate(comp.props, MAX_FILE_CONTENT) }
		]
	};
}

/** Converts a human-readable example name to a kebab-case filename stem. */
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

const FRAMEWORK_OUTPUT_DIR: Partial<Record<Framework, string>> = {
	'web-components': 'stencil'
};

/**
 * Finds the best-matching example filename from a list of candidates.
 * Prefers exact stem match, then falls back to partial inclusion.
 * Inspects at most the first 10 entries to avoid excessive scanning.
 */
function fuzzyMatchExample(
	entries: string[],
	kebab: string,
	ext: string
): string | undefined {
	return entries.slice(0, 10).find((f) => {
		if (!f.endsWith(`.example.${ext}`)) return false;
		const stem = f.replace(`.example.${ext}`, '');
		return stem === kebab || stem.includes(kebab) || kebab.includes(stem);
	});
}

/**
 * Returns the generated framework-specific source code for a component example.
 * Applies a 10-second timeout to prevent hanging on slow filesystem reads.
 * @param componentName - The kebab-case component name (e.g. "button").
 * @param exampleName - The human-readable example name (e.g. "Show Icon Leading").
 * @param framework - The target framework (react, angular, vue, web-components, html).
 */
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
					if (framework === 'html') {
						const htmlFile = join(
							COMPONENTS_DIR,
							componentName,
							'index.html'
						);
						if (!existsSync(htmlFile))
							return err(COMPONENT_NOT_FOUND_MSG(componentName));
						return {
							content: [
								{
									type: 'text',
									text: truncate(
										await readFile(htmlFile, 'utf-8'),
										MAX_FILE_CONTENT
									)
								}
							]
						};
					}
					const outputSubDir =
						FRAMEWORK_OUTPUT_DIR[framework] ?? framework;
					const pathOrError = resolveComponentPath(
						join(OUTPUT_DIR, outputSubDir, 'src/components'),
						componentName
					);
					if (typeof pathOrError !== 'string') return pathOrError;
					const examplesDir = join(pathOrError, 'examples');
					let resolvedPath = join(
						examplesDir,
						`${kebab}.example.${ext}`
					);
					if (!existsSync(resolvedPath)) {
						const allEntries = existsSync(examplesDir)
							? await readdir(examplesDir)
							: [];
						const match = fuzzyMatchExample(allEntries, kebab, ext);
						if (match) {
							resolvedPath = join(examplesDir, match);
						} else {
							return err(
								`Error: Example '${exampleName}' for component '${componentName}' not found. Use 'get_component_details' to see available examples.`
							);
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

				const manifest = await getManifest();
				const comp = manifest.components[componentName];
				if (!comp) return err(COMPONENT_NOT_FOUND_MSG(componentName));
				if (framework === 'html') {
					const htmlEntry = comp.exampleCode['html']?.['index.html'];
					if (!htmlEntry)
						return err(
							`Error: No HTML example found for component '${componentName}'.`
						);
					return {
						content: [
							{
								type: 'text',
								text: truncate(htmlEntry, MAX_FILE_CONTENT)
							}
						]
					};
				}
				const fwExamples = comp.exampleCode[framework] ?? {};
				const directKey = `${kebab}.example.${ext}`;
				const matchKey = fwExamples[directKey]
					? directKey
					: fuzzyMatchExample(Object.keys(fwExamples), kebab, ext);
				if (!matchKey) {
					return err(
						`Error: Example '${exampleName}' for component '${componentName}' not found. Use 'get_component_details' to see available examples.`
					);
				}
				return {
					content: [
						{
							type: 'text',
							text: truncate(
								fwExamples[matchKey],
								MAX_FILE_CONTENT
							)
						}
					]
				};
			} catch (error: any) {
				return err(`Error: ${error.message}`);
			}
		})(),
		'Error: Reading example files took too long (exceeded 10 seconds).'
	) as any;
}
