# Component overview pages

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

Without components, the generator writes every main component (`getStructure()` in `meta.ts`, minus `EXCLUDE`); components without examples are skipped with a warning.

What belongs in Storybook and what on the Design System Platform is described in "Where documentation lives" in the root [`AGENTS.md`](../../../AGENTS.md#where-documentation-lives). Each kind of content has one source:

| Content                                                | Source                                                                 |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| Title                                                  | `export default function DB…` in `<component>.lite.tsx`                |
| Accessibility review                                   | `showcases/patternhub/data/_accessibility-review.json`                 |
| Summary, status, link to the guidelines                | `/api/components.json` of the Design System Platform (see below)       |
| Accessibility, migration                               | `packages/components/src/components/<component>/docs/*.md`             |
| Usage (the examples; "Show code" includes the imports) | the generated example stories, `../storybook-config/source-imports.ts` |
| Properties (React, Angular, Vue)                       | Storybook docgen                                                       |
| Attributes (HTML, Web Components)                      | `<component>.lite.tsx` and `output/stencil/dist/web-types.json`        |
| Design guidelines                                      | the Design System Platform, linked                                     |

`meta.ts` reads the metadata of a component from these sources. `overrides.json` holds only what has no source in this repository: the main component of a part when the name does not tell it (`partOf`), platform paths that differ from the convention (`platformPath`, `false` for components without a platform page, `platformUrl` for a full URL) and extra packages a component needs (`requires`).

Parts (e.g. `tab-item`, `table-row`) get no page of their own; they are documented on the page of their main component: their examples in "Usage" (`DBTabItem: Behavior`), their properties or attributes as `### DBTabItem` below the table of the main component (anchor `#dbtabitem`, linked from the platform), their migration below `### DBTabItem` in "Migration", and their names in the "Parts" line below the title, so the Storybook search finds the page. A component is a part of another when its name starts with the other name plus `-`, or when it has `partOf`. `node storybooks/_shared/overview/generate-overviews.ts --structure` prints the result.

Summary and status are maintained on the Design System Platform (`description` and `status` in the frontmatter of each component page). The platform publishes them with the URL of each page as `/api/components.json`; `meta.ts` loads it at build time. `DB_UX_PLATFORM_URL=http://localhost:4329` uses a local platform build instead. When the endpoint is not reachable (offline, or before it is released), the pages show neither summary nor status, and the guidelines link falls back to the URL convention in `meta.ts` and the exceptions in `overrides.json`.

The shared Storybook configuration (light/dark mode, docs page of the example stories) lives in `../storybook-config/` and is copied into every Storybook by `sync.ts`.

## Tests

`../tests/` tests the built Storybooks. The pages are discovered from each build's `index.json`, so new components and Foundations pages are tested without changes.

- `docs.spec.ts`: Getting Started, every component overview and every Foundations page (incl. the test table). Checks for uncaught errors, heading levels, internal links and axe (WCAG AA). Overview pages are also checked for their sections, non-empty previews, the guidelines link to the platform (when the component has a platform page), a section with anchor and table for every part, and axe in dark mode.
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
