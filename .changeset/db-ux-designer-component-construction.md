---
"@db-ux/agent-cli": patch
---

docs: add component construction guidelines to the designer power context

`context/design-system/component-construction.md` documents how a DB-UX-compliant component is
BUILT, derived from the Figma "Component Guidelines" page: the four-level anatomy (Component
Container → Row/Column → Content Container → Content), the Content Height model (`CH = Component
Height − 2 × Component Padding`) with the Row/Column/Mixed/Constrained-Content rules, spacing as a
sum of container paddings plus the `Icon → Text = 1/4 max. Line Height` target, reference tables per
size step (3XS–XL) for the standard, content-only and double-line variants, the ≥ 1/4 Component
Height inset for fully rounded components, the nesting reserve (`next-smaller height + 2 × own
padding`) and the Content Indent rule for hierarchical components.

This closes a gap between `layout-guidelines.md` — which states that a component's interior has its
own intrinsic density and is deliberately NOT derived from the page's R — and the per-component
Do/Don't files in `component-guidelines/`, neither of which said how that interior is constructed.
`layout-guidelines.md` now points at the new file from its "Component-Innenraum" section, and the
POWER.md context table lists it.
