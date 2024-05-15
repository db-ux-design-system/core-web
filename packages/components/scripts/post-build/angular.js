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
		from: `export default class ${upperComponentName} {`,
		to: `export default class ${upperComponentName} implements ControlValueAccessor {
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
			from: `export default class ${upperComponentName} {\n`,
			to:
				`export default class ${upperComponentName} {\n` +
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

const getAttributePassing = (componentName) => `
ngAfterViewInit(): void {
\t\tconst element: HTMLElement | null = this.ref?.nativeElement;
\t\tconst parent = element?.closest('db-${componentName}');
\t\tif (element && parent) {
\t\t\tconst attributes = parent.attributes;
\t\t\tfor (let i = 0; i < attributes.length; i++) {
\t\t\t\tconst attr = attributes.item(i);
\t\t\t\tif (
\t\t\t\t\tattr &&
\t\t\t\t\t(attr.name.startsWith('data-') ||
\t\t\t\t\t\tattr.name.startsWith('aria-'))
\t\t\t\t) {
\t\t\t\t\telement.setAttribute(attr.name, attr.value);
\t\t\t\t\tparent.removeAttribute(attr.name);
\t\t\t\t}
\t\t\t}
\t\t}
\t}`;

module.exports = (tmp) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	// Activate vue specific event handling
	Replace.sync({
		files: `../../${outputFolder}/angular/src/utils/form-components.ts`,
		from: /\/\/ ANGULAR:/g,
		to: ''
	});
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
			},
			{
				from: 'mouseOver',
				to: 'mouseover'
			},
			{
				from: 'mouseEnter',
				to: 'mouseenter'
			},
			{
				from: 'mouseLeave',
				to: 'mouseleave'
			},
			{
				from: 'mouseMove',
				to: 'mousemove'
			},
			{
				from: '@ViewChild("ref") ref!: ElementRef | undefined;',
				to:
					'@ViewChild("ref") ref!: ElementRef | undefined;' +
					getAttributePassing(component.name)
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
