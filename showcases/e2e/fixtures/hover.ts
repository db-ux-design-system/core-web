// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-await-in-loop,unicorn/prefer-dom-node-dataset */
import { type Page } from '@playwright/test';

export const hoverPre = async (page: Page, selector: string) => {
	const components = await page.locator('main').locator(selector).all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			comp.setAttribute('data-e2e-hover', 'true');
		});
	}

	// Wait for animations
	await page.waitForTimeout(1000);
};
