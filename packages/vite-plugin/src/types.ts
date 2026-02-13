export type FoundationFeature = 'icons' | 'helpers' | 'elevation';

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

export type Density = 'regular' | 'functional' | 'expressive';

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

export type Component =
	| 'custom-select-list-item'
	| 'custom-select-list'
	| 'custom-select-dropdown'
	| 'custom-select-form-field'
	| 'custom-select'
	| 'stack'
	| 'switch'
	| 'tab-panel'
	| 'tabs'
	| 'tab-list'
	| 'tab-item'
	| 'tab-bar'
	| 'tooltip'
	| 'popover'
	| 'textarea'
	| 'navigation'
	| 'accordion-item'
	| 'accordion'
	| 'badge'
	| 'navigation-item'
	| 'tag'
	| 'radio'
	| 'select'
	| 'notification'
	| 'brand'
	| 'button'
	| 'card'
	| 'checkbox'
	| 'divider'
	| 'drawer'
	| 'header'
	| 'icon'
	| 'infotext'
	| 'input'
	| 'link'
	| 'page'
	| 'section'
	| 'tab';

export interface PluginConfig {
	include?: {
		components?: Component[];
		foundations?: FoundationFeature[];
		colors?: ColorScheme[];
		densities?: Density[];
		fontSizes?: FontSize[];
	};
	exclude?: {
		components?: Component[];
		foundations?: FoundationFeature[];
		colors?: ColorScheme[];
		densities?: Density[];
		fontSizes?: FontSize[];
	};
	animations?: boolean;
	icons?: boolean;
	optimize?: boolean;
}

export interface GenerateOptions {
	components: string[];
	exclude: string[];
	foundations: string[];
	excludeFoundations: string[];
	colors: string[];
	excludeColors: string[];
	densities: string[];
	excludeDensities: string[];
	fontSizes: string[];
	excludeFontSizes: string[];
	animations: boolean;
	icons: boolean;
}
