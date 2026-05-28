# DB UX Consumer Guidelines

## Components

- Never use native interactive HTML elements (`<button>`, `<input>`, `<select>`, `<textarea>`, `<a>`).
- Always use DB UX equivalents: `DBButton`, `DBInput`, `DBSelect`, `DBTextarea`, `DBLink`.
- Do not replace `<a>` tags used for framework routing (e.g. react-router `<Link>`).

## Tokens

- Never hardcode color values (`#d40000`, `rgb(...)`).
- Never hardcode spacing values (`margin: 15px`).
- Always use `var(--db-*)` CSS custom properties from the design token system.

## Icons

- Never guess or invent icon names.
- Always verify icon names by calling the `list_icons` MCP tool before use.
- Icon names use underscores: `arrow_right`, not `arrow-right` or `arrowRight`.
