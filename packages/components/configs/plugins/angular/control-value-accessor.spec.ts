import { describe, expect, it } from 'vitest';

const {
	transformControlValueAccessor
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./control-value-accessor.cjs');

const generatedComponent = (
	className: string
) => `import { Component, input, } from "@angular/core";

@Component({
  selector: "db-example",
})
export class ${className} implements AfterViewInit, OnDestroy {
  constructor() {}

  ngAfterViewInit() {}
}`;

describe('transformControlValueAccessor', () => {
	it('adds the ControlValueAccessor to a value component', () => {
		const result = transformControlValueAccessor(
			generatedComponent('DBInput'),
			'DBInput'
		);

		expect(result).toContain('Renderer2, } from "@angular/core";');
		expect(result).toContain(
			'import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";'
		);
		expect(result).toContain('provide: NG_VALUE_ACCESSOR');
		expect(result).toContain('useExisting: DBInput');
		expect(result).toContain(
			'implements AfterViewInit, ControlValueAccessor, OnDestroy'
		);
		expect(result).toContain('constructor(private renderer: Renderer2,)');
		expect(result).toContain('this.value.set(value);');
		expect(result).toContain('registerOnChange(onChange: any)');
		expect(result).toContain('setDisabledState(disabled: boolean)');
	});

	it('coerces the value for checked components', () => {
		const result = transformControlValueAccessor(
			generatedComponent('DBCheckbox'),
			'DBCheckbox'
		);

		expect(result).toContain('this.checked.set(!!value);');
		expect(result).toContain(
			'this.renderer.setProperty(this._ref()?.nativeElement, "checked", !!value);'
		);
	});

	it('guards writeValue for DBRadio, which needs a value', () => {
		const result = transformControlValueAccessor(
			generatedComponent('DBRadio'),
			'DBRadio'
		);

		expect(result).toContain('if (value) {');
	});

	it('leaves components without a form config untouched', () => {
		const code = generatedComponent('DBButton');

		expect(transformControlValueAccessor(code, 'DBButton')).toBe(code);
	});

	it('leaves DBTabItem untouched, which never had a ControlValueAccessor', () => {
		const code = generatedComponent('DBTabItem');

		expect(transformControlValueAccessor(code, 'DBTabItem')).toBe(code);
	});

	it('fails when the generated Angular shape changes', () => {
		expect(() =>
			transformControlValueAccessor('export class DBInput {}', 'DBInput')
		).toThrow('The generated Angular format may have changed.');
	});
});
