/**
 * PROTOTYPE – content of the "Getting Started" page of each framework
 * Storybook: the minimum to render the first component. Everything beyond
 * (Vite plugin, PostCSS plugin, ESLint, asset path variants, troubleshooting)
 * stays on the setup pages of the Design System Platform and is linked.
 *
 * The code blocks follow the platform setup pages
 * (`content/pages/documentation/learn/<framework>-setup.mdx`) and the DB Theme
 * setup page. Keep both in sync when the setup changes.
 */
export type CodeBlock = { language: string; code: string };

export type FrameworkSetup = {
	/** File the styles go into, as named on the platform setup page. */
	stylesFile: string;
	/** How the stylesheet gets into the app. */
	stylesNote: string;
	/** Framework-specific step after the styles, if any. */
	extraStep?: { heading: string; text: string; block: CodeBlock };
	/** Smallest snippet that shows whether styles, font and icons load. */
	check: CodeBlock;
};

/** Whitelabel theme first, components after it – order fixed by `@layer`. */
export const whitelabelStyles = (file: string): string => `/* ${file} */
@layer whitelabel-theme, db-ux;
@import '@db-ux/core-foundations/build/styles/theme/rollup.css' layer(whitelabel-theme);
@import '@db-ux/core-components/build/styles/bundle.css' layer(db-ux);`;

/** DB Theme: replaces the whitelabel theme and comes last. */
export const dbThemeStyles = (file: string): string => `/* ${file} */
@layer db-ux, db-theme;
@import '@db-ux/core-components/build/styles/rollup.css' layer(db-ux);
@import '@db-ux/db-theme/build/styles/rollup.css' layer(db-theme);`;

export const SETUP: Record<string, FrameworkSetup> = {
	react: {
		stylesFile: 'src/index.css',
		stylesNote:
			'Import the file once, for example in `src/main.tsx`: `import "./index.css";`',
		check: {
			language: 'tsx',
			code: `import { DBButton } from '@db-ux/react-core-components';

export const App = () => (
  <DBButton variant="brand" icon="arrow_right">
    Add item to cart
  </DBButton>
);`
		}
	},
	angular: {
		stylesFile: 'src/styles.css',
		stylesNote:
			'Angular loads `src/styles.css` through the `styles` entry in `angular.json`, which new projects already have.',
		extraStep: {
			heading: 'Let Angular resolve the fonts',
			text: 'In `angular.json`, set `outputHashing` to `media` for the development build, so the font files resolve during `ng serve`:',
			block: {
				language: 'json',
				code: `"development": {
	"outputHashing": "media"
}`
			}
		},
		check: {
			language: 'typescript',
			code: `import { Component } from '@angular/core';
import { DBButton } from '@db-ux/ngx-core-components';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [DBButton],
	template: \`<db-button variant="brand" icon="arrow_right">Add item to cart</db-button>\`
})
export class AppComponent {}`
		}
	},
	vue: {
		stylesFile: 'src/style.css',
		stylesNote:
			'Import the file once in `src/main.ts`: `import "./style.css";`',
		check: {
			language: 'html',
			code: `<script setup lang="ts">
import { DBButton } from '@db-ux/v-core-components';
</script>

<template>
  <DBButton variant="brand" icon="arrow_right">Add item to cart</DBButton>
</template>`
		}
	},
	webcomponents: {
		stylesFile: 'index.css',
		stylesNote:
			'Load the file once, with your bundler or with `<link rel="stylesheet" href="index.css" />`.',
		extraStep: {
			heading: 'Register the custom elements once',
			text: 'The bundle entry point is self-contained, so `@stencil/core` is not needed:',
			block: {
				language: 'js',
				code: `// main.js
import { defineCustomElements } from '@db-ux/wc-core-components/bundle/index.js';

defineCustomElements();`
			}
		},
		check: {
			language: 'html',
			code: `<db-button variant="brand" icon="arrow_right">Add item to cart</db-button>`
		}
	},
	html: {
		stylesFile: 'index.css',
		stylesNote:
			'Load the file once, with your bundler or with `<link rel="stylesheet" href="index.css" />`.',
		check: {
			language: 'html',
			code: `<button class="db-button" type="button" data-variant="brand" data-icon="arrow_right">
	Add item to cart
</button>`
		}
	}
};
