const agentPlugin = require('./plugins/agent/agent-plugin.cjs');
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/components/**/agent/*.agent.lite.tsx',
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
		typescript: true,
		explicitBuildFileExtensions: {
			'.md': /.*(agent\.lite\.tsx)$/g
		},
		plugins: [agentPlugin]
	}
};
