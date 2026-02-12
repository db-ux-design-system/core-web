# DEV Research heading

## Overview

| Design System                                                                           |                                              Component                                               | Comment                                                                         |
| --------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                   [heading](https://atlassian.design/components/heading/examples)                    | `<h1-h6>` based on `as` property, arrangement with other text styles with stack |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |              [headings](https://getbootstrap.com/docs/4.3/content/typography/#headings)              | no extra component, only class to change visual                                 |
| [GitHub Primer](https://github.com/primer/css)                                          |                     [heading](https://primer.style/product/components/heading/)                      | `<h1-h6>` based on `as` property                                                |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |             [type-headings](https://design.gitlab.com/product-foundations/type-headings)             | no extra component, only class to change visual                                 |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                               [heading](https://v2.grommet.io/heading)                               | `<h1-h6>` based on `as` property                                                |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            | [heading-styles](https://carbondesignsystem.com/elements/typography/type-sets/#fixed-heading-styles) | no extra component, breakpoint based size changes (fluid styles)                |
| [Material UI](https://github.com/mui/material-ui)                                       |                  [Typography](https://mui.com/material-ui/react-typography/#usage)                   | `<h1-h6>` based on `variant`                                                    |
| [MongoDB.design](https://github.com/mongodb/design)                                     |              [typography](https://www.mongodb.design/component/typography/live-example)              | no extra component                                                              |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |           [heading](https://designsystem.porsche.com/v3/components/heading/configurator/)            | `<h1-h6>` based on `tag`                                                        |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       |           [title](https://lyne-storybook.app.sbb.ch/?path=/docs/elements-sbb-title--docs)            | `<h1-h6>` based on `level`, extra `visual-level`                                |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   |                 [Text](https://polaris-react.shopify.com/components/typography/text)                 | `<Text variant="heading3xl" as="h2">`                                           |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |       [headings](https://designmetier-bootstrap.sncf.fr/docs/4.3/content/typography/#headings)       | no extra component                                                              |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |        [title](https://mistica-web.vercel.app/?path=/story/components-titles--title-4-story)         | `<h1-h6>` based on extra component                                              |
| [Telekom Scale](https://github.com/telekom/scale)                                       |        [typography](https://telekom.github.io/scale/?path=/docs/guidelines-typography--page)         | no extra component                                                              |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                [typography](https://build.washingtonpost.com/foundations/typography/)                | no extra component                                                              |

## Conclusion

- We should use a `<DBHeading>` component with `as` property and use a `<Show when={props.as === "h1"}><h1>{children}</h1></Show>`

### Questions for dev

- How to handle DB Pulse??
    - We handle this inside the `@db-ux/db-theme` package
- Shall we add auto-spacing as dev property (h1+h2, add margin)??
    - We won't do this for now

### Questions for design

- Shall we really add the margins as property or use stack?
    - We use `props.paragraphSpacing` with `1lh` instead of stack:
    ```tsx
    <DBHeading as="h1" paragraphSpacing>
      Heading 1
    </DBHeading>
    <DBHeading as="h2" paragraphSpacing>
      Heading 2
    </DBHeading>
    <DBStack variant="paragraph" gap="md">
      <DBText>ABCD</DBText>
      <DBText>ABCD</DBText>
    </DBStack>
    ```
- Fluid Styles might be a cool feature?
    - We already have this feature because of our responsive typography
- [`text-wrap`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance)-CSS-property (especially with the value `"balance"`) would be a relevant aspect to think about
