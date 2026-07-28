import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const fixedHeight = 1800; // Set fixed height, because of issues with angulars `ngAfterContentInit`
const isSkipAxe = hasWebComponentSyntax(process.env.showcase);
test.describe('DBNavigationItem', () => {
	runAxeCoreTest({
		path: '05/navigation-item',
		fixedHeight,
		skipAxe: isSkipAxe
	});
	runAxeCoreTest({
		path: '05/navigation-item',
		color: lvl3,
		fixedHeight,
		skipAxe: isSkipAxe
	});
	runAxeCoreTest({
		path: '05/navigation-item',
		density: 'functional',
		fixedHeight,
		skipAxe: isSkipAxe
	});
});
