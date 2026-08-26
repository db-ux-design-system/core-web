/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code) => {
			return (
				code
					// Bind the native boolean property; hidden="false" still hides the element.
					.replaceAll('[attr.hidden]=', '[hidden]=')
					// remove Angular version < 19 warning
					.replaceAll('allowSignalWrites: true,', '')
					// Fix issue with extra whitespace for component props.text
					.replaceAll('{ {{', '{{{')
					.replaceAll('}} }', '}}}')
			);
		}
	}
});
