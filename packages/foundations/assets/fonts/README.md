# Generate fonts

To generate optimal fonts we use [fonttools](https://github.com/fonttools/fonttools). To use the tools you need python installed:

1. Install [python](https://docs.python-guide.org/starting/installation/#installation) and [ensure that you can run Python from the command line](https://packaging.python.org/en/latest/tutorials/installing-packages/#ensure-you-can-run-python-from-the-command-line)
2. Install fonttools: `pip3 install fonttools`
3. Install brotli: `pip3 install brotli`

Afterward, you can generate a font by running the following command:

```shell
pyftsubset OpenSans-Regular.ttf --layout-features=* --flavor=woff2 --unicodes-file=unicode-eu.txt --output-file=OpenSans-Regular-EU.woff2
```

## Local development

You can use `packages/foundations/assets/fonts/generate-eu-fonts.ts` to generate all fonts inside this directory. To do so, run the following command:

```shell
tsx packages/foundations/assets/fonts/generate-eu-fonts.ts
```

To check if everything works fine you can check all glyphs with an [opentype.js.org glyph inspector tool](https://opentype.js.org/glyph-inspector.html).
