# Shift-left: HTML → CSS → JS

This document describes the guiding principle for choosing where functionality lives in the **HTML → CSS → JavaScript** stack.

## The principle

Prefer solutions as far "left" (towards HTML) as possible. Each layer to the right adds complexity, runtime cost, and opacity for consumers.

| Layer    | Characteristics                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| **HTML** | Declarative, rendered in component output, adaptable by consumers, SSR/SSG-friendly, most stable and performant |
| **CSS**  | Declarative, hardware-accelerated, no runtime cost, progressively enhanced by the browser                       |
| **JS**   | Imperative, runtime-dependent, invisible to consumers, breaks without hydration, hardest to debug and maintain  |

## Why this matters for a design system

- **Stability**: HTML attributes and CSS properties are standardized, backwards-compatible, and have no runtime failure modes. JavaScript is the most fragile technology in this stack.
- **Performance**: The browser's rendering pipeline is optimized for declarative HTML/CSS. JS-driven DOM manipulation forces layout recalculations and blocks the main thread.
- **SSR/SSG compatibility**: HTML and CSS work without JavaScript execution. Components that rely on JS for rendering or state transitions break in server-rendered or statically-generated environments until hydration completes.
- **Transparency for consumers**: HTML attributes and CSS classes in the component output are part of the public API. Consumers can inspect, override, and style them. JS-only internal state (e.g. toggling `data-*` attributes via `setTimeout`) is opaque, non-portable, and impossible to override without reimplementing the logic.
- **Accessibility**: Declarative browser features automatically manage correct ARIA semantics. When the browser understands the relationship between elements natively (e.g. a button invoking a dialog via Invoker Commands), it handles `aria-expanded`, `aria-controls`, and focus management without manual wiring. JS-driven interactions require developers to replicate this by hand — and often get it wrong or incomplete.
- **Simplicity**: Fewer moving parts means fewer bugs, easier debugging, and less maintenance overhead.

## Rules

1. **HTML and CSS first.** If a native HTML attribute or CSS property can express the behavior, use it.
2. **JS as polyfill only.** JavaScript may polyfill or progressively enhance a feature that is not yet fully supported across the project's [browserslist targets](../.browserslistrc). Treat every JS workaround as temporary — it should be removed once native support lands.
3. **No declarative logic in JS.** Avoid reimplementing in JavaScript what the platform already offers declaratively (e.g. toggling `data-*` attributes on timers to replicate what `transition-behavior: allow-discrete` or `@starting-style` achieve natively in CSS).
4. **Prefer removal over addition.** When a CSS/HTML feature reaches sufficient browser support, remove the JS workaround — even if it already works. Less code is better code.
5. **Progressive enhancement over graceful degradation.** Start with the HTML/CSS. Layer JS on top only where the baseline is insufficient and the enhancement is worth the complexity.

## Examples

| Instead of…                                                 | Prefer…                                                                     |
| ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| JS glue code wiring button click to `dialog.showModal()`    | Invoker Commands (`commandfor`/`command`) — browser manages ARIA implicitly |
| JS `setTimeout` + `dataset` toggling for dialog transitions | `transition-behavior: allow-discrete` + `@starting-style`                   |
| JS scroll listeners to show/hide elements                   | `position: sticky` or scroll-driven animations                              |
| JS-computed responsive layouts                              | CSS container queries or media queries                                      |
| JS-driven open/close state on accordions                    | `<details>`/`<summary>` with CSS transitions                                |
| JS form validation display logic                            | `:user-invalid` / `:user-valid` pseudo-classes                              |
