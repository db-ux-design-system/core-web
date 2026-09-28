import { test } from '@playwright/test';
import { runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';
import { openDialog } from './index.ts';

test.describe('DBDialog', () => {
	runAxeCoreTest({ path: '01/dialog', preAxe: openDialog });
	runAxeCoreTest({ path: '01/dialog', color: lvl3, preAxe: openDialog });
	runAxeCoreTest({
		path: '01/dialog',
		density: 'functional',
		preAxe: openDialog
	});
});
