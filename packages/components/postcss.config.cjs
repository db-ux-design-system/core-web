module.exports = {
	plugins: [
		// Before cssnano, which removes the doc comments it reads.
		require('./scripts/css-properties.ts').default(),
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
