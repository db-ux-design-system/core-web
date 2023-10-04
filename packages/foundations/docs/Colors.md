# Colors

-   You use `Colors` to highlight an area with a specific color.
-   You can also use it to change the text color for components with the `*-transparent-semi` colors.
-   Most classes/placeholders will change color and background-color and will set properties, which will be passed down to adaptive components.

## How to include colors

For `CSS` and `Tailwind` you need to use the import `@import "@db-ui/foundations/build/css/color/classes/all.css";` in your root `.css` file.
Or if you only want a single variant e.g. `informational` you can import `@import "@db-ui/foundations/build/css/color/classes/informational.css";`.

In case that you're either using a bundler (recommended) or importing the CSS within your JavaScript files, please adapt this `@import` syntax accordingly.

For `SCSS` you need to use this import `@use @db-ui/foundations/build/scss/color/placeholder` in your `.scss` file, where you need the specific variable.
Then you can use e.g. `informational` by extending this: `@extend %db-bg-informational`.

### How to use

You can see all possible colors [here](./overview).

|             Variant              | CSS                                            | SCSS                                            | Tailwind                                       |
| :------------------------------: | ---------------------------------------------- | ----------------------------------------------- | ---------------------------------------------- |
|              `base`              | `class="db-bg-base"`                           | `@extend %db-bg-base`                           | `class="db-bg-base"`                           |
|     `base-transparent-semi`      | `class="db-bg-base-transparent-semi"`          | `@extend %db-bg-base-transparent-semi`          | `class="db-bg-base-transparent-semi"`          |
|     `base-transparent-full`      | `class="db-bg-base-transparent-full"`          | `@extend %db-bg-base-transparent-full`          | `class="db-bg-base-transparent-full"`          |
|            `neutral`             | `class="db-bg-neutral"`                        | `@extend %db-bg-neutral`                        | `class="db-bg-neutral"`                        |
|    `neutral-transparent-semi`    | `class="db-bg-neutral-transparent-semi"`       | `@extend %db-bg-neutral-transparent-semi`       | `class="db-bg-neutral-transparent-semi"`       |
|    `neutral-transparent-full`    | `class="db-bg-neutral-transparent-full"`       | `@extend %db-bg-neutral-transparent-full`       | `class="db-bg-neutral-transparent-full"`       |
|             `brand`              | `class="db-bg-brand"`                          | `@extend %db-bg-brand`                          | `class="db-bg-brand"`                          |
|     `brand-transparent-semi`     | `class="db-bg-brand-transparent-semi"`         | `@extend %db-bg-brand-transparent-semi`         | `class="db-bg-brand-transparent-semi"`         |
|     `brand-transparent-full`     | `class="db-bg-brand-transparent-full"`         | `@extend %db-bg-brand-transparent-full`         | `class="db-bg-brand-transparent-full"`         |
|         `informational`          | `class="db-bg-informational"`                  | `@extend %db-bg-informational`                  | `class="db-bg-informational"`                  |
| `informational-transparent-semi` | `class="db-bg-informational-transparent-semi"` | `@extend %db-bg-informational-transparent-semi` | `class="db-bg-informational-transparent-semi"` |
| `informational-transparent-full` | `class="db-bg-informational-transparent-full"` | `@extend %db-bg-informational-transparent-full` | `class="db-bg-informational-transparent-full"` |
|            `critical`            | `class="db-bg-critical"`                       | `@extend %db-bg-critical`                       | `class="db-bg-critical"`                       |
|   `critical-transparent-semi`    | `class="db-bg-critical-transparent-semi"`      | `@extend %db-bg-critical-transparent-semi`      | `class="db-bg-critical-transparent-semi"`      |
|   `critical-transparent-full`    | `class="db-bg-critical-transparent-full"`      | `@extend %db-bg-critical-transparent-full`      | `class="db-bg-critical-transparent-full"`      |
|            `warning`             | `class="db-bg-warning"`                        | `@extend %db-bg-warning`                        | `class="db-bg-warning"`                        |
|    `warning-transparent-semi`    | `class="db-bg-warning-transparent-semi"`       | `@extend %db-bg-warning-transparent-semi`       | `class="db-bg-warning-transparent-semi"`       |
|    `warning-transparent-full`    | `class="db-bg-warning-transparent-full"`       | `@extend %db-bg-warning-transparent-full`       | `class="db-bg-warning-transparent-full"`       |
|           `successful`           | `class="db-bg-successful"`                     | `@extend %db-bg-successful`                     | `class="db-bg-successful"`                     |
|  `successful-transparent-semi`   | `class="db-bg-successful-transparent-semi"`    | `@extend %db-bg-successful-transparent-semi`    | `class="db-bg-successful-transparent-semi"`    |
|  `successful-transparent-full`   | `class="db-bg-successful-transparent-full"`    | `@extend %db-bg-successful-transparent-full`    | `class="db-bg-successful-transparent-full"`    |
