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

describe('getFloatingProps placement flip matrix', () => {
	const createScenario = (
		viewport: { width: number; height: number },
		parentRect: {
			top: number;
			left: number;
			width: number;
			height: number;
			bottom: number;
			right: number;
		},
		childSize: { width: number; height: number }
	) => {
		(window as Window).innerWidth = viewport.width;
		(window as Window).innerHeight = viewport.height;

		const element = {
			getBoundingClientRect: () => childSize
		} as HTMLElement;
		const parent = {
			getBoundingClientRect: () => parentRect
		} as HTMLElement;

		return { element, parent };
	};

	it('bottom flips to top when bottom overflows and top has room', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 500 },
			{
				top: 200,
				left: 400,
				width: 100,
				height: 40,
				bottom: 480,
				right: 500
			},
			{ width: 80, height: 100 }
		);
		const result = getFloatingProps(element, parent, 'bottom');
		expect(result.correctedPlacement).toBe('top');
	});

	it('bottom stays bottom when within viewport', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 200,
				left: 400,
				width: 100,
				height: 40,
				bottom: 240,
				right: 500
			},
			{ width: 80, height: 100 }
		);
		const result = getFloatingProps(element, parent, 'bottom');
		expect(result.correctedPlacement).toBe('bottom');
	});

	it('bottom stays bottom when both top and bottom overflow', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 100 },
			{
				top: 10,
				left: 400,
				width: 100,
				height: 40,
				bottom: 90,
				right: 500
			},
			{ width: 80, height: 200 }
		);
		const result = getFloatingProps(element, parent, 'bottom');
		expect(result.correctedPlacement).toBe('bottom');
	});

	it('top flips to bottom when top overflows and bottom has room', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 20,
				left: 400,
				width: 100,
				height: 40,
				bottom: 60,
				right: 500
			},
			{ width: 80, height: 100 }
		);
		const result = getFloatingProps(element, parent, 'top');
		expect(result.correctedPlacement).toBe('bottom');
	});

	it('top stays top when within viewport', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 500,
				left: 400,
				width: 100,
				height: 40,
				bottom: 540,
				right: 500
			},
			{ width: 80, height: 100 }
		);
		const result = getFloatingProps(element, parent, 'top');
		expect(result.correctedPlacement).toBe('top');
	});

	it('top stays top when both top and bottom overflow', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 100 },
			{
				top: 10,
				left: 400,
				width: 100,
				height: 40,
				bottom: 90,
				right: 500
			},
			{ width: 80, height: 200 }
		);
		const result = getFloatingProps(element, parent, 'top');
		expect(result.correctedPlacement).toBe('top');
	});

	it('left flips to right when left overflows and right has room', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 400,
				left: 20,
				width: 100,
				height: 40,
				bottom: 440,
				right: 120
			},
			{ width: 100, height: 60 }
		);
		const result = getFloatingProps(element, parent, 'left');
		expect(result.correctedPlacement).toBe('right');
	});

	it('left stays left when within viewport', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 400,
				left: 500,
				width: 100,
				height: 40,
				bottom: 440,
				right: 600
			},
			{ width: 100, height: 60 }
		);
		const result = getFloatingProps(element, parent, 'left');
		expect(result.correctedPlacement).toBe('left');
	});

	it('left stays left when both left and right overflow', () => {
		const { element, parent } = createScenario(
			{ width: 200, height: 1000 },
			{
				top: 400,
				left: 50,
				width: 100,
				height: 40,
				bottom: 440,
				right: 150
			},
			{ width: 300, height: 60 }
		);
		const result = getFloatingProps(element, parent, 'left');
		expect(result.correctedPlacement).toBe('left');
	});

	it('right flips to left when right overflows and left has room', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 400,
				left: 800,
				width: 100,
				height: 40,
				bottom: 440,
				right: 980
			},
			{ width: 100, height: 60 }
		);
		const result = getFloatingProps(element, parent, 'right');
		expect(result.correctedPlacement).toBe('left');
	});

	it('right stays right when within viewport', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 400,
				left: 200,
				width: 100,
				height: 40,
				bottom: 440,
				right: 300
			},
			{ width: 100, height: 60 }
		);
		const result = getFloatingProps(element, parent, 'right');
		expect(result.correctedPlacement).toBe('right');
	});

	it('right stays right when both left and right overflow', () => {
		const { element, parent } = createScenario(
			{ width: 200, height: 1000 },
			{
				top: 400,
				left: 50,
				width: 100,
				height: 40,
				bottom: 440,
				right: 150
			},
			{ width: 300, height: 60 }
		);
		const result = getFloatingProps(element, parent, 'right');
		expect(result.correctedPlacement).toBe('right');
	});

	it('bottom adjusts to bottom-end when right side overflows', () => {
		const { element, parent } = createScenario(
			{ width: 500, height: 1000 },
			{
				top: 200,
				left: 400,
				width: 100,
				height: 40,
				bottom: 240,
				right: 500
			},
			{ width: 200, height: 100 }
		);
		const result = getFloatingProps(element, parent, 'bottom');
		expect(result.correctedPlacement).toBe('bottom-end');
	});

	it('bottom adjusts to bottom-start when left side overflows', () => {
		const { element, parent } = createScenario(
			{ width: 1000, height: 1000 },
			{
				top: 200,
				left: 10,
				width: 100,
				height: 40,
				bottom: 240,
				right: 110
			},
			{ width: 200, height: 100 }
		);
		const result = getFloatingProps(element, parent, 'bottom');
		expect(result.correctedPlacement).toBe('bottom-start');
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
