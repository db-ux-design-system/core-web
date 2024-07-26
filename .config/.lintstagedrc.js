export default {
	'*.md': 'markdownlint -c .config/.markdown-lint.yml',
	'*.{css,scss}': 'stylelint --fix --allow-empty-input',
	'*.{js,ts,tsx,jsx,mjs,cjs}': 'xo --fix'
};
