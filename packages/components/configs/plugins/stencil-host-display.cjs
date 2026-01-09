/**
 * Adds ':host { display: contents; }' styles to Stencil components.
 * Makes the host element transparent, matching Angular component behavior.
 *
 * @type {import('@builder.io/mitosis').Plugin}
 */
module.exports = () => ({
	code: {
		post: (code) => {
			const componentRegex = /(@Component\s*\(\s*\{[^}]*)(}\s*\))/s;

			if (componentRegex.test(code)) {
				code = code.replace(
					componentRegex,
					(match, decoratorStart, decoratorEnd) => {
						// Skip if styles already defined
						if (
							decoratorStart.includes('styles:') ||
							decoratorStart.includes('styleUrl:') ||
							decoratorStart.includes('shadow:')
						) {
							return match;
						}

						const styles = `  styles: \`:host { display: contents; }\`,\n`;
						return `${decoratorStart}\n${styles}${decoratorEnd}`;
					}
				);
			}

			return code;
		}
	}
});
