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
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code) => {
			if (!code.includes('componentDidLoad() {')) {
				console.warn(
					'[stencil plugin] componentDidLoad() { not found — skipping deleteConnectedElement injection'
				);
			}
			return code
				.replaceAll('for={', 'htmlFor={')
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
