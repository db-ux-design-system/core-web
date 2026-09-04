# Differences in between `stylelint-config-standard-scss` and `stylelint-config-recommended-scss`

## Short version

- `stylelint-config-recommended-scss`
    - Minimal, “avoid bugs” preset for SCSS.
    - Extends the core recommended rules and the SCSS plugin’s recommended rules.
    - Turns off core rules that conflict with SCSS syntax.
    - Little to no stylistic/opinionated formatting. Fewer warnings; great if you use Prettier.

- `stylelint-config-standard-scss`
    - Superset of recommended-scss with opinions.
    - Adds many formatting/convention rules (mostly via `stylelint-stylistic`) for quotes, spacing, commas, hex case/length, newline placement, etc.
    - Still disables core rules that conflict with SCSS, but enforces a consistent style and will surface more issues (mostly auto-fixable).

## Practical guidance

- Use recommended-scss if you want just correctness checks for SCSS and let Prettier handle formatting.
- Use standard-scss if you want Stylelint to also enforce style conventions across SCSS.
- Either SCSS preset avoids CSS‑Nesting‑only checks on .scss files (the “missing scoping root” issue appears when using non‑SCSS presets like `stylelint-config-standard` on SCSS).
