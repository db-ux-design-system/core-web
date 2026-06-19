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
	handleFixedPopover
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
});

describe('handleFixedDropdown', () => {
	const createDropdownElement = (
		dataWidth: 'full' | 'auto',
		childRect: { width: number; height: number },
		computedStyle: Record<string, string> = {}
	): HTMLElement => {
		const style: Record<string, string> = {};
		return {
			style,
			dataset: { width: dataWidth },
			getBoundingClientRect: () => childRect,
			// expose for assertions
			_style: style
		} as unknown as HTMLElement;
	};

	const withComputedStyle = (
		styleByElement: Map<HTMLElement, Record<string, string>>,
		run: () => void
	) => {
		const original = globalThis.getComputedStyle;
		(
			globalThis as unknown as { getComputedStyle: unknown }
		).getComputedStyle = (el: HTMLElement) =>
			({
				zIndex: '1',
				maxInlineSize: 'none',
				position: 'fixed',
				...(styleByElement.get(el) ?? {})
			}) as unknown as CSSStyleDeclaration;
		try {
			run();
		} finally {
			(
				globalThis as unknown as { getComputedStyle: unknown }
			).getComputedStyle = original;
		}
	};

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

	// Regression: a reopened full-width dropdown is measured with its natural
	// content width (the inline-size reset runs before measuring), so the
	// end-aligned position must use the trigger width — not the smaller
	// measured childWidth — to stay anchored to the trigger edge.
	it('aligns a full-width dropdown to the trigger width when end-aligned', () => {
		(window as Window).innerWidth = 320;
		(window as Window).innerHeight = 800;

		// natural content width (80) is narrower than the trigger (200)
		const element = createDropdownElement('full', {
			width: 80,
			height: 50
		});
		const parent = {
			getBoundingClientRect: () => ({
				top: 10,
				left: 100,
				width: 200,
				height: 100,
				bottom: 110,
				right: 300
			})
		} as HTMLElement;

		withComputedStyle(new Map(), () => {
			handleFixedDropdown(element, parent, 'bottom');
		});

		const style = (element as unknown as { _style: Record<string, string> })
			._style;
		// full mode forces the trigger width
		expect(style.inlineSize).toBe('200px');
		// trigger spans 100–300; right - triggerWidth === left, so the dropdown
		// stays aligned to the trigger instead of right - childWidth (= 220px)
		expect(style.insetInlineStart).toBe('100px');
	});
});
