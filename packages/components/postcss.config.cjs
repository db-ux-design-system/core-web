module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-each'),
		require('postcss-transform-mixins'),
		require('cssnano')({
			preset: [
				'default',
				{
					svgo: false
				}
			]
		})
	]
};
