const Replace = require('replace-in-file');
const FS = require('node:fs');
const { components } = require('./components');
const { runReplacements, transformToUpperComponentName } = require('../utils');

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
 * @param {*} upperComponentName
 * @param {*} valueAccessor 	'checked' | 'value' [adopt if needed]
 */
const setControlValueAccessorReplacements = (
	replacements,
	componentName,
	upperComponentName,
	valueAccessor
) => {
	// for native angular support (e.g. reactive forms) we have to implement
	// the ControlValueAccessor interface with all impacts :/

	replacements.push({
		from: /\/\/ ANGULAR:/g,
		to: ''
	});

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

		  if (this.ref?.nativeElement) {
			 this.renderer.setProperty(this.ref?.nativeElement, '${valueAccessor}', value);
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

/**
 * It's not possible to use <ng-content> multiple times in a component.
 * In Angular, you have to use a directive for this...
 * This is a workaround to replace it in the file.
 * @param replacements
 * @param outputFolder {string}
 * @param componentName {string}
 * @param upperComponentName {string}
 * @param directives {{name:string, ngContentName?:string}[]}
 */
const setDirectiveReplacements = (
	replacements,
	outputFolder,
	componentName,
	upperComponentName,
	directives
) => {
	for (const directive of directives) {
		// Add ng-content multiple times to overwrite all
		for (let i = 0; i < 4; i++) {
			replacements.push({
				from: `<ng-content${
					directive.ngContentName
						? ` select="[${directive.ngContentName}]"`
						: ''
				}>`,
				to: `<ng-content *ngTemplateOutlet="db${directive.name}">`
			});
		}

		replacements.push({
			from: `export class ${upperComponentName} {\n`,
			to:
				`export class ${upperComponentName} {\n` +
				`\t@ContentChild(${directive.name}Directive, { read: TemplateRef }) db${directive.name}: any;\n`
		});

		replacements.push({
			from: '@Component({',
			to:
				`import { ${directive.name}Directive } from './${directive.name}.directive';\n\n` +
				'@Component({'
		});

		FS.writeFileSync(
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
	Replace.sync({
		files: `../../${outputFolder}/angular/src/index.ts`,
		from: `export * from './components/${componentName}';`,
		to: `export * from './components/${componentName}';\n${directiveExports}`
	});
};

module.exports = (tmp) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;
		const file = `../../${outputFolder}/angular/src/components/${componentName}/${componentName}.ts`;
		const options = {
			files: file,
			processor: (input) => changeFile(component, input)
		};

		const replacements = [
			{
				from: 'attr.disabled',
				to: 'disabled'
			}
		];

		if (component.config?.angular?.initValues) {
			component.config?.angular?.initValues.forEach((init) => {
				replacements.push({
					from: `["${init.key}"];`,
					to: `["${init.key}"] = ${init.value === '' ? '""' : init.value};`
				});
			});
		}

		if (component.config?.angular?.controlValueAccessor) {
			setControlValueAccessorReplacements(
				replacements,
				componentName,
				upperComponentName,
				component.config.angular.controlValueAccessor // value / checked / ...
			);
		}

		if (component.config?.angular?.directives?.length > 0) {
			setDirectiveReplacements(
				replacements,
				outputFolder,
				componentName,
				upperComponentName,
				component.config.angular.directives
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
