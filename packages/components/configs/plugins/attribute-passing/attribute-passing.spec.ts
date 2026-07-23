import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Regression test for the attribute-passing bug where iterating a live
 * NamedNodeMap by forward index while removing attributes skips entries.
 *
 * Extracts enableAttributePassing from the real generated output at test
 * time and runs it against a DOM mock to verify all data and aria attributes
 * are forwarded correctly.
 */

/** Live NamedNodeMap mock — entries shift on removal like the real DOM. */
class LiveNamedNodeMap {
	private attrs: { name: string; value: string }[] = [];

	get length() {
		return this.attrs.length;
	}

	item(index: number) {
		return this.attrs[index] ?? null;
	}

	[Symbol.iterator]() {
		return this.attrs[Symbol.iterator]();
	}

	getNamedItem(name: string) {
		return this.attrs.find((a) => a.name === name) ?? null;
	}

	setNamedItem(name: string, value: string) {
		const existing = this.attrs.find((a) => a.name === name);
		if (existing) {
			existing.value = value;
		} else {
			this.attrs.push({ name, value });
		}
	}

	removeNamedItem(name: string) {
		const idx = this.attrs.findIndex((a) => a.name === name);
		if (idx !== -1) this.attrs.splice(idx, 1);
	}
}

function createElement(attrs: Record<string, string> = {}) {
	const map = new LiveNamedNodeMap();
	for (const [k, v] of Object.entries(attrs)) {
		map.setNamedItem(k, v);
	}

	return {
		attributes: map,
		getAttribute(name: string) {
			return map.getNamedItem(name)?.value ?? null;
		},
		setAttribute(name: string, value: string) {
			map.setNamedItem(name, value);
		},
		removeAttribute(name: string) {
			map.removeNamedItem(name);
		}
	};
}

/**
 * Extracts enableAttributePassing from the built Stencil output and returns
 * a callable that takes (element, parent) mocks.
 */
function extractEnableAttributePassing() {
	const outputPath = path.resolve(
		__dirname,
		'../../../../../output/stencil/src/components/stack/stack.tsx'
	);

	if (!fs.existsSync(outputPath)) return null;

	const code = fs.readFileSync(outputPath, 'utf-8');
	const match = code.match(
		/private enableAttributePassing\(\s*element:\s*HTMLElement\s*\|\s*null,\s*customElementSelector:\s*string\s*\)\s*\{([\s\S]*?)\n  \}/
	);
	if (!match) return null;

	const body = match[1].replace(
		/const parent = element\?\.closest\(customElementSelector\);/,
		'// parent provided as argument'
	);

	// eslint-disable-next-line @typescript-eslint/no-implied-eval
	return new Function('element', 'parent', body) as (
		element: ReturnType<typeof createElement>,
		parent: ReturnType<typeof createElement>
	) => void;
}

describe('attribute-passing: generated enableAttributePassing', () => {
	const fn = extractEnableAttributePassing();

	it.skipIf(!fn)(
		'forwards multiple data-* attributes to the inner element',
		() => {
			const parent = createElement({
				'_nghost-abc': '',
				'data-a': '1',
				'data-b': '2',
				'data-c': '3'
			});
			const child = createElement({ class: 'db-stack' });

			fn!(child, parent);

			expect(child.getAttribute('data-a')).toBe('1');
			expect(child.getAttribute('data-b')).toBe('2');
			expect(child.getAttribute('data-c')).toBe('3');
			expect(parent.getAttribute('data-a')).toBeNull();
			expect(parent.getAttribute('data-b')).toBeNull();
			expect(parent.getAttribute('data-c')).toBeNull();
		}
	);

	it.skipIf(!fn)(
		'forwards multiple aria-* attributes to the inner element',
		() => {
			const parent = createElement({
				'_nghost-abc': '',
				'aria-label': 'Stack',
				'aria-describedby': 'desc-1',
				'aria-hidden': 'true'
			});
			const child = createElement({ class: 'db-stack' });

			fn!(child, parent);

			expect(child.getAttribute('aria-label')).toBe('Stack');
			expect(child.getAttribute('aria-describedby')).toBe('desc-1');
			expect(child.getAttribute('aria-hidden')).toBe('true');
		}
	);

	it.skipIf(!fn)('does NOT forward data-density', () => {
		const parent = createElement({
			'data-density': 'functional',
			'data-custom': 'value'
		});
		const child = createElement({ class: 'db-stack' });

		fn!(child, parent);

		expect(parent.getAttribute('data-density')).toBe('functional');
		expect(child.getAttribute('data-density')).toBeNull();
		expect(child.getAttribute('data-custom')).toBe('value');
	});

	it.skipIf(!fn)('leaves unrelated attributes on the parent', () => {
		const parent = createElement({
			'_nghost-abc': '',
			id: 'my-stack',
			'data-a': '1'
		});
		const child = createElement({ class: 'db-stack' });

		fn!(child, parent);

		expect(child.getAttribute('data-a')).toBe('1');
		expect(parent.getAttribute('_nghost-abc')).toBe('');
		expect(parent.getAttribute('id')).toBe('my-stack');
	});
});
