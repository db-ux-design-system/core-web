export default {
	'packages/foundations/assets/icons/functional/**/*.svg': () =>
		'npm run update:icon-fonts',
	'*.md': 'markdownlint -c .markdown-lint.yml',
	'*.{css,scss}': 'stylelint --fix --allow-empty-input',
	'*.{js,ts,tsx,jsx,mjs,cjs}': ['prettier --write', 'xo --fix'],
	'!*.{js,ts,tsx,jsx,mjs,cjs}': 'prettier --write --ignore-unknown'
};
