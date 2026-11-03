# Component overview pages (prototype)

`generate-overviews.ts` writes the overview page of a component for every Storybook (React, Angular, Vue, Web Components, HTML) and the "Getting Started" page of every framework Storybook.

```shell
pnpm --filter @db-ux/core-components run generate:stories
node storybooks/_shared/overview/generate-overviews.ts button
```

Each kind of content has one source:

| Content                                       | Source                                                          |
| --------------------------------------------- | --------------------------------------------------------------- |
| Summary, status, accessibility review         | `components.json` in this folder                                |
| Usage per framework, accessibility, migration | `packages/components/src/components/<component>/docs/*.md`      |
| Examples                                      | the generated example stories                                   |
| Properties (React, Angular, Vue)              | Storybook docgen                                                |
| Attributes (HTML, Web Components)             | `<component>.lite.tsx` and `output/stencil/dist/web-types.json` |
| Design guidelines                             | the Design System Platform, linked                              |

The generated files are committed and carry a "do not edit" note. If the approach is adopted, the generator moves into the Mitosis Storybook plugin and runs with `generate:stories`.

The shared Storybook configuration (light/dark mode, docs page of the example stories) lives in `../storybook-config/` and is copied into every Storybook by `sync.ts`.
