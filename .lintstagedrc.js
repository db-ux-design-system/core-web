export default {
	'packages/foundations/assets/icons/functional/**/*.svg': () =>
		'update:icon-fonts',
	'*.md': 'markdownlint -c .markdown-lint.yml',
	'*.{css,scss}': 'stylelint --fix',
	'*.{js,ts,tsx}': 'xo --fix',
	'!*.{js,ts,tsx}': 'prettier --write --ignore-unknown'
};
