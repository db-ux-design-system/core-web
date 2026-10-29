## Accessibility

- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.
- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.
- Icon only (`noText`): the text is the accessible name. Never leave it empty, and add a tooltip.
- The small button in functional density is 20 px high. Keep a clickable area of at least 24 × 24 px with surrounding space, and don't let other controls overlap it.
