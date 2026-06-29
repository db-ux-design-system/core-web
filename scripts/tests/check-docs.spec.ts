import { describe, expect, test } from 'vitest';
import {
	expandBracketAlternatives,
	parseDBUXReference
} from '../check-docs.js';

const expand = expandBracketAlternatives as unknown as (
	input: string
) => string[];
const parseRef = parseDBUXReference as unknown as (
	input: string
) => { packageName: string; filePath: string } | undefined;

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

describe('parseDBUXReference', () => {
	test('parses direct @db-ux package references', () => {
		expect(
			parseRef('@db-ux/db-theme-icons/build/styles/relative.css')
		).toEqual({
			packageName: '@db-ux/db-theme-icons',
			filePath: 'build/styles/relative.css'
		});
	});

	test('parses node_modules-prefixed @db-ux references', () => {
		expect(
			parseRef(
				'node_modules/@db-ux/db-theme-icons/build/styles/[relative|absolute].css'
			)
		).toEqual({
			packageName: '@db-ux/db-theme-icons',
			filePath: 'build/styles/[relative|absolute].css'
		});
	});

	test('parses ./node_modules-prefixed @db-ux references', () => {
		expect(
			parseRef(
				'./node_modules/@db-ux/db-theme-icons/build/styles/relative.css'
			)
		).toEqual({
			packageName: '@db-ux/db-theme-icons',
			filePath: 'build/styles/relative.css'
		});
	});

	test('parses ../node_modules-prefixed @db-ux references', () => {
		expect(
			parseRef(
				'../node_modules/@db-ux/db-theme-icons/build/styles/relative.css'
			)
		).toEqual({
			packageName: '@db-ux/db-theme-icons',
			filePath: 'build/styles/relative.css'
		});
	});

	test('returns undefined for non-@db-ux references', () => {
		expect(
			parseRef('node_modules/some-other-package/file.css')
		).toBeUndefined();
	});
});
