# Custom Icons

If you have custom icons and want to use them for [foundations](https://www.npmjs.com/package/@db-ui/foundations) and/or in [components](https://www.npmjs.com/package/@db-ui/components), you need to generate a **woff2** file.

Check out the `icon-font-tools` [documentation](https://github.com/db-ui/icon-font-tools?tab=readme-ov-file#generate-icon-fonts) to generate a **woff2** file.

## Foundation Developer

If you update a **svg** inside `assets/icons/functional/images` you need to recreate the **woff2** file.

For this you just need to run the following command from root:

```shell
npm run update:icon-fonts
```

Your new icon should be inside `assets/icons/functional/fonts/**/info.json` and you should see it inside `assets/icons/functional/fonts/**/index.html` in the browser.
