import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBFooter } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBFooter
		meta={
			<nav aria-label="Legal navigation">
				<ul>
					<li>
						<a href="#privacy">Privacy</a>
					</li>
					<li>
						<a href="#imprint">Imprint</a>
					</li>
				</ul>
			</nav>
		}>
		{/*<template v-slot:meta>
			<nav aria-label="Legal navigation">
				<ul>
					<li><a href="#privacy">Privacy</a></li>
					<li><a href="#imprint">Imprint</a></li>
				</ul>
			</nav>
		</template>*/}
		<nav aria-label="Footer navigation">
			<ul>
				<li>
					<a href="#about">About us</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	</DBFooter>
);

const testComponent = () => {
	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	const maxWidths = {
		full: Number.POSITIVE_INFINITY,
		large: 1440,
		medium: 1024,
		small: 768
	};
	for (const width of ['full', 'large', 'medium', 'small'] as const) {
		test(`should constrain only inner content for width=${width}`, async ({
			mount,
			page
		}) => {
			await page.setViewportSize({ width: 1600, height: 900 });
			const component = await mount(
				<DBFooter width={width}>Content</DBFooter>
			);
			await expect(component).toHaveAttribute('data-width', width);
			const footerWidth = await component.evaluate(
				(element) => element.getBoundingClientRect().width
			);
			for (const area of ['.db-footer-main', '.db-footer-meta']) {
				const areaLocator = component.locator(area);
				const areaWidth = await areaLocator.evaluate(
					(element) => element.getBoundingClientRect().width
				);
				expect(areaWidth).toBeCloseTo(footerWidth, 1);

				const measurement = await areaLocator
					.locator('.db-footer-content-container')
					.evaluate((element) => {
						const parent = element.parentElement;
						if (!parent) {
							return { availableWidth: 0, contentWidth: 0 };
						}

						const parentStyle = globalThis.getComputedStyle(parent);
						return {
							availableWidth:
								parent.clientWidth -
								Number.parseFloat(
									parentStyle.paddingInlineStart
								) -
								Number.parseFloat(parentStyle.paddingInlineEnd),
							contentWidth: element.getBoundingClientRect().width
						};
					});
				const expectedWidth = Math.min(
					measurement.availableWidth,
					maxWidths[width]
				);
				expect(measurement.contentWidth).toBeCloseTo(expectedWidth, 1);
			}
		});
	}

	test('should stack full-width areas in a fixed DBPage', async ({
		mount
	}) => {
		const pageComponent = await mount(
			<div className="db-page" data-variant="fixed">
				<main className="db-main">Page content</main>
				<DBFooter>Footer content</DBFooter>
			</div>
		);
		const footer = pageComponent.locator('.db-footer');
		await expect(footer).toHaveCSS('flex-direction', 'column');

		const layout = await footer.evaluate((element) => {
			const main = element.querySelector('.db-footer-main');
			const meta = element.querySelector('.db-footer-meta');
			if (!main || !meta) {
				return undefined;
			}

			const footerRect = element.getBoundingClientRect();
			const mainRect = main.getBoundingClientRect();
			const metaRect = meta.getBoundingClientRect();
			return {
				footerWidth: footerRect.width,
				mainWidth: mainRect.width,
				metaWidth: metaRect.width,
				mainBottom: mainRect.bottom,
				metaTop: metaRect.top
			};
		});
		expect(layout).toBeDefined();
		expect(layout?.mainWidth).toBeCloseTo(layout?.footerWidth ?? 0, 1);
		expect(layout?.metaWidth).toBeCloseTo(layout?.footerWidth ?? 0, 1);
		expect(layout?.metaTop).toBeGreaterThanOrEqual(layout?.mainBottom ?? 0);
	});

	test('should hide each optional part for boolean values', async ({
		mount
	}) => {
		const component = await mount(
			<DBFooter showMain={false} showCopyright={false}>
				Content
			</DBFooter>
		);
		await expect(component.locator('.db-footer-main')).toHaveCount(0);
		await expect(component.locator('.db-footer-meta')).toHaveCount(1);
		await expect(component.locator('.db-footer-copyright')).toHaveCount(0);
		await component.unmount();

		const withoutMeta = await mount(
			<DBFooter showMeta={false}>Content</DBFooter>
		);
		await expect(withoutMeta.locator('.db-footer-meta')).toHaveCount(0);
	});

	test('should hide each optional part for boolean strings', async ({
		mount
	}) => {
		const component = await mount(
			<DBFooter showMain="false" showCopyright="false">
				Content
			</DBFooter>
		);
		await expect(component.locator('.db-footer-main')).toHaveCount(0);
		await expect(component.locator('.db-footer-copyright')).toHaveCount(0);
		await component.unmount();

		const withoutMeta = await mount(
			<DBFooter showMeta="false">Content</DBFooter>
		);
		await expect(withoutMeta.locator('.db-footer-meta')).toHaveCount(0);
	});

	test('should use id and propOverrides.id fallback', async ({ mount }) => {
		const withId = await mount(
			<DBFooter id="footer-id" propOverrides={{ id: 'fallback-id' }}>
				Content
			</DBFooter>
		);
		await expect(withId).toHaveAttribute('id', 'footer-id');
		await withId.unmount();

		const withFallback = await mount(
			<DBFooter propOverrides={{ id: 'fallback-id' }}>Content</DBFooter>
		);
		await expect(withFallback).toHaveAttribute('id', 'fallback-id');
	});

	test('should add a custom class', async ({ mount }) => {
		const component = await mount(
			<DBFooter className="custom-footer" class="custom-footer">
				Content
			</DBFooter>
		);
		await expect(component).toHaveClass(/custom-footer/);
	});

	test('should wrap realistic content without horizontal overflow', async ({
		mount,
		page
	}) => {
		await page.setViewportSize({ width: 320, height: 640 });
		const component = await mount(
			<DBFooter
				meta={
					<nav aria-label="Legal navigation">
						<ul>
							<li>
								<a href="#passenger-rights">
									Passenger rights and conditions of carriage
								</a>
							</li>
							<li>
								<a href="#privacy">
									Privacy policy and accessibility statement
								</a>
							</li>
							<li>
								<a href="#imprint">
									Imprint and legal information
								</a>
							</li>
						</ul>
					</nav>
				}>
				{/*<template v-slot:meta>
					<nav aria-label="Legal navigation">
						<ul>
							<li>
								<a href="#passenger-rights">
									Passenger rights and conditions of carriage
								</a>
							</li>
							<li>
								<a href="#privacy">
									Privacy policy and accessibility statement
								</a>
							</li>
							<li>
								<a href="#imprint">
									Imprint and legal information
								</a>
							</li>
						</ul>
					</nav>
				</template>*/}
				<nav aria-label="Footer navigation">
					<ul>
						<li>
							<a href="#services">
								Services for passengers and commuters
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
		);
		expect(
			await component.evaluate(
				(element) => element.scrollWidth <= element.clientWidth
			)
		).toBe(true);
		expect(
			await page.evaluate(
				() =>
					document.documentElement.scrollWidth <=
					document.documentElement.clientWidth
			)
		).toBe(true);

		const legalNavigation = component.getByRole('navigation', {
			name: 'Legal navigation'
		});
		const legalNavigationHeight = await legalNavigation.evaluate(
			(element) => element.getBoundingClientRect().height
		);
		const firstLegalLinkHeight = await legalNavigation
			.getByRole('link')
			.first()
			.evaluate((element) => element.getBoundingClientRect().height);
		expect(legalNavigationHeight).toBeGreaterThan(firstLegalLinkHeight * 2);
	});
};
const testA11y = () => {
	test('should remain a contentinfo landmark', async ({ mount, page }) => {
		await mount(comp);
		await expect(page.getByRole('contentinfo')).toHaveCount(1);
	});

	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});

	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-footer')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBFooter', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
