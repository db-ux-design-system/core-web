# DB Font Sizes

The font sizes of foundations consist of [two different sets](./overview) (9 sizes each) for general texts (**Body Font Sizes**) and headlines (**Headline Font Sizes**).
All sizes of both sets are automatically adjusted by the selected [density](./../densities/README.md).

## Body Font Sizes

- By default, the Body Font Size `md` is set to the body tag.
- These 9 Body Font Sizes can also be explicitly set as classes on elements in order to change their font size.

## Headline Font Sizes

- 9 Headline Sizes are available and are usable by custom properties
- 6 Headline Sizes are mapped to native headline tags (`h1` to `h6`) by default. Headlines can therefore be used directly.

## Available variants / sizes

`3xl` | `2xl` | `xl` | `lg` | `md` | `sm` | `xs` | `2xs` | `3xs`

## When to use

- Use our provided **Body Font Sizes** to explicitly change the size of text elements like `<p>`, `<span>` etc.
- Use a **Body Font Size** for a container and all text elements in it (does not affect components font-sizes) .
- **Headline Font Sizes** can be used to override the default mapping of the `h1` - `h6` tags.
- _Advanced: use standardised *custom properties* to define `font-size` and `line-height` in your own components._

### Notes

> - Some sizes may stay the same because of screen width or density.
> - Elements such as `<p>` and all headings (`h1` - `h6`) as well as **DB UX Design System Core components** have font sizes assigned by default so that they can be used without further customisation.

### How to include

For **CSS** and **Tailwind** you need to use the import `@import "@db-ux/core-foundations/build/styles/fonts/classes/all.css";` in your root `.css` file.

For **SCSS** you can use the `.css` file, or you can use a placeholder by importing `@use "@db-ux/core-foundations/build/styles/fonts"` in your `.scss` file, where you need to reference the specific font size.
Then you can use e.g. `sm` font-size by extending our SCSS placeholders like this: `@extend %db-overwrite-font-size-sm`.

> **_NOTE:_** Make sure that you import the file after all other **foundation** css files, otherwise you should overwrite a specific `font-size` with the global selector

```css
/* Global selector */
* {
	font-size: inherit;
	line-height: inherit;
}
```

### How to use

The following options are recommended for applying **Body Font Sizes**:

- CSS classes
- CSS `data-`attributes
- SCSS placeholders
- Tailwind classes

All options (except the last one) set `font-size`, `line-height` and some **CSS Custom Properties** for an element. These custom properties are internally required by some components to be displayed correctly.

> All available variants / sizes, [see also the detailed overview](./overview):
>
> `3xl` | `2xl` | `xl` | `lg` | `md` | `sm` | `xs` | `2xs` | `3xs`

**Note: We use `XX` here. You should replace it with a size from above.**

|           CSS class           | CSS data-attribute        | SCSS                                     | Tailwind                      |
| :---------------------------: | ------------------------- | ---------------------------------------- | ----------------------------- |
|   `class="db-font-size-XX"`   | `data-font-size="XX"`     | `@extend %db-overwrite-font-size-XX`     | `class="db-font-size-XX"`     |
| `class="db-headline-size-XX"` | `data-headline-size="XX"` | `@extend %db-overwrite-headline-size-XX` | `class="db-headline-size-XX"` |

#### Advanced use: CSS Custom Properties

> **_Note:_** The direct use of custom properties to set font sizes should be avoided if possible. If this is unavoidable, existing restrictions should be taken into account.

All of the above options are available for applying the **Body Font Sizes** to HTML elements within custom components.
In some cases it may make sense to set the `font-size` and `line-height` manually in the css.

**Please replace `XX` in the custom-properties with one of the sizes:**

```css
.text-element {
	font: var(--db-type-body-XX);
}
```
