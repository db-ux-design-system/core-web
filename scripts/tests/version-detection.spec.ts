import { beforeEach, describe, expect, test } from 'vitest';
import {
	getAngularMajorVersion,
	shouldRegisterCVA
} from '../../output/angular/src/utils/version-detection.js';
import {
	setMockAngularVersion,
	setMockAngularVersionThrows
} from './__mocks__/angular-core.js';

/**
 * Unit Tests for output/angular/src/utils/version-detection.ts
 *
 * The @angular/core module is aliased (via vitest.config.ts resolve.alias)
 * to a controllable mock in tests/__mocks__/angular-core.ts.
 *
 * Validates: Requirements 3.1, 3.6
 */

describe('version-detection', () => {
	beforeEach(() => {
		// Reset to default Angular 21
		setMockAngularVersion('21');
	});

	describe('getAngularMajorVersion', () => {
		test('returns 20 when VERSION.major is "20"', () => {
			setMockAngularVersion('20');
			expect(getAngularMajorVersion()).toBe(20);
		});

		test('returns 21 when VERSION.major is "21"', () => {
			setMockAngularVersion('21');
			expect(getAngularMajorVersion()).toBe(21);
		});

		test('returns 22 when VERSION.major is "22"', () => {
			setMockAngularVersion('22');
			expect(getAngularMajorVersion()).toBe(22);
		});

		test('returns 17 when VERSION.major is "17"', () => {
			setMockAngularVersion('17');
			expect(getAngularMajorVersion()).toBe(17);
		});

		test('returns 0 when accessing VERSION.major throws', () => {
			setMockAngularVersionThrows();
			expect(getAngularMajorVersion()).toBe(0);
		});
	});

	describe('shouldRegisterCVA', () => {
		test('always returns true regardless of Angular version', () => {
			setMockAngularVersion('20');
			expect(shouldRegisterCVA()).toBe(true);

			setMockAngularVersion('21');
			expect(shouldRegisterCVA()).toBe(true);

			setMockAngularVersion('22');
			expect(shouldRegisterCVA()).toBe(true);
		});

		test('returns true when exception occurs', () => {
			setMockAngularVersionThrows();
			expect(shouldRegisterCVA()).toBe(true);
		});
	});
});
