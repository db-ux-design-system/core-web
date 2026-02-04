import { test } from '@playwright/test';
import { getA11yTest } from '../default.ts';

test.describe('DBLoadingIndicator', () => {
	getA11yTest({ path: 'loading-indicator' });
});

