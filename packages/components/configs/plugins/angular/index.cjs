/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code) => {
			return (
				code
					// remove Angular version < 19 warning
					.replaceAll('allowSignalWrites: true,', '')
					// Fix issue with extra whitespace for component props.text
					.replaceAll('{ {{', '{{{')
					.replaceAll('}} }', '}}}')
			);
		}
	}
});
