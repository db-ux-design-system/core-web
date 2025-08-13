# Colors

- You use **Colors** to highlight an area with a specific color.
- You can also use it to change the text color for components with the `*-transparent-semi` colors.
- Most classes/placeholders will change `color` and `background-color` and will set properties, which will be passed down to adaptive components.

## How to use

1. First, you can use our **[color usage guide](./color-usage-guide)** to find out which method is best for coloring your layouts or components.
2. The colors of layouts can be easily set using the predefined **[color schemes](./color-schemes)**.
3. When developing your own components, `SCSS` variables or `CSS Custom Properties` should be used.

**🚧 The overview of our color variables is still in the making. Please come back soon.**

## How to include colors

For **CSS** and **Tailwind** you need to use the import `@import "@db-ux/core-foundations/build/styles/colors/classes/all.css";` in your root `.css` file.
Or if you only want a single variant e.g. **informational** you can import `@import "@db-ux/core-foundations/build/styles/colors/classes/informational.css";`.

In case that you're either using a bundler (recommended) or importing the CSS within your JavaScript files, please adapt this `@import` syntax accordingly.

For **SCSS** you need to use the import `@use "@db-ux/core-foundations/build/styles/colors/placeholder"` in your `.scss` file, where you need to reference the specific variable.
Then you can use e.g. **informational** color by extending our SCSS placeholders like this: `@extend %db-informational-bg-1`.

## Dark- & Light-Mode

We provide tokens for both dark- and light-mode. If you include the **relative** style you get a media query `@media (prefers-color-scheme: dark)` with the relevant tokens. You can [emulate](https://developer.chrome.com/docs/devtools/rendering/emulate-css/) the modes inside the devtools.

It's [recommended to set a `meta`-HTML-tag](https://web.dev/articles/color-scheme#the_color-scheme_meta_tag) to provide a signal to the browser on your accepted color schemes previous to loading the CSS:

```html
<meta name="color-scheme" content="dark light" />
```

We recommend using the default media query based on the user preference, but if you want to force a mode for your page, you could set the `color-scheme` `meta`-HTML-tag to either [`only light`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#only_light), [`dark` or `light`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#light).

If you want to set it on a specific container as e.g. shown on the documentation page "Color schemes" you can do that by adding the HTML-attributes `data-mode="dark"` or `data-mode="light"`:

### HTML

```html
<div data-mode="dark">...</div>
```

We're providing an example in our [color schemes documentation](./color-schemes).

We need to set the **base** background to the element with `[data-mode]` so if you want to change the background to another color, make sure to use a wrapping tag like `<div>` with the `[data-mode]` to avoid issues.
