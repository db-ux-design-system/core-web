import { describe, expect, it } from 'vitest';
import { getStep, parseItems } from './index';

describe('getStep', () => {
	it('returns undefined when step is undefined', () => {
		expect(getStep(undefined)).toBeUndefined();
	});

	it('returns undefined when step is null', () => {
		// eslint-disable-next-line unicorn/no-null
		expect(getStep(null as unknown as undefined)).toBeUndefined();
	});

	it('returns "any" when step is "any"', () => {
		expect(getStep('any')).toBe('any');
	});

	it('returns a number when step is a number', () => {
		expect(getStep(5)).toBe(5);
		expect(getStep(0.5)).toBe(0.5);
	});

	it('returns a number when step is a numeric string', () => {
		expect(getStep('5')).toBe(5);
		expect(getStep('0.5')).toBe(0.5);
	});

	it('returns NaN when step is a non-numeric string', () => {
		expect(getStep('foo')).toBeNaN();
		expect(getStep('invalid')).toBeNaN();
	});
});

describe('parseItems', () => {
	it('returns an empty array for undefined', () => {
		expect(parseItems<string>(undefined)).toEqual([]);
	});

	it('returns array values unchanged', () => {
		expect(parseItems<string>(['a', 'b'])).toEqual(['a', 'b']);
	});

	it('parses a valid JSON array string', () => {
		expect(parseItems<string>('["a","b"]')).toEqual(['a', 'b']);
	});

	it('returns empty array for non-array JSON', () => {
		expect(parseItems<string>('"text"')).toEqual([]);
	});

	it('returns empty array for invalid JSON', () => {
		expect(parseItems<string>('{invalid')).toEqual([]);
	});
});
