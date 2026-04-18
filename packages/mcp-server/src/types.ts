/** Supported target frameworks for DB UX component code generation. */
export type Framework = 'react' | 'angular' | 'vue' | 'web-components' | 'html';

/** Maps each framework to its corresponding @db-ux/* npm package name. */
export const FRAMEWORK_PKG: Record<Framework, string> = {
	react: '@db-ux/react-core-components',
	angular: '@db-ux/ngx-core-components',
	vue: '@db-ux/v-core-components',
	'web-components': '@db-ux/wc-core-components',
	html: '@db-ux/core-components'
};
