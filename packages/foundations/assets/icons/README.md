# Icons

This icon package contains all functional and illustrative icons that are provided in the DB UX Design System. The icons can also be found individually in the icon libraries of the marketing portal:
- [Functional Icons](https://marketingportal.extranet.deutschebahn.com/marketingportal/Marke-und-Design/Basiselemente/Icons/Icon-Bibliotheken/Bibliothek-Funktionale-Icons)
- [Illustrative Icons](https://marketingportal.extranet.deutschebahn.com/marketingportal/Marke-und-Design/Basiselemente/Icons/Icon-Bibliotheken/Bibliothek-Illustrative-Icons)

## Dev related: How to provide these icons
### Modifications for SVGs

We process the following changes:

-   Minifications with [`ImageOptim`](https://imageoptim.com/mac)
-   Adding some contents within the SVGs (these assets might get exported correctly in the future)
    -   CSS variables, add `style`-attribute next to the existing `fill`-attribute:
        -   `fill="#282D37" style="var(--db-icon-color, currentColor)"`
        -   `fill="#55b9e6" style="var(--db-icon-color, #55b9e6)"`
        -   `fill="#EC0016" style="var(--db-icon-pulse-color, #EC0016)"`
        -   `fill="#78be14" style="var(--db-icon-pulse-color, #78be14)"`
    -   `id`-Attribute (generic `icon` id within all SVG files)

### Icon font generation

We've documented those necessary steps within our [docs folder](../../packages/foundations/docs/Icons.md).
