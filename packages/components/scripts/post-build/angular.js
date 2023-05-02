const Replace = require('replace-in-file');
const { components } = require('./components');
const { runReplacements } = require('../utils');

const changeFile = (component, input) => {
	return input
		.split('\n')
		.filter(
			(line) =>
				!line.includes('@db-ui') &&
				!line.includes(`Props } from "../`) &&
				!line.includes(`[key]=`)
		)
		.map((line) => {
			if (
				line.includes(`import { DB`) &&
				line.includes(`../`) &&
				!line.includes(`Module`)
			) {
				return line.replace(` } from "../`, `Module } from "../`);
			}

			if (line.includes(': ElementRef')) {
				return line.replace(': ElementRef', ': ElementRef | undefined');
			}

			if (line.includes('.nativeElement') && !line.includes('=')) {
				return line.replace('.nativeElement', '?.nativeElement');
			}

			return line;
		})
		.join('\n');
};

module.exports = (tmp) => {
	for (const component of components) {
		const componentName = component.name;
		const file = `../../${
			tmp ? 'output/tmp' : 'output'
		}/angular/src/components/${componentName}/${componentName}.ts`;
		const options = {
			files: file,
			processor: (input) => changeFile(component, input)
		};

		try {
			Replace.sync(options);
			runReplacements([], component, 'angular', file);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
