/**
 * Prevents duplicate ARIA landmarks in Stencil web components.
 * Sets role="none" on host elements of landmark components (breadcrumb, header, navigation, footer).
 *
 * @type {import('@builder.io/mitosis').Plugin}
 */
module.exports = () => ({
	code: {
		post: (code) => {
			// Components that render landmark roles internally
			const landmarkComponents = [
				'db-breadcrumb',
				'db-header',
				'db-navigation',
				'db-footer'
			];

			// Extract tag name from @Component decorator
			const tagMatch = code.match(/tag:\s*["']([^"']+)["']/);
			if (!tagMatch) return code;

			const tagName = tagMatch[1];
			if (!landmarkComponents.includes(tagName)) return code;

			// Add Element import if not present
			if (!code.includes(', Element')) {
				code = code.replace(
					/(import\s*{\s*[^}]+)(\s*}\s*from\s*["']@stencil\/core["'])/,
					'$1, Element$2'
				);
			}

			// Add @Element() hostElement property before private _ref
			if (!code.includes('@Element()')) {
				code = code.replace(
					/(export class \w+ {)\s*(private _ref)/,
					'$1\n  @Element() hostElement: HTMLElement;\n  $2'
				);
			}

			// Set role="none" in componentWillLoad (before first render)
			const componentWillLoadCode =
				"\n  componentWillLoad() {\n    if (this.hostElement) {\n      this.hostElement.setAttribute('role', 'none');\n    }\n  }\n";

			if (/componentWillLoad\s*\(\s*\)\s*{/.test(code)) {
				// Inject into existing componentWillLoad
				code = code.replace(
					/(componentWillLoad\s*\(\s*\)\s*{)/,
					"$1\n    if (this.hostElement) {\n      this.hostElement.setAttribute('role', 'none');\n    }"
				);
			} else {
				// Add new componentWillLoad before render()
				code = code.replace(
					/(render\s*\(\s*\)\s*{)/,
					componentWillLoadCode + '  $1'
				);
			}

			return code;
		}
	}
});
