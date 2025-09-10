import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const skipAxe = hasWebComponentSyntax(process.env.showcase);
test.describe('DBNavigation', () => {
	runAxeCoreTest({ path: '05/navigation', skipAxe });
	runAxeCoreTest({ path: '05/navigation', color: lvl3, skipAxe });
	runAxeCoreTest({ path: '05/navigation', density: 'functional', skipAxe });
});
