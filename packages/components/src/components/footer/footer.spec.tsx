import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBFooterContent } from '../footer-content';
import { DBFooterMeta } from '../footer-meta';
import { DBLink } from '../link';
import { DBFooter } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBFooter>
		<DBFooterContent>
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
		</DBFooterContent>
		<DBFooterMeta copyright="© Example Company">
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
		</DBFooterMeta>
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
				<DBFooter width={width}>
					<DBFooterContent>Content</DBFooterContent>
					<DBFooterMeta>Meta</DBFooterMeta>
				</DBFooter>
			);
			await expect(component).toHaveAttribute('data-width', width);
			const footerWidth = await component.evaluate(
				(element) => element.getBoundingClientRect().width
			);
			for (const area of ['.db-footer-content', '.db-footer-meta']) {
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
				<DBFooter>
					<DBFooterContent>Footer content</DBFooterContent>
					<DBFooterMeta>Meta content</DBFooterMeta>
				</DBFooter>
			</div>
		);
		const footer = pageComponent.locator('.db-footer');
		await expect(footer).toHaveCSS('flex-direction', 'column');

		const layout = await footer.evaluate((element) => {
			const content = element.querySelector('.db-footer-content');
			const meta = element.querySelector('.db-footer-meta');
			if (!content || !meta) return undefined;

			const footerRect = element.getBoundingClientRect();
			const contentRect = content.getBoundingClientRect();
			const metaRect = meta.getBoundingClientRect();
			return {
				footerWidth: footerRect.width,
				contentWidth: contentRect.width,
				metaWidth: metaRect.width,
				contentBottom: contentRect.bottom,
				metaTop: metaRect.top
			};
		});
		expect(layout).toBeDefined();
		expect(layout?.contentWidth).toBeCloseTo(layout?.footerWidth ?? 0, 1);
		expect(layout?.metaWidth).toBeCloseTo(layout?.footerWidth ?? 0, 1);
		expect(layout?.metaTop).toBeGreaterThanOrEqual(
			layout?.contentBottom ?? 0
		);
	});

	test('should render only explicitly composed areas', async ({ mount }) => {
		const contentOnly = await mount(
			<DBFooter>
				<DBFooterContent>Content</DBFooterContent>
			</DBFooter>
		);
		await expect(contentOnly.locator('.db-footer-content')).toHaveCount(1);
		await expect(contentOnly.locator('.db-footer-meta')).toHaveCount(0);
		await contentOnly.unmount();

		const metaOnly = await mount(
			<DBFooter>
				<DBFooterMeta>Meta</DBFooterMeta>
			</DBFooter>
		);
		await expect(metaOnly.locator('.db-footer-content')).toHaveCount(0);
		await expect(metaOnly.locator('.db-footer-meta')).toHaveCount(1);
	});

	test('should render copyright only when provided', async ({ mount }) => {
		const withoutCopyright = await mount(
			<DBFooter>
				<DBFooterMeta>Meta</DBFooterMeta>
			</DBFooter>
		);
		await expect(
			withoutCopyright.locator('.db-footer-copyright')
		).toHaveCount(0);
		await withoutCopyright.unmount();

		const withCopyright = await mount(
			<DBFooter>
				<DBFooterMeta copyright="© Example Company">Meta</DBFooterMeta>
			</DBFooter>
		);
		await expect(withCopyright.locator('.db-footer-copyright')).toHaveText(
			'© Example Company'
		);
	});

	test('should use id and propOverrides.id fallback', async ({ mount }) => {
		const withId = await mount(
			<DBFooter id="footer-id" propOverrides={{ id: 'fallback-id' }}>
				<DBFooterContent>Content</DBFooterContent>
			</DBFooter>
		);
		await expect(withId).toHaveAttribute('id', 'footer-id');
		await withId.unmount();

		const withFallback = await mount(
			<DBFooter propOverrides={{ id: 'fallback-id' }}>
				<DBFooterContent>Content</DBFooterContent>
			</DBFooter>
		);
		await expect(withFallback).toHaveAttribute('id', 'fallback-id');
	});

	test('should add a custom class', async ({ mount }) => {
		const component = await mount(
			<DBFooter className="custom-footer" class="custom-footer">
				<DBFooterContent>Content</DBFooterContent>
			</DBFooter>
		);
		await expect(component).toHaveClass(/custom-footer/);
	});

	test('should wrap DBLink labels without horizontal overflow', async ({
		mount,
		page
	}) => {
		await page.setViewportSize({ width: 320, height: 640 });
		const component = await mount(
			<DBFooter>
				<DBFooterContent>
					<nav aria-label="Footer navigation">
						<ul>
							<li>
								<DBLink wrap href="#services">
									Services for passengers and commuters
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Legal navigation">
						<ul>
							<li>
								<DBLink wrap href="#passenger-rights">
									Passenger rights and conditions of carriage
								</DBLink>
							</li>
							<li>
								<DBLink wrap href="#privacy">
									Privacy policy and accessibility statement
								</DBLink>
							</li>
							<li>
								<DBLink wrap href="#imprint">
									Imprint and legal information
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
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
