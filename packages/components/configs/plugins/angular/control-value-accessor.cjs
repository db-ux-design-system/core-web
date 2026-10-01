/**
 * Angular ControlValueAccessor Mitosis Plugin
 *
 * Generates everything a form component needs to work with reactive forms and
 * ngModel:
 *
 * - the NG_VALUE_ACCESSOR provider
 * - the `Renderer2` injection and the ControlValueAccessor interface clause
 * - `writeValue`, `registerOnChange`, `registerOnTouched`, `propagateChange`,
 *   `propagateTouched` and `setDisabledState`
 *
 * This used to live in `scripts/post-build/angular.ts`, which is deprecated.
 * The members are part of the public Angular surface: `select.lite.tsx` calls
 * `this.writeValue?.(...)` and `src/utils/form-components.ts` calls
 * `propagateChange`, so the names must not change.
 *
 * Runs before `signal-forms.cjs`, which adds the Signal Forms layer on top.
 */
const { FORM_COMPONENTS } = require('./form-components.cjs');

/**
 * Adds `Renderer2` to the @angular/core import and pulls in @angular/forms.
 * The trailing comma matters: `signal-forms.cjs` appends to the same anchor
 * afterwards and would otherwise produce `Renderer2 HostBinding`.
 */
const injectImports = (code) =>
	code.replace(
		'} from "@angular/core";',
		'Renderer2, } from "@angular/core";\n' +
			'import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";\n'
	);

/**
 * Registers the component as a value accessor. Always registered, for backward
 * compatibility with reactive and template-driven forms.
 */
const injectProvider = (code, componentName) =>
	code.replace(
		'@Component({',
		`@Component({
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: ${componentName},
		multi: true
	}],`
	);

const injectInterface = (code) =>
	code
		.replace(
			'implements AfterViewInit',
			'implements AfterViewInit, ControlValueAccessor'
		)
		.replace('constructor(', 'constructor(private renderer: Renderer2,');

/**
 * NOTE: Mitosis already generates the form fields (value/checked/disabled) as
 * model() signals, so no input to model conversion is needed here. For checked
 * components the "value" field intentionally stays an InputSignal, otherwise
 * Signal Forms would duck-type the component as a FormValueControl.
 */
const injectMembers = (code, { valueAccessor, valueAccessorRequired }) => {
	const coerce = valueAccessor === 'checked' ? '!!' : '';
	const guardStart = valueAccessorRequired ? 'if (value) {' : '';
	const guardEnd = valueAccessorRequired ? '}' : '';

	return code.replace(
		'ngAfterViewInit()',
		`
		/** @legacy CVA - will be removed in a future major version */
		writeValue(value: any) {
			${guardStart}
			this.${valueAccessor}.set(${coerce}value);

			if (this._ref()?.nativeElement) {
				this.renderer.setProperty(this._ref()?.nativeElement, "${valueAccessor}", ${coerce}value);
			}
			${guardEnd}
		}

		/** @legacy CVA - will be removed in a future major version */
		propagateChange(_: any) {}

		/** @legacy CVA - will be removed in a future major version */
		registerOnChange(onChange: any) {
			this.propagateChange = onChange;
		}

		/** @legacy CVA - will be removed in a future major version */
		registerOnTouched(onTouched: any) {
			this.propagateTouched = onTouched;
		}

		/** @legacy CVA - will be removed in a future major version */
		propagateTouched() {}

		/** @legacy CVA - will be removed in a future major version */
		setDisabledState(disabled: boolean) {
			this.disabled.set(disabled);
		}

		ngAfterViewInit()`
	);
};

/**
 * Generates the ControlValueAccessor for a configured form component and
 * returns every other component unchanged.
 *
 * @param code - the generated Angular component
 * @param componentName - the Mitosis component name, e.g. DBInput
 */
const transformControlValueAccessor = (code, componentName) => {
	const config = FORM_COMPONENTS[componentName];
	if (!config || config.controlValueAccessor === false) return code;

	const anchors = [
		'} from "@angular/core";',
		'@Component({',
		'implements AfterViewInit',
		'constructor(',
		'ngAfterViewInit()'
	];

	for (const anchor of anchors) {
		if (!code.includes(anchor)) {
			throw new Error(
				`Angular ControlValueAccessor: could not find ${JSON.stringify(anchor)} in ${componentName}. ` +
					'The generated Angular format may have changed.'
			);
		}
	}

	code = injectImports(code);
	code = injectProvider(code, componentName);
	code = injectInterface(code);
	return injectMembers(code, config);
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	code: {
		post: (code, json) => transformControlValueAccessor(code, json.name)
	}
});

module.exports.transformControlValueAccessor = transformControlValueAccessor;
