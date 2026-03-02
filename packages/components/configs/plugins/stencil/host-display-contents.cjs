/**
 * Injects `styles: ':host { display: contents; }'` into Stencil @Component decorators
 * to prevent the baseline gap caused by the default `display: inline` on custom elements.
 * Mirrors the Angular output which sets this via `styles: \`:host { display: contents; }\``.
 */
module.exports = () => ({
	code: {
		post: (code, json) => {
			const { pluginData } = json;
			if (pluginData?.target !== 'stencil') return code;

			return code.replace(
				/@Component\(\{(\s*tag:[^}]*)\}\)/,
				(match, inner) => `@Component({${inner}  styles: \`:host { display: contents; }\`,\n})`
			);
		}
	}
});
