# ESLint Plugin Development Rules

When developing new ESLint rules for @db-ux/eslint-plugin:

## Rule Structure

- Place rule files in `packages/eslint-plugin/src/rules/{component}/` folder
- Place test files in `packages/eslint-plugin/test/rules/{component}/` folder
- Use `ESLintUtils.RuleCreator` from `@typescript-eslint/utils`
- Import shared utilities from `../../shared/utils.js`

## Framework Support

Every rule MUST support all three frameworks:

- **React**: PascalCase components (e.g., `<DBButton>`)
- **Angular**: kebab-case with binding syntax (e.g., `<db-button [prop]="value">`)
- **Vue**: PascalCase with binding syntax (e.g., `<DBButton :prop="value">`)

Use the shared utilities:

- `isDBComponent(node, 'DBButton')` - matches both `DBButton` and `db-button`
- `getAttributeValue(node, 'prop')` - matches `prop`, `[prop]`, and `:prop`
- `hasChildOfType(node, 'DBTooltip')` - matches both `DBTooltip` and `db-tooltip`

## Test Requirements

Every rule MUST have tests covering:

1. **Valid cases** for all three frameworks:
    - React example with PascalCase
    - Angular example with kebab-case and `[prop]="value"`
    - Vue example with PascalCase and `:prop="value"`

2. **Invalid cases** for all three frameworks:
    - React example
    - Angular example
    - Vue example

## Documentation Requirements

When adding a new rule:

1. Add rule to `src/index.ts` exports
2. Add rule to `recommended` config in `src/index.ts`
3. Update `README.md` with:
    - Rule name and description
    - Invalid examples for React, Angular, and Vue
    - Valid examples for React, Angular, and Vue

## Example Test Pattern

```typescript
valid: [
  { code: '<DBButton type="button">React</DBButton>' },
  { code: '<db-button type="button">Angular</db-button>' },
  { code: '<DBButton :type="buttonType">Vue</DBButton>' }
],
invalid: [
  { code: '<DBButton>React</DBButton>', errors: [...] },
  { code: '<db-button>Angular</db-button>', errors: [...] },
  { code: '<DBButton>Vue</DBButton>', errors: [...] }
]
```

## Checklist

Before submitting a new rule:

- [ ] Rule file created in `src/rules/{component}/`
- [ ] Test file created in `test/rules/{component}/`
- [ ] Tests include React (PascalCase) examples
- [ ] Tests include Angular (kebab-case + `[prop]`) examples
- [ ] Tests include Vue (PascalCase + `:prop`) examples
- [ ] Rule exported in `src/index.ts`
- [ ] Rule added to `recommended` config
- [ ] README.md updated with all three framework examples
- [ ] Rule uses shared utilities for framework detection
