import { test } from '@playwright/test';
import { isStencil, runA11yCheckerTest } from '../default.ts';

// TODO: We skip this for now until mitosis output is correct
const isSkipChecker = isStencil(process.env.showcase);

test.describe('DBTabs', () => {
	runA11yCheckerTest({
		path: '04/tabs',
		skipChecker: isSkipChecker
	});
});
