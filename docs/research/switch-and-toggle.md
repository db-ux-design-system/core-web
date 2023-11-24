<!-- markdownlint-disable-file MD013 -->

# DEV Research Switch / Toggle

## Overview

| Design System                                                                           | Component(s)                                                                                                                                                                                                                                                                | Comment                                                                                                                                                                        |
| :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Telekom Scale](https://telekom.github.io/scale)                                        | [Switch](https://telekom.github.io/scale/?path=/docs/components-switch--standard), [Tag](https://telekom.github.io/scale/?path=/docs/components-tag--standard), [Chip](https://telekom.github.io/scale/?path=/docs/components-chip--standard)                               | Switch uses `<input type="checkbox">`, where as Tag is _not interactive_                                                                                                       |
| [SBB](https://angular.app.sbb.ch/angular/components/)                                   | [Toggle](https://angular.app.sbb.ch/angular/components/toggle/examples), [interactive Tag](https://angular.app.sbb.ch/angular/components/tag/examples) with disabled state, [Chip](https://angular.app.sbb.ch/angular/components/chips/examples)                            | Toggle is our Tab Bar; in their examples they use a simple [Button](https://angular.app.sbb.ch/angular/components/badge/examples) to toggle states; Chip is used for filtering |
| [SNCF Design Métier](https://designmetier-bootstrap.sncf.fr/)                           | [Switch](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/checkboxes-and-radios/), [Options](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/checkboxes-and-radios/) [Button Tag](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/buttons/) | as `<input>` elements                                                                                                                                                          |
| [IBM Carbon](https://carbondesignsystem.com/components)                                 | [Toggle](https://carbondesignsystem.com/components/toggle/usage/), [Tag](https://carbondesignsystem.com/components/tag/usage/)                                                                                                                                              | Tag component is not interactive; Switch is implemented with simple `div`                                                                                                      |
| [Google Material](https://material-web.dev/components)                                  | [Switch](https://material-web.dev/components/switch), [Interactive Chip](https://material-web.dev/components/chip/#interactive-demo)                                                                                                                                        | `<label>[…]<input type="checkbox" role="switch"></label>` or for Chip `role="option"`                                                                                          |
| [Porsche Design System](https://designsystem.porsche.com/v3/components/switch/examples) | [Switch](https://designsystem.porsche.com/v3/components/switch/examples), [Tag Dismissable](https://designsystem.porsche.com/v3/components/tag-dismissible/examples)                                                                                                        | and _Tag_ component.<br/>Only as Web Component                                                                                                                                 |
| [Washington Post](https://build.washingtonpost.com/components)                          | [Switch](https://build.washingtonpost.com/components/switch)                                                                                                                                                                                                                | `<button type="button" role="switch" aria-checked="true" data-state="checked" value="on" […]`                                                                                  |

## Conclusion

### HTML implementation

There are two ways to build a switch/toggle component:

1. As an input `<input type="checkbox" role="switch">`
2. As a button with aria role switch `<button type="button" role="switch" aria-checked="true" data-state="checked" value="on" […]`

According to [w3.org](https://www.w3.org/WAI/ARIA/apg/patterns/switch/) there is no explicit recommendation due to a11y issues which implementation suits best. Instead the recommend the following semantic issues:

-   The switch has `role="switch"`
-   The switch has an accessible label provided by one of the following:
    -   Visible text content contained within the element with role switch.
    -   A visible label referenced by the value of `aria-labelledby` set on the element with role switch.
    -   `aria-label` set on the element with role switch.
-   When on, the switch element has state `aria-checked` set to `true`.
-   When off, the switch element has state `aria-checked` set to `false`.
-   If the switch element is an HTML `<input type="checkbox">`, it uses the HTML `checked` attribute instead of the `aria-checked` property.
-   If a set of switches is presented as a logical group with a visible label, either:
    -   The switches are included in an element with `role="group"` that has the property `aria-labelledby` set to the ID of the element containing the group label.
    -   The set is contained in an HTML `fieldset` and the label for the set is contained in an HTML legend element.
-   If the presentation includes additional descriptive static text relevant to a switch or switch group, the switch or switch group has the property `aria-describedby` set to the ID of the element containing the description.

### CSS

[Google](https://web.dev/building-a-switch-component/) wrote a detailed article how to develop a switch component with e.g. the use of [Grid Tracks](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks).

### MDN

<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role>
