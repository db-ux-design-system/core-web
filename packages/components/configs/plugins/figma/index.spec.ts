import { describe, expect, it } from 'vitest';

// The plugin is CommonJS; import its named export for unit testing.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { extractVueTemplate } = require('./index.cjs');

describe('Figma Vue template extraction', () => {
	it('keeps nested slot templates inside the outer template', () => {
		const result = extractVueTemplate(`<template>
	<DBHeading>
		<template v-slot:start-slot><span>Start</span></template>
		Heading
		<template v-slot:end-slot><span>End</span></template>
	</DBHeading>
</template>
<script setup lang="ts"></script>`);

		expect(result).toContain('<template v-slot:start-slot>');
		expect(result).toContain('<template v-slot:end-slot>');
		expect(result).toContain('</DBHeading>');
	});

	it('fails fast without a complete outer template', () => {
		expect(() => extractVueTemplate('<template><DBHeading />')).toThrow(
			'Expected one outer Vue template wrapper'
		);
	});
});
