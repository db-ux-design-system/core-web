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
