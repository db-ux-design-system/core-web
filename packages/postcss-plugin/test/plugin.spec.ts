import postcss from 'postcss';
import { describe, expect, it } from 'vitest';
import { dbUxFlatten } from '../src';

const run = async (input: string, opts = {}) => {
	const result = await postcss([dbUxFlatten(opts)]).process(input, {
		from: undefined
	});
	return result.css;
};

describe('postcss-flatten-db-variables', () => {
	describe('var() resolution', () => {
		it('should resolve var() from @property initial-value', async () => {
			const input = `
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}
:root {
	--db-neutral-0: #0d0e10;
	--db-my-color: var(--db-neutral-0);
}`;
			const output = await run(input);
			expect(output).toContain('--db-my-color: #0d0e10');
		});

		it('should resolve var() recursively', async () => {
			const input = `
@property --db-neutral-origin-light-default {
	syntax: "<color>";
	initial-value: #232529;
	inherits: true;
}
:root {
	--db-neutral-origin-light-default: #232529;
	--db-alias: var(--db-neutral-origin-light-default);
	--db-deep: var(--db-alias);
}`;
			const output = await run(input);
			expect(output).toContain('--db-deep: #232529');
		});

		it('should avoid circular var() references', async () => {
			const input = `
:root {
	--a: var(--b);
	--b: var(--a);
	--c: var(--a);
}`;
			const output = await run(input);
			expect(output).toContain('var(');
		});

		it('should handle values without var/calc/color-mix unchanged', async () => {
			const input = `
.foo {
	color: red;
	margin: 1rem;
}`;
			const output = await run(input);
			expect(output).toContain('color: red');
			expect(output).toContain('margin: 1rem');
		});
	});

	describe('light-dark()', () => {
		it('should keep light-dark() but resolve var() inside', async () => {
			const input = `
@property --db-neutral-origin-light-default {
	syntax: "<color>";
	initial-value: #232529;
	inherits: true;
}
@property --db-neutral-origin-dark-default {
	syntax: "<color>";
	initial-value: #f0f0f0;
	inherits: true;
}
:root {
	--db-neutral-origin-light-default: #232529;
	--db-neutral-origin-dark-default: #f0f0f0;
	--db-neutral-origin-default: light-dark(
		var(--db-neutral-origin-light-default),
		var(--db-neutral-origin-dark-default)
	);
}`;
			const output = await run(input);
			expect(output).toContain('light-dark(');
			expect(output).toContain('#232529');
			expect(output).toContain('#f0f0f0');
			expect(output).not.toContain(
				'var(--db-neutral-origin-light-default)'
			);
			expect(output).not.toContain(
				'var(--db-neutral-origin-dark-default)'
			);
		});

		it('should resolve var() inside color-mix() inside light-dark()', async () => {
			const input = `
@property --db-neutral-6 {
	syntax: "<color>";
	initial-value: #5a5e67;
	inherits: true;
}
@property --db-neutral-9 {
	syntax: "<color>";
	initial-value: #a6abb5;
	inherits: true;
}
:root {
	--db-neutral-6: #5a5e67;
	--db-neutral-9: #a6abb5;
	--db-neutral-bg-basic-transparent-semi-default: light-dark(
		color-mix(in srgb, transparent 92%, var(--db-neutral-6)),
		color-mix(in srgb, transparent 84%, var(--db-neutral-9))
	);
}`;
			const output = await run(input);
			expect(output).toContain('light-dark(');
			expect(output).not.toContain('var(--db-neutral-6)');
			expect(output).not.toContain('var(--db-neutral-9)');
		});

		it('should collapse light-dark(x, x) to just x when both args are identical', async () => {
			const input = `
:root {
	--db-my-color: light-dark(
		transparent,
		transparent
	);
}`;
			const output = await run(input);
			expect(output).not.toContain('light-dark(');
			expect(output).toContain('--db-my-color: transparent');
		});

		it('should collapse light-dark() after resolving vars to same value', async () => {
			const input = `
@property --db-neutral-origin-light-default {
	syntax: "<color>";
	initial-value: #232529;
	inherits: true;
}
@property --db-neutral-origin-dark-default {
	syntax: "<color>";
	initial-value: #232529;
	inherits: true;
}
:root {
	--db-neutral-origin-light-default: #232529;
	--db-neutral-origin-dark-default: #232529;
	--db-neutral-origin-default: light-dark(
		var(--db-neutral-origin-light-default),
		var(--db-neutral-origin-dark-default)
	);
}`;
			const output = await run(input);
			expect(output).not.toContain('light-dark(');
			expect(output).toContain('--db-neutral-origin-default: #232529');
		});

		it('should collapse light-dark() with identical color-mix results', async () => {
			const input = `
@property --db-neutral-6 {
	syntax: "<color>";
	initial-value: #5a5e67;
	inherits: true;
}
:root {
	--db-neutral-6: #5a5e67;
	--db-bg-transparent: light-dark(
		color-mix(in srgb, transparent 100%, var(--db-neutral-6)),
		color-mix(in srgb, transparent 100%, var(--db-neutral-6))
	);
}`;
			const output = await run(input);
			expect(output).not.toContain('light-dark(');
			expect(output).toContain('--db-bg-transparent: transparent');
		});

		it('should keep light-dark() when args differ', async () => {
			const input = `
:root {
	--db-my-color: light-dark(#fff, #000);
}`;
			const output = await run(input);
			expect(output).toContain('light-dark(#fff, #000)');
		});

		it('should resolve palette vars inside light-dark + color-mix', async () => {
			const input = `
@property --db-brand-6 {
	syntax: "<color>";
	initial-value: #514ec7;
	inherits: true;
}
@property --db-brand-9 {
	syntax: "<color>";
	initial-value: #a6a5e7;
	inherits: true;
}
:root {
	--db-brand-6: #514ec7;
	--db-brand-9: #a6a5e7;
	--db-brand-bg-basic-transparent-full-default: light-dark(
		color-mix(in srgb, transparent 100%, var(--db-brand-6)),
		color-mix(in srgb, transparent 100%, var(--db-brand-9))
	);
}`;
			const output = await run(input);
			// Both color-mix results are transparent, so light-dark collapses
			expect(output).not.toContain('var(--db-brand-6)');
			expect(output).not.toContain('var(--db-brand-9)');
			expect(output).not.toContain('color-mix(');
			expect(output).toContain(
				'--db-brand-bg-basic-transparent-full-default: transparent'
			);
		});
	});

	describe('color-mix()', () => {
		it('should evaluate color-mix() with resolved hex colors', async () => {
			const input = `
:root {
	--my-color: color-mix(in srgb, transparent 100%, #5a5e67);
}`;
			const output = await run(input);
			expect(output).not.toContain('color-mix(');
			expect(output).toContain('transparent');
		});

		it('should evaluate color-mix() with partial transparency', async () => {
			const input = `
:root {
	--my-color: color-mix(in srgb, #ff0000 50%, #0000ff 50%);
}`;
			const output = await run(input);
			expect(output).not.toContain('color-mix(');
			expect(output).toMatch(/#[0-9a-f]{6}/i);
		});

		it('should not evaluate color-mix() with unresolved var()', async () => {
			const input = `
:root {
	--my-color: color-mix(in srgb, transparent 92%, var(--unknown));
}`;
			const output = await run(input);
			expect(output).toContain('color-mix(');
		});
	});

	describe('calc()', () => {
		it('should evaluate simple calc() expressions', async () => {
			const input = `
.foo {
	width: calc(2 * 0.75rem);
}`;
			const output = await run(input);
			expect(output).toContain('1.5rem');
			expect(output).not.toContain('calc(');
		});

		it('should not evaluate calc() with unresolved var()', async () => {
			const input = `
.foo {
	width: calc(100% - var(--unknown));
}`;
			const output = await run(input);
			expect(output).toContain('calc(');
			expect(output).toContain('var(--unknown)');
		});

		it('should resolve var() inside calc() then evaluate', async () => {
			const input = `
@property --db-spacing-fixed-sm {
	syntax: "<length>";
	initial-value: 0.75rem;
	inherits: true;
}
:root {
	--db-spacing-fixed-sm: 0.75rem;
}
.foo {
	margin-block-start: calc(2 * var(--db-spacing-fixed-sm));
}`;
			const output = await run(input);
			expect(output).toContain('margin-block-start: 1.5rem');
			expect(output).not.toContain('calc(');
			expect(output).not.toContain('var(');
		});
	});

	describe('@property and cleanup', () => {
		it('should remove @property rules by default', async () => {
			const input = `
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}
:root {
	--db-neutral-0: #0d0e10;
}`;
			const output = await run(input);
			expect(output).not.toContain('@property');
		});

		it('should keep @property when var() is still referenced in output', async () => {
			const input = `
@property --db-border-radius-full {
	syntax: "<length>";
	initial-value: 9999px;
	inherits: true;
}
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}
:root {
	--db-border-radius-full: 9999px;
	--db-neutral-0: #0d0e10;
}
.bla {
	border-radius: var(--db-border-radius-full);
	color: var(--db-neutral-0);
}`;
			// --db-border-radius-full is static and fully resolved, so its @property is removed
			// --db-neutral-0 is static and fully resolved, so its @property is removed
			const output = await run(input);
			expect(output).toContain('border-radius: 9999px');
			expect(output).toContain('color: #0d0e10');
			expect(output).not.toContain('@property');
		});

		it('should keep @property for dynamic vars still referenced via var()', async () => {
			const input = `
@property --db-spacing-fixed-sm {
	syntax: "<length>";
	initial-value: 0.75rem;
	inherits: true;
}
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}
:root {
	--db-spacing-fixed-sm: 0.75rem;
	--db-neutral-0: #0d0e10;
}
[data-density=functional] {
	--db-spacing-fixed-sm: 0.5rem;
}
.foo {
	padding: var(--db-spacing-fixed-sm);
	color: var(--db-neutral-0);
}`;
			const output = await run(input);
			// --db-spacing-fixed-sm is dynamic → var() kept → @property kept
			expect(output).toContain('var(--db-spacing-fixed-sm)');
			expect(output).toContain('@property --db-spacing-fixed-sm');
			// --db-neutral-0 is static → fully resolved → @property removed
			expect(output).toContain('color: #0d0e10');
			expect(output).not.toContain('@property --db-neutral-0');
		});

		it('should keep @property rules when removeAtProperty is false', async () => {
			const input = `
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}
:root {
	--db-neutral-0: #0d0e10;
}`;
			const output = await run(input, { removeAtProperty: false });
			expect(output).toContain('@property');
		});

		it('should remove unreferenced @property-sourced declarations', async () => {
			const input = `
@property --db-neutral-origin-light-default {
	syntax: "<color>";
	initial-value: #232529;
	inherits: true;
}
:root {
	--db-neutral-origin-light-default: #232529;
	--db-result: var(--db-neutral-origin-light-default);
}`;
			const output = await run(input);
			expect(output).not.toContain('--db-neutral-origin-light-default');
			expect(output).toContain('--db-result: #232529');
		});

		it('should remove @property-sourced declarations when all var() are resolved', async () => {
			const input = `
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}
:root {
	--db-neutral-0: #0d0e10;
}
.foo {
	color: var(--db-neutral-0);
}`;
			const output = await run(input);
			expect(output).toContain('color: #0d0e10');
			expect(output).not.toContain('--db-neutral-0');
		});

		it('should remove empty @layer left after resolving all variables', async () => {
			const input = `
@layer db-ux, db-theme;
@layer db-ux {
	@property --db-neutral-0 {
		syntax: "<color>";
		initial-value: #0d0e10;
		inherits: true;
	}
	:root {
		--db-neutral-0: #0d0e10;
	}
}
.foo {
	color: var(--db-neutral-0);
}`;
			const output = await run(input);
			expect(output).toContain('color: #0d0e10');
			// The @layer db-ux {} block should be gone (empty after cleanup)
			expect(output).not.toContain('@layer db-ux {');
			// The @layer order declaration should still be there
			expect(output).toContain('@layer db-ux, db-theme;');
		});

		it('should remove nested empty containers (empty :root inside empty @layer)', async () => {
			const input = `
@layer variables {
	@property --db-color-a {
		syntax: "<color>";
		initial-value: #aaa;
		inherits: true;
	}
	:root {
		--db-color-a: #aaa;
	}
}
.foo {
	color: var(--db-color-a);
}`;
			const output = await run(input);
			expect(output).toContain('color: #aaa');
			expect(output).not.toContain('@layer variables');
			expect(output).not.toContain(':root');
		});

		it('should keep @layer when it still has content after cleanup', async () => {
			const input = `
@layer db-ux {
	@property --db-neutral-0 {
		syntax: "<color>";
		initial-value: #0d0e10;
		inherits: true;
	}
	:root {
		--db-neutral-0: #0d0e10;
	}
	.bar {
		margin: 1rem;
	}
}
.foo {
	color: var(--db-neutral-0);
}`;
			const output = await run(input);
			expect(output).toContain('color: #0d0e10');
			// @layer still has .bar inside, so it stays
			expect(output).toContain('@layer db-ux');
			expect(output).toContain('margin: 1rem');
		});

		it('should keep declarations when removeResolved is false', async () => {
			const input = `
@property --db-neutral-0 {
	syntax: "<color>";
	initial-value: #0d0e10;
	inherits: true;
}
:root {
	--db-neutral-0: #0d0e10;
}`;
			const output = await run(input, { removeResolved: false });
			expect(output).toContain('--db-neutral-0: #0d0e10');
		});
	});

	describe('typography variables', () => {
		it('should resolve typography var() from @property', async () => {
			const input = `
@property --db-typography-functional-mobile-headline-xs {
	syntax: "*";
	initial-value:
		bolder 0.875rem/1.1428571428571428 "OpenSans Head",
		helvetica,
		arial,
		sans-serif;
	inherits: true;
}
:root {
	--db-typography-functional-mobile-headline-xs:
		bolder 0.875rem/1.1428571428571428 "OpenSans Head",
		helvetica,
		arial,
		sans-serif;
	--db-type-headline-xs: var(--db-typography-functional-mobile-headline-xs);
}`;
			const output = await run(input);
			expect(output).toContain('--db-type-headline-xs:');
			expect(output).toContain('bolder 0.875rem');
			expect(output).toContain('OpenSans Head');
			expect(output).not.toContain(
				'var(--db-typography-functional-mobile-headline-xs)'
			);
		});

		it('should resolve multiple typography vars in one rule', async () => {
			const input = `
@property --db-typography-functional-mobile-headline-xs {
	syntax: "*";
	initial-value: bolder 0.875rem/1.14 "OpenSans Head", helvetica, arial, sans-serif;
	inherits: true;
}
@property --db-typography-functional-tablet-headline-xs {
	syntax: "*";
	initial-value: bolder 1rem/1.25 "OpenSans Head", helvetica, arial, sans-serif;
	inherits: true;
}
:root {
	--db-typography-functional-mobile-headline-xs: bolder 0.875rem/1.14 "OpenSans Head", helvetica, arial, sans-serif;
	--db-typography-functional-tablet-headline-xs: bolder 1rem/1.25 "OpenSans Head", helvetica, arial, sans-serif;
	--db-type-headline-xs: var(--db-typography-functional-mobile-headline-xs);
}
@media (min-width: 768px) {
	:root {
		--db-type-headline-xs: var(--db-typography-functional-tablet-headline-xs);
	}
}`;
			const output = await run(input);
			expect(output).toContain('bolder 0.875rem');
			expect(output).toContain('bolder 1rem');
			expect(output).not.toContain('var(--db-typography');
		});
	});

	describe('spacing variables', () => {
		it('should resolve spacing var() from @property', async () => {
			const input = `
@property --db-spacing-fixed-regular-md {
	syntax: "<length>";
	initial-value: 1rem;
	inherits: true;
}
:root {
	--db-spacing-fixed-regular-md: 1rem;
}
.foo {
	padding: var(--db-spacing-fixed-regular-md);
}`;
			const output = await run(input);
			expect(output).toContain('padding: 1rem');
			expect(output).not.toContain('var(');
		});

		it('should resolve spacing var() inside calc()', async () => {
			const input = `
@property --db-spacing-fixed-sm {
	syntax: "<length>";
	initial-value: 0.75rem;
	inherits: true;
}
:root {
	--db-spacing-fixed-sm: 0.75rem;
}
.foo {
	margin-block-start: calc(2 * var(--db-spacing-fixed-sm));
	inset-block-start: calc(-1 * var(--db-spacing-fixed-sm));
}`;
			const output = await run(input);
			expect(output).toContain('margin-block-start: 1.5rem');
			expect(output).toContain('inset-block-start: -0.75rem');
			expect(output).not.toContain('calc(');
		});
	});

	describe('sizing variables', () => {
		it('should resolve sizing var() from @property', async () => {
			const input = `
@property --db-sizing-regular-md {
	syntax: "<length>";
	initial-value: 2.5rem;
	inherits: true;
}
:root {
	--db-sizing-regular-md: 2.5rem;
}
.foo {
	block-size: var(--db-sizing-regular-md);
}`;
			const output = await run(input);
			expect(output).toContain('block-size: 2.5rem');
			expect(output).not.toContain('var(');
		});
	});

	describe('border variables', () => {
		it('should resolve border-width var() from @property', async () => {
			const input = `
@property --db-border-width-3xs {
	syntax: "<length>";
	initial-value: 0.0625rem;
	inherits: true;
}
:root {
	--db-border-width-3xs: 0.0625rem;
}
.foo {
	border: var(--db-border-width-3xs) solid red;
}`;
			const output = await run(input);
			expect(output).toContain('border: 0.0625rem solid red');
			expect(output).not.toContain('var(');
		});

		it('should resolve border-radius var() from @property', async () => {
			const input = `
@property --db-border-radius-sm {
	syntax: "<length>";
	initial-value: 0.5rem;
	inherits: true;
}
:root {
	--db-border-radius-sm: 0.5rem;
}
.foo {
	border-radius: var(--db-border-radius-sm);
}`;
			const output = await run(input);
			expect(output).toContain('border-radius: 0.5rem');
			expect(output).not.toContain('var(');
		});
	});

	describe('transition variables', () => {
		it('should resolve transition var() from @property', async () => {
			const input = `
@property --db-transition-duration-medium {
	syntax: "*";
	initial-value: 0.3s;
	inherits: true;
}
@property --db-transition-timing-functional {
	syntax: "*";
	initial-value: cubic-bezier(0.15, 0, 0.45, 1);
	inherits: true;
}
:root {
	--db-transition-duration-medium: 0.3s;
	--db-transition-timing-functional: cubic-bezier(0.15, 0, 0.45, 1);
}
.foo {
	transition: all var(--db-transition-duration-medium) var(--db-transition-timing-functional);
}`;
			const output = await run(input);
			expect(output).toContain(
				'transition: all 0.3s cubic-bezier(0.15, 0, 0.45, 1)'
			);
			expect(output).not.toContain('var(');
		});

		it('should resolve straight transition shorthand', async () => {
			const input = `
@property --db-transition-straight-functional {
	syntax: "*";
	initial-value: 0.3s cubic-bezier(0.15, 0, 0.45, 1);
	inherits: true;
}
:root {
	--db-transition-straight-functional: 0.3s cubic-bezier(0.15, 0, 0.45, 1);
}
.foo {
	transition: opacity var(--db-transition-straight-functional);
}`;
			const output = await run(input);
			expect(output).toContain(
				'transition: opacity 0.3s cubic-bezier(0.15, 0, 0.45, 1)'
			);
			expect(output).not.toContain('var(');
		});
	});

	describe('opacity variables', () => {
		it('should resolve opacity var() from @property', async () => {
			const input = `
@property --db-opacity-md {
	syntax: "<number>";
	initial-value: 0.4;
	inherits: true;
}
:root {
	--db-opacity-md: 0.4;
}
.foo {
	opacity: var(--db-opacity-md);
}`;
			const output = await run(input);
			expect(output).toContain('opacity: 0.4');
			expect(output).not.toContain('var(');
		});
	});

	describe('elevation variables', () => {
		it('should resolve elevation var() from @property', async () => {
			const input = `
@property --db-elevation-sm {
	syntax: "*";
	initial-value: 0 0 1px -1px #0003, 0 0 4px 1px #0000001f, 0 0 2px #00000024;
	inherits: true;
}
:root {
	--db-elevation-sm: 0 0 1px -1px #0003, 0 0 4px 1px #0000001f, 0 0 2px #00000024;
}
.foo {
	box-shadow: var(--db-elevation-sm);
}`;
			const output = await run(input);
			expect(output).toContain('box-shadow: 0 0 1px -1px #0003');
			expect(output).not.toContain('var(');
		});
	});

	describe('font-family variables', () => {
		it('should resolve font-family var() from @property', async () => {
			const input = `
@property --db-font-family-sans {
	syntax: "*";
	initial-value: "OpenSans", helvetica, arial, sans-serif;
	inherits: true;
}
:root {
	--db-font-family-sans: "OpenSans", helvetica, arial, sans-serif;
}
.foo {
	font-family: var(--db-font-family-sans);
}`;
			const output = await run(input);
			expect(output).toContain(
				'font-family: "OpenSans", helvetica, arial, sans-serif'
			);
			expect(output).not.toContain('var(');
		});
	});

	describe('dynamic variables', () => {
		it('should NOT resolve var() if the variable is re-declared in a non-:root selector', async () => {
			const input = `
@property --db-spacing-fixed-sm {
	syntax: "<length>";
	initial-value: 0.75rem;
	inherits: true;
}
:root {
	--db-spacing-fixed-sm: 0.75rem;
}
[data-density=functional] {
	--db-spacing-fixed-sm: 0.5rem;
}
.foo {
	padding: var(--db-spacing-fixed-sm);
}`;
			const output = await run(input);
			// --db-spacing-fixed-sm is dynamic (re-declared in [data-density]), so keep var()
			expect(output).toContain('var(--db-spacing-fixed-sm)');
		});

		it('should NOT resolve var() if the variable is re-declared in @media :root', async () => {
			const input = `
@property --db-type-headline-xs {
	syntax: "*";
	initial-value: bolder 0.875rem/1.14 "OpenSans Head";
	inherits: true;
}
:root {
	--db-type-headline-xs: bolder 0.875rem/1.14 "OpenSans Head";
}
@media (min-width: 768px) {
	:root {
		--db-type-headline-xs: bolder 1rem/1.25 "OpenSans Head";
	}
}
.foo {
	font: var(--db-type-headline-xs);
}`;
			const output = await run(input);
			expect(output).toContain('var(--db-type-headline-xs)');
		});

		it('should still resolve static vars used alongside dynamic ones', async () => {
			const input = `
@property --db-neutral-origin-light-default {
	syntax: "<color>";
	initial-value: #232529;
	inherits: true;
}
@property --db-neutral-origin-dark-default {
	syntax: "<color>";
	initial-value: #232529;
	inherits: true;
}
@property --db-spacing-fixed-sm {
	syntax: "<length>";
	initial-value: 0.75rem;
	inherits: true;
}
:root {
	--db-neutral-origin-light-default: #232529;
	--db-neutral-origin-dark-default: #232529;
	--db-spacing-fixed-sm: 0.75rem;
	--db-neutral-origin-default: light-dark(
		var(--db-neutral-origin-light-default),
		var(--db-neutral-origin-dark-default)
	);
}
[data-density=functional] {
	--db-spacing-fixed-sm: 0.5rem;
}
.foo {
	padding: var(--db-spacing-fixed-sm);
}`;
			const output = await run(input);
			// Static color vars resolved, and both sides are identical → collapsed
			expect(output).not.toContain('light-dark(');
			expect(output).toContain('--db-neutral-origin-default: #232529');
			expect(output).not.toContain(
				'var(--db-neutral-origin-light-default)'
			);
			// Dynamic spacing var stays
			expect(output).toContain('var(--db-spacing-fixed-sm)');
		});

		it('should not remove dynamic variable declarations', async () => {
			const input = `
@property --db-spacing-fixed-sm {
	syntax: "<length>";
	initial-value: 0.75rem;
	inherits: true;
}
:root {
	--db-spacing-fixed-sm: 0.75rem;
}
[data-density=functional] {
	--db-spacing-fixed-sm: 0.5rem;
}`;
			const output = await run(input);
			expect(output).toContain('--db-spacing-fixed-sm: 0.75rem');
			expect(output).toContain('--db-spacing-fixed-sm: 0.5rem');
		});

		it('should NOT resolve adaptive vars by default (prefix-based)', async () => {
			const input = `
:host {
	--db-adaptive-on-bg-basic-emphasis-60-default: var(--db-neutral-on-bg-basic-emphasis-60-default);
}
.foo {
	border-color: var(--db-adaptive-on-bg-basic-emphasis-60-default);
}`;
			const output = await run(input);
			expect(output).toContain(
				'var(--db-adaptive-on-bg-basic-emphasis-60-default)'
			);
		});

		it('should NOT resolve adaptive vars even when only in :host', async () => {
			const input = `
@property --db-neutral-on-bg-basic-emphasis-60-default {
	syntax: "<color>";
	initial-value: #c3c7cd;
	inherits: true;
}
:host {
	--db-neutral-on-bg-basic-emphasis-60-default: #c3c7cd;
	--db-adaptive-on-bg-basic-emphasis-60-default: var(--db-neutral-on-bg-basic-emphasis-60-default);
}
.foo {
	color: var(--db-adaptive-on-bg-basic-emphasis-60-default);
}`;
			const output = await run(input);
			// adaptive var stays as var() in usage
			expect(output).toContain(
				'color: var(--db-adaptive-on-bg-basic-emphasis-60-default)'
			);
			// but the adaptive declaration itself gets its inner var resolved
			expect(output).toContain(
				'--db-adaptive-on-bg-basic-emphasis-60-default: #c3c7cd'
			);
		});

		it('should allow custom dynamicPrefixes', async () => {
			const input = `
:root {
	--my-custom-dynamic: red;
}
.foo {
	color: var(--my-custom-dynamic);
}`;
			const output = await run(input, {
				dynamicPrefixes: ['--my-custom-']
			});
			expect(output).toContain('var(--my-custom-dynamic)');
		});
	});

	describe('@layer priority', () => {
		it('should use higher-priority layer value when same var is in multiple layers', async () => {
			const input = `
@layer db-ux, db-theme;
@layer db-ux {
	@property --db-brand-origin-base {
		syntax: "<color>";
		initial-value: #514ec7;
		inherits: true;
	}
	:root {
		--db-brand-origin-base: #514ec7;
	}
}
@layer db-theme {
	@property --db-brand-origin-base {
		syntax: "<color>";
		initial-value: #ec0016;
		inherits: true;
	}
	:root {
		--db-brand-origin-base: #ec0016;
	}
}
.foo {
	color: var(--db-brand-origin-base);
}`;
			const output = await run(input);
			// db-theme has higher priority, so #ec0016 wins
			expect(output).toContain('color: #ec0016');
			expect(output).not.toContain('#514ec7');
		});

		it('should respect layer order even when lower-priority layer appears later in CSS', async () => {
			const input = `
@layer db-ux, db-theme;
@layer db-theme {
	:root {
		--db-brand-6: #ec0016;
	}
}
@layer db-ux {
	:root {
		--db-brand-6: #514ec7;
	}
}
.foo {
	color: var(--db-brand-6);
}`;
			const output = await run(input);
			// db-theme wins despite db-ux appearing later in source
			expect(output).toContain('color: #ec0016');
		});

		it('should let unlayered CSS win over all layers', async () => {
			const input = `
@layer db-ux, db-theme;
@layer db-theme {
	:root {
		--db-my-var: red;
	}
}
:root {
	--db-my-var: blue;
}
.foo {
	color: var(--db-my-var);
}`;
			const output = await run(input);
			expect(output).toContain('color: blue');
		});
		it('should resolve nested var() with fallback and inline the value', async () => {
			const input = `
@property --db-icon-default-font-family {
	syntax: "*";
	initial-value: "db-default", icon-font-fallback;
	inherits: false;
}
:root {
	--db-icon-default-font-family: "db-default", icon-font-fallback;
}
.icon {
	font-family: var(--db-icon-font-family, var(--db-icon-default-font-family, "db-ux-default", "icon-font-fallback")) !important;
}`;
			const output = await run(input);
			// Inner var resolved, outer var kept (unknown) with resolved fallback
			expect(output).toContain(
				'var(--db-icon-font-family, "db-default", icon-font-fallback)'
			);
		});

		it('should resolve nested var() fallback when outer var is unknown', async () => {
			const input = `
@property --db-icon-default-font-family {
	syntax: "*";
	initial-value: "db-default", icon-font-fallback;
	inherits: false;
}
.icon {
	font-family: var(--db-icon-font-family, var(--db-icon-default-font-family)) !important;
}`;
			const output = await run(input);
			// --db-icon-font-family is unknown, so keep outer var with resolved fallback
			expect(output).toContain(
				'var(--db-icon-font-family, "db-default", icon-font-fallback)'
			);
		});

		it('should resolve outer var() when it is known, ignoring fallback', async () => {
			const input = `
@property --db-icon-font-family {
	syntax: "*";
	initial-value: "my-icons";
	inherits: true;
}
.icon {
	font-family: var(--db-icon-font-family, var(--db-icon-default-font-family)) !important;
}`;
			const output = await run(input);
			expect(output).toContain('font-family: "my-icons" !important');
		});
	});

	describe('icon variables', () => {
		it('should resolve icon weight and font-size vars', async () => {
			const input = `
@property --db-base-icon-weight-regular-desktop-body-md {
	syntax: "<number>";
	initial-value: 24;
	inherits: true;
}
@property --db-base-icon-font-size-regular-desktop-body-md {
	syntax: "<length>";
	initial-value: 1.5rem;
	inherits: true;
}
:root {
	--db-base-icon-weight-regular-desktop-body-md: 24;
	--db-base-icon-font-size-regular-desktop-body-md: 1.5rem;
}
.icon {
	font-weight: var(--db-base-icon-weight-regular-desktop-body-md);
	font-size: var(--db-base-icon-font-size-regular-desktop-body-md);
}`;
			const output = await run(input);
			expect(output).toContain('font-weight: 24');
			expect(output).toContain('font-size: 1.5rem');
			expect(output).not.toContain('var(');
		});
	});
});
