# Variables

- You use Variables to style your pages and custom components.
- The Variables are primarily for paddings, margins and all kinds of sizes.
- All variables are automatically predefined with the correct variable based on the [density](../densities/readme).
- Based on the density and the selected theme, the "real" value behind the variable can change.

## How to include variables

For **CSS** and **Tailwind** you don't have to include a specific file, just follow the documentation for [foundations](../README.md).

For **SCSS** you need to use the import `@use "@db-ux/core-foundations/build/styles/variables"` in your `.scss` file, where you want to reference the specific variable.

## Simple overview for advanced

| Variable type          | T-Shirts 👕                                | Base |
| ---------------------- | ------------------------------------------ | ---- |
| **spacing fixed**      | `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl` | `md` |
| **spacing responsive** | `xs`, `sm`, `md`, `lg`, `xl`               | `md` |
| **sizing**             | `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl` | `md` |

## Spacing fixed

- We use **spacing fixed** to add margins, paddings, gaps, etc.
- We don't use them for `width` or `height`.
- Those are the main variables you use all the time to build your page or component.

### How to use

We use **padding** as an example for this variable.

You can see a visual preview [spacings fixed examples page](./examples).

| T-Shirt 👕 | CSS                                    | SCSS                                       | Tailwind    |
| :--------: | -------------------------------------- | ------------------------------------------ | ----------- |
|   `3xs`    | `padding: var(--db-spacing-fixed-3xs)` | `padding: variables.$db-spacing-fixed-3xs` | `p-fix-3xs` |
|   `2xs`    | `padding: var(--db-spacing-fixed-2xs)` | `padding: variables.$db-spacing-fixed-2xs` | `p-fix-2xs` |
|    `xs`    | `padding: var(--db-spacing-fixed-xs)`  | `padding: variables.$db-spacing-fixed-xs`  | `p-fix-xs`  |
|    `sm`    | `padding: var(--db-spacing-fixed-sm)`  | `padding: variables.$db-spacing-fixed-sm`  | `p-fix-sm`  |
|    `md`    | `padding: var(--db-spacing-fixed-md)`  | `padding: variables.$db-spacing-fixed-md`  | `p-fix-md`  |
|    `lg`    | `padding: var(--db-spacing-fixed-lg)`  | `padding: variables.$db-spacing-fixed-lg`  | `p-fix-lg`  |
|    `xl`    | `padding: var(--db-spacing-fixed-xl)`  | `padding: variables.$db-spacing-fixed-xl`  | `p-fix-xl`  |

## Spacing responsive

- We use **spacing responsive** to add spacings which should change based on the users' device.
- We don't use them for `width` or `height`.
- Best example would be the padding for your `main` region which should be larger on a desktop device than mobile.
- We recommend using `DBSection` from our [components library](../../components/readme). The component handles the responsive Layout for your app, you don't have to struggle which spacing would be the correct one.

### How to use

We use **padding** as an example for this variable.

You can see a visual preview [spacings responsive examples page](./examples).

| T-Shirt 👕 | CSS                                        | SCSS                                           | Tailwind   |
| :--------: | ------------------------------------------ | ---------------------------------------------- | ---------- |
|    `xs`    | `padding: var(--db-spacing-responsive-xs)` | `padding: variables.$db-spacing-responsive-xs` | `p-res-xs` |
|    `sm`    | `padding: var(--db-spacing-responsive-sm)` | `padding: variables.$db-spacing-responsive-sm` | `p-res-sm` |
|    `md`    | `padding: var(--db-spacing-responsive-md)` | `padding: variables.$db-spacing-responsive-md` | `p-res-md` |
|    `lg`    | `padding: var(--db-spacing-responsive-lg)` | `padding: variables.$db-spacing-responsive-lg` | `p-res-lg` |
|    `xl`    | `padding: var(--db-spacing-responsive-xl)` | `padding: variables.$db-spacing-responsive-xl` | `p-res-xl` |

## Sizing

- We use **sizing** to set a fixed height to components (Button, Input, ...).
- We don't use them for `padding` or `margin` except for absolute elements inside a component with a fixed height.
- You should use a sizing variable if you want to align a custom component with another component, which has a fixed height.

### How to use

We use **height** as an example for this variable.

You can see a visual preview [sizings examples page](./examples).

| T-Shirt 👕 | CSS                            | SCSS                               | Tailwind    |
| :--------: | ------------------------------ | ---------------------------------- | ----------- |
|    `xs`    | `height: var(--db-sizing-xs)`  | `height: variables.$db-sizing-xs`  | `h-siz-xs`  |
|    `sm`    | `height: var(--db-sizing-sm)`  | `height: variables.$db-sizing-sm`  | `h-siz-sm`  |
|    `md`    | `height: var(--db-sizing-md)`  | `height: variables.$db-sizing-md`  | `h-siz-md`  |
|    `lg`    | `height: var(--db-sizing-lg)`  | `height: variables.$db-sizing-lg`  | `h-siz-lg`  |
|    `xl`    | `height: var(--db-sizing-xl)`  | `height: variables.$db-sizing-xl`  | `h-siz-xl`  |
|   `2xl`    | `height: var(--db-sizing-2xl)` | `height: variables.$db-sizing-2xl` | `h-siz-2xl` |
|   `3xl`    | `height: var(--db-sizing-3xl)` | `height: variables.$db-sizing-3xl` | `h-siz-3xl` |
