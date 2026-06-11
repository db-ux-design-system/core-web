## Best Practise / Common AI mistakes

- always read this file if you use Components: `**agent-path**/agent/Best-Practise_Common-AI-Mistakes.md`

## Styling Dependencies

Import the styles in `scss` or `css`. Based on your technology the file names could be different.

- `relative`: asset path point to `../assets`
- `webpack`: asset path point to `~@db-ux/core-foundations/assets`
- `rollup`: asset path point to `@db-ux/core-foundations/assets`

**Important**: These bundled files automatically include **all dependencies from [foundations](https://www.npmjs.com/package/@db-ux/core-foundations)** (design tokens, colors, fonts, etc.) **and all [components](https://github.com/db-ux-design-system/core-web/blob/main/packages/components/src/styles/db-ux-components.scss)** - everything you need in one import!

**CSS**

```css
// index.css
@import "@db-ux/core-components/build/styles/rollup.css";
```

> **Note:** Create a new `.css` file if not present to include the styles
