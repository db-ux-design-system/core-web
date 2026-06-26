import { replaceInFileSync } from 'replace-in-file';

import { readFileSync, writeFileSync } from 'node:fs';

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

	// inserting provider (CVA always registered for backward compat with Reactive/Template-Driven Forms)
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
	// NOTE: Mitosis already generates form-related fields (value/checked/disabled) as model() signals.
	// No input → model conversion needed. For checked components (valueAccessor === 'checked'),
	// the 'value' field intentionally remains as InputSignal to prevent Signal Forms
	// from misidentifying the component as FormValueControl.
	// Signal Forms uses Duck-Typing: a 'value' ModelSignal → FormValueControl,
	// a 'checked' ModelSignal → FormCheckboxControl.

	// insert custom interface functions before ngOnInit
	// TODO update attribute by config if necessary (e.g. for checked attribute?)
	replacements.push({
		from: 'ngAfterViewInit()',
		to: `
		/** @legacy CVA - will be removed in a future major version */
		writeValue(value: any) {
			${valueAccessorRequired ? 'if(value){' : ''}
		  this.${valueAccessor}.set(${valueAccessor === 'checked' ? '!!' : ''}value);

		  if (this._ref()?.nativeElement) {
			 this.renderer.setProperty(this._ref()?.nativeElement, '${valueAccessor}', ${valueAccessor === 'checked' ? '!!' : ''}value);
		  }
			${valueAccessorRequired ? '}' : ''}
		}

		/** @legacy CVA - will be removed in a future major version */
		propagateChange(_: any) {}

		/** @legacy CVA - will be removed in a future major version */
		registerOnChange(onChange: any) {
		  this.propagateChange = onChange;
		}

		/** @legacy CVA - will be removed in a future major version */
		registerOnTouched(onTouched: any) {
		}

		/** @legacy CVA - will be removed in a future major version */
		setDisabledState(disabled: boolean) {
		  this.disabled.set(disabled);
		}

		/** Signal Forms optional fields (Duck-Typing compatibility) */
		hidden = input<boolean>(false);
		errors = input<any>(undefined);

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
			`../../${outputFolder}/angular/src/components/${componentName}/${directive.name}.directive.ts`,
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

		const replacements: Overwrite[] = [];

		if (component.config?.angular?.controlValueAccessor) {
			setControlValueAccessorReplacements(
				replacements,
				upperComponentName,
				component.config.angular.controlValueAccessor, // value / checked / ...
				component.config.angular.controlValueAccessorRequired // Radio needs a value
			);

			// Signal Forms value alias for components using 'values' (e.g. DBCustomSelect)
			if (component.config.angular.signalFormsValueAlias) {
				// Inject value alias and sync effect after duck-typing fields
				replacements.push({
					from: 'errors = input<any>(undefined);',
					to:
						`errors = input<any>(undefined);\n\n` +
						`\t\t/** Signal Forms alias — maps to 'values' for FormValueControl duck-typing */\n` +
						`\t\tvalue = model<string | undefined>();\n\n` +
						`\t\tprivate _syncValueToValues = effect(() => {\n` +
						`\t\t\tconst v = this.value();\n` +
						`\t\t\tif (v !== undefined) {\n` +
						`\t\t\t\tthis.values.set(v ? [v] : []);\n` +
						`\t\t\t}\n` +
						`\t\t});`
				});
			}
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

		// Ensure 'effect' is imported for signalFormsValueAlias components (avoid duplicate if Mitosis already imported it)
		if (component.config?.angular?.signalFormsValueAlias) {
			const fileContent = readFileSync(file, 'utf-8');
			if (
				!fileContent.includes('effect,') &&
				!fileContent.includes('effect }') &&
				!fileContent.includes(', effect')
			) {
				replaceInFileSync({
					files: file,
					from: `Renderer2 } from "@angular/core";`,
					to: `Renderer2, effect } from "@angular/core";`
				});
			}
		}

		// Signal Forms validation bridge: inject at beginning of handleValidation()
		// Only applies to CVA components that have handleValidation (not tab-item, custom-select-list-item, radio)
		if (component.config?.angular?.controlValueAccessor) {
			const fileContent2 = readFileSync(file, 'utf-8');
			if (fileContent2.includes('handleValidation()')) {
				replaceInFileSync({
					files: file,
					from: /handleValidation\(\)\s*\{\s*\n/,
					to:
						`handleValidation() {\n` +
						`    // Signal Forms validation bridge: errors InputSignal has priority\n` +
						`    const signalFormErrors = this.errors();\n` +
						`    if (Array.isArray(signalFormErrors) && signalFormErrors.length > 0) {\n` +
						`      this._descByIds.set(this._invalidMessageId());\n` +
						`      this._invalidMessage.set(\n` +
						`        signalFormErrors[0].message || DEFAULT_INVALID_MESSAGE\n` +
						`      );\n` +
						`      if (hasVoiceOver()) {\n` +
						`        this._voiceOverFallback.set(this._invalidMessage());\n` +
						`        void delay(() => this._voiceOverFallback.set(""), 1000);\n` +
						`      }\n` +
						`      return; // Signal Forms errors take priority\n` +
						`    }\n`
				});
			}
		}
	}
};
