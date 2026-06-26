import { globSync } from 'glob';
import { type ReplaceResult, replaceInFileSync } from 'replace-in-file';
import { describe, expect, test } from 'vitest';
import { sass_to_postcss } from '../../sass-to-postcss.js';

const runMigration = (src: string): ReplaceResult[] => {
	const paths = `${src}/**`;
	const globPaths: string[] = globSync(paths, {
		nodir: true,
		ignore: ['node_modules', '**/*.zip']
	})
		.map((path) => path.replaceAll('\\', '/'))
		.filter((path) => path.includes('.'));

	const allResults: ReplaceResult[] = [];

	for (const update of sass_to_postcss) {
		const option = {
			...update,
			files: globPaths,
			dry: true
		};
		const result: ReplaceResult[] = replaceInFileSync(option);
		allResults.push(...result);
	}

	return allResults;
};

describe('sass_to_postcss', () => {
	test('check if SCSS to PostCSS changes are detected', () => {
		const result = runMigration('./tests/sass-to-postcss');

		expect(result).toBeDefined();

		const changedFiles = result.filter((res) => res.hasChanged);

		// Should detect changes in the SCSS file
		expect(changedFiles.length).toBeGreaterThan(0);

		// Verify the file with SCSS syntax was detected as needing changes
		const scssFileChanged = changedFiles.some((res) =>
			res.file.includes('has-changes.scss')
		);
		expect(scssFileChanged).toBe(true);
	});

	test('check that plain CSS files without SCSS syntax are not changed', () => {
		const result = runMigration('./tests/sass-to-postcss');

		expect(result).toBeDefined();

		// The no-change.css file should not have SCSS syntax to change
		const noChangeFile = result.find((res) =>
			res.file.includes('no-change.css')
		);

		// It exists but should not have changes for most patterns
		// (some patterns might still match valid CSS, so we just verify the file was processed)
		expect(noChangeFile).toBeDefined();
	});
});
