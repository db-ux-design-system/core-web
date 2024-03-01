# Font-Sizes

-   You should use our provided `Font-Sizes` to change the size of text elements like `<p>` etc.

> **_NOTE:_** Some sizes may stay the same because of screen-width or density.

## How to include colors

For `CSS` and `Tailwind` you need to use the import `@import "@db-ui/foundations/build/css/fonts/classes/all.css";` in your root `.css` file.

For `SCSS` you can use the `css` file, or you can use a placeholder by importing `@use @db-ui/foundations/build/scss/fonts` in your `.scss` file, where you need to reference the specific font size.
Then you can use e.g. `sm` font-size by extending our SCSS placeholders like this: `@extend %db-overwrite-font-size-sm`.

> **_NOTE:_** Make sure that you import the file after all other `foundation` css files, otherwise you might overwrite a specific font-size with the global selector

```css
/* Global selector */
* {
	font-size: inherit;
	line-height: inherit;
}
```

### How to use

We're providing an [overview for all possible font-sizes](./overview).

There are several variants: `3xl`, `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`, `3xs`.

**We use `XXX` here you should replace it with a variant from above.**

| Variant | CSS                        | SCSS                                  | Tailwind                   |
| :-----: | -------------------------- | ------------------------------------- | -------------------------- |
|  `XXX`  | `class="db-font-size-XXX"` | `@extend %db-overwrite-font-size-XXX` | `class="db-font-size-XXX"` |
