# How to create and provide the technical icon font files

We're taking the SVG icons out of the other folder `packages/foundations/assets/icons/functional/images` in case of any additions by the following steps:

-   Choose one of the two sources JSON files (`outline-selection.json` or `solid-selection.json`) for importing the previous icon stack out of the folder `packages/foundations/assets/icons/functional/fonts/sources`
-   Import those within [icomoon.io app](https://icomoon.io/app/#/select)
-   Make your changes to the icon set (like e.g. adding icons by just drag and drop the SVGs to the set).
-   Ensure that "ligatures" is activated on the top left instead of "codes" on the "Generate font" tab
-   Provide the ligature in the form `^iconname$` to each icon, where `iconname` is the name of your icon (like e.g. `^error$`).
-   Download new package.
-   Overwrite the previous used sources JSON file by the new `selection.json` ouf of that downloaded package
-   Create an `woff2` version out of the included `woff` icon font file e.g. via the service <https://everythingfonts.com/woff-to-woff2>
-   Overwrite the existing font file within `packages/foundations/assets/icons/functional/fonts` folder.

Please additionally run `npm run generate:icon-types -w=@db-ui/components` after copying new SVG files to the `packages/foundations/assets/icons/functional/images` folder for our types to get updated.
