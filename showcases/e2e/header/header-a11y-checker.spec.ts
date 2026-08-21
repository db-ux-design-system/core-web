import { test } from '@playwright/test';
import { hasWebComponentSyntax, runA11yCheckerTest } from '../default.ts';

test.describe('DBHeader', () => {
	// TODO: We skip this for now until mitosis output is correct
	runA11yCheckerTest({
		path: '05/header',
		skipChecker: hasWebComponentSyntax(process.env.showcase)
	});
});
