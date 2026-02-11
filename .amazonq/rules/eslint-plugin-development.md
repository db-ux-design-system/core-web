# ESLint Plugin Development Rules

When developing new ESLint rules for @db-ux/eslint-plugin:

## Rule Structure

- Place rule files in `packages/eslint-plugin/src/rules/{component}/` folder
- Place test files in `packages/eslint-plugin/test/rules/{component}/` folder
- Use standard rule format (not `ESLintUtils.RuleCreator`)
- Import shared utilities from `../../shared/utils.js`
- Import constants from `../../shared/constants.js`

## Framework Support

Every rule MUST support all three frameworks:

- **React**: PascalCase components (e.g., `<DBButton>`)
- **Angular**: kebab-case with binding syntax (e.g., `<db-button [prop]="value">`)
- **Vue**: PascalCase with binding syntax (e.g., `<DBButton :prop="value">`)

### Shared Utilities

- `isDBComponent(node, COMPONENTS.DBButton)` - matches both `DBButton` and `db-button`
- `getAttributeValue(node, 'prop')` - matches `prop`, `[prop]`, `:prop`, and handles empty string for boolean attributes
- `hasChildOfType(node, COMPONENTS.DBTooltip)` - matches both `DBTooltip` and `db-tooltip`
- `createAngularVisitors(context, COMPONENTS.DBButton, handler)` - creates Angular-specific visitors with parser services
- `defineTemplateBodyVisitor(context, templateVisitor, scriptVisitor)` - handles Vue, Angular, and JSX

### Constants

- Use `COMPONENTS` from `constants.js` for component names (e.g., `COMPONENTS.DBButton`)
- Use `MESSAGES` from `constants.js` for error messages
- Use `MESSAGE_IDS` from `constants.js` for message identifiers

## Rule Implementation Pattern

```typescript
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

export default {
	meta: {
		type: 'problem',
		docs: {
			description: 'Rule description',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#rule-name'
		},
		fixable: 'code', // optional
		messages: {
			[MESSAGE_IDS.YOUR_MESSAGE_ID]: MESSAGES.YOUR_MESSAGE
		},
		schema: []
	},
	create(context: any) {
		// Angular handler with parser services
		const angularHandler = (node: any, parserServices: any) => {
			const value = getAttributeValue(node, 'prop');
			if (!value) {
				const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
				context.report({
					loc,
					messageId: MESSAGE_IDS.YOUR_MESSAGE_ID
				});
			}
		};

		const angularVisitors = createAngularVisitors(context, COMPONENTS.DBButton, angularHandler);
		if (angularVisitors) return angularVisitors;

		// React/Vue handler
		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBButton)) return;

			const value = getAttributeValue(openingElement, 'prop');
			if (!value) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.YOUR_MESSAGE_ID
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkComponent, Element: checkComponent },
			{ JSXElement: checkComponent }
		);
	}
};
```

## Adding New Messages

1. Add message to `MESSAGES` object in `src/shared/constants.ts`
2. Add corresponding ID to `MESSAGE_IDS` object
3. Use the constant in your rule: `[MESSAGE_IDS.YOUR_ID]: MESSAGES.YOUR_MESSAGE`

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

1. Add rule to `src/index.ts` imports
2. Add rule to `plugin.rules` object in `src/index.ts`
3. Add rule to `recommended.rules` config in `src/index.ts`
4. Update `README.md` with:
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

## Important Notes

- Angular boolean attributes return empty string `''` - handle with `attr.value === undefined || attr.value === ''`
- Use `createAngularVisitors` for Angular support - it handles kebab-case conversion for components starting with `DB`
- Always use `COMPONENTS` constants instead of hardcoded strings
- Always use `MESSAGE_IDS` and `MESSAGES` from constants
- For Angular, use `parserServices.convertNodeSourceSpanToLoc(node.sourceSpan)` for location
- For React/Vue, use `node: openingElement` for location

## Checklist

Before submitting a new rule:

- [ ] Rule file created in `src/rules/{component}/`
- [ ] Test file created in `test/rules/{component}/`
- [ ] Messages added to `src/shared/constants.ts`
- [ ] Rule uses `COMPONENTS` constants
- [ ] Rule uses `MESSAGE_IDS` and `MESSAGES` constants
- [ ] Angular support via `createAngularVisitors`
- [ ] Vue/React support via `defineTemplateBodyVisitor`
- [ ] Tests include React (PascalCase) examples
- [ ] Tests include Angular (kebab-case + `[prop]`) examples
- [ ] Tests include Vue (PascalCase + `:prop`) examples
- [ ] Rule imported in `src/index.ts`
- [ ] Rule added to `plugin.rules` object
- [ ] Rule added to `recommended` config
- [ ] README.md updated with all three framework examples
