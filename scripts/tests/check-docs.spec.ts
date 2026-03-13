import { describe, expect, test } from 'vitest';
import { expandBracketAlternatives } from '../check-docs.js';

const expand = expandBracketAlternatives as (input: string) => string[];

describe('expandBracketAlternatives', () => {
	test('returns original input when no bracket alternatives exist', () => {
		expect(expand('build/styles/relative.css')).toEqual([
			'build/styles/relative.css'
		]);
	});

	test('expands a single bracket group with alternatives', () => {
		expect(expand('build/styles/[rollup|webpack|relative].css')).toEqual([
			'build/styles/rollup.css',
			'build/styles/webpack.css',
			'build/styles/relative.css'
		]);
	});

	test('expands multiple bracket groups as cartesian combinations', () => {
		expect(expand('foo/[a|b]/[c|d].css')).toEqual([
			'foo/a/c.css',
			'foo/a/d.css',
			'foo/b/c.css',
			'foo/b/d.css'
		]);
	});

	test('trims alternatives and skips empty ones', () => {
		expect(expand('styles/[ rollup | | webpack ].css')).toEqual([
			'styles/rollup.css',
			'styles/webpack.css'
		]);
	});
});
