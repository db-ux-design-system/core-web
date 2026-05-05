import { expect, test } from '@playwright/test';

test.describe('Color Scheme', () => {
	test('should default to "light dark" when no meta tag is present', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		const colorScheme = await page.evaluate(() =>
			getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).toBe('light dark');
	});

	test('should not override meta[name="color-scheme" content="dark"] with "light dark"', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			const meta = document.createElement('meta');
			meta.name = 'color-scheme';
			meta.content = 'dark';
			document.head.appendChild(meta);
		});
		const colorScheme = await page.evaluate(() =>
			getComputedStyle(document.documentElement).colorScheme
		);
		// When meta tag is present, --db-color-scheme has no fallback, so the CSS variable
		// resolves to its initial value (normal) and does not override the meta tag.
		expect(colorScheme).not.toBe('light dark');
	});

	test('should not override meta[name="color-scheme" content="light"] with "light dark"', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			const meta = document.createElement('meta');
			meta.name = 'color-scheme';
			meta.content = 'light';
			document.head.appendChild(meta);
		});
		const colorScheme = await page.evaluate(() =>
			getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).not.toBe('light dark');
	});

	test('should use --db-color-scheme CSS custom property when set', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			document.documentElement.style.setProperty('--db-color-scheme', 'dark');
		});
		const colorScheme = await page.evaluate(() =>
			getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).toBe('dark');
	});

	test('should use --db-color-scheme CSS custom property when meta tag is also present', async ({
		page
	}) => {
		await page.goto(`dev/color-scheme.html`);
		await page.evaluate(() => {
			const meta = document.createElement('meta');
			meta.name = 'color-scheme';
			meta.content = 'light';
			document.head.appendChild(meta);
			document.documentElement.style.setProperty('--db-color-scheme', 'dark');
		});
		const colorScheme = await page.evaluate(() =>
			getComputedStyle(document.documentElement).colorScheme
		);
		expect(colorScheme).toBe('dark');
	});
});
