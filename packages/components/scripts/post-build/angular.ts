import { replaceInFileSync } from 'replace-in-file';

import { readFileSync } from 'node:fs';

import components, { Overwrite } from './components.js';

import { runReplacements, transformToUpperComponentName } from '../utils';

/**
 * This replacement inserts everything used for form elements to work with reactive forms and ngModel in angular
 */
const setControlValueAccessorReplacements = (
	replacements: Overwrite[],
	upperComponentName: string,
	valueAccessor: 'checked' | 'value' | string,
	valueAccessorRequired?: boolean
) => {
	// for native angular support (e.g. reactive forms) we have to implement
	// the ControlValueAccessor interface with all impacts :/

	replacements.push({
		from: '} from "@angular/core";',
		to:
			`Renderer2, model } from "@angular/core";\n` +
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
		from: `implements AfterViewInit`,
		to: `implements AfterViewInit, ControlValueAccessor`
	});
	replacements.push({
		from: `constructor(`,
		to: `constructor(private renderer: Renderer2,`
	});
	// We need `model` to be able to read/write to a signal
	replacements.push({
		from: `${valueAccessor} = input`,
		to: `${valueAccessor} = model`
	});
	replacements.push({
		from: `disabled = input`,
		to: `disabled = model`
	});

	// insert custom interface functions before ngOnInit
	// TODO update attribute by config if necessary (e.g. for checked attribute?)
	replacements.push({
		from: 'ngOnInit()',
		to: `
		writeValue(value: any) {
			${valueAccessorRequired ? 'if(value){' : ''}
		  this.${valueAccessor}.set(${valueAccessor === 'checked' ? '!!' : ''}value);

		  if (this._ref()?.nativeElement) {
			 this.renderer.setProperty(this._ref()?.nativeElement, '${valueAccessor}', ${
					valueAccessor === 'checked' ? '!!' : ''
				}value);
		  }
			${valueAccessorRequired ? '}' : ''}
		}

		propagateChange(_: any) {}

		registerOnChange(onChange: any) {
		  this.propagateChange = onChange;
		}

		registerOnTouched(onTouched: any) {
		}

		setDisabledState(disabled: boolean) {
		  this.disabled.set(disabled);
		}

		ngOnInit()`
	});
};

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const upperComponentName = `DB${transformToUpperComponentName(
			component.name
		)}`;
		const file = `../../${outputFolder}/angular/src/components/${componentName}/${componentName}.ts`;
		const indexFile = `../../${outputFolder}/angular/src/components/${componentName}/index.ts`;

		replaceInFileSync({
			files: indexFile,
			from: 'default as ',
			to: ''
		});

		const replacements: Overwrite[] = [
			// TODO: We don't need this after Angular drops support for v17 in may 2025
			{
				from: /allowSignalWrites: true,/g,
				to: ''
			}
		];

		if (
			readFileSync(file)
				.toString()
				.includes('this.initialized.set(true);')
		) {
			// TODO: Solve this in mitosis by splitting onInit and onMount into ngOnInit and ngAfterViewInit
			replacements.push({
				from: 'this.initialized.set(true);',
				to: ''
			});
			replacements.push({
				from: 'ngAfterViewInit() {',
				to: 'ngAfterViewInit() {\nthis.initialized.set(true);\n'
			});
		}

		if (component.config?.angular?.controlValueAccessor) {
			setControlValueAccessorReplacements(
				replacements,
				upperComponentName,
				component.config.angular.controlValueAccessor, // value / checked / ...
				component.config.angular.controlValueAccessorRequired // Radio needs a value
			);
		}

		try {
			runReplacements(replacements, component, 'angular', file);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
