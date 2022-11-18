const PowerAppsPlugin = require('./plugins/power-apps');
const Debug = require('./plugins/debug');

module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue3', 'webcomponent', 'svelte', 'react'],
	options: {
		react: {
			typescript: true,
			plugins: [PowerAppsPlugin]
		},
		angular: {
			typescript: true
		},
		vue3: {
			//plugins: [Debug],
		},
		webcomponent: {
			experimental: {
				attributeChangedCallback: (test, json, useOptions) => {
					const properties =
						json?.meta?.useMetadata?.component?.properties?.map(
							(prop) => prop.name
						) || [];
					return (
						'this.props[name] = newValue;\n' +
						'    this.update();' +
						'}' +
						'static get observedAttributes() {\n' +
						`    return ${JSON.stringify(properties)};`
					);
				}
			}
			// plugins: [Debug],
		}
	}
};
