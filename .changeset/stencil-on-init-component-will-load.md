---
"@db-ux/wc-core-components": patch
---

fix(stencil): emit `onInit` logic as `componentWillLoad`

The Mitosis Stencil generator never read `json.hooks.onInit`, so any logic a
component placed in `onInit` was silently dropped from the Web Components
output. The Stencil plugin now injects a `componentWillLoad()` method carrying
the `onInit` body (the semantic equivalent, running once before the first
render), restoring the missing behavior for `DBPage`, `DBControlPanelDesktop`,
`DBShell` and `DBShellSubNavigation`.
