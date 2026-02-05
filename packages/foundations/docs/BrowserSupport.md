# Browser Support

We're [testing our components with playwright](../../foundations/test-table) on the latest browser versions of Google Chrome, Mozilla Firefox and Apple Safari. Since all of these browsers are supposed to be evergreen, we're using some newer browser features that have been added specifically as part of the [interop initiative](https://web.dev/blog/interop-2025), partly as progressive enhancements, but some may not even offer graceful degradation.

This may leave some older browser versions behind. If you need to take care of these older browsers, you may not want to migrate to DB UX Design System v3 right now, but stay with DB UI Core or Elements for a little longer. In particular, the following features we use may be related to an evaluation of your browser strategy:

## Progressive enhancement

| Web Feature                                                                                                                             | Google Chrome    | Mozilla Firefox  | Apple Safari                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ----------------------------------------------------------------------------------- |
| [CSS `field-sizing: content` property](https://caniuse.com/mdn-css_properties_field-sizing_content)                                     | 123 (19.03.2024) | tbd              | [26.2 (12.12.2025)](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/) |
| [`hidden="until-found"`-HTML-attribute](https://caniuse.com/mdn-html_global_attributes_hidden_until-found) (planned)                    | 102 (24.05.2022) | 139 (27.05.2025) | [26.2 (12.12.2025)](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/) |
| [`dialog[closedby="closerequest"]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closerequest) (planned) | 134 (19.03.2024) | 141 (22.07.2025) | tbd                                                                                 |
| [Customizable select elements](https://caniuse.com/selectlist) (planned)                                                                | 134 (19.03.2024) | tbd              | tbd                                                                                 |
| [`select[multiple][size="1"]` UI optimization on Desktop browsers](https://chromestatus.com/feature/5412736871825408) (planned)         | 142 (28.10.2025) | tbd              | tbd                                                                                 |
| [`scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scrollbar-color) (planned)                    | 121 (13.01.2024) | 64 (11.12.2018)  | 26.2 (12.12.2025)                                                                   |

## Without graceful degradation

The following functionality relies on JavaScript for support in browsers that do not support it yet. Other solutions would be PostCSS preprocessing (planned) and declaring CSS declarations twice, both in the new and old ways (e.g., semantic overflow).

| Web Feature                                                                                                                                                                              | Google Chrome    | Mozilla Firefox  | Apple Safari                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ----------------------------------------------------------------------------------- |
| [semantic overflow (`overflow-block` and `overflow-inline`)](https://caniuse.com/mdn-css_properties_overflow-block)                                                                      | 135 (01.04.2025) | 69 (03.09.2019)  | 26                                                                                  |
| [`@property` / typed CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)                                                                                  | 85 (25.08.2022)  | 128 (09.07.2024) | 16.4 (27.03.2023)                                                                   |
| [`light-dark()` CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)                                                                                   | 123 (19.03.2024) | 120 (21.11.2023) | 17.5 (13.05.2024)                                                                   |
| [`style()` container queries for custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) (planned) | 111 (07.03.2023) | _behind a flag_  | 18 (16.09.2024)                                                                     |
| [Anchor Positioning](https://caniuse.com/css-anchor-positioning) (planned)                                                                                                               | 125 (14.05.2024) | 147 (13.01.2026) | 26 (15.09.2025)                                                                     |
| [Invoker Commands](https://caniuse.com/mdn-html_elements_button_commandfor) (planned)                                                                                                    | 135 (01.04.2025) | 144 (14.10.2025) | [26.2 (12.12.2025)](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/) |
| [`attr()` CSS Values 5 extensions](https://developer.mozilla.org/en-US/docs/Web/CSS/attr) (planned)                                                                                      | 133 (04.02.2025) | tbd              | tbd                                                                                 |
| [CSS Custom Functions](https://www.bram.us/2025/02/09/css-custom-functions-teaser/) (planned)                                                                                            | 139 (30.07.2025) | tbd              | tbd                                                                                 |
| [CSS `sibling-count()` and `sibling-index()`](https://caniuse.com/wf-sibling-count) (planned)                                                                                            | 138 (24.06.2025) | tbd              | [26.2 (12.12.2025)](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/) |
| [CSS `scrollbar-color`](https://caniuse.com/css-scrollbar) (planned)                                                                                                                     | 121 (23.01.2024) | 64 (11.12.2018)  | [26.2 (12.12.2025)](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/) |
| [CSS `@scope`](https://caniuse.com/css-cascade-scope) (planned)                                                                                                                          | 118 (10.10.2023) | 146 (09.12.2025) | 17.4 (05.03.2024)                                                                   |

## Stable in evergreen browsers

These are the features that we use or plan to integrate, which are stable in the Stable channel, including the ESR versions of Evergreen browsers.

| Web Feature                                                                                                                                     | Google Chrome    | Mozilla Firefox  | Apple Safari      |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ----------------- |
| [Multiple named disclosure boxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details#multiple_named_disclosure_boxes) | 120 (05.12.2023) | 130 (03.09.2024) | 17.2 (11.12.2023) |
| [Popover](https://caniuse.com/mdn-api_htmlelement_popover) (planned)                                                                            | 114 (30.05.2023) | 125 (16.04.2024) | 17 (26.09.2023)   |

Popover is loosely depending on Anchor Positioning.
