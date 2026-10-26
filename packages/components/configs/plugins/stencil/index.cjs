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
		post: (code) => {
			if (!code.includes('componentDidLoad() {')) {
				console.warn(
					'[stencil plugin] componentDidLoad() { not found — skipping deleteConnectedElement injection'
				);
			}
			return code
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
				);
		}
	}
});

module.exports.extractOnInitCode = extractOnInitCode;
module.exports.injectComponentWillLoad = injectComponentWillLoad;
