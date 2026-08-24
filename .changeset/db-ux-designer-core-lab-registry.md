---
"@db-ux/agent-cli": minor
---

feat: generate the Core Lab registry from the Knowledge Database and make every entry renderable

Core Lab now comes from the Knowledge Database like Core does. `build-from-kb.cjs` used to pass
`conceptComponents` through verbatim, so the registry was a hand-curated subset of 6 while the KB
carried a component-set key for all 17 — which is why an upload was declared "not in the design
system" and rebuilt from an Image grid plus a Button, and a segmented control was assembled from Tag
pairs. Identity (key, figmaName, maturity, slots, sub-components, COMPONENT vs COMPONENT_SET) is
generated; the skill mapping (`planNodeType`, `textProp`, `contentSlot`, notes) stays hand-curated
and is preserved. Axes are the exception and hand-verified values win: the KB's Core Lab axes
disagree with the live library (Container `Vertical|Horizontal` vs. `Column|Row`, Grid without
`Height`, Dialog without `Backdrop`), which would break every container, grid and dialog render.
KB-derived axes are marked `axesUnverified` until checked, and the flag is sticky so a re-run cannot
launder them.

A generic concept render path makes every registered Core Lab component usable by its plan node
type instead of requiring a bespoke case — 11 components had keys and were still unreachable.
Registered and verified against the live library: Breadcrumb, ButtonGroup, Calendar, DynamicButton,
Footer, List, LoadingIndicator, Pulse, SegmentedButton, SplitButton, ToggleButton, Upload. `Upload`
renders `children` into its End Slot with the matching `🎨 Show …` boolean flipped; `form.upload-field`
and `form.attachments` build on it. `List` is a plain COMPONENT, so the runtime picks
`importComponentByKeyAsync` — as a COMPONENT_SET its key reports "not found", which reads like a
stale key.

Render-time capability limits move to the hand-maintained `registries/component-constraints.json`.
`components.json` is regenerated in full from the Knowledge Database and preserves only an allowlist
of hand-curated fields, so a limit stored there was dropped silently — `NAV_MAX_ITEMS` would have
become null and the navigation check would have stopped firing without an error. Tests now assert
the limit is in the skill-owned file and NOT in the generated one.
