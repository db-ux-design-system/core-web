import { expect, test, type Locator } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '05/pagination';

const DESKTOP_VIEWPORT = { width: 1920, height: 1280 };

/**
 Renders the visible page/ellipsis sequence of a pagination instance, mirroring
 the `getShape` helper from the removed component test. Ellipsis markers are
 pseudo-elements, so they are read from the computed `content` of the item that
 borders the gap.
 */
const getShape = async (pagination: Locator): Promise<string> =>
	pagination.locator('li[data-pagination-item]').evaluateAll((items) => {
		const tokens: string[] = [];
		for (const item of items) {
			if (getComputedStyle(item).display === 'none') {
				continue;
			}

			const hasMarker = (pseudo: string): boolean => {
				const { content } = getComputedStyle(item, pseudo);
				return content !== 'none' && content !== 'normal';
			};

			if (hasMarker('::before')) {
				tokens.push('...');
			}

			tokens.push(item.textContent?.trim() ?? '');

			if (hasMarker('::after')) {
				tokens.push('...');
			}
		}

		return tokens.join(' ');
	});

test.describe('DBPagination', () => {
	runInteractionTest({
		title: 'should render a semantic navigation with the current page',
		path,
		example: 'Interaction',
		async run({ content }) {
			const pagination = content
				.getByTestId('default-pagination')
				.locator('.db-pagination');

			await expect(pagination).toHaveAttribute(
				'aria-label',
				'Results pages'
			);
			await expect(
				pagination.getByRole('button', { name: 'Page 5 of 10' })
			).toHaveAttribute('aria-current', 'page');
		}
	});

	runInteractionTest({
		title: 'should report a page change when a page button is activated',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('default-pagination');
			await scope.getByRole('button', { name: 'Page 1 of 10' }).click();

			await expect(scope.getByTestId('default-readout')).toHaveText(
				'requested: 1'
			);
		}
	});

	runInteractionTest({
		title: 'should request the previous and next pages',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('default-pagination');

			await scope.getByRole('button', { name: 'Previous page' }).click();
			await expect(scope.getByTestId('default-readout')).toHaveText(
				'requested: 4'
			);

			await scope.getByRole('button', { name: 'Next page' }).click();
			await expect(scope.getByTestId('default-readout')).toHaveText(
				'requested: 6'
			);
		}
	});

	runInteractionTest({
		title: 'should ignore a click on the decorative ellipsis',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const scope = content.getByTestId('default-pagination');
			const readout = scope.getByTestId('default-readout');

			const ellipsisItem = scope
				.locator('li[data-ellipsis*="wide-"]')
				.first();
			await expect(ellipsisItem).toBeVisible();

			// The ellipsis is a pseudo-element, so a click on it targets the li.
			await ellipsisItem.evaluate((item: HTMLElement) => {
				item.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			});
			await expect(readout).toHaveText('requested: 0');

			const ellipsisPage = Number(
				await ellipsisItem.getAttribute('data-page')
			);
			await ellipsisItem.locator('button').click();
			await expect(readout).toHaveText(`requested: ${ellipsisPage}`);
		}
	});

	runInteractionTest({
		title: 'should truncate large page ranges',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const pagination = content
				.getByTestId('default-pagination')
				.locator('.db-pagination');

			await expect(
				pagination.locator('li[data-ellipsis*="wide-"]')
			).toHaveCount(2);
			await expect(
				pagination.getByRole('button', { name: 'Page 1 of 10' })
			).toBeVisible();
			await expect(
				pagination.getByRole('button', { name: 'Page 10 of 10' })
			).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should keep the current page marked in the collapsed layout',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize({ width: 390, height: 884 });
			const pagination = content
				.getByTestId('default-pagination')
				.locator('.db-pagination');

			const currentButton = pagination.getByRole('button', {
				name: 'Page 5 of 10'
			});
			await expect(currentButton).toBeVisible();
			await expect(currentButton).toHaveAttribute('aria-current', 'page');
			await expect(
				pagination.getByRole('button', { name: 'Page 4 of 10' })
			).toBeHidden();
		}
	});

	runInteractionTest({
		title: 'should disable previous on the first page',
		path,
		example: 'Interaction',
		async run({ content }) {
			const pagination = content
				.getByTestId('first-pagination')
				.locator('.db-pagination');

			await expect(
				pagination.getByRole('button', { name: 'Previous page' })
			).toBeDisabled();
			await expect(
				pagination.getByRole('button', { name: 'Next page' })
			).toBeEnabled();
		}
	});

	runInteractionTest({
		title: 'should disable next on the last page',
		path,
		example: 'Interaction',
		async run({ content }) {
			const pagination = content
				.getByTestId('last-pagination')
				.locator('.db-pagination');

			await expect(
				pagination.getByRole('button', { name: 'Previous page' })
			).toBeEnabled();
			await expect(
				pagination.getByRole('button', { name: 'Next page' })
			).toBeDisabled();
		}
	});

	runInteractionTest({
		title: 'should honor siblingCount and boundaryCount',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const pagination = content
				.getByTestId('sibling-boundary-pagination')
				.locator('.db-pagination');

			await expect(
				pagination.locator('li[data-page] > :is(a, button)')
			).toHaveCount(1);
			expect(await getShape(pagination)).toBe('... 10 ...');
			await expect(
				pagination.getByRole('button', { name: 'Page 10 of 20' })
			).toHaveAttribute('aria-current', 'page');
		}
	});

	runInteractionTest({
		title: 'should support small size and localized labels',
		path,
		example: 'Interaction',
		async run({ content }) {
			const pagination = content
				.getByTestId('small-pagination')
				.locator('.db-pagination');

			await expect(pagination).toHaveAttribute('data-size', 'small');
			await expect(
				pagination.getByRole('button', { name: 'Result page 2 of 3' })
			).toHaveAttribute('aria-current', 'page');
			await expect(
				pagination.getByRole('button', { name: 'Go to previous page' })
			).toBeVisible();
			await expect(
				pagination.getByRole('button', { name: 'Go to next page' })
			).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should number composed links and report the requested page',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const scope = content.getByTestId('composed-pagination');
			const pagination = scope.locator('.db-pagination');

			const current = pagination.getByRole('link', { name: 'Page 2' });
			await expect(current).toHaveText('2');
			await expect(current).toHaveAttribute('aria-current', 'page');

			await pagination.locator('li[data-page="3"] a').click();
			await expect(scope.getByTestId('composed-readout')).toHaveText(
				'composed requested: 3'
			);
		}
	});

	runInteractionTest({
		title: 'should not navigate when the current page link is clicked',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const scope = content.getByTestId('composed-pagination');
			const currentLink = scope.locator(
				'.db-pagination li[data-page="2"] a'
			);

			// The click on the current page must be prevented, so the browser
			// neither follows the href (the location hash stays put) nor does
			// the pagination report a change.
			const hashBefore = await page.evaluate(
				// eslint-disable-next-line unicorn/isolated-functions -- location is available in browser context
				() => location.hash
			);
			await currentLink.click();

			await expect(scope.getByTestId('composed-readout')).toHaveText(
				'composed requested: 0'
			);
			const hashAfter = await page.evaluate(
				// eslint-disable-next-line unicorn/isolated-functions -- location is available in browser context
				() => location.hash
			);
			expect(hashAfter).toBe(hashBefore);
		}
	});

	runInteractionTest({
		title: 'should disable a single page through the items API',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const scope = content.getByTestId('items-pagination');
			const pagination = scope.locator('.db-pagination');

			const secondPage = pagination.locator('li[data-page="2"] button');
			await expect(secondPage).toHaveAttribute('aria-disabled', 'true');

			await secondPage.click({ force: true });
			await expect(scope.getByTestId('items-readout')).toHaveText(
				'items requested: 0'
			);

			await pagination.locator('li[data-page="3"] button').click();
			await expect(scope.getByTestId('items-readout')).toHaveText(
				'items requested: 3'
			);
		}
	});

	runInteractionTest({
		title: 'should skip a disabled page with the step controls',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const scope = content.getByTestId('items-pagination');
			const pagination = scope.locator('.db-pagination');

			const next = pagination.getByRole('button', { name: 'Next page' });
			await expect(next).toBeEnabled();

			await next.click();
			// Next skips the disabled page 2 and reports page 3.
			await expect(scope.getByTestId('items-readout')).toHaveText(
				'items requested: 3'
			);
		}
	});
});
