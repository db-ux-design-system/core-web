import { z } from 'zod/v3';

export const listComponentsSchema = {
	description: 'Returns all available DB UX component names by scanning packages/components/src/components.'
};

export const getComponentDetailsSchema = {
	description: 'Returns the list of examples (e.g. Density, Variant) for a component by reading its showcase file.',
	inputSchema: { componentName: z.string().max(100).describe("e.g. 'button'") }
};

export const getComponentPropsSchema = {
	description: "Returns the raw TypeScript content of a component's model.ts, listing all interfaces and props.",
	inputSchema: { componentName: z.string().max(100).describe("e.g. 'button'") }
};

export const listDesignTokenCategoriesSchema = {
	description: 'Returns all available DB UX design token categories (e.g. colors, spacing, typography).'
};

export const getDesignTokensSchema = {
	description: 'Returns CSS custom properties (--db-*) and SCSS variables ($db-*) for a given design token category.',
	inputSchema: {
		category: z.string().max(100).describe("Token category, e.g. 'colors', 'spacing', 'typography'. Use list_design_token_categories to get available categories.")
	}
};

export const listIconsSchema = {
	description: "Returns all available DB UX icon names (e.g. 'arrow_down', 'chevron_right') from the generated all-icons.ts in packages/foundations/src."
};

export const getExampleCodeSchema = {
	description: 'Returns the generated framework-specific source code for a component example. For Angular, the template is inline inside the @Component decorator within the .ts file.',
	inputSchema: {
		componentName: z.string().max(100).describe("e.g. 'button'"),
		exampleName: z.string().max(100).describe("Readable example name, e.g. 'Show Icon Leading'"),
		framework: z.enum(['react', 'angular', 'vue', 'web-components', 'html']).describe("Target framework: 'react', 'angular', 'vue', 'web-components', or 'html'")
	}
};

export const docsSearchSchema = {
	description: 'Searches the DB UX conceptual documentation (guidelines, A11y, migration, ADRs) or component-specific markdown docs.',
	inputSchema: {
		query: z.string().max(200).describe("Search term (e.g., 'focus state', 'migration', 'accessibility'). Use empty string if you just want to read a specific component doc."),
		category: z.enum(['global', 'component']).describe("Search scope: 'global' (docs/ directory) or 'component' (packages/components/.../docs/)."),
		componentName: z.string().max(100).optional().describe("Required if category is 'component' (e.g., 'button', 'navigation')."),
		docType: z.enum(['React', 'Angular', 'Vue', 'HTML', 'Migration', 'Accessibility']).optional().describe("Optional: The specific doc file to read for a component (e.g., 'Migration').")
	}
};
