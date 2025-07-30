import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBHeader', () => {
	runAxeCoreTest({
		path: '01/header',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '01/header',
		color: lvl3,
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '01/header',
		density: 'functional',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
});
