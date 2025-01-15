import { replaceInFileSync } from 'replace-in-file';

import { writeFileSync } from 'node:fs';

import components, { Overwrite } from './components.js';

import { runReplacements, transformToUpperComponentName } from '../utils';

const changeFile = (input: string) => {
	return input
		.split('\n')
		.map((line) => {
			if (line.includes('export default')) {
				return line.replace('export default', 'export');
			}

			if (line.includes(': ElementRef')) {
				return line.replace(': ElementRef', ': ElementRef | undefined');
			}

			// We need to remove "nativeElement" in template part, because it only exists in ts
			if (
				line.includes('ref.nativeElement') &&
				(line.includes('{{') || line.includes('}}'))
			) {
				return line.replace('.nativeElement', '');
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
 */
const setControlValueAccessorReplacements = (
	replacements: Overwrite[],
	upperComponentName: string,
	valueAccessor: 'checked' | 'value' | string
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

		  if (this._ref?.nativeElement) {
			 this.renderer.setProperty(this._ref?.nativeElement, '${valueAccessor}', value);
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

const getAttributePassing = (componentName: string) => `
ngAfterViewInit(): void {
\t\tconst element: HTMLElement | null = this.ref?.nativeElement;
\t\tenableCustomElementAttributePassing(element,'db-${componentName}')
\t}`;

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	// Activate vue specific event handling
	replaceInFileSync({
		files: `../../${outputFolder}/angular/src/utils/form-components.ts`,
		from: /\/\/ ANGULAR:/g,
		to: ''
	});
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
				from: 'ngOnChanges',
				to: 'ngAfterContentChecked'
			},
			{
				from: '@ViewChild("ref") ref!: ElementRef | undefined;',
				to:
					'@ViewChild("ref") ref!: ElementRef | undefined;' +
					getAttributePassing(component.name)
			},
			{
				from: '} from "../../utils"',
				to: ', enableCustomElementAttributePassing } from "../../utils"'
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
			replaceInFileSync({
				files: file,
				processor: (input: string) => changeFile(input)
			});
			runReplacements(replacements, component, 'angular', file);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
