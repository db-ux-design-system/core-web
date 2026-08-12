## Best Practise / Common AI mistakes

- always read this file if you use Components: `**agent-path**/agent/Best-Practise_Common-AI-Mistakes.md`

## Styling Dependencies

Import the styles in `scss` or `css`. Based on your technology the file names could be different.

- `relative`: asset path point to `../assets`
- `webpack`: asset path point to `~@db-ux/core-foundations/assets`
- `rollup`: asset path point to `@db-ux/core-foundations/assets`

**Important**: The component bundle includes the semantic foundation defaults and all component styles. A separate theme entry provides the palette tokens, fonts, and icons.

**CSS**

Import the theme and the pre-layered component entry so DB UX global defaults don't override unlayered third-party component styles:

```css
/* index.css */
@layer whitelabel-theme, db-ux;

@import "@db-ux/core-foundations/build/styles/theme/rollup.css"
	layer(whitelabel-theme);
@import "@db-ux/core-components/build/styles/layered.css";
```

You can import both entries from JavaScript as well:

```js
import "@db-ux/core-foundations/build/styles/theme/rollup.css";
import "@db-ux/core-components/build/styles/layered.css";
```

> **Note:** Create a global `.css` entry file when multiple named layers need an explicit order. Its `@layer` order declaration must load before any stylesheet creates those layers.
