import { test } from '@playwright/test';
import { runA11yCheckerTest } from '../default.ts';

test.describe('Static Paragraph components', () => {
	runA11yCheckerTest({ path: '04/paragraph' });
});
