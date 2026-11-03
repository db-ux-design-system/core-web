/**
 * Shared helpers of the Storybook docs tests.
 */
import { expect, type Page } from '@playwright/test';

import { resolve } from 'node:path';

/** Base path the Storybooks were built with (`BASE_URL`), e.g. `/core-web/review/<branch>`. */
export const BASE = process.env['BASE_URL'] ?? '';

/** Repository root (this file is in storybooks/_shared/tests/). */
export const ROOT = resolve(import.meta.dirname, '..', '..', '..');

/** The built Storybooks: `build-storybooks/<name>/`. */
export const BUILD_DIR = resolve(ROOT, 'build-storybooks');

export const FRAMEWORK_STORYBOOKS = [
	'react-storybook',
	'angular-storybook',
	'vue-storybook',
	'stencil-storybook',
	'html-storybook'
] as const;

export type StorybookName =
	(typeof FRAMEWORK_STORYBOOKS)[number] | 'composition-storybook';

type IndexEntry = { id: string; type: 'docs' | 'story'; title: string };

export const storybookUrl = (storybook: StorybookName) =>
	`${BASE}/${storybook}`;

/** All entries of a built Storybook (its `index.json`). */
export const getEntries = async (
	page: Page,
	storybook: StorybookName
): Promise<IndexEntry[]> => {
	const response = await page.request.get(
		`${storybookUrl(storybook)}/index.json`
	);
	expect(response.ok(), `${storybook}/index.json`).toBeTruthy();
	const { entries } = (await response.json()) as {
		entries: Record<string, IndexEntry>;
	};
	return Object.values(entries);
};

/**
 * Opens a docs page in the preview iframe (without the manager UI) and waits
 * until its content is rendered. Collects uncaught errors of the page.
 */
export const openDocs = async (
	page: Page,
	storybook: StorybookName,
	id: string,
	mode?: 'light' | 'dark'
): Promise<string[]> => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	const globals = mode ? `&globals=mode:${mode}` : '';
	await page.goto(
		`${storybookUrl(storybook)}/iframe.html?id=${id}&viewMode=docs${globals}`
	);
	await expect(page.locator('.sbdocs-content h1').first()).toBeVisible({
		timeout: 30_000
	});
	// Storybook keeps an error display in the DOM; it is shown on render errors.
	await expect(page.locator('.sb-errordisplay')).toBeHidden();
	await page.waitForLoadState('networkidle');
	return errors;
};
