import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '04/accordion-item';
test.describe('DBAccordionItem', () => {
	runAriaSnapshotTest({ path });
});
