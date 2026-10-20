import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBFooter', () => {
	runAxeCoreTest({
		path: '01/footer',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '01/footer',
		color: lvl3,
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '01/footer',
		density: 'functional',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
});
