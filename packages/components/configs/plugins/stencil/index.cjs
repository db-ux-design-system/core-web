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
 * camelCase HTML attributes whose native (all-lowercase) DOM attribute name
 * differs from Stencil's default dash-cased mapping. Without an explicit
 * `attribute` option, `@Prop() formMethod` binds to `form-method`, so
 * `<db-button formmethod="dialog">` would never reach the native <button>.
 */
const lowercaseAttributeProps = [
	'formAction',
	'formEncType',
	'formMethod',
	'formNoValidate',
	'formTarget'
];

/**
 * Rewrites `@Prop() <name>:` to `@Prop({ attribute: '<lowercase>' }) <name>:`
 * for the attributes above, so the emitted Web Component observes the native
 * lowercase HTML attribute name.
 *
 * @param {string} code the generated Stencil component source
 * @returns {string} the source with explicit attribute names
 */
const setLowercaseAttributes = (code) =>
	lowercaseAttributeProps.reduce(
		(acc, prop) =>
			acc.replaceAll(
				`@Prop() ${prop}:`,
				`@Prop({ attribute: '${prop.toLowerCase()}' }) ${prop}:`
			),
		code
	);

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
const stencilPlugin = () => ({
	code: {
		post: (code) => {
			if (!code.includes('componentDidLoad() {')) {
				console.warn(
					'[stencil plugin] componentDidLoad() { not found — skipping deleteConnectedElement injection'
				);
			}
			return setLowercaseAttributes(
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
					)
			);
		}
	}
});

module.exports = stencilPlugin;
module.exports.setLowercaseAttributes = setLowercaseAttributes;
module.exports.lowercaseAttributeProps = lowercaseAttributeProps;
