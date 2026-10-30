# Shared overview content (prototype)

Framework-independent texts of the component overview pages. Every Storybook (React, Angular, Vue, HTML and the composition Storybook) imports them with `?raw` and renders them with the `Markdown` block, so the text exists once.

- `<component>/intro.md`: description, use cases, status, link to the design guidelines

Accessibility notes and migration guides come from `packages/components/src/components/<component>/docs/` instead, next to the framework docs.

Once the overview pages are generated, the generator writes these texts from the component metadata and this folder goes away.
