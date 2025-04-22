# Browser Support

We're [testing our components with playwright](../../foundations/test-table) on the latest browser versions of Google Chrome, Mozilla Firefox and Apple Safari. As all of those browsers are supposed to be evergreen, we're partly using newer browser features that have been added especially pushed by the [interop initiative](https://web.dev/blog/interop-2025), mostly as progressive enhancement, but some might not even provide a graceful degradation.

This may leave some older browser versions behind. If you need to take care of those older browsers, you might not want to migrate to DB UX Design System v3 right now, but stay on DB UI Core or Elements a little longer. Especially the following features we're using might be related to an evaluation of your browser strategy:

| Web Feature                                                                                                                     | Google Chrome    | Mozilla Firefox  | Apple Safari      |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ----------------- |
| [`@property` / typed CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)                         | 85 (25.08.2022)  | 128 (09.07.2024) | 16.4 (27.03.2023) |
| [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)                                       | 123 (19.03.2024) | 120 (21.11.2023) | 17.5 (13.05.2024) |
| [`content`: Alternative text after /](https://developer.mozilla.org/en-US/docs/Web/CSS/content#alternative_text_string_counter) | 77 (10.09.2019)  | 128 (09.07.2024) | 17.4 (05.03.2024) |
