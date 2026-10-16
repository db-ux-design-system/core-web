import { test } from '@playwright/test';
import { hasWebComponentSyntax, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// https://stackoverflow.com/questions/78129019/can-you-have-an-li-in-a-autonomous-custom-element-with-the-parent-ul-not
// Angular and Stencil wrap each item in a custom element (e.g. <db-breadcrumb-item>),
// which breaks the native <ol> > <li> relationship axe checks for.
// TODO: Let's investigate whether we could prevent this deactivation later on
const isSkipAxe = hasWebComponentSyntax(process.env.showcase);

test.describe('DBBreadcrumb', () => {
	runAxeCoreTest({ path: '05/breadcrumb', skipAxe: isSkipAxe });
	runAxeCoreTest({ path: '05/breadcrumb', color: lvl3, skipAxe: isSkipAxe });
	runAxeCoreTest({
		path: '05/breadcrumb',
		density: 'functional',
		skipAxe: isSkipAxe
	});
});
