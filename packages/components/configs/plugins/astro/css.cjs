const { writeFileSync, readFileSync } = require('node:fs');
const { astroStylesDirPath } = require('./utils.cjs');

const createHydrateCss = (name) => {
	let template = readFileSync(`${astroStylesDirPath}/hydrate.css`).toString();
	template = template.replace(`:is(`, `:is(${name},`).replace(',)', ')');
	template += `
.${name} {
    & + ${name} {
      &:not(.hydrated) {
        display: none;
      }
    }

    &:has(+ ${name}[class="hydrated"]) {
      display: none;
    }
  }`;

	writeFileSync(`${astroStylesDirPath}/hydrate.css`, template);
};

module.exports = { createHydrateCss };
