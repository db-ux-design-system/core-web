import { resolve } from 'path';
import { describe, expect, it } from 'vitest';
import { generateCSS } from '../src/generator.js';

const root = resolve(__dirname, '../../..');

describe('generateCSS', () => {
	it('should include default theme when no theme is detected', () => {
		const css = generateCSS({
			root,
			include: {
				components: [],
				foundations: [],
				colors: [],
				densities: [],
				fontSizes: []
			},
			exclude: {},
			hasTailwind: false
		});

		// Should include either default theme or detected theme
		const hasDefaultTheme = css.includes(
			'@db-ux/core-foundations/build/styles/defaults/default-theme.css'
		);
		const hasThemeRollup = css.includes('build/styles/rollup.css');
		expect(hasDefaultTheme || hasThemeRollup).toBe(true);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-required.css'
		);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-root.css'
		);
	});

	it('should include icons when enabled', () => {
		const css = generateCSS({
			root,
			include: {
				components: [],
				foundations: ['icons'],
				colors: [],
				densities: [],
				fontSizes: []
			},
			exclude: {},
			hasTailwind: false
		});

		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-icons.css'
		);
	});

	it('should include component animations when enabled', () => {
		const css = generateCSS({
			root,
			include: {
				components: [],
				foundations: ['animations'],
				colors: [],
				densities: [],
				fontSizes: []
			},
			exclude: {},
			hasTailwind: false
		});

		expect(css).toContain(
			'@db-ux/core-components/build/styles/component-animations.css'
		);
	});

	it('should include specified components', () => {
		const css = generateCSS({
			root,
			include: {
				components: ['button', 'input'],
				foundations: [],
				colors: [],
				densities: [],
				fontSizes: []
			},
			exclude: {},
			hasTailwind: false
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
			root,
			include: {
				components: ['button', 'input'],
				foundations: [],
				colors: [],
				densities: [],
				fontSizes: []
			},
			exclude: {
				components: ['input']
			},
			hasTailwind: false
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
			root,
			include: {
				components: [],
				foundations: [],
				colors: ['neutral', 'brand'],
				densities: [],
				fontSizes: []
			},
			exclude: {},
			hasTailwind: false
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
			root,
			include: {
				components: [],
				foundations: [],
				colors: [],
				densities: ['regular', 'functional'],
				fontSizes: []
			},
			exclude: {},
			hasTailwind: false
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
			root,
			include: {
				components: [],
				foundations: [],
				colors: [],
				densities: [],
				fontSizes: ['body-md', 'headline-lg']
			},
			exclude: {},
			hasTailwind: false
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
			root,
			include: {
				components: [],
				foundations: ['helpers', 'elevation'],
				colors: [],
				densities: [],
				fontSizes: []
			},
			exclude: {},
			hasTailwind: false
		});

		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/helpers/classes/all.css'
		);
		expect(css).toContain(
			'@db-ux/core-foundations/build/styles/defaults/default-elevation.css'
		);
	});
});
