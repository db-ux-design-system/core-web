# Component overview pages (prototype)

`generate-overviews.ts` writes the overview page of a component for every Storybook (React, Angular, Vue, Web Components, HTML) and the "Getting Started" page of every framework Storybook – a short entry page that links the setup articles on the Design System Platform.

The `build` and `storybook` scripts of every framework Storybook run the generator for their own Storybook first (`--storybook <name>`), so the pages are always in sync with their sources. The output is git-ignored. It needs the generated example stories:

```shell
pnpm --filter @db-ux/core-components run generate:stories
pnpm --filter react-storybook run build
```

To generate by hand, e.g. a component that is not rolled out yet:

```shell
node storybooks/_shared/overview/generate-overviews.ts [--storybook react-storybook] [component ...]
```

Without components, the generator writes the components listed in `ROLLOUT` in `meta.ts`.

What belongs in Storybook and what on the Design System Platform is described in "Where documentation lives" in the root [`AGENTS.md`](../../../AGENTS.md#where-documentation-lives). Each kind of content has one source:

| Content                                                | Source                                                                 |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| Title                                                  | `export default function DB…` in `<component>.lite.tsx`                |
| Accessibility review                                   | `showcases/patternhub/data/_accessibility-review.json`                 |
| Link to the platform guidelines                        | convention in `meta.ts`, exceptions in `overrides.json`                |
| Summary, status                                        | `overrides.json` in this folder (see below)                            |
| Accessibility, migration                               | `packages/components/src/components/<component>/docs/*.md`             |
| Usage (the examples; "Show code" includes the imports) | the generated example stories, `../storybook-config/source-imports.ts` |
| Properties (React, Angular, Vue)                       | Storybook docgen                                                       |
| Attributes (HTML, Web Components)                      | `<component>.lite.tsx` and `output/stencil/dist/web-types.json`        |
| Design guidelines                                      | the Design System Platform, linked                                     |

`meta.ts` reads the metadata of a component from these sources. `overrides.json` holds only what has no source in this repository: platform paths that differ from the convention (`false` for components without a platform page) and extra packages a component needs (`requires`).

Summary and status are maintained on the Design System Platform (`description` and `status` in the frontmatter of each component page). Until it is decided how Storybook gets them (for example a JSON endpoint of the platform that the generator reads at build time), they are in `overrides.json` for the rolled out components; a component without them shows neither line.

The shared Storybook configuration (light/dark mode, docs page of the example stories) lives in `../storybook-config/` and is copied into every Storybook by `sync.ts`.

## Tests

`../tests/` tests the built Storybooks. The pages are discovered from each build's `index.json`, so new components and Foundations pages are tested without changes.

- `docs.spec.ts`: Getting Started, every component overview and every Foundations page (incl. the test table). Checks for uncaught errors, heading levels, internal links and axe (WCAG AA). Overview pages are also checked for their sections, non-empty previews, guideline links to the platform and axe in dark mode.
- `snippets.spec.ts`: expands every "Show code" of the overview pages and compiles the React (tsc), Angular (ngc with `strictTemplates`) and Vue (vue-tsc) snippets. Web Components and HTML snippets are checked for registration and stylesheet.

```shell
pnpm run build-outputs
pnpm run build-storybooks
pnpm run test:storybooks
```

In CI the tests run in `.github/workflows/02-e2e-storybooks.yml`.

## Composition Storybook: Foundations

`../foundations/` generates the Markdown pages of the composition Storybook:

- `generate-foundations.ts` writes the Foundations pages (`packages/foundations/docs/*.md`). The guides of the Patternhub ("Misc": router usage, custom components, testing, validation, backdrop) are Learn articles on the Design System Platform. The list is `pages.ts`. Run it when a page is added or renamed; content changes show up without it.
- `generate-test-table.ts` writes `Foundations/Test Table` from the test files in `showcases/` and the accessibility reviews. It runs on every build and start of the composition Storybook, the output is git-ignored.
