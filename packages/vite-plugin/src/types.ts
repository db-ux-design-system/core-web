import type { ValidComponent } from './detector.js';

/**
 * Foundation features that can be included or excluded.
 * - `icons`: Include icon fonts
 * - `helpers`: Include helper classes
 * - `elevation`: Include elevation styles
 * - `animations`: Include component animations
 * - `code`: Include code styling
 */
export type FoundationFeature =
	| 'icons'
	| 'helpers'
	| 'elevation'
	| 'animations'
	| 'code';

/**
 * Available color schemes for the design system.
 */
export type ColorScheme =
	| 'neutral'
	| 'brand'
	| 'blue'
	| 'burgundy'
	| 'critical'
	| 'cyan'
	| 'green'
	| 'informational'
	| 'light-green'
	| 'orange'
	| 'pink'
	| 'red'
	| 'successful'
	| 'turquoise'
	| 'violet'
	| 'warning'
	| 'yellow';

/**
 * Available density options for components.
 */
export type Density = 'regular' | 'functional' | 'expressive';

/**
 * Available font size options.
 */
export type FontSize =
	| 'body-3xs'
	| 'body-2xs'
	| 'body-xs'
	| 'body-sm'
	| 'body-md'
	| 'body-lg'
	| 'body-xl'
	| 'body-2xl'
	| 'body-3xl'
	| 'headline-3xs'
	| 'headline-2xs'
	| 'headline-xs'
	| 'headline-sm'
	| 'headline-md'
	| 'headline-lg'
	| 'headline-xl'
	| 'headline-2xl'
	| 'headline-3xl';

/**
 * Valid component names from the design system.
 */
export type Component = ValidComponent;

/**
 * Configuration options for the Vite plugin.
 */
export interface PluginConfig {
	/**
	 * Force include specific components, foundation features, color schemes, densities, or font sizes.
	 */
	include?: {
		components?: Component[];
		foundations?: FoundationFeature[];
		colors?: ColorScheme[];
		densities?: Density[];
		fontSizes?: FontSize[];
	};
	/**
	 * Exclude specific components, foundation features, color schemes, densities, or font sizes.
	 */
	exclude?: {
		components?: Component[];
		foundations?: FoundationFeature[];
		colors?: ColorScheme[];
		densities?: Density[];
		fontSizes?: FontSize[];
	};
	/**
	 * Remove unused CSS variable declarations to reduce bundle size (default: true).
	 */
	optimize?: boolean;
	/**
	 * Specify preferred theme package name (e.g., "db-theme").
	 */
	theme?: string;
	/**
	 * Generate detection report for debugging (default: false).
	 */
	debug?: boolean;
}

/**
 * Internal options passed to the CSS generator.
 */
export interface GenerateOptions
	extends
		Pick<Required<PluginConfig>, 'include' | 'exclude'>,
		Pick<PluginConfig, 'theme'> {
	hasTailwind: boolean;
}
