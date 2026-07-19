# Shift-left: HTML → CSS → JS

This document describes the guiding principle for choosing where functionality lives in the **HTML → CSS → JavaScript** stack.

## The principle

Prefer solutions as far "left" (towards HTML) as possible. Each layer to the right adds complexity, runtime cost, and opacity for consumers.

Web development is fundamentally about giving suggestions to the user agent regarding the user experience a page should be consumed with, adapted to a specific user's context: device, settings, browser and OS defaults, assistive technology, viewport size, and more. For us, it's all about context, and all of these are part of that context, just as much as the context of components nested into each other.

The beauty of this paradigm is that we develop our system as declarative boilerplate, and developers consuming our library bring their own context. A public-facing app might need broad browser support; a business portal might enforce a single browser. Tools like PostCSS or LightningCSS can transform our declarative CSS to match each consumer's browser targets — not including polyfills and downlevel syntax they don't need at all. JS workarounds, by contrast, always ship to everyone regardless, adding dead weight in contexts where native support already exists.

| Layer    | Characteristics                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| **HTML** | Declarative, rendered in component output, adaptable by consumers, SSR/SSG-friendly, most stable and performant |
| **CSS**  | Declarative, hardware-accelerated, no runtime cost, progressively enhanced by the browser                       |
| **JS**   | Imperative, runtime-dependent, invisible to consumers, breaks without hydration, hardest to debug and maintain  |

## Why this matters for a design system

- **Stability**: HTML attributes and CSS properties are standardized, backwards-compatible, and have no runtime failure modes. JavaScript is the most fragile technology in this stack.
- **Performance**: The browser's rendering pipeline is optimized for declarative HTML/CSS. JS-driven DOM manipulation forces layout recalculations and blocks the main thread.
- **Bundle size**: Every line of JS ships to every user and must be parsed, compiled, and executed. CSS that browsers don't support is simply ignored — there's no equivalent of "dead CSS crashing your app."
- **SSR/SSG compatibility**: HTML and CSS work without JavaScript execution. Components that rely on JS for rendering or state transitions break in server-rendered or statically-generated environments until hydration completes.
- **Transparency for consumers**: HTML attributes and CSS classes in the component output are part of the public API. Consumers can inspect, override, and style them. JS-only internal state (e.g. toggling `data-*` attributes via `setTimeout`) is opaque, non-portable, and impossible to override without reimplementing the logic.
- **Discoverable interactions**: Declarative connections between elements (e.g. `<button commandfor="my-drawer" command="show-modal">`) are visible directly in the rendered markup — in Storybook, in DevTools, in view-source. Developers can see _what triggers what_ without tracing through JS event handlers. This makes component APIs self-documenting and examples copy-pasteable.
- **Accessibility**: Declarative browser features automatically manage correct ARIA semantics. When the browser understands the relationship between elements natively (e.g. a button invoking a dialog via Invoker Commands), it handles `aria-expanded`, `aria-controls`, and focus management without manual wiring. JS-driven interactions require developers to replicate this by hand — and often get it wrong or incomplete.
- **Testability**: HTML/CSS behavior is verifiable via snapshot and visual regression tests without mocking timers or async state. JS logic requires unit tests with fake DOM environments and often flaky timer-dependent assertions.
- **Debugging**: DevTools show computed CSS live and allow real-time edits. JS state requires breakpoints, console logs, or framework-specific DevTools. For consumers of a design system, CSS is inspectable and overridable; JS internals are a black box.
- **Simplicity**: Fewer moving parts means fewer bugs, easier debugging, and less maintenance overhead.

## Rules

1. **HTML and CSS first.** If a native HTML attribute or CSS property can express the behavior, use it.
2. **JS as polyfill only.** JavaScript may polyfill or progressively enhance a feature that is not yet fully supported across the project's [browserslist targets](../.browserslistrc). Treat every JS workaround as temporary — it should be removed once native support lands.
3. **No declarative logic in JS.** Avoid reimplementing in JavaScript what the platform already offers declaratively (e.g. toggling `data-*` attributes on timers to replicate what `transition-behavior: allow-discrete` or `@starting-style` achieve natively in CSS).
4. **Prefer removal over addition.** When a CSS/HTML feature reaches sufficient browser support, remove the JS workaround — even if it already works. Less code is better code.
5. **Progressive enhancement over graceful degradation.** Start with the HTML/CSS. Layer JS on top only where the baseline is insufficient and the enhancement is worth the complexity.

## Examples

| Instead of…                                                    | Prefer…                                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| JS glue code wiring `button` click to `dialog`                 | Invoker Commands (`commandfor`/`command`) — browser manages ARIA implicitly                     |
| JS glue code wiring `button` click to `popover`                | Popover API (`popover`/`popovertarget`/`popovertargetaction`) — browser manages ARIA implicitly |
| JS glue code wiring `button`, `a` or `area` hover to `popover` | Interest invoker (`interestfor`) — browser manages ARIA implicitly                              |
| JS `setTimeout` + `dataset` toggling for dialog transitions    | `transition-behavior: allow-discrete` + `@starting-style`                                       |
| JS to close `dialog` on backdrop click                         | `dialog[closedby="any"]`                                                                        |
| JS to link accordion panels into exclusive groups              | Multiple named `<details>` elements (`name` attribute)                                          |
| JS scroll listeners to show/hide elements                      | `position: sticky` or scroll-driven animations                                                  |
| JS positioning logic for tooltips/popovers (edge cases)        | CSS Anchor Positioning (`anchor()`, `position-area`)                                            |
| JS-computed responsive layouts                                 | CSS container queries or media queries                                                          |
| JS-driven open/close state on accordions                       | `<details>`/`<summary>` with CSS transitions                                                    |
| JS form validation display logic                               | `:user-invalid` / `:user-valid` pseudo-classes                                                  |
| JS keyboard arrow-key navigation in toolbars/tablists          | `focusgroup` attribute                                                                          |
| JS counting siblings for nth-based styling                     | `sibling-count()` / `sibling-index()` CSS functions                                             |
| JS measuring target height for collapse animations             | `interpolate-size: allow-keywords` — transition `height: 0` to `height: auto` directly          |
| JS scroll event listeners for header shrink/reveal             | Scroll-driven animations (`animation-timeline: scroll()`)                                       |
| JS-managed focus traps or disabling sibling interaction        | `inert` attribute on sibling content                                                            |

## Progressive enhancement without JS fallback

Some native features are **complementary enhancements** — they improve UX where supported but don't require a JS polyfill because the baseline experience is already acceptable. When browser vendors ship support (sometimes nearly in parallel), users benefit automatically without any code change on our side.

Use these features directly. Do not implement JS fallbacks for them.

| Feature                                 | What it enhances                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------ |
| CSS `field-sizing: content`             | Inputs/textareas auto-size to their content — graceful fallback is fixed-width fields      |
| `hidden="until-found"`                  | Content inside collapsed sections is searchable via find-in-page — fallback is just hidden |
| Customizable `<select>` elements        | Fully styleable dropdowns — fallback is the native platform select UI                      |
| `<select multiple size="1">` desktop UX | Compact multi-select on desktop — fallback is the standard scrollable listbox              |

## Resources

- [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance/) — Google's AI skill for all AI environments that provides up-to-date guidance on modern HTML, CSS, and JS platform features. Developers should install it to get suggestions aligned with this shift-left philosophy.
- ["The Layers Of The Web"](https://youtu.be/ll1e8cYx3do?si=6pJCs_P6AKZimiRX), a talk given by Jeremy Keith at [Beyond Tellerrand](https://beyondtellerrand.com/).
