import { describe, expect, it } from 'vitest';

const {
	transformRouterLink
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./router-link.cjs');

const generatedLink = `import { Component, input, } from "@angular/core";

@Component({
  template: \`<a
    [attr.href]="href()"
    >Content</a> \`,
})
export class DBLink {
  constructor() {}
}`;

describe('transformRouterLink', () => {
	it('adds RouterLink behavior to the generated Angular DBLink', () => {
		const result = transformRouterLink(generatedLink, 'DBLink');

		expect(result).toContain('inject, } from "@angular/core";');
		expect(result).toContain(
			'import { RouterLink } from "@angular/router";'
		);
		expect(result).toContain('[attr.href]="routerLink?.urlTree ?? href()"');
		expect(result).toContain('(click)="handleClick($event)"');
		expect(result).toContain(
			'readonly routerLink = inject(RouterLink, { optional: true });'
		);
	});

	it('does not affect other Angular components', () => {
		expect(transformRouterLink(generatedLink, 'DBButton')).toBe(
			generatedLink
		);
	});

	it('fails when the generated DBLink shape changes', () => {
		expect(() =>
			transformRouterLink('export class DBLink {}', 'DBLink')
		).toThrow('The generated DBLink format may have changed.');
	});
});
