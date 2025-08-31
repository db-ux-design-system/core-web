module.exports = {
	plugins: [
		require('postcss-inline-svg')({
			paths: [
				'./assets/icons/ui',
				'../../assets/icons/ui',
				'/home/runner/work/core-web/core-web/packages/foundations/assets/icons/ui'
			]
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
