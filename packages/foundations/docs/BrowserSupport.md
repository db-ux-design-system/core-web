# Browser Support

We're [testing our components with playwright](../../foundations/test-table) on the latest browser versions of Google Chrome, Mozilla Firefox and Apple Safari. Since all of these browsers are supposed to be evergreen, we're using some newer browser features that have been added specifically as part of the [interop initiative](https://web.dev/blog/interop-2025), partly as progressive enhancements, but some may not even offer graceful degradation.

This may leave some older browser versions behind. If you need to take care of these older browsers, you may not want to migrate to DB UX Design System v3 right now, but stay with DB UI Core or Elements for a little longer. In particular, the following features we use may be related to an evaluation of your browser strategy:

## Progressive enhancement

| Web Feature                                                                                         | Google Chrome    | Mozilla Firefox | Apple Safari             |
| --------------------------------------------------------------------------------------------------- | ---------------- | --------------- | ------------------------ |
| [CSS `field-sizing: content` property](https://caniuse.com/mdn-css_properties_field-sizing_content) | 123 (19.03.2024) | tbd             | Technology Preview (220) |
| [Customizable select elements](https://caniuse.com/selectlist) (planned)                            | 134 (19.03.2024) | tbd             | tbd                      |

## Without graceful degradation

| Web Feature                                                                                             | Google Chrome    | Mozilla Firefox  | Apple Safari      |
| ------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ----------------- |
| [`@property` / typed CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) | 85 (25.08.2022)  | 128 (09.07.2024) | 16.4 (27.03.2023) |
| [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)               | 123 (19.03.2024) | 120 (21.11.2023) | 17.5 (13.05.2024) |
