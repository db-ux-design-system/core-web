module.exports = {
	plugins: [
		require('cssnano')({
			preset: [
				'default',
				{
					// Prevent cssnano from converting @charset to a BOM.
					// PostCSS 8.5.24+ preserves BOMs, which corrupts selectors
					// when this CSS is later concatenated mid-file by bundlers.
					normalizeCharset: false,
					svgo: false
				}
			]
		})
	]
};
