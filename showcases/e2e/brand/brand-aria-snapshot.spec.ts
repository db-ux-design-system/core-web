import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/control-panel-brand';
test.describe('DBControlPanelBrand', () => {
	runAriaSnapshotTest({ path });
});
