Object.defineProperty(globalThis, 'window', {
	value: {
		innerHeight: 0,
		innerWidth: 0
	} as Partial<Window>,
	writable: true
});

import { describe, expect, it } from 'vitest';
import {
	getFloatingProps,
	handleFixedDropdown,
	handleFixedPopover,
	resetCSSAnchorPositioningSupportCache,
	supportsCSSAnchorPositioning
} from './floating-components';

describe('getFloatingProps', () => {
	it('calculates the dimensions correctly', () => {
		const element = {
			getBoundingClientRect: () => ({ height: 50, width: 80 })
		} as HTMLElement;
		const parent = {
			getBoundingClientRect: () => ({
				top: 10,
				left: 20,
				width: 200,
				height: 100,
				bottom: 110,
				right: 220
			})
		} as HTMLElement;

		const props = getFloatingProps(element, parent, 'center');
		expect(props.childWidth).toBe(80);
		expect(props.childHeight).toBe(50);
		expect(props.top).toBe(10);
		expect(props.left).toBe(20);
		expect(props.width).toBe(200);
		expect(props.height).toBe(100);
		expect(props.bottom).toBe(110);
		expect(props.right).toBe(220);
	});

	it('does not throw when element or parent is missing', () => {
		expect(() =>
			getFloatingProps(
				null as unknown as HTMLElement,
				{} as HTMLElement,
				'top'
			)
		).not.toThrow();
		expect(() =>
			getFloatingProps(
				{} as HTMLElement,
				null as unknown as HTMLElement,
				'left'
			)
		).not.toThrow();
		expect(
			getFloatingProps(
				null as unknown as HTMLElement,
				null as unknown as HTMLElement,
				'bottom'
			)
		).toEqual({
			bottom: 0,
			childHeight: 0,
			childWidth: 0,
			correctedPlacement: 'bottom',
			height: 0,
			innerHeight: 0,
			innerWidth: 0,
			left: 0,
			right: 0,
			top: 0,
			width: 0
		});
	});
});

describe('handleFixedPopover', () => {
	it('does not throw when element or parent is null', () => {
		expect(() =>
			handleFixedPopover(
				null as unknown as HTMLElement,
				{} as HTMLElement,
				'bottom'
			)
		).not.toThrow();
		expect(() =>
			handleFixedPopover(
				{} as HTMLElement,
				null as unknown as HTMLElement,
				'bottom'
			)
		).not.toThrow();
		expect(() =>
			handleFixedPopover(
				null as unknown as HTMLElement,
				null as unknown as HTMLElement,
				'bottom'
			)
		).not.toThrow();
	});

	it('keeps JavaScript fallback enabled when anchor support is partial', () => {
		const originalCSS = globalThis.CSS;
		const originalGetComputedStyle = globalThis.getComputedStyle;
		const originalInnerWidth = window.innerWidth;
		const originalInnerHeight = window.innerHeight;

		window.innerWidth = 200;
		window.innerHeight = 200;
		globalThis.CSS = {
			supports: ((property: string) => property === 'anchor-name') as any
		} as CSS;
		resetCSSAnchorPositioningSupportCache();

		const element = {
			dataset: {},
			style: {
				setProperty: () => undefined
			},
			parentElement: null,
			getBoundingClientRect: () => ({ height: 80, width: 90 })
		} as unknown as HTMLElement;

		const parent = {
			dataset: {},
			style: {},
			getBoundingClientRect: () => ({
				top: 150,
				left: 80,
				width: 40,
				height: 20,
				bottom: 170,
				right: 120
			})
		} as unknown as HTMLElement;

		globalThis.getComputedStyle = ((target: Element) => {
			if (target === parent) {
				return {
					position: 'static',
					zIndex: 'auto'
				} as CSSStyleDeclaration;
			}
			return {
				getPropertyValue: () => '8px',
				position: 'static',
				zIndex: 'auto'
			} as CSSStyleDeclaration;
		}) as typeof getComputedStyle;

		handleFixedPopover(element, parent, 'bottom');

		expect(element.style.position).toBe('fixed');
		expect(element.dataset['correctedPlacement']).toBe('top');

		globalThis.CSS = originalCSS;
		globalThis.getComputedStyle = originalGetComputedStyle;
		window.innerWidth = originalInnerWidth;
		window.innerHeight = originalInnerHeight;
		resetCSSAnchorPositioningSupportCache();
	});

	it('detects full support only when all required anchor features are present', () => {
		const originalCSS = globalThis.CSS;

		globalThis.CSS = {
			supports: ((property: string) =>
				[
					'anchor-name',
					'position-area',
					'position-try-fallbacks'
				].includes(property)) as any
		} as CSS;
		resetCSSAnchorPositioningSupportCache();
		expect(supportsCSSAnchorPositioning()).toBe(true);

		globalThis.CSS = {
			supports: ((property: string) =>
				['anchor-name', 'position-area'].includes(property)) as any
		} as CSS;
		resetCSSAnchorPositioningSupportCache();
		expect(supportsCSSAnchorPositioning()).toBe(false);

		globalThis.CSS = originalCSS;
		resetCSSAnchorPositioningSupportCache();
	});
});

describe('handleFixedDropdown', () => {
	it('does not throw when element or parent is null', () => {
		expect(() =>
			handleFixedDropdown(
				null as unknown as HTMLElement,
				{} as HTMLElement,
				'bottom'
			)
		).not.toThrow();
		expect(() =>
			handleFixedDropdown(
				{} as HTMLElement,
				null as unknown as HTMLElement,
				'bottom'
			)
		).not.toThrow();
		expect(() =>
			handleFixedDropdown(
				null as unknown as HTMLElement,
				null as unknown as HTMLElement,
				'bottom'
			)
		).not.toThrow();
	});

	it('skips JavaScript positioning only when full anchor feature support is available', () => {
		const originalCSS = globalThis.CSS;
		const originalGetComputedStyle = globalThis.getComputedStyle;

		const element = {
			dataset: { width: 'full' },
			style: {},
			getBoundingClientRect: () => ({ height: 20, width: 80 })
		} as unknown as HTMLElement;

		const parent = {
			getBoundingClientRect: () => ({
				top: 20,
				left: 30,
				width: 100,
				height: 40,
				bottom: 60,
				right: 130
			})
		} as unknown as HTMLElement;

		globalThis.getComputedStyle = (() =>
			({
				zIndex: '1'
			}) as CSSStyleDeclaration) as typeof getComputedStyle;

		globalThis.CSS = {
			supports: ((property: string) => property === 'anchor-name') as any
		} as CSS;
		resetCSSAnchorPositioningSupportCache();
		handleFixedDropdown(element, parent, 'bottom');
		expect(element.style.position).toBe('fixed');

		element.style = {};
		globalThis.CSS = {
			supports: ((property: string) =>
				[
					'anchor-name',
					'position-area',
					'position-try-fallbacks'
				].includes(property)) as any
		} as CSS;
		resetCSSAnchorPositioningSupportCache();
		handleFixedDropdown(element, parent, 'bottom');
		expect(element.style.position).toBeUndefined();

		globalThis.CSS = originalCSS;
		globalThis.getComputedStyle = originalGetComputedStyle;
		resetCSSAnchorPositioningSupportCache();
	});
});
