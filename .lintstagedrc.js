export default {
	'*.md': 'markdownlint -c .markdown-lint.yml',
	'*.{css,scss}': 'stylelint --fix --allow-empty-input',
	'*.{js,ts,tsx,jsx,mjs,cjs}': 'xo --fix'
};
