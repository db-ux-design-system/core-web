/**
 * Smoke and accessibility tests of the generated docs pages:
 * - every framework Storybook: Getting Started and every component overview
 * - composition Storybook: Getting Started and every Foundations page
 *
 * The pages are discovered from the `index.json` of each build, so new
 * components and Foundations pages are tested without changing this file.
 *
 * The component previews (`.docs-story`) are excluded from axe: the components
 * are tested in `showcases/` (axe-core, aria snapshots, screen reader).
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
	BUILD_DIR,
	FRAMEWORK_STORYBOOKS,
	getEntries,
	openDocs,
	type StorybookName
} from './storybooks.ts';

const PLATFORM = 'https://design-system.deutschebahn.com/';

const checkAccessibility = async (page: Page) => {
	const results = await new AxeBuilder({ page })
		.include('.sbdocs-content')
		.exclude('.docs-story')
		.analyze();
	expect(
		results.violations.map(
			(violation) =>
				`${violation.id}: ${violation.nodes.map((node) => node.target.join(' ')).join(', ')}`
		)
	).toEqual([]);
};

/** Headings start at h1 and never skip a level (h2 -> h4). */
const checkHeadings = async (page: Page) => {
	const levels = await page
		.locator('.sbdocs-content :is(h1, h2, h3, h4, h5, h6)')
		.evaluateAll((headings) =>
			headings
				// Storybook's own "Table of Contents" and story titles live outside the content flow.
				.filter(
					(heading) => !heading.closest('.docs-story, .toc-wrapper')
				)
				.map((heading) => Number(heading.tagName.slice(1)))
		);
	expect(levels[0], 'first heading').toBe(1);
	for (let i = 1; i < levels.length; i++) {
		expect(
			levels[i] - levels[i - 1],
			`heading h${levels[i]} after h${levels[i - 1]}`
		).toBeLessThanOrEqual(1);
	}
};

/** Links to other Storybook pages (`?path=/docs/...`) point to existing entries. */
const checkInternalLinks = async (
	page: Page,
	storybook: StorybookName,
	ids: Set<string>
) => {
	const targets = await page
		.locator('.sbdocs-content a[href^="?path=/"]')
		.evaluateAll((links) =>
			links.map((link) => link.getAttribute('href') ?? '')
		);
	for (const target of targets) {
		const id = target.replace(/^\?path=\/(docs|story)\//, '');
		expect(ids.has(id), `${storybook}: link to ${id}`).toBeTruthy();
	}
};

const testPage = (storybook: StorybookName, id: string, title: string) => {
	test(`${storybook} › ${title}`, async ({ page }) => {
		const entries = await getEntries(page, storybook);
		const ids = new Set(entries.map((entry) => entry.id));
		const errors = await openDocs(page, storybook, id);
		expect(errors, 'uncaught errors').toEqual([]);
		await checkHeadings(page);
		await checkInternalLinks(page, storybook, ids);
		await checkAccessibility(page);

		// Markdown tables must render as tables: Storybook's MDX has no GFM, so a
		// table outside the Markdown block shows up as plain text with pipes.
		const pipeRows = await page
			.locator('.sbdocs-content p')
			.evaluateAll(
				(paragraphs) =>
					paragraphs.filter((paragraph) =>
						/\|\s*-{3,}\s*\|/.test(paragraph.textContent ?? '')
					).length
			);
		expect(pipeRows, 'Markdown tables rendered as text').toBe(0);

		if (id === 'foundations-test-table--docs') {
			await expect(
				page.locator('.sbdocs-content table tbody tr')
			).not.toHaveCount(0);
		}

		if (id.endsWith('-overview--docs')) {
			const sections = await page
				.locator('.sbdocs-content h2')
				.allTextContents();
			for (const section of [
				'Guidelines',
				'Usage',
				'Migration',
				'Resources'
			]) {
				expect(sections, `section ${section}`).toContain(section);
			}
			expect(
				sections.includes('Properties') ||
					sections.includes('Attributes'),
				'Properties or Attributes section'
			).toBeTruthy();

			// Every preview renders something.
			const empty = await page
				.locator('.docs-story')
				.evaluateAll(
					(stories) =>
						stories.filter(
							(story) =>
								!story.querySelector(
									'[class^="db-"], [class*=" db-"], db-button, [data-density]'
								) && !story.textContent?.trim()
						).length
				);
			expect(empty, 'empty previews').toBe(0);

			// The guidelines link to the English platform page.
			const guidelines = await page
				.locator('.sbdocs-content a', { hasText: / guidelines$/ })
				.evaluateAll((links) =>
					links.map((link) => link.getAttribute('href') ?? '')
				);
			expect(guidelines, 'guideline links').toHaveLength(1);
			expect(
				guidelines[0].startsWith(`${PLATFORM}documentation/`),
				guidelines[0]
			).toBeTruthy();

			// The docs stay readable when the stories are switched to dark mode.
			await openDocs(page, storybook, id, 'dark');
			await checkAccessibility(page);
		}
	});
};

// Pages are discovered when the tests are collected, from the index files of
// the build on disk (the web server is not running yet at that point).
const discover = (storybook: StorybookName) => {
	const file = join(BUILD_DIR, storybook, 'index.json');
	if (!existsSync(file)) {
		throw new Error(`${file} is missing – build the Storybooks first`);
	}
	const { entries } = JSON.parse(readFileSync(file, 'utf8')) as {
		entries: Record<string, { id: string; type: string; title: string }>;
	};
	return Object.values(entries).filter(
		(entry) =>
			entry.type === 'docs' &&
			(entry.id === 'getting-started--docs' ||
				entry.id.endsWith('-overview--docs') ||
				(storybook === 'composition-storybook' &&
					entry.title.startsWith('Foundations/')))
	);
};

for (const storybook of [
	...FRAMEWORK_STORYBOOKS,
	'composition-storybook'
] as StorybookName[]) {
	const entries = discover(storybook);
	test(`${storybook} › has docs pages to test`, () => {
		// Getting Started plus at least one overview or Foundations page.
		expect(entries.length).toBeGreaterThan(1);
	});
	for (const entry of entries) {
		testPage(storybook, entry.id, entry.title);
	}
}
