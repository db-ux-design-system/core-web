Object.defineProperty(globalThis, 'window', {
	value: {
		innerHeight: 0,
		innerWidth: 0
	} as Partial<Window>,
	writable: true
});

import { describe, expect, it } from 'vitest';
import { getFloatingProps } from './floating-components';

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
