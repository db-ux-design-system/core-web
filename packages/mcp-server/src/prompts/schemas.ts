import { z } from 'zod/v3';

const frameworkSchema = z
	.enum(['react', 'angular', 'vue', 'web-components', 'html'])
	.describe('The target framework.');

export const scaffoldPageSchema = {
	description:
		'Generates the initial structure of a complete web page or complex module (e.g. dashboard, form). Enforces the full DB UX MCP discovery workflow before writing any code.',
	argsSchema: {
		page_type: z
			.string()
			.max(200)
			.describe(
				"The functional domain or structural type of the page (e.g. 'Login Portal', 'Dashboard', 'Settings Form')."
			),
		framework: frameworkSchema,
		additional_requirements: z
			.string()
			.max(1000)
			.optional()
			.describe(
				"Optional functional or architectural requirements (e.g. 'must include a data table with pagination')."
			)
	}
};

export const reviewUiCodeSchema = {
	description:
		'Performs a strict multi-layered QA, accessibility, and DB UX compliance audit on a provided code snippet.',
	argsSchema: {
		code_snippet: z
			.string()
			.max(10000)
			.describe(
				'The source code to be evaluated (including markup, styling, logic).'
			),
		framework: frameworkSchema
	}
};

export const migrateComponentSchema = {
	description:
		'Transforms legacy UI code (e.g., Bootstrap, native HTML, DB UI v1/v2) into the modern DB UX v3 architecture.',
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
		target_framework: frameworkSchema
	}
};

export const auditAccessibilitySchema = {
	description:
		'Specialized deep scan exclusively for inclusion and accessibility standards (WCAG 2.2 AA). Evaluates interactive patterns, focus orders, and generates manual test scripts.',
	argsSchema: {
		code_snippet: z
			.string()
			.max(10000)
			.describe(
				'The UI source code to be audited for accessibility compliance.'
			),
		framework: frameworkSchema
	}
};
