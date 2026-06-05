import { describe, expect, it } from 'vitest';
import { getBoolean, getBooleanAsString, getStep } from './index';

describe('getBooleanAsString', () => {
	it('returns undefined for undefined input', () => {
		expect(getBooleanAsString(undefined)).toBeUndefined();
	});

	it('returns undefined for null input', () => {
		// eslint-disable-next-line unicorn/no-null
		expect(
			getBooleanAsString(null as unknown as undefined)
		).toBeUndefined();
	});

	it('returns "true" for boolean true', () => {
		expect(getBooleanAsString(true)).toBe('true');
	});

	it('returns "false" for boolean false', () => {
		expect(getBooleanAsString(false)).toBe('false');
	});

	it('returns "true" for string "true"', () => {
		expect(getBooleanAsString('true')).toBe('true');
	});

	it('returns "false" for string "false"', () => {
		expect(getBooleanAsString('false')).toBe('false');
	});

	it('returns "true" for empty string (HTML boolean attribute)', () => {
		expect(getBooleanAsString('')).toBe('true');
	});

	it('returns "true" when string value equals propertyName (case-insensitive)', () => {
		expect(getBooleanAsString('noText', 'noText')).toBe('true');
		expect(getBooleanAsString('notext', 'noText')).toBe('true');
		expect(getBooleanAsString('NoText', 'noText')).toBe('true');
		expect(getBooleanAsString('showIcon', 'showIcon')).toBe('true');
	});

	it('returns "false" when string value does not match propertyName', () => {
		expect(getBooleanAsString('someOtherValue', 'noText')).toBe('false');
		expect(getBooleanAsString('random', 'showIcon')).toBe('false');
	});

	it('ignores propertyName when originBool is a boolean', () => {
		expect(getBooleanAsString(true, 'showIcon')).toBe('true');
		expect(getBooleanAsString(false, 'showIcon')).toBe('false');
	});
});

describe('getBoolean', () => {
	it('returns undefined for undefined input', () => {
		expect(getBoolean(undefined)).toBeUndefined();
	});

	it('returns undefined for null input', () => {
		// eslint-disable-next-line unicorn/no-null
		expect(getBoolean(null as unknown as undefined)).toBeUndefined();
	});

	it('returns true for boolean true', () => {
		expect(getBoolean(true)).toBe(true);
	});

	it('returns false for boolean false', () => {
		expect(getBoolean(false)).toBe(false);
	});

	it('returns true for string "true"', () => {
		expect(getBoolean('true')).toBe(true);
	});

	it('returns false for string "false"', () => {
		expect(getBoolean('false')).toBe(false);
	});

	it('returns true for empty string (HTML boolean attribute)', () => {
		expect(getBoolean('')).toBe(true);
	});

	it('returns true when string value equals propertyName (case-insensitive)', () => {
		expect(getBoolean('disabled', 'disabled')).toBe(true);
		expect(getBoolean('Disabled', 'disabled')).toBe(true);
		expect(getBoolean('required', 'required')).toBe(true);
	});

	it('returns false when string value does not match propertyName', () => {
		expect(getBoolean('someOtherValue', 'disabled')).toBe(false);
	});

	it('ignores propertyName when originBool is a boolean', () => {
		expect(getBoolean(true, 'disabled')).toBe(true);
		expect(getBoolean(false, 'disabled')).toBe(false);
	});
});

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
