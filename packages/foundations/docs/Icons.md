# Icons

-   We use icon fonts as `woff2` files for all our icons.
-   We auto generate these files out of `.svg` files.
-   A lot of our [components](../../components/readme) have an `icon` property you can pass in.

## How to include colors

For `CSS`, `SCSS` and `Tailwind` you don't have to include a specific file, just follow the documentation for [foundations](../../foundations/readme).

### How to use

You can see an overview of the icons [here](./overview).

You can add an icon before or after a tag, by adding an `data-` attribute to your `html`.

| Variant |                  Data                  |
| ------- | :------------------------------------: |
| before  |    `data-icon="icon-from-overview"`    |
| after   | `data-icon-after="icon-from-overview"` |

## Custom Icons

If you have custom icons and want to use them for foundations and/or in components, you need to generate a `woff2` file.

For this run:

```shell
node node_modules/@db-ui/foundations/scripts/generate-icon-fonts/index.js --src ./my-path-to/icons --fontName my-name
```

We search for all `**/*.svg` files inside the `src` directory and create a new icon font with the provided name.

> **_NOTE:_** We use 3 different sizes for components (16,20,24,32) to show more or less details. You can do the same by providing another file with a size postfix for example "icon_file_name_16.svg".

In your app you need to include some of the generated files:

`./my-path-to/icons/fonts/my-name.woff2`

`./my-path-to/icons/fonts/font-face.css`

Now you can use your icons with your `font-family: my-name`, e.g.:

```html
<!--example.html-->
<i class="my-name">icon_file_name</i>
```

### data-icon

If you like to use a custom icon in one of our components you can do it by overwriting the default font-family like this:

```html
<!--example.html-->

<p class="icon-family-my-name" data-icon="icon_file_name">Test</p>
<!-- or -->
<p data-icon-family="my-name" data-icon="icon_file_name">Test</p>
```

### Foundation Developer

If you update a `svg` inside `assets/icons/functional/images` you need to recreate the `woff2` file.

For this you just need to run

```shell
npm run generate:icon-fonts
```

Your new icon should be inside `assets/icons/functional/fonts/info.json` and you should see it inside `assets/icons/functional/fonts/index.html` in the browser.
