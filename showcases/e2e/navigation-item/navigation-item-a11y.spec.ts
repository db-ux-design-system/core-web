import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest, hasWebComponentSyntax } from '../default.ts';

test.describe('DBNavigationItem', () => {
	// Set fixed height, because of issues with angulars `ngAfterContentInit`
	getA11yTest({
		path: '05/navigation-item',
		fixedHeight: 1800,
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
});
