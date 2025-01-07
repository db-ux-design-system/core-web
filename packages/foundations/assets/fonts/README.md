# Generate fonts

To generate optimal fonts we use [fonttools](https://github.com/fonttools/fonttools). To use the tools you need python installed:

1. Install [python](https://www.python.org/downloads/)
2. Install fonttools: `pip3 install fonttools`
3. Install brotli: `pip3 install brotli`

Afterward, you can generate a font by running the following command:

```shell
pyftsubset NotoSans-Regular.ttf --layout-features=* --flavor=woff2 --unicodes-file=unicode-eu.txt --output-file=NotoSans-EU-Regular.woff2
```

## Local development

You can use `packages/foundations/assets/fonts/generate-eu-fonts.ts` to generate all fonts inside this directory. To do so, run the following command:

```shell
node packages/foundations/assets/fonts/generate-eu-fonts.ts
```

To check if everything works fine you can check all glyphs [here](https://opentype.js.org/glyph-inspector.html).
