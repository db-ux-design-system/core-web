# @db-ux/core-stylelint

Stylelint plugin that validates correct usage of DB UX Design System tokens in CSS/SCSS (spacing, sizing, border widths, border radii, border colors).

## Key Facts

- **ESM only** (`"type": "module"`)
- Built with `tsc` to `build/`
- Peer dependency: `stylelint >=14.0.0`

## Scripts

```bash
pnpm run build   # Compile TypeScript
pnpm run test    # Run vitest
```

## Available Rules

| Rule                      | Validates                              |
| ------------------------- | -------------------------------------- |
| `db-ux/use-spacings`      | margins, paddings, gaps                |
| `db-ux/use-sizing`        | height, width, block-size, inline-size |
| `db-ux/use-border-width`  | border-width & border                  |
| `db-ux/use-border-radius` | border-radius                          |
| `db-ux/use-border-color`  | border-color & border                  |

## Structure

```text
src/
├── index.ts        # Plugin entry, exports all rules
└── rules/          # One file per rule
test/               # Vitest tests per rule
```

## Rule Options

Every rule supports:

```json5
{
	"db-ux/use-xxx": [
		true,
		{
			allowCalc: true, // Allow all calc() functions
			ignore: ["test.scss"], // Ignore specific files
			allow: {
				startsWith: ["map.get"],
				includes: ["--custom-gap"],
				exact: ["$custom-padding"]
			}
		}
	]
}
```

## Development Notes

- When adding a new rule, export it from `src/index.ts` and add tests in `test/`
- Rules must handle both CSS and SCSS syntax
- Use `allowCalc` to avoid false positives on complex `calc()` expressions
- Test against `stylelint-config-standard`, `stylelint-config-standard-scss`, and `stylelint-config-standard-vue`
