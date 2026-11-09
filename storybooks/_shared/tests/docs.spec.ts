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
		// The rule heading-order looks at every heading of the page, including the h1–h6
		// that the previews render (DBHeading). checkHeadings tests the order of
		// the docs headings without the previews.
		.disableRules(['heading-order'])
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
		// A section of the page (`…--docs#examples`) is checked by its id.
		const id = target
			.replace(/^\?path=\/(docs|story)\//, '')
			.replace(/#.*$/, '');
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
			// Guidelines, Accessibility and Migration are optional: they need a
			// platform page or a docs file (see overview/README.md).
			for (const section of ['Usage', 'Resources']) {
				expect(sections, `section ${section}`).toContain(section);
			}
			// Components without a plain HTML version (`html: false`) show a
			// note in Usage instead of examples and attributes.
			const isNoHtml =
				(await page
					.locator('.sbdocs-content p', {
						hasText:
							'needs JavaScript and is not available as plain HTML'
					})
					.count()) > 0;
			expect(
				isNoHtml ||
					sections.includes('Properties') ||
					sections.includes('Attributes'),
				'Properties or Attributes section'
			).toBeTruthy();

			// Every preview renders something. Pages with many examples
			// (DBCustomSelect: 30) render them one after the other, which takes
			// longer than `networkidle` on a slow CI machine, so poll.
			await expect
				.poll(
					async () =>
						page
							.locator('.docs-story')
							.evaluateAll(
								(stories) =>
									stories.filter(
										(story) =>
											!story.querySelector(
												'[class^="db-"], [class*=" db-"], db-button, [data-density]'
											) && !story.textContent?.trim()
									).length
							),
					{ message: 'empty previews', timeout: 30_000 }
				)
				.toBe(0);

			// The guidelines link to the English platform page, when the
			// component has one.
			if (sections.includes('Guidelines')) {
				const guidelines = await page
					.locator('.sbdocs-content a.db-sb-platform-card')
					.evaluateAll((links) =>
						links.map((link) => link.getAttribute('href') ?? '')
					);
				expect(guidelines, 'guideline cards').toHaveLength(1);
				expect(
					guidelines[0].startsWith(`${PLATFORM}documentation/`),
					guidelines[0]
				).toBeTruthy();
			}

			// Every part of the "Parts" line has a section with a stable anchor
			// (the platform links it) below the properties or attributes of the
			// main component, with a table or the note that it has no
			// attributes of its own.
			const parts = await page
				.locator('.sbdocs-content p', { hasText: /^Parts:/ })
				.evaluateAll((lines) =>
					(lines[0]?.textContent ?? '')
						.replace(/^Parts:\s*/, '')
						.replace(/\s*–.*$/, '')
						.split(/,\s*/)
						.filter(Boolean)
				);
			const partSections = await page
				.locator('.sbdocs-content h3')
				.evaluateAll((headings) =>
					headings.map((heading) => {
						// Tables up to the next heading belong to this section.
						let tables = 0;
						let next = heading.nextElementSibling;
						while (next && !/^H[1-3]$/.test(next.tagName)) {
							tables +=
								next.matches('table') ||
								next.textContent?.startsWith(
									'No attributes of its own'
								)
									? 1
									: next.querySelectorAll('table').length;
							next = next.nextElementSibling;
						}
						return {
							text: heading.textContent?.trim() ?? '',
							id: heading.id,
							tables
						};
					})
				);
			for (const part of parts) {
				const section = partSections.find(
					(heading) => heading.text === part && heading.tables > 0
				);
				expect(
					section,
					`section with a table for part ${part}`
				).toBeTruthy();
				expect(section?.id, `anchor of part ${part}`).toBe(
					part.toLowerCase()
				);
			}

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
