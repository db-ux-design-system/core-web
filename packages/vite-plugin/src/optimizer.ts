export function removeUnusedStyles(
	css: string,
	detectedColors: Set<string>,
	detectedDensities: Set<string>,
	detectedFontSizes: Set<string>
): string {
	const allColors = [
		'blue',
		'burgundy',
		'cyan',
		'green',
		'light-green',
		'orange',
		'pink',
		'red',
		'turquoise',
		'violet',
		'yellow'
	];
	const unusedColors = allColors.filter((c) => !detectedColors.has(c));

	const allDensities = ['functional', 'expressive'];
	const unusedDensities = allDensities.filter(
		(d) => !detectedDensities.has(d)
	);

	const allFontSizes = [
		'body-3xs',
		'body-2xs',
		'body-lg',
		'body-xl',
		'body-2xl',
		'body-3xl',
		'headline-3xs',
		'headline-2xl',
		'headline-3xl'
	];
	const unusedFontSizes = allFontSizes.filter(
		(f) => !detectedFontSizes.has(f)
	);

	for (const color of unusedColors) {
		css = css.replace(
			new RegExp(`@property --db-${color}-[a-z0-9-]+\\{[^}]+\\}`, 'g'),
			''
		);
		css = css.replace(
			new RegExp(`--db-${color}-[a-z0-9-]+:[^;]+;`, 'g'),
			''
		);
		// Normalize selectors to single class
		css = css.replace(
			new RegExp(`\\[data-color=${color}\\],\\.db-color-${color}`, 'g'),
			`.db-color-${color}`
		);
		css = css.replace(
			new RegExp(`\\.db-color-${color},\\[data-color=${color}\\]`, 'g'),
			`.db-color-${color}`
		);
		// Remove entire rule block
		css = css.replace(
			new RegExp(`\\.db-color-${color}\\{[^}]+\\}`, 'g'),
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
			new RegExp(`--db-[a-z-]+-${density}-[a-z0-9-]+:[^;]+;`, 'g'),
			''
		);
	}

	for (const fontSize of unusedFontSizes) {
		const [type, size] = fontSize.split('-');
		css = css.replace(new RegExp(`--db-type-${fontSize}:[^;]+;`, 'g'), '');
		css = css.replace(
			new RegExp(`--db-base-${type}-icon-weight-${size}:[^;]+;`, 'g'),
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

	return css;
}
