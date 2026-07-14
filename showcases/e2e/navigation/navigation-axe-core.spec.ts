import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const isSkipAxe = hasWebComponentSyntax(process.env.showcase);
test.describe('DBNavigation', () => {
	runAxeCoreTest({ path: '05/navigation', skipAxe: isSkipAxe });
	runAxeCoreTest({ path: '05/navigation', color: lvl3, skipAxe: isSkipAxe });
	runAxeCoreTest({ path: '05/navigation', density: 'functional', skipAxe: isSkipAxe });
});
