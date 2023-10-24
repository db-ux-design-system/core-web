# Colors

-   You use `Colors` to highlight an area with a specific color.
-   You can also use it to change the text color for components with the `*-transparent-semi` colors.
-   Most classes/placeholders will change `color` and `background-color` and will set properties, which will be passed down to adaptive components.

## How to include colors

For `CSS` and `Tailwind` you need to use the import `@import "@db-ui/foundations/build/css/color/classes/all.css";` in your root `.css` file.
Or if you only want a single variant e.g. `informational` you can import `@import "@db-ui/foundations/build/css/color/classes/informational.css";`.

In case that you're either using a bundler (recommended) or importing the CSS within your JavaScript files, please adapt this `@import` syntax accordingly.

For `SCSS` you need to use the import `@use @db-ui/foundations/build/scss/color/placeholder` in your `.scss` file, where you need to reference the specific variable.
Then you can use e.g. `informational` color by extending our SCSS placeholders like this: `@extend %db-bg-informational`.

### How to use

We're providing an [overview for all possible colors](./overview).

There are several variants: `base`, `brand`, `neutral`, `critical`, `informational`, `successful`, `warning`.

**We use `XXX` here you should replace it with a variant from above.**

|        Variant         | CSS                                  | SCSS                                  | Tailwind                             |
| :--------------------: | ------------------------------------ | ------------------------------------- | ------------------------------------ |
|         `XXX`          | `class="db-bg-XXX"`                  | `@extend %db-bg-XXX`                  | `class="db-bg-XXX"`                  |
| `XXX-transparent-semi` | `class="db-bg-XXX-transparent-semi"` | `@extend %db-bg-XXX-transparent-semi` | `class="db-bg-XXX-transparent-semi"` |
| `XXX-transparent-full` | `class="db-bg-XXX-transparent-full"` | `@extend %db-bg-XXX-transparent-full` | `class="db-bg-XXX-transparent-full"` |
