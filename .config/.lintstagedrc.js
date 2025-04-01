export default {
	'*.md': ['markdownlint -c .config/.markdown-lint.yml', 'prettier --write'],
	'*.json': 'prettier --write',
	// In case that we're changing the stylelints configuration files content, we would need to validate it
	'.stylelintrc.*': 'stylelint --validate --allow-empty-input',
	'stylelint.config.*': 'stylelint --validate --allow-empty-input',
	// and elsewhere we don't, compare to https://github.com/stylelint/stylelint/pull/8009
	'*.{css,scss}': 'stylelint --fix --allow-empty-input --no-validate',
	'*.{js,ts,tsx,jsx,mjs,cjs}': 'xo --fix'
};
