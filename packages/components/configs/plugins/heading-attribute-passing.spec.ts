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

const attributePassingGuard = `      if (element && parent) {
      const attributes = Array.from(parent.attributes);
      if (
        attr && attr.name !== 'data-density' &&
        (attr.name.startsWith("data-") || attr.name.startsWith("aria-"))
      ) {`;

const vueCustomHeading = `<template>
  <div
    ref="_ref"
    role="heading"
    :class="cls('db-heading', className)"
    :aria-level="semanticLevel ?? 2"
  ><slot /></div>
</template>
<script setup lang="ts">
defineOptions({
  name: "DBCustomHeading",
});
const props = defineProps<DBCustomHeadingProps>();
</script>`;

const angularCustomHeading = `@Component({ selector: "db-custom-heading" })
export class DBCustomHeading {
  semanticLevel: InputSignal<DBCustomHeadingProps["semanticLevel"]> =
    input<DBCustomHeadingProps["semanticLevel"]>();
${attributePassingGuard}
}`;

const stencilCustomHeading = `@Component({ tag: "db-custom-heading" })
export class DBCustomHeading {
  @Prop() semanticLevel: DBCustomHeadingProps["semanticLevel"];
${attributePassingGuard}
}`;

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
		expect(result.match(/v-bind="\$attrs"/g)).toHaveLength(1);
		expect(result).toContain('props.className ?? props.class');
		expect(result).toContain(
			'withDefaults(defineProps<DBHeadingH2Props>()'
		);
	});

	it('opts out of Vue attribute fallthrough so aria-level stays derived', () => {
		const result = transformHeadingAttributePassing(
			vueCustomHeading,
			'vue',
			'DBCustomHeading'
		);
		expect(result).toContain('inheritAttrs: false');
		// `$attrs` must be bound before `role`, so the derived semantics win.
		expect(result.indexOf('v-bind="$attrs"')).toBeLessThan(
			result.indexOf('role="heading"')
		);
		expect(result.indexOf('role="heading"')).toBeLessThan(
			result.indexOf(':aria-level=')
		);
	});

	it('removes host semantics for Angular and keeps semanticLevel optional at runtime', () => {
		const result = transformHeadingAttributePassing(
			angularCustomHeading,
			'angular',
			'DBCustomHeading'
		);
		expect(result).toContain('parent.removeAttribute("role")');
		expect(result).toContain('parent.removeAttribute("aria-level")');
		expect(result).toContain(
			"attr.name !== 'data-density' && attr.name !== 'aria-level' &&"
		);
		// A required input would throw NG0950 in Angular while every other target
		// falls back to level 2, so the runtime behaviour must stay uniform.
		expect(result).not.toContain('input.required');
		expect(result).toContain(
			'input<DBCustomHeadingProps["semanticLevel"]>()'
		);
	});

	it('requires the Stencil semanticLevel prop and removes host semantics', () => {
		const result = transformHeadingAttributePassing(
			stencilCustomHeading,
			'stencil',
			'DBCustomHeading'
		);
		// Type-level only: keeps the `?? 2` runtime fallback reachable while making
		// `semanticLevel` the one required member of `JSX.DbCustomHeading`.
		expect(result).toContain(
			'@Prop() semanticLevel!: DBCustomHeadingProps["semanticLevel"]'
		);
		expect(result).toContain('parent.removeAttribute("role")');
		expect(result).toContain('parent.removeAttribute("aria-level")');
		expect(result).toContain(
			"attr.name !== 'data-density' && attr.name !== 'aria-level' &&"
		);
	});

	it('keeps forwarding aria-level for native headings', () => {
		expect(
			transformHeadingAttributePassing(
				stencilCustomHeading,
				'stencil',
				'DBHeadingH2'
			)
		).toBe(stencilCustomHeading);
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
