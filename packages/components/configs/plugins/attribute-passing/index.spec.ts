import { describe, expect, it } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const {
	parseJsx,
	componentToAngular,
	componentToStencil
} = require('@builder.io/mitosis');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const attributePassingPlugin = require('./index.cjs');

const source = `
	import { useRef } from '@builder.io/mitosis';
	export default function DBThing() {
		const _ref = useRef<HTMLDivElement | any>(null);
		return <div ref={_ref}></div>;
	}
`;

const options = {
	typescript: true,
	attributePassing: { enabled: true, customRef: '_ref' },
	plugins: [attributePassingPlugin]
};

// `mitosis build` fills `pluginData`, calling a generator directly does not
const component = (target: string) => ({
	...parseJsx(source),
	pluginData: { target, path: 'src/components/thing/thing.lite.tsx' }
});

const generators = {
	angular: () =>
		componentToAngular({ ...options, api: 'signals' })({
			component: component('angular')
		}),
	stencil: () =>
		componentToStencil(options)({ component: component('stencil') })
} as const;

/** Returns a generated class method declaration (up to the next member). */
const methodBody = (code: string, name: string): string => {
	// Call sites are prefixed with `this.`, so only the declaration matches
	const declaration = new RegExp(`^ *(?:private )?${name}\\(`, 'm').exec(
		code
	);
	if (!declaration) return '';
	const rest = code.slice(declaration.index + declaration[0].length);
	const next = rest.search(/^ {2}(?:private )?\w+\(/m);
	return code.slice(
		declaration.index,
		next === -1
			? undefined
			: declaration.index + declaration[0].length + next
	);
};

describe.each(Object.entries(generators))(
	'attribute passing: host attribute removal (#6999) [%s]',
	(_target, generate) => {
		const output = generate();

		it('patches the host after the observer is set up', () => {
			expect(methodBody(output, 'setupObserver')).toContain(
				'this.patchHostAttributeRemoval(element, parent as HTMLElement);'
			);
		});

		it('mirrors removeAttribute and toggleAttribute(…, false) to the inner element', () => {
			const patch = methodBody(output, 'patchHostAttributeRemoval');
			expect(patch).toContain('host.removeAttribute = removeAttribute;');
			expect(patch).toContain('host.toggleAttribute = toggleAttribute;');
			expect(patch).toContain('force === false && isForwarded(name)');
			// Idempotent: a second mount (e.g. Stencil DOM move) must not wrap twice
			expect(patch).toContain(
				'if (host.removeAttribute?.dbAttributePassing) return;'
			);
		});

		it('keeps the allowlist in sync with enableAttributePassing', () => {
			const patch = methodBody(output, 'patchHostAttributeRemoval');
			expect(patch).toContain('attrName !== "data-density"');
			expect(patch).toContain('attrName.startsWith("data-")');
			expect(patch).toContain('attrName.startsWith("aria-")');
			expect(patch).toContain('["role", "title", "style"]');
		});

		it('moves attributes off the host without triggering its own patch', () => {
			const passing = methodBody(output, 'enableAttributePassing');
			expect(passing).toContain(
				'HTMLElement.prototype.removeAttribute.call(parent, attr.name);'
			);
			expect(passing).not.toMatch(/\bparent\.removeAttribute\(/);
		});

		it('never references the global `Element`, Stencil shadows it with its decorator', () => {
			expect(output).not.toMatch(/(?<![\w.])Element\.prototype/);
		});

		it('restores the native methods on unmount', () => {
			expect(output).toMatch(
				/this\.restoreHostAttributeRemoval\(this\._ref/
			);
			const restore = methodBody(output, 'restoreHostAttributeRemoval');
			expect(restore).toContain('delete host[method];');
			expect(restore).toContain('host[method]?.dbAttributePassing');
		});
	}
);
