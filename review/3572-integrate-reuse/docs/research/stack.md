<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

# DEV Research stack

## Overview

| Design System                                                                           |                                                                                     Component                                                                                     | Comment                                                                             |
| --------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                                                      [stack](https://atlassian.design/components/primitives/stack/examples)                                                       | `display:flex`                                                                      |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                                                             [flex](https://getbootstrap.com/docs/4.3/utilities/flex/)                                                             | `display:flex`,                                                                     |
| [GitHub Primer](https://github.com/primer/css)                                          |                                                                  [stack](https://primer.style/components/stack)                                                                   | `display:flex`                                                                      |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |                                                                                        ❌                                                                                         | --                                                                                  |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                                                                       [stack](https://v2.grommet.io/stack)                                                                        | This `stack` is different to what we expect                                         |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                                                                                        ❌                                                                                         | --                                                                                  |
| [Material UI](https://github.com/mui/material-ui)                                       |                                                                 [stack](https://mui.com/material-ui/react-stack/)                                                                 | `display:flex`, nice: [Dividers](https://mui.com/material-ui/react-stack/#dividers) |
| [MongoDB.design](https://github.com/mongodb/design)                                     |                                                                                        ❌                                                                                         | --                                                                                  |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                                                       [flex](https://designsystem.porsche.com/v3/components/flex/examples)                                                        | `display:flex`, deprecated                                                          |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       |                                                                                        ❌                                                                                         | --                                                                                  |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   | [block-stack](https://polaris.shopify.com/components/layout-and-structure/block-stack) & [inline-stack](https://polaris.shopify.com/components/layout-and-structure/inline-stack) | `display:flex`, split into 2 different components                                   |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |                                                     [stack](https://designmetier-bootstrap.sncf.fr/docs/4.3/utilities/flex/)                                                      | `display:flex`                                                                      |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |                                            [stack](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/fundamentals/spacing:69673)                                            | some pattern?                                                                       |
| [Telekom Scale](https://github.com/telekom/scale)                                       |                                                                                        ❌                                                                                         | --                                                                                  |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                                                                                        ❌                                                                                         | --                                                                                  |

## Conclusion

It's just the regular [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) as a component.
Only MUI is adding some additional features with "divider".
Shopify Polaris splits the component for "row" and "column" flex into 2 components.
