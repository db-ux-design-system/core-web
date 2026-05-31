/** All available values discovered from the filesystem, used to determine what is unused. */
export interface OptimizerContext {
	allColors: string[];
	allDensities: string[];
	allFontSizes: string[];
}

/**
 * Remove unused CSS custom properties, @property declarations, and rule blocks
 * for colors, densities, and font sizes that were not detected in the project.
 * Also strips empty @layer declarations and @charset directives.
 */
export function removeUnusedStyles(
	css: string,
	detectedColors: Set<string>,
	detectedDensities: Set<string>,
	detectedFontSizes: Set<string>,
	context: OptimizerContext
): string {
	const unusedColors = context.allColors.filter(
		(c) => !detectedColors.has(c)
	);
	const unusedDensities = context.allDensities.filter(
		(d) => !detectedDensities.has(d)
	);
	const unusedFontSizes = context.allFontSizes.filter(
		(f) => !detectedFontSizes.has(f)
	);

	for (const color of unusedColors) {
		css = css.replace(
			new RegExp(`@property --db-${color}-[a-z0-9-]+\\{[^}]+\\}`, 'g'),
			''
		);
		// Make semicolon optional to handle last property in a block
		css = css.replace(
			new RegExp(`--db-${color}-[a-z0-9-]+:[^;}]+;?`, 'g'),
			''
		);
		// Normalize selectors — handle both quoted and unquoted data-color
		css = css.replace(
			new RegExp(
				`\\[data-color=["']?${color}["']?\\],\\.db-color-${color}`,
				'g'
			),
			`.db-color-${color}`
		);
		css = css.replace(
			new RegExp(
				`\\.db-color-${color},\\[data-color=["']?${color}["']?\\]`,
				'g'
			),
			`.db-color-${color}`
		);
		// Remove entire rule blocks including pseudo-classes
		css = css.replace(
			new RegExp(`\\.db-color-${color}(?:[^{]*?)\\{[^}]+\\}`, 'g'),
			''
		);
	}

	for (const density of unusedDensities) {
		css = css.replace(
			new RegExp(
				`@property --db-[a-z-]+-${density}-[a-z0-9-]+\\{[^}]+\\}`,
				'g'
			),
			''
		);
		css = css.replace(
			new RegExp(`--db-[a-z-]+-${density}-[a-z0-9-]+:[^;}]+;?`, 'g'),
			''
		);
	}

	for (const fontSize of unusedFontSizes) {
		const [type, size] = fontSize.split('-');
		css = css.replace(
			new RegExp(`--db-type-${fontSize}:[^;}]+;?`, 'g'),
			''
		);
		css = css.replace(
			new RegExp(`--db-base-${type}-icon-weight-${size}:[^;}]+;?`, 'g'),
			''
		);
		css = css.replace(
			new RegExp(
				`@property --db-base-icon-weight-[a-z]+-[a-z]+-${type}-${size}\\{[^}]+\\}`,
				'g'
			),
			''
		);
		css = css.replace(
			new RegExp(
				`@property --db-base-icon-font-size-[a-z]+-[a-z]+-${type}-${size}\\{[^}]+\\}`,
				'g'
			),
			''
		);
		css = css.replace(
			new RegExp(
				`@property --db-typography-[a-z]+-[a-z]+-${type}-${size}\\{[^}]+\\}`,
				'g'
			),
			''
		);
	}

	css = css.replace(/@layer variables;/g, '');
	css = css.replace(/@charset "UTF-8";/g, '');

	return css;
}
