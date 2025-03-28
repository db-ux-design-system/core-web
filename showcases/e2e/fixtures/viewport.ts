// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { expect, type Page } from '@playwright/test';

export const setScrollViewport = (page: Page, fixedHeight?: number) => {
	return async () => {
		const header = await page.waitForSelector('.db-header');
		const headerHeight: number = await header.evaluate((node) =>
			Number(node?.scrollHeight ?? 72)
		);
		const main = await page.waitForSelector('.db-main');
		const mainHeight: number = await main.evaluate((node) =>
			Number(node?.scrollHeight ?? 2500)
		);

		const width = page.viewportSize().width;
		const height = fixedHeight ?? headerHeight + mainHeight;

		await page.setViewportSize({
			width,
			height
		});

		await expect(page.viewportSize().height).toEqual(height);
	};
};
