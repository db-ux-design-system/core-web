import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBHeader', () => {
	runAxeCoreTest({
		path: '05/header',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '05/header',
		color: lvl3,
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '05/header',
		density: 'functional',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
});
