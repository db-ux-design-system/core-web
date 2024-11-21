# DEV Research tooltip

## Overview

| Design System                                                                           |                                             Component                                             | Comment                                                                                         |
| --------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                  [tooltip](https://atlassian.design/components/tooltip/examples)                  | wrapping tag, onHover with aria-describedby, uses internal popper for placement                 |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                 [tooltip](https://getbootstrap.com/docs/4.3/components/tooltips/)                 | uses [Popper.js](https://popper.js.org/), `data-toggle="tooltip"` & `data-placement="top"`      |
| [GitHub Primer](https://github.com/primer/css)                                          |                     [tooltip](https://primer.style/design/components/tooltip)                     | wrapping tag, <https://primer.style/design/guides/accessibility/tooltip-alternatives>           |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |                      [tooltip](https://design.gitlab.com/components/tooltip)                      | wrapping tag, onHover with aria-describedby + title                                             |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                                 [tip](https://v2.grommet.io/tip)                                  | wrapping tag, onHover add to dom                                                                |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                [tooltip](https://carbondesignsystem.com/components/tooltip/usage/)                | wrapper tag, onHover enables span with role=toolip                                              |
| [Material UI](https://github.com/mui/material-ui)                                       |                       [tooltip](https://mui.com/material-ui/react-tooltip/)                       | wrapping tag, onHover add to dom                                                                |
| [MongoDB.design](https://github.com/mongodb/design)                                     |                 [tooltip](https://www.mongodb.design/component/tooltip/example/)                  | wrapping tag, onHover add to dom                                                                |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                                                ❌                                                 |                                                                                                 |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       | [tooltip](https://lyne-storybook.app.sbb.ch/?path=/docs/components-sbb-tooltip-sbb-tooltip--docs) | own component + wrapping trigger                                                                |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   |                [tooltip](https://polaris.shopify.com/components/overlays/tooltip)                 | warpping tag + `::after`                                                                        |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |         [tooltips](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/tooltips/)          | `data-toggle="tooltip"` + `data-placement="top"` + `title="Tooltip on top"`, onHover add to dom |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |       [tooltip](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/tooltip)       | warpping tag + `aria-expand`                                                                    |
| [Telekom Scale](https://github.com/telekom/scale)                                       |        [tooltip](https://telekom.github.io/scale/?path=/docs/components-tooltip--standard)        | wrapping tag + `open`                                                                           |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                  [tooltip](https://build.washingtonpost.com/components/tooltip)                   | wrapping tag + dom                                                                              |

## Conclusion

There are two ways to use a tooltip:

1. As wrapping tag `<tooltip content="xyz"><button>Test</button></tooltip>`
2. As property `<button tooltip/title="xyz">Test</button>`

---

We should use a wrapping tag similar to IBM and a [title fallback](https://stackoverflow.com/questions/2011142/how-to-change-the-style-of-the-title-attribute-inside-an-anchor-tag).

Advantages wrapping tag:

-   We can use `::before` or `::after` for the arrow
-   We can use `string` and `slot` for the content
-   We have a position for the wrapping div which can be used by JS

Disadvantages wrapping tag:

-   Not using default `title`
-   Could be hard to use default `:hover` or `:focus`

Findings:

-   By providing and `open` state we could let the user handle if the tooltip should be shown
-   We could use `behaviour` to enable different states like `hover` or `clicked` etc.

---

### MDN

<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role>
