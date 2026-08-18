# Screen Automated Reader Enhanced Development (scare devs 🦁🔥💀)

## Install

```shell
npx playwright install
pnpm exec guidepup setup
pnpm exec guidepup install
```

If errors occur after the automatic setup of Guidepup (e.g. no connection to VoiceOver), the setup must be executed manually. See [instructions](https://www.guidepup.dev/docs/guides/manual-voiceover-setup).

## Start

Start a test with these commands (ensure a build or start a watcher previous to running these commands to ensure that any expected changes within the code base will be reflected):

### MacOS

```shell
pnpm run --filter=react-showcase test-sr:macos-- --ui
```

### Windows

```shell
pnpm run --filter=react-showcase test-sr:windows --ui
```

## Navigation commands: don't only step with `next()`

If a component renders **landmarks** (`<nav>`, `<main>`, or a top level `<header>` as banner), **headings** (`h1`-`h6`, `role="heading"`) or **links**, a test that only walks element by element (`next()` / `previous()`) verifies what gets announced, but not that the element is exposed with the right semantics. Guidepup also offers quick navigation, mirroring what screen reader users actually do:

| Method                        | NVDA      | VoiceOver                                     |
| ----------------------------- | --------- | --------------------------------------------- |
| `nextHeading([options])`      | `H`       | `VO-Command-H`                                |
| `previousHeading([options])`  | `Shift-H` | `VO-Command-Shift-H`                          |
| `nextLink([options])`         | `K`       | `VO-Command-L`                                |
| `previousLink([options])`     | `Shift-K` | `VO-Command-Shift-L`                          |
| `nextLandmark([options])`     | `D`       | `VO-Command-N` (next auto web spot)           |
| `previousLandmark([options])` | `Shift-D` | `VO-Command-Shift-N` (previous auto web spot) |

Prefer these for the structural hops and keep `next()` for the element level announcements you actually want to assert. It saves the long `next()` chains whose step counts diverge per reader anyway (VoiceOver stops at "list end" / "navigation end" boundaries, NVDA folds them into one phrase).

**A shared hop does not guarantee a shared destination.** The heading and link methods map to both readers' native quick navigation, so they line up. `nextLandmark()` / `previousLandmark()` do not: on VoiceOver they drive auto web spots, a heuristic superset of landmarks.
If the page has an auto web spot that is not a landmark, one hop stops on a different element than NVDA's `D`, and a shared assertion then snapshots unrelated content. So verify the VoiceOver destination separately before sharing a landmark hop between both branches (run the macOS test and read its snapshot), and keep the reader-specific branches when they diverge.

### A `<header>` is only a landmark at top level

`<header>` maps to the banner role **only** when it is not nested inside `<main>`, `<article>`, `<aside>`, `<nav>` or `<section>`. Nested ones expose no landmark at all, so a landmark hop will never find them - this applies to `DBNotification` and `DBDrawerHeader`, and to `DBHeader` itself depending on where it is used.

The same component can therefore differ per test route: the screen reader tests use the `?page=` routes, which render the example without the `DBPage` wrapper, so `DBHeader` sits at top level and is a banner. The aria snapshot tests use the wrapped route and scope the snapshot to `main` (see `runAriaSnapshotTest` in `showcases/e2e/default.ts`), which is why the committed `DBHeader` aria snapshot contains `navigation "Functional"` but no banner. Check the actual nesting on the route your test loads before expecting a landmark.

### Only entering a landmark names it

A screen reader names the landmark type when the cursor **enters** it from outside. Hopping while already inside the landmark just moves to its start and announces the element found there, which does **not** prove the role:

```text
"Functional, navigation landmark, list, with 2 items, ..."   <- role confirmed
"Imprint, same page, link"                                   <- only a position, role unproven
```

So place the hop so it crosses into the landmark from outside it (e.g. from the preceding sibling, or from the previous component instance on the example page). If a snapshot entry does not contain the landmark type, it does not assert the landmark, and a regression to `<main>` or a named region would pass unnoticed.

### Assert roles with aria snapshots instead

Spoken phrases are the wrong tool for a plain "is this element exposed as role X" check. Use the aria snapshot tests (`*-aria-snapshot.spec.ts`, see `showcases/playwright.aria-snapshots.ts`) for that; they capture the accessibility tree directly. Keep the screen reader tests for what only a screen reader shows: wording, order, and announced state.

## Gotchas

- Local: Don't switch in between your windows while testing, it will capture only your current screen
- We should avoid auto-generate tests, because they take a lot of time.
- NVDAs `next` command is equivalent of executing Down Arrow - Won't work with radio/select as you might expect
- One simple test takes about 1 minute in CI ⬅ so you should only provide test important things

## More information

We use this [survey](https://webaim.org/projects/screenreadersurvey10/) to reduce amount of tests (only for VoiceOver and NVDA).

> Most common screen reader and browser combinations:

| Screen Reader & Browser | # of Respondents | % of Respondents |
| ----------------------- | ---------------- | ---------------- |
| NVDA with Chrome        | 323              | 21.3%            |
| NVDA with Firefox       | 152              | 10.0%            |
| VoiceOver with Safari   | 107              | 7.0%             |
| NVDA with Edge          | 75               | 5.0%             |
| VoiceOver with Chrome   | 30               | 2.0%             |

> What operating system are you on when using your primary desktop/laptop screen reader?

| Response | # of respondents | % of respondents |
| -------- | ---------------- | ---------------- |
| Windows  | 1311             | 86.1%            |
| Mac      | 146              | 9.6%             |
| Linux    | 44               | 2.9%             |
| Other    | 21               | 1.4%             |

Conclusion: We only test Chrome for Windows and Safari for MacOS because these are the most common combinations.
