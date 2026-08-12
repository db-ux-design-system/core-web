import { describe, expect, it } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { transformHeadingAs } = require('./heading-as.cjs');

const generatedHeading = `@Component({
  template: \`<ng-container>
    @if(as() !== 'h2' && as() !== 'h3' && as() !== 'h4' && as() !== 'h5' && as() !== 'h6'){}
    @if(as() === 'h2'){} @if(as() === 'h3'){} @if(as() === 'h4'){}
    @if(as() === 'h5'){} @if(as() === 'h6'){}
  </ng-container> \`,
  styles: \`:host { display: contents; }\`,
})
export class DBHeading {
  protected readonly cls = cls;
  as: InputSignal<DBHeadingProps["as"]> = input<DBHeadingProps["as"]>();
}`;

describe('transformHeadingAs', () => {
	it('uses a non-reserved proxy and preserves the required Angular input', () => {
		const result = transformHeadingAs(generatedHeading, 'DBHeading');

		expect(result.match(/headingAs\(\)/g)).toHaveLength(10);
		expect(result).toContain('protected readonly headingAs = () => {');
		expect(result).toContain('return this.as();');
		expect(result).toContain('return undefined;');
		expect(result).toContain(
			'as: InputSignal<DBHeadingProps["as"]> = input.required<DBHeadingProps["as"]>();'
		);
		expect(result).not.toContain('= input<DBHeadingProps["as"]>();');
	});

	it('does not affect other Angular components', () => {
		expect(transformHeadingAs(generatedHeading, 'DBButton')).toBe(
			generatedHeading
		);
	});

	it.each([
		generatedHeading.replace(" @if(as() === 'h6'){}", ''),
		generatedHeading.replace('  protected readonly cls = cls;\n', ''),
		generatedHeading.replace(
			'as: InputSignal<DBHeadingProps["as"]>',
			'headingLevel: InputSignal<DBHeadingProps["as"]>'
		)
	])('fails when the generated DBHeading shape changes', (code) => {
		expect(() => transformHeadingAs(code, 'DBHeading')).toThrow(
			'The generated DBHeading format may have changed.'
		);
	});
});
