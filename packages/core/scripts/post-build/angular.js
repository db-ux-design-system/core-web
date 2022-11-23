const Replace = require('replace-in-file');
const Components = require('./components');

const changeFile = (component, input) => {
	let result = input
		.split('\n')
		.filter(
			(line) =>
				!line.includes('@db-ui') && !line.includes(`Props } from "../`)
		)
		.map((line) => {
			if (
				line.includes(`import { DB`) &&
				line.includes(`../`) &&
				!line.includes(`Module`)
			) {
				return line.replace(` } from "../`, `Module } from "../`);
			}
			if (line.includes('selector:') && !input.includes('styleUrls:')) {
				return `${line}\n  styleUrls:['./${component.name}.scss'],`;
			}
			if (line.includes(': ElementRef')) {
				return line.replace(': ElementRef', ': ElementRef | undefined');
			}
			if (line.includes('inputRef.nativeElement')) {
				return line.replace(
					'inputRef.nativeElement',
					'inputRef?.nativeElement'
				);
			}
			return line;
		})
		.join('\n');

	if (component?.overwrites?.angular) {
		component.overwrites.angular.forEach((over) => {
			result = result.replace(over.pre, over.post);
		});
	}

	return result;
};

module.exports = () => {
	Components.forEach((component) => {
		const options = {
			files: `./output/angular/src/components/${component.name}/${component.name}.ts`,
			processor: (input) => changeFile(component, input)
		};

		try {
			Replace.sync(options);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	});
};
