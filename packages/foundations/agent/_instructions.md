## CSS

- If you use CSS, follow these rules:
    - Always reference the file `**agent-path**/agent/css/Variables.md` for variables like sizing, spacing, elevation, border, or container-size. This file contains the authoritative list of available variables.
    - Use the examples provided in `Variables.md` to ensure correct usage like:
        - `padding: var(--db-spacing-fixed-md);`
        - `height: var(--db-sizing-md);`
        - `width: var(--db-container-xs);`
        - `color: var(--db-adaptive-on-bg-basic-emphasis-90-default);`
        - `background-color: var(--db-adaptive-bg-basic-level-2-default);`
        - `font: var(--db-type-body-sm);`

## SCSS

- If you use SCSS, follow these rules:
    - Always reference the file `**agent-path**/agent/scss/Variables.md` for variables like sizing, spacing, elevation, border, or container-size. This file contains the authoritative list of available variables.
    - Use the examples provided in `Variables.md` to ensure correct usage.
    - Always use `@use` for imports:
        - Variables: `@use "@db-ux/core-foundations/build/styles/variables";`
        - Colors: `@use "@db-ux/core-foundations/build/styles/colors";`
        - Fonts: `@use "@db-ux/core-foundations/build/styles/fonts";`
        - Never use `as *` for the `@use`, use it like this:
            - `padding: variables.$db-spacing-fixed-md;`
            - `height: variables.$db-sizing-md;`
            - `width: variables.$db-container-xs;`
            - `color: colors.$db-adaptive-on-bg-basic-emphasis-90-default;`
            - `background-color: colors.$db-adaptive-bg-basic-level-2-default;`
            - `font: fonts.$db-type-body-sm;`

## Tailwind

- If you use Tailwind, follow these rules:
    - Always reference the file `**agent-path**/agent/tailwind/Variables.md` for variables like sizing, spacing, elevation, border, or container-size. This file contains the authoritative list of available variables.
    - Use the examples provided in `Variables.md` to ensure correct usage like:
        - padding: `p-fix-md`
        - height: `h-siz-md`
        - width: `w-container-xs`
        - color: `text-adaptive-on-bg-basic-emphasis-90-default`
        - background-color: `bg-adaptive-bg-basic-level-2-default`
        - font: `text-body-sm`
    - Always stick to the variables. Don't use values like `p-4` or `m-[16px]`; use `p-fix-xs` or `m-fix-md` instead.

## Figma MCP

- If you use Figma MCP always generate code with project's conventions, such as using @db-ux/core-components and @db-ux/core-foundations.
- If a code snippet from Figma MCP has a font-family with "DB Neo Screen Head" use HTML headlines (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` HTML tags).
- If the headline has a `font-weight: 300;` use `data-variant="light"` additionally.
- If a code snippet has a Figma `Mode`, add it as `data-xxx`, where `xxx` is the mode in lower-case.

### Tailwind

If you use tailwind follow those rules as well:

- Don't use values like `p-4` or `m-[16px]`; use `p-fix-xs` or `m-fix-md` instead.
- Never use something like `font-['DB_Neo_Screen_Head']` and `leading-[48px]` instead use `text-head-xx` class, where `-xx` can be a t-shirt size from `3xs` to `3xl`; If it has a `font-wight:300;` use `text-head-light-xx` instead.

## Stylelint Rules (Common CSS/SCSS Mistakes)

The `@db-ux/core-stylelint` plugin enforces design token usage. Never use raw `px`, `rem`, or hardcoded color values for the following properties:

### Spacings (`db-ux/use-spacings`)

- Applies to: `margin`, `padding`, `gap` (and all sub-properties like `margin-top`, `padding-inline`, etc.)
- Use `var(--db-spacing-fixed-xx)` or `var(--db-spacing-responsive-xx)` instead of `px`/`rem` values
- `var(--db-sizing-xx)`, `%`, `vw`, `vh` are also allowed
- Allowed exact values: `0px`, `0`, `auto`, `inherit`, `initial`, `unset`
- ❌ `margin: 20px;` / `padding: 0.5rem;` / `margin-top: 8px;`
- ✅ `margin: var(--db-spacing-fixed-md);` / `padding: var(--db-spacing-responsive-lg);`

### Sizing (`db-ux/use-sizing`)

- Applies to: `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`, `block-size`, `inline-size`
- Use `var(--db-sizing-xx)`, `var(--db-screen-xx)`, `var(--db-container-xx)`, `%`, `lh`, `ch`, `vw`, `vh` instead of `px`/`rem`
- Additional allowed values: `fit-content`, `max-content`, `min-content`, `none`, `revert`, `revert-layer`
- ❌ `width: 100px;` / `height: 50px;` / `block-size: 200px;`
- ✅ `width: var(--db-sizing-md);` / `height: 100%;` / `block-size: var(--db-screen-sm);`

### Border Radius (`db-ux/use-border-radius`)

- Applies to: all `border-*-radius` properties
- Use `var(--db-border-radius-xx)` instead of `px`/`rem`
- ❌ `border-radius: 4px;` / `border-top-left-radius: 0.5rem;`
- ✅ `border-radius: var(--db-border-radius-md);`

### Border Width (`db-ux/use-border-width`)

- Applies to: `border`, `border-top`, `border-right`, `border-bottom`, `border-left`, `border-block`, `border-block-start`, `border-block-end`, `border-inline`, `border-inline-start`, `border-inline-end`, and all `border-*-width` properties
- Use `var(--db-border-width-xx)` instead of `px`/`rem` for the width part
- ❌ `border: 1px solid transparent;` / `border-top: 2px solid red;`
- ✅ `border: var(--db-border-width-sm) solid transparent;`

### Border Color (`db-ux/use-border-color`)

- Applies to: same border properties as border-width, plus all `border-*-color` properties
- Use `var(--db-adaptive-on-bg-basic-emphasis-xx-default)` or `var(--db-adaptive-on-bg-inverted)` for border colors
- `transparent` and `currentcolor` are also allowed
- ❌ `border: 1px solid red;` / `border-color: #ff0;` / `border-top: 1px solid blue;`
- ✅ `border: var(--db-border-width-sm) solid var(--db-adaptive-on-bg-basic-emphasis-100-default);`

### General Notes

- CSS custom properties (`--my-var`) and SCSS variables (`$my-var`) are always allowed as values
- `0px`, `0`, `auto`, `inherit`, `initial`, `unset` are always allowed
- `calc()` expressions can be allowed via config option `allowCalc: true`
