<!-- markdownlint-configure-file { "MD013": false, "MD041":false } -->
<!-- markdownlint-disable MD033 MD010 -->

<picture><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.avif" type="image/avif"><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.webp" type="image/webp"><img src="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.jpg" alt=""></picture>

# DB UX Design System v3 🚂💖

![Part of DB UX Design System (Version 3)](https://img.shields.io/badge/Part%20of-DB%20UX%20Design%20System%20v3-d7dce1.svg)
![Main pipeline](https://github.com/db-ux-design-system/core-web/actions/workflows/default.yml/badge.svg)
![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE-OF-CONDUCT.md)

DB UX Design System v3 provides robust HTML UI components, reusable visual styles, and powerful tooling to help developers,
designers, and content authors build, maintain, and scale best-of-class digital experiences.

<figure>
	<cite>We’re not designing pages anymore. We’re designing systems of components.</cite>
	<figcaption><a href="https://bradfrost.com/blog/post/bdconf-stephen-hay-presents-responsive-design-workflow/" target="_blank" rel="noopener noreferrer">Stephen Hay</a>. <a href="https://vimeo.com/67476280" title="Brad Frosts at beyond tellerrand conference regarding Atomic Design" target="_blank" rel="noopener noreferrer">Cited in a talk by Brad Frost at beyond tellerrand conference.</a></figcaption>
</figure>

## Packages

| Package                                                                                                   | Content                             | Version                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@db-ux/core-foundations](https://github.com/db-ux-design-system/core-web/tree/main/packages/foundations) | CSS/SCSS/Tailwind styles and assets | [![@db-ux/core-foundations on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-foundations "DB UX Design System – on NPM")           |
| [@db-ux/core-components](https://github.com/db-ux-design-system/core-web/tree/main/packages/components)   | CSS/SCSS styles for components      | [![@db-ux/core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-components "DB UX Design System – on NPM")             |
| [@db-ux/ngx-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/angular)    | Native Angular components           | [![@db-ux/ngx-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/ngx-core-components "DB UX Design System – on NPM")     |
| [@db-ux/react-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/react)    | Native React components             | [![@db-ux/react-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/react-core-components "DB UX Design System – on NPM") |
| [@db-ux/v-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/vue)          | Native Vue 3 components             | [![@db-ux/v-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/v-core-components "DB UX Design System – on NPM")         |
| [@db-ux/wc-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/stencil)     | Web Components                      | [![@db-ux/wc-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/wc-core-components "DB UX Design System – on NPM")       |

### Which package should I choose?

**For JavaScript framework-specific components**: Choose your framework package (React, Angular, Vue, Web Components) which includes styling and JavaScript behavior.

**For other users**: Use `@db-ux/core-components` - it includes everything you need (foundations + component styles).

**For design tokens only**: Use `@db-ux/core-foundations` if you only need colors, spacing, fonts, and icons without pre-built component styles.

## How to use

1. **Install your preferred package** via npm or yarn:
   - For React: `npm i @db-ux/react-core-components`
   - For Angular: `npm i @db-ux/ngx-core-components`
   - For Vue: `npm i @db-ux/v-core-components`
   - For Web Components: `npm i @db-ux/wc-core-components`
   - For styling only: `npm i @db-ux/core-components`

2. **Include the CSS styles** as described in the "Styling Dependencies" section of each package's `README`.

> **💡 Note**: All framework packages automatically include the necessary foundation styles - you don't need to install `@db-ux/core-foundations` separately!

We even provide some [examples of integrations](https://github.com/db-ux-design-system/examples).

## Creating Custom Components

For developers looking to create custom components that extend the design system in their applications, we provide comprehensive guidance:

📖 **[Creating Custom Components Guide](docs/creating-custom-components.md)** - Learn how to build your own components using design system foundations

This guide covers:
- **Setup and Configuration**: Getting started with the design system packages
- **Design Principles**: Following DB UX Design System guidelines and best practices  
- **Component Patterns**: Structured approaches to building consistent components
- **Code Examples**: Practical implementations for cards, forms, navigation, and more
- **Framework Support**: Specific guidance for React, Vue, Angular, and vanilla HTML/CSS
- **Accessibility**: Ensuring your components are inclusive and compliant
- **Common Pitfalls**: What to avoid and how to maintain design system consistency

### DB Theme

In case that you're building a website or application for Deutsche Bahn, you'll additionally have to install the DB Theme via the [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) node package (even also available as an inner source node package, as described within that packages [README](https://www.npmjs.com/package/@db-ux/db-theme)).

## Components

We maintain a [status overview](https://github.com/orgs/db-ux-design-system/projects/4/views/1) for all components.

## Core principles

<details>
  <summary><strong>
	Consistent & Compliant
	</strong></summary>

DB UX Design System Core Web is part of [DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten),
that are the guidelines for any Personenverkehr Customer and Deutsche Bahn Enterprise website and web applications.

</details>

<details>
  <summary><strong>Accessible</strong></summary>

DB UX Design System leverages semantic HTML, ARIA roles, states and properties to apply our styles wherever possible, thus
enforcing correct, accessible markup. And we're quality checking this in partnership with
the [Team Digital Accessibility](https://db.de/8pei5n).

</details>
<details>
  <summary><strong>Declarative</strong></summary>

DB UX Design System uses declarative selectors instead of visual helpers to ensure our HTML class names and structure are human
read- and understandable, lean, performant and so much easier to update.

</details>
<details>
  <summary><strong>Evergreen</strong></summary>

As [DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten) evolves, so does DB UX Design System version 3, meaning apps only need to keep their DB UX Design System Core Web package updated to ensure the latest look and feel.

</details>

## Migration

### From DB UI Core or DB UI Elements to DB UX Design System Core

We're providing a detailed migration for each component next to the documentation of each component, like e.g.
<https://design-system.deutschebahn.com/core-web/review/main/components/action/button/migration>

For a comprehensive overview of all DB-UI components and their migration status, including components that don't have direct equivalents in DB-UX Design System v3, see our [DB-UI to DB-UX Design System v3 Component Migration Guide](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/db-ui-to-db-ux-dsv3.md).

### In between DB UX Design System Core versions

Check our migration docs for breaking changes:

- [v2.x ➡ v3.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v2.x.x-to-v3.0.0.md)
- [v1.x ➡ v2.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v1.x.x-to-v2.0.0.md)
- [v0.7 ➡ v1.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.7.x-to-v1.0.0.md)
- [v0.6 ➡ v0.7](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-v0.7.x.md)
- [v0.5 ➡ v0.6](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.5.x-to-v0.6.x.md)
- v0.4 ➡ v0.5: no migration needed, no breaking changes
- [v0.3 ➡ v0.4](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.3.x-to-v0.4.x.md)
- [v0.2 ➡ v0.3](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.2.x-to-v0.3.x.md)
- [Alpha ➡ Beta](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/alpha-beta.md) (0.0.x➡0.x.x)

## FAQ

### Unexpected "new" colors

> We've updated to the stable version of DB UX Design System (v3) version >= 1.x, and now the colors that were supposed to be red, are colored in blue (`514ec7`).

Please have a look at the [migration guide from version 0.6.x to version 0.7.x](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-v0.7.x.md#removed-brand-assets), you need to install and reference the DB Theme, if you're building a website or web application for Deutsche Bahn.

## Things to keep in mind

### Developed for and driven by the community

This is mainly a platform providing the space and technology for a common basis of curated components; their development
is mainly driven by the community and adapted out of the work done in projects and through the huge amount of feedback
that we're gaining out of the community. So please support us in any way possible, this is greatly appreciated!

## How to start developing / contributing

If you're working as a developer on the DB UX Design System or would like to contribute (many kudos for that !), please have a look at the relevant [development documentation](docs/development.md). We even also tag issues that might be a good starter for code contributions by the [tag "good first issue"](https://github.com/db-ux-design-system/core-web/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22).

<!-- markdownlint-disable MD026 -->

## Give us your feedback!

<!-- markdownlint-disable MD026 -->

<!-- markdownlint-disable MD033 -->

This is only the first version of our framework and we really want your feedback - either within
the <a href="https://db.de/krnm74" target="_blank" rel="noopener noreferrer">DB UX Design System Channel by Web Dev Community in
Microsoft Teams (only available DB internally)</a>, or directly
at [db-ux-designsystem@deutschebahn.com](mailto:db-ux-designsystem@deutschebahn.com). <!-- markdownlint-disable MD033 -->
We're particularly keen to add as many examples to the behaviours as possible, to further clarify them.

## Deutsche Bahn brand

To perfectly support our users and customers on their digital journey, the use of the Deutsche Bahn brand and trademarks is subject
to clear guidelines and restrictions even when used with the code provided by this product. Deutsche Bahn fully reserves all
rights and ownership regarding the Deutsche Bahn brand, even though we provide the code for DB UX Design System products free of
charge under the Apache 2.0 license.
Please refer to our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for further questions
contact details regarding brand issues. As these assets and visual guidelines are retrieved from our Deutsche Bahn
Marketingportal, you'll agree with
the ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (german)](https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684#)
in case of using them.

For any usage outside of Deutsche Bahn websites and applications you aren't allowed to use any Deutsche Bahn brand and
design assets as well as protected characteristics and trademarks, that for not including the DB Theme.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at
our [Contributor Covenant Code of Conduct](https://github.com/db-ux-design-system/core-web/blob/main/CODE-OF-CONDUCT.md).

## License

This project is licensed under the [Apache-2.0](LICENSE) license. © 2024 DB Systel GmbH.
