import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { z } from "zod";

// Resolve paths relative to the monorepo root (two levels up from packages/mcp-server)
const REPO_ROOT = resolve(import.meta.dirname, "../../..");
const COMPONENTS_DIR = join(REPO_ROOT, "packages/components/src/components");

const server = new McpServer({
	name: "db-ux-mcp",
	version: "0.1.0",
});

server.registerTool(
	"list_components",
	{
		description:
			"Returns all available DB UX component names by scanning packages/components/src/components.",
	},
	async () => {
		if (!existsSync(COMPONENTS_DIR)) {
			return {
				content: [
					{
						type: "text",
						text: `Error: components directory not found at ${COMPONENTS_DIR}`,
					},
				],
				isError: true,
			};
		}

		const entries = await readdir(COMPONENTS_DIR, { withFileTypes: true });
		const components = entries
			.filter((e) => e.isDirectory())
			.map((e) => e.name);

		return {
			content: [{ type: "text", text: JSON.stringify(components, null, 2) }],
		};
	}
);

server.registerTool(
	"get_component_details",
	{
		description:
			"Returns the list of examples (e.g. Density, Variant) for a component by reading its showcase file.",
		inputSchema: { componentName: z.string().describe("e.g. 'button'") },
	},
	async ({ componentName }) => {
		const showcaseFile = join(
			COMPONENTS_DIR,
			componentName,
			"showcase",
			`${componentName}.showcase.lite.tsx`
		);

		if (!existsSync(showcaseFile)) {
			return {
				content: [
					{
						type: "text",
						text: `Error: showcase file not found at ${showcaseFile}`,
					},
				],
				isError: true,
			};
		}

		const source = await readFile(showcaseFile, "utf-8");

		// Extract exampleName="..." values from LinkWrapperShowcase tags
		const examples = [...source.matchAll(/exampleName="([^"]+)"/g)].map(
			(m) => m[1]
		);

		return {
			content: [
				{
					type: "text",
					text:
						examples.length > 0
							? JSON.stringify(examples, null, 2)
							: "No examples found in showcase file.",
				},
			],
		};
	}
);

server.registerTool(
	"get_component_props",
	{
		description:
			"Returns the raw TypeScript content of a component's model.ts, listing all interfaces and props.",
		inputSchema: { componentName: z.string().describe("e.g. 'button'") },
	},
	async ({ componentName }) => {
		const modelFile = join(COMPONENTS_DIR, componentName, "model.ts");

		if (!existsSync(modelFile)) {
			return {
				content: [
					{
						type: "text",
						text: `Error: model.ts not found at ${modelFile}`,
					},
				],
				isError: true,
			};
		}

		const content = await readFile(modelFile, "utf-8");
		return { content: [{ type: "text", text: content }] };
	}
);

const OUTPUT_DIR = join(REPO_ROOT, "output");

function toKebabCase(name: string): string {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

const FRAMEWORKS = ["react", "angular", "vue"] as const;
type Framework = (typeof FRAMEWORKS)[number];

const FRAMEWORK_EXT: Record<Framework, string> = {
	react: "tsx",
	angular: "ts",
	vue: "vue",
};

server.registerTool(
	"get_example_code",
	{
		description:
			"Returns the generated framework-specific source code for a component example. " +
			"For Angular, the template is inline inside the @Component decorator within the .ts file.",
		inputSchema: {
			componentName: z.string().describe("e.g. 'button'"),
			exampleName: z
				.string()
				.describe("Readable example name, e.g. 'Show Icon Leading'"),
			framework: z
				.enum(FRAMEWORKS)
				.describe("Target framework: 'react', 'angular', or 'vue'"),
		},
	},
	async ({ componentName, exampleName, framework }) => {
		const kebab = toKebabCase(exampleName);
		const ext = FRAMEWORK_EXT[framework];
		const examplesDir = join(
			OUTPUT_DIR,
			framework,
			"src",
			"components",
			componentName,
			"examples"
		);
		// Direct match first, then prefix fallback for cases where exampleName
		// is longer than the source filename (e.g. "Multi-line Text With Line Breaks" -> "multi-line-text")
		let resolvedPath = join(examplesDir, `${kebab}.example.${ext}`);

		if (!existsSync(resolvedPath)) {
			const entries = existsSync(examplesDir)
				? await readdir(examplesDir)
				: [];
			const match = entries.find(
				(f) => f.endsWith(`.example.${ext}`) && kebab.startsWith(f.replace(`.example.${ext}`, ""))
			);
			if (match) {
				resolvedPath = join(examplesDir, match);
			} else {
				return {
					content: [
						{
							type: "text" as const,
							text: `Error: file not found at ${resolvedPath}`,
						},
					],
					isError: true,
				};
			}
		}

		const content = await readFile(resolvedPath, "utf-8");
		return { content: [{ type: "text" as const, text: content }] };
	}
);

const transport = new StdioServerTransport();
await server.connect(transport);
