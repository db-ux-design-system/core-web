import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBFooter } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBFooter
		main={<div>Footer Navigation Content</div>}
		meta={<div>Legal Links</div>}
	/>
);

const compNoCopyright: any = (
	<DBFooter
		showCopyright={false}
		main={<div>Footer Content</div>}
		meta={<div>Links</div>}
	/>
);

const compOnlyMeta: any = (
	<DBFooter showMain={false} meta={<div>Meta Links Only</div>} />
);

const compEmpty: any = <DBFooter showMain={false} showMeta={false} />;

const compWithWidth: any = (
	<DBFooter
		width="full"
		main={<div>Full Width Content</div>}
		meta={<div>Meta Links</div>}
	/>
);

const compWithClassName: any = (
	<DBFooter
		className="custom-footer"
		main={<div>Custom Footer</div>}
		meta={<div>Meta</div>}
	/>
);

const testComponent = () => {
	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	test('should match screenshot without copyright', async ({ mount }) => {
		const component = await mount(compNoCopyright);
		await expect(component).toHaveScreenshot();
	});

	test('should match screenshot with only meta section', async ({
		mount
	}) => {
		const component = await mount(compOnlyMeta);
		await expect(component).toHaveScreenshot();
	});

	test('should match screenshot with all sections hidden', async ({
		mount
	}) => {
		const component = await mount(compEmpty);
		await expect(component).toHaveScreenshot();
	});

	test('should match screenshot with full width', async ({ mount }) => {
		const component = await mount(compWithWidth);
		await expect(component).toHaveScreenshot();
	});

	test('should match screenshot with custom className', async ({ mount }) => {
		const component = await mount(compWithClassName);
		await expect(component).toHaveScreenshot();
	});
};

const testA11y = () => {
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
