/* eslint-disable import-x/no-extraneous-dependencies */
// Example PostCSS configuration for SASS to PostCSS migration
// This file demonstrates the plugin setup needed for the migration
// It is not part of the actual build process

module.exports = {
	plugins: [
		// Import handling - resolves @import statements
		require('postcss-import')({
			path: ['node_modules', 'build/styles']
		}),

		// Mixins - must come before postcss-nesting
		require('postcss-mixins')({
			// Can define mixins here or in separate files
			mixins: {
				// Example: define common mixins programmatically if needed
			}
		}),

		// CSS Nesting - handles & selector and nesting
		require('postcss-nesting')(),

		// Already in use - minification
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
