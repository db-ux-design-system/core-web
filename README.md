<!-- markdownlint-configure-file { "MD013": false, "MD041":false } -->
<!-- markdownlint-disable MD033 MD010 -->

<img src="docs/images/header_image_0.guetzli.jpg" alt="" srcset="docs/images/header_image_0.guetzli.2x.jpg 2x, docs/images/header_image_0.guetzli.3x.jpg 3x"> <!-- width="830" height="276" //-->

# DB UI Mono (Alpha) 🚂💖

![Based on DB UX Design System guidelines](https://img.shields.io/badge/Based%20on-DB%20Design%20System%20UX%20Guides%20%2B%20Standards-d7dce1.svg)
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
	<figcaption><a href="https://bradfrost.com/blog/post/bdconf-stephen-hay-presents-responsive-design-workflow/" target="_blank" rel="noopener noreferrer">Stephen Hay</a>. <a href="https://vimeo.com/67476280" title="Brad Frosts at beyond tellerrand conference regarding Atomic Design" target="_blank" rel="noopener noreferrer">Citated in a talk by Brad Frost at beyond tellerrand conference.</a></figcaption>
</figure>

## How to use

TODO

## Packages

| Package                             | Version (click for changelogs)                                                                                                                                                                      |
| ----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [foundations](packages/foundations) | [![@db-ui/components on Npmjs](https://img.shields.io/npm/v/@db-ui/components.svg?color=rgb%28237%2C%2028%2C%2036%29 "npm version")](https://npmjs.com/package/@db-ui/foundations "DB UI – on NPM") |
| [components](packages/components)   | [![@db-ui/components on Npmjs](https://img.shields.io/npm/v/@db-ui/components.svg?color=rgb%28237%2C%2028%2C%2036%29 "npm version")](https://npmjs.com/package/@db-ui/components "DB UI – on NPM")  |

## Core principals

<details>
  <summary><strong>
	Consistent & Compliant
	</strong></summary>

DB UI Mono is based on the [DB UX Design System](https://marketingportal.extranet.deutschebahn.com/de/ui-komponenten),
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

As [DB UX Design System](https://marketingportal.extranet.deutschebahn.com/de/ui-komponenten) evolves, so does DB UI
Mono, meaning apps only need to keep their DB UI Mono package updated to ensure the latest look and feel.

</details>

## More information

Additionally we'll provide some more information over time regrading the whole ecosystem:

-   [DB UX Design System documentation within the DB Marketingportal (german)](https://marketingportal.extranet.deutschebahn.com/de/ui-komponenten)
-   [Confluence / Base Wiki - "Technische Umsetzung des Enterprise UI Design Systems" (german, only available internally)](https://db.de/pu8moh)
-   [Confluence - Web UI Component Library (only available internally)](https://db.de/1tyr73)
-   [Changelog](https://github.com/db-ui/core/blob/main/CHANGELOG.md)
-   [Architectural Decision Records](https://github.com/db-ui/core/tree/main/docs/adr)
-   [DB UI Mono 1.x Gitlab repository (only accessible internally)](https://db.de/4cwtyn/)

## Things to keep in mind

### Developed for and driven by the community

This is mainly a platform providing the space and technology for a common basis of curated components; their development
is mainly driven by the community and adapted out of the work done in projects and through the huge amount of feedback
that we're gaining out of the community. So please support us in any way possible, this is greatly appreciated!

## How to start develop / contribute

```Bash
npm install
npm run build
npm run start
```

Please mind the [conventions for git commits](/docs/conventions.adoc#user-content-git-commits-conventions).

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
the ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (german)](https://marketingportal.extranet.deutschebahn.com/de/nutzungsbedingungen)
in case of using them.

For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and
design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme
that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

This especially relates to the files in the directories `/source/fonts/`, `source/images` and `source/samples`
and `source/favicon.ico` as well.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at
our [Contributor Covenant Code of Conduct](CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE), Copyright 2022 by DB Systel GmbH.
