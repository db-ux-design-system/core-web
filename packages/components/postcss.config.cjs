module.exports = {
	plugins: [
		require('cssnano')({
			preset: [
				'default',
				{
					svgo: false
				}
			]
		}),
		require('@csstools/postcss-logical-overflow')
	]
};
