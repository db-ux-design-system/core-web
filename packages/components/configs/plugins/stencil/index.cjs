const deleteConnectedElement = () => {
	return (
		'if(document && this.rootElement && this.rootElement.dataset.connect){\n' +
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
