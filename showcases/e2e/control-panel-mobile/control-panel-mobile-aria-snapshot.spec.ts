import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '05/control-panel-mobile';
test.describe('DBControlPanelMobile', () => {
	runAriaSnapshotTest({ path });
});
