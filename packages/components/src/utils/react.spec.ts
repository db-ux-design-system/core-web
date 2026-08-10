import { describe, expect, it, vi } from 'vitest';
import { filterPassingProps, mergeRefs } from './react';

describe('filterPassingProps', () => {
	it('passes through default* props unless excluded by propsPassingFilter', () => {
		const props = {
			defaultOpen: true,
			defaultValue: 'hello',
			defaultChecked: true
		};

		const included = filterPassingProps(props, []);
		expect(included).toHaveProperty('defaultOpen', true);
		expect(included).toHaveProperty('defaultValue', 'hello');
		expect(included).toHaveProperty('defaultChecked', true);

		const excluded = filterPassingProps(props, ['defaultOpen']);
		expect(excluded).not.toHaveProperty('defaultOpen');
		expect(excluded).toHaveProperty('defaultValue', 'hello');
		expect(excluded).toHaveProperty('defaultChecked', true);
	});
});

describe('mergeRefs', () => {
	type TestElement = { id: string };

	it('invokes a callback ref cleanup when the instance is cleared', () => {
		const cleanup = vi.fn();
		const callback = vi.fn((_instance: TestElement | null) => cleanup);
		const internalRef: { current: TestElement | null } = { current: null };
		const mergedRef = mergeRefs(internalRef, callback);
		const instance = { id: 'first' };

		mergedRef.current = instance;
		mergedRef.current = null;

		expect(internalRef.current).toBeNull();
		expect(callback).toHaveBeenCalledOnce();
		expect(callback).toHaveBeenCalledWith(instance);
		expect(cleanup).toHaveBeenCalledOnce();
	});

	it('cleans up the previous callback ref before assigning a replacement', () => {
		const calls: string[] = [];
		const internalRef: { current: TestElement | null } = { current: null };
		const mergedRef = mergeRefs(internalRef, (instance) => {
			if (instance === null) {
				calls.push('ref:null');
				return;
			}

			calls.push(`ref:${instance.id}`);
			return () => {
				calls.push(`cleanup:${instance.id}`);
			};
		});

		mergedRef.current = { id: 'first' };
		mergedRef.current = { id: 'second' };
		mergedRef.current = null;

		expect(calls).toEqual([
			'ref:first',
			'cleanup:first',
			'ref:second',
			'cleanup:second'
		]);
	});

	it('clears callback refs without cleanup using the legacy null call', () => {
		const callback = vi.fn((_instance: TestElement | null) => undefined);
		const internalRef: { current: TestElement | null } = { current: null };
		const mergedRef = mergeRefs(internalRef, callback);
		const instance = { id: 'first' };

		mergedRef.current = instance;
		mergedRef.current = null;

		expect(callback).toHaveBeenNthCalledWith(1, instance);
		expect(callback).toHaveBeenNthCalledWith(2, null);
	});
});
