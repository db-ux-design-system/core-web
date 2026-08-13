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

const reactRoot = (tag: string) => `<${tag}
      ref={_ref}
      className={headingClass}
    >${tag}</${tag}>`;

const reactHeading = `import * as React from "react";
import { useRef } from "react";
function DBHeading(props: DBHeadingProps) {
  const _ref = useRef<HTMLHeadingElement | any>(null);
  return <>
    ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(reactRoot).join('\n    ')}
  </>;
}
export default DBHeading;`;

const vueRoot = (tag: string) => `<${tag}
    ref="_ref"
    :class="cls('db-heading', className)"
  >${tag}</${tag}>`;

const vueHeading = `<template>
  ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(vueRoot).join('\n  ')}
</template>
<script setup lang="ts">
const props = defineProps<DBHeadingProps>();
</script>`;

describe('heading attribute passing', () => {
	it('fully generates the React wrapper and every root without post-build', () => {
		const result = transformHeadingAttributePassing(
			reactHeading,
			'react',
			'DBHeading'
		);

		expect(result.match(/\.\.\.filterPassingProps/g)).toHaveLength(6);
		expect(result.match(/\.\.\.getRootProps/g)).toHaveLength(6);
		expect(result).toContain('function DBHeadingFn(');
		expect(result).toContain('const DBHeading = forwardRef<');
		expect(result).toContain(
			`  const internalRef = useRef<HTMLHeadingElement | any>(null);
  const _ref = component || internalRef;`
		);
		expect(result).not.toContain('component || useRef');
		expect(result).toContain(
			'import { filterPassingProps, getRootProps } from "../../utils/react";'
		);
	});

	it('binds attrs and resolves both Vue class props on every heading root', () => {
		const result = transformHeadingAttributePassing(
			vueHeading,
			'vue',
			'DBHeading'
		);

		expect(result.match(/v-bind="\$attrs"/g)).toHaveLength(6);
		expect(
			result.match(/props\['class' \+ 'Name'\] \?\? props\.class/g)
		).toHaveLength(6);
		expect(result).toContain(
			'withDefaults(defineProps<DBHeadingProps>(), { paragraphSpacing: undefined })'
		);
	});

	it('does not change other components', () => {
		expect(
			transformHeadingAttributePassing(
				'<h1 ref={_ref}>Other component</h1>',
				'react',
				'DBOther'
			)
		).toBe('<h1 ref={_ref}>Other component</h1>');
	});

	it.each([
		['react', reactHeading.replace('</h6>', '')],
		['vue', vueHeading.replace(' ref="_ref"', '')]
	])('fails fast for an unexpected %s Heading shape', (target, code) => {
		expect(() =>
			transformHeadingAttributePassing(code, target, 'DBHeading')
		).toThrow(`DBHeading ${target} attribute-passing transform failed`);
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
							outputFilePath: 'components/heading/heading.vue'
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

	it('requires a regular Heading file outside Figma generation', () => {
		expect(() =>
			copyHeadingSpec({ target: 'react' }, { componentFiles: [] })
		).toThrow('generated heading file not found');
	});
});
