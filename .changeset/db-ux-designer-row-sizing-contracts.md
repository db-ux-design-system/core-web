---
"@db-ux/agent-cli": patch
---

fix: enforce the row-sizing contracts of a rendered screen

A leaf instance now always ends up hug or fill, never FIXED. Sizing is taken from the chosen
variant's own `width` axis ("full" fills, "auto" hugs) before any per-component list, and anything
still undecided falls back to hug — a `Radio` used to keep the library's 84px and wrap its label
into six one-word lines. New audit check `fixed-width-instance` reports a text-bearing instance
that stayed fixed; icons are exempt because they are intrinsically sized and carry no text.

Two more row-sizing contracts are enforced as well. A hugging container now hugs the GLYPHS of its
Heading/Body children: an untouched text carries its ~500px max width, so a hugging box silently
became ~512px and five stepper items overflowed a 1024px column by more than double. And a `spread`
row that holds a single ACTION now right-aligns it instead of letting SPACE_BETWEEN park it flush
left; a single non-action (a lone page title) stays left. Both are additionally caught by the plan
lint and by two new DECLARATIVE audit checks (`hug-parent-filling-child`,
`single-action-not-right`) — geometry is not settled while a render runs, so the existing measured
`content-overflow` check could report `valid: true` for a frame that was visibly broken. New
`process.navigation-first` block/pattern for a first step whose `Zurück` is dropped.
