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

/**
 * This replacement inserts everything used for form elements to work with reactive forms and ngModel in angular
 *
 * @param {*} replacements
 * @param {*} componentName
 * @param {*} valueAccessor 	'checked' | 'value' [adopt if needed]
 */
const setControlValueAccessorReplacements = (
	replacements,
	componentName,
	valueAccessor
) => {
	// for native angular support (e.g. reactive forms) we have to implement
	// the ControlValueAccessor interface with all impacts :/
	const upperComponentName = `DB${
		componentName.charAt(0).toUpperCase() + componentName.slice(1)
	}`;

	replacements.push({
		from: /\/\/ ANGULAR:/g,
		to: ''
	});

	replacements.push({
		from: '} from "@angular/core";',
		to:
			`, Renderer2 } from "@angular/core";\n` +
			`import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';\n`
	});

	// inserting provider
	replacements.push({
		from: '@Component({',
		to: `@Component({
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ${upperComponentName},
			multi: true
		}],	`
	});

	// implementing interface and constructor
	replacements.push({
		from: `export class ${upperComponentName} {`,
		to: `export class ${upperComponentName} implements ControlValueAccessor {
		constructor(private renderer: Renderer2) { }`
	});

	// insert custom interface functions before ngOnInit
	// TODO update attribute by config if necessary (e.g. for checked attribute?)
	replacements.push({
		from: 'ngOnInit()',
		to: `
		writeValue(value: any) {
		  this.${valueAccessor} = value;

		  if (this.component?.nativeElement) {
			 this.renderer.setProperty(this.component?.nativeElement, '${valueAccessor}', value);
		  }
		}

		propagateChange(_: any) {}

		registerOnChange(onChange: any) {
		  this.propagateChange = onChange;
		}

		registerOnTouched(onTouched: any) {
		 //this.onTouched = onTouched;
		}

		setDisabledState(disabled: boolean) {
		  this.disabled = disabled;
		}

		ngOnInit()`
	});
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

		const replacements = [];

		if (
			component.config &&
			component.config.angular &&
			component.config.angular.controlValueAccessor
		) {
			setControlValueAccessorReplacements(
				replacements,
				componentName,
				component.config.angular.controlValueAccessor // value / checked / ...
			);
		}

		try {
			Replace.sync(options);
			runReplacements(replacements, component, 'angular', file);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
