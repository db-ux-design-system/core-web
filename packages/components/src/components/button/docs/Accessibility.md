## Accessibility

- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.
- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.
- Icon only (`noText`): the text stays in the markup as the accessible name. Never leave it empty.

Design rules for accessibility, such as the minimum target size and tooltips for icon-only buttons, are in the [guidelines on the Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).
