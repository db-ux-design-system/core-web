export default {
	'*.md': 'markdownlint -c .markdown-lint.yml',
	'*.{css,scss}': 'stylelint --fix --allow-empty-input',
	'*.{js,ts,tsx,jsx,mjs,cjs}': ['prettier --write', 'xo --fix'],
	'!*.{js,ts,tsx,jsx,mjs,cjs}': 'prettier --write --ignore-unknown'
};
