# ADR-01 - Framework for DB UX Components

## Decision and Rationale

To reduce the amount of time spent writing components for each framework, we use [Mitosis](https://github.com/BuilderIO/mitosis) to build "native" JavaScript framework components.

We chose Mitosis because it is flexible and open source. We took the risk that it is quite new at the moment.

## Problem description and context

We want to ship our DB UX styles based on `css` and `scss` for common frameworks like [Angular](https://angular.io/), [React](https://reactjs.org/), [Vue](https://vuejs.org/) and so on.

To achieve this we started with [Web Components](https://github.com/db-ui/elements).
But we've encountered a number of problems with this approach:

- No auto-complete in IDE: Without `.d.ts` files you aren't able to use TypeScript properly
- No specific framework solutions, for example Angular [Reactive Forms](https://angular.io/guide/reactive-forms)
- Wrapping Components for React: Because of the virtual DOM Events need some wrapping, even [Lit](https://lit.dev/docs/frameworks/react/) needs this
- Composition of nested Components (Accordion & AccordionItem etc.): Writing a components with Shadow DOM and nesting is complex and time-consuming

## General conditions and decision criteria

### General conditions

- "Native" components for every framework
- Encapsulated from styling
- Code once, build for many

### Decision Criteria

- Mitosis generates `.json` files that are compiled into native components for each framework
- Supports most frameworks and Web Components
- New frameworks can be adopted very easily
- Generates "real" native components for frameworks
- Consuming Developer Experience
- Out-of-the-box support for SSR/SSG inside popular Frameworks like [Next](https://nextjs.org/)/[Nuxt](https://nuxt.com/)

#### Why did we switch from Stencil to Mitosis?

Because of the developers consuming the components. We discovered that developers don't feel comfortable using Web Components inside their framework (Angular, React, Vue) projects.

Even with some wrappers around we didn't achieve a good developer experience. Therefore, the developers started to use our styles and writing custom components in their desired framework.

So we noticed the most important thing is to have a good developer experience, otherwise we don't get the time saving potential and consistency of a design system.

To summarize, we need "real" native components to be successful. So the only remaining option is to write the components in any popular framework or to have the components generated. We see the potential to save time by generating components with mitosis, and we have the option of integrating new frameworks relatively easily.

We still expect Web Components to be the perfect solution for the future, but especially as React doesn't support them so far, we're still blocked at the moment for a full buy-in.

## Alternatives

### A - Mitosis

#### Evaluation

- Generated artifacts are "native" to each framework
- Flexible build system with plugins
- Builder.io as maintainer
- TypeScript (tsx)
- No weird wrappers around Web Components

### B - Stencil

#### Evaluation

- Generated artifacts are only slightly larger than Vanilla JS
- Polyfills are handled automatically
- Flexible build system
- With Ionic, a larger project is behind it as a maintainer
- Supports `Sass`
- TypeScript

## Consequences

- Mitosis is still in alpha.
- Changes may occur. This may lead to refactoring on our part.
- There is no paid support.

## Links

- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Stencil](https://stenciljs.com/)
