/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*.md': 'markdownlint --config .config/.markdown-lint.yml --fix',
	// In case that we're changing the stylelints configuration files content, we would need to validate it
	'.stylelintrc.*': 'stylelint --validate --allow-empty-input',
	'stylelint.config.*': 'stylelint --validate --allow-empty-input',
	// And elsewhere we don't, compare to https://github.com/stylelint/stylelint/pull/8009
	'*.{css,scss}': 'stylelint --fix --allow-empty-input --no-validate',
	'*.{js,ts,tsx,jsx,mjs,cjs}': 'xo --fix',
	// Whenever a workflow or action file changes, the GitHub Actions dependency
	// lockfile must be regenerated (see https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/).
	// `gh actions-lock` takes no path args: it rescans every workflow, re-pins
	// dependencies and prunes entries for deleted workflows, then rewrites
	// `.github/workflows/actions.lock`, which we re-stage so it lands in the commit.
	// The script skips with an install hint if the `gh actions-lock` extension is missing.
	'.github/{workflows,actions}/**/!(actions.lock)': () =>
		'node scripts/actions-lock-staged.js',
	'**/package.json': [() => 'pnpm install', 'pnpm run lint:package-json'],
	'*': 'cspell --config .config/cspell.config.ts --no-must-find-files --quiet',
	// Screen-reader snapshot files must not have a trailing newline —
	// Playwright's toMatchSnapshot() compares byte-for-byte.
	'showcases/screen-reader/__snapshots__/**/*.txt':
		'node scripts/strip-final-newline.js --fix'
};
