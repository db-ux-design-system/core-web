/**
 * Angular Signal Forms Mitosis Plugin
 *
 * Injects all Signal Forms compatibility code into Angular CVA components:
 * - Duck-Typing fields (hidden, errors InputSignals)
 * - @HostBinding for hidden state reflection
 * - :host([hidden]) CSS rule
 * - Validation bridge in handleValidation()
 * - Pattern type widening for RegExp[] from FieldState
 * - Value alias + bidirectional sync for components using 'values' (e.g. DBCustomSelect)
 *
 * This plugin runs AFTER the standard Angular plugin so it can transform
 * the Mitosis-generated output. It does NOT depend on post-build/angular.ts.
 */

/**
 * Component configurations for Signal Forms support.
 * Maps component names to their Signal Forms requirements.
 */
const SIGNAL_FORMS_CONFIG = {
	DBInput: { valueAccessor: 'value', hasPattern: true },
	DBTextarea: { valueAccessor: 'value' },
	DBSelect: { valueAccessor: 'value' },
	DBCheckbox: { valueAccessor: 'checked' },
	DBSwitch: { valueAccessor: 'checked' },
	DBCustomSelect: { valueAccessor: 'values', valueAlias: true },
	// These have CVA but no handleValidation — only duck-typing fields
	DBRadio: { valueAccessor: 'value', skipValidationBridge: true },
	DBTabItem: { valueAccessor: 'checked', skipValidationBridge: true },
	DBCustomSelectListItem: {
		valueAccessor: 'checked',
		skipValidationBridge: true
	}
};
/**
 * Injects Signal Forms duck-typing fields and @HostBinding into a CVA component.
 */
function injectDuckTypingFields(code) {
	// Add HostBinding import if not present
	if (!code.includes('HostBinding')) {
		code = code.replace(
			'} from "@angular/core";',
			'HostBinding, } from "@angular/core";'
		);
	}

	// Add ValidationError import from @angular/forms/signals
	if (!code.includes('ValidationError')) {
		code = code.replace(
			/} from ['"]@angular\/forms\/signals['"];/,
			'ValidationError } from "@angular/forms/signals";'
		);
		// If no @angular/forms/signals import exists yet, add one after @angular/core
		if (!code.includes('ValidationError')) {
			code = code.replace(
				/(} from "@angular\/core";)/,
				'$1\nimport { ValidationError } from "@angular/forms/signals";'
			);
		}
	}

	// Inject hidden/errors inputs + @HostBinding before ngAfterViewInit
	// Find the first ngAfterViewInit() occurrence (the actual method definition)
	code = code.replace(
		/(\n\s*ngAfterViewInit\(\))/,
		`
		/** Signal Forms optional fields (Duck-Typing compatibility) */
		hidden = input<boolean>(false);
		errors = input<ValidationError[] | undefined>(undefined);

		/**
		 * Reflect Signal Forms hidden state to the host element.
		 * This intentionally intercepts Angular's native [hidden] binding —
		 * consumers using [hidden]="condition" will hide the component via
		 * :host([hidden]) { display: none !important }.
		 */
		@HostBinding('hidden') get isHidden() { return this.hidden(); }
$1`
	);

	// Add :host([hidden]) CSS rule
	code = code.replace(
		'`:host { display: contents; }`',
		'`:host { display: contents; } :host([hidden]) { display: none !important; }`'
	);

	return code;
}

/**
 * Injects the validation bridge into handleValidation().
 * This drives aria-invalid and validation UI from Signal Forms errors.
 */
function injectValidationBridge(code) {
	const hasValidity = code.includes('_validity');

	// Ensure 'signal' is imported
	if (
		!code.includes('signal,') &&
		!code.includes('signal }') &&
		!code.includes(', signal')
	) {
		code = code.replace(
			/(\w+),?\s*\} from "@angular\/core";/,
			'$1, signal, } from "@angular/core";'
		);
	}

	// Declare _validMessage and _valid signals after errors input
	code = code.replace(
		'errors = input<ValidationError[] | undefined>(undefined);',
		`errors = input<ValidationError[] | undefined>(undefined);

		/** @internal Signal Forms validation state */
		_validMessage = signal<string | undefined>('');
		/** @internal Signal Forms validation state */
		_valid = signal<string | undefined>(undefined);`
	);

	// Connect _valid to aria-invalid in the template
	const ariaInvalidFrom = `[attr.aria-invalid]="validation() === 'invalid'"`;
	const ariaInvalidTernaryFrom = `[attr.aria-invalid]="validation() === 'invalid' ? 'true' : undefined"`;
	const hasAriaInvalid = code.includes(ariaInvalidFrom);
	const hasAriaInvalidTernary = code.includes(ariaInvalidTernaryFrom);

	code = code.replace(
		ariaInvalidFrom,
		`[attr.aria-invalid]="validation() !== 'no-validation' && (_valid() ?? validation()) === 'invalid'"`
	);
	// Switch uses a different aria-invalid pattern (ternary with 'true'/undefined)
	code = code.replace(
		ariaInvalidTernaryFrom,
		`[attr.aria-invalid]="validation() !== 'no-validation' && (_valid() ?? validation()) === 'invalid' ? 'true' : undefined"`
	);

	// At least one aria-invalid pattern must have been found
	if (hasAriaInvalid || hasAriaInvalidTernary) {
		const replaced =
			code.includes('_valid() ?? validation()') &&
			code.includes('[attr.aria-invalid]');
		if (!replaced) {
			throw new Error(
				'Signal Forms: aria-invalid replacement failed. ' +
					'The template format may have changed.'
			);
		}
	}

	// Connect _valid to data-custom-validity
	const dataValidityFrom = `[attr.data-custom-validity]="validation()"`;
	const hasDataValidity = code.includes(dataValidityFrom);
	code = code.replace(
		dataValidityFrom,
		`[attr.data-custom-validity]="validation() === 'no-validation' ? 'no-validation' : (_valid() ?? validation())"`
	);
	if (
		hasDataValidity &&
		!code.includes(`'no-validation' : (_valid() ?? validation())`)
	) {
		throw new Error(
			'Signal Forms: data-custom-validity replacement failed. ' +
				'The template format may have changed.'
		);
	}

	// Override hasValidState to consider Signal Forms _valid state
	code = code.replace(
		/hasValidState\(\)\s*\{\s*\n\s*return !!\(this\.validMessage\(\) \?\? this\.validation\(\) === "valid"\);\s*\n\s*\}/,
		`hasValidState() {
    if (this.validation() === 'no-validation') return false;
    return !!(this.validMessage() || this._valid() === 'valid' || this.validation() === "valid");
  }`
	);

	// Inject the validation bridge at the beginning of handleValidation()
	code = code.replace(
		/handleValidation\(\)\s*\{\s*\n/,
		`handleValidation() {
    // validation="no-validation" suppresses ALL validation UI (Signal Forms + native)
    if (this.validation() === 'no-validation') {
      this._valid.set(undefined);${hasValidity ? '\n      this._validity.set(undefined);' : ''}
      this._invalidMessage.set('');
      this._validMessage.set('');
      this._descByIds.set(undefined);
      return;
    }

    // Signal Forms validation bridge: errors InputSignal has priority
    const signalFormErrors = this.errors();
    if (Array.isArray(signalFormErrors) && signalFormErrors.length > 0) {
      this._descByIds.set(this._invalidMessageId());
      this._invalidMessage.set(
        signalFormErrors[0].message ?? DEFAULT_INVALID_MESSAGE
      );
      this._validMessage.set('');
      this._valid.set('invalid');${hasValidity ? "\n      this._validity.set('invalid');" : ''}
      if (hasVoiceOver()) {
        this._voiceOverFallback.set(this._invalidMessage());
        void delay(() => this._voiceOverFallback.set(""), 1000);
      }
      return; // Signal Forms errors take priority
    } else if (Array.isArray(signalFormErrors) && signalFormErrors.length === 0 && this._valid() === 'invalid') {
      // Signal Forms provided errors=[] after previous invalid state → now valid
      this._valid.set('valid');${hasValidity ? "\n      this._validity.set('valid');" : ''}
      this._validMessage.set(DEFAULT_VALID_MESSAGE);
      this._invalidMessage.set('');
    }

    // If Signal Forms says "valid" but native validation disagrees, reset _valid
    // so native validation can take over via CSS :user-invalid selectors
    if (this._valid() === 'valid' && this._ref()?.nativeElement?.validity && !this._ref()?.nativeElement?.validity?.valid) {
      this._valid.set(undefined);${hasValidity ? '\n      this._validity.set(undefined);' : ''}
      this._validMessage.set('');
    }
`
	);

	return code;
}
/**
 * Widens the 'pattern' input to accept RegExp[] from Signal Forms FieldState
 * and adds a helper method to resolve the attribute value.
 */
function injectPatternWidening(code, componentName) {
	const propsType = `${componentName}Props["pattern"]`;

	if (!code.includes(`input<${propsType}>`)) {
		return code;
	}

	// Widen pattern input type
	code = code.replace(
		new RegExp(
			`pattern: InputSignal<${escapeRegExp(propsType)}> =\\n\\s*input<${escapeRegExp(propsType)}>\\(\\)`
		),
		`pattern: InputSignal<${propsType} | readonly RegExp[]> =\n    input<${propsType} | readonly RegExp[]>()`
	);

	// Replace template binding with helper method
	code = code.replace(
		'[attr.pattern]="pattern()"',
		'[attr.pattern]="getPatternAttr()"'
	);
	if (!code.includes('getPatternAttr()')) {
		throw new Error(
			`Signal Forms: [attr.pattern] replacement failed in ${componentName}. ` +
				'The template format may have changed.'
		);
	}

	// Inject helper method before handleValidation
	code = code.replace(
		/handleValidation\(\)\s*\{/,
		`getPatternAttr(): string | undefined {
    const p = this.pattern();
    if (typeof p === 'string') return p || undefined;
    if (Array.isArray(p) && p.length > 0) return p.map((r: RegExp) => r.source).join('|');
    return undefined;
  }
  handleValidation() {`
	);

	return code;
}

/**
 * Injects the value↔values bidirectional sync for components like DBCustomSelect
 * that use 'values' (array) internally but need a 'value' ModelSignal for Signal Forms.
 */
function injectValueAlias(code) {
	// Ensure 'linkedSignal' is imported
	if (
		!code.includes('linkedSignal,') &&
		!code.includes('linkedSignal }') &&
		!code.includes(', linkedSignal')
	) {
		code = code.replace(
			/(\w+),?\s*\} from "@angular\/core";/,
			'$1, linkedSignal, } from "@angular/core";'
		);
	}

	// Ensure 'effect' is imported (still needed for values→value sync)
	if (
		!code.includes('effect,') &&
		!code.includes('effect }') &&
		!code.includes(', effect')
	) {
		code = code.replace(
			/(\w+),?\s*\} from "@angular\/core";/,
			'$1, effect, } from "@angular/core";'
		);
	}

	// Inject value alias and sync effects after errors input
	code = code.replace(
		'errors = input<ValidationError[] | undefined>(undefined);',
		`errors = input<ValidationError[] | undefined>(undefined);

		/** Signal Forms alias — maps to 'values' for FormValueControl duck-typing */
		value = model<any>();

		/**
		 * @internal Tracks whether the last write originated from 'value' or 'values'.
		 * This prevents infinite ping-pong between the two effects.
		 * Convergence is additionally guaranteed by Angular's signal equality check
		 * (setting a signal to the same value does not trigger dependents).
		 */
		private _syncSource = linkedSignal<'value' | 'values' | 'none'>(() => 'none' as const);

		/** @internal Sync value → values (Signal Forms writes to value) */
		private _syncValueToValues = effect(() => {
			const v = this.value();
			if (this._syncSource() === 'values') {
				this._syncSource.set('none');
				return;
			}
			this._syncSource.set('value');
			if (v !== undefined) {
				this.values.set(Array.isArray(v) ? v : v ? [v] : []);
			}
		});

		/** @internal Sync values → value (CVA/user interaction writes to values) */
		private _syncValuesToValue = effect(() => {
			const vals = this.values();
			if (this._syncSource() === 'value') {
				this._syncSource.set('none');
				return;
			}
			this._syncSource.set('values');
			this.value.set(vals ?? []);
		});`
	);

	return code;
}

/** Escapes special regex characters in a string */
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code, json) => {
			const config = SIGNAL_FORMS_CONFIG[json.name];
			if (!config) return code;

			// 1. Inject duck-typing fields (hidden, errors, @HostBinding)
			code = injectDuckTypingFields(code);

			// 2. Value alias for components using 'values' (e.g. DBCustomSelect)
			if (config.valueAlias) {
				code = injectValueAlias(code);
			}

			// 3. Validation bridge (only for components with handleValidation)
			if (
				!config.skipValidationBridge &&
				code.includes('handleValidation()')
			) {
				code = injectValidationBridge(code);

				// Verify injection succeeded
				if (!code.includes('// Signal Forms validation bridge')) {
					throw new Error(
						`Signal Forms validation bridge was NOT injected into ${json.name}. ` +
							`The handleValidation() format may have changed. ` +
							`Please update the injection logic in configs/plugins/angular/signal-forms.cjs.`
					);
				}
			}

			// 4. Pattern type widening (for components with a 'pattern' input)
			if (config.hasPattern) {
				code = injectPatternWidening(code, json.name);
			}

			return code;
		}
	}
});
