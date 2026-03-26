# ESLint Plugin Architecture

## Decision: Unified Plugin (Not Framework-Specific)

### Why Single Plugin?

1. **ESLint's AST is framework-agnostic** - JSX works for React, Vue JSX, and Angular templates (with proper parser)
2. **Single maintenance burden** - One codebase, one set of tests
3. **Consistent rules** - Same validation logic across all frameworks
4. **Easier to extend** - Add new rules once, works everywhere

### Framework Support Strategy

The plugin works across frameworks through **parser configuration**:

- **React/JSX**: Uses `@typescript-eslint/parser` (default)
- **Vue**: Users configure `vue-eslint-parser` in their ESLint config
- **Angular**: Uses `@angular-eslint/template-parser` for templates

### When to Split?

Consider splitting ONLY if:

- Framework-specific syntax requires completely different AST traversal
- Performance issues arise from unified approach
- Maintenance becomes too complex

Currently, **none of these apply** - JSX/TSX is universal enough.

## Rule Structure

Each rule follows this pattern:

```ts
export default createRule({
  name: 'rule-name',
  meta: {
    type: 'problem',
    docs: { description: '...' },
    messages: { ... },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXElement(node) {
        // Validation logic
      }
    };
  }
});
```

## Adding New Rules

1. Create rule file in `src/rules/`
2. Add tests in `test/rules/`
3. Export from `src/index.ts`
4. Document in README.md

## Example: Component Validation Pattern

```ts
// Check component type
if (!isDBComponent(openingElement, "DBButton")) return;

// Get prop values
const noText = getAttributeValue(openingElement, "noText");
const icon = getAttributeValue(openingElement, "icon");

// Check children
const hasTooltip = hasChildOfType(node, "DBTooltip");

// Report issues
if (!hasTooltip) {
	context.report({ node, messageId: "missingTooltip" });
}
```

## Future Extensions

Potential rules to add:

- `input-requires-label` - Ensure form inputs have labels
- `icon-valid-name` - Validate icon names against design system
- `color-prop-valid` - Ensure color props use design tokens
- `spacing-prop-valid` - Validate spacing values
- `accessible-button-text` - Ensure buttons have meaningful text

## Testing Strategy

- Use `@typescript-eslint/rule-tester`
- Test valid and invalid cases
- Cover edge cases (missing props, wrong types, etc.)
- Test across different component syntaxes

## Integration with CI/CD

Add to project's ESLint config and run in CI:

```bash
npm run lint
```

This catches component misuse before code review.
