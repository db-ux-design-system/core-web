import { describe, expect, it } from 'vitest';
import { getStep } from './index';

describe('getStep', () => {
	it('returns undefined when step is undefined', () => {
		expect(getStep(undefined)).toBeUndefined();
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
});
