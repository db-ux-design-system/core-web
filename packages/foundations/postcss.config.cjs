module.exports = {
	plugins: [
		require('postcss-inline-svg')({
			paths: ['./assets/icons/', '../../assets/icons/']
		}),
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
