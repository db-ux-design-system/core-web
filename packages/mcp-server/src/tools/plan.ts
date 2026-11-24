import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { type ToolResult, error, resolveSafePath } from '../utils';

/** Kind of application. Decides the recommended density. */
export const APP_TYPES = ['business', 'consumer', 'marketing'] as const;
type AppType = (typeof APP_TYPES)[number];

/** Target framework of the migration. */
export const PLAN_FRAMEWORKS = [
	'react',
	'angular',
	'vue',
	'web-components',
	'html'
] as const;
type PlanFramework = (typeof PLAN_FRAMEWORKS)[number];

/** What the existing interface is built with. Several can apply. */
export const SOURCES = [
	'generation-2',
	'custom-components',
	'other-library',
	'plain-html'
] as const;
type Source = (typeof SOURCES)[number];

export type PlanMigrationInput = {
	projectRoot?: string;
	appType?: AppType;
	framework?: PlanFramework;
	sources?: Source[];
	dbProduct?: boolean;
	appRunsLocally?: boolean;
	browserTool?: boolean;
};

/** Facts read from package.json. Used to pre-fill and to ask fewer questions. */
type Detected = {
	framework?: PlanFramework;
	generation2Packages: string[];
	generation3Packages: string[];
	otherLibraries: string[];
	hasDbTheme: boolean;
};

const GENERATION_2_PACKAGES = [
	'@db-ui/core',
	'@db-ui/base',
	'@db-ui/elements',
	'@db-ui/react-elements',
	'@db-ui/ngx-elements',
	'@db-ui/v-elements'
];

// cspell:ignore primeng primereact primevue vuetify chakra

/** UI libraries that indicate an "other-library" source. */
const OTHER_LIBRARIES = [
	'bootstrap',
	'react-bootstrap',
	'@mui/material',
	'antd',
	'@angular/material',
	'primeng',
	'primereact',
	'primevue',
	'vuetify',
	'element-plus',
	'@chakra-ui/react'
];

/** Recommended density per application type, see the Densities docs. */
const DENSITY: Record<AppType, string> = {
	business: 'functional',
	consumer: 'regular',
	marketing: 'expressive'
};

const FRAMEWORK_PACKAGE: Record<PlanFramework, string> = {
	react: '@db-ux/react-core-components',
	angular: '@db-ux/ngx-core-components',
	vue: '@db-ux/v-core-components',
	'web-components': '@db-ux/wc-core-components',
	html: '@db-ux/core-components'
};

/** Reads the dependencies of the project's package.json, if there is one. */
async function detect(projectRoot: string): Promise<Detected> {
	const detected: Detected = {
		generation2Packages: [],
		generation3Packages: [],
		otherLibraries: [],
		hasDbTheme: false
	};

	const packageJsonPath = join(projectRoot, 'package.json');
	if (!existsSync(packageJsonPath)) {
		return detected;
	}

	let manifest: {
		dependencies?: Record<string, string>;
		devDependencies?: Record<string, string>;
	};
	try {
		manifest = JSON.parse(await readFile(packageJsonPath, 'utf8'));
	} catch {
		return detected;
	}

	const names = Object.keys({
		...manifest.dependencies,
		...manifest.devDependencies
	});
	const isListed = (name: string) => names.includes(name);

	if (isListed('@angular/core')) {
		detected.framework = 'angular';
	} else if (isListed('vue') || isListed('nuxt')) {
		detected.framework = 'vue';
	} else if (isListed('react') || isListed('next')) {
		detected.framework = 'react';
	}

	detected.generation2Packages = GENERATION_2_PACKAGES.filter((name) =>
		isListed(name)
	);
	detected.generation3Packages = names.filter(
		(name) =>
			name.startsWith('@db-ux/') && !name.startsWith('@db-ux/db-theme')
	);
	detected.otherLibraries = OTHER_LIBRARIES.filter((name) => isListed(name));
	detected.hasDbTheme = isListed('@db-ux/db-theme');

	return detected;
}

/** One question the agent has to ask the user, with the allowed answers. */
type Question = {
	field: keyof PlanMigrationInput;
	question: string;
	answers: string;
};

/** Returns the questions for every field that is still unknown. */
function openQuestions(input: PlanMigrationInput): Question[] {
	const candidates: Array<Question | false> = [
		!input.appType && {
			field: 'appType',
			question:
				'What kind of application is it? This decides the density.',
			answers:
				'`business` (internal tool, many data and tables), `consumer` (app or portal for customers), `marketing` (campaign or landing page)'
		},
		!input.framework && {
			field: 'framework',
			question: 'Which framework does the application use?',
			answers: PLAN_FRAMEWORKS.map((f) => `\`${f}\``).join(', ')
		},
		(!input.sources || input.sources.length === 0) && {
			field: 'sources',
			question:
				'What is the current interface built with? Several answers are possible.',
			answers:
				'`generation-2` (DB UI classes or wrappers), `custom-components` (self-built buttons, selects, cards …), `other-library` (Bootstrap, Material …), `plain-html`'
		},
		input.dbProduct === undefined && {
			field: 'dbProduct',
			question:
				'Is it a product of Deutsche Bahn that needs the DB Theme (DB fonts, icons and colors)?',
			answers: '`true` or `false`'
		},
		input.appRunsLocally === undefined && {
			field: 'appRunsLocally',
			question:
				'Can the application run locally, so the current interface can be inspected in a browser?',
			answers: '`true` or `false`'
		},
		input.appRunsLocally === true &&
			input.browserTool === undefined && {
				field: 'browserTool',
				question:
					'Do you (the agent) have a browser tool, for example the Chrome DevTools MCP with take_snapshot and take_screenshot? Answer this yourself from your tool list, do not ask the user.',
				answers: '`true` or `false`'
			}
	];

	return candidates.filter(
		(question): question is Question => question !== false
	);
}

/** Pre-fills unknown answers from package.json. User answers always win. */
function merge(
	input: PlanMigrationInput,
	detected: Detected
): PlanMigrationInput {
	return {
		...input,
		framework: input.framework ?? detected.framework,
		// Sources are never pre-filled: self-built components cannot be detected
		// from package.json, so the user always answers this question. The
		// detected packages are shown as a hint.
		sources: input.sources?.length ? input.sources : undefined,
		dbProduct: input.dbProduct ?? (detected.hasDbTheme ? true : undefined),
		browserTool: input.appRunsLocally ? input.browserTool : false
	};
}

function renderDetected(detected: Detected): string {
	const rows = [
		`| Framework | ${detected.framework ?? 'not detected'} |`,
		`| Generation 2 packages | ${detected.generation2Packages.join(', ') || 'none'} |`,
		`| Generation 3 packages | ${detected.generation3Packages.join(', ') || 'none'} |`,
		`| Other UI libraries | ${detected.otherLibraries.join(', ') || 'none'} |`,
		`| DB Theme | ${detected.hasDbTheme ? 'installed' : 'not installed'} |`
	];

	return ['| Detected in package.json | |', '| --- | --- |', ...rows].join(
		'\n'
	);
}

/** Builds the ordered workflow for a complete set of answers. */
function renderPlan(
	plan: Required<Omit<PlanMigrationInput, 'projectRoot'>>
): string {
	const hasCustom = plan.sources.some((source) =>
		['custom-components', 'other-library', 'plain-html'].includes(source)
	);
	const canInspect = plan.appRunsLocally && plan.browserTool;
	const isVerifiable = ['react', 'angular', 'vue'].includes(plan.framework);

	const guides = [
		'general-migration',
		'component-migration',
		'color-migration',
		'icon-migration',
		...(hasCustom ? ['custom-component-migration'] : []),
		'review-migration'
	];

	const steps: string[] = [];
	const step = (text: string) => steps.push(`${steps.length + 1}. ${text}`);

	step(
		`**Load the guides** with \`get_migration_guide\`: ${guides.map((g) => `\`${g}\``).join(', ')}.`
	);
	step(
		'**Scan every file** with `scan_generation_2_migration` before you change any code: entry point, styles, pages and components. The report lists Generation 2 patterns, self-built controls (`candidate`) and hard-coded values (`value`). Summarize the findings per file for the user.'
	);

	if (hasCustom) {
		step(
			[
				'**Classify every self-built control** (`candidate` findings and every component of an other library) as described in `custom-component-migration`:',
				'   - Read the code: element, role, event handlers, states, CSS.',
				canInspect
					? '   - Inspect it in the running application: `take_snapshot` for role, name and state, `take_screenshot` for the look, `evaluate_script` with `getComputedStyle` for colors, spacing and shadows.'
					: '   - Ask the user for a screenshot of each control, because it cannot be inspected in a browser.',
				'   - Compare with `list_components`, `get_component_props` and, if the look decides, `get_visual_reference`.',
				'   - Present a table "Control → DB UX component → reason → open questions" and **wait for the user to confirm it** before changing code.'
			].join('\n')
		);
	}

	step(
		[
			`**Install the packages**: \`${FRAMEWORK_PACKAGE[plan.framework]}\`${plan.dbProduct ? ' and `@db-ux/db-theme`' : ''}, and remove the packages being replaced.`,
			plan.dbProduct
				? '   - Follow "DB Theme" in `general-migration`: credentials in `.env`, allowed install scripts, theme import after the component styles, Vite alias if needed.'
				: '   - Load the whitelabel styles as described in "Required CSS Imports" in `general-migration`.',
			`   - Set the density \`${DENSITY[plan.appType]}\` for a ${plan.appType} application (\`data-density\` on the root element) unless the user decides otherwise.`
		].join('\n')
	);
	step(
		[
			'**Migrate file by file**, starting with the entry point and the global styles:',
			plan.framework === 'html'
				? '   - Use `docs_search` with `docType: "HTML"` for the markup of each component.'
				: `   - For each component: \`get_component_props\`, then \`get_example_code\` with framework \`${plan.framework}\` and adapt the example.`,
			'   - Replace every hard-coded value with tokens from `get_design_tokens`, and every icon name with one from `list_icons`.'
		].join('\n')
	);
	step(
		isVerifiable
			? '**Verify** each migrated file with `verify_migrated_code` and fix the errors (max 3 attempts).'
			: "**Verify** the result with the project's own build and lint scripts."
	);
	step(
		[
			'**Review** with `review-migration` and end the output with "Open decisions and checks".',
			canInspect
				? '   - Compare the migrated pages with the screenshots of the original (`take_screenshot`) and check the accessibility tree again (`take_snapshot`).'
				: '   - Ask the user to compare the migrated pages with the original in the browser.'
		].join('\n')
	);

	const context = [
		`| Application | ${plan.appType} (density \`${DENSITY[plan.appType]}\`) |`,
		`| Framework | ${plan.framework} (\`${FRAMEWORK_PACKAGE[plan.framework]}\`) |`,
		`| Current interface | ${plan.sources.join(', ')} |`,
		`| DB Theme | ${plan.dbProduct ? 'yes' : 'no, whitelabel'} |`,
		`| Browser inspection | ${canInspect ? 'yes' : 'no'} |`
	];

	return [
		'## Migration plan',
		'',
		'| Context | |',
		'| --- | --- |',
		...context,
		'',
		'Follow these steps in order. Do not skip a step and do not decide layout questions on your own.',
		'',
		...steps
	].join('\n');
}

/**
 @public

 Starts every migration. Reads the project's package.json, asks for what it
 cannot detect and returns the ordered workflow with the tools and guides that
 fit the project: a pure Generation 2 project only needs scan and mapping,
 self-built controls additionally need classification and the user's
 confirmation, and browser inspection is only planned when it is available.

 Asking through the agent instead of MCP elicitation is deliberate: Kiro IDE
 does not support elicitation, and Copilot cancels it in Autopilot.
 */
export async function handlePlanMigration(
	input: PlanMigrationInput
): Promise<ToolResult> {
	let projectRoot: string;
	try {
		projectRoot = resolveSafePath(process.cwd(), input.projectRoot ?? '.');
	} catch {
		return error(
			`Error: projectRoot '${input.projectRoot}' resolves outside the workspace root. Path traversal is not allowed.`
		);
	}

	const detected = await detect(projectRoot);
	const merged = merge(input, detected);
	const questions = openQuestions(merged);

	if (questions.length > 0) {
		const known = Object.fromEntries(
			Object.entries(merged).filter(
				([key, value]) => key !== 'projectRoot' && value !== undefined
			)
		);

		const text = [
			'## Migration intake',
			'',
			renderDetected(detected),
			'',
			'Ask the user the following questions in one message. Do not answer them yourself, except where stated.',
			'',
			...questions.map(
				(q, index) =>
					`${index + 1}. **${q.field}:** ${q.question} Allowed: ${q.answers}`
			),
			'',
			`Then call \`plan_migration\` again with all answers. Already known: \`${JSON.stringify(known)}\`. Do not change any code before you have the plan.`
		].join('\n');

		return { content: [{ type: 'text', text }] };
	}

	return {
		content: [
			{
				type: 'text',
				text: renderPlan(
					merged as Required<Omit<PlanMigrationInput, 'projectRoot'>>
				)
			}
		]
	};
}
