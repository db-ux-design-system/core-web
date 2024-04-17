# Colors

-   You use `Colors` to highlight an area with a specific color.
-   You can also use it to change the text color for components with the `*-transparent-semi` colors.
-   Most classes/placeholders will change `color` and `background-color` and will set properties, which will be passed down to adaptive components.

## How to include colors

For `CSS` and `Tailwind` you need to use the import `@import "@db-ui/foundations/build/css/color/classes/all.css";` in your root `.css` file.
Or if you only want a single variant e.g. `informational` you can import `@import "@db-ui/foundations/build/css/color/classes/informational.css";`.

In case that you're either using a bundler (recommended) or importing the CSS within your JavaScript files, please adapt this `@import` syntax accordingly.

For `SCSS` you need to use the import `@use @db-ui/foundations/build/scss/color/placeholder` in your `.scss` file, where you need to reference the specific variable.
Then you can use e.g. `informational` color by extending our SCSS placeholders like this: `@extend %db-informational-bg-1`.

### How to use

We're providing an [overview for all possible colors](./overview).

There are several variants: `base`, `brand`, `neutral`, `critical`, `informational`, `successful`, `warning`.

**We use `XXX` here you should replace it with a variant from above.**

|        Variant         | CSS                                  | SCSS                                  | Tailwind                             |
| :--------------------: | ------------------------------------ | ------------------------------------- | ------------------------------------ |
|       `XXX-bg-1`       | `class="db-XXX-bg-1"`                | `@extend %db-XXX-bg-1`                | `class="db-XXX-bg-1"`                |
|       `XXX-bg-2`       | `class="db-XXX-bg-2"`                | `@extend %db-XXX-bg-2`                | `class="db-XXX-bg-2"`                |
|       `XXX-bg-3`       | `class="db-XXX-bg-3"`                | `@extend %db-XXX-bg-3`                | `class="db-XXX-bg-3"`                |
| `XXX-transparent-semi` | `class="db-XXX-bg-transparent-semi"` | `@extend %db-XXX-bg-transparent-semi` | `class="db-XXX-bg-transparent-semi"` |
| `XXX-transparent-full` | `class="db-XXX-bg-transparent-full"` | `@extend %db-XXX-bg-transparent-full` | `class="db-XXX-bg-transparent-full"` |

### Dark- & Light-Mode

We provide tokens for both dark- and light-mode. If you include the `db-ui-42` style you get a media query `@media (prefers-color-scheme: dark)` with the relevant tokens. You can [emulate](https://developer.chrome.com/docs/devtools/rendering/emulate-css/) the modes inside the devtools.
We recommend using the default media query based on the user preference, but if you want to force a mode for your page or a container you can do it with adding the attributes `data-color-scheme="dark"` or `data-color-scheme="light"`:

#### HTML

```html
<div data-color-scheme="dark">...</div>
```

We're providing an example in our [color schemes documentation](./color-schemes).

We need to set the `base` background to the element with `[data-color-scheme]` so if you want to change the background to another color, make sure to use a wrapping tag like `div` with the `[data-color-scheme]` to avoid issues.
