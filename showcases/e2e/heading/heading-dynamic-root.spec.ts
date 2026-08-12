import { expect, test } from '@playwright/test';
import { isAngular, isStencil, waitForDBPage } from '../default.ts';

const showcase = process.env.showcase ?? '';
const canTestDynamicRoot = isAngular(showcase) || isStencil(showcase);

test.describe('DBHeading dynamic root', () => {
	test.skip(
		!canTestDynamicRoot,
		'Only Angular and Stencil replace the native root.'
	);

	test('preserves forwarded attributes after changing from h1 to h6', async ({
		page
	}) => {
		await page.goto('./#/04/heading', { waitUntil: 'domcontentloaded' });
		await waitForDBPage(page);

		let fixture = page.locator('#heading-dynamic-root-fixture');
		if (isStencil(showcase)) {
			await page.locator('main').evaluate((main) => {
				const fixtureElement = main.ownerDocument.createElement('div');
				fixtureElement.id = 'heading-dynamic-root-fixture';
				fixtureElement.innerHTML = `
					<db-heading
						as="h1"
						aria-label="Dynamic accessible name"
						class="dynamic-heading-class"
						data-forwarded="before-switch"
						style="text-transform: uppercase">
						Dynamic heading
					</db-heading>
				`;
				main.append(fixtureElement);
			});
			fixture = page.locator('#heading-dynamic-root-fixture');
			await expect(fixture.locator('db-heading')).toHaveClass(/hydrated/);
		}

		const host = fixture.locator('db-heading');
		await expect(host.locator('h1')).toHaveCount(1);

		if (isAngular(showcase)) {
			await fixture.locator('button').evaluate((button) => {
				(button as HTMLButtonElement).click();
			});
		} else {
			await host.evaluate((element) => {
				(element as HTMLElement & { as: string }).as = 'h6';
			});
		}

		const heading = host.locator('h6');
		await expect(heading).toHaveCount(1);
		await expect(heading).toHaveAttribute(
			'aria-label',
			'Dynamic accessible name'
		);
		await expect(heading).toHaveAttribute(
			'data-forwarded',
			'before-switch'
		);
		await expect(heading).toHaveClass(/dynamic-heading-class/);
		await expect(heading).toHaveAttribute(
			'style',
			/text-transform:\s*uppercase/
		);

		await host.evaluate((element) => {
			(element as HTMLElement).dataset.afterSwitch = 'current-root';
		});
		await expect(heading).toHaveAttribute(
			'data-after-switch',
			'current-root'
		);
	});
});
