import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBPagination } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

let requestedPage: number | undefined;

const comp: any = (
	<DBPagination
		label="Results pages"
		currentPage={5}
		totalCount={100}
		pageSize={10}
		onPageChange={(page: number) => (requestedPage = page)}
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
	});

	test('should request a page without changing controlled state', async ({
		mount
	}) => {
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

const testA11y = () => {
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
	testA11y();
});
