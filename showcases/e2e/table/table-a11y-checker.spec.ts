import { test } from '@playwright/test';
import { hasWebComponentSyntax, runA11yCheckerTest } from '../default.ts';

// The a11y checker will clash with the wrapping custom element from angular and stencil
const skipChecker = hasWebComponentSyntax(process.env.showcase);
test.describe('DBTable', () => {
	runA11yCheckerTest({ path: '04/table', skipChecker });
});
