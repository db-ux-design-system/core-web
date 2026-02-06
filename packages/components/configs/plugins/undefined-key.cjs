/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code) => {
			return code
				.replaceAll(':key="undefined"', '')
				.replaceAll('key={undefined}', '');
		}
	}
});
