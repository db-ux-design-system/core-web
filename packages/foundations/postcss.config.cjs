module.exports = {
	plugins: [
		require('postcss-inline-svg')({
			paths: [
				'../../node_modules/@db-ux/db-theme-icons/build/assets/',
				'../../node_modules/@db-ux-inner-source/db-theme-icons/build/assets/'
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
