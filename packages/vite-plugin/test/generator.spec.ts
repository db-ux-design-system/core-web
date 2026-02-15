import { describe, expect, it } from 'vitest';
import { generateCSS } from '../src/generator.js';

describe('generateCSS', () => {
	it('should include default theme when no theme is detected', () => {
		const css = generateCSS({
			components: [],
			exclude: [],
			foundations: [],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: false,
			icons: false
		});

		// Should include either default theme or detected theme
		const hasDefaultTheme = css.includes(
			'@db-ux/core-foundations/build/styles/defaults/default-theme.css'
		);
		const hasDbTheme = css.includes(
			'@db-ux/db-theme/build/styles/rollup.css'
		);
		expect(hasDefaultTheme || hasDbTheme).toBe(true);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-required.css'
		);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-root.css'
		);
	});

	it('should include icons when enabled', () => {
		const css = generateCSS({
			components: [],
			exclude: [],
			foundations: [],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: false,
			icons: true
		});

		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-icons.css'
		);
	});

	it('should include component animations when enabled', () => {
		const css = generateCSS({
			components: [],
			exclude: [],
			foundations: [],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: true,
			icons: false
		});

		expect(css).toContain(
			'@db-ux/core-components/build/styles/component-animations.css'
		);
	});

	it('should include specified components', () => {
		const css = generateCSS({
			components: ['button', 'input'],
			exclude: [],
			foundations: [],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: false,
			icons: false
		});

		expect(css).toContain(
			'@db-ux/core-components/build/components/button/button.css'
		);
		expect(css).toContain(
			'@db-ux/core-components/build/components/input/input.css'
		);
	});

	it('should exclude specified components', () => {
		const css = generateCSS({
			components: ['button', 'input'],
			exclude: ['input'],
			foundations: [],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: false,
			icons: false
		});

		expect(css).toContain(
			'@db-ux/core-components/build/components/button/button.css'
		);
		expect(css).not.toContain(
			'@db-ux/core-components/build/components/input/input.css'
		);
	});

	it('should include specified colors', () => {
		const css = generateCSS({
			components: [],
			exclude: [],
			foundations: [],
			excludeFoundations: [],
			colors: ['neutral', 'brand'],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: false,
			icons: false
		});

		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/colors/classes/neutral.css'
		);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/colors/classes/brand.css'
		);
	});

	it('should include specified densities', () => {
		const css = generateCSS({
			components: [],
			exclude: [],
			foundations: [],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: ['regular', 'functional'],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: false,
			icons: false
		});

		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/density/classes/regular.css'
		);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/density/classes/functional.css'
		);
	});

	it('should include specified font sizes', () => {
		const css = generateCSS({
			components: [],
			exclude: [],
			foundations: [],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: ['body-md', 'headline-lg'],
			excludeFontSizes: [],
			animations: false,
			icons: false
		});

		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/fonts/classes/body/md.css'
		);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/fonts/classes/headline/lg.css'
		);
	});

	it('should include foundation features', () => {
		const css = generateCSS({
			components: [],
			exclude: [],
			foundations: ['helpers', 'elevation'],
			excludeFoundations: [],
			colors: [],
			excludeColors: [],
			densities: [],
			excludeDensities: [],
			fontSizes: [],
			excludeFontSizes: [],
			animations: false,
			icons: false
		});

		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/helpers/classes/all.css'
		);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-elevation.css'
		);
	});
});
