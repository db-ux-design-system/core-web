# DEV Research footer

## Overview

| Design System                                                                           |                                         Component                                         | Comment                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                                            ❌                                             | --                                                                                                                                                                                        |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                                            ❌                                             | --                                                                                                                                                                                        |
| [GitHub Primer](https://github.com/primer/css)                                          |                                            ❌                                             | --                                                                                                                                                                                        |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |                                            ❌                                             | --                                                                                                                                                                                        |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                          [footer](https://v2.grommet.io/footer)                           | Simple container with alignment, padding, fill... Does not offer any layout like columns.                                                                                                 |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                                            ❌                                             | --                                                                                                                                                                                        |
| [Material UI](https://github.com/mui/material-ui)                                       |                                            ❌                                             | --                                                                                                                                                                                        |
| [MongoDB.design](https://github.com/mongodb/design)                                     |                                            ❌                                             | --                                                                                                                                                                                        |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                                            ❌                                             | --                                                                                                                                                                                        |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       |     [footer](https://lyne-storybook.app.sbb.ch/?path=/docs/elements-sbb-footer--docs)     | Footer is a simple wrapper that provides a slot to add any layouts and components. Nice: the footer is often displayed with the sbb-clock component (a stylised, animated station clock). |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   |                                            ❌                                             | --                                                                                                                                                                                        |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |                                            ❌                                             | --                                                                                                                                                                                        |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |                                            ❌                                             |                                                                                                                                                                                           |
| [Telekom Scale](https://github.com/telekom/scale)                                       | [footer](https://telekom.github.io/scale/?path=/docs/components-telekom-footer--standard) | Footer contains a Telekom logo. There are slots for a legal line and a list of links.                                                                                                     |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                                            ❌                                             |                                                                                                                                                                                           |

## Conclusion

Most design systems do not offer a footer component. The few footers are rather simple, styled (background colour, centring) wrappers that offer one or more slots for any lists and components. For example, to display several links.

The assumption here is that footers are often very individually structured, so that overly strict specifications on the part of the design system would be too **restrictive**.

## Thoughts on implementation

### Mobile Accordion

🧠 _Link lists are summarised in an accordion on mobile so that the footer appears shorter and tidier._

❓Links within collapsed accordion items are not read out by screen readers, only when the item is expanded. The page search does not find these links either. **Presumably this is not a11y compliant.**

### data props versus component driven

🧠 _Should the contents of the footer be transferred exclusively as data per property? Or are the contents mainly assembled "manually" via various (sub)components?_

#### data props only

**Pro**

- easier to use for devs
- the integrity of the footer is guaranteed. a standardised look is maintained.

**Contra**

- not consistent with the approach of existing components
- not very flexible
- links cannot be customised, which may be necessary depending on the framework

#### (sub)components only

**Pro**

- flexible in use
- standardised use within the DST
- structure of the footer is represented in the template

**Contra**

- devs must strictly follow the docs to build a footer
- there are no active guides, such as code completion or type checking, when using the footer component
- potentially more errors are possible
- devs need to write more code in the template
