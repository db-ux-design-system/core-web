# ADR-01 - Framework for DB UX Components

## Decision and Rationale

To reduce the amount of time spent writing components for each framework, we use [Mitosis](https://github.com/BuilderIO/mitosis) to build "native" JavaScript framework components.

We chose Mitosis because it is flexible and open source. We took the risk that it is quite new at the moment.

## Problem description and context

We want to ship our DB UX styles based on `css` and `scss` for common frameworks like [Angular](https://angular.io/), [React](https://reactjs.org/), [Vue](https://vuejs.org/) and so on.

To achieve this we started with [Web Components](https://github.com/db-ui/elements) wrapped in "native" components. But we've encountered a number of problems with this approach.

## General conditions and decision criteria

### General conditions

-   "Native" components for every framework
-   Encapsulated from styling
-   Code once, build for many

### Decision Criteria

-   Mitosis generates `.json` files that are compiled into native components for each framework.
-   The plugin structure helps us to create custom outputs for frameworks like Microsoft Power Apps.
-   It's open source and backed by a company.
-   Supports most frameworks and Web Components
-   Issues or pull requests can be created in the Mitosis repo to solve problems.

## Alternatives

### A - Mitosis

#### Evaluation

-   Generated artefacts are "native" to each framework
-   Flexible build system with plugins
-   Builder.io as maintainer
-   TypeScript (tsx)
-   No wired wrappers around Web Components

### B - Stencil

#### Evaluation

-   Generated artefacts are only slightly larger than Vanilla JS
-   Polyfills are handled automatically
-   Flexible build system
-   With Ionic, a larger project is behind it as a maintainer
-   Supports `Sass`
-   TypeScript

## Consequences

-   Mitosis is still in alpha.
-   Changes may occur. This may lead to refactoring on our part.
-   There is no paid support.

## Links

-   [Mitosis](https://github.com/BuilderIO/mitosis)
-   [Stencil](https://stenciljs.com/)
