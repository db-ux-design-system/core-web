const { writeFileSync, readFileSync } = require('node:fs');
const { join } = require('node:path');
const { getAstroTemplate } = require('./template.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => {
	return {
		build: {
			post: (_, files) => {
				files.nonComponentFiles.forEach(
					({ outputDir, outputFilePath }) => {
						if (
							outputFilePath.includes('components') &&
							outputFilePath.endsWith('index.ts')
						) {
							const fileContent = readFileSync(outputFilePath)
								.toString()
								.trim();
							const slicedFile = fileContent.slice(
								0,
								fileContent.length - 2
							);
							const replacement = `${slicedFile}.astro';`;
							writeFileSync(
								join(outputDir, outputFilePath),
								replacement
							);
						}
					}
				);
			}
		},
		code: {
			post(code, json) {
				return getAstroTemplate(json);
			}
		}
	};
};
