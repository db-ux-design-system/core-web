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
		expect(result).toContain("props['class' + 'Name'] ?? props.class");
		expect(result).toContain(
			'withDefaults(defineProps<DBHeadingH2Props>()'
		);
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
