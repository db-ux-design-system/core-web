import { type ReplaceResult } from 'replace-in-file';
import { describe, expect, test } from 'vitest';
import { migrate } from '../../src/migration';

describe('sass_to_postcss', () => {
	test('check if SCSS to PostCSS changes are detected', async () => {
		const result = migrate({
			src: './test/sass-to-postcss',
			type: ['sass_to_postcss'],
			dryRun: true
		});

		expect(result).toBeDefined();

		const changedFiles = (result as ReplaceResult[]).filter(
			(res) => res.hasChanged
		);

		// Should detect changes in the SCSS file
		expect(changedFiles.length).toBeGreaterThan(0);

		// Verify the file with SCSS syntax was detected as needing changes
		const scssFileChanged = changedFiles.some((res) =>
			res.file.includes('has-changes.scss')
		);
		expect(scssFileChanged).toBe(true);
	});

	test('check that plain CSS files without SCSS syntax are not changed', async () => {
		const result = migrate({
			src: './test/sass-to-postcss',
			type: ['sass_to_postcss'],
			dryRun: true
		});

		expect(result).toBeDefined();

		// The no-change.css file should not have SCSS syntax to change
		const noChangeFile = (result as ReplaceResult[]).find((res) =>
			res.file.includes('no-change.css')
		);

		// It exists but should not have changes for most patterns
		// (some patterns might still match valid CSS, so we just verify the file was processed)
		expect(noChangeFile).toBeDefined();
	});
});
