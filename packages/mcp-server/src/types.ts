/** Supported target frameworks for DB UX component code generation. */
export type Framework =
	'react' | 'angular' | 'vue' | 'web-components' | 'html' | 'vanilla';

/**
 Frameworks for which the manifest carries generated example code.

 `html` and `vanilla` are excluded: the build only reads examples from the
 generated framework outputs, so there is nothing to embed for them. Users are
 pointed at the component's docs/HTML.md instead.
 */
export type ExampleCodeFramework = Exclude<Framework, 'html' | 'vanilla'>;

/** Maps each framework to its corresponding @db-ux/* Npm package name. */
export const FRAMEWORK_PKG: Record<Framework, string> = {
	react: '@db-ux/react-core-components',
	angular: '@db-ux/ngx-core-components',
	vue: '@db-ux/v-core-components',
	'web-components': '@db-ux/wc-core-components',
	html: '@db-ux/core-components',
	vanilla: '@db-ux/core-components'
};
