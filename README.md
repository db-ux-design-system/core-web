<!-- markdownlint-configure-file { "MD013": false, "MD041":false } -->
<!-- markdownlint-disable MD033 MD010 -->

<picture><source srcset="https://db-ui.github.io/images/db-ux-design-system-v3-header.avif" type="image/avif"><source srcset="https://db-ui.github.io/images/db-ux-design-system-v3-header.webp" type="image/webp"><img src="https://db-ui.github.io/images/db-ux-design-system-v3-header.jpg" alt="" width="830" height="493"></picture>

# DB UI Mono (Beta) 🚂💖

![Part of DB UX Design System Core](https://img.shields.io/badge/Part%20of-DB%20UX%20Design%20System%20Core-d7dce1.svg)
![Main pipeline](https://github.com/db-ui/mono/actions/workflows/default.yml/badge.svg)
![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE-OF-CONDUCT.md)

DB UI Mono provides robust HTML UI components, reusable visual styles, and powerful tooling to help developers,
designers, and content authors build, maintain, and scale best of class digital experiences.

<figure>
	<cite>We’re not designing pages anymore. We’re designing systems of components.</cite>
	<figcaption><a href="https://bradfrost.com/blog/post/bdconf-stephen-hay-presents-responsive-design-workflow/" target="_blank" rel="noopener noreferrer">Stephen Hay</a>. <a href="https://vimeo.com/67476280" title="Brad Frosts at beyond tellerrand conference regarding Atomic Design" target="_blank" rel="noopener noreferrer">Cited in a talk by Brad Frost at beyond tellerrand conference.</a></figcaption>
</figure>

> [!WARNING]
> We currently don't fully support Samsung Internet browser until it adds the following functionality with its new version 27, which is expected to get released later this year:
>
> -   [CSS: `light-dark()`](https://caniuse.com/mdn-css_types_color_light-dark)

## Packages

| Package                                                                     | Content                             | Version                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------- | ----------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [foundations](https://github.com/db-ui/mono/tree/main/packages/foundations) | CSS/SCSS/Tailwind styles and assets | [![@db-ui/foundations on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ui%2Fmono%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ui/foundations "DB UI – on NPM")           |
| [components](https://github.com/db-ui/mono/tree/main/packages/components)   | CSS/SCSS styles for components      | [![@db-ui/components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ui%2Fmono%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ui/components "DB UI – on NPM")             |
| [ngx-components](https://github.com/db-ui/mono/tree/main/output/angular)    | Native Angular components           | [![@db-ui/ngx-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ui%2Fmono%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ui/ngx-components "DB UI – on NPM")     |
| [react-components](https://github.com/db-ui/mono/tree/main/output/react)    | Native React components             | [![@db-ui/react-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ui%2Fmono%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ui/react-components "DB UI – on NPM") |
| [v-components](https://github.com/db-ui/mono/tree/main/output/vue)          | Native Vue 3 components             | [![@db-ui/v-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ui%2Fmono%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ui/v-components "DB UI – on NPM")         |

## How to use

Install your preferred package via npm or yarn e.g. `npm i @db-ui/react-components`.

Afterwards you need to add the specific CSS or SCSS files to provide the styles of DB UX Design System.
For a detailed overview look at our [examples](https://github.com/db-ui/examples).

## Components

We maintain a [status overview](https://github.com/orgs/db-ui/projects/4/views/3) for all components.

## Core principals

<details>
  <summary><strong>
	Consistent & Compliant
	</strong></summary>

DB UI Mono is part of [DB UX Design System Core](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten),
that are the guidelines for any Personenverkehr Customer and Deutsche Bahn Enterprise website and web applications.

</details>

<details>
  <summary><strong>Accessible</strong></summary>

DB UI Mono leverages semantic HTML, ARIA roles, states and properties to apply our styles wherever possible, thus
enforcing correct, accessible markup. And we're quality checking this in partnership with
the [Team Digital Accessibility](https://db.de/8pei5n).

</details>
<details>
  <summary><strong>Declarative</strong></summary>

DB UI Mono uses declarative selectors instead of visual helpers to ensure our HTML class names and structure are human
read- and understandable, lean, performant and so much easier to update.

</details>
<details>
  <summary><strong>Evergreen</strong></summary>

As [DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten) evolves, so does DB UI
Mono, meaning apps only need to keep their DB UI Mono package updated to ensure the latest look and feel.

</details>

## Things to keep in mind

### Developed for and driven by the community

This is mainly a platform providing the space and technology for a common basis of curated components; their development
is mainly driven by the community and adapted out of the work done in projects and through the huge amount of feedback
that we're gaining out of the community. So please support us in any way possible, this is greatly appreciated!

## Migration

### From DB UI Core or DB UI Elements to DB UI Mono

We're providing a detailed migration for each component next to the documentation of each component:
<https://db-ui.github.io/mono/review/main/components/action/button/migration>

### In between DB UI Mono versions

Check our migration docs for breaking changes:

1. [Alpha ➡ Beta](https://github.com/db-ui/mono/tree/main/docs/migration/alpha-beta.md) (0.0.x➡0.x.x)
2. [v0.2 ➡ v0.3](https://github.com/db-ui/mono/tree/main/docs/migration/v0.2.x-to-v0.3.x.md)

## How to start develop / contribute

```shell
npm install
npm run build
npm run start
```

Please mind the [conventions for git commits](/docs/conventions.adoc#user-content-git-commits-conventions).

### Versions

All versions in all `package.json` files are set to `0.0.0`, we change those during release process in CI/CD.

<!-- markdownlint-disable MD026 -->

## Give us your feedback!

<!-- markdownlint-disable MD026 -->

<!-- markdownlint-disable MD033 -->

This is only the first version of our framework and we really want your feedback - either within
the <a href="https://db.de/krnm74" target="_blank" rel="noopener noreferrer">DB UI Channel by Web Dev Community in
Microsoft Teams (only available DB internally)</a>, or directly
at [db-ux-designsystem@deutschebahn.com](mailto:db-ux-designsystem@deutschebahn.com). <!-- markdownlint-disable MD033 -->
We're particularly keen to add as many examples to the behaviours as possible, to further clarify them.

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and
trademarks are bound to clear guidelines and restrictions even when being used with the code that we're providing with
this product; Deutsche Bahn fully reserves all rights and ownership regarding the Deutsche Bahn brand, even though that
we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions
and whom to contact on any brand issues. As these assets and visual guidelines are retrieved from our Deutsche Bahn
Marketingportal, you'll agree with
the ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (german)](https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684#)
in case of using them.

For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and
design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme
that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

This especially relates to the files in the directories `/source/fonts/`, `source/images` and `source/samples`
and `source/favicon.ico` as well.

## Development

### Tests

TODO: Elaborate on testing setup

#### Component Tests

**Visual regression tests**

Playwright is used to create and compare screenshots of each individual component.

To update screenshots just run the following (you need Docker installed and available on your shell):

```shell
npm run regenerate:screenshots
```

If you want to generate the screenshots manually, do the following:

```shell
npm run build

# unix
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash

#windows - allow file sharing (windows pop up)
docker run --rm --network host -v ${PWD}:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash

npm install

cd output/${frameworkFolder}

npx playwright test --update-snapshots
```

You can also use `docker-compose` to test or regenerate screenshots.

-   testing: `docker-compose -f ./e2e/docker-compose.yml up`
-   update screenshots: `docker-compose -f ./e2e/docker-compose.regenerate.yml up`

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at
our [Contributor Covenant Code of Conduct](https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE), Copyright 2024 by DB Systel GmbH.
