import { mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

// The plugin is CommonJS; import its named exports for unit testing.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {
	copyHeadingSpec,
	transformHeadingAttributePassing
} = require('./heading-attribute-passing.cjs');

const reactHeading = `import * as React from "react";
import { useRef } from "react";
function DBHeadingH2(props: DBHeadingH2Props) {
  const _ref = useRef<HTMLHeadingElement | any>(null);
  return <h2
    ref={_ref}
    className={headingClass}
  >Heading</h2>;
}
export default DBHeadingH2;`;

const vueHeading = `<template>
  <h2
    ref="_ref"
    :class="cls('db-heading', className)"
  >Heading</h2>
</template>
<script setup lang="ts">
const props = defineProps<DBHeadingH2Props>();
</script>`;

const reactCustomHeading = `import * as React from "react";
import { useRef } from "react";
function DBCustomHeading(props: DBCustomHeadingProps) {
  const _ref = useRef<HTMLDivElement | any>(null);
  return <div
    ref={_ref}
    className={headingClass}
  >{props.children}</div>;
}
export default DBCustomHeading;`;

const vueCustomHeading = `<template>
  <div
    ref="_ref"
    :class="cls('db-custom-heading', className)"
    :data-paragraph-spacing="getBooleanAsString(paragraphSpacing, 'paragraphSpacing')"
  ><slot /></div>
</template>
<script setup lang="ts">
defineOptions({
  name: "DBCustomHeading",
});
const props = defineProps<DBCustomHeadingProps>();
</script>`;

const angularCustomHeading = `@Component({ selector: "db-custom-heading" })
export class DBCustomHeading {}`;

describe('static heading attribute passing', () => {
	it('generates the React wrapper for one fixed root', () => {
		const result = transformHeadingAttributePassing(
			reactHeading,
			'react',
			'DBHeadingH2'
		);
		expect(result.match(/\.\.\.filterPassingProps/g)).toHaveLength(1);
		expect(result.match(/\.\.\.getRootProps/g)).toHaveLength(1);
		expect(result).toContain('function DBHeadingH2Fn(');
		expect(result).toContain('const DBHeadingH2 = forwardRef<');
	});

	it('binds Vue attrs and resolves both class aliases', () => {
		const result = transformHeadingAttributePassing(
			vueHeading,
			'vue',
			'DBHeadingH2'
		);
		expect(result).toContain('props.className ?? props.class');
		// Vue forwards undeclared attributes to a single root by itself, and
		// `useDefaultProps` yields the `withDefaults(...)` declaration natively, so
		// the plugin must add neither.
		expect(result).not.toContain('$attrs');
		expect(result).not.toContain('withDefaults(');
	});

	it('wraps the custom heading div in the same React forwardRef', () => {
		const result = transformHeadingAttributePassing(
			reactCustomHeading,
			'react',
			'DBCustomHeading'
		);
		expect(result).toContain('function DBCustomHeadingFn(');
		expect(result).toContain('const DBCustomHeading = forwardRef<');
		expect(result).toContain('HTMLDivElement');
		// The wrapper derives no semantics, so nothing is excluded from passing.
		expect(result).not.toContain('role');
		expect(result).not.toContain('aria-level');
	});

	it('binds Vue attrs for the custom heading without opting out of fallthrough', () => {
		const result = transformHeadingAttributePassing(
			vueCustomHeading,
			'vue',
			'DBCustomHeading'
		);
		expect(result).toContain('props.className ?? props.class');
		// No derived `role`/`aria-level` to protect, so Vue's automatic attribute
		// fallthrough stays enabled and needs no explicit binding.
		expect(result).not.toContain('inheritAttrs: false');
		expect(result).not.toContain('$attrs');
		expect(result).not.toContain('withDefaults(');
	});

	it('is react and vue only', () => {
		// Angular and stencil forward `data-*` and `aria-*` from the custom-element
		// host through the generic `attribute-passing` plugin, so this plugin is not
		// registered for them and rejects those targets instead of silently
		// returning unchanged code.
		for (const target of ['angular', 'stencil'] as const) {
			expect(() =>
				transformHeadingAttributePassing(
					angularCustomHeading,
					target,
					'DBCustomHeading'
				)
			).toThrow('unsupported target');
		}
		// Components outside the Heading family are never touched, whatever the
		// target.
		expect(
			transformHeadingAttributePassing(
				angularCustomHeading,
				'angular',
				'DBOther'
			)
		).toBe(angularCustomHeading);
	});

	it('does not change other components', () => {
		expect(
			transformHeadingAttributePassing(
				'<h2>Other</h2>',
				'react',
				'DBOther'
			)
		).toBe('<h2>Other</h2>');
	});
});

describe('heading spec copy', () => {
	it('rewrites copied Vue specs to use Vue component testing', () => {
		const outputDir = mkdtempSync(join(tmpdir(), 'heading-vue-spec-'));
		mkdirSync(join(outputDir, 'components/heading'), { recursive: true });
		try {
			copyHeadingSpec(
				{ target: 'vue' },
				{
					componentFiles: [
						{
							outputDir,
							outputFilePath: 'components/heading/heading-h1.vue'
						}
					]
				}
			);
			const result = readFileSync(
				join(outputDir, 'components/heading/heading.spec.tsx'),
				'utf-8'
			);
			expect(result).toContain('@playwright/experimental-ct-vue');
			expect(result).not.toContain('@playwright/experimental-ct-react');
			expect(result).not.toContain('// VUE:');
		} finally {
			rmSync(outputDir, { recursive: true, force: true });
		}
	});

	it('skips spec copying when only a Figma Heading is generated', () => {
		expect(() =>
			copyHeadingSpec(
				{ target: 'react' },
				{
					componentFiles: [
						{
							outputFilePath:
								'components/heading/figma/heading.figma.batch.ts'
						}
					]
				}
			)
		).not.toThrow();
	});

	it('requires a regular static Heading file outside Figma generation', () => {
		expect(() =>
			copyHeadingSpec({ target: 'react' }, { componentFiles: [] })
		).toThrow('generated heading-h1 file not found');
	});
});
