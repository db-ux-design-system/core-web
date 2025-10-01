/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*.{md,mdx,txt,yml,yaml,ts,tsx,js,jsx,html,css,scss,sass,vue}': [
		'codespell --write-changes --ignore-words .config/.codespellignorewords --config .config/.codespellrc --',
		'codespell --ignore-words .config/.codespellignorewords --config .config/.codespellrc --'
	]
};
