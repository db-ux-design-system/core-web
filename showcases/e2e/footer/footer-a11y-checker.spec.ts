import { test } from '@playwright/test';
import { hasWebComponentSyntax, runA11yCheckerTest } from '../default.ts';

test.describe('DBFooter', () => {
	// TODO: We skip this for now until mitosis output is correct
	runA11yCheckerTest({
		path: '01/footer',
		skipChecker: hasWebComponentSyntax(process.env.showcase)
	});
});
