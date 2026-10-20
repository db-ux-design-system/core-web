import { test } from '@playwright/test';
import { isStencil, runAriaSnapshotTest } from '../default.ts';

const path = '01/footer';
test.describe('DBFooter', () => {
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	runAriaSnapshotTest({ path });
});
