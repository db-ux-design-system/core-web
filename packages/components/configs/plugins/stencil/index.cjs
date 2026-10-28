const deleteConnectedElement = () => {
	return (
		'if(typeof document !== "undefined" && this.rootElement && this.rootElement.dataset.connect){\n' +
		'const connectedElement = document.querySelector(`[data-connect-id="${this.rootElement.dataset.connect}"]`);\n' +
		'if (connectedElement){\n' +
		'connectedElement.remove();\n' +
		'}\n}'
	);
};

/**
 * Components whose conditional drawer header needs `slot="header"` re-added for
 * Stencil. `DBControlPanelMobile` is the only one: `DBHeader` has its entire
 * `<db-drawer>` stripped from the Stencil output (the mobile drawer is handled
 * by `db-shell`), so its drawer header never ships as a web component and needs
 * no fix.
 */
const DRAWER_HEADER_SLOT_COMPONENTS = new Set(['DBControlPanelMobile']);

/**
 * Re-adds `slot="header"` to the conditional drawer-header branches of
 * `DBControlPanelMobile`.
 *
 * The component passes the drawer header to `DBDrawer` through its `header`
 * prop, but the content is conditional (the internal `DBDrawerHeader` when
 * `drawerHeaderText` is set, otherwise the `header` slot). Mitosis wraps the two
 * branches in a fragment, and for the Vue/Angular outputs that fragment becomes
 * a slot-assigning container (`<template v-slot:header>` / `<ng-container
 * header>`), so both branches end up in the drawer's header area. Web components
 * have no such wrapper, so Stencil emits the two branches with no `slot`
 * attribute and both get projected into the drawer's default slot
 * (`.db-drawer-content`) instead of the header, breaking every existing
 * `drawerHeaderText` usage.
 *
 * The public slot is named `header` (not `drawerHeader`) so it matches the
 * `DBDrawer` `header` slot it forwards into: the Stencil runtime cannot forward
 * slotted content to a differently named slot (`<slot name="a" slot="b">`), so
 * the forwarding `<slot name="header">` only gets a matching `slot="header"`.
 *
 * This is gated by component name and must NOT run on `DBDrawer` itself, whose
 * own `<slot name="header">` declaration would otherwise be turned into an
 * invalid self-forwarding `<slot name="header" slot="header">`. Within
 * `DBControlPanelMobile` the only `<db-drawer-header>` and `<slot name="header">`
 * are the two conditional branches. Both replacements are idempotent (guarded
 * against an already-present `slot=`).
 *
 * @param {string} code - the generated Stencil component source
 * @param {import('@builder.io/mitosis').MitosisComponent} json
 * @returns {string} the code with `slot="header"` restored on both branches
 */
const addDrawerHeaderSlot = (code, json) => {
	if (!DRAWER_HEADER_SLOT_COMPONENTS.has(json?.name)) {
		return code;
	}
	return code
		.replace(
			/<db-drawer-header(?![^>]*\sslot=)/,
			'<db-drawer-header\nslot="header"'
		)
		.replace(
			/<slot name="header"(?![^>]*\sslot=)/,
			'<slot name="header" slot="header"'
		);
};

/**
 * Reads the `onInit` hook body from a Mitosis component JSON.
 *
 * The Mitosis Stencil generator maps `onMount` to `componentDidLoad`,
 * `onUnMount` to `disconnectedCallback` and `onUpdate` to `@Watch`/
 * `componentDidUpdate`, but it never reads `json.hooks.onInit` — so any logic a
 * component places in `onInit` is parsed into the JSON and then silently
 * dropped from the Stencil output.
 *
 * @param {import('@builder.io/mitosis').MitosisComponent} json
 * @returns {string | undefined} the trimmed onInit code, or undefined when absent/empty
 */
const extractOnInitCode = (json) => {
	const code = json?.hooks?.onInit?.code;
	if (typeof code !== 'string') {
		return undefined;
	}
	const trimmed = code.trim();
	return trimmed.length > 0 ? trimmed : undefined;
};

/**
 * Injects a `componentWillLoad()` method carrying the onInit code immediately
 * before the generated `componentDidLoad() {` block.
 *
 * Stencil's `componentWillLoad()` runs once, before the first render, which is
 * the semantic equivalent of Mitosis `onInit` (and Angular's `ngOnInit`).
 * Inserting before `componentDidLoad() {` keeps the `code.post` surgery below
 * (which also keys off `componentDidLoad() {`) matching unchanged.
 *
 * @param {string} code - the generated Stencil component source
 * @param {string} onInitCode - the onInit hook body to place inside componentWillLoad
 * @returns {string} the code with componentWillLoad injected (unchanged when it cannot be injected)
 */
const injectComponentWillLoad = (code, onInitCode) => {
	const componentWillLoad = `componentWillLoad() {\n${onInitCode}\n}\n\n`;

	if (code.includes('componentDidLoad() {')) {
		return code.replace(
			'componentDidLoad() {',
			`${componentWillLoad}componentDidLoad() {`
		);
	}

	// Every Stencil component this repo generates uses attribute passing, so it
	// always has a componentDidLoad() block to anchor to. Warn rather than
	// silently drop the onInit logic if that assumption ever breaks.
	console.warn(
		'[stencil plugin] componentDidLoad() { not found — onInit logic was not injected as componentWillLoad()'
	);
	return code;
};

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		// Runs before the generator formats the class with prettier, so the
		// injected componentWillLoad() is formatted together with the rest of
		// the output.
		pre: (code, json) => {
			const onInitCode = extractOnInitCode(json);
			if (!onInitCode) {
				return code;
			}
			return injectComponentWillLoad(code, onInitCode);
		},
		post: (code, json) => {
			if (!code.includes('componentDidLoad() {')) {
				console.warn(
					'[stencil plugin] componentDidLoad() { not found — skipping deleteConnectedElement injection'
				);
			}
			return addDrawerHeaderSlot(
				code
					.replaceAll(/(?<!\w)for={/g, 'htmlFor={')
					.replaceAll(
						'componentDidLoad() {',
						`componentDidLoad() {${deleteConnectedElement()}\n`
					)
					.replaceAll(
						'} from "@stencil/core"',
						', Element } from "@stencil/core"'
					)
					.replaceAll(
						'private _ref',
						'@Element() rootElement: HTMLElement;\nprivate _ref'
					),
				json
			);
		}
	}
});

module.exports.extractOnInitCode = extractOnInitCode;
module.exports.injectComponentWillLoad = injectComponentWillLoad;
module.exports.addDrawerHeaderSlot = addDrawerHeaderSlot;
