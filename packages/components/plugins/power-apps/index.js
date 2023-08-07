const ChildProcess = require('node:child_process');
const Buff = require('node:buffer');

module.exports = () => ({
	json: {
		post(json) {
			const component = json.meta?.useMetadata?.component;
			let propsCliString = '';
			let includeIcon = '';
			let hasDisabledProp = '';
			let hasOnClick = '';
			let canvasHeight = '--canvasHeight fixed';
			let canvasWidth = '--canvasWidth fixed';
			let canvasMinHeight = '';
			let canvasMinWidth = '';
			if (component) {
				if (component.properties) {
					const propsString = JSON.stringify(component.properties);
					const propsBuffer =
						Buff.Buffer.from(propsString).toString('base64');
					propsCliString = `--props ${propsBuffer}`;
				}

				if (component.includeIcon) {
					includeIcon = `--includeIcon true`;
				}

				if (component.hasDisabledProp) {
					hasDisabledProp = `--hasDisabledProp true`;
				}

				if (component.hasOnClick) {
					hasOnClick = `--hasOnClick true`;
				}

				if (component.canvasSize) {
					if (component.canvasSize.width) {
						canvasWidth = `--canvasWidth ${component.canvasSize.width}`;
					}
					if (component.canvasSize.height) {
						canvasHeight = `--canvasHeight ${component.canvasSize.height}`;
					}
					if (component.canvasSize.minWidth) {
						canvasMinWidth = `--canvasMinWidth ${component.canvasSize.minWidth}`;
					}
					if (component.canvasSize.minHeight) {
						canvasMinHeight = `--canvasMinHeight ${component.canvasSize.minHeight}`;
					}
				}
			}

			ChildProcess.execSync(
				`hygen power-apps new --version 0.0.0 ${json.name
					.replace('DB', '')
					.toLowerCase()} ${canvasHeight} ${canvasWidth} ${canvasMinHeight} ${canvasMinWidth} ${includeIcon} ${hasDisabledProp} ${hasOnClick} ${propsCliString}`
			);
			return json;
		}
	}
});
