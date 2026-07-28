# Foundation Token Inconsistencies

Tracking differences between Figma and Code token availability.

## Figma-only tokens (no CSS custom property equivalent)

| Token | Category | Figma Variable Key | Notes |
|-------|----------|-------------------|-------|
| `db-opacity/none` | opacity | `f06e98ba2930b3e2c2ce64024ef407bacaee89c2` | Value is 0 — in code use `opacity: 0` directly |
| `db-spacing/fixed/none` | spacing | `1bc966c4ce29569a4d65020e0fc9439341553db7` | Value is 0 — in code use `gap: 0` / `padding: 0` directly |

## Code-only tokens (no Figma variable equivalent)

| Token | Category | Notes |
|-------|----------|-------|
| `--db-transition-duration-*` | transition | All duration tokens (extra-fast, fast, medium, slow, extra-slow) |
| `--db-transition-timing-*` | transition | All timing tokens (emotional, functional, show, hide) |
| `--db-transition-straight-*` | transition | All composed shorthand transitions |

## Structural differences

| Topic | Figma | Code | Notes |
|-------|-------|------|-------|
| Elevation | Effect Styles (not variables) | CSS custom properties (`--db-elevation-sm/md/lg`) | Different mechanism, same intent |
| Theme collection | Palette primitives (0–14 steps) | CSS custom properties (`--db-{variant}-0` to `-14`) | Theme collection is internal in Figma, not for direct design use |
