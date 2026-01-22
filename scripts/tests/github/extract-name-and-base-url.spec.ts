import { execSync } from 'node:child_process';
import { describe, expect, test } from 'vitest';

// cspell:ignore äpfel aepfel über ueber größe groesse Äpfel Aepfel Über Ueber müll muell

const command = 'node github/test-sanitize-name.js';

describe('sanitizeName', () => {
	const runSanitize = (input: string): string => {
		const result = execSync(`${command} "${input}"`);
		return result.toString().trim();
	};

	test('should return empty string for empty input', () => {
		expect(runSanitize('')).toBe('');
	});

	test('should keep valid characters unchanged', () => {
		expect(runSanitize('feature-branch')).toBe('feature-branch');
		expect(runSanitize('feature_branch')).toBe('feature_branch');
		expect(runSanitize('feature.branch')).toBe('feature.branch');
		expect(runSanitize('v1.2.3')).toBe('v1.2.3');
		expect(runSanitize('main')).toBe('main');
	});

	test('should convert German lowercase Umlauts', () => {
		expect(runSanitize('äpfel')).toBe('aepfel');
		expect(runSanitize('öl')).toBe('oel');
		expect(runSanitize('über')).toBe('ueber');
		expect(runSanitize('größe')).toBe('groesse');
	});

	test('should convert German uppercase Umlauts', () => {
		expect(runSanitize('Äpfel')).toBe('Aepfel');
		expect(runSanitize('Öl')).toBe('Oel');
		expect(runSanitize('Über')).toBe('Ueber');
	});

	test('should handle branch names with Umlauts from issue', () => {
		// This is the case mentioned in the issue
		expect(runSanitize('5851-müll-branch')).toBe('5851-muell-branch');
	});

	test('should replace non-URL-safe characters with dash', () => {
		expect(runSanitize('branch with spaces')).toBe('branch-with-spaces');
		expect(runSanitize('branch!test')).toBe('branch-test');
	});

	test('should remove consecutive dashes', () => {
		expect(runSanitize('branch--name')).toBe('branch-name');
		expect(runSanitize('a---b')).toBe('a-b');
	});

	test('should remove leading and trailing dashes', () => {
		expect(runSanitize('-branch-')).toBe('branch');
		expect(runSanitize('--branch--')).toBe('branch');
	});
});
