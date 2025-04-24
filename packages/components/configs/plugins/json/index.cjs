const fs = require('fs');
const path = require('path');

module.exports = () => ({
	json: {
		post(json) {
			if(json.pluginData.target === "react") {
				const outputDir = path.resolve(
					__dirname,
					'../../../../../output/json'
				);
				const outputFilePath = path.join(
					outputDir,
					json.pluginData.outputFilePath.replace('.tsx', '.json')
				);

				// Sicherstellen, dass das Verzeichnis existiert
				fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

				// JSON-Zeichenkette in die Datei schreiben
				fs.writeFileSync(outputFilePath, JSON.stringify(json, null, 4));
			}

			return json;
		}
	}
});
