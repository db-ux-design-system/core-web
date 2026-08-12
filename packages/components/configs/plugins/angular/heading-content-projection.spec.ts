import { describe, expect, it } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const {
	transformHeadingContentProjection
} = require('./heading-content-projection.cjs');

const slotBlock = `
      <ng-content select="[start-slot]"> </ng-content>
      <ng-content></ng-content>
      <ng-content select="[end-slot]"> </ng-content>
`;

const generatedHeading = `@Component({
  template: \`<ng-container>${['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
		.map((tag) => `<${tag} #_ref>${slotBlock}</${tag}>`)
		.join('')}</ng-container>\`,
})
export class DBHeading {}`;

describe('transformHeadingContentProjection', () => {
	it('declares the projected content once and reuses it per heading root', () => {
		const result = transformHeadingContentProjection(
			generatedHeading,
			'DBHeading'
		);

		expect(result.match(/<ng-template #headingContent>/g)).toHaveLength(1);
		expect(result.match(/<ng-content><\/ng-content>/g)).toHaveLength(1);
		expect(
			result.match(/\*ngTemplateOutlet="headingContent"/g)
		).toHaveLength(6);
	});

	it('does not affect other Angular components', () => {
		expect(
			transformHeadingContentProjection(generatedHeading, 'DBButton')
		).toBe(generatedHeading);
	});

	it('fails when the generated slot structure changes', () => {
		expect(() =>
			transformHeadingContentProjection(
				generatedHeading.replace(slotBlock, ''),
				'DBHeading'
			)
		).toThrow('The generated DBHeading format may have changed.');
	});
});
