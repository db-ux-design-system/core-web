import { describe, expect, it } from 'vitest';

const {
	transformDialogElementRef
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./dialog-element-ref.cjs');

const generatedDialog = `export class DBDialog implements AfterViewInit, OnDestroy {
  _ref = viewChild<ElementRef>("_ref");

  ngAfterViewInit() {
    const element: HTMLElement | null = this._ref()?.nativeElement;
  }
}`;

describe('transformDialogElementRef', () => {
	it('types the generated Angular DBDialog ref as HTMLDialogElement', () => {
		const result = transformDialogElementRef(generatedDialog, 'DBDialog');

		expect(result).toContain(
			'viewChild<ElementRef<HTMLDialogElement>>("_ref")'
		);
		expect(result).toContain(
			'const element: HTMLElement | null = this._ref()?.nativeElement ?? null;'
		);
	});

	it('does not affect other Angular components', () => {
		expect(transformDialogElementRef(generatedDialog, 'DBDrawer')).toBe(
			generatedDialog
		);
	});

	it('fails when the generated DBDialog shape changes', () => {
		expect(() =>
			transformDialogElementRef('export class DBDialog {}', 'DBDialog')
		).toThrow('The generated DBDialog format may have changed.');
	});
});
