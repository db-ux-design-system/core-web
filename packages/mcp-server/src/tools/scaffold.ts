import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { Framework } from '../types.js';
import { FRAMEWORK_PKG } from '../types.js';
import type { ToolResult } from '../utils';
import { err } from '../utils';

// ---------------------------------------------------------------------------
// Name Converters
// ---------------------------------------------------------------------------

/** Converts kebab-case to PascalCase: "reservation-card" → "ReservationCard" */
function toPascalCase(kebab: string): string {
	return kebab
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

/** Normalizes input to kebab-case: "ReservationCard" → "reservation-card" */
function toKebabCase(name: string): string {
	return name
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

// ---------------------------------------------------------------------------
// SCSS Foundation Imports (mandatory for every generated SCSS block)
// ---------------------------------------------------------------------------

const SCSS_IMPORTS = `@use "@db-ux/foundations/scss/defaults/default-variables" as db-vars;
@use "@db-ux/foundations/scss/colors/variables" as db-colors;`;

// ---------------------------------------------------------------------------
// Framework Templates
// ---------------------------------------------------------------------------

function reactTemplate(pascal: string, _kebab: string): Map<string, string> {
	const files = new Map<string, string>();

	files.set(
		`${pascal}.tsx`,
		`import { DBButton, DBCard } from '${FRAMEWORK_PKG.react}';
import './${pascal}.scss';

export interface ${pascal}Props {
	/** Add your props here */
	headline?: string;
}

export function ${pascal}({ headline = '${pascal}' }: ${pascal}Props) {
	return (
		<DBCard>
			<h2>{headline}</h2>
			{/* TODO: Implement component content */}
			<DBButton variant="brand">Action</DBButton>
		</DBCard>
	);
}

export default ${pascal};
`
	);

	files.set(
		`${pascal}.scss`,
		`${SCSS_IMPORTS}

/* Styles for ${pascal} */
`
	);

	return files;
}

function angularTemplate(pascal: string, kebab: string): Map<string, string> {
	const files = new Map<string, string>();

	files.set(
		`${kebab}.component.ts`,
		`import { Component, Input } from '@angular/core';
import {
	DBButton,
	DBCard
} from '${FRAMEWORK_PKG.angular}';

@Component({
	selector: 'app-${kebab}',
	standalone: true,
	imports: [DBButton, DBCard],
	templateUrl: './${kebab}.component.html',
	styleUrl: './${kebab}.component.scss'
})
export class ${pascal}Component {
	/** Add your inputs here */
	@Input() headline = '${pascal}';
}
`
	);

	files.set(
		`${kebab}.component.html`,
		`<db-card>
	<h2>{{ headline }}</h2>
	<!-- TODO: Implement component content -->
	<db-button variant="brand">Action</db-button>
</db-card>
`
	);

	files.set(
		`${kebab}.component.scss`,
		`${SCSS_IMPORTS}

/* Styles for ${pascal}Component */
`
	);

	return files;
}

function vueTemplate(pascal: string, _kebab: string): Map<string, string> {
	const files = new Map<string, string>();

	files.set(
		`${pascal}.vue`,
		// language=vue
		// noinspection JSUnresolvedReference
		`<script setup lang="ts">
import { DBButton, DBCard } from '${FRAMEWORK_PKG.vue}';

/** Add your props here */
defineProps<{
	headline?: string;
}>();
</script>

<template>
	<DBCard>
		<h2>{{ headline ?? '${pascal}' }}</h2>
		<!-- TODO: Implement component content -->
		<DBButton variant="brand">Action</DBButton>
	</DBCard>
</template>

<style lang="scss">
${SCSS_IMPORTS}

/* Styles for ${pascal} */
</style>
`
	);

	return files;
}

function webComponentTemplate(
	pascal: string,
	kebab: string
): Map<string, string> {
	const files = new Map<string, string>();

	files.set(
		`${kebab}.tsx`,
		`import { Component, Prop, h } from '@stencil/core';
// DB UX Web Components are loaded globally via ${FRAMEWORK_PKG['web-components']}

@Component({
	tag: '${kebab}',
	styleUrl: '${kebab}.scss',
	shadow: true
})
export class ${pascal} {
	/** Add your props here */
	@Prop() headline = '${pascal}';

	render() {
		return (
			<db-card>
				<h2>{this.headline}</h2>
				{/* TODO: Implement component content */}
				<db-button variant="brand">Action</db-button>
			</db-card>
		);
	}
}
`
	);

	files.set(
		`${kebab}.scss`,
		`${SCSS_IMPORTS}

/* Styles for ${kebab} */
`
	);

	return files;
}

function htmlTemplate(pascal: string, kebab: string): Map<string, string> {
	const files = new Map<string, string>();

	files.set(
		`${kebab}.html`,
		`<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>${pascal}</title>
	<link rel="stylesheet" href="node_modules/${FRAMEWORK_PKG.html}/build/styles/db-ux.css" />
	<link rel="stylesheet" href="${kebab}.css" />
</head>
<body>
	<div data-variant="card">
		<h2>${pascal}</h2>
		<!-- TODO: Implement component content -->
		<button data-variant="brand">Action</button>
	</div>
</body>
</html>
`
	);

	files.set(
		`${kebab}.scss`,
		`${SCSS_IMPORTS}

/* Styles for ${kebab} */
`
	);

	return files;
}

// ---------------------------------------------------------------------------
// Template Dispatcher
// ---------------------------------------------------------------------------

const GENERATORS: Record<
	Framework,
	(pascal: string, kebab: string) => Map<string, string>
> = {
	react: reactTemplate,
	angular: angularTemplate,
	vue: vueTemplate,
	'web-components': webComponentTemplate,
	html: htmlTemplate
};

// ---------------------------------------------------------------------------
// Tool Handler
// ---------------------------------------------------------------------------

/**
 * Scaffolds a DB UX v4-conformant component skeleton for the specified framework.
 *
 * Generates all boilerplate files (component, template, SCSS) with correct
 * @db-ux/* imports, design token SCSS @use directives, and framework-idiomatic
 * structure. The developer only needs to fill in the business logic.
 *
 * Every generated SCSS block includes the mandatory foundation imports:
 * - @use "@db-ux/foundations/scss/defaults/default-variables"
 * - @use "@db-ux/foundations/scss/colors/variables"
 */
export async function handleScaffoldComponent({
	name,
	framework,
	targetPath
}: {
	name: string;
	framework: Framework;
	targetPath: string;
}): Promise<ToolResult> {
	const kebab = toKebabCase(name);
	const pascal = toPascalCase(kebab);

	if (!kebab || kebab.length < 2) {
		return err(
			'Error: Component name must be at least 2 characters after normalization to kebab-case.'
		);
	}

	const generator = GENERATORS[framework];
	if (!generator) {
		return err(
			`Error: Unsupported framework '${framework}'. Supported: ${Object.keys(GENERATORS).join(', ')}`
		);
	}

	// Resolve and create target directory
	const absoluteTarget = resolve(targetPath, kebab);
	mkdirSync(absoluteTarget, { recursive: true });

	// Generate files
	const files = generator(pascal, kebab);
	const writtenPaths: string[] = [];

	for (const [fileName, content] of files) {
		const filePath = join(absoluteTarget, fileName);
		writeFileSync(filePath, content, 'utf-8');
		writtenPaths.push(filePath);
	}

	const summary = [
		`✅ Scaffolded "${pascal}" (${framework}) in ${absoluteTarget}`,
		'',
		'Generated files:',
		...writtenPaths.map((p) => `  - ${p}`),
		'',
		`Package: ${FRAMEWORK_PKG[framework]}`,
		'',
		'Next steps:',
		`1. Open the generated files and implement your business logic where you see "TODO" comments.`,
		`2. Use 'get_component_props' and 'get_example_code' to look up DB UX component APIs.`,
		`3. Use 'get_design_tokens' for spacing, colors, and typography values.`,
		`4. Use 'list_icons' before referencing any icon by name.`
	].join('\n');

	return {
		content: [{ type: 'text', text: summary }]
	};
}
