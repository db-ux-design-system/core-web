# One slot name = one position (web components)

**Try not to render the same `<Slot name="…" />` (same name) twice in a component.** React, Vue and Angular render slot content once per site, so a duplicated slot appears twice in the DOM. Web components cannot do that: slotted content is a single real DOM node, so it exists at exactly one position. Which of the duplicated slots receives it is decided by the compiler — the DOM standard assigns a slottable to the _first_ matching slot in tree order, but Stencil has changed this in a minor release before ([stenciljs/core#6815](https://github.com/stenciljs/core/pull/6815) flipped it to last-wins in 4.44.0).

The failure mode is silent: no build error, no runtime warning, content simply renders in the wrong place. It surfaced once as a 44px layout shift on every page of the stencil showcase, visible only as a ~6% pixel diff in the visual regression tests.

The same applies to the default slot: `props.children` rendered twice fills only one position in the web component output.

## The fix pattern (`configs/plugins/stencil/slot-names.cjs`)

Give each position its own slot name – if it can't be unique, differentiate **for the stencil output only** by adding a rule to the `stencil-slot-names` Mitosis plugin. The shared `.lite.tsx` and the React/Vue/Angular APIs stay unchanged while the web component gains an independently fillable position.

`DBHeader` renders `metaNavigation` and `secondaryAction` in the header bar and again inside the drawer, so the drawer occurrences are renamed:

```js
const SLOT_RENAMES = {
	DBHeader: [
		{
			slot: "metaNavigation",
			to: "mobileMetaNavigation",
			withinClass: "db-header-drawer-navigation"
		},
		{
			slot: "secondaryAction",
			to: "mobileSecondaryAction",
			withinComponent: "DBDrawerFooter"
		}
	]
};
```

Anchor each rule (`withinClass` or `withinComponent`) on something that only exists at the position you want to rename, so the other occurrences can never match. The plugin throws when a rule does not match exactly one slot, because a silently skipped rename is how this regresses.

Rules when applying this:

- Do **not** add such transformations to `scripts/post-build/` — that pipeline is deprecated (see the note in [`AGENTS.md`](../AGENTS.md)). A Mitosis plugin also runs before generation, so the renamed slots reach the generated `@slot` docs, the CEM, `web-types.json` and the VS Code data automatically.
- Always give the rule a `description`. The manifest resolves a slot's description from the member of `<Component>Props` with the same name (`output/stencil/scripts/packageLinkPhase.js`), so the plugin adds the renamed slot as a documented member of the props type in the **stencil output's** `model.ts`. Without it the slot ships with a `TODO: Add description for …` placeholder in the published manifest — which is what the older `navigation-item` `expandButton` rename still does, since it is not documented at all there.
- Document the web-component-only slot in the `model.ts` JSDoc of the original prop, so consumers of every package learn about the difference. Do not add a prop for it — that would surface it in the React, Vue and Angular types.
- Add a placement assertion so a broken anchor is caught in the browser too — see `showcases/e2e/header/header-aria-snapshot.spec.ts`, which runs for every showcase including stencil.
- Changeset scope: only `@db-ux/wc-core-components`, `minor` (a new slot, nothing removed).
