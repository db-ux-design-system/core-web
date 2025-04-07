/* We use this for IntelliJ IDEs to fetch xo config */
const config = {
	eslintConfig: {
		parser: 'babel-eslint',
		env: {
			node: true,
			es6: true
		},
		extends: ['./node_modules/xo/config/plugins.js']
	}
};

export default config;
