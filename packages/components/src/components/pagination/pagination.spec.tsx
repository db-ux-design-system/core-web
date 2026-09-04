import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBPagination } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT, DESKTOP_VIEWPORT } from '../../shared/constants.ts';

// The describe below runs at DEFAULT_VIEWPORT, which is 390px wide and therefore
// below the collapsing breakpoint - every test sees the collapsed page list
// unless it switches to DESKTOP_VIEWPORT first.
let requestedPage: number | undefined;
let requestedPages: number[] = [];

type PaginationItemSnapshot = {
	attribute: string;
	text: string;
	current: boolean;
	visible: boolean;
};

const readItems = async (component: any): Promise<PaginationItemSnapshot[]> =>
	component
		.locator('li[data-pagination-item]')
		.evaluateAll((items: HTMLElement[]) =>
			items.map((item) => ({
				attribute: item.getAttribute('data-pagination-item') ?? '',
				text: item.textContent?.trim() ?? '',
				current: item.querySelector('[aria-current="page"]') !== null,
				visible: window.getComputedStyle(item).display !== 'none'
			}))
		);

const getShape = (items: PaginationItemSnapshot[]): string =>
	items
		.filter((item) => item.visible)
		.map((item) => item.text)
		.join(' ');

const comp: any = (
	<DBPagination
		label="Results pages"
		currentPage={5}
		totalCount={100}
		pageSize={10}
		onPageChange={(page: number) => {
			requestedPage = page;
			requestedPages.push(page);
		}}
	/>
);

const testComponent = () => {
	test('should render a semantic navigation with the current page', async ({
		mount
	}) => {
		const component = await mount(comp);

		await expect(component).toHaveRole('navigation');
		await expect(component).toHaveAttribute('aria-label', 'Results pages');
		await expect(
			component.getByRole('button', { name: 'Page 5 of 10' })
		).toHaveAttribute('aria-current', 'page');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testPagination = () => {
	test.beforeEach(() => {
		requestedPage = undefined;
		requestedPages = [];
	});

	test('should report a page change exactly once', async ({ mount }) => {
		// The React pass-through forwards every prop starting with `on` to the root
		// of the item, which is the <li>. The button inside it already reports the
		// click, so without filtering onClick the same click bubbles into the
		// forwarded handler and the consumer sees the page change twice - enough to
		// send a request or an analytics event twice.
		const component = await mount(comp);

		await component.getByRole('button', { name: 'Page 1 of 10' }).click();

		expect(requestedPages).toEqual([1]);
	});

	test('should keep the focus on the page that was activated', async ({
		mount,
		page
	}) => {
		// The items are keyed by page, not by position. Keyed by position, the
		// element that holds the focus would be reused for whatever page moves into
		// that slot: going from page 5 to 6 shifts the window from 1 ... 4 5 6 ... 10
		// to 1 ... 5 6 7 ... 10, so the focus would end up on page 7.
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(comp);

		await component.getByRole('button', { name: 'Page 6 of 10' }).click();
		await component.update(
			<DBPagination
				label="Results pages"
				currentPage={6}
				totalCount={100}
				pageSize={10}
			/>
		);

		await expect(
			component.getByRole('button', { name: 'Page 6 of 10' })
		).toBeFocused();
	});

	test('should request a page without changing controlled state', async ({
		mount,
		page
	}) => {
		// Page 6 is a sibling of the current page and only rendered in the wide
		// layout, so this has to run above the collapsing breakpoint.
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(comp);

		await component.getByRole('button', { name: 'Page 6 of 10' }).click();

		expect(requestedPage).toBe(6);
		await expect(
			component.getByRole('button', { name: 'Page 5 of 10' })
		).toHaveAttribute('aria-current', 'page');
	});

	test('should request the previous and next pages', async ({ mount }) => {
		const component = await mount(comp);

		await component.getByRole('button', { name: 'Previous page' }).click();
		expect(requestedPage).toBe(4);

		await component.getByRole('button', { name: 'Next page' }).click();
		expect(requestedPage).toBe(6);
	});

	test('should disable previous and next buttons at the boundaries', async ({
		mount
	}) => {
		const firstPage = await mount(
			<DBPagination currentPage={1} totalCount={100} pageSize={10} />
		);
		await expect(
			firstPage.getByRole('button', { name: 'Previous page' })
		).toBeDisabled();
		await expect(
			firstPage.getByRole('button', { name: 'Next page' })
		).toBeEnabled();
		await firstPage.unmount();

		const lastPage = await mount(
			<DBPagination currentPage={10} totalCount={100} pageSize={10} />
		);
		await expect(
			lastPage.getByRole('button', { name: 'Previous page' })
		).toBeEnabled();
		await expect(
			lastPage.getByRole('button', { name: 'Next page' })
		).toBeDisabled();
	});

	test('should truncate large page ranges', async ({ mount }) => {
		const component = await mount(comp);

		await expect(component.locator('.db-pagination-ellipsis')).toHaveCount(
			2
		);
		await expect(
			component.getByRole('button', { name: 'Page 1 of 10' })
		).toBeVisible();
		await expect(
			component.getByRole('button', { name: 'Page 10 of 10' })
		).toBeVisible();
	});

	test('should show all pages when truncation is unnecessary', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination currentPage={3} totalCount={50} pageSize={10} />
		);

		await expect(component.locator('.db-pagination-ellipsis')).toHaveCount(
			0
		);
		await expect(component.locator('.db-pagination-page')).toHaveCount(5);
	});

	test('should honor siblingCount and boundaryCount', async ({ mount }) => {
		const component = await mount(
			<DBPagination
				currentPage={10}
				totalCount={200}
				pageSize={10}
				siblingCount={0}
				boundaryCount={0}
			/>
		);

		// boundaryCount 0 drops the first/last page, siblingCount 0 leaves only the
		// active page between the two ellipses.
		await expect(component.locator('.db-pagination-page')).toHaveCount(1);
		await expect(component.locator('.db-pagination-ellipsis')).toHaveCount(
			2
		);
		await expect(
			component.getByRole('button', { name: 'Page 10 of 20' })
		).toHaveAttribute('aria-current', 'page');
	});

	test('should follow currentPage when the parent updates it', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination currentPage={2} totalCount={50} pageSize={10} />
		);
		await expect(
			component.getByRole('button', { name: 'Page 2 of 5' })
		).toHaveAttribute('aria-current', 'page');

		await component.update(
			<DBPagination currentPage={4} totalCount={50} pageSize={10} />
		);

		await expect(
			component.getByRole('button', { name: 'Page 4 of 5' })
		).toHaveAttribute('aria-current', 'page');
		await expect(
			component.getByRole('button', { name: 'Page 2 of 5' })
		).not.toHaveAttribute('aria-current', 'page');
	});

	test('should clamp a currentPage beyond the last page', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination currentPage={99} totalCount={100} pageSize={10} />
		);

		await expect(
			component.getByRole('button', { name: 'Page 10 of 10' })
		).toHaveAttribute('aria-current', 'page');
		await expect(
			component.getByRole('button', { name: 'Next page' })
		).toBeDisabled();
	});

	test('should fall back to the default pageSize for blank values', async ({
		mount
	}) => {
		const blank = await mount(
			<DBPagination currentPage={1} totalCount={100} pageSize={''} />
		);
		await expect(
			blank.getByRole('button', { name: 'Page 1 of 10' })
		).toBeVisible();
		await blank.unmount();

		const invalid = await mount(
			<DBPagination currentPage={1} totalCount={100} pageSize="abc" />
		);
		await expect(
			invalid.getByRole('button', { name: 'Page 1 of 10' })
		).toBeVisible();
	});

	test('should replace repeated pageLabel placeholders', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination
				currentPage={2}
				totalCount={30}
				pageSize={10}
				pageLabel="Page {page} of {totalPages} (page {page})"
			/>
		);

		await expect(
			component.getByRole('button', { name: 'Page 2 of 3 (page 2)' })
		).toHaveAttribute('aria-current', 'page');
	});

	test('should support small size and localized labels', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination
				label="Results pagination"
				previousLabel="Go to previous page"
				nextLabel="Go to next page"
				pageLabel="Result page {page} of {totalPages}"
				currentPage={2}
				totalCount={30}
				pageSize={10}
				size="small"
			/>
		);

		await expect(component).toHaveAttribute('data-size', 'small');
		await expect(
			component.getByRole('button', { name: 'Result page 2 of 3' })
		).toHaveAttribute('aria-current', 'page');
		await expect(
			component.getByRole('button', { name: 'Go to previous page' })
		).toBeVisible();
	});
};

const testCollapsing = () => {
	test('should keep every page of the wide layout above the breakpoint', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);

		const start = await mount(
			<DBPagination currentPage={1} totalCount={100} pageSize={10} />
		);
		expect(getShape(await readItems(start))).toBe('1 2 3 4 5 ... 10');
		await expect(
			start.getByRole('button', { name: 'Previous page' })
		).toBeDisabled();
		await start.unmount();

		const center = await mount(
			<DBPagination currentPage={5} totalCount={100} pageSize={10} />
		);
		expect(getShape(await readItems(center))).toBe('1 ... 4 5 6 ... 10');
		await center.unmount();

		const end = await mount(
			<DBPagination currentPage={10} totalCount={100} pageSize={10} />
		);
		expect(getShape(await readItems(end))).toBe('1 ... 6 7 8 9 10');
		await expect(
			end.getByRole('button', { name: 'Next page' })
		).toBeDisabled();
	});

	test('should drop the sibling pages below the breakpoint', async ({
		mount
	}) => {
		// At a border the collapsed layout keeps only the boundary page and the
		// current one. The wide layout pads the row to a constant length instead, so
		// it shows 1 2 3 ... 10 here - see the test above.
		const start = await mount(
			<DBPagination currentPage={1} totalCount={100} pageSize={10} />
		);
		expect(getShape(await readItems(start))).toBe('1 ... 10');
		await expect(
			start.getByRole('button', { name: 'Previous page' })
		).toBeDisabled();
		await start.unmount();

		const center = await mount(
			<DBPagination currentPage={5} totalCount={100} pageSize={10} />
		);
		expect(getShape(await readItems(center))).toBe('1 ... 5 ... 10');
		await center.unmount();

		const end = await mount(
			<DBPagination currentPage={10} totalCount={100} pageSize={10} />
		);
		expect(getShape(await readItems(end))).toBe('1 ... 10');
		await expect(
			end.getByRole('button', { name: 'Next page' })
		).toBeDisabled();
	});

	test('should not put several wide pages next to each other when collapsed', async ({
		mount
	}) => {
		// The reported case: on the last page of a five digit list the collapsed
		// layout showed 1 ... 9998 9999 10000, because padding the row to a constant
		// length pushes the window against the border. Three pages of that width do
		// not fit a narrow column, so the next button wrapped into a second row.
		const component = await mount(
			<div style={{ inlineSize: '300px' }}>
				<DBPagination
					currentPage={10_000}
					totalCount={100_000}
					pageSize={10}
				/>
			</div>
		);

		const rows = await component
			.locator('li')
			.evaluateAll((items: HTMLElement[]) =>
				items
					.filter(
						(item) =>
							window.getComputedStyle(item).display !== 'none'
					)
					.map((item) => Math.round(item.getBoundingClientRect().top))
			);
		expect(
			new Set(rows).size,
			'every control stays on one row in a 300px column'
		).toBe(1);

		expect(getShape(await readItems(component))).toBe('1 ... 10000');
	});

	test('should add an ellipsis for a gap that only the collapsed layout has', async ({
		mount,
		page
	}) => {
		// Seven pages fit without truncation, so the wide layout has no ellipsis at
		// all while the collapsed one needs two - they cannot be reused, they have
		// to be rendered on top and stay hidden above the breakpoint.
		const comp70: any = (
			<DBPagination currentPage={4} totalCount={70} pageSize={10} />
		);

		await page.setViewportSize(DESKTOP_VIEWPORT);
		const wide = await mount(comp70);
		expect(getShape(await readItems(wide))).toBe('1 2 3 4 5 6 7');
		await wide.unmount();

		await page.setViewportSize(DEFAULT_VIEWPORT);
		const collapsed = await mount(comp70);
		expect(getShape(await readItems(collapsed))).toBe('1 ... 4 ... 7');
	});

	test('should not collapse a page list that has no siblings to drop', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination currentPage={3} totalCount={50} pageSize={10} />
		);

		// Five pages are the collapsed layout already, so nothing may be hidden -
		// hiding 2 and 4 here would claim a gap that does not exist.
		expect(getShape(await readItems(component))).toBe('1 2 3 4 5');
		await expect(component.locator('.db-pagination-ellipsis')).toHaveCount(
			0
		);
	});

	test('should keep the current page marked in the collapsed layout', async ({
		mount
	}) => {
		const component = await mount(comp);

		const currentButton = component.getByRole('button', {
			name: 'Page 5 of 10'
		});
		await expect(currentButton).toBeVisible();
		await expect(currentButton).toHaveAttribute('aria-current', 'page');
		await expect(
			component.getByRole('button', { name: 'Page 4 of 10' })
		).toBeHidden();
	});

	test('should keep a hidden page out of the tab order', async ({
		mount,
		page
	}) => {
		const component = await mount(comp);

		// The sibling pages stay in the DOM so the wide layout does not need a
		// re-render, but display: none takes them out of the accessibility tree and
		// with it out of the tab order.
		await expect(
			component.locator('li[data-pagination-item="sibling"]')
		).toHaveCount(2);
		await expect(
			component.getByRole('button', { name: 'Page 4 of 10' })
		).toHaveCount(0);

		await component.getByRole('button', { name: 'Previous page' }).focus();
		await page.keyboard.press('Tab');
		await expect(
			component.getByRole('button', { name: 'Page 1 of 10' })
		).toBeFocused();
		await page.keyboard.press('Tab');
		await expect(
			component.getByRole('button', { name: 'Page 5 of 10' })
		).toBeFocused();
	});

	test('should keep the item shape consistent in both layouts', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination currentPage={1} totalCount={10} pageSize={10} />
		);

		for (const boundaryCount of [0, 1, 2]) {
			for (const siblingCount of [0, 1, 2]) {
				for (const totalPages of [5, 8, 12]) {
					for (const currentPage of [
						1,
						2,
						Math.ceil(totalPages / 2),
						totalPages - 1,
						totalPages
					]) {
						await component.update(
							<DBPagination
								currentPage={currentPage}
								totalCount={totalPages * 10}
								pageSize={10}
								siblingCount={siblingCount}
								boundaryCount={boundaryCount}
							/>
						);

						const items = await readItems(component);
						const context = `boundaryCount ${boundaryCount}, siblingCount ${siblingCount}, page ${currentPage} of ${totalPages}`;

						expectValidLayout(
							items.filter(
								(item) => item.attribute !== 'collapse-ellipsis'
							),
							{
								totalPages,
								currentPage,
								boundaryCount,
								context: `wide layout: ${context}`
							}
						);
						expectValidLayout(
							items.filter(
								(item) =>
									item.attribute !== 'sibling' &&
									item.attribute !== 'wide-ellipsis'
							),
							{
								totalPages,
								currentPage,
								boundaryCount,
								context: `collapsed layout: ${context}`
							}
						);
					}
				}
			}
		}
	});
};

const testSizes = () => {
	test('should give previous and next the size of the pagination', async ({
		mount
	}) => {
		// Figma draws the previous and next buttons at the size of the page items,
		// not at a fixed small - see the Pagination (Concept) component set.
		const medium = await mount(
			<DBPagination currentPage={5} totalCount={100} pageSize={10} />
		);
		await expect(medium.locator('.db-pagination-previous')).toHaveAttribute(
			'data-size',
			'medium'
		);
		await expect(medium.locator('.db-pagination-next')).toHaveAttribute(
			'data-size',
			'medium'
		);
		await medium.unmount();

		const small = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				size="small"
			/>
		);
		await expect(small.locator('.db-pagination-previous')).toHaveAttribute(
			'data-size',
			'small'
		);
		await expect(small.locator('.db-pagination-next')).toHaveAttribute(
			'data-size',
			'small'
		);
	});

	test('should size the links like the buttons', async ({ mount }) => {
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);

		await expect(
			component.locator('a.db-pagination-previous')
		).toHaveAttribute('data-size', 'medium');
		await expect(component.locator('a.db-pagination-next')).toHaveAttribute(
			'data-size',
			'medium'
		);
	});
};

const testTouchTargets = () => {
	test('should keep a pointer target of at least 24 pixels', async ({
		mount,
		page
	}) => {
		// WCAG 2.2 SC 2.5.8. At functional density the buttons themselves are only
		// 20px, so the target comes from an overlay - see pagination.scss. The
		// density cannot be exercised here because the component test harness does
		// not load the density stylesheets, so this guards the mechanism: if the
		// overlay goes away, the content is `none` and the floor is gone with it.
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				size="small"
			/>
		);

		for (const selector of [
			'.db-pagination-previous',
			'.db-pagination-next',
			'.db-pagination-page'
		]) {
			const overlay = await component
				.locator(selector)
				.first()
				.evaluate((element: HTMLElement) => {
					const style = window.getComputedStyle(element, '::after');
					return {
						content: style.content,
						minInlineSize: Number.parseFloat(style.minInlineSize),
						minBlockSize: Number.parseFloat(style.minBlockSize)
					};
				});

			expect(overlay.content, `${selector}: overlay is rendered`).toBe(
				'""'
			);
			expect(
				overlay.minInlineSize,
				`${selector}: target is at least 24px wide`
			).toBeGreaterThanOrEqual(24);
			expect(
				overlay.minBlockSize,
				`${selector}: target is at least 24px high`
			).toBeGreaterThanOrEqual(24);
		}

		// The criterion is written in CSS pixels, so the floor has to survive a
		// consumer that lowers the root font size. A plain rem value would follow it
		// down - 1.5rem is 18px at a root of 12px.
		await page.evaluate(() => {
			document.documentElement.style.fontSize = '12px';
		});

		const lowered = await component
			.locator('.db-pagination-page')
			.first()
			.evaluate((element: HTMLElement) => {
				const style = window.getComputedStyle(element, '::after');
				return {
					minInlineSize: Number.parseFloat(style.minInlineSize),
					minBlockSize: Number.parseFloat(style.minBlockSize)
				};
			});

		expect(
			lowered.minInlineSize,
			'target stays 24px wide at a reduced root font size'
		).toBeGreaterThanOrEqual(24);
		expect(
			lowered.minBlockSize,
			'target stays 24px high at a reduced root font size'
		).toBeGreaterThanOrEqual(24);
	});

	test('should not let two page targets overlap', async ({ mount }) => {
		// Five pages need no truncation, so all page buttons are direct neighbors
		// and none of them is hidden in either layout - with a truncated list the
		// first two matches would be separated by an ellipsis, or hidden and
		// therefore without a box to measure.
		const component = await mount(
			<DBPagination
				currentPage={3}
				totalCount={50}
				pageSize={10}
				size="small"
			/>
		);

		// An overlay wider than the distance between two origins would make a click
		// near an edge land on the neighbor, which is worse than a small target.
		const measurements = await component
			.locator('.db-pagination-page')
			.evaluateAll((buttons: HTMLElement[]) => {
				const boxes = buttons.map((button) =>
					button.getBoundingClientRect()
				);
				const overlay = Number.parseFloat(
					window.getComputedStyle(buttons[0]!, '::after')
						.minInlineSize
				);
				const target = Math.max(overlay, boxes[0]!.width);
				return { target, pitch: boxes[1]!.left - boxes[0]!.left };
			});

		expect(measurements.target).toBeLessThanOrEqual(measurements.pitch);
	});
};

const testLinks = () => {
	test('should render buttons and no href without hrefPattern', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(comp);

		await expect(component.locator('a')).toHaveCount(0);
		await expect(component.locator('.db-pagination-page')).toHaveCount(5);
		await expect(component.locator('[rel]')).toHaveCount(0);
		await expect(
			component.getByRole('button', { name: 'Page 5 of 10' })
		).toHaveAttribute('aria-current', 'page');
	});

	test('should build the page links from the pattern', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				label="Linked pages"
				currentPage={5}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);

		const pageLinks = await component
			.locator('a.db-pagination-page')
			.evaluateAll((links: HTMLAnchorElement[]) =>
				links.map((link) => link.getAttribute('href'))
			);
		expect(pageLinks).toEqual([
			'?page=1',
			'?page=4',
			'?page=5',
			'?page=6',
			'?page=10'
		]);
		await expect(
			component.locator('button.db-pagination-page')
		).toHaveCount(0);
	});

	test('should replace every occurrence of the page placeholder', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				currentPage={2}
				totalCount={30}
				pageSize={10}
				hrefPattern="/list/{page}?page={page}"
			/>
		);

		await expect(
			component.getByRole('link', { name: 'Page 3 of 3' })
		).toHaveAttribute('href', '/list/3?page=3');
	});

	test('should link previous and next with rel', async ({ mount, page }) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);

		const previous = component.locator('a.db-pagination-previous');
		await expect(previous).toHaveAttribute('href', '?page=4');
		await expect(previous).toHaveAttribute('rel', 'prev');

		const next = component.locator('a.db-pagination-next');
		await expect(next).toHaveAttribute('href', '?page=6');
		await expect(next).toHaveAttribute('rel', 'next');

		await expect(component.locator('[rel="prev"]')).toHaveCount(1);
		await expect(component.locator('[rel="next"]')).toHaveCount(1);
	});

	test('should keep previous and next disabled buttons at the boundaries', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);

		// No href to go to means no anchor: the element stays the native disabled
		// button of the button mode instead of becoming an inert link.
		const first = await mount(
			<DBPagination
				currentPage={1}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);
		await expect(
			first.locator('button.db-pagination-previous')
		).toBeDisabled();
		await expect(first.locator('a.db-pagination-previous')).toHaveCount(0);
		await expect(first.locator('a.db-pagination-next')).toHaveAttribute(
			'href',
			'?page=2'
		);
		await expect(first.locator('[rel="prev"]')).toHaveCount(0);
		await first.unmount();

		const last = await mount(
			<DBPagination
				currentPage={10}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);
		await expect(last.locator('button.db-pagination-next')).toBeDisabled();
		await expect(last.locator('a.db-pagination-next')).toHaveCount(0);
		await expect(last.locator('[rel="next"]')).toHaveCount(0);
	});

	test('should mark the current page link with aria-current', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);

		await expect(
			component.getByRole('link', { name: 'Page 5 of 10' })
		).toHaveAttribute('aria-current', 'page');
		await expect(component.locator('[aria-current="page"]')).toHaveCount(1);
	});

	test('should not turn the ellipses into links', async ({ mount, page }) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);

		const ellipses = component.locator('.db-pagination-ellipsis');
		await expect(ellipses).toHaveCount(2);
		await expect(ellipses.first()).toHaveAttribute('aria-hidden', 'true');
		await expect(ellipses.locator('a')).toHaveCount(0);
	});

	test('should keep the collapsed layout and its tab order in link mode', async ({
		mount,
		page
	}) => {
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				hrefPattern="?page={page}"
			/>
		);

		expect(getShape(await readItems(component))).toBe('1 ... 5 ... 10');
		await expect(
			component.getByRole('link', { name: 'Page 4 of 10' })
		).toHaveCount(0);

		await component.locator('a.db-pagination-previous').focus();
		await page.keyboard.press('Tab');
		await expect(
			component.getByRole('link', { name: 'Page 1 of 10' })
		).toBeFocused();
		await page.keyboard.press('Tab');
		await expect(
			component.getByRole('link', { name: 'Page 5 of 10' })
		).toBeFocused();
	});

	test('should report the requested page from a link click', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				hrefPattern="#page={page}"
				onPageChange={(requested: number) =>
					(requestedPage = requested)
				}
			/>
		);

		// A fragment href keeps the test page from navigating away while still
		// proving that the component does not swallow the click.
		await component.getByRole('link', { name: 'Page 6 of 10' }).click();
		expect(requestedPage).toBe(6);
	});
};

const expectValidLayout = (
	items: PaginationItemSnapshot[],
	setup: {
		totalPages: number;
		currentPage: number;
		boundaryCount: number;
		context: string;
	}
) => {
	const { totalPages, currentPage, boundaryCount, context } = setup;
	const pages = items
		.filter((item) => !item.attribute.includes('ellipsis'))
		.map((item) => Number(item.text));

	expect(pages, `${context}: contains the current page`).toContain(
		currentPage
	);
	expect(
		items.filter((item) => item.current).map((item) => Number(item.text)),
		`${context}: marks exactly the current page with aria-current`
	).toEqual([currentPage]);
	expect(
		[...pages].sort((a, b) => a - b),
		`${context}: pages are ascending without duplicates`
	).toEqual(pages);
	expect(new Set(pages).size, `${context}: no duplicate pages`).toBe(
		pages.length
	);

	let previousPage = 0;
	let previousWasEllipsis = false;
	items.forEach((item, index) => {
		if (item.attribute.includes('ellipsis')) {
			expect(
				previousWasEllipsis,
				`${context}: no two ellipses next to each other`
			).toBe(false);
			const nextPage =
				index + 1 < items.length
					? Number(items[index + 1]!.text)
					: totalPages + 1;
			const hiddenPages = nextPage - previousPage - 1;
			// At a list border an ellipsis may stand in for a single page: with
			// boundaryCount 0 there is no page pinned outside it that could be
			// rendered instead.
			const minimumHiddenPages =
				boundaryCount === 0 &&
				(previousPage === 0 || nextPage > totalPages)
					? 1
					: 2;
			expect(
				hiddenPages,
				`${context}: ellipsis stands in for enough pages`
			).toBeGreaterThanOrEqual(minimumHiddenPages);
			previousWasEllipsis = true;
			return;
		}
		if (!previousWasEllipsis) {
			expect(
				Number(item.text),
				`${context}: pages are consecutive where no ellipsis separates them`
			).toBe(previousPage + 1);
		}
		previousPage = Number(item.text);
		previousWasEllipsis = false;
	});

	if (!previousWasEllipsis) {
		expect(
			previousPage,
			`${context}: the list ends on the last page or an ellipsis`
		).toBe(totalPages);
	}
};

const testA11y = () => {
	test('should let a passed aria-label win over the label prop', async ({
		mount
	}) => {
		// The React output spreads the aria-*/data-* pass-through right after
		// `ref={_ref}`, so aria-label has to stay above it in pagination.lite.tsx.
		// Moving it below silently turns aria-label into a no-op for React only.
		const passed = await mount(
			<DBPagination
				aria-label="Consumer provided label"
				currentPage={1}
				totalCount={30}
				pageSize={10}
			/>
		);
		await expect(passed).toHaveAttribute(
			'aria-label',
			'Consumer provided label'
		);
		await passed.unmount();

		const fallback = await mount(
			<DBPagination currentPage={1} totalCount={30} pageSize={10} />
		);
		await expect(fallback).toHaveAttribute('aria-label', 'Pagination');
	});

	test('should have same aria snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});

	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-pagination')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBPagination', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testPagination();
	testCollapsing();
	testSizes();
	testTouchTargets();
	testLinks();
	testA11y();
});
