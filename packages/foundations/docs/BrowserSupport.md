# Browser Support

We're [testing our components with playwright](../../foundations/test-table) on the latest browser versions of Google Chrome, Mozilla Firefox and Apple Safari. Since all of these browsers are supposed to be evergreen, we're using some newer browser features that have been added specifically as part of the [interop initiative](https://web.dev/blog/interop-2025), partly as progressive enhancements, but some may not even offer graceful degradation.

This may leave some older browser versions behind. If you need to take care of these older browsers, you may not want to migrate to DB UX Design System v3 right now, but stay with DB UI Core or Elements for a little longer. In particular, the following features we use may be related to an evaluation of your browser strategy:

## Progressive enhancement

| Web Feature                                                                                                | Google Chrome    | Mozilla Firefox  | Apple Safari                                                                                                         |
| ---------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| [CSS `field-sizing: content` property](https://caniuse.com/mdn-css_properties_field-sizing_content)        | 123 (19.03.2024) | tbd              | Technology Preview (220)                                                                                             |
| [semantic overflow (`overflow-block` and `overflow-inline`)](https://caniuse.com/mdn-css_properties_overflow-block) | 135 (01.04.2026) | 69 (03.09.2019) | 26                                                                                                                  |
| [Customizable select elements](https://caniuse.com/selectlist) (planned)                                   | 134 (19.03.2024) | tbd              | tbd                                                                                                                  |
| [`hidden="until-found"`-HTML-attribute (planned)](https://caniuse.com/mdn-html_global_attributes_hidden_until-found) | 102 (24.05.2022) | 139 (27.05.2025) | tbd                                                                                                                  |
| [Anchor Positioning](https://caniuse.com/css-anchor-positioning) (planned)                                 | 125 (14.05.2024) | tbd              | ["this fall"](https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/#css) |
| [CSS Custom Functions](https://www.bram.us/2025/02/09/css-custom-functions-teaser/) (planned)              | 139 (30.07.2025) | tbd              | tbd                                                                                                                  |

## Without graceful degradation

| Web Feature                                                                                             | Google Chrome    | Mozilla Firefox  | Apple Safari      |
| ------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ----------------- |
| [`@property` / typed CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) | 85 (25.08.2022)  | 128 (09.07.2024) | 16.4 (27.03.2023) |
| [`light-dark()` CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)  | 123 (19.03.2024) | 120 (21.11.2023) | 17.5 (13.05.2024) |
| [`attr()` CSS Values 5 extensions](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)               | 133 (04.02.2025) | tbd              | tbd               |

## Stable in evergreen browsers

These are the features that we use or plan to integrate, which are stable in the Stable channel, including the ESR versions of Evergreen browsers.

| Web Feature                                                          | Google Chrome    | Mozilla Firefox  | Apple Safari    |
| -------------------------------------------------------------------- | ---------------- | ---------------- | --------------- |
| [Popover](https://caniuse.com/mdn-api_htmlelement_popover) (planned) | 114 (30.05.2023) | 125 (16.04.2024) | 17 (26.09.2023) |

Popover is loosely depending on Anchor Positioning.
