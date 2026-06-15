import { test } from '@playwright/test';
import { runAriaSnapshotTest } from '../default.ts';

const path = '01/control-panel-mobile';
test.describe('DBControlPanelMobile', () => {
	runAriaSnapshotTest({ path });
});
