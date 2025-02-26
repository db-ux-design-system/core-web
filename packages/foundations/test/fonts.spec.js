// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { expect, test } from '@playwright/test';

test.describe('Fonts', () => {
	test(`should match screenshot`, async ({ page }) => {
		await page.goto(`dev/fonts.html`);
		await expect(page).toHaveScreenshot({ fullPage: true });
	});
});
