/**
 * Removes stray `key={undefined}` / `:key="undefined"` attributes that Mitosis
 * can emit for the Vue and Stencil (Web Component) outputs when an element has
 * no explicit key binding. React and Angular do not emit these, so the plugin
 * is only registered for the Vue and Stencil configs.
 *
 * NOTE: This is a post-processing string replacement. It targets the exact
 * generated attribute tokens (`key={undefined}` and `:key="undefined"`), which
 * Mitosis only produces as standalone attributes — not inside string literals —
 * so it is safe for the generated output it runs on.
 *
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
