import { describe, expect, it } from 'vitest';
import { forwardedRefReplacement } from './react';

const applyReplacement = (input: string) =>
	input.replace(
		forwardedRefReplacement.from as RegExp,
		forwardedRefReplacement.to
	);

describe('forwardedRefReplacement', () => {
	// Shape of the Mitosis React output before the post-build runs.
	const mitosisOutput = [
		'  const _ref = useRef<HTMLDivElement | any>(null);',
		'  const _menuRef = useRef<HTMLElement | any>(null);'
	].join('\n');

	it('calls useRef unconditionally before selecting the forwarded ref', () => {
		const result = applyReplacement(mitosisOutput);

		expect(result).toContain(
			'const _internalRef = useRef<HTMLDivElement | any>(null);'
		);
		expect(result).toContain('const _ref = component || _internalRef;');
		// A hook behind `||` is skipped whenever a ref is forwarded, which changes
		// the hook order between renders (#7849).
		expect(result).not.toMatch(/\|\|\s*useRef/);
	});

	it('only rewrites the root `_ref` and keeps further refs untouched', () => {
		const result = applyReplacement(mitosisOutput);

		expect(result).toContain(
			'const _menuRef = useRef<HTMLElement | any>(null);'
		);
		expect(result.match(/_internalRef = useRef/g)).toHaveLength(1);
	});

	it('keeps an `undefined` initial value', () => {
		// DBLoadingIndicator initializes its root ref with `undefined`.
		const result = applyReplacement(
			'const _ref = useRef<HTMLDivElement | any>(undefined);'
		);

		expect(result).toContain(
			'const _internalRef = useRef<HTMLDivElement | any>(undefined);'
		);
		expect(result).toContain('const _ref = component || _internalRef;');
	});

	it('keeps the generic type of the ref intact', () => {
		const result = applyReplacement(
			'const _ref = useRef<HTMLDivElement | null>(null);'
		);

		expect(result).toContain(
			'const _internalRef = useRef<HTMLDivElement | null>(null);'
		);
	});
});
