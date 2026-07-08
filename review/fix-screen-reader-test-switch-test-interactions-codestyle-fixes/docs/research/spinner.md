# DEV Research spinner

## Overview

| Design System                                                                           |                                                       Component                                                       | Comment                                                                                                                                                         |
| --------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                            [spinner](https://atlassian.design/components/spinner/examples)                            | `<svg>` with CSS animation, fade-in animation to replace content, spinner over content                                                                          |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                           [spinner](https://getbootstrap.com/docs/4.3/components/spinners/)                           | `<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>` , plus animation as alternative, inside `<button>` with `aria-hidden` |
| [GitHub Primer](https://github.com/primer/css)                                          |                              [spinner](https://primer.style/product/components/spinner/)                              | `svg` with CSS animation                                                                                                                                        |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |                                [spinner](https://design.gitlab.com/components/spinner)                                | multiple `<div>` with animation, loading text optional                                                                                                          |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                                       [spinner](https://v2.grommet.io/spinner)                                        | multiple `<div>` with animation, rotation property to change clock-wise animation                                                                               |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                   [inline-loading](https://carbondesignsystem.com/components/inline-loading/usage/)                   | `<svg>` with CSS animation, Specify the loading status 'inactive' 'active' 'finished' 'error'                                                                   |
| [Material UI](https://github.com/mui/material-ui)                                       |                                [progress](https://mui.com/material-ui/react-progress/)                                | `svg` with CSS animation, `<CircularProgress>` Component, label inside circle for 90%                                                                           |
| [MongoDB.design](https://github.com/mongodb/design)                                     |               [loading-indicator](https://www.mongodb.design/component/loading-indicator/live-example)                | `<svg>` with CSS animation,                                                                                                                                     |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                    [spinner](https://designsystem.porsche.com/v3/components/spinner/configurator/)                    | `<span role="alert" aria-live="assertive"></span>` + `<svg>` with CSS animation                                                                                 |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       | [loading-indicator-circle](https://lyne-storybook.app.sbb.ch/?path=/docs/elements-sbb-loading-indicator-circle--docs) | another [loading indicator](https://lyne-storybook.app.sbb.ch/?path=/docs/elements-sbb-loading-indicator--docs) , `<span>` with CSS animation,                  |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   |                  [spinner](https://polaris-react.shopify.com/components/feedback-indicators/spinner)                  | `<svg>` with CSS animation, `hasFocusableParent: Allows the component to apply the correct accessibility roles based on focus.`                                 |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |                                                          ❌                                                           | --                                                                                                                                                              |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |                 [spinner](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/spinner)                 | `<svg role="progressbar">` with CSS animation,                                                                                                                  |
| [Telekom Scale](https://github.com/telekom/scale)                                       |          [loading-spinner](https://telekom.github.io/scale/?path=/docs/components-loading-spinner--standard)          | `<svg>` with CSS animation, alignment: 'horizontal' 'vertical'                                                                                                  |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                                                          ❌                                                           | --                                                                                                                                                              |

## Conclusion

- We could use a `<span>` with a `:before` as "track" and `:after` as "segment"
- We could use a `<svg>` instead to align styles with design and possible native mobile development. Not recommended if we have different loading indicators.
- Good hint from [this](https://design.gitlab.com/components/spinner#behavior): A 100ms delay occurs before showing a spinner to mitigate unnecessary spinners showing up at the same time when load times are minimal.

### Questions for dev

- role="status" or role="alert" for Screen-Readers??
- What shall we do if users disable animations with `prefers-reduced-motion: reduce`?? Maybe we can show some icon instead.

### Questions for design

- Maybe we should name it `Loading Indicator` to use more animations than a spinner??
- There might be a `CircularProgress` component. Is this confusing for users??
- How to for interactive components like `DBButton`??
- Loading status `active`, `successful`, `critical`??
- Alignment `horizontal`, `vertical` for spinner+text ??
- Label below or inside circle??
