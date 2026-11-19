/**
 * Completes the "Show code" snippets with what a consumer needs to
 * copy them into a project: the imports of every component used in the
 * snippet, and for Angular and Vue the surrounding component file.
 *
 * Copied into `.storybook/source-imports.ts` of every framework Storybook by
 * copy-config.ts (git-ignored there). Edit this file, not the copies.
 *
 * Global styles (theme and component CSS) are not part of a snippet: they are
 * loaded once per app, see the Getting Started page. The HTML snippet only
 * notes the stylesheet it relies on.
 */
export type SourceFramework =
	'react' | 'angular' | 'vue' | 'webcomponents' | 'html';

// `toSorted()` is ES2023; the Angular Storybook compiles this file with ES2022.
// eslint-disable-next-line unicorn/no-array-sort -- sorts a fresh copy
const unique = (values: string[]): string[] => [...new Set(values)].sort();

const indent = (code: string, tabs = 1): string =>
	code
		.split('\n')
		.map((line) => (line ? `${'\t'.repeat(tabs)}${line}` : line))
		.join('\n');

/** `db-custom-select` -> `DBCustomSelect` */
const tagToClass = (tag: string): string =>
	`DB${tag
		.slice(3)
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('')}`;

const matches = (code: string, pattern: RegExp): string[] =>
	unique([...code.matchAll(pattern)].map((match) => match[1]));

/**
 * Storybook prints a style object without its type cast. A custom property
 * (`'--db-table-columns': '21'` of DBTable "Column Count") is no key of
 * React's style type, so the snippet gets the cast back.
 */
const castCustomPropertyStyles = (code: string): string => {
	let result = '';
	let rest = code;
	for (
		let start = rest.indexOf('style={{');
		start !== -1;
		start = rest.indexOf('style={{')
	) {
		// Find the brace that closes the object (`{{` … `}`).
		const open = start + 'style={'.length;
		let end = open;
		for (let depth = 0; end < rest.length; end++) {
			depth += rest[end] === '{' ? 1 : rest[end] === '}' ? -1 : 0;
			if (depth === 0) {
				break;
			}
		}

		const object = rest.slice(open, end + 1);
		const isCustom =
			/["']--[\w-]+["']\s*:/.test(object) && rest[end + 1] === '}';
		result += isCustom
			? `${rest.slice(0, open)}${object} as React.CSSProperties`
			: rest.slice(0, end + 1);
		rest = rest.slice(end + 1);
	}

	return result + rest;
};

const react = (code: string): string => {
	code = castCustomPropertyStyles(code);
	// Digits too, for DBHeadingH1 … DBHeadingH6.
	const components = matches(code, /<(DB[\dA-Za-z]+)/g);
	if (components.length === 0) {
		return code;
	}
	// Storybook prints the action spies as named empty functions. They do
	// nothing in a snippet to copy and land on the wrong component when an
	// example renders another one (`onTimeout` of the loading indicator on the
	// DBButton of "Examples: Button"), and formatter callbacks (`on…Fn`) are
	// no events at all, so every empty spy is dropped.
	const cleaned = code
		.replaceAll(/function \w*\(\)\s*\{\s*\}/g, '() => {}')
		.replaceAll(/\s+on\w+=\{\(\) => \{\}\}/g, '')
		// Mitosis keeps `class` in JSX passed as a prop (`content={<div class=…>}`
		// of DBTag); React needs `className`.
		.replaceAll(/(<[a-z][\da-z-]*\s(?:[^>]*\s)?)class=/g, '$1className=');
	// Examples with `React.Fragment` and the like need the React import.
	const reactImport = /\bReact\./.test(cleaned)
		? "import React from 'react';\n"
		: '';
	// JSX is only valid inside an expression, so the snippet becomes a
	// component module, like the Angular and Vue snippets.
	return `${reactImport}import { ${components.join(', ')} } from '@db-ux/react-core-components';

export const Example = () => (
${cleaned
	.trim()
	.split('\n')
	.map((line) => `  ${line}`)
	.join('\n')}
);`;
};

const angular = (code: string): string => {
	const components = matches(code, /<(db-[\da-z-]+)/g).map((tag) =>
		tagToClass(tag)
	);
	if (components.length === 0) {
		return code;
	}
	// Structural slot directives, e.g. `*dbNavigationContent` -> NavigationContentDirective
	const directives = matches(code, /[\s*]db([A-Z][A-Za-z]*)(?=[\s=>])/g).map(
		(name) => `${name}Directive`
	);
	const imports = unique([...components, ...directives]);
	// Directives of @angular/common used in the template, e.g. `[ngStyle]` -> NgStyle
	const common = unique(
		matches(code, /\[ng(Style|Class)\]/g).map((name) => `Ng${name}`)
	);
	const commonImport =
		common.length > 0
			? `import { ${common.join(', ')} } from '@angular/common';\n`
			: '';
	// Event bindings like `(click)="click($event)"` need a method on the class.
	const handlers = matches(code, /\(\w+\)="(\w+)\(/g);
	// State signals of the examples, e.g. `(click)="isOpen.set(true)"` and
	// `[open]="isOpen()"` (DBDrawer): a signal on the class, `false` at first.
	const signals = matches(code, /\b([a-z]\w*)\.set\(/g);
	const body = [
		...signals.map((name) => `\t${name} = signal<any>(false);`),
		...handlers
			.filter((handler) => !signals.includes(handler))
			.map(
				(handler) =>
					`\t${handler}(event?: unknown): void {\n\t\t// …\n\t}`
			)
	].join('\n\n');
	// Backslash first, so the template literal keeps it as written.
	const template = code
		.replaceAll('\\', '\\\\')
		.replaceAll('`', '\\`')
		.replaceAll('${', '\\${');
	return `${commonImport}import { Component${signals.length > 0 ? ', signal' : ''} } from '@angular/core';
import { ${imports.join(', ')} } from '@db-ux/ngx-core-components';

@Component({
	selector: 'app-example',
	standalone: true,
	imports: [${[...common, ...imports].join(', ')}],
	template: \`
${indent(template, 2)}
	\`
})
export class ExampleComponent {${body ? `\n${body}\n` : ''}}`;
};

/** Handler functions a Vue template calls, as stubs for the script. */
const vueHandlerStubs = (code: string, script = ''): string =>
	unique([
		...matches(code, /@[\w:.-]+="(\w+)\(/g),
		// Also `async (event) => handleSubmit(event)` (DBDialog form).
		...matches(code, /="(?:async )?\(\w*\) => (\w+)\(/g)
	])
		// Not when the snippet's own script already declares it.
		.filter(
			(handler) => !new RegExp(String.raw`\b${handler}\s*=`).test(script)
		)
		.map(
			(handler) =>
				`const ${handler} = (event?: unknown): void => {\n\t// …\n};`
		)
		.join('\n');

/** `(event) =>` in the template -> `(event: unknown) =>` for `vue-tsc`. */
const typeVueArrows = (code: string): string =>
	code.replaceAll(/="(async )?\((\w+)\) =>/g, '="$1($2: unknown) =>');

const vue = (code: string): string => {
	// Snippets with their own script (e.g. `propOverrides` of DBDialog) get
	// the missing handler stubs at the end of that script.
	if (code.includes('<script')) {
		const script =
			/<script[^>]*>([\s\S]*?)<\/script[^>]*>/i.exec(code)?.[1] ?? '';
		const stubs = vueHandlerStubs(code.replace(script, ''), script);
		const typed = typeVueArrows(code);
		return stubs
			? typed.replace('</script>', `${stubs}\n</script>`)
			: typed;
	}

	const components = matches(code, /<(DB[\dA-Za-z]+)/g);
	if (components.length === 0) {
		return code;
	}
	// Arrow parameters in the template get a type, `vue-tsc` rejects an
	// implicit `any`: `:onClick="(event) => …"` -> `(event: unknown) => …`.
	const typed = typeVueArrows(code);
	const template = typed.trimStart().startsWith('<template>')
		? typed
		: `<template>\n${indent(typed)}\n</template>`;
	// Event handlers like `@click="handleClick($event)"` need a function in
	// the script, like the method stubs of the Angular snippets.
	const stubs = vueHandlerStubs(code);
	return `<script setup lang="ts">
import { ${components.join(', ')} } from '@db-ux/v-core-components';
${stubs ? `\n${stubs}\n` : ''}</script>

${template}`;
};

const webComponents = (code: string): string => {
	if (!/<db-[\da-z-]+/.test(code)) {
		return code;
	}
	return `<script type="module">
	// Registers all <db-*> elements once per app.
	import { defineCustomElements } from '@db-ux/wc-core-components';
	defineCustomElements();
</script>

${code}`;
};

const html = (code: string): string => {
	if (!/class="[^"]*\bdb-/.test(code)) {
		return code;
	}
	// The HTML is the markup the React stories render. Object props without an
	// HTML equivalent end up as attributes like `items="[object Object],…"`
	// (DBBreadcrumb); in plain HTML the items are written as markup instead.
	const cleaned = code.replaceAll(/\s[\w-]+="\[object Object\][^"]*"/g, '');
	return `<!-- index.css loads the DB UX theme and component styles, see Getting Started -->
<link rel="stylesheet" href="index.css" />

${cleaned}`;
};

const BUILDERS: Record<SourceFramework, (code: string) => string> = {
	react,
	angular,
	vue,
	webcomponents: webComponents,
	html
};

/** Adds the imports to a "Show code" snippet. Leaves placeholders untouched. */
export const addSourceImports = (
	code: string,
	framework: SourceFramework
): string => {
	if (
		!code ||
		code.trimStart().startsWith('<!-- HTML output not available')
	) {
		return code;
	}
	// Storybook may run the transform again on its own output: add the
	// imports only once.
	if (code.includes("from '@db-ux/") || code.includes('href="index.css"')) {
		return code;
	}
	return BUILDERS[framework](code);
};
