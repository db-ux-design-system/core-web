import { expect, test } from '@playwright/test';

test.describe('Color Scheme', () => {
	test('should default to "light dark" when no meta tag is present', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			document.querySelector('meta[name="color-scheme"]').remove();
		});
		const colorScheme = await page.evaluate(
			() => getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).toBe('light dark');
	});

	test('should not override meta[name="color-scheme" content="dark"] with "light dark"', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			document.querySelector('meta[name="color-scheme"]').content =
				'dark';
		});
		const colorScheme = await page.evaluate(
			() => getComputedStyle(document.documentElement).colorScheme
		);
		// When meta tag is present, --db-color-scheme has no fallback value, so the CSS
		// variable resolves to the initial value ("normal"), meaning the CSS rule no longer
		// forces "light dark" and the meta tag is free to control the browser's color scheme.
		expect(colorScheme).toBe('normal');
	});

	test('should not override meta[name="color-scheme" content="light"] with "light dark"', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			document.querySelector('meta[name="color-scheme"]').content =
				'light';
		});
		const colorScheme = await page.evaluate(
			() => getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).toBe('normal');
	});

	test('should use --db-color-scheme CSS custom property when set', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			document.querySelector('meta[name="color-scheme"]').remove();
			document.documentElement.style.setProperty(
				'--db-color-scheme',
				'dark'
			);
		});
		const colorScheme = await page.evaluate(
			() => getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).toBe('dark');
	});

	test('should use --db-color-scheme CSS custom property when meta tag is also present', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			document.querySelector('meta[name="color-scheme"]').content =
				'light';
			document.documentElement.style.setProperty(
				'--db-color-scheme',
				'dark'
			);
		});
		const colorScheme = await page.evaluate(
			() => getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).toBe('dark');
	});
});
