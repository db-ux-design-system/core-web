/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		pre: (code, json) => {
			const { name } = json;
			return code.replace(
				'const props =',
				`defineOptions({
name: "${name}"
});
const props =`
			);
		}
	}
});
