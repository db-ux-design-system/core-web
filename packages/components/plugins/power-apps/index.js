const ChildProcess = require('child_process');
const Buff = require('buffer');

module.exports = () => ({
	json: {
		post(json) {
			const component = json.meta?.useMetadata?.component;
			let propsCliString = '';
			let includeIconCliString = '';
			if (component) {
				if (component.properties) {
					const propsString = JSON.stringify(component.properties);
					const propsBuffer =
						Buff.Buffer.from(propsString).toString('base64');
					propsCliString = `--props ${propsBuffer}`;
				}

				if (component.includeIcon) {
					includeIconCliString = `--includeIcon true`;
				}
			}

			// TODO: Make Version dynamic
			ChildProcess.execSync(
				`hygen power-apps new --version 1.0.0 ${json.name
					.replace('DB', '')
					.toLowerCase()} ${includeIconCliString} ${propsCliString} `
			);
			return json;
		}
	}
});
