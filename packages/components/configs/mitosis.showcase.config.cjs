/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: [
		'src/components/**/*.showcase.lite.tsx',
		'src/components/**/*.example.lite.tsx',
		'src/components/**/*.meta.lite.tsx'
	],
	targets: ['angular', 'vue', 'react', 'stencil'],
	dest: '../../output',
	options: {
		angular: {
			api: 'signals'
		},
		vue: {
			api: 'composition'
		}
	},
	commonOptions: {
		typescript: true
	}
};
