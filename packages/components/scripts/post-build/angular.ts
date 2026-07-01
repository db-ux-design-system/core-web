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
			`HostBinding, Renderer2 } from "@angular/core";\n` +
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

	// Ensure hidden attribute works despite :host { display: contents }
	replacements.push({
		from: '`:host { display: contents; }`',
		to: '`:host { display: contents; } :host([hidden]) { display: none !important; }`'
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

		/** Reflect Signal Forms hidden state to the host element */
		@HostBinding('hidden') get isHidden() { return this.hidden(); }

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
				// Inject value alias and bidirectional sync effects after duck-typing fields.
				// Uses a _syncing flag to prevent circular effect triggering between value↔values.
				replacements.push({
					from: 'errors = input<any>(undefined);',
					to: `errors = input<any>(undefined);

		/** Signal Forms alias — maps to 'values' for FormValueControl duck-typing */
		value = model<any>();

		/** @internal Flag to prevent circular sync between value↔values */
		private _syncing = false;

		/** @internal Sync value → values (Signal Forms writes to value) */
		private _syncValueToValues = effect(() => {
			const v = this.value();
			if (this._syncing) return;
			this._syncing = true;
			if (v !== undefined) {
				this.values.set(Array.isArray(v) ? v : v ? [v] : []);
			}
			this._syncing = false;
		});

		/** @internal Sync values → value (CVA/user interaction writes to values) */
		private _syncValuesToValue = effect(() => {
			const vals = this.values();
			if (this._syncing) return;
			this._syncing = true;
			const current = vals && vals.length > 0 ? vals : undefined;
			this.value.set(current);
			this._syncing = false;
		});`
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

			// Ensure 'signal' is imported (defensive — Mitosis currently always includes it)
			if (
				!fileContent2.includes('signal,') &&
				!fileContent2.includes('signal }') &&
				!fileContent2.includes(', signal')
			) {
				replaceInFileSync({
					files: file,
					from: `Renderer2 } from "@angular/core";`,
					to: `Renderer2, signal } from "@angular/core";`
				});
			}

			if (fileContent2.includes('handleValidation()')) {
				// Declare _validMessage and _valid signals needed by the validation bridge
				replaceInFileSync({
					files: file,
					from: `errors = input<any>(undefined);`,
					to: `errors = input<any>(undefined);

		/** @internal Signal Forms validation state */
		_validMessage = signal<string | undefined>('');
		/** @internal Signal Forms validation state */
		_valid = signal<string | undefined>(undefined);`
				});

				// Connect _valid to aria-invalid and data-custom-validity in the template
				// For regular form components (input, textarea, select, checkbox, switch)
				replaceInFileSync({
					files: file,
					from: `[attr.aria-invalid]="validation() === 'invalid'"`,
					to: `[attr.aria-invalid]="(_valid() ?? validation()) === 'invalid'"`
				});
				replaceInFileSync({
					files: file,
					from: `[attr.data-custom-validity]="validation()"`,
					to: `[attr.data-custom-validity]="_valid() ?? validation()"`
				});

				// Override hasValidState to also consider Signal Forms _valid state
				replaceInFileSync({
					files: file,
					from: /hasValidState\(\)\s*\{\s*\n\s*return !!\(this\.validMessage\(\) \?\? this\.validation\(\) === "valid"\);\s*\n\s*\}/,
					to: `hasValidState() {
    return !!(this.validMessage() || this._valid() === 'valid' || this.validation() === "valid");
  }`
				});

				// For custom-select which uses _validity signal: bridge _valid into _validity
				// (must run after the main handleValidation bridge injection below)
				const hasValidity = fileContent2.includes('_validity');

				replaceInFileSync({
					files: file,
					from: /handleValidation\(\)\s*\{\s*\n/,
					to: `handleValidation() {
    // Signal Forms validation bridge: errors InputSignal has priority
    const signalFormErrors = this.errors();
    if (Array.isArray(signalFormErrors) && signalFormErrors.length > 0) {
      this._descByIds.set(this._invalidMessageId());
      this._invalidMessage.set(
        signalFormErrors[0].message ?? DEFAULT_INVALID_MESSAGE
      );
      this._validMessage.set('');
      this._valid.set('invalid');
      if (hasVoiceOver()) {
        this._voiceOverFallback.set(this._invalidMessage());
        void delay(() => this._voiceOverFallback.set(""), 1000);
      }
      return; // Signal Forms errors take priority
    } else if (Array.isArray(signalFormErrors) && signalFormErrors.length === 0 && this._valid() === 'invalid') {
      // Signal Forms provided errors=[] after previous invalid state → now valid
      this._valid.set('valid');
      this._validMessage.set(DEFAULT_VALID_MESSAGE);
      this._invalidMessage.set('');
    }
`
				});

				// For custom-select: also set _validity in the injected bridge code
				if (hasValidity) {
					replaceInFileSync({
						files: file,
						from: `return; // Signal Forms errors take priority`,
						to: `this._validity.set('invalid');
      return; // Signal Forms errors take priority`
					});
					replaceInFileSync({
						files: file,
						from: `// Signal Forms provided errors=[] after previous invalid state → now valid
      this._valid.set('valid');
      this._validMessage.set(DEFAULT_VALID_MESSAGE);
      this._invalidMessage.set('');`,
						to: `// Signal Forms provided errors=[] after previous invalid state → now valid
      this._valid.set('valid');
      this._validity.set('valid');
      this._validMessage.set(DEFAULT_VALID_MESSAGE);
      this._invalidMessage.set('');`
					});
				}

				// Verify the validation bridge was injected successfully
				const verifyContent = readFileSync(file, 'utf-8');
				if (
					!verifyContent.includes('// Signal Forms validation bridge')
				) {
					console.warn(
						`⚠️  Signal Forms validation bridge was NOT injected into ${componentName}. ` +
							`The handleValidation() format may have changed.`
					);
				}
			}

			// Signal Forms type compatibility: widen 'pattern' input to accept RegExp[] from FieldState
			// Angular Signal Forms binds FieldState.pattern (readonly RegExp[]) to the host's pattern input
			if (
				fileContent2.includes(
					`input<${upperComponentName}Props["pattern"]>`
				)
			) {
				replaceInFileSync({
					files: file,
					from: `pattern: InputSignal<${upperComponentName}Props["pattern"]> =\n    input<${upperComponentName}Props["pattern"]>()`,
					to: `pattern: InputSignal<${upperComponentName}Props["pattern"] | readonly RegExp[]> =\n    input<${upperComponentName}Props["pattern"] | readonly RegExp[]>()`
				});

				// Prevent Signal Forms empty RegExp[] from being rendered as native pattern attribute
				// Only pass string values or non-empty RegExp[] (joined as source) to [attr.pattern]
				// Uses a helper method since Angular templates don't support typeof/Array.isArray
				replaceInFileSync({
					files: file,
					from: `[attr.pattern]="pattern()"`,
					to: `[attr.pattern]="getPatternAttr()"`
				});

				// Inject helper method for pattern attribute resolution
				replaceInFileSync({
					files: file,
					from: /handleValidation\(\)\s*\{/,
					to: `getPatternAttr(): string | undefined {
    const p = this.pattern();
    if (typeof p === 'string') return p || undefined;
    if (Array.isArray(p) && p.length > 0) return p.map((r: RegExp) => r.source).join('|');
    return undefined;
  }
  handleValidation() {`
				});
			}
		}
	}
};
