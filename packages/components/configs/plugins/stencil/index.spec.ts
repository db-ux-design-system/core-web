import { describe, expect, it, vi } from 'vitest';

// The plugin is CommonJS; import its named exports for unit testing.
const {
	extractOnInitCode,
	injectComponentWillLoad,
	addDrawerHeaderSlot
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./index.cjs');

describe('extractOnInitCode', () => {
	it('returns the trimmed onInit hook body', () => {
		const json = { hooks: { onInit: { code: '  this.resetIds();  ' } } };
		expect(extractOnInitCode(json)).toBe('this.resetIds();');
	});

	it('returns undefined when there is no onInit hook', () => {
		expect(extractOnInitCode({ hooks: {} })).toBeUndefined();
		expect(extractOnInitCode({})).toBeUndefined();
		expect(extractOnInitCode(undefined)).toBeUndefined();
	});

	it('returns undefined when the onInit code is empty or whitespace', () => {
		expect(
			extractOnInitCode({ hooks: { onInit: { code: '' } } })
		).toBeUndefined();
		expect(
			extractOnInitCode({ hooks: { onInit: { code: '   \n  ' } } })
		).toBeUndefined();
	});

	it('returns undefined when the onInit code is not a string', () => {
		expect(
			extractOnInitCode({ hooks: { onInit: { code: 42 } } })
		).toBeUndefined();
	});
});

describe('injectComponentWillLoad', () => {
	it('injects componentWillLoad directly before componentDidLoad', () => {
		const code = [
			'export class DBPage {',
			'  componentDidLoad() {',
			'    this.enableAttributePassing(this._ref, "db-page");',
			'  }',
			'}'
		].join('\n');

		const result = injectComponentWillLoad(code, 'this.resetIds();');

		expect(result).toContain('componentWillLoad() {\nthis.resetIds();\n}');
		// componentWillLoad must come before componentDidLoad
		expect(result.indexOf('componentWillLoad()')).toBeLessThan(
			result.indexOf('componentDidLoad()')
		);
	});

	it('only injects a single componentWillLoad block', () => {
		const code = 'componentDidLoad() {}';
		const result = injectComponentWillLoad(code, 'this.init();');
		const matches = result.match(/componentWillLoad\(\)/g) ?? [];
		expect(matches).toHaveLength(1);
	});

	it('warns and returns the code unchanged when componentDidLoad is missing', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const code = 'export class DBThing {}';

		const result = injectComponentWillLoad(code, 'this.init();');

		expect(result).toBe(code);
		expect(warn).toHaveBeenCalledOnce();
		warn.mockRestore();
	});
});

describe('addDrawerHeaderSlot', () => {
	const cpm = { name: 'DBControlPanelMobile' };

	it('adds slot="header" to the internal db-drawer-header branch', () => {
		const code = [
			'{this.drawerHeaderText ? (',
			'  <db-drawer-header',
			'    text={this.drawerHeaderText}',
			'    closeButtonText={this.closeButtonText}',
			'  ></db-drawer-header>',
			') : null}'
		].join('\n');

		const result = addDrawerHeaderSlot(code, cpm);

		expect(result).toContain('<db-drawer-header\nslot="header"');
	});

	it('adds a matching slot="header" to the forwarding header slot branch', () => {
		const code =
			'{!this.drawerHeaderText ? <slot name="header"></slot> : null}';

		const result = addDrawerHeaderSlot(code, cpm);

		// name and slot must match: the Stencil runtime cannot forward to a
		// differently named slot.
		expect(result).toContain('<slot name="header" slot="header"></slot>');
	});

	it('is idempotent and does not add a second slot attribute', () => {
		const code = [
			'<db-drawer-header slot="header" text={this.drawerHeaderText}></db-drawer-header>',
			'<slot name="header" slot="header"></slot>'
		].join('\n');

		expect(addDrawerHeaderSlot(code, cpm)).toBe(code);
	});

	it('does not touch components other than DBControlPanelMobile', () => {
		// DBDrawer declares its own <slot name="header">; it must stay a plain
		// slot declaration and never become a self-forwarding slot.
		const drawerCode = '<slot name="header"></slot>';
		expect(addDrawerHeaderSlot(drawerCode, { name: 'DBDrawer' })).toBe(
			drawerCode
		);

		// DBHeader's drawer is stripped for Stencil, so it is intentionally skipped.
		const headerCode =
			'{!this.drawerHeaderText ? <slot name="header"></slot> : null}';
		expect(addDrawerHeaderSlot(headerCode, { name: 'DBHeader' })).toBe(
			headerCode
		);
	});

	it('leaves a component without a drawer header untouched', () => {
		const code = '<div class="db-page"><slot></slot></div>';
		expect(addDrawerHeaderSlot(code, cpm)).toBe(code);
	});
});

describe('onInit -> componentWillLoad (end-to-end through the Mitosis generator)', () => {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const { parseJsx, componentToStencil } = require('@builder.io/mitosis');
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const stencilPlugin = require('./index.cjs');

	const generate = (source: string): string =>
		componentToStencil({
			typescript: true,
			plugins: [stencilPlugin]
		})({ component: parseJsx(source) });

	// Regression guard for the "raw refs cannot compile" concern: the plugin
	// reads json.hooks.onInit.code in its code.pre phase, which runs AFTER
	// Mitosis's CODE_PROCESSOR_PLUGIN (a json.post plugin) has already rewritten
	// every hook's state./props. references to this.*. So the injected
	// componentWillLoad body must contain this.* — never raw state./props.
	it('rewrites state. and props. references inside componentWillLoad to this.', () => {
		const output = generate(`
			import { onInit, useStore, useDefaultProps } from '@builder.io/mitosis';
			type Props = { variant?: string };
			export default function DBThing(props: Props) {
				const state = useStore({
					_mode: 'top',
					setup: () => { state._mode = props.variant ?? 'top'; }
				});
				onInit(() => {
					state.setup();
					state._mode = props.variant ?? 'top';
				});
				return <div>{state._mode}</div>;
			}
		`);

		const willLoad = output.slice(
			output.indexOf('componentWillLoad()'),
			output.indexOf('render()')
		);

		expect(willLoad).toContain('componentWillLoad()');
		expect(willLoad).toContain('this.setup()');
		expect(willLoad).toContain('this._mode = this.variant');
		expect(willLoad).not.toContain('state.');
		expect(willLoad).not.toContain('props.');
	});

	it('emits componentWillLoad before componentDidLoad', () => {
		const output = generate(`
			import { onInit, onMount, useStore } from '@builder.io/mitosis';
			export default function DBThing() {
				const state = useStore({ _ready: false });
				onInit(() => { state._ready = true; });
				onMount(() => { state._ready = true; });
				return <div>{state._ready}</div>;
			}
		`);

		expect(output.indexOf('componentWillLoad()')).toBeGreaterThan(-1);
		expect(output.indexOf('componentWillLoad()')).toBeLessThan(
			output.indexOf('componentDidLoad()')
		);
	});

	it('does not emit componentWillLoad when the component has no onInit hook', () => {
		const output = generate(`
			import { onMount, useStore } from '@builder.io/mitosis';
			export default function DBThing() {
				const state = useStore({ _ready: false });
				onMount(() => { state._ready = true; });
				return <div>{state._ready}</div>;
			}
		`);

		expect(output).not.toContain('componentWillLoad()');
	});
});
