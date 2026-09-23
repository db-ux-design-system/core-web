import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBPaginationItem } from '../pagination-item/index';
import { DBPagination } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT, DESKTOP_VIEWPORT } from '../../shared/constants.ts';

let requestedPage: number | undefined;
let requestedPages: number[] = [];

type PaginationItemSnapshot = {
	attribute: string;
	text: string;
	current: boolean;
	visible: boolean;
	ellipsisBefore: boolean;
	ellipsisAfter: boolean;
	ellipsis: string[];
};

const readItems = async (component: any): Promise<PaginationItemSnapshot[]> =>
	component
		.locator('li[data-pagination-item]')
		.evaluateAll((items: HTMLElement[]) =>
			items.map((item) => {
				const hasMarker = (pseudo: string) => {
					const content = window.getComputedStyle(
						item,
						pseudo
					).content;
					return content !== 'none' && content !== 'normal';
				};
				return {
					attribute: item.getAttribute('data-pagination-item') ?? '',
					text: item.textContent?.trim() ?? '',
					current:
						item.querySelector('[aria-current="page"]') !== null ||
						item.getAttribute('aria-current') === 'page',
					visible: window.getComputedStyle(item).display !== 'none',
					ellipsisBefore: hasMarker('::before'),
					ellipsisAfter: hasMarker('::after'),
					ellipsis: (item.getAttribute('data-ellipsis') ?? '')
						.split(' ')
						.filter((token) => token !== '')
				};
			})
		);

const getShape = (items: PaginationItemSnapshot[]): string =>
	items
		.filter((item) => item.visible)
		.flatMap((item) => [
			...(item.ellipsisBefore ? ['...'] : []),
			item.text,
			...(item.ellipsisAfter ? ['...'] : [])
		])
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
		const component = await mount(comp);

		await component.getByRole('button', { name: 'Page 1 of 10' }).click();

		expect(requestedPages).toEqual([1]);
	});

	test('should ignore a click on the decorative ellipsis', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(comp);

		const ellipsisItem = component
			.locator('li[data-ellipsis*="wide-"]')
			.first();
		await expect(ellipsisItem).toBeVisible();

		// The ellipsis is a pseudo-element, so a click on it targets the li.
		await ellipsisItem.evaluate((item: HTMLElement) => {
			item.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(
			requestedPage,
			'a click on the ellipsis reports nothing'
		).toBeUndefined();

		const ellipsisPage = Number(
			await ellipsisItem.getAttribute('data-page')
		);
		await ellipsisItem.locator('button').click();
		expect(requestedPage).toBe(ellipsisPage);
	});

	test('should keep the focus on the page that was activated', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(comp);

		await component.locator('li[data-page="6"] button').click();
		await component.update(
			<DBPagination
				label="Results pages"
				currentPage={6}
				totalCount={100}
				pageSize={10}
			/>
		);

		await component
			.locator('li[data-page="6"][data-variant="filled"]')
			.waitFor({ state: 'attached' });
		await expect(
			component.locator('li[data-page="6"] button')
		).toBeFocused();
	});

	test('should keep the focus on a composed link that becomes current', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination label="Results pages" currentPage={1}>
				<DBPaginationItem>
					<a href="#page-1">1</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2">2</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await component.locator('li[data-page="2"] a').focus();
		await component.locator('li[data-page="2"] a').click();
		await component.update(
			<DBPagination label="Results pages" currentPage={2}>
				<DBPaginationItem>
					<a href="#page-1">1</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2">2</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await expect(component.locator('li[data-page="2"] a')).toBeFocused();
	});

	test('should let a consumer compose the items', async ({ mount }) => {
		const component = await mount(
			<DBPagination
				label="Composed"
				currentPage={1}
				onPageChange={(page: number) => {
					requestedPage = page;
					requestedPages.push(page);
				}}>
				<DBPaginationItem>
					<a href="?page=1" aria-label="Page 1">
						1
					</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="?page=2" aria-label="Page 2">
						2
					</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await expect(component.locator('li[data-page]')).toHaveCount(2);
		await expect(component.getByRole('link', { name: '2' })).toBeVisible();
		await expect(
			component.getByRole('link', { name: '1' })
		).toHaveAttribute('aria-current', 'page');

		await component.getByRole('link', { name: '2' }).click();
		expect(requestedPages).toEqual([2]);
	});

	test('should keep the requested page in composition mode', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination
				label="Composed"
				currentPage={2}
				onPageChange={(page: number) => {
					requestedPage = page;
					requestedPages.push(page);
				}}>
				<DBPaginationItem>
					<a href="#page-1">1</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2">2</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await expect(
			component.getByRole('button', { name: 'Previous page' })
		).toBeEnabled();
		await expect(
			component.getByRole('button', { name: 'Next page' })
		).toBeEnabled();

		await component.locator('li[data-page="1"] a').click();
		expect(requestedPages).toEqual([1]);

		await component.locator('li[data-page="2"] a').click();
		expect(requestedPages).toEqual([1]);
	});

	test('should treat a zero totalCount as the option API', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination currentPage={1} totalCount={0} pageSize={10} />
		);

		await expect(
			component.locator('li[data-page] > :is(a, button)')
		).toHaveCount(1);
		await expect(
			component.getByRole('button', { name: 'Page 1 of 1' })
		).toHaveAttribute('aria-current', 'page');
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

	test('should activate a composed child from previous and next', async ({
		mount
	}) => {
		const clicked: string[] = [];
		const component = await mount(
			<DBPagination
				label="Composed"
				currentPage={2}
				onPageChange={(page: number) => {
					requestedPages.push(page);
				}}>
				<DBPaginationItem>
					<a
						href="#page-1"
						aria-label="Page 1"
						onClick={() => clicked.push('1')}>
						1
					</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a
						href="#page-2"
						aria-label="Page 2"
						onClick={() => clicked.push('2')}>
						2
					</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a
						href="#page-3"
						aria-label="Page 3"
						onClick={() => clicked.push('3')}>
						3
					</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await component.getByRole('button', { name: 'Next page' }).click();
		expect(clicked).toEqual(['3']);
		expect(requestedPages).toEqual([3]);

		await component.getByRole('button', { name: 'Previous page' }).click();
		expect(clicked).toEqual(['3', '1']);
		expect(requestedPages).toEqual([3, 1]);
	});

	test('should report the page when no neighbour is rendered', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				label="Without siblings"
				currentPage={5}
				totalCount={100}
				pageSize={10}
				siblingCount={0}
				boundaryCount={0}
				onPageChange={(pageNumber: number) => {
					requestedPages.push(pageNumber);
				}}
			/>
		);

		await expect(component.locator('li[data-page]')).toHaveCount(1);

		await component.getByRole('button', { name: 'Next page' }).click();
		expect(requestedPages).toEqual([6]);

		await component.getByRole('button', { name: 'Previous page' }).click();
		expect(requestedPages).toEqual([6, 4]);
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

		await expect(
			component.locator('li[data-ellipsis*="wide-"]')
		).toHaveCount(2);
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

		await expect(
			component.locator('li[data-ellipsis*="wide-"]')
		).toHaveCount(0);
		await expect(
			component.locator('li[data-page] > :is(a, button)')
		).toHaveCount(5);
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

		await expect(
			component.locator('li[data-page] > :is(a, button)')
		).toHaveCount(1);
		expect(getShape(await readItems(component))).toBe('... 10 ...');
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

	test('should wire composed items up from their position', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination label="Composed" currentPage={2}>
				<DBPaginationItem>
					<a href="?page=1" aria-label="Page 1 of 3">
						1
					</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="?page=2" aria-label="Page 2 of 3">
						2
					</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="?page=3" aria-label="Page 3 of 3">
						3
					</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await expect(component.locator('li[data-page="1"]')).toBeVisible();
		await expect(component.locator('li[data-page="2"]')).toBeVisible();
		await expect(component.locator('li[data-page="3"]')).toBeVisible();
		await expect(
			component.getByRole('link', { name: 'Page 2 of 3' })
		).toHaveAttribute('aria-current', 'page');
		await expect(component.locator('[aria-current="page"]')).toHaveCount(1);
	});

	test('should not put several wide pages next to each other when collapsed', async ({
		mount
	}) => {
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

	test('should pin one page per end when boundaryCount asks for more', async ({
		mount
	}) => {
		const mountAt = async (currentPage: number) =>
			mount(
				<div style={{ inlineSize: '300px' }}>
					<DBPagination
						currentPage={currentPage}
						totalCount={200}
						pageSize={10}
						boundaryCount={2}
					/>
				</div>
			);

		const middle = await mountAt(17);
		expect(getShape(await readItems(middle))).toBe('1 ... 17 ... 20');

		const rows = await middle
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
		await middle.unmount();

		const beforeLast = await mountAt(19);
		expect(getShape(await readItems(beforeLast))).toBe('1 ... 19 20');
		await beforeLast.unmount();

		const last = await mountAt(20);
		expect(getShape(await readItems(last))).toBe('1 ... 20');
	});

	test('should add an ellipsis for a gap that only the collapsed layout has', async ({
		mount,
		page
	}) => {
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

		expect(getShape(await readItems(component))).toBe('1 2 3 4 5');
		await expect(
			component.locator('li[data-ellipsis*="wide-"]')
		).toHaveCount(0);
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

						const context = `boundaryCount ${boundaryCount}, siblingCount ${siblingCount}, page ${currentPage} of ${totalPages}`;

						await expect
							.poll(
								async () => {
									const snapshot = await readItems(component);
									const current = snapshot.find(
										(item) => item.current
									);
									return current !== undefined
										? Number(current.text)
										: 0;
								},
								{ message: context }
							)
							.toBe(currentPage);

						const items = await readItems(component);

						expectValidLayout(items, {
							totalPages,
							currentPage,
							boundaryCount,
							layout: 'wide',
							context: `wide layout: ${context}`
						});
						expectValidLayout(
							items.filter(
								(item) => item.attribute !== 'sibling'
							),
							{
								totalPages,
								currentPage,
								boundaryCount,
								layout: 'collapsed',
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
		const boxOf = (target: any) =>
			target.evaluate((element: HTMLElement) => {
				const { width, height } = element.getBoundingClientRect();
				return { width: Math.round(width), height: Math.round(height) };
			});

		// A page control carries no class of its own, so it is located through the
		// data-page on its list item; the arrows keep their own class.
		const controls = [
			['previous', '.db-pagination-previous'],
			['next', '.db-pagination-next'],
			['page', 'li[data-page] > :is(a, button)']
		];

		const medium = await mount(
			<DBPagination currentPage={5} totalCount={100} pageSize={10} />
		);
		for (const [name, selector] of controls) {
			expect(
				await boxOf(medium.locator(selector).first()),
				name + ' at medium'
			).toEqual({ width: 40, height: 40 });
		}
		await medium.unmount();

		const small = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				size="small"
			/>
		);
		for (const [name, selector] of controls) {
			expect(
				await boxOf(small.locator(selector).first()),
				name + ' at small'
			).toEqual({ width: 24, height: 24 });
		}
	});

	test('should size a composed anchor like the buttons', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination label="Linked" currentPage={1}>
				<DBPaginationItem>
					<a href="#page-1">1</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2">2</a>
				</DBPaginationItem>
			</DBPagination>
		);

		const box = async (selector: string) =>
			component
				.locator(selector)
				.first()
				.evaluate((element: HTMLElement) => {
					const { width, height } = element.getBoundingClientRect();
					return {
						width: Math.round(width),
						height: Math.round(height)
					};
				});

		expect(await box('li[data-page="1"] a')).toEqual(
			await box('button.db-pagination-previous')
		);
	});
};

const testTouchTargets = () => {
	test('should keep a pointer target of at least 24 pixels', async ({
		mount,
		page
	}) => {
		const component = await mount(
			<DBPagination
				currentPage={5}
				totalCount={100}
				pageSize={10}
				size="small"
			/>
		);

		const item = await component
			.locator('li[data-pagination-item="page"]')
			.first()
			.evaluate((element: HTMLElement) => {
				const style = window.getComputedStyle(
					element.firstElementChild as HTMLElement,
					'::after'
				);
				return {
					minInlineSize: Number.parseFloat(style.minInlineSize),
					minBlockSize: Number.parseFloat(style.minBlockSize)
				};
			});

		expect(
			item.minInlineSize,
			'page item is at least 24px wide'
		).toBeGreaterThanOrEqual(24);
		expect(
			item.minBlockSize,
			'page item is at least 24px high'
		).toBeGreaterThanOrEqual(24);

		for (const selector of [
			'.db-pagination-previous',
			'.db-pagination-next'
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

		await page.evaluate(() => {
			document.documentElement.style.fontSize = '12px';
		});

		const lowered = await component
			.locator('li[data-pagination-item="page"]')
			.first()
			.evaluate((element: HTMLElement) => {
				const style = window.getComputedStyle(
					element.firstElementChild as HTMLElement,
					'::after'
				);
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
		const component = await mount(
			<DBPagination
				currentPage={3}
				totalCount={50}
				pageSize={10}
				size="small"
			/>
		);

		const measurements = await component
			.locator('li[data-page] > :is(a, button)')
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

const testComposedLinks = () => {
	test('should number composed links and keep them working', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				label="Linked"
				currentPage={2}
				onPageChange={(requested: number) =>
					(requestedPage = requested)
				}>
				<DBPaginationItem>
					<a href="#page-1">Go to the first page</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2">Go to the second page</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-3">Go to the third page</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await expect(component.locator('a[href="#page-1"]')).toBeVisible();
		await expect(component.locator('li[data-page="3"] a')).toHaveAttribute(
			'href',
			'#page-3'
		);

		const second = component.getByRole('link', {
			name: 'Go to the second page'
		});
		await expect(second).toHaveText('2');
		await expect(second).toHaveAttribute('aria-current', 'page');

		await component.locator('li[data-page="3"] a').click();
		expect(requestedPage).toBe(3);
	});

	test('should keep a consumer aria-label on a composed link', async ({
		mount
	}) => {
		const component = await mount(
			<DBPagination label="Linked" currentPage={1}>
				<DBPaginationItem>
					<a href="#page-1" aria-label="First results page">
						1
					</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2" aria-label="Second results page">
						2
					</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await expect(
			component.getByRole('link', { name: 'First results page' })
		).toBeVisible();
	});

	test('should ignore a modified click on a composed link', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				label="Linked"
				currentPage={1}
				onPageChange={(requested: number) =>
					(requestedPage = requested)
				}>
				<DBPaginationItem>
					<a href="#page-1">1</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2">2</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await page.evaluate(() => {
			document.addEventListener('click', (event: MouseEvent) => {
				event.preventDefault();
			});
		});

		await component
			.locator('li[data-page="2"] a')
			.click({ modifiers: ['ControlOrMeta'] });
		expect(
			requestedPage,
			'a ctrl/cmd click reports nothing'
		).toBeUndefined();

		await component.locator('li[data-page="2"] a').click();
		expect(requestedPage).toBe(2);
	});

	test('should not navigate when the current page link is clicked', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				label="Linked"
				currentPage={2}
				onPageChange={(requested: number) =>
					(requestedPage = requested)
				}>
				<DBPaginationItem>
					<a href="#page-1">1</a>
				</DBPaginationItem>
				<DBPaginationItem>
					<a href="#page-2">2</a>
				</DBPaginationItem>
			</DBPagination>
		);

		await page.evaluate(() => {
			(window as any).__paginationDefaultPrevented = undefined;
			document.addEventListener(
				'click',
				(event: MouseEvent) => {
					(window as any).__paginationDefaultPrevented =
						event.defaultPrevented;
				},
				{ once: true }
			);
		});

		await component.locator('li[data-page="2"] a').click();

		const defaultPrevented = await page.evaluate(
			() => (window as any).__paginationDefaultPrevented
		);

		expect(
			defaultPrevented,
			'a click on the current page is prevented'
		).toBe(true);
		expect(
			requestedPage,
			'the current page reports no change'
		).toBeUndefined();
	});

	test('should disable a single page through the items API', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DESKTOP_VIEWPORT);
		const component = await mount(
			<DBPagination
				label="With items"
				currentPage={1}
				items={[{}, { disabled: true }, {}]}
				onPageChange={(requested: number) =>
					(requestedPage = requested)
				}
			/>
		);

		const secondPage = component.locator('li[data-page="2"] button');
		await expect(secondPage).toHaveAttribute('aria-disabled', 'true');

		await secondPage.click({ force: true });
		expect(requestedPage).toBeUndefined();

		await component.locator('li[data-page="3"] button').click();
		expect(requestedPage).toBe(3);
	});
};

const expectValidLayout = (
	items: PaginationItemSnapshot[],
	setup: {
		totalPages: number;
		currentPage: number;
		boundaryCount: number;
		layout: 'wide' | 'collapsed';
		context: string;
	}
) => {
	const { totalPages, currentPage, boundaryCount, layout, context } = setup;
	const hasBefore = (item: PaginationItemSnapshot): boolean =>
		item.ellipsis.includes(`${layout}-before`);
	const hasAfter = (item: PaginationItemSnapshot): boolean =>
		item.ellipsis.includes(`${layout}-after`);
	const pages = items.map((item) => Number(item.text));

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

	const pinnedCount =
		layout === 'collapsed' ? Math.min(boundaryCount, 1) : boundaryCount;
	const pinnedPages = Array.from(
		{ length: Math.min(pinnedCount, totalPages) },
		(_, index: number) => [index + 1, totalPages - index]
	).flat();
	pinnedPages.forEach((page) => {
		expect(pages, `${context}: keeps the pinned page ${page}`).toContain(
			page
		);
	});

	if (layout === 'collapsed') {
		expect(
			pages.length,
			`${context}: renders at most five pages`
		).toBeLessThanOrEqual(5);
	}

	let previousPage = 0;
	let previousHadTrailingMarker = false;
	items.forEach((item) => {
		const page = Number(item.text);
		const gap = page - previousPage - 1;
		const markedGap = hasBefore(item) || previousHadTrailingMarker;

		expect(
			hasBefore(item) && previousHadTrailingMarker,
			`${context}: page ${page} is separated by two markers at once`
		).toBe(false);

		if (gap > 0) {
			expect(
				markedGap,
				`${context}: the gap before page ${page} is marked`
			).toBe(true);
			const minimumHiddenPages =
				boundaryCount === 0 && previousPage === 0 ? 1 : 2;
			expect(
				gap,
				`${context}: the marker before page ${page} stands in for enough pages`
			).toBeGreaterThanOrEqual(minimumHiddenPages);
		} else {
			expect(
				markedGap,
				`${context}: no marker between the consecutive pages ${previousPage} and ${page}`
			).toBe(false);
		}

		previousPage = page;
		previousHadTrailingMarker = hasAfter(item);
	});

	if (previousHadTrailingMarker) {
		const hiddenPages = totalPages - previousPage;
		const minimumHiddenPages = boundaryCount === 0 ? 1 : 2;
		expect(
			hiddenPages,
			`${context}: the trailing marker stands in for enough pages`
		).toBeGreaterThanOrEqual(minimumHiddenPages);
	} else {
		expect(
			previousPage,
			`${context}: the list ends on the last page or a marker`
		).toBe(totalPages);
	}
};

const testA11y = () => {
	test('should let a passed aria-label win over the label prop', async ({
		mount
	}) => {
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
	testComposedLinks();
	testA11y();
});
