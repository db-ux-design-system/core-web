import { replaceInFileSync } from 'replace-in-file';

import { writeFileSync } from 'node:fs';

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
			`Renderer2 } from "@angular/core";\n` +
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
		from: 'ngAfterViewInit()',
		to: `
		writeValue(value: any) {
			${valueAccessorRequired ? 'if(value){' : ''}
		  this.${valueAccessor}.set(${valueAccessor === 'checked' ? '!!' : ''}value);

		  if (this._ref()?.nativeElement) {
			 this.renderer.setProperty(this._ref()?.nativeElement, '${valueAccessor}', ${valueAccessor === 'checked' ? '!!' : ''}value);
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

		ngAfterViewInit()`
	});
};

/**
 * It's not possible to use <ng-content> multiple times in a component.
 * In Angular, you have to use a directive for this...
 * This is a workaround to replace it in the file.
 */
const setDirectiveReplacements = (
	replacements: Overwrite[],
	outputFolder: string,
	componentName: string,
	upperComponentName: string,
	directives: { name: string; ngContentName?: string }[]
) => {
	for (const directive of directives) {
		// Add ng-content multiple times to overwrite all
		for (let i = 0; i < 4; i++) {
			replacements.push({
				from: `<ng-content${directive.ngContentName ? ` select="[${directive.ngContentName}]"` : ''}>`,
				to: `<ng-content *ngTemplateOutlet="db${directive.name}">`
			});
		}

		replacements.push({
			from: `export class ${upperComponentName} implements AfterViewInit, OnDestroy {\n`,
			to:
				`export class ${upperComponentName} implements AfterViewInit, OnDestroy {\n` +
				`\t@ContentChild(${directive.name}Directive, { read: TemplateRef }) db${directive.name}: any;\n`
		});

		replacements.push({
			from: '@Component({',
			to:
				`import { ${directive.name}Directive } from './${directive.name}.directive';\n\n` +
				'@Component({'
		});

		writeFileSync(
			`../../output/angular/src/components/${componentName}/${directive.name}.directive.ts`,
			'/* Angular cannot handle multiple slots with the same name, we need to use Directives for this. */\n' +
				"import { Directive } from '@angular/core';" +
				`
@Directive({
\tselector: '[db${directive.name}]',
\tstandalone: true
})
export class ${directive.name}Directive {}
`
		);
	}

	replacements.push({
		from: '} from "@angular/core";',
		to: 'ContentChild, TemplateRef } from  "@angular/core";'
	});

	const directiveExports = directives
		.map(
			(directive) =>
				`export * from './components/${componentName}/${directive.name}.directive';`
		)
		.join('\n');
	replaceInFileSync({
		files: `../../${outputFolder}/angular/src/index.ts`,
		from: `export * from './components/${componentName}';`,
		to: `export * from './components/${componentName}';\n${directiveExports}`
	});
};

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;
		const file = `../../${outputFolder}/angular/src/components/${componentName}/${componentName}.ts`;
		const indexFile = `../../${outputFolder}/angular/src/components/${componentName}/index.ts`;

		replaceInFileSync({
			files: indexFile,
			from: 'default as ',
			to: ''
		});

		const replacements: Overwrite[] = [
			{
				from: /allowSignalWrites: true,/g,
				to: ''
			}
		];

		if (component.config?.angular?.controlValueAccessor) {
			setControlValueAccessorReplacements(
				replacements,
				upperComponentName,
				component.config.angular.controlValueAccessor, // value / checked / ...
				component.config.angular.controlValueAccessorRequired // Radio needs a value
			);
		}

		if (
			component.config?.angular?.directives &&
			component.config.angular.directives.length > 0
		) {
			setDirectiveReplacements(
				replacements,
				outputFolder,
				componentName,
				upperComponentName,
				component.config.angular.directives
			);
		}

		try {
			runReplacements(replacements, component, 'angular', file);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
