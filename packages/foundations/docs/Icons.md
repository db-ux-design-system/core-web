# Icons

- We use icon fonts as **woff2** files for all our icons.
- We auto generate these files out of `.svg` files.
- A lot of our [components](../../components/readme) have an `icon` property you can pass in.
- Use the CSS Custom Property `--db-icon-color` to overwrite the icons color.

## How to include icons

For **CSS**, **SCSS** and **Tailwind** you don't have to include a specific file, just follow the documentation for [foundations](../../foundations/readme).

### How to use

We're providing an [overview for all of our icons](./overview).

You can add an icon before or after a tag, by adding an `data-` attribute to your HTML code, like for example:

| Variant  |                  Data                  |
| -------- | :------------------------------------: |
| `before` |    `data-icon="icon-from-overview"`    |
| `after`  | `data-icon-after="icon-from-overview"` |

### Icons color

You could use the CSS Custom Property `--db-icon-color` to overwrite the icons color, be it icon fonts or when using the SVG files directly. Or `--db-icon-pulse-color` for the illustrative icons pulse color.

## Custom Icons

If you have custom icons and want to use them for foundations and/or in components, you need to generate a **woff2** file.

[More information](./CustomIcons.md)
