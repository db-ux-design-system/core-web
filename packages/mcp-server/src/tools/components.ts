import type { ExampleCodeFramework, Framework } from '../types.js';
import {
	type ToolResult,
	COMPONENT_NOT_FOUND_MSG,
	MAX_FILE_CONTENT,
	MAX_JSON_OUTPUT,
	error,
	truncate,
	withTimeout
} from '../utils';
import { getManifest } from '../utils/manifest';

/** Returns all available DB UX component names from the filesystem or manifest. */
export async function handleListComponents(): Promise<ToolResult> {
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
 Returns the list of example names for a component by reading its showcase file.
 @param componentName - The kebab-case component name (e.g. "button").
 @param componentName.componentName
 */
export async function handleGetComponentDetails({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	const manifest = await getManifest();
	const comp = manifest.components[componentName];
	if (!comp) {
		return error(COMPONENT_NOT_FOUND_MSG(componentName));
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

/**
 Returns the raw TypeScript content of a component's model.ts file.
 @param componentName - The kebab-case component name (e.g. "button").
 @param componentName.componentName
 */
export async function handleGetComponentProps({
	componentName
}: {
	componentName: string;
}): Promise<ToolResult> {
	const manifest = await getManifest();
	const comp = manifest.components[componentName];
	if (!comp) {
		return error(COMPONENT_NOT_FOUND_MSG(componentName));
	}
	if (!comp.props) {
		return error(
			`Error: Props file (model.ts) for component '${componentName}' not found.`
		);
	}

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
		.replaceAll(/[^a-z\d]+/g, '-')
		.replaceAll(/^-|-$/g, '');
}

/**
 File extension of the generated example for each framework that has one.

 Keyed by {@link ExampleCodeFramework} rather than `Partial<Record<Framework>>`:
 the partial type made every lookup `string | undefined`, even after `html` and
 `vanilla` had already been rejected.
 */
const FRAMEWORK_EXT: Record<ExampleCodeFramework, string> = {
	react: 'tsx',
	angular: 'ts',
	vue: 'vue',
	'web-components': 'tsx'
};

/**
 Finds the best-matching example filename from a list of candidates.
 Prefers exact stem match, then falls back to partial inclusion.
 Inspects at most the first 10 entries to avoid excessive scanning.
 */
function fuzzyMatchExample(
	entries: string[],
	kebab: string,
	ext: string
): string | undefined {
	return entries.slice(0, 10).find((f) => {
		if (!f.endsWith(`.example.${ext}`)) {
			return false;
		}
		const stem = f.replace(`.example.${ext}`, '');
		return stem === kebab || stem.includes(kebab) || kebab.includes(stem);
	});
}

/**
 Returns the generated framework-specific source code for a component example.
 Applies a 10-second timeout to prevent hanging on slow filesystem reads.
 @param componentName - The kebab-case component name (e.g. "button").
 @param componentName.componentName
 @param exampleName - The human-readable example name (e.g. "Show Icon Leading").
 @param componentName.exampleName
 @param framework - The target framework (react, angular, vue, web-components, html).
 @param componentName.framework
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
				const manifest = await getManifest();
				const comp = manifest.components[componentName];
				if (!comp) {
					return error(COMPONENT_NOT_FOUND_MSG(componentName));
				}
				if (framework === 'html' || framework === 'vanilla') {
					return error(
						"Error: HTML/vanilla examples are not available in the manifest. Refer to the component's docs/HTML.md file in the source repository for plain HTML usage."
					);
				}

				// Looked up after the guard above, so `framework` is narrowed to
				// the frameworks that actually have generated examples.
				const ext = FRAMEWORK_EXT[framework];
				const fwExamples = comp.exampleCode[framework] ?? {};
				const directKey = `${kebab}.example.${ext}`;
				const matchKey = fwExamples[directKey]
					? directKey
					: fuzzyMatchExample(Object.keys(fwExamples), kebab, ext);
				const code = matchKey ? fwExamples[matchKey] : undefined;
				if (code === undefined) {
					return error(
						`Error: Example '${exampleName}' for component '${componentName}' not found. Use 'get_component_details' to see available examples.`
					);
				}

				return {
					content: [
						{
							type: 'text',
							text: truncate(code, MAX_FILE_CONTENT)
						}
					]
				};
			} catch (error: any) {
				return error(`Error: ${error.message}`);
			}
		})(),
		'Error: Reading example files took too long (exceeded 10 seconds).'
	);
}
