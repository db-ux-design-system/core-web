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
				content: [
					{
						type: 'text',
						text: `Error: Invalid component name '${componentName}'.`
					}
				],
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
				content: [
					{
						type: 'text',
						text: `Error: Invalid component name '${componentName}'.`
					}
				],
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
						if (!existsSync(htmlFile)) {
							return {
								content: [
									{
										type: 'text',
										text: COMPONENT_NOT_FOUND_MSG(
											componentName
										)
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
										await readFile(htmlFile, 'utf-8'),
										MAX_FILE_CONTENT
									)
								}
							]
						};
					}
					const outputSubDir =
						FRAMEWORK_OUTPUT_DIR[framework] ?? framework;
					let safeComponentPath: string;
					try {
						safeComponentPath = resolveSafePath(
							join(OUTPUT_DIR, outputSubDir, 'src/components'),
							componentName
						);
					} catch {
						return {
							content: [
								{
									type: 'text',
									text: `Error: Invalid component name '${componentName}'.`
								}
							],
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
					let resolvedPath = join(
						examplesDir,
						`${kebab}.example.${ext}`
					);
					if (!existsSync(resolvedPath)) {
						const allEntries = existsSync(examplesDir)
							? await readdir(examplesDir)
							: [];
						const match = allEntries.slice(0, 10).find((f) => {
							if (!f.endsWith(`.example.${ext}`)) return false;
							const stem = f.replace(`.example.${ext}`, '');
							return (
								stem === kebab ||
								stem.includes(kebab) ||
								kebab.includes(stem)
							);
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
				if (framework === 'html') {
					const htmlEntry = comp.exampleCode['html']?.['index.html'];
					if (!htmlEntry) {
						return {
							content: [
								{
									type: 'text',
									text: `Error: No HTML example found for component '${componentName}'.`
								}
							],
							isError: true
						};
					}
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
					: Object.keys(fwExamples).find((k) => {
							if (!k.endsWith(`.example.${ext}`)) return false;
							const stem = k.replace(`.example.${ext}`, '');
							return (
								stem === kebab ||
								stem.includes(kebab) ||
								kebab.includes(stem)
							);
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
							text: truncate(
								fwExamples[matchKey],
								MAX_FILE_CONTENT
							)
						}
					]
				};
			} catch (error: any) {
				return {
					content: [
						{ type: 'text', text: `Error: ${error.message}` }
					],
					isError: true
				};
			}
		})(),
		'Error: Reading example files took too long (exceeded 10 seconds).'
	) as any;
}
