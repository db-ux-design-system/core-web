/**
 * Guard of the CSS escape hatches (storybooks/_shared/storybook-config/
 * manager.css and docs.css).
 *
 * They target Storybook's inner HTML, which can change with any release
 * (https://storybook.js.org/docs/configure/user-interface/theming#css-escape-hatches).
 * A selector that no longer matches fails silently in the browser, so these
 * tests check that every selector still finds its element and that the rule
 * takes effect. After a Storybook update, a failure here names the selector to
 * adjust.
 */
import { expect, test, type Page } from '@playwright/test';
import {
	getEntries,
	openDocs,
	storybookUrl,
	type StorybookName
} from './storybooks.ts';

const OVERVIEW = 'components-dbbutton-overview--docs';

const openManager = async (page: Page, storybook: StorybookName, path = '') => {
	await page.goto(`${storybookUrl(storybook)}/?path=${path}`);
	await expect(page.locator('.sidebar-container')).toBeVisible({
		timeout: 60_000
	});
};

/** Computed style of the first match; fails when nothing matches. */
const style = async (
	page: Page,
	selector: string,
	property: string,
	pseudo?: string
) => {
	const element = page.locator(selector).first();
	await expect(element, selector).toBeAttached();
	return element.evaluate(
		(node, [name, pseudoElement]) =>
			getComputedStyle(node, pseudoElement).getPropertyValue(name),
		[property, pseudo] as const
	);
};

test.describe('manager.css', () => {
	test('hidden controls of the sidebar', async ({ page }) => {
		await openManager(page, 'react-storybook', `/docs/${OVERVIEW}`);
		for (const selector of [
			'[data-action="expand-all"]',
			'button[aria-label="Tag filters"]'
		]) {
			expect(await style(page, selector, 'display'), selector).toBe(
				'none'
			);
		}
	});

	test('"Extra actions" of the framework refs', async ({ page }) => {
		await openManager(page, 'composition-storybook');
		expect(
			await style(page, '[data-action="toggle-indicator"]', 'display')
		).toBe('none');
	});

	test('framework name in the mobile bar of the composition Storybook', async ({
		page
	}) => {
		await page.setViewportSize({ width: 375, height: 800 });
		const path = '.sb-bar button[aria-label="Open navigation menu"] > p';
		const prefix = async () =>
			page
				.locator(path)
				.evaluate((node) => getComputedStyle(node, '::before').content);
		await page.goto(
			`${storybookUrl('composition-storybook')}/?path=/docs/react_${OVERVIEW}`
		);
		await expect(page.locator(path)).toHaveText(/DBButton/, {
			timeout: 60_000
		});
		await expect.poll(prefix).toBe('"React ⋅ "');
		// Not in a ref (Foundations): no prefix.
		await page.goto(
			`${storybookUrl('composition-storybook')}/?path=/docs/foundations-colors--docs`
		);
		await expect(page.locator(path)).toHaveText(/Foundations/, {
			timeout: 60_000
		});
		await expect.poll(prefix).toBe('none');
	});

	test('sidebar in the style of the control panel', async ({ page }) => {
		await openManager(page, 'react-storybook', `/docs/${OVERVIEW}`);
		const selected = '.sidebar-item[data-nodetype][data-selected="true"]';
		expect(
			await style(page, '.sidebar-container', 'border-inline-end-style')
		).toBe('solid');
		expect(await style(page, selected, 'background-color')).toBe(
			'rgba(0, 0, 0, 0)'
		);
		// The brand indicator, drawn by `::after`.
		expect(await style(page, selected, 'content', '::after')).toBe('""');
		expect(
			await style(page, selected, 'background-color', '::after')
		).not.toBe('rgba(0, 0, 0, 0)');
		// Icons in the text color.
		const item = '.sidebar-item[data-nodetype]';
		expect(await style(page, `${item} svg[type]`, 'color')).toBe(
			await style(page, item, 'color')
		);
		// Section heading like the ref headings, with the separator line.
		const heading = '.sidebar-subheading[data-nodetype="root"]';
		expect(await style(page, heading, 'border-block-start-style')).toBe(
			'solid'
		);
		expect(
			await style(
				page,
				`${heading} > button[data-action="collapse-root"]`,
				'text-transform'
			)
		).toBe('none');
	});

	test('toolbar and settings button in the style of the sidebar', async ({
		page
	}) => {
		const entries = await getEntries(page, 'react-storybook');
		const story = entries.find((entry) => entry.type === 'story');
		expect(story, 'a story of react-storybook').toBeDefined();
		await openManager(page, 'react-storybook', `/story/${story?.id}`);
		const text = await style(page, '.sidebar-item[data-nodetype]', 'color');
		const settings = 'button[aria-label="Settings"]';
		expect(await style(page, settings, 'color')).toBe(text);
		const tool = '.sb-bar button[role="switch"][aria-label="Measure tool"]';
		await expect(page.locator(tool)).toBeVisible();
		expect(await style(page, tool, 'color')).toBe(text);
		expect(await style(page, tool, 'background-color')).toBe(
			'rgba(0, 0, 0, 0)'
		);
		// An active tool gets the brand indicator below it, no fill.
		const active = `${tool}[aria-checked="true"]`;
		// The tool ignores clicks until the story has loaded; click again then.
		await expect(async () => {
			if ((await page.locator(active).count()) === 0) {
				await page.locator(tool).click();
			}

			await expect(page.locator(active)).toBeAttached({ timeout: 1000 });
		}).toPass({ timeout: 30_000 });
		// Away from the button, so its hover overlay is gone.
		await page.mouse.move(0, 0);
		// Storybook animates the background, so wait until it has settled.
		await expect
			.poll(async () => style(page, active, 'background-color'))
			.toBe('rgba(0, 0, 0, 0)');
		expect(await style(page, active, 'content', '::after')).toBe('""');
	});

	test('keyboard cursor of the sidebar (manager.ts)', async ({ page }) => {
		await openManager(page, 'react-storybook', `/docs/${OVERVIEW}`);
		// Storybook keeps the ids of the highlighted item on the tree container
		// and the same ids on every item; manager.ts joins both.
		await expect(
			page.locator('[data-highlighted-item-id][data-highlighted-ref-id]')
		).toBeAttached();
		await expect(
			page
				.locator(
					'.sidebar-item[data-nodetype][data-ref-id][data-item-id]'
				)
				.first()
		).toBeAttached();
	});
});

test.describe('docs-anchor.js', () => {
	// The platform links parts to their section, e.g. DBTabItem on DBTabs.
	for (const storybook of [
		'react-storybook',
		'composition-storybook'
	] as const) {
		test(`deep link to a part (${storybook})`, async ({ page }) => {
			const id =
				storybook === 'composition-storybook'
					? 'react_components-dbtabs-overview--docs'
					: 'components-dbtabs-overview--docs';
			await openManager(page, storybook, `/docs/${id}#dbtabitem`);
			// Refs render in an iframe of their own Storybook.
			const heading = page
				.frameLocator(
					storybook === 'composition-storybook'
						? 'iframe[src*="react-storybook/iframe.html"]'
						: '#storybook-preview-iframe'
				)
				.locator('#dbtabitem');
			await expect(heading).toBeAttached({ timeout: 30_000 });
			// Wait until the examples above have rendered.
			await page.waitForTimeout(5000);
			await expect(heading).toBeInViewport();
		});
	}
});

test.describe('docs.css', () => {
	test('links and table of contents', async ({ page }) => {
		await openDocs(page, 'react-storybook', OVERVIEW);
		const link = '.sbdocs-content a:not(.db-card, .db-link, .db-button)';
		expect(await style(page, link, 'text-decoration-line')).toBe(
			'underline'
		);

		const toc = '.sbdocs.sbdocs-toc--custom';
		expect(
			await style(page, `${toc} .toc-list`, 'border-inline-start-style')
		).toBe('solid');
		expect(await style(page, `${toc} .toc-list-item > a`, 'display')).toBe(
			'block'
		);
		// Storybook's own marker is replaced by the indicator on the link.
		expect(
			await style(page, `${toc} .toc-list-item`, 'content', '::before')
		).toBe('none');
		expect(
			await style(
				page,
				`${toc} .toc-list-item.is-active-li > a`,
				'content',
				'::before'
			)
		).toBe('""');
	});

	test('Foundations examples stay light with the OS in dark mode', async ({
		browser
	}) => {
		const page = await browser.newPage({ colorScheme: 'dark' });
		await openDocs(
			page,
			'composition-storybook',
			'foundations-font-sizes--docs'
		);
		// The mode decorator sets Light Mode, so the text is dark on the light docs page.
		await expect(page.locator('html')).toHaveAttribute(
			'data-mode',
			'light'
		);
		const color = await style(page, '.docs-story p', 'color');
		const [red] = /\d+/.exec(color) ?? ['255'];
		expect(Number(red), color).toBeLessThan(128);
		await page.close();
	});

	test('links in story previews keep the component styling', async ({
		page
	}) => {
		await openDocs(
			page,
			'react-storybook',
			'components-dbnavigation-overview--docs'
		);
		// The navigation item removes the underline of its plain `<a>`.
		expect(
			await style(
				page,
				'.docs-story .db-navigation-item a',
				'text-decoration-line'
			)
		).toBe('none');
	});
});
