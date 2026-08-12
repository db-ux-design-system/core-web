import { describe, expect, it } from 'vitest';

// The plugin is CommonJS; import its named export for unit testing.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {
	transformHeadingAttributePassing
} = require('./heading-attribute-passing.cjs');

const reactRoot = (tag: string) => `<${tag}
      ref={_ref}
      className={headingClass}
    >${tag}</${tag}>`;

const reactHeading = `
function DBHeading() {
  return <>
    ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(reactRoot).join('\n    ')}
  </>;
}`;

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
	it('adds React pass-through helpers to h2-h6 and leaves h1 to post-build', () => {
		const result = transformHeadingAttributePassing(
			reactHeading,
			'react',
			'DBHeading'
		);

		expect(result.match(/filterPassingProps/g)).toHaveLength(5);
		expect(result.match(/getRootProps/g)).toHaveLength(5);
		expect(result.match(/<h1\b[\s\S]*?>/)?.[0]).not.toContain(
			'filterPassingProps'
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
