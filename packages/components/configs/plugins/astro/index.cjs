const { writeFileSync, mkdirSync, readFileSync } = require('node:fs');
const { join } = require('node:path');
const { astroStylesDirPath } = require('./utils.cjs');
const { getAstroTemplate, toDashedLowerCase } = require('./template.cjs');
const { createHydrateCss } = require('./css.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => {
	return {
		build: {
			pre: () => {
				mkdirSync(`${astroStylesDirPath}`, {
					recursive: true
				});
				writeFileSync(
					`${astroStylesDirPath}/hydrate.css`,
						`
/* This file is required for hydration to work properly */
:is():not(.hydrated) {
  font-size: 0;

  & > * {
    display: none;
  }

  &::before {
    --spinner-color: var(--db-brand-origin-default);
    --spinner-border-radius: var(--db-border-radius-xs);

    content: "";
    display: flex;
    width: var(--db-sizing-sm);
    aspect-ratio: 1;
    border-radius: 50%;
    background:
      radial-gradient(farthest-side, var(--spinner-color) 94%, #0000)
        top/var(--spinner-border-radius) var(--spinner-border-radius) no-repeat,
      conic-gradient(#0000 30%, var(--spinner-color));
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--spinner-border-radius)),
      #000 0
    );
    animation: rotate 1s infinite linear;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}`
				);
			},
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
				createHydrateCss(
					`db-${toDashedLowerCase(json.name.slice(2, json.name.length))}`
				);
				return getAstroTemplate(json);
			}
		}
	};
};
